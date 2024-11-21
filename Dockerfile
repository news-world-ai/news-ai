# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
RUN apk add --no-cache netcat-openbsd && \
    npm install -g prisma ts-node typescript

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY next.config.* ./
COPY postcss.config.* ./
COPY tailwind.config.* ./

# Install all dependencies (including devDependencies)
RUN npm install --legacy-peer-deps

# Generate Prisma Client
RUN npx prisma generate

# Copy source code
COPY src ./src
COPY public ./public

# Build Next.js application
RUN npm run build

# Production stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install netcat and prisma
RUN apk add --no-cache netcat-openbsd && \
    npm install -g prisma

# Copy package files and install production dependencies
COPY package*.json ./
COPY prisma ./prisma/

# Install production dependencies
RUN npm install --production --legacy-peer-deps

# Generate Prisma Client in production
RUN npx prisma generate

# Copy necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src/data ./src/data

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/newsai"

# Create start script
RUN printf '#!/bin/sh\necho "Waiting for PostgreSQL to start..."\n\
while ! nc -z postgres 5432; do\n\
  sleep 1\n\
done\n\
echo "PostgreSQL started"\n\
npx prisma migrate deploy\n\
npm start' > /app/start.sh && \
chmod +x /app/start.sh

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["/app/start.sh"]
