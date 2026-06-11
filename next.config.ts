import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Désactivation du Strict Mode
  images: {
    remotePatterns: [
      // --- Hostnames déjà autorisés ---
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

      // --- Nouveaux domaines pour Cachets et Accessoires ---
      {
        protocol: "https",
        hostname: "cdn.alkor-groupe.com",
      },
      {
        protocol: "https",
        hostname: "www.trodat.net",
      },
      {
        protocol: "https",
        hostname: "librairiebouarroudj.com",
      },
      {
        protocol: "https",
        hostname: "le-tampon-francais.fr",
      },
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.acrylite.co",
      },
      {
        protocol: "https",
        hostname: "www.lfc.com.sg",
      },
      {
        protocol: "https",
        hostname: "image.made-in-china.com",
      }
    ],
  },
};

export default nextConfig;
