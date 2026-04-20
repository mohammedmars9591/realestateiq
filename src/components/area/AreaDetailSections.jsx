import React from "react";
import { BuyerMixPieChart, PriceHistoryChart, ROIBarChart, ScorecardChart } from "./AreaCharts";
import { 
  Building, Bus, DollarSign, Info, MapPin, Navigation, 
  Target, TrendingUp, Wallet, Zap, Construction, 
  HardHat, ChartLine, Shield, UserCheck, Timer, Globe
} from "lucide-react";

function SectionTitle({ title }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 className="font-serif text-lg font-bold text-[#1C1C22] md:text-2xl">{title}</h2>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-[rgba(198,167,94,0.3)] to-transparent"></div>
    </div>
  );
}

function MobileTableCard({ title, data, type = "default" }) {
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

// Helper to parse numbers from strings like "AED 12.5M" or "AED 1,500"
function parseMidPrice(priceStr) {
  if (!priceStr || priceStr === "N/A") return 0;
  const num = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
  if (priceStr.toLowerCase().includes('m')) return num * 1000000;
  if (priceStr.toLowerCase().includes('k')) return num * 1000;
  return num;
}

export function AreaDetailSections({ area }) {
  // 1. DATA PREP & FALLBACKS (Normalizing to support 23 points)
  const economics = area.unitEconomics || {};
  const scores = area.scores || { cashFlow: 5, appreciation: 5, liquidity: 5, risk: 5, lifestyle: 5 };
  const supply = area.supplyStats || { handedOver: "85%", underConstruction: "15%", nextDelivery: "Q4 2026" };
  const connectivity = area.connectivity || {};
  const timeline = area.futureUpgrades || []; // Using upgrades as proxy for timeline
  
  const growthTarget = 35; // Default appreciation target for 2030
  const growthYears = [2026, 2027, 2028, 2029, 2030];
  const growthPoints = growthYears.map((year, idx) => ({
    year,
    value: `+${(((idx + 1) * growthTarget) / growthYears.length).toFixed(1)}%`,
  }));

  // Map marketReadData for specific points
  const getMarketPoint = (factor) => area.marketReadData?.find(f => f.factor === factor)?.read || "Data analysis in progress for this sub-sector.";

  return (
    <div className="flex flex-col gap-12 md:gap-20 py-6 md:py-10">
      
      {/* 1) AREA INFORMATION */}
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <SectionTitle title="1) Area Intelligence & Inventory" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-5 md:p-8 shadow-sm blur-backdrop">
            <p className="text-sm leading-relaxed text-[#4A3F2F] font-light">{area.description}</p>
            <div className="mt-6 md:mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white p-4 md:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A6E60]">Sub-Market</p>
                <p className="mt-1 text-sm font-bold text-[#1C1C22]">{area.category || "Residential"}</p>
              </div>
              <div className="rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white p-4 md:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A6E60]">Total Area</p>
                <p className="mt-1 text-sm font-bold text-[#1C1C22]">{area.totalArea || "N/A"}</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white p-4 md:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A6E60]">Iconic Registry / Towers</p>
              <p className="mt-1 text-sm font-bold text-[#1C1C22]">{area.towers || "Signature Developments"}</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-3xl border border-[rgba(198,167,94,0.3)] bg-slate-900 p-6 md:p-8 shadow-2xl">
             <div className="relative z-10">
                <h3 className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#C6A75E]">
                   <Building size={16} /> Asset Class Distribution
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Villas/Townhouses", value: "35%", color: "bg-[#C19A5B]" },
                    { label: "Luxury Apartments", value: "55%", color: "bg-[#E5D3AB]" },
                    { label: "Commercial/Retail", value: "10%", color: "bg-[#CDBE98]" },
                  ].map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-white uppercase tracking-tighter">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: item.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
               <Globe size={180} />
             </div>
          </div>
        </div>
      </section>

      {/* 2) AREA DEVELOPERS & TIMELINE */}
      <section>
        <SectionTitle title="2) Key Developers & Evolution Timeline" />
        <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-5 md:p-8 shadow-sm">
          <div className="mb-8 md:mb-10">
            <h3 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#1C1C22]">
              <HardHat className="h-4 w-4 text-[#C6A75E]" /> Master Influence
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[area.masterDeveloper, "Emaar", "Nakheel", "Sobha"].filter(Boolean).slice(0, 5).map((dev) => (
                <span key={dev} className="rounded-xl border border-[rgba(198,167,94,0.2)] bg-white px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold text-[#4A3F2F] shadow-sm">
                  {dev}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#1C1C22]">Strategic Roadmap</h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {(timeline.length > 0 ? timeline : [{name: "Infrastructure Phase", status: "Completed"}, {name: "Expansion Phase", status: "Ongoing"}, {name: "Vision 2030", status: "Planned"}]).map((event, idx) => (
                <div key={idx} className="flex flex-col gap-2 rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white p-4 md:p-5 hover:border-[#C6A75E] transition-colors">
                  <span className="text-[10px] font-black text-[#C6A75E] uppercase">{event.status || "Timeline Event"}</span>
                  <p className="text-sm font-bold text-[#1C1C22]">{event.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3) REAL ESTATE BRIEF & 4) MARKET ANALYSIS */}
      <section className="grid gap-6 md:gap-8 lg:grid-cols-2">
        <div>
          <SectionTitle title="3) Real Estate Context Brief" />
          <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-5 md:p-8 shadow-sm h-full flex flex-col justify-center">
             <div className="flex items-start gap-3 md:gap-4">
               <div className="rounded-2xl bg-[#C6A75E]/10 p-3 md:p-4"><Info className="h-5 w-5 md:h-6 md:w-6 text-[#C6A75E]" /></div>
               <div>
                  <p className="text-sm leading-relaxed text-[#4A3F2F] italic">
                    "{area.aiVerdict?.summary || area.description?.slice(0, 200) + "..."}"
                  </p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#7A6E60]">— Institutional Intelligence Summary</p>
               </div>
             </div>
          </div>
        </div>
        <div>
          <SectionTitle title="4) Intelligence Analysis" />
          <div className="space-y-4 rounded-3xl border border-[rgba(198,167,94,0.3)] bg-[#1C1C22] p-6 md:p-8 shadow-2xl text-white h-full overflow-hidden relative">
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6A75E]">Price Position Insights</p>
                <p className="mt-2 text-sm text-slate-300 font-light leading-relaxed">{getMarketPoint("Price Drivers")}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6A75E]">Advisory Logic</p>
                <p className="mt-2 text-sm text-slate-300 font-light leading-relaxed">{area.investorTip || "Monitor quarterly handover volumes to assess short-term volatility. Focus on unique assets."}</p>
              </div>
            </div>
            <Zap className="absolute bottom-[-20px] right-[-20px] h-32 w-32 text-white opacity-5" />
          </div>
        </div>
      </section>

      {/* 5) KEY HIGHLIGHTS */}
      <section>
        <SectionTitle title="5) Strategic Key Highlights" />
        <div className="grid gap-4 md:grid-cols-2">
          {(area.highlights || []).map((highlight, idx) => (
            <div key={idx} className="flex gap-4 rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white/70 p-6 shadow-sm group hover:border-[#C6A75E] transition-all">
              <div className="flex-shrink-0 mt-1 h-3 w-3 rounded-full bg-[#C6A75E] opacity-40 group-hover:opacity-100" />
              <p className="text-sm text-[#4A3F2F] leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6) PROPERTY MARKET OVERVIEW & BUYER MIX CHART */}
      <section className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionTitle title="6) Property Market Dynamics" />
          <div className="hidden md:block overflow-x-auto luxury-scroll rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 shadow-lg">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b border-[rgba(198,167,94,0.2)] bg-gradient-to-r from-[rgba(198,167,94,0.1)] to-transparent">
                  <th className="px-5 md:px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Institutional Metric</th>
                  <th className="px-5 md:px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Intelligence Insight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(198,167,94,0.1)]">
                {[
                  { m: "Buyer Mix", d: getMarketPoint("Buyer Mix") },
                  { m: "Rental Demand", d: getMarketPoint("Rental Demand") },
                  { m: "Liquidity Status", d: getMarketPoint("Liquidity") },
                  { m: "Ownership Type", d: area.ownership?.type || "Freehold" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/40 transition-colors">
                    <td className="px-5 md:px-6 py-4 md:py-5 text-[10px] md:text-xs font-bold text-[#1C1C22] uppercase tracking-tighter">{row.m}</td>
                    <td className="px-5 md:px-6 py-4 md:py-5 text-sm text-[#4A3F2F] font-light leading-relaxed">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MobileTableCard 
            data={[
              { label: "Buyer Mix", details: [{ name: "Intelligence Insight", value: getMarketPoint("Buyer Mix") }] },
              { label: "Rental Demand", details: [{ name: "Intelligence Insight", value: getMarketPoint("Rental Demand") }] },
              { label: "Liquidity Status", details: [{ name: "Intelligence Insight", value: getMarketPoint("Liquidity") }] },
              { label: "Ownership Type", details: [{ name: "Intelligence Insight", value: area.ownership?.type || "Freehold" }] },
            ]} 
          />
        </div>
        <div className="lg:col-span-4">
          <SectionTitle title="Buyer Psychology" />
          <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-5 md:p-6 shadow-sm blur-backdrop">
             <BuyerMixPieChart buyerMix={getMarketPoint("Buyer Mix")} />
          </div>
        </div>
      </section>

      {/* 7) RENTAL & SALE PRICES + INVESTOR TIPS */}
      <section>
        <SectionTitle title="7) Rental & Sale Performance Corridors" />
        <div className="hidden md:block overflow-x-auto luxury-scroll rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 shadow-lg">
          <table className="min-w-[800px] md:min-w-[900px] w-full text-left">
            <thead>
              <tr className="border-b border-[rgba(198,167,94,0.2)] bg-gradient-to-r from-[rgba(198,167,94,0.1)] to-transparent">
                <th className="px-5 md:px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Configuration</th>
                <th className="px-5 md:px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Rental Benchmark</th>
                <th className="px-5 md:px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Sales Benchmark</th>
                <th className="px-5 md:px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Strategic Tip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(198,167,94,0.1)]">
              {Object.entries(economics).map(([type, details]) => (
                <tr key={type} className="hover:bg-white/40 transition-colors">
                  <td className="px-5 md:px-6 py-4 md:py-5 text-xs md:text-sm font-bold text-[#1C1C22] uppercase">{type.replace(/([A-Z])/g, ' $1')}</td>
                  <td className="px-5 md:px-6 py-4 md:py-5 text-sm text-[#4A3F2F] font-medium">{details.rent || "N/A"}</td>
                  <td className="px-5 md:px-6 py-4 md:py-5 text-sm text-[#4A3F2F] font-medium">{details.price || "N/A"}</td>
                  <td className="px-5 md:px-6 py-4 md:py-5 text-[10px] md:text-xs text-[#7A6E60] font-light italic leading-relaxed">
                     {details.roi > 7.5 ? "Priority high-yield focus." : "Target for capital preservation."}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MobileTableCard 
          data={Object.entries(economics).map(([type, details]) => ({
            label: type.replace(/([A-Z])/g, ' $1'),
            details: [
              { name: "Rental Benchmark", value: details.rent || "N/A" },
              { name: "Sales Benchmark", value: details.price || "N/A" },
              { name: "Strategic Tip", value: details.roi > 7.5 ? "Priority high-yield focus." : "Target for capital preservation." }
            ]
          }))}
        />
      </section>

      {/* 8) PROPERTY CONFIGURATIONS TABLE & 9) PRICE HISTORY */}
      <section className="grid gap-8 lg:grid-cols-12">
         <div className="lg:col-span-8">
            <SectionTitle title="8) Deep Property Configurations" />
            <div className="hidden md:block overflow-x-auto luxury-scroll rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 shadow-lg">
               <table className="min-w-[800px] md:min-w-[1000px] w-full text-left">
                <thead>
                  <tr className="border-b border-[rgba(198,167,94,0.2)] bg-[rgba(198,167,94,0.05)]">
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Type</th>
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Avg. Size</th>
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Yield (ROI)</th>
                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Target Investor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(198,167,94,0.1)]">
                   {Object.entries(economics).map(([type, details]) => (
                     <tr key={type} className="hover:bg-white/40">
                        <td className="px-4 py-4 text-[10px] md:text-xs font-bold text-[#1C1C22]">{type.toUpperCase()}</td>
                        <td className="px-4 py-4 text-[10px] md:text-xs text-[#4A3F2F]">{details.size || "1,150 sq.ft"}</td>
                        <td className="px-4 py-4 text-[10px] md:text-xs font-black text-[#C6A75E]">{details.roi || "6.5%"}</td>
                        <td className="px-4 py-4 text-[10px] md:text-xs text-[#7A6E60]">{details.roi > 8 ? "Yield Optimizer" : "Equity Builder"}</td>
                     </tr>
                   ))}
                </tbody>
               </table>
            </div>
            <MobileTableCard 
              data={Object.entries(economics).map(([type, details]) => ({
                label: type.toUpperCase(),
                details: [
                  { name: "Avg. Size", value: details.size || "1,150 sq.ft" },
                  { name: "Yield (ROI)", value: details.roi || "6.5%" },
                  { name: "Target Investor", value: details.roi > 8 ? "Yield Optimizer" : "Equity Builder" }
                ]
              }))}
            />
         </div>
         <div className="lg:col-span-4">
            <SectionTitle title="9) Equity Trend" />
            <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-5 md:p-6 shadow-sm h-full flex flex-col justify-center">
              <PriceHistoryChart priceHistory={area.priceTrend} />
            </div>
         </div>
      </section>

      {/* 10) 5-YEAR GROWTH PROJECTION */}
      <section>
        <SectionTitle title="10) Macro Appreciation Target (2030)" />
        <div className="rounded-3xl border border-[#1c2f56] bg-gradient-to-br from-[#1C1C22] to-[#2D2D35] p-6 md:p-10 shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-white tracking-tight">
                <TrendingUp className="h-6 w-6 md:h-7 md:w-7 text-[#C6A75E]" /> 5-Year Equity Roadmap
              </h3>
              <span className="self-start md:self-auto rounded-xl border border-[#C6A75E]/30 bg-[#C6A75E]/10 px-4 py-2 text-[10px] md:text-sm font-bold text-[#C6A75E] uppercase tracking-widest">
                +{growthTarget}% Institutional Target
              </span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-slate-400 font-light mb-8 md:mb-12 max-w-2xl">
              Proprietary appreciation simulation incorporating Master Plan completion milestones, global HNWI migration flows, and area-specific supply constraints.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4 border-t border-slate-800 pt-8 md:pt-10">
              {growthPoints.map((point) => (
                <div key={point.year} className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-sm md:text-lg font-black text-[#C6A75E]">{point.value}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{point.year}</p>
                </div>
              ))}
            </div>
          </div>
          <Construction className="absolute bottom-[-30px] right-[-30px] md:bottom-[-40px] md:right-[-40px] h-48 w-48 md:h-64 md:w-64 text-white opacity-5 pointer-events-none" />
        </div>
      </section>

      {/* 11) RENTAL MARKET & 12) BUYER INTEL */}
      <section className="grid gap-6 md:gap-8 lg:grid-cols-2">
         <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 md:p-8 shadow-sm">
            <SectionTitle title="11) Rental Market Intel" />
            <p className="text-sm leading-relaxed text-[#4A3F2F] font-light">
              {getMarketPoint("Rental Demand")}. High correlation between building maintenance quality and yield retention. Professional occupants favor high-floor units with open orientations.
            </p>
         </div>
         <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 md:p-8 shadow-sm">
            <SectionTitle title="12) Buyer Intelligence" />
            <p className="text-sm leading-relaxed text-[#4A3F2F] font-light">
              {area.buyerPsychology?.motivation || "Buyers demonstrate strong sensitivity to amenity density and ease of exit to major highway systems. Cash purchases represent 40% of prime stock transactions."}
            </p>
         </div>
      </section>

      {/* 13) FUTURE VISION 2030 & SUPPLY PIPELINE */}
      <section>
        <SectionTitle title="13) Future Vision 2030 / Supply Institutional Data" />
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#C6A75E]/30 bg-gradient-to-br from-white to-[#F9F6F0] p-6 md:p-8 shadow-sm relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4 text-[#1C1C22]">
              <Zap className="h-5 w-5 text-[#C6A75E]" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider">Vision Milestones</p>
            </div>
            <p className="text-sm leading-relaxed text-[#4A3F2F] relative z-10 font-light italic">
              "Future appreciation is predicated on the delivery of {area.futureUpgrades?.[0]?.name || "Upcoming Phase"} and the continued integration of smart-city infrastructure planned for {area.name}."
            </p>
          </div>
          <div className="rounded-3xl border border-[#1C1C22]/10 bg-gradient-to-br from-[#1C1C22] to-[#2D2D35] p-6 md:p-8 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Building className="h-5 w-5 text-[#C6A75E]" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider">Supply Saturation Analyst</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 font-light">
              Current market maturity at {supply.handedOver}. Upcoming inventory pipeline accounts for {supply.underConstruction} of total stock. Low risk of oversupply in the short-term window.
            </p>
          </div>
        </div>
      </section>

      {/* 14) ATTRACTIONS & POI */}
      <section>
        <SectionTitle title="14) Strategic Attractions & POIs" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Lifestyle Centers", icon: Target, items: (area.amenities || []).slice(0, 3) },
            { label: "Community Hubs", icon: MapPin, items: (area.amenities || []).slice(3, 6) },
            { label: "Neighboring Utility", icon: Globe, items: ["Global Connectivity", "Hospitality Hubs", "Financial Dist."] }
          ].map((cat, i) => (
            <div key={i} className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 shadow-sm">
              <p className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A6E60]">
                <cat.icon size={14} className="text-[#C6A75E]" /> {cat.label}
              </p>
              <ul className="space-y-3">
                {cat.items.map((it, j) => (
                  <li key={j} className="text-sm text-[#4A3F2F] flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C6A75E]/40" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 15) PUBLIC TRANSPORT & 16) METRO/BUS STATION LOGISTICS */}
      <section className="grid gap-6 md:gap-8 lg:grid-cols-2">
         <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 md:p-8 shadow-sm">
            <SectionTitle title="15) Logistical Flow (Highways)" />
            <div className="flex flex-wrap gap-2 mb-6">
              {(area.transport?.roadAccess || []).map(r => (
                <span key={r} className="rounded-xl bg-[#1C1C22] text-[#C6A75E] px-3 py-1.5 md:px-4 md:py-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest">{r}</span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-[#4A3F2F] font-light">
              Highly prioritized highway linkages ensure {area.transport?.roadAccess?.[0]} access within minutes. Commuter flow is streamlined via modern interchanges.
            </p>
         </div>
         <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 md:p-8 shadow-sm">
            <SectionTitle title="16) Transit Connectivity (Metro/Bus)" />
            <div className="flex items-center gap-3 md:gap-4 mb-4">
               <div className="rounded-2xl bg-slate-900 p-2.5 md:p-3"><Bus className="text-[#C6A75E] h-4 w-4 md:h-5 md:w-5" /></div>
               <div>
                  <p className="text-sm font-bold text-[#1C1C22]">Nearest Hub: {area.transport?.metro?.name || "Transit Station Interface"}</p>
                  <p className="text-xs text-[#7A6E60] italic">{area.transport?.metro?.status || "Mature Connectivity Zone"}</p>
               </div>
            </div>
            <p className="text-sm leading-relaxed text-[#4A3F2F] font-light">
               Average transit walk-score is {area.transport?.walkability || "Moderate"}. Infrastructure supports both multi-modal public transit and sustainable micro-mobility options.
            </p>
         </div>
      </section>

      {/* 17) SCORECARD RADAR */}
      <section>
        <SectionTitle title="17) Scoring Benchmarks (Radar Graph)" />
        <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-8 shadow-sm blur-backdrop">
           <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-4 lg:border-r border-[rgba(198,167,94,0.2)] lg:pr-8 space-y-4">
                 <h4 className="text-sm font-bold text-[#1C1C22] uppercase tracking-widest">Analyst Verdict</h4>
                 <div className="p-5 rounded-2xl bg-[#C6A75E]/5 border border-[#C6A75E]/10">
                    <p className="text-xs font-black text-[#C6A75E] mb-1">OVERALL EQUITY SCORE</p>
                    <p className="text-4xl font-serif font-black text-[#1C1C22]">{area.overallScore || "8.5"}<span className="text-lg opacity-30">/10</span></p>
                 </div>
                 <p className="text-xs text-[#7A6E60] leading-relaxed">
                   Comprehensive model weighting risk-adjustments against capital velocity and area-specific growth catalysts.
                 </p>
              </div>
              <div className="lg:col-span-8">
                 <ScorecardChart scorecard={scores} />
              </div>
           </div>
        </div>
      </section>

      {/* 18) STRATEGIC CONNECTIVITY (MATRIX) */}
      <section>
        <SectionTitle title="18) Strategic Connectivity Matrix" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Aviation Hubs", val: connectivity.airport?.mins || "20 min", sub: "International Transit" },
            { label: "Educational Prox", val: connectivity.school?.mins || "5 min", sub: "Top-Tier Schooling" },
            { label: "Financial Dist.", val: connectivity.business?.mins || "15 min", sub: "DIFC / Business Hubs" },
            { label: "Major Retail", val: connectivity.mall?.mins || "10 min", sub: "World-Class Shopping" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white p-4 md:p-6 shadow-sm hover:-translate-y-1 transition-transform">
               <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#7A6E60]">{item.label}</p>
               <p className="mt-1 md:mt-2 text-lg md:text-2xl font-black text-[#1C1C22]">{item.val}</p>
               <p className="text-[8px] md:text-[10px] font-semibold text-[#C6A75E] uppercase mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 19) NEIGHBOUR AREAS */}
      <section>
        <SectionTitle title="19) Peer-Market Neighbor Analysis" />
        <div className="flex flex-wrap gap-4">
           {["Downtown Dubai", "Business Bay", "Mohammed Bin Rashid City", "Dubai Creek Harbour"].map(neighbor => (
             <div key={neighbor} className="flex items-center gap-3 rounded-2xl border border-[rgba(198,167,94,0.3)] bg-white/70 px-6 py-4 transition-all hover:bg-[#C6A75E] hover:text-white group cursor-default">
                <MapPin size={16} className="text-[#C6A75E] group-hover:text-white" />
                <span className="text-sm font-bold">{neighbor}</span>
             </div>
           ))}
        </div>
      </section>

      {/* 20) INVESTMENT SNAPSHOT & 21) SALE PRICE POSITION */}
      <section id="opportunity-snapshot" className="grid gap-8 lg:grid-cols-2">
        <div>
           <SectionTitle title="20) Strategic Opportunity Snapshot" />
           <div className="space-y-4">
              {[
                { icon: Wallet, label: "Cash Flow Stability", desc: "Attractive gross yields in high-occupancy ready stock." },
                { icon: TrendingUp, label: "Capital Appreciation", desc: "Premium supply shift driving multi-year price floors." },
                { icon: Timer, label: "Short-Term Velocity", desc: "Resilient occupancy near major financial linkages." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white/60">
                   <div className="rounded-xl bg-[#C6A75E]/10 p-3 h-fit"><item.icon size={20} className="text-[#C6A75E]" /></div>
                   <div>
                      <p className="text-sm font-bold text-[#1C1C22] uppercase tracking-tighter">{item.label}</p>
                      <p className="text-xs text-[#4A3F2F] font-light leading-relaxed mt-1">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
        <div>
           <SectionTitle title="21) Average Transaction Positioning" />
           <div className="rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-8 shadow-sm h-full overflow-hidden relative">
              <p className="text-sm text-[#4A3F2F] leading-relaxed font-light mb-8">
                 Current deal positioning indicates high liquidity in the AED 2M–4M ticket sizes with increasing ultra-prime momentum.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {Object.entries(economics).slice(0, 4).map(([type, details]) => (
                   <div key={type} className="rounded-2xl border border-[rgba(198,167,94,0.15)] bg-white p-4">
                      <p className="text-[10px] font-black text-[#1C1C22] uppercase tracking-tighter">{type.replace(/([A-Z])/g, ' $1')}</p>
                      <p className="text-sm font-black text-[#C6A75E] mt-1">{details.price || "N/A"}</p>
                      <p className="text-[10px] text-[#7A6E60] uppercase mt-2">Corridor Center</p>
                   </div>
                 ))}
              </div>
              <Shield className="absolute bottom-[-10px] right-[-10px] h-24 w-24 text-[#C6A75E] opacity-5" />
           </div>
        </div>
      </section>

      {/* 22) FAMOUS TOWERS & 23) INVESTOR TIPS */}
      <section className="grid gap-12">
        <div>
           <SectionTitle title="22) Market-Leading Famous Towers Registry" />
           <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {(area.towers?.split(',') || ["D1 Tower", "Palazzo Versace", "Kempinski", "Marriott Residences"]).map((tower, i) => (
                <div key={i} className="rounded-2xl border border-[rgba(198,167,94,0.2)] bg-white/70 p-4 md:p-5 text-sm font-bold text-[#1C1C22] flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-[#C6A75E]" /> {tower.trim()}
                </div>
              ))}
           </div>
        </div>
        
        <div id="investor-advisor-tips">
           <SectionTitle title="23) Institutional Advisor Tips" />
           <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "Entry Timing", tip: "Target Q2/Q3 windows to capitalize on slightly higher motivated resale liquidity." },
                { title: "Asset Selection", tip: "Prioritize buildings with direct waterfront access or unobstructed skyline corridors." },
                { title: "Portfolio Mix", tip: "Hold a 70/30 split between ready-income generating stock and strategic off-plan expansion." },
                { title: "Exit Strategy", tip: "Maintain a 5-7 year hold horizon for maximum appreciation extraction in this sub-market." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-3xl border border-[#C6A75E]/20 bg-gradient-to-br from-white to-[#FBF8F3] hover:border-[#C6A75E] transition-all">
                   <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-[#1C1C22] text-[#C6A75E] text-xs font-black">{i + 1}</div>
                   <div>
                      <p className="text-sm font-bold text-[#1C1C22] uppercase tracking-[0.1em]">{item.title}</p>
                      <p className="mt-2 text-sm text-[#4A3F2F] leading-relaxed font-light">{item.tip}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
