import type {NextConfig} from 'next';
require('dotenv').config();

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Workaround for Windows file system issues
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Disable build diagnostics to avoid Windows file system issues
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  webpack: (config, { isServer }) => {
    // Workaround for Windows file system issues
    if (isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.git/**'],
      };
    }
    return config;
  },
};

export default nextConfig;
