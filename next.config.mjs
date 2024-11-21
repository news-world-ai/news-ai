/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'edition.cnn.com',
        pathname: '/**',
      }
    ],
  },
  // Production URL configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://newzuk.com' : '',
  // Enable hostname rewrites
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.newzuk.com',
          },
        ],
        destination: 'https://newzuk.com/:path*',
      },
    ];
  },
};

export default nextConfig;
