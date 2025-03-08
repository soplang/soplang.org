#!/bin/bash

# Set environment variables to help with hydration issues
export NODE_ENV=development
export NEXT_PUBLIC_SUPPRESS_HYDRATION_WARNING=true

# Start the Next.js development server
echo "Starting Soplang.org development server..."
npm run dev 