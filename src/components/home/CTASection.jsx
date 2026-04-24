import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-warm py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(198,167,94,0.35)] bg-gradient-to-br from-[#FDF8EF] to-[#F4EDE2] p-8 sm:p-20 shadow-[0_20px_70px_rgba(198,167,94,0.15)]">
          {/* Warm radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,223,160,0.3)_0%,_transparent_70%)]" />
 
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#3A3125] leading-tight mb-8 tracking-tight">
                Secure Your <span className="gold-gradient">Alpha District</span> Position
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[#5A4F40] leading-relaxed font-light">
                Join institutional and global HNWIs who use RealEstateIQ to gain a structural competitive edge in the complex UAE property market.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link to="/areas" className="bg-[#3A3125] text-[#C6A75E] hover:bg-[#2A231A] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all inline-flex items-center gap-3">
                  Start Analysis <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/compare" className="bg-white/40 backdrop-blur-md border border-white/60 text-[#3A3125] hover:bg-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm transition-all inline-flex items-center gap-3">
                  Market Battleground
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-end relative h-[300px]">
              {/* Fallback Glass Card Graphic since image might be missing */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-96 glass-card border border-[rgba(198,167,94,0.3)] shadow-[0_30px_60px_rgba(198,167,94,0.25)] rounded-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white/50 backdrop-blur-xl flex flex-col gap-4">
                  <div className="h-40 bg-[rgba(198,167,94,0.1)] rounded-xl w-full border border-[rgba(198,167,94,0.2)] animate-pulse"></div>
                  <div className="h-6 w-3/4 bg-[rgba(198,167,94,0.2)] rounded-md"></div>
                  <div className="h-4 w-1/2 bg-[rgba(198,167,94,0.1)] rounded-md"></div>
                  <div className="mt-auto grid grid-cols-2 gap-2">
                     <div className="h-10 bg-[rgba(198,167,94,0.1)] rounded-md"></div>
                     <div className="h-10 bg-[rgba(198,167,94,0.1)] rounded-md"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
