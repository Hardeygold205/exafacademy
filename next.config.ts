import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "academy.extensionafrica.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
