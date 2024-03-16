/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    images: {
        // domains: ['estel-print.arkada-web-studio.ru'],
        // domains: ['arkadawebstudio.ru'],
        // domains: ['https://afisha.arkada-web-studio.ru'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'afisha.arkada-web-studio.ru',
                port: '',
                // pathname: '/account123/**',
            }
        ]
    },
}

module.exports = nextConfig
