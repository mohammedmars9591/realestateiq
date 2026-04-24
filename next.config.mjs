/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      root: '.',
    },
  },
  serverExternalPackages: ['jspdf', 'html2canvas'],
};

export default nextConfig;
