import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "i.pravatar.cc",
      "images.unsplash.com",
      "cdn.sanity.io",
    ],
  },
};

export default nextConfig;
