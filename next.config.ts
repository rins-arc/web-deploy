import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'placehold.co'], // Menambahkan domain Cloudinary
  },
  
};

export default nextConfig;
