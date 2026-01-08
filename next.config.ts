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
      {
        protocol: "https",
        hostname: "lookaside.fbsbx.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lookaside.instagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "farmingfirst.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ifpri.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "growingafrica.pub",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
