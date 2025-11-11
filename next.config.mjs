/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your GitHub Pages URL is https://username.github.io/LeanAI/
  // uncomment the line below and set the basePath
  // basePath: '/LeanAI',
  // trailingSlash: true,
};

export default nextConfig;

