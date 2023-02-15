// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     compiler: {
//         // Enables the styled-components SWC transform
//         styledComponents: true,
//     },
// };

// module.exports = nextConfig;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
    assetPrefix: isProd ? "/Creeper315/beautiful-site-1" : "",
    images: {
        unoptimized: true,
    },
};
