# Production stage only - no build stage needed since we're mounting .next
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install netcat
RUN apk add --no-cache netcat-openbsd

# Set DATABASE_URL for Prisma
ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/newsai"

# Copy package files and prisma schema
COPY package*.json ./
COPY prisma ./prisma/

# Install production dependencies only
RUN npm install --production --legacy-peer-deps

# Generate Prisma Client
RUN npx prisma generate

# Copy necessary files
COPY public ./public
COPY src/data ./src/data

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create start script
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
