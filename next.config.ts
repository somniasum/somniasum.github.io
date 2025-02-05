import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Enable static export
  assetPrefix: isProd ? "https://somniasum.github.io/" : "", // Replace with your GitHub Pages URL
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
