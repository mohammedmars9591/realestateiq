"use client";

import React from 'react';
import { HeroSection } from '../src/components/home/HeroSection';
import { StatsSection } from '../src/components/home/StatsSection';
import { FeaturesSection } from '../src/components/home/FeaturesSection';
import { EmiratesSection } from '../src/components/home/EmiratesSection';
import { TestimonialsSection } from '../src/components/home/TestimonialsSection';
import { CTASection } from '../src/components/home/CTASection';

const HOME_FAQ = [
  {
    question: "What is the best area to invest in Dubai in 2026?",
    answer: "The top investment areas in Dubai for 2026 are Business Bay (7.5–9% ROI), JVC (9–11% ROI), Dubai Marina (6.5–8% ROI), and Palm Jumeirah (5–7% ROI + capital appreciation). For affordable high-yield, Dubai Studio City and Sports City offer 9%+ ROI. Use RealEstateIQ's free comparison tool to compare any two areas side-by-side."
  },
  {
    question: "Which Dubai real estate developer is the most reliable in 2026?",
    answer: "Emaar Properties (Trust Score 9.8/10, 100% delivery rate) and Aldar Properties (Abu Dhabi government-backed) are the most reliable developers in UAE. Sobha Realty is ranked highest for build quality (10/10). For speed, Binghatti delivers projects ahead of schedule with a 100% on-time record."
  },
  {
    question: "Is Dubai real estate a good investment in 2026?",
    answer: "Yes. Dubai real estate offers 6–11% net rental yields — among the highest globally — with zero property tax, zero capital gains tax, and 10-year Golden Visa eligibility for properties over AED 2M. The market saw 97,000+ transactions in 2024 worth AED 600B+, with sustained demand from expats and institutional investors."
  }
];

const HomePage = () => {
  return (
    <div className="fade-in bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] font-sans text-[#3A3125]">
      
      {/* --- 1. LIVE MARKET TICKER --- */}
      <div className="bg-[#3A3125] text-white/40 text-[10px] md:text-xs py-2.5 overflow-hidden border-b border-[rgba(198,167,94,0.1)]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#C6A75E] font-black uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] animate-pulse"></div> Market Active</span>
            <span className="hidden md:inline uppercase tracking-widest font-bold opacity-80">Dubai Transactions (24h): <span className="text-white text-xs">AED 1.2B</span></span>
          </div>
          <div className="flex gap-4 uppercase tracking-widest font-black text-[9px]">
             <span className="opacity-40 text-white">Data updated: <span className="text-[#C5A367]">Live</span></span>
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
