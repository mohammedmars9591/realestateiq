/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- NEXT.JS 14 STABILIZATION ---
  experimental: {
    serverComponentsExternalPackages: ['jspdf', 'html2canvas'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
