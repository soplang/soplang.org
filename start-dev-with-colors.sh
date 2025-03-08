#!/bin/bash

# Set environment variables to help with hydration issues
export NODE_ENV=development
export NEXT_PUBLIC_SUPPRESS_HYDRATION_WARNING=true

# Print color information
echo "Starting Soplang.org development server with custom colors:"
echo "Primary Color: #1E3A8A (Default blue)"
echo "Secondary Color: #F59E0B (Default orange)"
echo ""

# Start the Next.js development server
echo "Starting development server..."
npm run dev 