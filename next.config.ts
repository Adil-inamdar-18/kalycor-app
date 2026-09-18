import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // The landing and for-business pages pull photos straight from Pexels.
    // `unoptimized` keeps them working without a host allow-list; remove it
    // and the remotePatterns below take over with Next's image optimizer.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
};

export default nextConfig;
