import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, TrendingUp, ShieldCheck, Wallet, Plane, ShoppingBag, Train,
  BarChart3, Zap, Scale, Trophy, AlertTriangle, ArrowUpRight, Swords, Building2, MapPin, CheckCircle
} from 'lucide-react';
import SEO from '../components/SEO';

// --- DATA IMPORTS ---
import { DUBAI_AREAS } from '../data/emiratesData'; 
import { BUILDERS } from '../data/buildersData';
import WhatsAppButton from '../components/WhatsAppButton'; 

const AreaComparison = () => {
  // --- STATE MANAGEMENT ---
  const [mode, setMode] = useState('areas'); // 'areas' or 'builders'
  
  // Area State (Defaults)
  const [area1Id, setArea1Id] = useState('jvc'); 
  const [area2Id, setArea2Id] = useState('yas-island');
  
  // Builder State
  const [builder1Id, setBuilder1Id] = useState('emaar');
  const [builder2Id, setBuilder2Id] = useState('binghatti');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- HELPER: GET DATA OBJECTS ---
  const item1 = mode === 'areas' 
    ? (DUBAI_AREAS.find(a => a.id === area1Id) || DUBAI_AREAS[0])
    : (BUILDERS.find(b => b.id === builder1Id) || BUILDERS[0]);

  const item2 = mode === 'areas' 
    ? (DUBAI_AREAS.find(a => a.id === area2Id) || DUBAI_AREAS[1])
    : (BUILDERS.find(b => b.id === builder2Id) || BUILDERS[1]);

  // --- FUTURESCOPE SIMULATOR ---
  const simulateGrowth = (item) => {
    if (!item) return { rate: 0, profit: 0 }; 

    let growthRate = 0;
    const initial = 1000000; // 1M AED Benchmark

    if (mode === 'areas') {
      if (item.category === 'High Yield') growthRate = 0.25;
      if (item.category === 'Appreciation') growthRate = 0.45;
      if (item.category === 'Luxury') growthRate = 0.30;
      if (item.category === 'Gaming Resort') growthRate = 0.60;
      growthRate += ((item.overallScore || 5) - 7) * 0.02;
    } else {
      if (item.tier === 'Ultra Luxury') growthRate = 0.40;
      if (item.tier === 'High End') growthRate = 0.35;
      if (item.tier === 'Mid-Market') growthRate = 0.25;
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

  // --- SAFE ACCESSORS ---
  const i1Scores = item1.scores || {};
  const i2Scores = item2.scores || {};
  const i1Conn = item1.connectivity || {};
  const i2Conn = item2.connectivity || {};

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen pt-8">
      <SEO 
        title={`Compare ${mode === 'areas' ? 'Areas' : 'Developers'} | EstateIQ`} 
        description="Detailed side-by-side comparison of ROI, Connectivity, and Future Growth."
      />

      {/* HEADER & TOGGLE */}
      <div className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Investment <span className="text-blue-600">Battleground</span>
        </h1>
        
        <div className="inline-flex bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm mt-4">
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
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-900 text-white rounded-full items-center justify-center border-4 border-white shadow-lg z-20">
              <Swords size={24} />
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Contender 1</label>
               <select 
                 className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                 value={mode === 'areas' ? area1Id : builder1Id}
                 onChange={(e) => mode === 'areas' ? setArea1Id(e.target.value) : setBuilder1Id(e.target.value)}
               >
                 {(mode === 'areas' ? DUBAI_AREAS : BUILDERS).map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
               </select>
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Contender 2</label>
               <select 
                 className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                 value={mode === 'areas' ? area2Id : builder2Id}
                 onChange={(e) => mode === 'areas' ? setArea2Id(e.target.value) : setBuilder2Id(e.target.value)}
               >
                 {(mode === 'areas' ? DUBAI_AREAS : BUILDERS).map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
               </select>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN: DATA BATTLE --- */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 1. HEAD-TO-HEAD METRICS */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
             <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider py-4 text-center">
                <div className="text-slate-400">Comparison</div>
                <div className="truncate px-2">{item1.name}</div>
                <div className="truncate px-2">{item2.name}</div>
             </div>
             
             {mode === 'areas' ? (
               <>
                 <StatRow label="Avg. Price" val1={item1.avgPrice} val2={item2.avgPrice} />
                 <StatRow label="Rental Yield" val1={item1.roi} val2={item2.roi} highlight />
                 <StatRow label="Overall Score" val1={item1.overallScore} val2={item2.overallScore} isScore />
                 <StatRow label="Cash Flow Score" val1={i1Scores.cashFlow} val2={i2Scores.cashFlow} isScore />
                 <StatRow label="Risk Level" val1={i1Scores.risk} val2={i2Scores.risk} inverse />
                 <StatRow label="Lifestyle" val1={i1Scores.lifestyle} val2={i2Scores.lifestyle} isScore />
               </>
             ) : (
               <>
                 <StatRow label="Trust Score" val1={i1Scores.trust} val2={i2Scores.trust} isScore highlight />
                 <StatRow label="Delivery Reliability" val1={i1Scores.deliveryReliability} val2={i2Scores.deliveryReliability} isScore />
                 <StatRow label="Build Quality" val1={i1Scores.constructionQuality} val2={i2Scores.constructionQuality} isScore />
                 <StatRow label="Est. Year" val1={item1.established} val2={item2.established} />
                 <StatRow label="Total Projects" val1={item1.portfolio?.totalProjects} val2={item2.portfolio?.totalProjects} />
               </>
             )}
          </div>

          {/* 2. CONNECTIVITY BATTLE (Only for Areas) */}
          {mode === 'areas' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <Train size={20} className="text-blue-600"/> Connectivity Showdown
               </h3>
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <div className="font-bold text-center text-blue-600 mb-2">{item1.name}</div>
                     <ConnItem icon={<Plane size={16}/>} label="Airport" val={i1Conn.airport?.mins} />
                     <ConnItem icon={<ShoppingBag size={16}/>} label="Mall" val={i1Conn.mall?.mins} />
                     <ConnItem icon={<Building2 size={16}/>} label="Downtown" val={i1Conn.business?.mins || "N/A"} />
                  </div>
                  <div className="space-y-4 border-l border-slate-100 pl-8">
                     <div className="font-bold text-center text-purple-600 mb-2">{item2.name}</div>
                     <ConnItem icon={<Plane size={16}/>} label="Airport" val={i2Conn.airport?.mins} />
                     <ConnItem icon={<ShoppingBag size={16}/>} label="Mall" val={i2Conn.mall?.mins} />
                     <ConnItem icon={<Building2 size={16}/>} label="Downtown" val={i2Conn.business?.mins || "N/A"} />
                  </div>
               </div>
            </div>
          )}

          {/* 3. FUTURESCOPE SIMULATOR --- */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-widest text-xs mb-4">
                  <Zap size={16} /> FutureScope™ Forecast (5-Year)
                </div>
                
                <div className="space-y-6">
                   {/* BAR 1 */}
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-bold text-blue-300">{item1.name}</span>
                         <span className="font-bold">+{sim1.rate}%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
                         <div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${Math.min(sim1.rate * 1.5, 100)}%` }}></div>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Proj. Profit (1M AED): {sim1.profit}</div>
                   </div>

                   {/* BAR 2 */}
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-bold text-purple-300">{item2.name}</span>
                         <span className="font-bold">+{sim2.rate}%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
                         <div className="bg-purple-500 h-full transition-all duration-1000" style={{ width: `${Math.min(sim2.rate * 1.5, 100)}%` }}></div>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Proj. Profit (1M AED): {sim2.profit}</div>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4">
                   <Trophy size={32} className="text-yellow-500 shrink-0" />
                   <div>
                      <h4 className="font-bold text-lg text-yellow-400 mb-1">Winner: {winner.name}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {mode === 'areas' 
                          ? `Higher growth potential driven by ${winner.category} demand.` 
                          : `Stronger capital appreciation track record and brand power.`}
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: PROFILES --- */}
        <div className="space-y-6">
           <ProfileCard item={item1} color="bg-blue-50 border-blue-100" titleColor="text-blue-700" mode={mode} />
           <ProfileCard item={item2} color="bg-purple-50 border-purple-100" titleColor="text-purple-700" mode={mode} />

           {/* VERDICT BOX */}
           <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                 <Scale size={20} className="text-slate-400" /> AI Recommendation
              </h3>
              <div className="space-y-3">
                 <VerdictRow label="Safety First" 
                   winner={mode === 'areas' 
                     ? (item1.overallScore > item2.overallScore ? item1.name : item2.name)
                     : (i1Scores.trust > i2Scores.trust ? item1.name : item2.name)
                   } 
                   color="text-green-600" 
                 />
                 <VerdictRow label="Max Growth" winner={winner.name} color="text-blue-600" />
                 {mode === 'areas' && (
                   <VerdictRow label="Best Cash Flow" 
                     winner={parseFloat(item1.roi) > parseFloat(item2.roi) ? item1.name : item2.name} 
                     color="text-purple-600" 
                   />
                 )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatRow = ({ label, val1, val2, highlight, isScore, inverse }) => {
  const v1 = parseFloat(val1) || 0;
  const v2 = parseFloat(val2) || 0;
  
  // Logic: If inverse (like Risk), lower is better. Otherwise higher is better.
  const win1 = inverse ? v1 < v2 : v1 > v2;
  const isTie = v1 === v2;

  return (
    <div className={`grid grid-cols-3 py-4 border-b border-slate-100 text-sm text-center items-center hover:bg-slate-50 transition ${highlight ? 'bg-yellow-50/50' : ''}`}>
      <div className="font-medium text-slate-500 text-left pl-6">{label}</div>
      <div className={`font-bold ${isScore && win1 ? 'text-green-600' : 'text-slate-900'}`}>{val1 || "N/A"}</div>
      <div className={`font-bold ${isScore && !win1 && !isTie ? 'text-green-600' : 'text-slate-900'}`}>{val2 || "N/A"}</div>
    </div>
  );
};

const ConnItem = ({ icon, label, val }) => (
  <div className="flex justify-between items-center text-sm">
    <div className="flex items-center gap-2 text-slate-500">
      {icon} {label}
    </div>
    <div className="font-bold text-slate-900">{val || "--"}</div>
  </div>
);

const VerdictRow = ({ label, winner, color }) => (
  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
     <span className="text-xs font-bold text-slate-400 uppercase">{label}</span>
     <span className={`font-bold text-sm ${color}`}>{winner}</span>
  </div>
);

const ProfileCard = ({ item, color, titleColor, mode }) => (
  <div className={`p-6 rounded-3xl border ${color} flex flex-col h-full`}>
     <div className={`text-lg font-extrabold mb-2 ${titleColor}`}>{item.name}</div>
     <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold uppercase tracking-wide text-slate-500 border border-slate-100">
           {mode === 'areas' ? item.category : item.tier}
        </span>
     </div>
     
     {/* Amenities List */}
     {mode === 'areas' && item.amenities && (
       <div className="flex flex-wrap gap-1 mb-4">
         {item.amenities.slice(0,3).map(am => (
           <span key={am} className="text-[10px] bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">{am}</span>
         ))}
       </div>
     )}

     <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
        {mode === 'areas' ? item.description : item.usp}
     </p>
     
     <WhatsAppButton data={item} type={mode === 'areas' ? 'area' : 'builder'} />
  </div>
);

export default AreaComparison;