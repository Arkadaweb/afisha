/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['estel-print.arkada-web-studio.ru'],
    // domains: ['arkadawebstudio.ru'],
    domains: [String(process.env.HOST_SERVER1)],
  },
}

module.exports = nextConfig
