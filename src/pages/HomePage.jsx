import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Building2, Crown, Award, Wallet, 
  Zap, Activity, Map, ShieldCheck, Gem, BarChart3, HardHat, 
  CheckCircle2, LineChart, Globe, Database, Layers, ArrowUpRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { BUILDERS } from '../data/buildersData';

const HomePage = () => {
  const featuredBuilders = (BUILDERS || []).slice(0, 4);

  // 🟢 MANUAL DATA FOR THE 4 KEY EMIRATES (Luxury Display)
  const trendingEmirates = [
    { 
      id: 'dubai', name: 'Dubai', label: 'Global Hub', 
      roi: '6.8%', score: '9.2', color: 'from-blue-900 to-slate-900',
      desc: 'High liquidity & global demand.'
    },
    { 
      id: 'abudhabi', name: 'Abu Dhabi', label: 'Capital Growth', 
      roi: '7.1%', score: '8.9', color: 'from-slate-800 to-black',
      desc: 'Stable government-backed yields.'
    },
    { 
      id: 'sharjah', name: 'Sharjah', label: 'High Yield', 
      roi: '8.5%', score: '8.4', color: 'from-emerald-900 to-slate-900',
      desc: 'Affordable entry, massive rental demand.'
    },
    { 
      id: 'rak', name: 'Ras Al Khaimah', label: 'Casino Boom', 
      roi: '9.0%', score: '9.5', color: 'from-amber-900 to-slate-900',
      desc: 'Wynn Casino driving massive capital gains.'
    },
  ];

  return (
    <div className="fade-in bg-slate-50 font-sans text-slate-900">
      <SEO 
        title="RealEstateIQ | AI-Powered UAE Property Investment Analysis" 
        description="Stop guessing. Access verified rental yields, capital appreciation forecasts, and builder reliability scores for Dubai, Abu Dhabi, Sharjah & RAK."
      />

      {/* --- 1. LIVE MARKET TICKER --- */}
      <div className="bg-slate-950 text-slate-400 text-[10px] md:text-xs py-2 overflow-hidden border-b border-slate-800">
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

      {/* --- 2. HERO SECTION (LUXURY) --- */}
      <div className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Live 2026 Market Forecasts
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            Smart Data for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">Smart Investors</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Stop guessing. Use institutional-grade <strong>AI Analytics, Heatmaps, and Scoring Models</strong> to identify high-yield assets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/heatmap" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-black transition shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-2 transform hover:-translate-y-1 border border-slate-800">
              <Map size={20} className="text-amber-400" /> Open ROI Heatmap
            </Link>
            <Link to="/compare" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-sm">
              <BarChart3 size={20} /> Compare Markets
            </Link>
          </div>
        </div>
        
        {/* Luxury Gradient BG */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white -z-0"></div>
      </div>

      {/* --- 3. QUICK TOOLS (AREA CARDS) --- */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-20 mb-24">
         <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <ToolCard to="/areas" icon={<Globe />} label="Explore Markets" color="text-blue-600" />
            <ToolCard to="/builders" icon={<HardHat />} label="Rate Developers" color="text-amber-600" />
            <ToolCard to="/heatmap" icon={<TrendingUp />} label="ROI Heatmap" color="text-emerald-600" />
            <ToolCard to="/compare" icon={<LineChart />} label="Compare Tools" color="text-purple-600" />
         </div>
      </div>

      {/* --- 4. TRENDING MARKETS (LUXURY PROPERTY CARDS) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
        <div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-6">
          <div>
            <div className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Market Intelligence</div>
            <h2 className="text-4xl font-serif font-bold text-slate-900">Trending Districts</h2>
          </div>
          <Link to="/areas" className="text-slate-900 font-bold hover:text-amber-600 transition flex items-center gap-2">View All Markets <ArrowRight size={16}/></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingEmirates.map((item) => (
            <Link to={`/areas`} key={item.id} className="group relative block h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} transition-transform duration-1000 group-hover:scale-110`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>
              
              {/* Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <Crown size={12} className="text-amber-400" /> {item.label}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                <div className="mt-auto mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                   <h3 className="text-3xl font-serif font-bold text-white leading-none mb-2">{item.name}</h3>
                   <div className="w-10 h-1 bg-amber-500 rounded-full mb-3"></div>
                   <p className="text-sm text-slate-300 font-light leading-relaxed opacity-90">{item.desc}</p>
                </div>

                {/* Glass Stats */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex justify-between items-center group-hover:bg-white/20 transition-colors">
                   <div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mb-1">Est. Yield</div>
                      <div className="text-emerald-400 font-bold text-xl flex items-center gap-1">
                        <TrendingUp size={16} /> {item.roi}
                      </div>
                   </div>
                   <div className="w-px h-8 bg-white/20"></div>
                   <div className="text-right">
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mb-1">Score</div>
                      <div className="text-amber-400 font-bold text-xl">{item.score}</div>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- 5. HOW SMART INVESTORS WIN (DARK LUXURY CARD THEME) --- */}
      <div className="bg-slate-950 py-32 relative overflow-hidden">
         {/* Background Accents */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
         <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px]"></div>

         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-20">
               <div className="inline-block px-4 py-1.5 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  The EstateIQ Methodology
               </div>
               <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                  How <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Smart Investors</span> Win
               </h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                  We replace "gut feeling" with 50+ institutional-grade data points per property.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <LuxuryStep 
                  step="01" 
                  icon={<Map className="text-slate-900" size={24} />}
                  title="Analyze the Heatmap" 
                  desc="Instantly spot high-yield zones vs. over-supplied areas using our proprietary color-coded algorithms."
               />
               <LuxuryStep 
                  step="02" 
                  icon={<ShieldCheck className="text-slate-900" size={24} />}
                  title="Vet the Developer" 
                  desc="Avoid delays. Check our 'Delivery Track Record' scores to filter builders by reliability and finish quality."
               />
               <LuxuryStep 
                  step="03" 
                  icon={<TrendingUp className="text-slate-900" size={24} />}
                  title="Forecast Returns" 
                  desc="Use our AI prediction model to visualize estimated resale value and rental income for 2028-2030."
               />
            </div>
         </div>
      </div>

      {/* --- 6. ANALYST VERDICTS (2026 EDITION) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
             <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">
                <Zap size={16} /> FutureScope Analysis
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">
               Analyst Verdicts: <span className="italic text-slate-400">2026 Edition</span>
             </h2>
           </div>
           <div className="flex items-center gap-2 text-slate-500 font-medium">
              Based on Q4 2025 Transaction Data <Database size={16} />
           </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <VerdictBox 
             icon={<TrendingUp size={24} />} title="Best for ROI" winner="Dubai South" 
             desc="The $35B Airport expansion makes this the #1 capital growth zone." 
             color="border-blue-100 bg-blue-50/50" iconColor="text-blue-600"
           />
           <VerdictBox 
             icon={<ShieldCheck size={24} />} title="Safest Investment" winner="Emaar Properties" 
             desc="Government backing and master communities remain the 'Gold Standard'." 
             color="border-emerald-100 bg-emerald-50/50" iconColor="text-emerald-600"
           />
           <VerdictBox 
             icon={<Wallet size={24} />} title="Best Cash Flow" winner="JVC & Danube" 
             desc="High rental demand combined with 1% payment plans creates high net yields." 
             color="border-purple-100 bg-purple-50/50" iconColor="text-purple-600"
           />
           <VerdictBox 
             icon={<Gem size={24} />} title="Luxury Pick" winner="Palm Jebel Ali" 
             desc="Offering villa entry prices 50% lower than Palm Jumeirah. Massive upside." 
             color="border-amber-100 bg-amber-50/50" iconColor="text-amber-600"
           />
         </div>
      </div>

      {/* --- 7. FEATURED DEVELOPERS --- */}
      <div className="bg-slate-50 py-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-serif font-bold text-slate-900">Developer Reliability</h2>
               <p className="text-slate-500 mt-2">Don't buy without checking the track record.</p>
             </div>
             <Link to="/builders" className="text-slate-900 font-bold hover:text-amber-600 transition flex items-center gap-2">Compare All <ArrowRight size={16}/></Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {featuredBuilders.map((builder) => (
               <Link to={`/builder/${builder.id}`} key={builder.id} className="group block hover:no-underline">
                 <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col relative overflow-hidden group-hover:border-amber-200">
                   <div className={`absolute top-0 left-0 w-full h-1 ${builder.imageColor || 'bg-slate-800'}`}></div>
                   <div className="flex justify-between items-start mb-6">
                     <div className={`p-3 rounded-xl bg-slate-50 text-slate-700`}>
                       <Building2 size={24} />
                     </div>
                     {builder.id === 'emaar' && <Crown size={20} className="text-amber-500" />}
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-1">{builder.name}</h3>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-6">{builder.tier}</div>
                   
                   <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                     <span className="text-slate-500 font-medium">Trust Score</span>
                     <span className={`font-bold text-lg ${builder.scores?.trust >= 9 ? 'text-emerald-600' : 'text-blue-600'}`}>{builder.scores?.trust}<span className="text-xs text-slate-400">/10</span></span>
                   </div>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </div>

      {/* --- 8. OFFICIAL DATA SOURCES (FOOTER) --- */}
      <div className="bg-white border-t border-slate-200 py-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Intelligence Powered By</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70">
               <div className="text-xl font-serif font-bold text-slate-800 flex items-center gap-3">
                  <Globe className="text-amber-500" size={20} /> Dubai Land Dept.
               </div>
               <div className="w-px h-6 bg-slate-300 hidden md:block"></div>
               <div className="text-xl font-serif font-bold text-slate-800 flex items-center gap-3">
                  <Database className="text-amber-500" size={20} /> Reidin
               </div>
               <div className="w-px h-6 bg-slate-300 hidden md:block"></div>
               <div className="text-xl font-serif font-bold text-slate-800 flex items-center gap-3">
                  <Layers className="text-amber-500" size={20} /> Bayut Data
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

// --- SUB-COMPONENTS (STYLED) ---

const ToolCard = ({ to, icon, label, color }) => (
  <Link to={to} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all group">
     <div className={`mb-4 text-slate-400 group-hover:${color} transition-colors transform group-hover:scale-110 duration-300`}>
        {React.cloneElement(icon, { size: 36 })}
     </div>
     <span className="font-bold text-sm text-slate-600 group-hover:text-slate-900 tracking-wide">{label}</span>
  </Link>
);

const LuxuryStep = ({ step, icon, title, desc }) => (
   <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/50 hover:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden">
      {/* Step Number Background */}
      <div className="absolute -right-4 -bottom-10 text-[10rem] font-serif font-bold text-slate-800/30 group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
         {step}
      </div>
      
      <div className="relative z-10">
         <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 text-slate-900">
            {icon}
         </div>
         <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>
         <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
         
         <div className="mt-6 flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Learn More <ArrowRight size={14} />
         </div>
      </div>
   </div>
);

const VerdictBox = ({ icon, title, winner, desc, color, iconColor }) => (
  <div className={`p-8 rounded-3xl border ${color} hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col`}>
     <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm ${iconColor}`}>
          {icon}
        </div>
        <ArrowUpRight className="text-slate-300" size={20} />
     </div>
     <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{title}</div>
     <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{winner}</h3>
     <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-80 mt-auto">"{desc}"</p>
  </div>
);

export default HomePage;