import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import SEO from '../components/SEO';

// --- IMPORT MASTER DATA ---
import { DUBAI_AREAS as MASTER_DB } from '../data/emiratesData';

const ExploreAreas = () => {
  const [expandedEmirates, setExpandedEmirates] = useState({});
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const toggleEmirate = (emirate) => {
    setExpandedEmirates(prev => ({
      ...prev,
      [emirate]: !prev[emirate]
    }));
  };

  // Helper to group areas by Emirate
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

  const exploreSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "UAE Real Estate Investment Areas 2026",
    "description": "Comprehensive list of 77+ investment areas across Dubai, Abu Dhabi, Sharjah and all UAE emirates with ROI data, price analysis, and investment scores.",
    "url": "https://www.realestateiq.ae/areas",
    "numberOfItems": MASTER_DB.length,
    "itemListElement": MASTER_DB.slice(0, 10).map((area, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": area.name,
      "url": `https://www.realestateiq.ae/area/${area.id}`,
      "description": `${area.name}, ${area.emirate} — Average ROI: ${area.roi || "N/A"}, Category: ${area.category || "Investment"}`
    }))
  };

  const exploreBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.realestateiq.ae" },
      { "@type": "ListItem", "position": 2, "name": "UAE Areas Explorer", "item": "https://www.realestateiq.ae/areas" }
    ]
  };

  return (
    <div className="min-h-screen bg-background fade-in">
      <SEO 
        title="UAE Real Estate Areas Explorer 2026 — Dubai, Abu Dhabi & All Emirates ROI"
        description="Explore 77+ investment areas across all UAE emirates. Compare rental yields (6–11%), average property prices, and investment scores for Dubai, Abu Dhabi, Sharjah, and beyond. Free, verified data for 2026."
        url="/areas"
        schema={exploreSchema}
        faqSchema={[
          {
            question: "Which UAE emirate has the highest rental yield in 2026?",
            answer: "Dubai leads with rental yields of 7–11% in areas like JVC, Sports City, and Dubai Studio City. Ras Al Khaimah offers emerging yields of 8–10%. Abu Dhabi offers stable 6–8% yields backed by government infrastructure."
          },
          {
            question: "How many freehold areas are available in UAE for foreign investors?",
            answer: "There are 40+ designated freehold zones in Dubai alone, including Downtown Dubai, Dubai Marina, Palm Jumeirah, JVC, Business Bay, and DIFC. These allow 100% foreign ownership. RealEstateIQ tracks 77+ areas across all UAE emirates."
          }
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(exploreBreadcrumb) }} />

      <section className="relative overflow-hidden section-warm py-24 min-h-[40vh] flex items-center">
        {/* We use a fallback color if the background image isn't available */}
        <div className="absolute inset-0 bg-[#E6B76A] bg-cover bg-center bg-no-repeat opacity-[0.1]" style={{ backgroundImage: "url('/dubai-area-bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-[#FDFBF7]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,223,160,0.3)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 w-full z-10">
          <h1 className="display-medium text-[#1C1C22] mb-6">
            Area <span className="gold-gradient">Explorer</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#7A6E60] leading-relaxed font-light">
            Explore detailed real estate intelligence for every area across all seven UAE emirates. Select an area below to dive into deep analytics.
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
                {/* Emirate Header Banner */}
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${featuredStyle ? "relative overflow-hidden rounded-3xl p-8 mb-6 border border-[rgba(198,167,94,0.25)] shadow-[0_15px_40px_rgba(198,167,94,0.1)] bg-white" : "mb-4"}`}>
                  {featuredStyle && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                        style={{ backgroundImage: `url('${featuredStyle.image}')` }}
                      />
                      <div className={`absolute inset-0 ${featuredStyle.overlay}`} />
                    </>
                  )}

                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-[#1C1C22] font-heading mb-1">{emirateName}</h2>
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#C6A75E]/70">{areasForEmirate.length} areas analyzed</p>
                  </div>

                  <span className="hidden items-center gap-1 text-sm font-medium text-[#C6A75E] sm:flex relative z-10">
                    View Market Intel <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Areas Grid for this Emirate */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {(expandedEmirates[emirateName] ? areasForEmirate : areasForEmirate.slice(0, 6)).map((area) => (
                    <Link
                      key={area.id}
                      to={`/area/${area.id}`}
                      className="glass-card-hover group flex items-start gap-4 p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(198,167,94,0.12)] border border-[rgba(198,167,94,0.25)] transition-all duration-500 group-hover:bg-[rgba(198,167,94,0.22)]">
                        <MapPin className="h-5 w-5 text-[#C6A75E]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-[#1C1C22] tracking-tight">{area.name}</h3>

                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-[#7A6E60]">Avg Price</p>
                            <p className="text-xs font-semibold text-[#1C1C22]">{area.avgPrice}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-[#7A6E60]">Avg Rent</p>
                            <p className="text-xs font-semibold text-[#1C1C22]">{area.avgRent}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-[#7A6E60]">ROI</p>
                            <p className="text-xs font-semibold text-emerald-600">{area.roi}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* VIEW MORE TOGGLE */}
                {areasForEmirate.length > 6 && (
                  <div className="mt-8 flex justify-center">
                    <button 
                      onClick={() => toggleEmirate(emirateName)}
                      className="group flex items-center gap-2 rounded-full border border-[rgba(198,167,94,0.3)] bg-white px-8 py-3 text-sm font-bold text-[#1C1C22] shadow-sm transition-all hover:bg-[#C6A75E] hover:text-white hover:shadow-lg active:scale-95"
                    >
                      {expandedEmirates[emirateName] ? (
                        <>View Fewer Areas <ChevronUp size={16} /></>
                      ) : (
                        <>View More Areas <ChevronDown size={16} /></>
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