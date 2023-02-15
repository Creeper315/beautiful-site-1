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
    assetPrefix: isProd ? "/your-github-repo-name/" : "",
    images: {
        unoptimized: true,
    },
};
