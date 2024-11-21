#!/bin/bash

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Run seed script
npx prisma db seed
