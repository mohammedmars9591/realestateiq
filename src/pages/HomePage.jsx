import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Building2, Crown, Award, Wallet, 
  Zap, Activity, Map, ShieldCheck, Gem, BarChart3, HardHat, 
  CheckCircle2, LineChart, Globe, Database, Layers, Star
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
        description="Stop guessing. Access verified rental yields, capital appreciation forecasts, and builder reliability scores for 50+ Dubai areas."
      />

      {/* --- 1. LIVE MARKET TICKER --- */}
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
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live 2026 Market Forecasts
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            Smart Data for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Investors</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Stop guessing with outdated listings. Use advanced <strong>AI Analytics, Heatmaps, and Scoring Models</strong> to find the highest ROI opportunities in Dubai.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/heatmap" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-xl hover:shadow-blue-600/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              <Map size={20} /> Open ROI Heatmap
            </Link>
            <Link to="/compare" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2 shadow-sm">
              <BarChart3 size={20} /> Compare Areas
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Intelligence Powered By</p>
             <div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-serif font-bold text-xl text-slate-800 flex items-center gap-2"><Globe size={18} className="text-blue-600"/> Dubai Land Dept</span>
                <span className="font-serif font-bold text-xl text-slate-800 flex items-center gap-2"><Database size={18} className="text-blue-600"/> Reidin</span>
                <span className="font-serif font-bold text-xl text-slate-800 flex items-center gap-2"><Layers size={18} className="text-blue-600"/> Bayut Data</span>
             </div>
          </div>
        </div>
        
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-0"></div>
      </div>

      {/* --- 3. QUICK TOOLS GRID (LUXURY CARDS) --- */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-20 mb-24">
         <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <ToolCard to="/areas" icon={<Globe />} label="Explore Areas" color="text-blue-600" />
            <ToolCard to="/builders" icon={<HardHat />} label="Rate Developers" color="text-orange-600" />
            <ToolCard to="/heatmap" icon={<TrendingUp />} label="ROI Heatmap" color="text-emerald-600" />
            <ToolCard to="/compare" icon={<LineChart />} label="Compare Tools" color="text-purple-600" />
         </div>
      </div>

      {/* --- 4. HOW SMART INVESTORS WIN (LUXURY CARDS) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
         <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-blue-100 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
               The Methodology
            </div>
            <h2 className="text-4xl font-serif font-bold text-slate-900">How Smart Investors Win</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">We replace "gut feeling" with 50+ institutional-grade data points per property.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LuxuryFeatureCard 
               step="01" 
               title="Analyze the Heatmap" 
               desc="Instantly spot high-yield zones vs. over-supplied areas using our proprietary color-coded market algorithms."
               icon={<Map className="text-white" size={24} />}
               color="from-blue-500 to-blue-700"
            />
            <LuxuryFeatureCard 
               step="02" 
               title="Vet the Developer" 
               desc="Avoid delays. Check our 'Delivery Track Record' scores to filter builders by reliability and finish quality."
               icon={<ShieldCheck className="text-white" size={24} />}
               color="from-slate-700 to-slate-900"
            />
            <LuxuryFeatureCard 
               step="03" 
               title="Forecast Returns" 
               desc="Use our AI prediction model to visualize estimated resale value and rental income for 2028-2030."
               icon={<TrendingUp className="text-white" size={24} />}
               color="from-emerald-500 to-emerald-700"
            />
         </div>
      </div>

      {/* --- 5. TRENDING DISTRICTS (PREMIUM PROPERTY CARDS) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-slate-900">Trending Districts</h2>
            <p className="text-slate-500 mt-2">Highest transaction volume zones this month.</p>
          </div>
          <Link to="/areas" className="text-blue-600 font-bold hover:underline hidden md:block flex items-center gap-2">View All <ArrowRight size={16}/></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAreas.map((area) => (
            <Link to={`/area/${area.id}`} key={area.id} className="group relative block h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-slate-100">
              {/* Image Layer with Gradient Overlay */}
              <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-1000 group-hover:scale-110`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              </div>
              
              {/* Luxury Badge */}
              <div className="absolute top-5 left-5 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Crown size={10} className="text-amber-400" /> {area.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                <div className="mt-auto mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                   <h3 className="text-3xl font-serif font-bold text-white leading-none mb-2">{area.name}</h3>
                   <div className="w-12 h-1 bg-amber-500 rounded-full mb-2"></div>
                </div>

                {/* Glass Stats Panel */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex justify-between items-center group-hover:bg-white/20 transition-colors">
                   <div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mb-0.5">Est. Yield</div>
                      <div className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                        <TrendingUp size={14} /> {area.roi}
                      </div>
                   </div>
                   <div className="w-px h-8 bg-white/20"></div>
                   <div className="text-right">
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mb-0.5">Score</div>
                      <div className="text-amber-400 font-bold text-lg">{area.overallScore}/10</div>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- 6. ANALYST VERDICTS (LUXURY SECTION) --- */}
      <div className="bg-slate-900 py-24 mb-24 text-white relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
               <div>
                 <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">
                    <Star size={14} fill="currentColor" /> Premium Intelligence
                 </div>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                   Analyst Verdicts: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">2026 Edition</span>
                 </h2>
               </div>
               <Link to="/heatmap" className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-slate-900 transition text-sm font-bold">
                  Read Full Report
               </Link>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <VerdictBox 
                 icon={<TrendingUp size={24} />} title="Best for ROI" winner="Dubai South" 
                 desc="The $35B Airport expansion makes this the #1 capital growth zone." 
                 color="border-blue-500/30 bg-blue-900/20" iconColor="text-blue-400"
               />
               <VerdictBox 
                 icon={<ShieldCheck size={24} />} title="Safest Investment" winner="Emaar Properties" 
                 desc="Government backing and master communities remain the 'Gold Standard'." 
                 color="border-emerald-500/30 bg-emerald-900/20" iconColor="text-emerald-400"
               />
               <VerdictBox 
                 icon={<Wallet size={24} />} title="Best Cash Flow" winner="JVC & Danube" 
                 desc="High rental demand combined with 1% payment plans creates high net yields." 
                 color="border-purple-500/30 bg-purple-900/20" iconColor="text-purple-400"
               />
               <VerdictBox 
                 icon={<Gem size={24} />} title="Luxury Pick" winner="Palm Jebel Ali" 
                 desc="Offering villa entry prices 50% lower than Palm Jumeirah. Massive upside." 
                 color="border-amber-500/30 bg-amber-900/20" iconColor="text-amber-400"
               />
             </div>
         </div>
      </div>

      {/* --- 7. FEATURED DEVELOPERS --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
         <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-6">
           <div>
             <h2 className="text-3xl font-serif font-bold text-slate-900">Developer Reliability</h2>
             <p className="text-slate-500 mt-2">Don't buy without checking the track record.</p>
           </div>
           <Link to="/builders" className="text-blue-600 font-bold hover:underline hidden md:block">Compare All →</Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {featuredBuilders.map((builder) => (
             <Link to={`/builder/${builder.id}`} key={builder.id} className="group block hover:no-underline">
               <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col relative overflow-hidden group-hover:border-blue-200">
                 <div className={`absolute top-0 left-0 w-full h-1 ${builder.imageColor || 'bg-slate-800'}`}></div>
                 <div className="flex justify-between items-start mb-6">
                   <div className={`p-3 rounded-xl bg-slate-50 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors`}>
                     <Building2 size={24} />
                   </div>
                   {builder.id === 'emaar' && <Crown size={20} className="text-amber-500" />}
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1">{builder.name}</h3>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-6">{builder.tier}</div>
                 
                 <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                   <span className="text-slate-500 font-medium">Trust Score</span>
                   <span className={`font-bold text-lg ${builder.scores?.trust >= 9 ? 'text-green-600' : 'text-blue-600'}`}>{builder.scores?.trust}<span className="text-xs text-slate-400">/10</span></span>
                 </div>
               </div>
             </Link>
           ))}
         </div>
      </div>

      {/* --- 8. CTA SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
         <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-4">Ready to find your next investment?</h2>
               <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">Access the same data institutional investors use. Free for a limited time.</p>
               <Link to="/areas" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">Start Exploring Now</Link>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
         </div>
      </div>
    </div>
  );
};

// --- LUXURY SUB-COMPONENTS ---

const ToolCard = ({ to, icon, label, color }) => (
  <Link to={to} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all group">
     <div className={`mb-4 text-slate-400 group-hover:${color} transition-colors transform group-hover:scale-110 duration-300`}>
        {React.cloneElement(icon, { size: 36 })}
     </div>
     <span className="font-bold text-sm text-slate-600 group-hover:text-slate-900 tracking-wide">{label}</span>
  </Link>
);

const LuxuryFeatureCard = ({ step, title, desc, icon, color }) => (
   <div className="bg-white border border-slate-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-10 rounded-bl-[4rem] transition-opacity`}></div>
      <div className="flex justify-between items-start mb-6 relative z-10">
         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${color}`}>
            {icon}
         </div>
         <span className="text-6xl font-serif font-bold text-slate-100 group-hover:text-slate-200 transition-colors">{step}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
   </div>
);

const VerdictBox = ({ icon, title, winner, desc, color, iconColor }) => (
  <div className={`p-8 rounded-3xl border ${color} hover:shadow-xl transition-all hover:-translate-y-1 h-full backdrop-blur-sm`}>
     <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 shadow-sm ${iconColor}`}>
       {icon}
     </div>
     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{title}</div>
     <h3 className="text-2xl font-serif font-bold text-white mb-3">{winner}</h3>
     <p className="text-sm text-slate-400 leading-relaxed opacity-90">"{desc}"</p>
  </div>
);

export default HomePage;