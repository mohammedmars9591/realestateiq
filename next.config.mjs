/** @type {import('next').NextConfig} */
const nextConfig = {
  // Resetting to standard config to resolve lucide-react resolution errors
  serverExternalPackages: ['jspdf', 'html2canvas'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
