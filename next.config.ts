import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ask.amankhannpl.com",
          },
        ],
        destination: "/ask/:path*",
      },
    ];
  },
};

export default nextConfig;