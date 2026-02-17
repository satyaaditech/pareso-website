/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/pareso-website',
  assetPrefix: '/pareso-website/',
};

export default nextConfig;
