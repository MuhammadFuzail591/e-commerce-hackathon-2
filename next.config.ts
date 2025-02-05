import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // Optional: Leave empty if not using a specific port
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;