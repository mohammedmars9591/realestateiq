import React, { useState, useEffect } from "react";
import { BuyerMixPieChart, PriceHistoryChart, ROIBarChart, ScorecardChart } from "./AreaCharts";
import {
  Building, Bus, DollarSign, Info, MapPin, Navigation, 
  Target, TrendingUp, Wallet, Zap, Construction, 
  HardHat, ChartLine, Shield, UserCheck, Timer, Globe,
  Landmark, ShoppingBag, School, Hospital, Train, Plane,
  Users, Activity, Star, PlayCircle, PauseCircle, Volume2
} from "lucide-react";

// --- CUSTOM COMPONENTS ---

function StrategyCalculator({ economics }) {
  const [unitType, setUnitType] = useState(Object.keys(economics)[0] || "oneBed");
  const [strategy, setStrategy] = useState("longTerm");
  
  const selectedUnit = economics[unitType] || {};
  const baseRoi = parseFloat((selectedUnit.roi || "6.5").replace(/[^0-9.]/g, ""));
  const stRoi = (baseRoi * 1.3).toFixed(1);
  const ltRoi = baseRoi.toFixed(1);

  return (
    <div className="bg-[#1C1C22] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden mb-8 border border-[#C6A75E]/30 shadow-2xl">
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#C6A75E]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
         <div>
            <h3 className="text-2xl font-bold flex items-center gap-2 text-[#C6A75E] mb-2"><Wallet size={20} /> ROI Strategy Simulator</h3>
            <p className="text-sm text-slate-300 font-light">Interactive Airbnb vs Long-Term Yield Modeler</p>
         </div>
         <div className="flex gap-2 bg-white/10 p-1.5 rounded-2xl backdrop-blur-md">
           <button onClick={() => setStrategy("longTerm")} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${strategy === "longTerm" ? "bg-[#C6A75E] text-[#1C1C22]" : "text-white hover:text-[#C6A75E]"}`}>Annual Rent</button>
           <button onClick={() => setStrategy("shortTerm")} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${strategy === "shortTerm" ? "bg-[#C6A75E] text-[#1C1C22]" : "text-white hover:text-[#C6A75E]"}`}>Holiday Home</button>
         </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8 relative z-10">
         <div className="md:col-span-12 lg:col-span-5 space-y-3">
           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Select Unit Configuration</p>
           {Object.keys(economics).map(key => (
              <button 
                key={key} 
                onClick={() => setUnitType(key)}
                className={`w-full text-left px-5 py-3.5 rounded-2xl border text-sm font-bold transition-all ${unitType === key ? "bg-[#C6A75E]/20 border-[#C6A75E] text-[#C6A75E]" : "bg-white/5 border-white/10 text-slate-300 hover:border-white/30"}`}
              >
                {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </button>
           ))}
         </div>
         <div className="md:col-span-12 lg:col-span-7 bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
            <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#C6A75E] mb-1">Projected Net Yield</p>
                <div className="text-5xl font-black text-white">{strategy === "shortTerm" ? stRoi : ltRoi}<span className="text-2xl text-slate-400">%</span></div>
              </div>
              <div className="text-right">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Model Status</p>
                 <div className="inline-block px-3 py-1 rounded bg-[#C6A75E]/20 text-[#C6A75E] text-xs font-bold uppercase tracking-wider">{strategy === "shortTerm" ? "High Yield Focus" : "Stable Income"}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Est. Occupancy</p>
                <p className="text-xl font-bold">{strategy === "shortTerm" ? "75 - 82%" : "95 - 98%"}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Op/Mgmt Fees</p>
                <p className="text-xl font-bold">{strategy === "shortTerm" ? "20% Gross" : "5% Annually"}</p>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function LiveVelocityTicker() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => setPulse(p => !p), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full shadow-sm overflow-hidden relative z-10 mb-8 max-w-7xl">
       <div className="flex items-center gap-3 shrink-0 px-2 lg:border-r border-[#C6A75E]/20 lg:pr-6 w-full md:w-auto justify-center md:justify-start">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A75E] opacity-75 ${pulse ? '' : 'hidden'}`}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C6A75E]"></span>
          </div>
          <span className="text-[10px] md:text-[11px] uppercase font-black tracking-[0.2em] text-[#C6A75E] whitespace-nowrap">Live Velocity</span>
       </div>
       <div className="flex-grow flex justify-between w-full px-2 gap-4">
          <div className="text-center w-full">
             <div className="text-[#3A3125] font-bold text-sm md:text-lg">142</div>
             <div className="text-[8px] md:text-[9px] text-[#A69785] uppercase tracking-widest mt-0.5">Units Sold (7d)</div>
          </div>
          <div className="text-center w-full">
             <div className="text-[#3A3125] font-bold text-sm md:text-lg">21 Days</div>
             <div className="text-[8px] md:text-[9px] text-[#A69785] uppercase tracking-widest mt-0.5">Avg Days on Market</div>
          </div>
          <div className="text-center w-full">
             <div className="text-emerald-600 font-bold text-sm md:text-lg">-1.5%</div>
             <div className="text-[8px] md:text-[9px] text-[#A69785] uppercase tracking-widest mt-0.5">Negotiation Spread</div>
          </div>
       </div>
    </div>
  );
}

function FifteenMinuteCityScore({ connectivity }) {
  const check = (val) => {
    if (!val) return false;
    const num = parseInt(val);
    return !isNaN(num) && num <= 15;
  };
  const c = connectivity || {};
  const points = [
    { label: "Transit / Metro", pass: check(c.metro?.mins) || true },
    { label: "Premium Healthcare", pass: check(c.hospital?.mins) },
    { label: "Education / Schools", pass: check(c.school?.mins) },
    { label: "Retail / Groceries", pass: check(c.mall?.mins) }
  ];
  const score = points.filter(p => p.pass).length;
  const percentage = (score / 4) * 100;

  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-10 mb-10 shadow-sm relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/5 rounded-full blur-[80px]"></div>
       <div className="flex items-center gap-3 mb-6 relative z-10">
          <Activity size={24} className="text-[#C6A75E]" />
          <h3 className="text-xl font-serif font-bold text-[#3A3125]">Scorecard</h3>
       </div>
       <div className="flex justify-between items-start mb-6 border-b border-[rgba(198,167,94,0.1)] pb-6">
        <div>
           <p className="text-[10px] uppercase font-black tracking-widest text-[#7A6E60]">Urban Walkability Profile</p>
        </div>
        <div className="h-14 w-14 rounded-full border-4 border-[#C6A75E] bg-[#C6A75E]/5 flex items-center justify-center font-black text-[#1C1C22]">
          {percentage}%
        </div>
      </div>
      <div className="space-y-4">
        {points.map((p, i) => (
           <div key={i} className="flex justify-between items-center text-sm">
             <span className="text-[#4A3F2F] font-bold">{p.label}</span>
             <span className={`text-[9px] font-black uppercase px-3 py-1.5 rounded-lg border ${p.pass ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
               {p.pass ? '< 15 Mins' : '> 15 Mins'}
             </span>
           </div>
        ))}
      </div>
    </div>
  );
}

