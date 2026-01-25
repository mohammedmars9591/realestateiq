import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Building2, Crown, Award, Wallet, 
  Zap, Activity, Map, ShieldCheck, Gem, BarChart3, HardHat, 
  CheckCircle2, LineChart, Globe, Database
} from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/areaData';
import { BUILDERS } from '../data/buildersData';

const HomePage = () => {
  // Safe slice to avoid errors
  const featuredAreas = (DUBAI_AREAS || []).slice(0, 4);
  const featuredBuilders = (BUILDERS || []).slice(0, 4);

  return (
    <div className="fade-in bg-slate-50 font-sans text-slate-900">
      <SEO 
        title="RealEstateIQ | AI-Powered Dubai Property Investment Analysis" 
        description="Stop guessing. Access verified rental yields, capital appreciation forecasts, and builder reliability scores for 50+ Dubai areas. The #1 tool for smart investors."
      />

      {/* --- 1. LIVE MARKET TICKER (NEW) --- */}
      <div className="bg-slate-900 text-slate-400 text-[10px] md:text-xs py-2 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 animate-pulse">
            <span className="flex items-center gap-1 text-emerald-400 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Market Active</span>
            <span className="hidden md:inline">Dubai Transactions (24h): <span className="text-white">AED 1.2B</span></span>
            <span className="hidden md:inline">Top Gainer: <span className="text-emerald-400">Palm Jebel Ali (+4.2%)</span></span>
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
            Stop guessing with outdated listings. Use advanced <strong>AI Analytics, Heatmaps, and Scoring Models</strong> to find the highest ROI opportunities in Dubai.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/heatmap" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-xl hover:shadow-blue-600/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              <Map size={20} /> Open ROI Heatmap
            </Link>
            <Link to="/compare" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2">
              <BarChart3 size={20} /> Compare Areas
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col items-center">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Intelligence Powered By</p>
             <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simple Text Logos for Trust */}
                <span className="font-serif font-bold text-lg text-slate-800">Dubai Land Dept</span>
                <span className="font-serif font-bold text-lg text-slate-800">Reidin</span>
                <span className="font-serif font-bold text-lg text-slate-800">Bayut Data</span>
             </div>
          </div>
        </div>
        
        {/* Abstract Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-0"></div>
      </div>

      {/* --- 3. QUICK TOOLS GRID --- */}
      <div className="max-w-5xl mx-auto px-4 -mt-24 relative z-20 mb-24">
         <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <ToolCard to="/areas" icon={<Globe />} label="Explore Areas" color="text-blue-600" hover="hover:bg-blue-50" />
            <ToolCard to="/builders" icon={<HardHat />} label="Rate Developers" color="text-orange-600" hover="hover:bg-orange-50" />
            <ToolCard to="/heatmap" icon={<TrendingUp />} label="ROI Heatmap" color="text-emerald-600" hover="hover:bg-emerald-50" />
            <ToolCard to="/compare" icon={<LineChart />} label="Compare Tools" color="text-purple-600" hover="hover:bg-purple-50" />
         </div>
      </div>

      {/* --- 4. VALUE PROPOSITION (HOW IT WORKS) - NEW --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How Smart Investors Win</h2>
            <p className="text-slate-500 mt-3">We replace "gut feeling" with 50+ data points per property.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureStep 
               step="01" 
               title="Analyze the Heatmap" 
               desc="Instantly spot high-yield zones vs. over-supplied areas using our color-coded map."
            />
            <FeatureStep 
               step="02" 
               title="Vet the Developer" 
               desc="Check our 'Delivery Track Record' scores to avoid delayed projects and bad quality."
            />
            <FeatureStep 
               step="03" 
               title="Forecast Returns" 
               desc="Use our AI prediction model to see estimated resale value in 2028-2030."
            />
         </div>
      </div>

      {/* --- 5. TRENDING DISTRICTS --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Trending Districts</h2>
            <p className="text-slate-500 mt-2">Highest transaction volume zones this month.</p>
          </div>
          <Link to="/areas" className="text-blue-600 font-bold hover:underline hidden md:block">View All →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAreas.map((area) => (
            <Link to={`/area/${area.id}`} key={area.id} className="group relative block h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200">
              <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-1000 group-hover:scale-110`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute top-5 left-5 z-10">
                <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Crown size={10} className="fill-amber-400" /> {area.category}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                <div className="mt-auto mb-3">
                   <h3 className="text-2xl font-bold text-white leading-tight mb-1 group-hover:text-amber-400 transition-colors">{area.name}</h3>
                   <div className="h-0.5 w-12 bg-amber-500 rounded-full mb-2"></div>
                </div>

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
                      <div className="text-amber-400 font-bold text-lg">{area.overallScore}/10</div>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- 6. FEATURED DEVELOPERS --- */}
      <div className="bg-slate-100 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="flex justify-between items-end mb-10">
             <div>
               <h2 className="text-3xl font-bold text-slate-900">Developer Reliability Index</h2>
               <p className="text-slate-500 mt-2">Don't buy without checking the track record.</p>
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
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">{builder.tier}</div>
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

      {/* --- 7. ANALYST VERDICTS (2026) --- */}
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

      {/* --- 8. CTA SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
         <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-3xl font-bold mb-4">Ready to find your next investment?</h2>
               <p className="text-blue-100 mb-8 max-w-xl mx-auto">Access the same data institutional investors use. Free for a limited time.</p>
               <Link to="/areas" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">Start Exploring</Link>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
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