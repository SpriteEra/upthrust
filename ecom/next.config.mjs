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



// next.config.mjs
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   compress: true,                      // ✅ Enable gzip/brotli compression

//   images: {
//     formats: ["image/avif", "image/webp"],  // ✅ AVIF first (40% smaller than WebP)
//     qualities: [60, 75, 85],
//     minimumCacheTTL: 31536000,         // ✅ Cache images for 1 year
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256],
//     remotePatterns: [
//       { protocol: "https", hostname: "*.ngrok-free.app" },
//       { protocol: "https", hostname: "*.ngrok.io" },
//       { protocol: "https", hostname: "upthrustvideocdn.b-cdn.net" }, // ✅ Add CDN
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           { key: "X-Content-Type-Options", value: "nosniff" },
//           { key: "X-Frame-Options", value: "SAMEORIGIN" },
//         ],
//       },
//       {
//         // ✅ Cache static assets aggressively
//         source: "/(.*)\\.(webp|avif|png|jpg|jpeg|svg|ico|woff2|woff)",
//         headers: [
//           { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
//         ],
//       },
//     ];
//   },

//   experimental: {
//     optimizeCss: true,                 // ✅ Inline critical CSS automatically
//     optimizePackageImports: [          // ✅ Tree-shake heavy packages
//       "lucide-react",
//       "framer-motion",
//       "gsap",
//       "swiper",
//     ],
//   },
// };

// export default nextConfig;