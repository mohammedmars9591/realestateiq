import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Building2, Crown, Award, Wallet, 
  Zap, ArrowUpRight, Activity, Map, ShieldCheck, Gem, MapPin 
} from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/areaData';
import { BUILDERS } from '../data/buildersData';
import InvestmentWizard from '../components/InvestmentWizard';

const HomePage = () => {
  const featuredAreas = DUBAI_AREAS.slice(0, 4);
  const featuredBuilders = BUILDERS.slice(0, 4);

  return (
    <div className="fade-in">
      <SEO 
        title="EstateIQ | AI Real Estate Investment Tool"
        description="The intelligent way to invest in Dubai. Verified data, AI ROI predictions, and builder analysis."
      />

      {/* --- HERO HEADER --- */}
      <div className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
            <span className="mr-2">🚀</span> Live: 2026 Market Forecasts
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Smart Data for <br /><span className="text-blue-600">Smart Investors</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-6 leading-relaxed">
            Stop guessing. Find the perfect <strong>Apartment, Villa, or Penthouse</strong> with our verified AI data engine.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-0"></div>
      </div>

      {/* =========================================
          1) SEARCH ENGINE (INVESTMENT WIZARD)
      ========================================= */}
      <div className="px-4 mb-24 relative z-20 -mt-20">
        <InvestmentWizard />
      </div>

      {/* =========================================
          2) FEATURED AREAS (NEW LUXURY DESIGN)
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Trending Districts</h2>
            <p className="text-slate-500 mt-2">Areas with the highest transaction volume this month.</p>
          </div>
          <Link to="/areas" className="text-blue-600 font-bold hover:underline hidden md:block">View All →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAreas.map((area) => (
            <Link to={`/area/${area.id}`} key={area.id} className="group relative block h-[480px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200">
              
              {/* 1. Background Image Layer */}
              <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-1000 group-hover:scale-110`}>
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90"></div>
              </div>
              
              {/* 2. Top Badge (Gold Luxury Style) */}
              <div className="absolute top-5 left-5 z-10">
                <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Crown size={10} className="fill-amber-400" /> {area.category}
                </div>
              </div>

              {/* 3. Bottom Content Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                
                {/* Title & Arrow */}
                <div className="mt-auto mb-3">
                   <h3 className="text-2xl font-bold text-white leading-tight mb-1 group-hover:text-amber-400 transition-colors">
                     {area.name}
                   </h3>
                   <div className="h-0.5 w-12 bg-amber-500 rounded-full mb-4"></div>
                </div>

                {/* Description (Added per request) */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3 opacity-90 font-light">
                  {area.description || "A premier district known for high rental yields and luxury living."}
                </p>

                {/* Glass Stats Panel */}
                <div className="bg-white/10 backdrop-blur-md border-t border-white/10 pt-4 mt-2 flex justify-between items-center rounded-xl p-3">
                   
                   {/* ROI Stat */}
                   <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Est. Yield</div>
                      <div className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                        <TrendingUp size={14} /> {area.roi}
                      </div>
                   </div>

                   {/* Vertical Divider */}
                   <div className="w-px h-8 bg-white/20"></div>
                   
                   {/* Score Stat */}
                   <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">EstateIQ Score</div>
                      <div className="text-amber-400 font-bold text-lg">
                        {area.overallScore}/10
                      </div>
                   </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* =========================================
          3) FEATURED BUILDERS
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Developers</h2>
            <p className="text-slate-500 mt-2">Compare Dubai's top builders by quality and delivery.</p>
          </div>
          <Link to="/builders" className="text-blue-600 font-bold hover:underline hidden md:block">Compare All →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBuilders.map((builder) => (
            <Link to={`/builders/${builder.id}`} key={builder.id} className="group block hover:no-underline">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 ${builder.imageColor || 'bg-slate-800'}`}></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${builder.imageColor ? builder.imageColor.replace('bg-', 'bg-opacity-10 text-') : 'bg-slate-100 text-slate-700'}`}>
                    <Building2 size={24} />
                  </div>
                  {builder.id === 'emaar' && <Crown size={20} className="text-yellow-500" />}
                  {builder.id === 'binghatti' && <Award size={20} className="text-orange-500" />}
                  {builder.id === 'danube' && <Wallet size={20} className="text-green-500" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{builder.name}</h3>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">{builder.tier}</div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                  <span className="text-slate-500">Trust Score</span>
                  <span className={`font-bold ${builder.scores?.trust >= 9 ? 'text-green-600' : 'text-blue-600'}`}>
                    {builder.scores?.trust}/10
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* =========================================
          4) HEATMAP VIEW
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>
          {/* Faux Map Background Image */}
          <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity bg-[url('https://images.unsplash.com/photo-1512453979798-5ea936a7fe0b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>

          <div className="relative z-20 p-12 md:p-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
               <Activity size={14} /> Live Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ROI Heatmap</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-xl mb-10 leading-relaxed">
              Visualize rental yields, transaction volume, and capital appreciation hotspots across the entire city in real-time.
            </p>
            <Link to="/heatmap" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-600/20">
              Open Map View <Map size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          5) ANALYST VERDICTS: 2026 EDITION
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
         <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2">
                 <Zap size={16} /> FutureScope Analysis
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                 Analyst Verdicts: <span className="text-blue-600">2026 Edition</span>
              </h2>
            </div>
            <Link to="/heatmap" className="text-sm font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1">
               Read Full Report <ArrowRight size={16} />
            </Link>
         </div>

         {/* Verdict Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
           <VerdictBox 
              icon={<TrendingUp size={24} />}
              title="Best for ROI"
              winner="Dubai South"
              desc="The $35B Airport expansion makes this the #1 capital growth zone for the next 5 years."
              color="bg-blue-50 border-blue-100"
              iconColor="text-blue-600"
           />

           <VerdictBox 
              icon={<ShieldCheck size={24} />}
              title="Safest Investment"
              winner="Emaar Properties"
              desc="With government backing and master communities like Downtown, they remain the 'Gold Standard'."
              color="bg-emerald-50 border-emerald-100"
              iconColor="text-emerald-600"
           />

           <VerdictBox 
              icon={<Wallet size={24} />}
              title="Best Cash Flow"
              winner="JVC & Danube"
              desc="High rental demand combined with 1% payment plans creates the highest net yields (8%+)."
              color="bg-purple-50 border-purple-100"
              iconColor="text-purple-600"
           />

           <VerdictBox 
              icon={<Gem size={24} />}
              title="Luxury Pick"
              winner="Palm Jebel Ali"
              desc="The 'New Palm' is offering villa entry prices 50% lower than Palm Jumeirah. Massive upside."
              color="bg-amber-50 border-amber-100"
              iconColor="text-amber-600"
           />

         </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENT FOR VERDICTS ---
const VerdictBox = ({ icon, title, winner, desc, color, iconColor }) => (
  <div className={`p-6 rounded-2xl border ${color} hover:shadow-lg transition-all hover:-translate-y-1 h-full`}>
     <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm ${iconColor}`}>
       {icon}
     </div>
     <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{title}</div>
     <h3 className="text-xl font-extrabold text-slate-900 mb-2">{winner}</h3>
     <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-90">
       "{desc}"
     </p>
  </div>
);

export default HomePage;