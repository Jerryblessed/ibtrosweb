/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,   // ← turn off the “N” badge
  },
  experimental: {
    turbo: true,            // ensure you’re still using turbopack if you want
  },
};

module.exports = nextConfig;
