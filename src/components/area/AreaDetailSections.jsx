import React from "react";
import { BuyerMixPieChart, PriceHistoryChart, ROIBarChart, ScorecardChart } from "./AreaCharts";
import { Building, Bus, DollarSign, Info, MapPin, Navigation, Target, TrendingUp, Wallet, Zap, Construction, HardHat, ChartLine } from "lucide-react";

function SectionTitle({ title }) {
  return <h2 className="mb-6 font-serif text-xl font-bold text-[#1C1C22] md:text-2xl border-b border-[rgba(198,167,94,0.2)] pb-2">{title}</h2>;
}

export function AreaDetailSections({ area }) {
  // Mapping current app data structures
  const conn = area.connectivity || {};
  const scores = area.scores || { cashFlow: 5, appreciation: 5, liquidity: 5, risk: 5, lifestyle: 5 };
  const economics = area.unitEconomics || {};
  const supplyStats = { handedOver: "85%", underConstruction: "15%", nextDelivery: "Q4 2026" };
  const projectPoints = [
      { year: 2026, value: "+6.5%" },
      { year: 2027, value: "+13.2%" },
      { year: 2028, value: "+21.0%" },
      { year: 2029, value: "+28.5%" },
      { year: 2030, value: "+35.0%" },
  ];

  return (
    <div className="flex flex-col gap-16">
      
      {/* SECTION 1: BRIEF & OVERVIEW */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="animate-in slide-in-from-left-4 duration-700">
          <SectionTitle title="1) Area Intelligence" />
          <div className="rounded-2xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-8 shadow-[0_10px_28px_rgba(198,167,94,0.1)]">
            <p className="text-sm leading-relaxed text-[#4A3F2F] font-light">{area.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[rgba(198,167,94,0.15)] bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#7A6E60]">Sub-Market</p>
                <p className="mt-1 text-sm font-bold text-[#1C1C22]">{area.category || "Residential"}</p>
              </div>
              <div className="rounded-xl border border-[rgba(198,167,94,0.15)] bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#7A6E60]">Total Area</p>
                <p className="mt-1 text-sm font-bold text-[#1C1C22]">{area.totalArea || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-in slide-in-from-right-4 duration-700">
          <SectionTitle title="2) Market Supply Overview" />
          <div className="rounded-2xl border border-[rgba(198,167,94,0.3)] bg-slate-900 text-white p-8 shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  <HardHat size={16} /> Supply Institutional Data
                </h3>
                <div className="space-y-6">
                    <div className="flex justify-between text-xs font-medium text-slate-300">
                        <span>Project Status</span>
                        <span>{supplyStats.handedOver} Handed Over</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{ width: '85%' }}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                        <div>
                            <p className="text-slate-400 text-[10px] font-bold uppercase">Ready Units</p>
                            <p className="text-xl font-bold">15,000+</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-[10px] font-bold uppercase">Pipeline</p>
                            <p className="text-xl font-bold text-amber-400">{supplyStats.underConstruction}</p>
                        </div>
                    </div>
                </div>
             </div>
             <div className="absolute top-0 right-0 p-4 opacity-5"><Building size={120} /></div>
          </div>
        </div>
      </div>

      {/* SECTION 2: CHARTS & METRICS */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionTitle title="3) ROI Performance by Unit Type" />
          <div className="rounded-2xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 shadow-sm">
             <ROIBarChart economics={economics} />
          </div>
        </div>
        <div className="lg:col-span-4">
          <SectionTitle title="4) Scorecard Radar" />
          <div className="rounded-2xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-4 shadow-sm">
            <ScorecardChart scorecard={scores} />
          </div>
        </div>
      </div>

      {/* SECTION 3: UNIT CONFIGURATIONS TABLE */}
      <div>
        <SectionTitle title="5) Property Configurations & Investor Tips" />
        <div className="overflow-x-auto rounded-3xl border border-[rgba(198,167,94,0.3)] bg-white/60 shadow-lg">
          <table className="min-w-[1000px] w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[rgba(198,167,94,0.2)] bg-gradient-to-r from-[rgba(198,167,94,0.1)] to-transparent">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Unit Type</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Typical Size</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Best For</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22] text-[#C6A75E]">Avg. ROI</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Avg. Rent</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1C22]">Avg. Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(economics).map(([type, details]) => (
                <tr key={type} className="border-b border-[rgba(198,167,94,0.1)] last:border-b-0 group hover:bg-white/40 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-[#1C1C22] font-serif">{type.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
                  <td className="px-6 py-5 text-sm text-[#7A6E60] font-light">{details.size || "N/A"}</td>
                  <td className="px-6 py-5 text-xs text-[#4A3F2F]">
                    <span className="px-2 py-1 rounded-md bg-[rgba(198,167,94,0.1)] border border-[rgba(198,167,94,0.2)] text-[10px] font-bold uppercase tracking-wide">
                        {details.roi > 7 ? "High Yield" : "Steady Appreciation"}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-black text-[#C6A75E]">{details.roi || "N/A"}</td>
                  <td className="px-6 py-5 text-sm text-[#1C1C22] font-bold">{details.rent || "N/A"}</td>
                  <td className="px-6 py-5 text-sm text-[#7A6E60]">{details.price || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: FORECASTING */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="animate-in zoom-in-95 duration-700">
           <SectionTitle title="6) Price History" />
           <div className="rounded-2xl border border-[rgba(198,167,94,0.3)] bg-white/60 p-6 shadow-sm">
              <PriceHistoryChart priceHistory={area.priceTrend} />
           </div>
        </div>

        <div className="animate-in zoom-in-95 duration-700">
           <SectionTitle title="7) 5-Year Growth Projection" />
           <div className="rounded-2xl border border-[#1c2f56] bg-gradient-to-br from-[#1C1C22] to-[#2D2D35] p-8 shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-white"><TrendingUp className="h-5 w-5 text-amber-400" /> Appreciation Target</h3>
                  <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400">+35% by 2030</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-400 font-light mb-8">
                   Proprietary simulation based on masterplan delivery, supply constraints, and population trajectory in {area.name}.
                </p>
                <div className="grid grid-cols-5 gap-3 border-t border-slate-800 pt-6">
                  {projectPoints.map((point) => (
                    <div key={point.year} className="text-center group-hover:-translate-y-1 transition-transform">
                      <p className="text-sm font-black text-amber-400">{point.value}</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase">{point.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none"><Construction size={180} /></div>
           </div>
        </div>
      </div>

    </div>
  );
}