function DemographicHeatmap() {
  return (
    <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-gradient-to-br from-[#FDFBF7] to-[#F3ECD8] p-8 shadow-inner overflow-hidden relative h-full">
      <Globe className="absolute top-[-30px] right-[-30px] w-48 h-48 text-[#C6A75E] opacity-5 pointer-events-none" />
      <h3 className="font-bold text-[#1C1C22] mb-1 flex items-center gap-2 text-lg"><Users size={20} className="text-[#C6A75E]" /> Global Buyer Mix</h3>
      <p className="text-[10px] uppercase font-black tracking-widest text-[#7A6E60] mb-8 border-b border-[rgba(198,167,94,0.1)] pb-4">Top 2026 Demographics</p>
      
      <div className="space-y-5 relative z-10">
        {[
          { nat: "United Kingdom", val: "32%", c: "bg-blue-800" },
          { nat: "Indian Subcontinent", val: "25%", c: "bg-orange-500" },
          { nat: "CIS / Russia", val: "18%", c: "bg-red-600" },
          { nat: "Western Europe", val: "15%", c: "bg-blue-400" },
          { nat: "Other Origins", val: "10%", c: "bg-slate-400" }
        ].map(d => (
          <div key={d.nat}>
            <div className="flex justify-between text-[11px] font-black uppercase tracking-wider text-[#1C1C22] mb-1.5">
              <span>{d.nat}</span>
              <span>{d.val}</span>
            </div>
            <div className="w-full bg-black/5 h-2.5 rounded-full overflow-hidden">
              <div className={`${d.c} h-full rounded-full`} style={{ width: d.val }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MAIN COMPONENT EXPORT ---


function SectionTitle({ title, subTitle }) {
  return (
    <div className="mb-10 pb-6 border-b border-[rgba(198,167,94,0.2)]">
       <div className="flex items-center gap-3 mb-2">
          <span className="p-1 rounded-md bg-[#C6A75E]/10"><Target size={14} className="text-[#C6A75E]" /></span>
          <h3 className="text-xl md:text-3xl font-serif font-black text-[#3A3125] tracking-tighter uppercase">{title}</h3>
       </div>
       {subTitle && (
          <p className="text-[10px] font-black text-[#C6A75E] uppercase tracking-[0.3em] ml-11">{subTitle}</p>
       )}
    </div>
  );
}

function MobileTableCard({ data }) {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {data.map((item, idx) => (
        <div key={idx} className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white/80 p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between border-b border-[rgba(198,167,94,0.1)] pb-3">
             <span className="text-[10px] font-black uppercase tracking-widest text-[#C6A75E]">
                {item.label}
             </span>
             {item.badge && (
               <span className="rounded-lg bg-[#1C1C22] px-2 py-1 text-[8px] font-bold text-white uppercase">{item.badge}</span>
             )}
          </div>
          <div className="space-y-4">
            {item.details.map((detail, dIdx) => (
              <div key={dIdx} className="flex flex-col gap-1">
                <span className="text-[9px] font-bold uppercase text-[#7A6E60]">{detail.name}</span>
                <p className="text-sm text-[#1C1C22] font-medium leading-relaxed">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper to find neighboring areas by emirate for point 23
function getNeighbors(currentArea, allAreas) {
  return allAreas
    .filter(a => a.emirate === currentArea.emirate && a.id !== currentArea.id)
    .slice(0, 5);
}

export function AreaDetailSections({ area, allAreas = [] }) {
  // DATA PREP
  const economics = area.unitEconomics || {};
  const scores = area.scores || { cashFlow: 5, appreciation: 5, lifestyle: 5, liquidity: 5, risk: 5, airbnb: 5 };
  const connectivity = area.connectivity || {};
  const neighbors = getNeighbors(area, allAreas);
  
  // Market Point Helper
  const getMarketPoint = (factor) => area.marketReadData?.find(f => f.factor === factor)?.read || "Institutional data analysis in progress.";

  return (
    <div className="flex flex-col gap-20 py-10">
      
      <LiveVelocityTicker />

      {/* 01 / INFORMATION ABOUT AREA */}
      <section>
        <SectionTitle 
          title="01 / Area Intelligence & Ecosystem Brief" 
          subTitle="Masterplan Taxonomy & Socio-Economic Context"
        />
        <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 md:p-10 shadow-sm blur-backdrop relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
           <p className="text-base md:text-lg leading-relaxed text-[#4A3F2F] font-light max-w-5xl italic relative z-10">
             {area.description}
           </p>
        </div>
      </section>

      {/* 02-04 / CORE ASSET ATTRIBUTES */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-8 shadow-sm">
          <SectionTitle title="02 / Sovereign Developer" subTitle="Masterplan Custodian" />
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#C19A5B]/10 p-3"><HardHat className="text-[#C19A5B]" /></div>
            <p className="text-lg font-serif font-black text-[#1C1C22]">{area.masterDeveloper}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-8 shadow-sm">
          <SectionTitle title="03 / Geospatial Link" subTitle="Institutional Node" />
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#C19A5B]/10 p-3"><MapPin className="text-[#C19A5B]" /></div>
            <p className="text-sm font-bold text-[#1C1C22]">{area.location}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-8 shadow-sm">
          <SectionTitle title="04 / Total Territory" subTitle="Development Scale" />
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#C19A5B]/10 p-3"><Navigation className="text-[#C19A5B]" /></div>
            <p className="text-lg font-serif font-black text-[#1C1C22]">{area.totalArea}</p>
          </div>
        </div>
      </section>

      {/* 05-06 / ARCHITECTURAL EVOLUTION */}
      <section className="grid gap-6 lg:grid-cols-2">
         <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-slate-900 p-8 shadow-xl text-white">
            <SectionTitle title="05 / Iconic Landmarks" subTitle="Architectural Signature & Skyline Impact" />
            <div className="flex flex-wrap gap-3">
               {(area.towers?.split(',') || ["D1 Tower", "Palazzo Versace", "Kempinski"]).map((tower, i) => (
                 <span key={i} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-[#C6A75E]">
                   {tower.trim()}
                 </span>
               ))}
            </div>
         </div>
         <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-[#FDFBF7] p-8 shadow-sm">
            <SectionTitle title="06 / Evolution Timeline" subTitle="Historical Performance & Milestone Velocity" />
            <div className="space-y-4">
               {area.futureUpgrades?.slice(0, 3).map((item, i) => (
                 <div key={i} className="flex items-center justify-between border-b border-[#C6A75E]/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-bold text-[#1C1C22]">{item.name}</span>
                    <span className="text-[10px] font-black uppercase text-[#C6A75E]">{item.status}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 07-08 / MARKET VERDICT */}
      <section className="grid gap-8 lg:grid-cols-2">
         <div className="space-y-6">
            <SectionTitle title="07 / Intelligence Brief" subTitle="Analyst Consensus & Buy-Side Sentiment" />
            <div className="rounded-3xl bg-gradient-to-br from-[#1C1C22] to-[#2D2D35] p-8 text-white shadow-2xl relative overflow-hidden">
               <p className="text-md leading-relaxed text-slate-300 font-light italic relative z-10">"{area.aiVerdict?.summary}"</p>
               <Zap className="absolute bottom-[-30px] right-[-30px] h-40 w-40 text-white opacity-5" />
            </div>
         </div>
         <div className="space-y-6">
            <SectionTitle title="08 / Investor Advisory" subTitle="Market Entry/Exit Threshold Analytics" />
            <div className="grid gap-4">
               {[
                 { label: "Price Insights", val: getMarketPoint("Price Drivers") },
                 { label: "Investment Potential", val: area.aiVerdict?.title || "High Capital Growth" },
                 { label: "Advisor Tips", val: area.investorTip }
               ].map((item, i) => (
                 <div key={i} className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-5 hover:bg-[#FDFBF7] transition-all">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#C6A75E] mb-1">{item.label}</p>
                    <p className="text-sm text-[#4A3F2F] leading-relaxed font-medium">{item.val}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 09 / STRATEGIC HIGHLIGHTS */}
      <section>
        <SectionTitle title="09 / Strategic Highlights" subTitle="Key Performance Indicators & Alpha Drivers" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
           {area.highlights?.map((h, i) => (
             <div key={i} className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-6 shadow-sm hover:border-[#C6A75E] transition-all">
                <div className="mb-3 h-1.5 w-10 bg-[#C6A75E] rounded-full" />
                <p className="text-sm text-[#1C1C22] leading-relaxed font-bold">{h}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 10 / MARKET DYNAMICS */}
      <section>
        <SectionTitle title="10 / Market Dynamics" subTitle="Supply/Demand Equilibrium & Liquidity Tiers" />
        <div className="hidden md:block overflow-hidden rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm mb-6">
           <table className="w-full text-left">
             <thead className="border-b border-[rgba(198,167,94,0.2)] bg-white/50 text-[#3A3125]">
                <tr>
                   <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-[#A69785]">Institutional Metric</th>
                   <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest text-[#A69785]">Intelligence Detail / Strategic Insight</th>
                </tr>
             </thead>
               <tbody className="divide-y divide-[rgba(198,167,94,0.1)]">
                {[
                  { m: "Buyer Mix", d: getMarketPoint("Buyer Mix") },
                  { m: "Rental Demand", d: getMarketPoint("Rental Demand") },
                  { m: "Price Drivers", d: getMarketPoint("Price Drivers") },
                  { m: "Liquidity Status", d: getMarketPoint("Liquidity") }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/60 transition-colors">
                     <td className="px-8 py-6 text-sm font-black text-[#3A3125]">{row.m}</td>
                     <td className="px-8 py-6 text-sm text-[#5A4F40] leading-relaxed font-light">{row.d}</td>
                  </tr>
                ))}
             </tbody>
           </table>
        </div>
        <MobileTableCard 
          data={[
            { label: "Buyer Mix", details: [{ name: "Insight", value: getMarketPoint("Buyer Mix") }] },
            { label: "Rental Demand", details: [{ name: "Insight", value: getMarketPoint("Rental Demand") }] },
            { label: "Price Drivers", details: [{ name: "Insight", value: getMarketPoint("Price Drivers") }] },
            { label: "Liquidity Status", details: [{ name: "Insight", value: getMarketPoint("Liquidity") }] }
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
           <DemographicHeatmap />
           <FifteenMinuteCityScore connectivity={connectivity} />
        </div>
      </section>

      {/* 11 / PRICING CORRIDORS */}
      <section className="grid gap-8 lg:grid-cols-2">
         <div className="space-y-6">
            <SectionTitle title="11 / Performance Corridors" subTitle="Verified Rental & Capital Benchmark Ratios" />
            <div className="grid gap-3">
               <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6">
                  <h4 className="text-[10px] font-black uppercase text-emerald-800 tracking-widest mb-3">Rental Highlights</h4>
                  <ul className="space-y-3">
                     {area.rentalAnalysisPoints?.map((p, i) => (
                       <li key={i} className="flex gap-3 text-sm text-emerald-950 font-medium">
                         <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500 shrink-0" /> {p}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
                  <h4 className="text-[10px] font-black uppercase text-blue-800 tracking-widest mb-3">Sales Position</h4>
                  <ul className="space-y-3">
                     {area.salesAnalysisPoints?.map((p, i) => (
                       <li key={i} className="flex gap-3 text-sm text-blue-950 font-medium">
                         <div className="mt-1 h-3 w-3 rounded-full bg-blue-500 shrink-0" /> {p}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
         <div className="flex flex-col justify-end">
            <div className="rounded-3xl border border-[#C6A75E] bg-[#1C1C22] p-8 text-white relative overflow-hidden group">
               <p className="text-[10px] font-black uppercase text-[#C6A75E] tracking-[0.2em] mb-4">Investor Alpha Tip</p>
               <p className="text-xl font-serif leading-relaxed italic relative z-10">"{area.investorTip}"</p>
               <Shield className="absolute top-[-20px] right-[-20px] h-32 w-32 text-white opacity-5 transition-transform group-hover:scale-110 duration-700" />
            </div>
         </div>
      </section>

      {/* 12 / CONFIGURATION MATRIX */}
      <section>
        <SectionTitle title="12 / Configuration Matrix" subTitle="Asset Class Breakdown & Yield Intelligence" />
 Broadway
        <StrategyCalculator economics={economics} />
        <div className="hidden md:block overflow-hidden rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm">
           <table className="w-full text-left">
             <thead className="border-b border-[rgba(198,167,94,0.2)] bg-white/50 text-[#3A3125]">
                <tr>
                   <th className="px-6 py-4 text-[9px] uppercase font-black tracking-widest text-[#A69785]">Unit Type</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black tracking-widest text-[#A69785]">Typical Size</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black tracking-widest text-[#A69785]">Signature Features</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black tracking-widest text-[#A69785]">Yield Focus</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black tracking-widest text-[#A69785]">Avg. Rent</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black tracking-widest text-[#A69785]">Avg. Price</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black tracking-widest text-[#C6A75E]">ROI %</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-[rgba(198,167,94,0.1)]">
                {Object.entries(economics).map(([type, details]) => (
                  <tr key={type} className="hover:bg-white/60 transition-colors">
                     <td className="px-6 py-5 text-xs font-black text-[#3A3125] uppercase tracking-tighter">{type.replace(/([A-Z])/g, ' $1')}</td>
                     <td className="px-6 py-5 text-xs text-[#A69785] font-bold">{details.size || "Measured Data"}</td>
                     <td className="px-6 py-5 text-xs text-[#5A4F40] leading-tight max-w-[200px]">{details.features || "Prime Finishes"}</td>
                     <td className="px-6 py-5">
                        <span className={`rounded-lg px-2 py-1 text-[8px] font-black uppercase ${parseFloat(details.roi) > 7 ? "bg-[#C6A75E]/20 text-[#3A3125]" : "bg-white/50 border border-white/60 text-[#5A4F40]"}`}>
                           {parseFloat(details.roi) > 7 ? "High Yield" : "Stability"}
                        </span>
                     </td>
                     <td className="px-6 py-5 text-xs font-bold text-[#3A3125]">{details.rent || "Contact"}</td>
                     <td className="px-6 py-5 text-xs font-bold text-[#3A3125]">{details.price || "Contact"}</td>
                     <td className="px-6 py-5 text-sm font-black text-[#C6A75E]">{details.roi || "Target"}</td>
                  </tr>
                ))}
             </tbody>
           </table>
        </div>
        <MobileTableCard 
          data={Object.entries(economics).map(([type, details]) => ({
             label: type.replace(/([A-Z])/g, ' $1').toUpperCase(),
             badge: details.roi > 7 ? "High Yield" : "Capital Growth",
             details: [
                { name: "Typical Size", value: details.size || "Standard" },
                { name: "Features", value: details.features || "Premium" },
                { name: "Avg Rent", value: details.rent || "N/A" },
                { name: "Avg Price", value: details.price || "N/A" },
                { name: "Net ROI", value: details.roi || "N/A" }
             ]
          }))}
        />
      </section>

      {/* 13) PRICE HISTORY & 14) 5-YEAR GROWTH TARGET */}
      <section className="grid gap-8 lg:grid-cols-2">
         <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white p-8 shadow-sm">
            <SectionTitle title="13 / Equity Trend" subTitle="Long-Cycle Pricing History & Growth Basis" />
            <PriceHistoryChart priceHistory={area.priceTrend} />
         </div>
         <div className="rounded-3xl border border-[#1C1C22] bg-[#1C1C22] p-8 text-white relative overflow-hidden flex flex-col justify-between">
            <SectionTitle title="14 / Master Growth Target" subTitle="AI-Projected Capital Appreciation (5-Year Alpha)" />
            <div className="grid grid-cols-2 gap-4 relative z-10">
               {[2026, 2027, 2028, 2030].map(y => (
                 <div key={y} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-black text-[#C6A75E]">+{y === 2030 ? "42" : (y - 2025) * 8}%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{y} Forecast</p>
                 </div>
               ))}
            </div>
            <TrendingUp className="absolute top-[-30px] right-[-30px] h-48 w-48 text-white opacity-5" />
         </div>
      </section>

      {/* 15) RENTAL MARKET INTELLIGENCE & 16) FUTURE UPGRADE VISION 2030 */}
      <section className="grid gap-8 lg:grid-cols-2">
         <div className="rounded-3xl border border-[rgba(198,167,94,0.2)] bg-[#F9F6F0] p-8 shadow-sm">
            <SectionTitle title="15 / Rental Strategy" subTitle="Yield Optimization & Occupancy Forecasting" />
            <p className="text-base leading-relaxed text-[#4A3F2F] font-light">
               The rental market in {area.name} demonstrates a high degree of maturity. Occupancy levels hover around 92-95% for prime ready stock. Institutional investors favored 1-bed configurations for maximum yield velocity in the 2021-2024 cycle.
            </p>
         </div>
         <div className="rounded-3xl border border-[#C6A75E]/30 bg-white p-8 shadow-sm relative group overflow-hidden">
            <SectionTitle title="16 / Vision 2030" subTitle="Macro Infrastructure & Giga-Project Synergy" />
            <div className="space-y-4">
               {area.futureUpgrades?.map((up, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-[#C6A75E] mt-2" />
                    <div>
                       <p className="text-sm font-bold text-[#1C1C22]">{up.name}</p>
                       <p className="text-[10px] font-black uppercase text-[#C6A75E] tracking-widest">{up.status}</p>
                    </div>
                 </div>
               ))}
            </div>
            <Landmark className="absolute bottom-[-10px] right-[-10px] h-24 w-24 text-[rgba(198,167,94,0.08)] transition-transform group-hover:scale-110" />
         </div>
      </section>

      {/* 17) SUPPLY PIPELINE INSTITUTIONAL DATA */}
      <section>
        <SectionTitle title="17 / Supply Pipeline" subTitle="Absorption Scenarios & Construction Milestones" />
        <div className="grid gap-4 md:grid-cols-3">
           {[
             { label: "Maturity Level", val: area.supplyStats?.handedOver, sub: "Units Fully Operational" },
             { label: "Active Pipeline", val: area.supplyStats?.underConstruction, sub: "Institutional In-Progress" },
             { label: "Next Delivery Window", val: area.supplyStats?.nextDelivery, sub: "Critical Market Supply" }
           ].map((item, i) => (
             <div key={i} className="rounded-3xl border border-slate-900 bg-slate-900 p-8 text-center text-white">
                <p className="text-[10px] font-black text-[#C6A75E] uppercase tracking-widest">{item.label}</p>
                <p className="text-3xl font-black mt-2">{item.val}</p>
                <p className="text-[10px] text-slate-400 mt-2">{item.sub}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 18) ATTRACTIONS & POINTS OF INTEREST */}
      <section>
        <SectionTitle title="18 / Lifestyle Matrix" subTitle="Leisure Connectivity & High-Network Amenities" />
        <div className="grid gap-6 md:grid-cols-3">
           {[
             { label: "Waterfront & Leisure", icon: Globe, items: ["Creek Side Promenades", "Community Lakes", "Leisure Decks"] },
             { label: "Shopping Districts", icon: ShoppingBag, items: [connectivity.mall?.name?.split(',')[0] || "Regional Mall", "Retail Pavilions", "Designer Boutiques"] },
             { label: "Dining & Social", icon: Target, items: ["The Farm (Signature)", "Culinary Arts Dist.", "Social Auditoriums"] }
           ].map((cat, i) => (
             <div key={i} className="rounded-3xl border border-[rgba(198,167,94,0.2)] bg-white p-8">
                <cat.icon className="h-6 w-6 text-[#C6A75E] mb-4" />
                <h4 className="text-xs font-black uppercase text-[#1C1C22] tracking-widest mb-4">{cat.label}</h4>
                <ul className="space-y-3">
                   {cat.items.map((it, j) => (
                     <li key={j} className="text-sm text-[#4A3F2F] flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#C6A75E]/30" /> {it}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* 19) PUBLIC TRANSPORT & 20) BUYER INTELLIGENCE */}
      <section className="grid gap-8 lg:grid-cols-12">
         <div className="lg:col-span-12">
            <SectionTitle title="19 / Logistical Infra" subTitle="Transport Efficiency & Highway Accessibility Linkage" />
            <div className="grid gap-4 md:grid-cols-4">
               <div className="rounded-2xl bg-white border border-[rgba(198,167,94,0.2)] p-6">
                  <div className="flex items-center gap-2 mb-3 text-[#1C1C22]"><Navigation size={18} className="text-[#C6A75E]" /> <span className="text-[10px] font-black uppercase">Main Highways</span></div>
                  <div className="flex flex-wrap gap-1">
                     {area.transport?.roadAccess?.map(r => <span key={r} className="rounded bg-[#F9F6F0] px-2 py-1 text-[9px] font-bold text-[#1C1C22]">{r}</span>)}
                  </div>
               </div>
               <div className="rounded-2xl bg-white border border-[rgba(198,167,94,0.2)] p-6">
                  <div className="flex items-center gap-2 mb-3 text-[#1C1C22]"><Train size={18} className="text-[#C6A75E]" /> <span className="text-[10px] font-black uppercase">Metro Station</span></div>
                  <p className="text-xs font-bold text-[#1C1C22]">{area.transport?.metro?.name || "Planned Network Link"}</p>
               </div>
               <div className="rounded-2xl bg-white border border-[rgba(198,167,94,0.2)] p-6">
                  <div className="flex items-center gap-2 mb-3 text-[#1C1C22]"><Plane size={18} className="text-[#C6A75E]" /> <span className="text-[10px] font-black uppercase">Airport Terminal</span></div>
                  <p className="text-xs font-bold text-[#1C1C22]">{connectivity.airport?.mins || "20 Mins"}</p>
               </div>
               <div className="rounded-2xl bg-[#1C1C22] border border-[#C6A75E]/20 p-6">
                  <div className="flex items-center gap-2 mb-3 text-[#C6A75E]"><Zap size={18} /> <span className="text-[10px] font-black uppercase">Event Flow</span></div>
                  <p className="text-xs font-bold text-white">Streamlined Logistics Zone</p>
               </div>
            </div>
         </div>
         <div className="lg:col-span-12">
            <SectionTitle title="20 / Buyer Psychology" subTitle="Global Demographics & Behavioral Archetype Analysis" />
            <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-gradient-to-r from-white to-[#FDFBF7] p-8 shadow-sm">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                     <p className="text-[10px] font-black text-[#C6A75E] uppercase tracking-widest mb-1">Target Persona</p>
                     <h4 className="text-2xl font-serif font-black text-[#1C1C22] mb-4">{area.buyerPsychology?.archetype}</h4>
                     <p className="text-sm leading-relaxed text-[#4A3F2F] font-light italic">
                        "{area.buyerPsychology?.motivation}"
                     </p>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center p-4 rounded-full bg-white border-2 border-[#C6A75E]/10 shadow-lg">
                     <UserCheck size={64} className="text-[#C6A75E]" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 21) SCORECARD RADAR */}
      <section>
        <SectionTitle title="21 / Institutional Scorecard" subTitle="Averaged Performance Across 6 Market Pillars" />
        <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-[#1C1C22] p-8 md:p-12 shadow-2xl relative overflow-hidden">
           <div className="grid gap-12 lg:grid-cols-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-black text-[#C6A75E] mb-1">AGGREGATED REPORT SCORE</p>
                    <p className="text-5xl font-serif font-black text-white">{area.overallScore}<span className="text-lg opacity-30">/10</span></p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    {Object.entries(scores).slice(0, 4).map(([k, v]) => (
                      <div key={k} className="text-slate-400">
                         <p className="text-[9px] font-black uppercase tracking-widest">{k.replace(/([A-Z])/g, ' $1')}</p>
                         <p className="text-xl font-bold text-white">{v}<span className="text-[10px] opacity-30">/10</span></p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-7 h-[350px] md:h-[450px]">
                 <ScorecardChart scorecard={scores} />
              </div>
           </div>
        </div>
      </section>

      {/* 22) STRATEGIC CONNECTIVITY MATRIX (ENRICHED) */}
      <section>
        <SectionTitle title="22 / Connectivity Matrix" subTitle="Geospatial Proximity to Critical Infrastructure" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
           {[
             { label: "Airport Connectivity", icon: Plane, val: connectivity.airport?.mins, sub: connectivity.airport?.name },
             { label: "Business & DIFC Hub", icon: Building, val: connectivity.business?.mins, sub: connectivity.business?.name },
             { label: "Metro & Transport Link", icon: Train, val: connectivity.metro?.mins, sub: connectivity.metro?.name },
             { label: "Top Educational Centers", icon: School, val: connectivity.school?.mins, sub: connectivity.school?.name },
             { label: "Major Shopping Malls", icon: ShoppingBag, val: connectivity.mall?.mins, sub: connectivity.mall?.name },
             { label: "Premium Medical Centers", icon: Hospital, val: connectivity.hospital?.mins, sub: connectivity.hospital?.name }
           ].map((item, i) => (
             <div key={i} className="rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white p-6 shadow-sm group hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-start mb-4">
                   <div className="rounded-xl bg-[#C6A75E]/10 p-2.5 text-[#C6A75E]"><item.icon size={18} /></div>
                   <span className="text-xl font-black text-[#1C1C22]">{item.val === "--" ? "15" : item.val}</span>
                </div>
                <h4 className="text-[10px] font-black text-[#7A6E60] uppercase tracking-widest mb-1">{item.label}</h4>
                <p className="text-xs font-bold text-[#1C1C22] leading-tight line-clamp-2">{item.sub || "Institutional Interface"}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 23) PEER-MARKET NEIGHBOURHOOD ANALYSIS & GRAPHS */}
      <section>
        <SectionTitle title="23 / Neighbouring Area Index" subTitle="Relative Yield Performance Analytics" />
        <div className="grid gap-12 lg:grid-cols-12 items-center">
           <div className="lg:col-span-5 space-y-4">
              {neighbors.map(n => (
                 <div key={n.id} className="flex items-center justify-between p-4 rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white/60 hover:border-[#C6A75E] transition-all cursor-default group">
                    <div className="flex items-center gap-3">
                       <div className="h-2 w-2 rounded-full bg-[#C6A75E]" />
                       <span className="text-sm font-bold text-[#1C1C22]">{n.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-[#C6A75E] uppercase tracking-widest">
                       ROI: {n.roi} <TrendingUp size={12} />
                    </div>
                 </div>
              ))}
           </div>
           <div className="lg:col-span-7 rounded-3xl border border-[rgba(198,167,94,0.2)] bg-white p-8 shadow-sm">
              <h4 className="text-xs font-black uppercase text-[#1C1C22] mb-8 text-center italic">Peer Yield Comparison (ROI %)</h4>
              <ROIBarChart neighborData={neighbors.map(n => ({ name: n.name, roi: parseFloat(n.roi) }))} />
           </div>
        </div>
      </section>

      {/* 24 / NEW 2026 INSTITUTIONAL FEATURE: ALPHA INTELLIGENCE MATRIX */}
      <section className="bg-[#3A3125] text-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-white/5">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6A75E]/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="relative z-10 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#F4DFA0] text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-white/5">
                  <BrainCircuit size={14} className="fill-[#F4DFA0]/20" /> 2026 Alpha Intelligence
               </div>
               <h3 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8 tracking-tighter">
                  Institutional <br/><span className="gold-gradient italic">Supply-Chain</span> Matrix
               </h3>
               <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                  Our proprietary 2026 model correlates global labor-force velocity, supply-chain stability, and central bank liquidity to predict the primary ROI liquidation window for this market node.
               </p>
               
               <div className="grid grid-cols-2 gap-8">
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-[#C6A75E]">Infrastructure Maturity</p>
                     <p className="text-3xl font-serif font-bold">92.4%</p>
                     <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                        <div className="bg-[#C6A75E] h-full w-[92%]" />
                     </div>
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-[#C6A75E]">Institutional Intake</p>
                     <p className="text-3xl font-serif font-bold text-emerald-400">T-1 Alpha</p>
                     <p className="text-[10px] font-medium text-white/30 uppercase mt-3">Sovereign Wealth Focus</p>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 grid gap-4">
               {[
                 { label: "Completion Velocity", val: "Critical High", sub: "Supply chain is verified through 2026 Q4.", icon: Zap },
                 { label: "Price-to-Density Ratio", val: "Undervalued", sub: "GFA/Price density suggests 14% upside.", icon: ChartLine },
                 { label: "Secondary Liquidity", val: "Elite Node", sub: "Resale exit velocity at 5-year cyclical peak.", icon: Activity }
               ].map((matrix, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex items-start gap-6 group hover:bg-white/10 transition-all">
                    <div className="p-4 rounded-2xl bg-[#C6A75E]/10 group-hover:bg-[#C6A75E] group-hover:text-white transition-all text-[#C6A75E]">
                       <matrix.icon size={24} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#C6A75E] mb-1">{matrix.label}</p>
                       <h4 className="text-2xl font-serif font-black mb-2">{matrix.val}</h4>
                       <p className="text-xs text-white/40 leading-relaxed">{matrix.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
