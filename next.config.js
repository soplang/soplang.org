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
  // Redirect routes for success-stories and contribute to prevent access
  async redirects() {
    return [
      {
        source: "/success-stories",
        destination: "/",
        permanent: false,
      },
      {
        source: "/success-stories/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/contribute",
        destination: "/",
        permanent: false,
      },
      {
        source: "/contribute/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/community/contribute",
        destination: "/community",
        permanent: false,
      },
      // Redirect forums to GitHub Discussions
      {
        source: "/community/forums",
        destination: "https://github.com/orgs/soplang/discussions",
        permanent: false,
      },
      {
        source: "/community/forums/:path*",
        destination: "https://github.com/orgs/soplang/discussions",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
