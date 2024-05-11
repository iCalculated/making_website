/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/scrapbook",
        destination:
          "https://www.figma.com/file/5v5Y8XMrT9Ib0rvYgx7pSK/making%40umn-scrapbook?type=whiteboard&node-id=0-1&t=wbUKxpi9vYK8YhAS-0",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
