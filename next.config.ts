import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['heroui.com', 'firebasestorage.googleapis.com']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'heroui.com',
    //     port: '',
    //     pathname: '/**',
    //     search: '',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'firebasestorage.googleapis.com',
    //     port: '',
    //     pathname: '/**',
    //     search: '',
    //   },
    // ],
  },
};

export default nextConfig;
