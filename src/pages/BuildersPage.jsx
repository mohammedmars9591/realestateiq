import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardHat, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

import { BUILDERS } from '../data/buildersData';

const BuildersPage = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedBuilders = useMemo(() => {
    const list = Array.isArray(BUILDERS) ? BUILDERS : [];
    return [...list].sort((a, b) => Number(b?.overallDeveloperScore ?? 0) - Number(a?.overallDeveloperScore ?? 0));
  }, []);

  const visibleBuilders = showAll ? sortedBuilders : sortedBuilders.slice(0, 12);

  const buildersListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'UAE Real Estate Developers 2026',
    numberOfItems: (Array.isArray(BUILDERS) ? BUILDERS.length : 0),
    itemListElement: (Array.isArray(BUILDERS) ? BUILDERS : []).slice(0, 10).map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      url: `https://www.realestateiq.ae/builder/${b.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] fade-in">
      <SEO
        title="UAE Developers Explorer 2026 — Trust Scores, Reviews & Delivery Confidence"
        description="Explore and compare top UAE real estate developers with trust scores, ESG signals, and delivery confidence. Dive into each developer profile for detailed intelligence."
        url="/builders"
        schema={buildersListSchema}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden section-warm py-24 min-h-[40vh] flex items-center">
        <div
          className="absolute inset-0 bg-[#E6B76A] bg-cover bg-center bg-no-repeat opacity-[0.1]"
          style={{ backgroundImage: "url('/dubai-area-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,223,160,0.3)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 w-full z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,167,94,0.3)] bg-white/40 backdrop-blur-md px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#3A3125]">
            <HardHat size={12} className="text-[#C6A75E]" /> Unified Developer Intelligence
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#3A3125] leading-tight mb-6 tracking-tighter">
            Architects of the <br/><span className="gold-gradient">UAE Landscape</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-[#5A4F40] leading-relaxed font-light">
            Real-time institutional analysis of major builders. Our AI-driven scoring engine evaluates trust, delivery velocity, and ESG compliance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleBuilders.map((builder) => (
            <Link
              key={builder.id}
              to={`/builder/${builder.id}`}
              className="group flex flex-col p-6 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] shadow-sm transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-1.5"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3A3125]/5 border border-[#3A3125]/10 transition-all duration-500 group-hover:bg-[#C6A75E] group-hover:text-white">
                  <HardHat className="h-6 w-6 text-[#C6A75E] group-hover:text-white" strokeWidth={1.5} />
                </div>
                <div className="text-[9px] font-black uppercase tracking-widest bg-[#C6A75E] text-white px-3 py-1.5 rounded-full shadow-sm">
                   2026 Alpha Grade
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-serif font-bold text-[#3A3125] tracking-tight mb-1">{builder.name}</h3>

                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#5A4F40]/40 mb-6">
                  <span>{builder.origin || 'UAE'}</span>
                  <span className="w-1 h-1 rounded-full bg-[#C6A75E]/40" />
                  <span>Market Leader</span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#3A3125]/5">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">Trust</p>
                    <p className="text-xs font-bold text-emerald-600">{(builder.scores?.trust ?? 9.5)}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">ESG</p>
                    <p className="text-xs font-bold text-[#3A3125]">{(builder.esgRating ?? 8.2)}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">AI Score</p>
                    <p className="text-xs font-bold text-[#C6A75E]">{(builder.aiConfidence ?? 94)}%</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {sortedBuilders.length > 12 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 rounded-full border border-[rgba(198,167,94,0.3)] bg-white/40 backdrop-blur-md px-12 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#3A3125] shadow-xl transition-all hover:bg-[#3A3125] hover:text-[#C6A75E] hover:border-[#3A3125] active:scale-95"
            >
              {showAll ? (
                <>Contract View <ChevronUp size={16} /></>
              ) : (
                <>Expand Market Intelligence <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BuildersPage;
