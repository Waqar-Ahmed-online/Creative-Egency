import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Cloudinary (final images)
      { protocol: "https", hostname: "res.cloudinary.com" },
      // Abhi ke temporary placeholders — Cloudinary ma shift hone ke bad hata sakte ho
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
