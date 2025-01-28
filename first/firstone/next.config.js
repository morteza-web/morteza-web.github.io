/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    // Optional: Configure how static exports are generated
    // trailingSlash: true,

    // Optional: Customize export behavior
    images: {
        unoptimized: true, // Required for static exports
    },
};

module.exports = nextConfig;
