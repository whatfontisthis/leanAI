/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/LeanAI',
  trailingSlash: true,
};

export default nextConfig;

