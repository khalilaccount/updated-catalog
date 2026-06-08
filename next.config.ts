import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disabling Strict Mode as requested
  images: {
    remotePatterns: [
      // --- Your Existing Allowed Hostnames ---
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
      },
      // --- New Additions from Seeded Catalog Data ---
      {
        protocol: "https",
        hostname: "www.tuniprint.pro",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.manutan.be",
      },
      {
        protocol: "https",
        hostname: "digiprint.tn",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "ctstunisie.com",
      },
    ],
  },
};

export default nextConfig;