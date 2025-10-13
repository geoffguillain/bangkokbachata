import type { NextConfig } from "next";

// Next.js Configuration
const nextConfig: NextConfig = {
  output: 'export',
  // Use environment variable for base path, fallback to empty string locally
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Use environment variable for asset prefix, fallback to empty string locally
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
