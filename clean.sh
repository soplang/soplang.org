#!/bin/bash
# Script to clean Next.js and Webpack caches
echo "Cleaning caches..."

# Remove Next.js build output
if [ -d ".next" ]; then
    rm -rf .next
    echo "Removed .next directory"
fi

# Remove node_modules cache
if [ -d "node_modules/.cache" ]; then
    rm -rf node_modules/.cache
    echo "Removed node_modules/.cache directory"
fi

echo "Cache cleaned successfully! Restart server."
echo "bun run dev"
