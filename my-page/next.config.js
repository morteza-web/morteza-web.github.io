/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static exports
    
    // Optional: Configure how static exports work
    trailingSlash: true,

    distDir: "dist",
    
    // Optional: Configure image optimization for static exports
    images: {
      unoptimized: true
    }
  }
  
  module.exports = nextConfig