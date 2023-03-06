/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.animestore.docomo.ne.jp",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
