/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['swiper'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;