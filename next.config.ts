import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Intercepts anyone coming from the ask subdomain
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ask.amankhannpl.com',
          },
        ],
        // Silently rewrites the destination to your /ask subpage
        destination: '/ask/:path*',
      },
    ];
  },
};

export default nextConfig;