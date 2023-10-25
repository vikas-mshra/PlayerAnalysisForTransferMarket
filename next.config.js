/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["img.a.transfermarkt.technology"],
  },
};

module.exports = nextConfig;
