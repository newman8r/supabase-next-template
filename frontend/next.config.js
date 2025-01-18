/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 