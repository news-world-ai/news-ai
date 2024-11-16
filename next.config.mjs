/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      }
    ],
  },
  // Ensure output is configured for Vercel
  output: 'standalone',
  // Enable static optimization
  reactStrictMode: true,
  swcMinify: true,
  // Configure trailing slashes
  trailingSlash: false,
  // Configure powered by header
  poweredByHeader: false,
};

export default nextConfig;
