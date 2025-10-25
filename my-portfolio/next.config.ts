import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // Enable static export
    images: {
        unoptimized: true, // Required for static export
    },
    basePath: '/My_Portfolio', // Replace with YOUR repository name
    assetPrefix: '/My_Portfolio/', // Replace with YOUR repository name
};

export default nextConfig;
