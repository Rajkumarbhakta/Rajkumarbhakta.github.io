import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static export cannot run the optimizer, so images are served as-is.
    unoptimized: true,
    // next/image still validates remote hostnames even when unoptimized.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

export default nextConfig;
