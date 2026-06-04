import type { NextConfig } from "next";


const nextConfig = {
  reactStrictMode: false, // Disabling Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
      },
      {
        protocol: "https",
        hostname: "img.kwcdn.com",
      }
    ],
  },
};

export default nextConfig;
