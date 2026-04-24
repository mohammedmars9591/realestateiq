import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardHat, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

import { BUILDERS } from '../data/buildersData';

const GROUPS = [
  {
    key: 'tier1',
    name: 'Tier 1',
    description: 'Government-backed and market-leading developers.',
    scoreMin: 9.3,
    scoreMax: Infinity,
    style: {
      image: '/dubai-bg.png',
      overlay: 'bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/97 to-[#FDFBF7]/50',
    },
  },
  {
    key: 'tier2',
    name: 'Tier 2',
    description: 'High-volume, high-liquidity investor favorites.',
    scoreMin: 8.7,
    scoreMax: 9.3,
    style: {
      image: '/abu-dhabi-bg.png',
      overlay: 'bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/95 to-[#FDFBF7]/40',
    },
  },
  {
    key: 'tier3',
    name: 'Tier 3',
    description: 'Boutique and design-led specialists.',
    scoreMin: 8.3,
    scoreMax: 8.7,
    style: {
      image: '/sharjah-bg.png',
      overlay: 'bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/92 to-[#FDFBF7]/28',
    },
  },
  {
    key: 'tier4',
    name: 'Tier 4',
    description: 'Mid-market giants and emerging names.',
    scoreMin: 7.9,
    scoreMax: 8.3,
    style: {
      image: '/ras-al-khaimah-bg.png',
      overlay: 'bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/94 to-[#FDFBF7]/36',
    },
  },
  {
    key: 'tier5',
    name: 'Tier 5',
    description: 'New and niche players with distinct positioning.',
    scoreMin: -Infinity,
    scoreMax: 7.9,
    style: {
      image: '/fujairah-bg.png',
      overlay: 'bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/94 to-[#FDFBF7]/40',
    },
  },
];

const BuildersPage = () => {
  const [expandedGroups, setExpandedGroups] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleGroup = (groupKey) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const groupedBuilders = useMemo(() => {
    const list = Array.isArray(BUILDERS) ? BUILDERS : [];
    return GROUPS.map((group) => {
      const buildersForGroup = list
        .filter((b) => {
          const score = Number(b?.overallDeveloperScore ?? 0);
          return score >= group.scoreMin && score < group.scoreMax;
        })
        .sort((a, b) => Number(b?.overallDeveloperScore ?? 0) - Number(a?.overallDeveloperScore ?? 0));

      return {
        ...group,
        builders: buildersForGroup,
      };
    }).filter((g) => g.builders.length > 0);
  }, []);

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

      <section className="relative overflow-hidden section-warm py-24 min-h-[40vh] flex items-center">
        <div
          className="absolute inset-0 bg-[#E6B76A] bg-cover bg-center bg-no-repeat opacity-[0.1]"
          style={{ backgroundImage: "url('/dubai-area-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,223,160,0.3)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 w-full z-10">
          <h1 className="display-medium text-[#3A3125] mb-6">
            Developer <span className="gold-gradient">Explorer</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#5A4F40] leading-relaxed font-light">
            Explore professional intelligence on UAE developers. Pick a tier below to browse the market leaders and discover the right builder for your investment strategy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-10">
          {groupedBuilders.map((group) => {
            const featuredStyle = group.style;
            const visibleBuilders = expandedGroups[group.key] ? group.builders : group.builders.slice(0, 6);

            return (
              <div key={group.key} className="mb-8 animate-in slide-in-from-bottom-4 duration-500">
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    featuredStyle
                      ? 'relative overflow-hidden rounded-3xl p-8 mb-6 border border-[rgba(198,167,94,0.25)] shadow-[0_15px_40px_rgba(198,167,94,0.1)] bg-white'
                      : 'mb-4'
                  }`}
                >
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
                    <h2 className="text-4xl font-serif font-bold text-[#3A3125] leading-tight mb-2 tracking-tight">{group.name}</h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E]">
                      {group.builders.length} DEVELOPERS ANALYZED
                    </p>
                    <p className="mt-4 text-base text-[#5A4F40] font-light max-w-2xl leading-relaxed">{group.description}</p>
                  </div>

                  <span className="hidden items-center gap-1 text-sm font-medium text-[#C6A75E] sm:flex relative z-10">
                    View Intelligence <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                          <span>{builder.tier || 'Tier 1'} Intelligence</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#3A3125]/5">
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">Trust</p>
                            <p className="text-sm font-bold text-emerald-600">{(builder.scores?.trust ?? 9.5)}<span className="text-[8px] opacity-40 ml-0.5">/10</span></p>
                          </div>
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">ESG</p>
                            <p className="text-sm font-bold text-[#3A3125]">{(builder.esgRating ?? 8.2)}<span className="text-[8px] opacity-40 ml-0.5">/10</span></p>
                          </div>
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-[#5A4F40]/40 mb-1">AI 2026</p>
                            <p className="text-sm font-bold text-[#C6A75E]">{(builder.aiConfidence ?? 94)}%</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {group.builders.length > 6 && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => toggleGroup(group.key)}
                      className="group flex items-center gap-3 rounded-full border border-[rgba(198,167,94,0.3)] bg-white/40 backdrop-blur-md px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#3A3125] shadow-sm transition-all hover:bg-[#3A3125] hover:text-[#C6A75E] hover:border-[#3A3125] active:scale-95"
                    >
                      {expandedGroups[group.key] ? (
                        <>Collapse Tier <ChevronUp size={16} /></>
                      ) : (
                        <>Explore All {group.builders.length} Developers <ChevronDown size={16} /></>
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

export default BuildersPage;
