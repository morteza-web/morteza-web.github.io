/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enable static exports

    distDir: "dist",

    // Optional: Configure image optimization for static exports
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
