import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, TrendingUp, ShieldCheck, Wallet, 
  BarChart3, Zap, Scale, Trophy, AlertTriangle, ArrowUpRight, Swords, Building2, MapPin 
} from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/areaData';
import { BUILDERS } from '../data/buildersData';
import WhatsAppButton from '../components/WhatsAppButton'; 

const AreaComparison = () => {
  // --- STATE MANAGEMENT ---
  const [mode, setMode] = useState('areas'); // 'areas' or 'builders'
  
  // Area State
  const [area1Id, setArea1Id] = useState('jvc'); // Default to IDs that definitely exist
  const [area2Id, setArea2Id] = useState('dubai-marina');
  
  // Builder State
  const [builder1Id, setBuilder1Id] = useState('emaar');
  const [builder2Id, setBuilder2Id] = useState('binghatti');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- HELPER: GET DATA OBJECTS ---
  // We use Optional Chaining (?.) and Fallbacks (||) to prevent crashes if data is missing
  const item1 = mode === 'areas' 
    ? (DUBAI_AREAS.find(a => a.id === area1Id) || DUBAI_AREAS[0])
    : (BUILDERS.find(b => b.id === builder1Id) || BUILDERS[0]);

  const item2 = mode === 'areas' 
    ? (DUBAI_AREAS.find(a => a.id === area2Id) || DUBAI_AREAS[1])
    : (BUILDERS.find(b => b.id === builder2Id) || BUILDERS[1]);

  // --- FUTURESCOPE SIMULATOR (ADAPTIVE) ---
  const simulateGrowth = (item) => {
    if (!item) return { rate: 0, profit: 0 }; // Safety check

    let growthRate = 0;
    const initial = 1000000; // 1M AED Benchmark

    if (mode === 'areas') {
      if (item.category === 'High Yield') growthRate = 0.25;
      if (item.category === 'Appreciation') growthRate = 0.45;
      if (item.category === 'Luxury') growthRate = 0.30;
      // Add score bonus
      growthRate += ((item.overallScore || 5) - 7) * 0.02;
    } else {
      // BUILDER LOGIC
      if (item.tier === 'Ultra Luxury') growthRate = 0.40;
      if (item.tier === 'High End') growthRate = 0.35;
      if (item.tier === 'Mid-Market') growthRate = 0.25;
      if (item.tier === 'Affordable') growthRate = 0.20;
      
      const trust = item.scores?.trust || 5;
      growthRate += (trust - 7) * 0.03; 
    }

    const futureValue = initial * (1 + growthRate);
    
    return {
      rate: (growthRate * 100).toFixed(1),
      profit: (futureValue - initial).toLocaleString(undefined, { maximumFractionDigits: 0 }),
    };
  };

  const sim1 = simulateGrowth(item1);
  const sim2 = simulateGrowth(item2);
  const winner = Number(sim1.rate) > Number(sim2.rate) ? item1 : item2;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen pt-8">
      <SEO 
        title={`Compare Dubai ${mode === 'areas' ? 'Areas' : 'Developers'} | EstateIQ`} 
        description="Head-to-head comparison tool. Analyze ROI, Trust Scores, and Future Growth Potential."
      />

      {/* HEADER */}
      <div className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Investment <span className="text-blue-600">Performance Benchmarking</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
           A data-driven assessment of Dubai’s top assets. Compare <strong className="text-slate-900">future growth potential</strong> and <strong className="text-slate-900">rental yields</strong> to optimize your portfolio.
        </p>
        
        {/* --- MODE SWITCHER --- */}
        <div className="inline-flex bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm mt-8">
          <button 
            onClick={() => setMode('areas')}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'areas' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <MapPin size={16} /> Compare Areas
          </button>
          <button 
            onClick={() => setMode('builders')}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'builders' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Building2 size={16} /> Compare Builders
          </button>
        </div>
      </div>

      {/* --- SELECTORS --- */}
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200 mb-12 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
            
            {/* VS BADGE */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-900 text-white rounded-full items-center justify-center border-4 border-white shadow-lg z-20">
              <Swords size={24} />
            </div>

            {/* ITEM 1 SELECTOR */}
            <div>
               <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Select {mode === 'areas' ? 'Area' : 'Builder'} 1</label>
               <select 
                 className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer hover:bg-slate-100 transition"
                 value={mode === 'areas' ? area1Id : builder1Id}
                 onChange={(e) => mode === 'areas' ? setArea1Id(e.target.value) : setBuilder1Id(e.target.value)}
               >
                 {(mode === 'areas' ? DUBAI_AREAS : BUILDERS).map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
               </select>
            </div>

            {/* ITEM 2 SELECTOR */}
            <div>
               <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Select {mode === 'areas' ? 'Area' : 'Builder'} 2</label>
               <select 
                 className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer hover:bg-slate-100 transition"
                 value={mode === 'areas' ? area2Id : builder2Id}
                 onChange={(e) => mode === 'areas' ? setArea2Id(e.target.value) : setBuilder2Id(e.target.value)}
               >
                 {(mode === 'areas' ? DUBAI_AREAS : BUILDERS).map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
               </select>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN: STATS BATTLE --- */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 1. KEY METRICS GRID */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
             <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider py-4 text-center">
                <div>Metric</div>
                <div className="text-blue-600 truncate px-2">{item1.name}</div>
                <div className="text-purple-600 truncate px-2">{item2.name}</div>
             </div>
             
             {/* AREA METRICS */}
             {mode === 'areas' && (
               <>
                 <StatRow label="Avg. Price (1-Bed)" val1={item1.avgPrice || "1.1M"} val2={item2.avgPrice || "1.4M"} />
                 <StatRow label="Rental Yield (ROI)" val1={item1.roi} val2={item2.roi} highlight />
                 <StatRow label="Overall Score" val1={`${item1.overallScore}/10`} val2={`${item2.overallScore}/10`} isScore />
               </>
             )}

             {/* BUILDER METRICS */}
             {mode === 'builders' && (
               <>
                 <StatRow label="Trust Score" val1={`${item1.scores?.trust}/10`} val2={`${item2.scores?.trust}/10`} isScore highlight />
                 <StatRow label="Market Tier" val1={item1.tier} val2={item2.tier} />
                 <StatRow label="Est. Year" val1={item1.established} val2={item2.established} />
                 <StatRow label="Avg. Completion" val1={item1.scores?.delivery || "On Time"} val2={item2.scores?.delivery || "Late"} />
               </>
             )}
          </div>

          {/* 2. FUTURESCOPE SIMULATOR --- */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-widest text-xs mb-4">
                  <Zap size={16} /> FutureScope™ {mode === 'areas' ? 'Appreciation' : 'Brand Value'} Forecast
                </div>
                <h3 className="text-2xl font-bold mb-6">5-Year Growth Potential (2026-2030)</h3>
                
                <div className="space-y-6">
                   {/* BAR 1 */}
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-bold text-blue-300">{item1.name}</span>
                         <span className="font-bold">+{sim1.rate}%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
                         <div className="bg-blue-500 h-full rounded-full transition-all duration-1000" style={{ width: `${Math.min(sim1.rate * 1.5, 100)}%` }}></div>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Est. Profit (on 1M): AED {sim1.profit}</div>
                   </div>

                   {/* BAR 2 */}
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-bold text-purple-300">{item2.name}</span>
                         <span className="font-bold">+{sim2.rate}%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
                         <div className="bg-purple-500 h-full rounded-full transition-all duration-1000" style={{ width: `${Math.min(sim2.rate * 1.5, 100)}%` }}></div>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Est. Profit (on 1M): AED {sim2.profit}</div>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4">
                   <div className="bg-yellow-500 text-black p-2 rounded-lg shrink-0">
                      <Trophy size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg text-yellow-400 mb-1">Winner: {winner.name}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {mode === 'areas' 
                          ? `Projected to outperform due to high ${winner.category} demand and infrastructure growth.` 
                          : `Projected to retain higher value due to ${winner.tier} brand status and superior build quality.`}
                      </p>
                   </div>
                </div>

             </div>
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: QUALITATIVE ANALYSIS --- */}
        <div className="space-y-6">
           
           {/* PROFILE CARD 1 */}
           <ProfileCard item={item1} color="bg-blue-50 border-blue-100" titleColor="text-blue-700" mode={mode} />
           
           {/* PROFILE CARD 2 */}
           <ProfileCard item={item2} color="bg-purple-50 border-purple-100" titleColor="text-purple-700" mode={mode} />

           {/* VERDICT BOX */}
           <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                 <Scale size={20} className="text-slate-400" /> AI Recommendation
              </h3>
              <div className="space-y-4">
                 <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Safety First</div>
                    <div className="font-bold text-slate-900 text-sm">
                       Choose <span className="text-green-600">
                          {mode === 'areas' 
                            ? (item1.overallScore > item2.overallScore ? item1.name : item2.name)
                            : (item1.scores?.trust > item2.scores?.trust ? item1.name : item2.name)
                          }
                       </span>
                    </div>
                 </div>
                 <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Growth Play</div>
                    <div className="font-bold text-slate-900 text-sm">
                       Choose <span className="text-blue-600">{winner.name}</span>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatRow = ({ label, val1, val2, highlight, isScore }) => {
  const v1 = parseFloat(val1) || 0;
  const v2 = parseFloat(val2) || 0;
  const win1 = v1 > v2;
  
  return (
    <div className={`grid grid-cols-3 py-4 border-b border-slate-100 text-sm text-center items-center hover:bg-slate-50 transition ${highlight ? 'bg-yellow-50/50' : ''}`}>
      <div className="font-medium text-slate-500 text-left pl-6">{label}</div>
      <div className={`font-bold ${win1 && isScore ? 'text-green-600' : 'text-slate-900'}`}>{val1}</div>
      <div className={`font-bold ${!win1 && isScore ? 'text-green-600' : 'text-slate-900'}`}>{val2}</div>
    </div>
  );
};

// UPDATED PROFILE CARD WITH WHATSAPP BUTTON
const ProfileCard = ({ item, color, titleColor, mode }) => (
  <div className={`p-6 rounded-3xl border ${color} flex flex-col h-full`}>
     <div className={`text-lg font-extrabold mb-2 ${titleColor}`}>{item.name}</div>
     <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold uppercase tracking-wide text-slate-500 border border-slate-100">
           {mode === 'areas' ? item.category : item.tier}
        </span>
        <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold uppercase tracking-wide text-slate-500 border border-slate-100">
           Score: {mode === 'areas' ? item.overallScore : item.scores?.trust}
        </span>
     </div>
     <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
        {mode === 'areas' ? item.description : item.usp}
     </p>
     
     {/* INSERT NEW BUTTON HERE */}
     <WhatsAppButton data={item} type={mode === 'areas' ? 'area' : 'builder'} />
  </div>
);

export default AreaComparison;