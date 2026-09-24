import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // The landing and for-business pages pull photos straight from Pexels;
    // remotePatterns below allow-lists that host so Next's built-in image
    // optimizer (resizing, modern formats, lazy loading) applies to those
    // as well as to every local image under /public used across the site.
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
