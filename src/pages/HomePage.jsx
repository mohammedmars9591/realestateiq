import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Building2, Crown, Award, Wallet, 
  Zap, Activity, Map, ShieldCheck, Gem, BarChart3, HardHat, 
  CheckCircle2, LineChart, Globe, Database, Layers
} from 'lucide-react';
import SEO from '../components/SEO';
import { BUILDERS } from '../data/buildersData';
// 🟢 IMPORT THE NEW EMIRATES DATA
import { EMIRATES } from '../data/emiratesData'; 

const HomePage = () => {
  const featuredBuilders = (BUILDERS || []).slice(0, 4);

  return (
    <div className="fade-in bg-slate-50 font-sans text-slate-900">
      <SEO 
        title="RealEstateIQ | AI-Powered UAE Property Investment Analysis" 
        description="Stop guessing. Access verified rental yields, capital appreciation forecasts, and builder reliability scores for Dubai, Abu Dhabi, Sharjah & RAK."
      />

      {/* --- 1. LIVE MARKET TICKER --- */}
      <div className="bg-slate-900 text-slate-400 text-[10px] md:text-xs py-2 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 animate-pulse">
            <span className="flex items-center gap-1 text-emerald-400 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Market Active</span>
            <span className="hidden md:inline">UAE Transactions (24h): <span className="text-white">AED 1.8B</span></span>
            <span className="hidden md:inline">Top Gainer: <span className="text-amber-400">Al Marjan Island (+5.2%)</span></span>
          </div>
          <div className="flex gap-4">
             <span>Data updated: <span className="text-white">Live</span></span>
          </div>
        </div>
      </div>

      {/* --- 2. HERO SECTION --- */}
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live 2026 Market Forecasts
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Smart Data for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Investors</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing with outdated listings. Use advanced <strong>AI Analytics, Heatmaps, and Scoring Models</strong> to find the highest ROI opportunities across the UAE.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/heatmap" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-xl hover:shadow-blue-600/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              <Map size={20} /> Open ROI Heatmap
            </Link>
            <Link to="/compare" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2">
              <BarChart3 size={20} /> Compare Markets
            </Link>
          </div>
        </div>
        
        {/* Abstract Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-0"></div>
      </div>

      {/* --- 3. QUICK TOOLS GRID --- */}
      <div className="max-w-5xl mx-auto px-4 -mt-24 relative z-20 mb-24">
         <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <ToolCard to="/areas" icon={<Globe />} label="Explore Markets" color="text-blue-600" hover="hover:bg-blue-50" />
            <ToolCard to="/builders" icon={<HardHat />} label="Rate Developers" color="text-orange-600" hover="hover:bg-orange-50" />
            <ToolCard to="/heatmap" icon={<TrendingUp />} label="ROI Heatmap" color="text-emerald-600" hover="hover:bg-emerald-50" />
            <ToolCard to="/compare" icon={<LineChart />} label="Compare Tools" color="text-purple-600" hover="hover:bg-purple-50" />
         </div>
      </div>

      {/* --- 4. TRENDING MARKETS (MAPPED FROM EMIRATESDATA) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Trending Markets</h2>
            <p className="text-slate-500 mt-2">Highest transaction volume zones across the Emirates.</p>
          </div>
          <Link to="/areas" className="text-blue-600 font-bold hover:underline hidden md:block">View All →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 🟢 MAPPING FROM THE IMPORTED FILE */}
          {EMIRATES.map((item) => (
            <Link to={`/areas`} key={item.id} className="group relative block h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200">
              <div className={`absolute inset-0 ${item.color} transition-transform duration-1000 group-hover:scale-110`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute top-5 left-5 z-10">
                <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Crown size={10} className="fill-amber-400" /> {item.label}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                <div className="mt-auto mb-3">
                   <h3 className="text-2xl font-bold text-white leading-tight mb-1 group-hover:text-amber-400 transition-colors">{item.name}</h3>
                   <div className="h-0.5 w-12 bg-amber-500 rounded-full mb-2"></div>
                   <p className="text-xs text-slate-300 opacity-80 line-clamp-2">{item.desc}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border-t border-white/10 pt-3 mt-2 flex justify-between items-center rounded-xl p-3">
                   <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Est. Yield</div>
                      <div className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                        <TrendingUp size={14} /> {item.roi}
                      </div>
                   </div>
                   <div className="w-px h-8 bg-white/20"></div>
                   <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Score</div>
                      <div className="text-amber-400 font-bold text-lg">{item.score}/10</div>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- 5. HOW SMART INVESTORS WIN (LUXURY DESIGN) --- */}
      <div className="bg-slate-900 text-white py-24 mb-24 relative overflow-hidden">
         {/* Luxury Gold Background Accents */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-amber-500 to-slate-900"></div>
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
               <div className="inline-block px-3 py-1 border border-amber-500/50 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                  The EstateIQ Methodology
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  How <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Smart Investors</span> Win
               </h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  We replace "gut feeling" with 50+ institutional-grade data points per property.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <LuxuryStep 
                  step="01" 
                  icon={<Map className="text-amber-400" size={32} />}
                  title="Analyze the Heatmap" 
                  desc="Instantly spot high-yield zones vs. over-supplied areas using our proprietary color-coded algorithms."
               />
               <LuxuryStep 
                  step="02" 
                  icon={<ShieldCheck className="text-amber-400" size={32} />}
                  title="Vet the Developer" 
                  desc="Avoid delays. Check our 'Delivery Track Record' scores to filter builders by reliability and finish quality."
               />
               <LuxuryStep 
                  step="03" 
                  icon={<TrendingUp className="text-amber-400" size={32} />}
                  title="Forecast Returns" 
                  desc="Use our AI prediction model to visualize estimated resale value and rental income for 2028-2030."
               />
            </div>
         </div>
      </div>

      {/* --- 6. ANALYST VERDICTS (2026 EDITION) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
         <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
           <div>
             <div className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2">
                <Zap size={16} /> FutureScope Analysis
             </div>
             {/* 🟢 LUXURY HEADING FOR VERDICTS */}
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
               Analyst Verdicts: <span className="text-blue-600">2026 Edition</span>
             </h2>
           </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <VerdictBox 
             icon={<TrendingUp size={24} />} title="Best for ROI" winner="Dubai South" 
             desc="The $35B Airport expansion makes this the #1 capital growth zone." 
             color="bg-blue-50 border-blue-100" iconColor="text-blue-600"
           />
           <VerdictBox 
             icon={<ShieldCheck size={24} />} title="Safest Investment" winner="Emaar Properties" 
             desc="Government backing and master communities remain the 'Gold Standard'." 
             color="bg-emerald-50 border-emerald-100" iconColor="text-emerald-600"
           />
           <VerdictBox 
             icon={<Wallet size={24} />} title="Best Cash Flow" winner="JVC & Danube" 
             desc="High rental demand combined with 1% payment plans creates high net yields." 
             color="bg-purple-50 border-purple-100" iconColor="text-purple-600"
           />
           <VerdictBox 
             icon={<Gem size={24} />} title="Luxury Pick" winner="Palm Jebel Ali" 
             desc="Offering villa entry prices 50% lower than Palm Jumeirah. Massive upside." 
             color="bg-amber-50 border-amber-100" iconColor="text-amber-600"
           />
         </div>
      </div>

      {/* --- 7. FEATURED DEVELOPERS --- */}
      <div className="bg-slate-50 py-10 mb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="flex justify-between items-end mb-8">
             <div>
               <h2 className="text-2xl font-bold text-slate-900">Developer Reliability</h2>
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
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-1">{builder.name}</h3>
                   <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                     <span className="text-slate-500">Trust Score</span>
                     <span className={`font-bold ${builder.scores?.trust >= 9 ? 'text-green-600' : 'text-blue-600'}`}>{builder.scores?.trust}/10</span>
                   </div>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </div>

      {/* --- 8. OFFICIAL DATA SOURCES (LUXURY FOOTER DESIGN) --- */}
      <div className="bg-white border-t border-slate-200 py-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Intelligence Powered By</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
               {/* Minimalist Text Logos for High-End Feel */}
               <div className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-2">
                  <Globe className="text-amber-500" size={24} /> Dubai Land Dept.
               </div>
               <div className="w-px h-8 bg-slate-200 hidden md:block"></div>
               <div className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-2">
                  <Database className="text-amber-500" size={24} /> Reidin
               </div>
               <div className="w-px h-8 bg-slate-200 hidden md:block"></div>
               <div className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-2">
                  <Layers className="text-amber-500" size={24} /> Bayut Data
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

// --- SUB-COMPONENTS ---

const ToolCard = ({ to, icon, label, color, hover }) => (
  <Link to={to} className={`flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 ${hover} hover:${color} transition-colors group border border-slate-100`}>
     <div className={`mb-3 text-slate-400 group-hover:${color} transition-colors`}>
        {React.cloneElement(icon, { size: 32 })}
     </div>
     <span className="font-bold text-sm text-slate-700 group-hover:text-slate-900">{label}</span>
  </Link>
);

const LuxuryStep = ({ step, icon, title, desc }) => (
   <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl hover:border-amber-500/50 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-6">
         <div className="p-3 bg-slate-900 rounded-2xl border border-slate-700 group-hover:border-amber-500/30 transition-colors">
            {icon}
         </div>
         <span className="text-5xl font-serif font-bold text-slate-700 group-hover:text-slate-600 transition-colors">{step}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
   </div>
);

const FeatureStep = ({ step, title, desc }) => (
   <div className="text-left">
      <div className="text-5xl font-extrabold text-slate-100 mb-4">{step}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
   </div>
);

const VerdictBox = ({ icon, title, winner, desc, color, iconColor }) => (
  <div className={`p-6 rounded-2xl border ${color} hover:shadow-lg transition-all hover:-translate-y-1 h-full bg-white`}>
     <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm ${iconColor}`}>
       {icon}
     </div>
     <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{title}</div>
     <h3 className="text-xl font-extrabold text-slate-900 mb-2">{winner}</h3>
     <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-90">"{desc}"</p>
  </div>
);

export default HomePage;