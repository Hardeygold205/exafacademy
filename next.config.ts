import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lms.extensionafrica.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
