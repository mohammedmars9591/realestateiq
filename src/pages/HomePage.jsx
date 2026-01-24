import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Building2, Crown, Award, Wallet, 
  Zap, Activity, Map, ShieldCheck, Gem, BarChart3, HardHat 
} from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/areaData';
import { BUILDERS } from '../data/buildersData';

const HomePage = () => {
  // Safe slice to avoid errors if data is empty
  const featuredAreas = (DUBAI_AREAS || []).slice(0, 4);
  const featuredBuilders = (BUILDERS || []).slice(0, 4);

  return (
    <div className="fade-in bg-slate-50">
      <SEO 
        title="RealEstateIQ | AI Real Estate Investment Tool"
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
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing. Use advanced <strong>AI Analytics, Heatmaps, and Scoring Models</strong> to find the best investment opportunities.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link to="/heatmap" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
              <Map size={18} /> Open Heatmap
            </Link>
            <Link to="/compare" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition flex items-center gap-2">
              <BarChart3 size={18} /> Compare Areas
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-0"></div>
      </div>

      {/* =========================================
          1) TOOLS QUICK ACCESS (Replaces InvestmentWizard)
      ========================================= */}
      <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-20 mb-24">
         <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/areas" className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors group">
               <Map className="mb-2 text-slate-400 group-hover:text-blue-600" size={32} />
               <span className="font-bold text-sm">Explore Areas</span>
            </Link>
            <Link to="/builders" className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-orange-600 transition-colors group">
               <HardHat className="mb-2 text-slate-400 group-hover:text-orange-600" size={32} />
               <span className="font-bold text-sm">Rate Developers</span>
            </Link>
            <Link to="/heatmap" className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 transition-colors group">
               <TrendingUp className="mb-2 text-slate-400 group-hover:text-emerald-600" size={32} />
               <span className="font-bold text-sm">ROI Heatmap</span>
            </Link>
            <Link to="/compare" className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 hover:bg-purple-50 hover:text-purple-600 transition-colors group">
               <BarChart3 className="mb-2 text-slate-400 group-hover:text-purple-600" size={32} />
               <span className="font-bold text-sm">Compare Tools</span>
            </Link>
         </div>
      </div>

      {/* =========================================
          2) FEATURED AREAS (Your Luxury Design)
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
            <Link to={`/area/${area.id}`} key={area.id} className="group relative block h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200">
              
              {/* Background Image Layer */}
              <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-1000 group-hover:scale-110`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              </div>
              
              {/* Top Badge */}
              <div className="absolute top-5 left-5 z-10">
                <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Crown size={10} className="fill-amber-400" /> {area.category}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                <div className="mt-auto mb-3">
                   <h3 className="text-2xl font-bold text-white leading-tight mb-1 group-hover:text-amber-400 transition-colors">
                     {area.name}
                   </h3>
                   <div className="h-0.5 w-12 bg-amber-500 rounded-full mb-2"></div>
                </div>

                {/* Glass Stats Panel */}
                <div className="bg-white/10 backdrop-blur-md border-t border-white/10 pt-3 mt-2 flex justify-between items-center rounded-xl p-3">
                   <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Est. Yield</div>
                      <div className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                        <TrendingUp size={14} /> {area.roi}
                      </div>
                   </div>
                   <div className="w-px h-8 bg-white/20"></div>
                   <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Score</div>
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
            <Link to={`/builder/${builder.id}`} key={builder.id} className="group block hover:no-underline">
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
          {/* Abstract Map BG */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>

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
          5) ANALYST VERDICTS
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

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <VerdictBox 
             icon={<TrendingUp size={24} />}
             title="Best for ROI"
             winner="Dubai South"
             desc="The $35B Airport expansion makes this the #1 capital growth zone."
             color="bg-blue-50 border-blue-100"
             iconColor="text-blue-600"
           />
           <VerdictBox 
             icon={<ShieldCheck size={24} />}
             title="Safest Investment"
             winner="Emaar Properties"
             desc="Government backing and master communities remain the 'Gold Standard'."
             color="bg-emerald-50 border-emerald-100"
             iconColor="text-emerald-600"
           />
           <VerdictBox 
             icon={<Wallet size={24} />}
             title="Best Cash Flow"
             winner="JVC & Danube"
             desc="High rental demand combined with 1% payment plans creates high net yields."
             color="bg-purple-50 border-purple-100"
             iconColor="text-purple-600"
           />
           <VerdictBox 
             icon={<Gem size={24} />}
             title="Luxury Pick"
             winner="Palm Jebel Ali"
             desc="Offering villa entry prices 50% lower than Palm Jumeirah. Massive upside."
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