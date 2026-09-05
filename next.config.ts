import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Smaller production image for Dokploy / Docker
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
