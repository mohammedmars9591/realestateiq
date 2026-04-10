import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-warm py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(198,167,94,0.35)] bg-gradient-to-br from-[#FDF8EF] to-[#F4EDE2] p-12 sm:p-20 shadow-[0_20px_70px_rgba(198,167,94,0.15)]">
          {/* Warm radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,223,160,0.3)_0%,_transparent_70%)]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="display-medium text-[#1C1C22] mb-6">
                Ready to Make <span className="gold-gradient">Data-Driven</span> Property Decisions?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[#7A6E60] leading-relaxed font-light">
                Join thousands of investors, agents, and developers who use RealEstateIQ to gain a competitive edge in the UAE property market.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <Link to="/areas" className="btn-primary group inline-flex items-center gap-3 text-sm flex-1 sm:flex-none justify-center">
                  Start Exploring <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/compare" className="btn-secondary inline-flex items-center gap-3 text-sm flex-1 sm:flex-none justify-center">
                  Compare Markets
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
