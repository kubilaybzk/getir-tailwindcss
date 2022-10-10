/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/getir-tailwindcss",
  assetPrefix: "/getir-tailwindcss",
};

module.exports = nextConfig;