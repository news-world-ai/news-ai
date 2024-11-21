import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
  },
  // Configure webpack to handle markdown and assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: 'asset/resource',
    });

    return config;
  },
  // Enable experimental features
  experimental: {
    optimizeCss: true,
  },
  // Configure static file serving
  async rewrites() {
    return [
      {
        source: '/articles/:path*',
        destination: '/data/articles/:path*'
      }
    ];
  },
  // Copy the articles directory to the build output
  distDir: '.next',
  poweredByHeader: false,
};

export default nextConfig;
