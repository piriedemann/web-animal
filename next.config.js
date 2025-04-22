/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/web-animales' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/web-animales/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 