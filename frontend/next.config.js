/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: '',
}

module.exports = nextConfig 