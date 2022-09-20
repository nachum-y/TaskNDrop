/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['ca.slack-edge.com','res.cloudinary.com'],
  },
}

module.exports = nextConfig
