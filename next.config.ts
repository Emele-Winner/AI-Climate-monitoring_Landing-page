// filepath: next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AI-Climate-monitoring_Landing-page/' : '', // Replace 'your-repo'
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/AI-Climate-monitoring_Landing-page' : '', // Replace 'your-repo'
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};

export default nextConfig;