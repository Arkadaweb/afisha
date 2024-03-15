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
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next',
                    outputPath: 'static/videos/',
                    name: '[name].[ext]',
                },
            },
        });

        return config;
    },
}

module.exports = nextConfig
