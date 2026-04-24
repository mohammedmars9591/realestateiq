/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabling experimental and forcing transpilation for stability
  transpilePackages: ['lucide-react', 'recharts', 'react-leaflet', 'leaflet'],
  serverExternalPackages: ['jspdf', 'html2canvas'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
