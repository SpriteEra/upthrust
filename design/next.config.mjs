/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 100],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "*.ngrok-free.app",
    },
    {
      protocol: "https",
      hostname: "*.ngrok.io",
    },
  ],
};

export default nextConfig;
