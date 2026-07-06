import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ask.amankhannpl.com',
          },
        ],
        destination: 'https://meet-aman-portfolio.streamlit.app/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;