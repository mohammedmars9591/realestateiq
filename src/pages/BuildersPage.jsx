import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, TrendingUp, CheckCircle, Crown, ShieldCheck,
  Zap, ArrowRight, Leaf, Activity, Globe, Search, SlidersHorizontal
} from 'lucide-react';
import SEO from '../components/SEO';
import { BUILDERS } from '../data/buildersData';

const BuildersPage = () => {
  const [quizResult, setQuizResult] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const matchBuilder = (goal) => {
    const map = {
      cheap: 'danube', luxury_art: 'omniyat', wellness: 'mag',
      safe: 'aldar', boutique: 'ellington', villa: 'damac', records: 'binghatti'
    };
    setQuizResult(BUILDERS.find(b => b.id === (map[goal] || 'emaar')));
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredBuilders = BUILDERS.filter(b => {
    const matchesSearch = b.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.tier?.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (filter === 'all') return true;
    if (filter === 'esg') return (b.esgRating || 0) > 9.0;
    if (filter === 'govt') return b.fundingStability?.includes('Sovereign') || b.fundingStability?.includes('Government');
    if (filter === 'confidence') return (b.aiConfidence || 0) > 95;
    return true;
  });

  const STATS = [
    { value: '25+', label: 'Developers Tracked' },
    { value: '98.2%', label: 'Data Accuracy' },
    { value: 'AAA', label: 'Institutional Grade' },
    { value: '2026', label: 'Live Intelligence' },
  ];

  const QUIZ_BUTTONS = [
    { label: '💰 Best Payment Plan', goal: 'cheap' },
    { label: '🛡️ Safest (Govt Backed)', goal: 'safe' },
    { label: '🏡 Luxury Villas', goal: 'villa' },
    { label: '🧘 Wellness & Health', goal: 'wellness' },
    { label: '🎨 Boutique Design', goal: 'boutique' },
    { label: '💎 Architectural Art', goal: 'luxury_art' },
    { label: '🏆 Record Breakers', goal: 'records' },
  ];

  const buildersListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Dubai & UAE Real Estate Developers 2026",
    "numberOfItems": BUILDERS.length,
    "itemListElement": BUILDERS.slice(0, 10).map((b, idx) => ({
      "@type": "ListItem", "position": idx + 1, "name": b.name,
      "url": `https://www.realestateiq.ae/builder/${b.id}`
    }))
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] fade-in">
      <SEO
        title="Top 25 Dubai Real Estate Developers 2026 — Trust Scores, Reviews & ROI"
        description="Compare 25+ top Dubai real estate developers for free. ESG Ratings, AI Delivery Confidence, Trust Scores for Emaar, Damac, Sobha, Binghatti, Danube and more."
        url="/builders"
        schema={buildersListSchema}
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#1C1C22] text-white py-24 md:py-32">
        {/* Glow orbs */}
        <div className="absolute top-[-30%] right-[-10%] w-[700px] h-[700px] bg-[#C6A75E]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[500px] h-[500px] bg-[#C6A75E]/5 rounded-full blur-[100px] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_2px_2px,_#C6A75E_1px,_transparent_0)] bg-[length:32px_32px]" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,167,94,0.4)] bg-[rgba(198,167,94,0.08)] px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A75E] animate-pulse" />
                Developer Intelligence Hub
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                The Titans of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A75E] to-[#E6B76A]">
                  UAE Real Estate
                </span>
              </h1>
              <p className="text-lg text-white/60 font-light leading-relaxed max-w-lg mb-8">
                Institutional-grade ESG ratings, AI delivery confidence, and trust scores for 25+ UAE developers. All free.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/compare" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A75E] text-[#1C1C22] font-bold rounded-xl text-sm hover:bg-[#E6B76A] transition-all">
                  Compare Developers <ArrowRight size={16} />
                </Link>
                <a href="#developers" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-all">
                  View All Developers
                </a>
              </div>
            </div>

            {/* Right — Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <div className="text-3xl font-extrabold text-[#C6A75E] mb-1">{s.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEVELOPER MATCHER QUIZ ─── */}
      <section className="py-20 bg-[#FDFBF7] border-b border-[rgba(198,167,94,0.15)]">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,167,94,0.4)] bg-[rgba(198,167,94,0.07)] px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
              <Zap size={12} /> AI Matcher
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1C1C22] tracking-tight">Find Your Perfect Developer Match</h2>
            <p className="mt-3 text-[#7A6E60] font-light">Tell us your goal — we'll recommend the best developer for you.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {QUIZ_BUTTONS.map(({ label, goal }) => (
              <button
                key={goal}
                onClick={() => matchBuilder(goal)}
                className="px-5 py-3 rounded-xl border border-[rgba(198,167,94,0.3)] bg-white text-[#1C1C22] font-bold text-sm hover:bg-[#C6A75E] hover:text-white hover:border-[#C6A75E] transition-all shadow-sm"
              >
                {label}
              </button>
            ))}
          </div>

          {quizResult && (
            <div className="bg-[#1C1C22] text-white rounded-3xl p-8 max-w-lg mx-auto border border-[rgba(198,167,94,0.3)] relative overflow-hidden shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-[#C6A75E] text-[#1C1C22] font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider z-10">
                Top Match
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#C6A75E]/70 mb-1">Based on your goal</div>
                <h3 className="text-3xl font-extrabold text-[#C6A75E] mb-2">{quizResult.name}</h3>
                <p className="text-white/70 font-light mb-6 leading-relaxed">"{quizResult.usp}"</p>
                <div className="grid grid-cols-2 gap-3 mb-6 bg-white/5 rounded-2xl p-4">
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase mb-1">Best For</div>
                    <div className="font-bold text-sm">{quizResult.bestFor?.[0]}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase mb-1">Trust Score</div>
                    <div className="font-bold text-sm text-[#C6A75E]">{quizResult.scores?.trust}/10</div>
                  </div>
                </div>
                <Link to={`/builder/${quizResult.id}`} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C6A75E] text-[#1C1C22] font-bold rounded-xl hover:bg-[#E6B76A] transition">
                  Read Full Analysis <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── FILTERS + GRID ─── */}
      <section id="developers" className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
          {/* Search */}
          <div className="relative flex-grow w-full md:max-w-xs">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A6E60]" />
            <input
              type="text"
              placeholder="Search developer..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[rgba(198,167,94,0.3)] bg-white text-[#1C1C22] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A75E]/40"
            />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Titans', icon: null },
              { id: 'esg', label: 'ESG Leaders', icon: <Leaf size={12} /> },
              { id: 'govt', label: 'Govt Backed', icon: <Globe size={12} /> },
              { id: 'confidence', label: 'High Confidence', icon: <Activity size={12} /> },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                  filter === f.id
                    ? 'bg-[#1C1C22] text-[#C6A75E] border-[#C6A75E]'
                    : 'bg-white text-[#7A6E60] border-[rgba(198,167,94,0.25)] hover:border-[#C6A75E]'
                }`}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>

          <div className="ml-auto text-xs text-[#7A6E60] font-medium hidden md:block">
            {filteredBuilders.length} developer{filteredBuilders.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Developer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuilders.map((builder) => (
            <Link to={`/builder/${builder.id}`} key={builder.id} className="group block">
              <div className="bg-white border border-[rgba(198,167,94,0.18)] rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Coloured Header */}
                <div className={`relative p-7 ${builder.imageColor || 'bg-[#1C1C22]'} text-white overflow-hidden`}>
                  <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_2px_2px,_#fff_1px,_transparent_0)] bg-[length:20px_20px]" />
                  <div className="relative z-10 flex justify-between items-start mb-3">
                    <h3 className="text-xl font-extrabold tracking-tight pr-2 leading-tight">{builder.name}</h3>
                    {builder.id === 'emaar' && <Crown size={20} className="text-yellow-400 shrink-0" />}
                  </div>
                  <span className="inline-flex items-center px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    {builder.tier}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-grow space-y-4">
                  <p className="text-[13px] text-[#7A6E60] leading-relaxed line-clamp-2 font-light italic">
                    "{builder.usp}"
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <MetricRow icon={<CheckCircle size={13} className="text-emerald-500" />} label="Trust Score" value={`${builder.scores?.trust || 'N/A'}/10`} highlight />
                    <MetricRow icon={<Leaf size={13} className="text-emerald-600" />} label="ESG Rating" value={`${builder.esgRating || 'N/A'}/10`} />
                    <MetricRow icon={<Activity size={13} className="text-amber-500" />} label="AI Confidence" value={`${builder.aiConfidence || 'N/A'}%`} />
                    <MetricRow icon={<ShieldCheck size={13} className="text-blue-500" />} label="Delivery" value={builder.deliveryTrackRecord?.onTime || 'N/A'} />
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 pb-6">
                  <div className="w-full flex items-center justify-between px-5 py-3 bg-[#F8F5EF] group-hover:bg-[#1C1C22] rounded-xl transition-all duration-300 border border-[rgba(198,167,94,0.2)]">
                    <span className="text-xs font-bold text-[#1C1C22] group-hover:text-[#C6A75E] transition-colors uppercase tracking-wider">View Full Analysis</span>
                    <ArrowRight size={15} className="text-[#C6A75E] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── ANALYST VERDICTS ─── */}
      <section className="py-24 bg-[#1C1C22]">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,167,94,0.4)] bg-[rgba(198,167,94,0.08)] px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
              <TrendingUp size={12} /> Expert Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Analyst Verdicts: <span className="text-[#C6A75E]">2026 Edition</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Best Build Quality', winner: 'Sobha & Ellington', desc: "Sobha's in-house construction and Ellington's boutique hotel finish are unmatched in the UAE market.", icon: <ShieldCheck size={22} />, color: 'text-purple-400' },
              { title: 'Best for Flipping', winner: 'Emaar & Select', desc: 'Emaar (Downtown) and Select Group (Marina) offer the highest secondary market liquidity in UAE.', icon: <TrendingUp size={22} />, color: 'text-blue-400' },
              { title: 'Best Payment Plan', winner: 'Danube', desc: 'Undefeated king of the 1% monthly plan. Perfect for first-time investors with limited initial capital.', icon: <Zap size={22} />, color: 'text-amber-400' },
              { title: 'Safest Investment', winner: 'Aldar & Emaar', desc: 'Both are government-backed and effectively "Too Big To Fail" from an investor risk perspective.', icon: <Crown size={22} />, color: 'text-yellow-400' },
              { title: 'Highest ESG Score', winner: 'Majid Al Futtaim', desc: '9.9 ESG rating — the most sustainable major developer in UAE, committed to Net Zero by 2040.', icon: <Leaf size={22} />, color: 'text-emerald-400' },
              { title: 'AI Confidence King', winner: 'Sobha Realty', desc: '97.2% AI delivery confidence — the most predictable handover timeline of any developer in Dubai.', icon: <Activity size={22} />, color: 'text-cyan-400' },
            ].map((v, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-[rgba(198,167,94,0.3)] transition-all">
                <div className={`mb-4 ${v.color}`}>{v.icon}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{v.title}</div>
                <div className="text-lg font-extrabold text-[#C6A75E] mb-3">{v.winner}</div>
                <p className="text-xs text-white/50 leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const MetricRow = ({ icon, label, value, highlight }) => (
  <div className={`flex items-center justify-between text-xs py-1.5 px-3 rounded-lg ${highlight ? 'bg-emerald-50' : 'bg-[#F8F5EF]'}`}>
    <span className="flex items-center gap-1.5 text-[#7A6E60] font-medium">{icon}{label}</span>
    <span className={`font-bold ${highlight ? 'text-emerald-700' : 'text-[#1C1C22]'}`}>{value}</span>
  </div>
);

export default BuildersPage;