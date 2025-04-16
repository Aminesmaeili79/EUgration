import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  /* config options here */
  images: {
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com",
      "aceternity.com",
      "mumabroad.com",
    ],
  },
};

export default nextConfig;
