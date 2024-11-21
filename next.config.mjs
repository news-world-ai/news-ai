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
  // Remove assetPrefix completely as it's causing issues with asset loading
  // Handle rewrites only if specifically needed for production domain
  rewrites: async () => {
    if (process.env.NODE_ENV === 'production' && process.env.DOMAIN) {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: `www.${process.env.DOMAIN}`,
            },
          ],
          destination: `https://${process.env.DOMAIN}/:path*`,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
