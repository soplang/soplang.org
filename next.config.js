/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Add configuration to help with hydration issues
  experimental: {
    // This helps with hydration issues by making React more tolerant of differences
    optimizeCss: true,
    // Improve client-side rendering performance
    optimizeServerReact: true,
  },
}

module.exports = nextConfig 