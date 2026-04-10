import React from 'react';
import SEO from '../components/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { EmiratesSection } from '../components/home/EmiratesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RealEstateIQ",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AED"
    },
    "description": "Free AI-powered Dubai Real Estate Investment Tool for analyzing Builders and Area ROI."
  };

  return (
    <div className="fade-in bg-[#F8F5EF] font-sans text-[#1C1C22]">
      <SEO 
        title="RealEstateIQ | Free AI Dubai Real Estate Investment Tool" 
        description="Stop guessing. Access 100% free verified rental yields, ROI forecasts, and compare top builders. The ultimate platform for Indian, European, and Global investors."
        schema={structuredData}
      />

      {/* --- 1. LIVE MARKET TICKER --- */}
      <div className="bg-[#1C1C22] text-[#F8F5EF]/60 text-[10px] md:text-xs py-2 overflow-hidden border-b border-[rgba(198,167,94,0.3)]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 animate-pulse">
            <span className="flex items-center gap-1 text-[#C6A75E] font-bold"><div className="w-1.5 h-1.5 rounded-full bg-[#E6B76A]"></div> Market Active</span>
            <span className="hidden md:inline">Dubai Transactions (24h): <span className="text-white">AED 1.2B</span></span>
            <span className="hidden md:inline">Top Gainer: <span className="text-[#C6A75E]">Palm Jebel Ali (+4.2%)</span></span>
          </div>
          <div className="flex gap-4">
             <span>Data updated: <span className="text-white">Live</span></span>
          </div>
        </div>
      </div>

      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <EmiratesSection />
      <TestimonialsSection />
      <CTASection />
      
    </div>
  );
};

export default HomePage;