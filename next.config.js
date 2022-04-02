const withPWA = require("next-pwa");
module.exports = withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    },
    compiler: {
      removeConsole: {
        exclude: ['error'],
      },
    },
    swcMinify: true,
    images: {
      formats: ['image/avif', 'image/webp'],
    },
    images: {
      minimumCacheTTL: 60,
    },
  });