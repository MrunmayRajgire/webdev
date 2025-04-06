/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.upload.wikimedia.org',
        port: '',
      },
    ],
  },};

export default nextConfig;
