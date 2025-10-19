import type { NextConfig } from "next";

// Next.js Configuration
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bangkokbachata',
  assetPrefix: '/bangkokbachata/',
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
