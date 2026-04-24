"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { DUBAI_AREAS as MASTER_DB } from '../../src/data/emiratesData';

const ExploreAreas = () => {
  const [expandedEmirates, setExpandedEmirates] = useState({});

  const toggleEmirate = (emirate) => {
    setExpandedEmirates(prev => ({
      ...prev,
      [emirate]: !prev[emirate]
    }));
  };

  const emirateNames = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah', 'Ajman', 'Fujairah', 'Umm Al Quwain'];
  
  const featuredEmirateStyles = {
    'Dubai': {
      image: "/dubai-bg.png",
      overlay: "bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/97 to-[#FDFBF7]/50",
    },
    'Sharjah': {
      image: "/sharjah-bg.png",
      overlay: "bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/92 to-[#FDFBF7]/28",
    },
    'Ras Al Khaimah': {
      image: "/ras-al-khaimah-bg.png",
      overlay: "bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/94 to-[#FDFBF7]/36",
    },
    'Abu Dhabi': {
      image: "/abu-dhabi-bg.png",
      overlay: "bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/95 to-[#FDFBF7]/40",
    },
    'Ajman': {
      image: "/ajman-bg.png",
      overlay: "bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/95 to-[#FDFBF7]/42",
    },
    'Fujairah': {
      image: "/fujairah-bg.png",
      overlay: "bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/94 to-[#FDFBF7]/40",
    },
    'Umm Al Quwain': {
      image: "/umm-al-quwain-bg.png",
      overlay: "bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/95 to-[#FDFBF7]/44",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] fade-in pb-20">
      
      <section className="relative overflow-hidden py-24 min-h-[40vh] flex items-center bg-[#F3E9D2]">
        <div className="absolute inset-0 bg-[#C6A75E] bg-cover bg-center bg-no-repeat opacity-[0.06]" style={{ backgroundImage: "url('/dubai-area-bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,223,160,0.3)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 w-full z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,167,94,0.35)] bg-white/40 backdrop-blur-md px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A3125]">
            <MapPin size={12} className="text-[#C6A75E]" /> National Market Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#3A3125] leading-tight mb-4 tracking-tight">
            Area <span className="gold-gradient">Explorer</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#5A4F40] leading-relaxed font-light">
            Explore detailed real estate intelligence for 77+ investment zones across all seven UAE emirates. Select an area below to dive into deep institutional-grade analytics.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-10">
          {emirateNames.map((emirateName) => {
            const areasForEmirate = MASTER_DB ? MASTER_DB.filter(a => a.emirate === emirateName) : [];
            if (areasForEmirate.length === 0) return null;

            const featuredStyle = featuredEmirateStyles[emirateName];

            return (
              <div key={emirateName} className="mb-8 animate-in slide-in-from-bottom-4 duration-500">
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${featuredStyle ? "relative overflow-hidden rounded-[2.5rem] p-10 mb-8 border border-white shadow-[0_15px_40px_rgba(198,167,94,0.08)] bg-white/40 backdrop-blur-md transition-all hover:shadow-[0_15px_40px_rgba(198,167,94,0.15)]" : "mb-4"}`}>
                  {featuredStyle && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
                        style={{ backgroundImage: `url('${featuredStyle.image}')` }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/95 to-transparent`} />
                    </>
                  )}

                  <div className="relative z-10">
                    <h2 className="text-4xl font-serif font-bold text-[#3A3125] mb-2">{emirateName}</h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E]">{areasForEmirate.length} ANALYZED DISTRICTS</p>
                  </div>

                  <span className="hidden items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#3A3125] sm:flex relative z-10 group/btn bg-white/60 px-5 py-2 rounded-full border border-white cursor-pointer transition-all hover:bg-[#3A3125] hover:text-white">
                    Market Intel <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {(expandedEmirates[emirateName] ? areasForEmirate : areasForEmirate.slice(0, 6)).map((area) => (
                    <Link
                      key={area.id}
                      href={`/area/${area.id}`}
                      className="group flex items-start gap-4 p-6 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C6A75E]/10 border border-[#C6A75E]/20 transition-all duration-500 group-hover:bg-[#C6A75E] group-hover:text-white">
                        <MapPin className="h-5 w-5 text-[#C6A75E] group-hover:text-white" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-serif font-bold text-[#3A3125] tracking-tight">{area.name}</h3>

                        <div className="mt-4 grid grid-cols-3 gap-3">
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">Price</p>
                            <p className="text-[11px] font-bold text-[#3A3125]">{area.avgPrice}</p>
                          </div>
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">Rent</p>
                            <p className="text-[11px] font-bold text-[#3A3125]">{area.avgRent}</p>
                          </div>
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">ROI</p>
                            <p className="text-[11px] font-black text-emerald-600">{area.roi}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {areasForEmirate.length > 6 && (
                  <div className="mt-8 flex justify-center">
                    <button 
                      onClick={() => toggleEmirate(emirateName)}
                      className="group flex items-center gap-3 rounded-full border border-[rgba(198,167,94,0.3)] bg-white/40 backdrop-blur-md px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#3A3125] shadow-sm transition-all hover:bg-[#3A3125] hover:text-[#C6A75E] hover:border-[#3A3125] active:scale-95"
                    >
                      {expandedEmirates[emirateName] ? (
                        <>Collapse Districts <ChevronUp size={16} /></>
                      ) : (
                        <>Explore All {areasForEmirate.length} Districts <ChevronDown size={16} /></>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ExploreAreas;
