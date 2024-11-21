# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install netcat and other required packages
RUN apk add --no-cache netcat-openbsd

# Set DATABASE_URL for Prisma generate
ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/newsai"

# First, copy only package files and prisma schema
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install --legacy-peer-deps

# Generate Prisma Client
RUN npx prisma generate

# Now copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Install netcat
RUN apk add --no-cache netcat-openbsd

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src/data ./src/data

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/newsai"

# Create start script in /app directory
WORKDIR /app
RUN printf '#!/bin/sh\n\
echo "Waiting for PostgreSQL to start..."\n\
while ! nc -z postgres 5432; do\n\
  sleep 1\n\
done\n\
echo "PostgreSQL started"\n\
npx prisma migrate deploy\n\
npx prisma db seed\n\
npm start' > /app/start.sh && \
chmod +x /app/start.sh

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["/app/start.sh"]
