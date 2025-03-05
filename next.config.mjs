/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "1vmw7h21w4.ufs.sh",
                port: "/*",
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
