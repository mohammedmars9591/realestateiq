import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import AIChatWidget from '../src/components/AIChatWidget';

export const metadata = {
  title: 'RealEstateIQ | Premium UAE Property Intelligence 2026',
  description: 'The UAE\'s premier AI-powered real estate investment intelligence platform. Institutional-grade analytics, FutureScope forecasts, and ROI heatmaps.',
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F8F5EF] text-[#1C1C22] font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <AIChatWidget />
        </div>
      </body>
    </html>
  );
}
