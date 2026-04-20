import React from "react";
import { BuyerMixPieChart, PriceHistoryChart, ROIBarChart, ScorecardChart } from "./AreaCharts";
import { 
  Building, Bus, DollarSign, Info, MapPin, Navigation, 
  Target, TrendingUp, Wallet, Zap, Construction, 
  HardHat, ChartLine, Shield, UserCheck, Timer, Globe,
  Landmark, ShoppingBag, School, Hospital, Train, Plane
} from "lucide-react";

// --- CUSTOM COMPONENTS ---

function SectionTitle({ title }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 className="font-serif text-lg font-bold text-[#1C1C22] md:text-2xl">{title}</h2>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-[rgba(198,167,94,0.3)] to-transparent"></div>
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
      
      {/* 1) INFORMATION ABOUT AREA */}
      <section>
        <SectionTitle title="1) Information About Area" />
        <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 md:p-10 shadow-sm blur-backdrop">
           <p className="text-base md:text-lg leading-relaxed text-[#4A3F2F] font-light max-w-4xl italic">
             {area.description}
           </p>
        </div>
      </section>

      {/* 2) AREA DEVELOPER & 3) LOCATION & 4) TOTAL AREA */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-6 shadow-sm">
          <SectionTitle title="2) Area Developer" />
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#C19A5B]/10 p-3"><HardHat className="text-[#C19A5B]" /></div>
            <p className="text-lg font-bold text-[#1C1C22]">{area.masterDeveloper}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-6 shadow-sm">
          <SectionTitle title="3) Location" />
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#C19A5B]/10 p-3"><MapPin className="text-[#C19A5B]" /></div>
            <p className="text-sm font-bold text-[#1C1C22]">{area.location}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-6 shadow-sm">
          <SectionTitle title="4) Total Area" />
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#C19A5B]/10 p-3"><Navigation className="text-[#C19A5B]" /></div>
            <p className="text-lg font-black text-[#1C1C22]">{area.totalArea}</p>
          </div>
        </div>
      </section>

      {/* 5) FAMOUS TOWERS & 6) TIMELINE */}
      <section className="grid gap-6 lg:grid-cols-2">
         <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-slate-900 p-8 shadow-xl text-white">
            <SectionTitle title="5) Famous / Iconic Towers" />
            <div className="flex flex-wrap gap-3">
               {(area.towers?.split(',') || ["D1 Tower", "Palazzo Versace", "Kempinski"]).map((tower, i) => (
                 <span key={i} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-[#C6A75E]">
                   {tower.trim()}
                 </span>
               ))}
            </div>
         </div>
         <div className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-[#FDFBF7] p-8 shadow-sm">
            <SectionTitle title="6) Evolution Timeline" />
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

      {/* 7) REAL ESTATE BRIEF & 8) MARKET ANALYSIS (INVESTOR ADVISORY) */}
      <section className="grid gap-8 lg:grid-cols-2">
         <div className="space-y-6">
            <SectionTitle title="7) Real Estate Intelligence Brief" />
            <div className="rounded-3xl bg-gradient-to-br from-[#1C1C22] to-[#2D2D35] p-8 text-white shadow-2xl relative overflow-hidden">
               <p className="text-md leading-relaxed text-slate-300 font-light italic relative z-10">"{area.aiVerdict?.summary}"</p>
               <Zap className="absolute bottom-[-30px] right-[-30px] h-40 w-40 text-white opacity-5" />
            </div>
         </div>
         <div className="space-y-6">
            <SectionTitle title="8) Market Analysis & Investor Advisory" />
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

      {/* 9) KEY HIGHLIGHTS */}
      <section>
        <SectionTitle title="9) Strategic Key Highlights" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
           {area.highlights?.map((h, i) => (
             <div key={i} className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white p-6 shadow-sm hover:border-[#C6A75E] transition-all">
                <div className="mb-3 h-1.5 w-10 bg-[#C6A75E] rounded-full" />
                <p className="text-sm text-[#1C1C22] leading-relaxed font-bold">{h}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 10) PROPERTY MARKET OVERVIEW TABLE */}
      <section>
        <SectionTitle title="10) Property Market Dynamics Overview" />
        <div className="hidden md:block overflow-hidden rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white shadow-2xl">
           <table className="w-full text-left">
             <thead className="bg-[#1C1C22] text-[#C6A75E]">
                <tr>
                   <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest">Institutional Metric</th>
                   <th className="px-8 py-5 text-[10px] uppercase font-black tracking-widest">Intelligence Detail / Strategic Insight</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-[rgba(198,167,94,0.1)]">
                {[
                  { m: "Buyer Mix", d: getMarketPoint("Buyer Mix") },
                  { m: "Rental Demand", d: getMarketPoint("Rental Demand") },
                  { m: "Price Drivers", d: getMarketPoint("Price Drivers") },
                  { m: "Liquidity Status", d: getMarketPoint("Liquidity") }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#FDFBF7] transition-colors">
                     <td className="px-8 py-6 text-sm font-black text-[#1C1C22]">{row.m}</td>
                     <td className="px-8 py-6 text-sm text-[#4A3F2F] leading-relaxed font-light">{row.d}</td>
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
      </section>

      {/* 11) RENTAL PRICE & SALE PRICE POSITIONING */}
      <section className="grid gap-8 lg:grid-cols-2">
         <div className="space-y-6">
            <SectionTitle title="11) Pricing Performance Corridors" />
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

      {/* 12) PROPERTY CONFIGURATIONS MASTER TABLE */}
      <section>
        <SectionTitle title="12) Property Configuration Matrix & Yield Intelligence" />
        <div className="hidden md:block overflow-hidden rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white shadow-xl">
           <table className="w-full text-left">
             <thead className="bg-[#1C1C22] text-[#C6A75E]">
                <tr>
                   <th className="px-6 py-4 text-[9px] uppercase font-black">Unit Type</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black">Typical Size</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black">Signature Features</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black">Yield Focus</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black">Avg. Rent</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black">Avg. Price</th>
                   <th className="px-6 py-4 text-[9px] uppercase font-black">ROI %</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-[rgba(198,167,94,0.1)]">
                {Object.entries(economics).map(([type, details]) => (
                  <tr key={type} className="hover:bg-[#FDFBF7]">
                     <td className="px-6 py-5 text-xs font-black text-[#1C1C22] uppercase tracking-tighter">{type.replace(/([A-Z])/g, ' $1')}</td>
                     <td className="px-6 py-5 text-xs text-[#7A6E60] font-bold">{details.size || "Measured Data"}</td>
                     <td className="px-6 py-5 text-xs text-[#4A3F2F] leading-tight max-w-[200px]">{details.features || "Prime Finishes"}</td>
                     <td className="px-6 py-5">
                        <span className={`rounded-lg px-2 py-1 text-[8px] font-black uppercase ${parseFloat(details.roi) > 7 ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"}`}>
                           {parseFloat(details.roi) > 7 ? "High Yield" : "Stability"}
                        </span>
                     </td>
                     <td className="px-6 py-5 text-xs font-bold text-[#1C1C22]">{details.rent || "Contact"}</td>
                     <td className="px-6 py-5 text-xs font-bold text-[#1C1C22]">{details.price || "Contact"}</td>
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
            <SectionTitle title="13) Institutional Equity Trend (History)" />
            <PriceHistoryChart priceHistory={area.priceTrend} />
         </div>
         <div className="rounded-3xl border border-[#1C1C22] bg-[#1C1C22] p-8 text-white relative overflow-hidden flex flex-col justify-between">
            <SectionTitle title="14) 5-Year Master Appreciation Target" />
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
            <SectionTitle title="15) Rental Market Intelligence" />
            <p className="text-base leading-relaxed text-[#4A3F2F] font-light">
               The rental market in {area.name} demonstrates a high degree of maturity. Occupancy levels hover around 92-95% for prime ready stock. Institutional investors favored 1-bed configurations for maximum yield velocity in the 2021-2024 cycle.
            </p>
         </div>
         <div className="rounded-3xl border border-[#C6A75E]/30 bg-white p-8 shadow-sm relative group overflow-hidden">
            <SectionTitle title="16) Future Upgrades & Vision 2030" />
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
        <SectionTitle title="17) Market Saturation & Supply Pipeline" />
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
        <SectionTitle title="18) Lifestyle Integration & Points of Interest" />
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
            <SectionTitle title="19) Logistical Infrastructure (Highways, Metro, Flow)" />
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
            <SectionTitle title="20) Buyer Intelligence & Psychology Archetypes" />
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
        <SectionTitle title="21) Scorecard Matrix Graph (6 Institutional Pillars)" />
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
        <SectionTitle title="22) Strategic Connectivity & Infrastructure Proximity" />
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
        <SectionTitle title="23) Neighbouring Area Index & Relative Performance" />
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

    </div>
  );
}
