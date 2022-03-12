/** @type {import('next').NextConfig} */
const withCSS = require("@zeit/next-css");
const nextConfig = {
  reactStrictMode: false,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]"
      }})
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  generateBuildId: async () => {
    return 'tripler-app'
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx'],

}

module.exports = nextConfig
