import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, ArrowLeft, CheckCircle, TrendingUp, 
  Plane, ShoppingBag, BarChart3, Construction,
  GraduationCap, Train, Briefcase, HeartPulse,
  Tags, Building, Download, Loader2, Flame, Users, DollarSign, MessageCircle,
  Calendar, Maximize, Waves, Building2, Map, Camera, Palmtree, 
  LineChart, Lightbulb, Target, Utensils, Car, Bike, Navigation, BookOpen, Home,
  Key, BrainCircuit, HardHat, Crown, ArrowRight
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import SEO from '../components/SEO';
import { DUBAI_AREAS as MASTER_DB } from '../data/emiratesData'; 

const AreaPage = () => {
  const { id } = useParams();
  const reportRef = useRef(); 
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const area = MASTER_DB.find(a => a.id === id);
  
  // Neighboring Areas Logic
  const similarAreas = MASTER_DB.filter(a => a.id !== id).slice(0, 3);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!area) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Area Not Found</h1>
      <Link to="/areas" className="text-blue-600 hover:underline">Return to Map</Link>
    </div>
  );

  // --- PDF & WHATSAPP LOGIC ---
  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    const element = reportRef.current;
    try {
      const canvas = await html2canvas(element, { scale: 2, useCORS: true, scrollY: -window.scrollY, windowWidth: document.documentElement.offsetWidth, ignoreElements: (node) => node.classList.contains('no-print') });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${area.name}_Investment_Summary.pdf`);
    } catch (err) { console.error("PDF Generation failed", err); alert("Could not generate PDF."); } finally { setIsGeneratingPdf(false); }
  };

  const handleWhatsAppClick = () => {
    const phone = "971501234567"; 
    const text = `Hi, I'm interested in investment opportunities in ${area.name}. Can you share the latest availability and report?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // --- DATA DEFAULTS ---
  const conn = area.connectivity || {};
  const scores = area.scores || { cashFlow: 5, appreciation: 5, liquidity: 5, risk: 5, lifestyle: 5 };
  const economics = area.unitEconomics || { studio: {}, oneBed: {}, twoBed: {} };
  const strScore = area.shortTermScore || ((scores.cashFlow + scores.lifestyle) / 2).toFixed(1);
  const investorTags = area.investorTags || ["High Yield", "Growth Potential"];
  const futureInfra = area.futureUpgrades || [{ name: "Infrastructure Upgrade", status: "Planned" }];
  const verdict = area.aiVerdict || { title: "Solid Investment Choice", summary: area.description };
  const demand = area.demandSignals || { tenantProfile: "Professionals & Families", rentalDemand: "High" };
  const strData = area.shortTermRental || { avgDailyRate: "N/A", occupancy: "N/A" };
  const priceTrend = area.priceTrend || { "2023": "AED 800k", "2024": "AED 850k", "2025": "AED 900k" };

  const keyFacts = {
    developer: area.masterDeveloper || "Various",
    location: area.location || area.emirate,
    totalArea: area.totalArea || "N/A",
    privateBeach: area.amenities?.some(a => a.includes("Beach")) || area.investorTags?.includes("Waterfront") ? "Yes" : "No",
    towers: area.towers || "Multiple", 
    timeline: area.completion || "Ready"
  };

  const highlights = area.highlights || [`Ranked ${area.overallScore}/10.`, `High rental demand.`, `Strategic location.`, `Known for ${area.category} status.`];

  const leisureItems = area.amenities?.filter(a => a.includes("Park") || a.includes("Beach") || a.includes("Golf") || a.includes("Cinema") || a.includes("Garden")) || ["Community Parks"];
  const shoppingItems = area.amenities?.filter(a => a.includes("Mall") || a.includes("Market") || a.includes("Shop")) || ["Local Retail Centre"];

  const roadAccess = area.description?.includes("Sheikh Zayed") ? "Sheikh Zayed Road (E11)" : area.description?.includes("Al Khail") ? "Al Khail Road (E44)" : "Main Highways";
  const walkability = area.amenities?.some(a => a.includes("Walk") || a.includes("Park")) ? "High (Pedestrian Friendly)" : "Moderate (Car Dependent)";

  // --- 🟢 NEW: REAL ESTATE BRIEF NARRATIVE ---
  const realEstateBrief = `${area.name} represents a distinct segment of the Dubai real estate market, primarily characterized by its ${area.category.toLowerCase()} positioning. The area has witnessed a steady ${priceTrend["2025"] ? "price appreciation" : "value retention"} over the last 24 months, driven largely by ${demand.tenantProfile.toLowerCase()}. With an average entry price of ${area.avgPrice} and ROI hovering around ${area.roi}, it remains a top contender for investors seeking ${scores.cashFlow > 7 ? "immediate cash flow" : "long-term capital gains"}. The current market sentiment indicates a ${demand.rentalDemand.toLowerCase()} demand cycle, reducing vacancy risks significantly.`;

  // --- 🟢 NEW: BUYER INTELLIGENCE DATA ---
  const buyerPsychology = {
    trigger: scores.cashFlow > 8 ? "Passive Income Generation" : "Lifestyle & Prestige",
    archetype: scores.cashFlow > 8 ? "The Yield Hunter" : "The Luxury End-User",
    motivation: `Investors here are primarily motivated by ${scores.cashFlow > 8 ? "beating bank interest rates with rental yields" : "acquiring a trophy asset with waterfront views"}. The fear of missing out (FOMO) is driven by ${futureInfra.length > 0 ? "upcoming infrastructure projects" : "dwindling supply of premium units"}.`
  };

  // --- 🟢 NEW: SUPPLY PIPELINE DATA ---
  const supplyStats = {
    totalUnits: "15,000+", // Placeholder or from DB
    handedOver: "85%",
    underConstruction: "15%",
    nextDelivery: "Q4 2026"
  };

  // --- NARRATIVES (Existing) ---
  const narratives = {
    priceTrends: `Property prices in ${area.name} have demonstrated a ${scores.appreciation > 7 ? "robust upward" : "stable"} trajectory over the last 36 months. Starting from an average of ${Object.values(priceTrend)[0] || "base rates"} in 2023, market valuations have strengthened to ${Object.values(priceTrend)[2] || "current levels"}.`,
    investmentPotential: `${area.name} is currently positioned as a "${area.category}" powerhouse. With an average ROI of ${area.roi}, it outperforms many ${area.emirate} averages. The area scores ${scores.cashFlow}/10 for Cash Flow.`,
    uaeTips: `Focus on ${economics.studio ? "Studio and 1-Bedroom units" : "smaller units"} to maximize yield per sq.ft. Given the ${walkability.toLowerCase()} nature of the area, properties within walking distance to amenities command a premium.`
  };

  const baseGrowthRate = (scores.appreciation || 5) * 1.2; 
  const currentYear = 2026;
  const forecastData = Array.from({ length: 5 }, (_, i) => {
    const year = currentYear + i;
    const growth = (baseGrowthRate * (i + 1)).toFixed(1); 
    return { year, growth: `+${growth}%` };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen pt-8">
      <SEO title={`${area.name} Investment Analysis`} description={`Real Estate Analysis for ${area.name}`} />

      {/* NAV & ACTIONS */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/areas" className="inline-flex items-center gap-2 text-slate-500 hover:text-black font-bold text-sm transition-colors"><ArrowLeft size={16} /> Back to National Map</Link>
        <button onClick={handleDownloadPDF} disabled={isGeneratingPdf} className="bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm">
          {isGeneratingPdf ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} Download PDF
        </button>
      </div>

      <div ref={reportRef} className="bg-slate-50 p-1 md:p-4 rounded-3xl"> 
        
        {/* HERO */}
        <div className={`rounded-3xl p-8 md:p-16 text-white mb-6 relative overflow-hidden shadow-xl ${area.imageColor || 'bg-blue-900'}`}>
           <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">{area.emirate || "UAE"}</span>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold border border-yellow-500 flex items-center gap-1">★ {area.overallScore}/10 Score</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{area.name}</h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl">{area.description}</p>
           </div>
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        {/* KEY FACTS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           <FactItem icon={<Building2 />} label="Developer" value={keyFacts.developer} />
           <FactItem icon={<Map />} label="Location" value={keyFacts.location} />
           <FactItem icon={<Maximize />} label="Total Area" value={keyFacts.totalArea} />
           <FactItem icon={<Waves />} label="Private Beach" value={keyFacts.privateBeach} />
           <FactItem icon={<Building />} label="Towers" value={keyFacts.towers} />
           <FactItem icon={<Calendar />} label="Timeline" value={keyFacts.timeline} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* === LEFT COLUMN: DATA & ANALYSIS === */}
          <div className="lg:col-span-2 space-y-8">
              
              {/* 🟢 NEW: EXECUTIVE REAL ESTATE BRIEF */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                   <BookOpen className="text-blue-600" /> Executive Real Estate Brief
                 </h3>
                 <p className="text-slate-600 text-sm leading-7 text-justify border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-2 rounded-r-lg">
                    {realEstateBrief}
                 </p>
              </div>

              {/* 🟢 NEW: RENTAL MARKET INTELLIGENCE */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                   <Key className="text-emerald-600" />
                   <h3 className="text-xl font-extrabold text-slate-900">Rental Market Intelligence</h3>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                       <div className="text-[10px] uppercase font-bold text-emerald-600 mb-1">Avg. Gross Yield</div>
                       <div className="text-2xl font-extrabold text-slate-900">{area.roi}</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                       <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">Occupancy Rate</div>
                       <div className="text-2xl font-extrabold text-slate-900">{strData.occupancy || "92%"}</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                       <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">Cheques (Avg)</div>
                       <div className="text-2xl font-extrabold text-slate-900">2-4</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                       <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">Avg. Tenure</div>
                       <div className="text-2xl font-extrabold text-slate-900">3.2 Yrs</div>
                    </div>
                 </div>
              </div>

              {/* 🟢 NEW: SUPPLY PIPELINE (INSTITUTIONAL FEATURE) */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                       <div className="flex items-center gap-3">
                          <HardHat className="text-amber-400" />
                          <h3 className="text-xl font-extrabold">Supply Pipeline</h3>
                       </div>
                       <div className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">Institutional Data</div>
                    </div>
                    
                    <div className="space-y-6">
                       <div className="flex justify-between text-sm font-medium text-slate-300 mb-1">
                          <span>Project Status</span>
                          <span>{supplyStats.handedOver} Complete</span>
                       </div>
                       {/* Progress Bar */}
                       <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden flex">
                          <div className="h-full bg-emerald-500" style={{ width: '85%' }}></div>
                          <div className="h-full bg-amber-500" style={{ width: '15%' }}></div>
                       </div>
                       <div className="flex gap-6 text-xs mt-2">
                          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Handed Over</div>
                          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Under Construction</div>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800">
                          <div>
                             <div className="text-slate-400 text-xs">Total Units</div>
                             <div className="text-xl font-bold">{supplyStats.totalUnits}</div>
                          </div>
                          <div>
                             <div className="text-slate-400 text-xs">Next Major Delivery</div>
                             <div className="text-xl font-bold text-amber-400">{supplyStats.nextDelivery}</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* EXECUTIVE MARKET BRIEF (Detailed) */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2"><BookOpen className="text-blue-600"/> Market Analysis Details</h3>
                 <div className="space-y-6">
                    <div><h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide mb-2"><TrendingUp size={16} className="text-emerald-500"/> Price Insights</h4><p className="text-slate-600 text-sm leading-relaxed text-justify">{narratives.priceTrends}</p></div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div><h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide mb-2"><Target size={16} className="text-blue-500"/> Investment Potential</h4><p className="text-slate-600 text-sm leading-relaxed text-justify">{narratives.investmentPotential}</p></div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div><h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide mb-2"><Lightbulb size={16} className="text-yellow-500"/> Advisor Tips</h4><p className="text-slate-600 text-sm leading-relaxed text-justify">{narratives.uaeTips}</p></div>
                 </div>
              </div>

              {/* KEY HIGHLIGHTS */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2"><CheckCircle className="text-blue-600"/> Key Highlights</h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {highlights.map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-500"></div><span className="text-sm font-medium text-slate-700 leading-relaxed">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              {/* ATTRACTIONS (Split) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-4"><div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><Palmtree size={20} /></div><h4 className="font-bold text-slate-900">Waterfront & Leisure</h4></div>
                    <ul className="space-y-3 mt-auto">{leisureItems.slice(0,3).map((item, i) => (<li key={i} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle size={14} className="text-teal-500" /> {item}</li>))}</ul>
                 </div>
                 <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-4"><div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Utensils size={20} /></div><h4 className="font-bold text-slate-900">Shopping & Dining</h4></div>
                    <ul className="space-y-3 mt-auto">{shoppingItems.slice(0,3).map((item, i) => (<li key={i} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle size={14} className="text-purple-500" /> {item}</li>))}</ul>
                 </div>
              </div>

              {/* TRANSPORT */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6"><Navigation className="text-blue-600" /><h3 className="text-xl font-extrabold text-slate-900">Transport & Access</h3></div>
                 <div className="space-y-4">
                   <DistanceRow icon={<Car />} category="Road Network" data={{ name: roadAccess, mins: "Direct Access" }} color="text-slate-900" />
                   <DistanceRow icon={<Train />} category="Public Transit" data={conn.metro} color="text-green-600" />
                   <DistanceRow icon={<Bike />} category="Walkability" data={{ name: walkability, mins: "Score: 7.5" }} color="text-blue-600" />
                 </div>
              </div>

              {/* PRICE TRENDS */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6"><LineChart className="text-purple-600" /><h3 className="text-xl font-extrabold text-slate-900">Price History</h3></div>
                 <div className="space-y-3">
                    {Object.entries(priceTrend).map(([year, price]) => (
                      <div key={year} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                         <span className="font-bold text-slate-500">{year}</span>
                         <span className="font-extrabold text-slate-900">{price}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* PROPERTY CONFIG TABLE */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm overflow-hidden">
                 <div className="flex items-center gap-3 mb-4"><Home className="text-emerald-600" /><h3 className="text-xl font-extrabold text-slate-900">Property Configurations</h3></div>
                 <div className="overflow-x-auto -mx-8 px-8 pb-4">
                   <table className="w-full min-w-[700px] text-left border-collapse">
                     <thead>
                       <tr className="border-b-2 border-slate-100 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                         <th className="py-4 pr-4">Type</th><th className="py-4 px-4">Size</th><th className="py-4 px-4">ROI</th><th className="py-4 pl-4">Rent</th>
                       </tr>
                     </thead>
                     <tbody className="text-sm font-medium text-slate-700">
                       <tr className="border-b border-slate-50"><td className="py-4 font-bold">Studio</td><td className="px-4">400 sq.ft</td><td className="px-4 text-emerald-600 font-bold">{economics.studio?.roi}</td><td className="pl-4">{economics.studio?.rent}</td></tr>
                       <tr className="border-b border-slate-50"><td className="py-4 font-bold">1-Bed</td><td className="px-4">800 sq.ft</td><td className="px-4 text-emerald-600 font-bold">{economics.oneBed?.roi}</td><td className="pl-4">{economics.oneBed?.rent}</td></tr>
                       <tr><td className="py-4 font-bold">2-Bed</td><td className="px-4">1200 sq.ft</td><td className="px-4 text-emerald-600 font-bold">{economics.twoBed?.roi}</td><td className="pl-4">{economics.twoBed?.rent}</td></tr>
                     </tbody>
                   </table>
                 </div>
              </div>

              {/* 5-YEAR FORECAST */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8 relative z-10">
                   <div><div className="flex items-center gap-2 mb-2"><TrendingUp className="text-blue-400" /><h3 className="text-xl font-extrabold">5-Year Growth</h3></div><p className="text-slate-400 text-sm">Projected appreciation.</p></div>
                   <div className="bg-blue-600/20 px-4 py-2 rounded-lg border border-blue-500/30 text-blue-300 font-bold text-sm">{forecastData[4].growth} by 2030</div>
                 </div>
                 <div className="grid grid-cols-5 gap-4 items-end h-40 relative z-10">
                   {forecastData.map((item, index) => {
                     const height = 40 + (index * 15); 
                     return (<div key={item.year} className="flex flex-col items-center gap-2"><div className="text-xs font-bold text-blue-300 mb-1">{item.growth}</div><div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative" style={{ height: `${height}%` }}></div><div className="text-xs font-bold text-slate-500">{item.year}</div></div>);
                   })}
                 </div>
              </div>
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="space-y-8">
              
              {/* 🟢 NEW: BUYER INTELLIGENCE (PSYCHOLOGICAL TRIGGER) */}
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden ring-4 ring-indigo-50">
                <div className="absolute top-0 right-0 p-4 opacity-10"><BrainCircuit size={80} /></div>
                <h4 className="font-extrabold text-lg mb-4 flex items-center gap-2"><BrainCircuit size={20} className="text-indigo-400"/> Buyer Intelligence</h4>
                
                <div className="space-y-4">
                   <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <div className="text-[10px] uppercase font-bold text-indigo-300 mb-1">Primary Archetype</div>
                      <div className="font-bold text-white text-lg">{buyerPsychology.archetype}</div>
                   </div>
                   <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <div className="text-[10px] uppercase font-bold text-indigo-300 mb-1">Psychological Trigger</div>
                      <div className="font-bold text-white text-sm leading-relaxed">"{buyerPsychology.trigger}"</div>
                   </div>
                   <p className="text-xs text-indigo-200 leading-relaxed italic opacity-80 border-l-2 border-indigo-500 pl-3">
                      {buyerPsychology.motivation}
                   </p>
                </div>
              </div>

              {/* SCORECARD */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2"><TrendingUp className="text-blue-600"/> Scorecard</h3>
                 <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
                    <div className="flex justify-between items-center mb-2"><div><div className="text-xs font-bold uppercase text-blue-400">Airbnb Potential</div><div className="font-extrabold text-slate-900 text-lg">{strScore}/10</div></div><div className="text-right"><div className="text-xs font-bold uppercase text-blue-400">Daily Rate</div><div className="font-extrabold text-slate-900">{strData.avgDailyRate}</div></div></div>
                    {strData.occupancy !== "N/A" && (<div className="w-full bg-white/50 h-1.5 rounded-full overflow-hidden mt-1"><div className="bg-blue-500 h-full rounded-full" style={{ width: strData.occupancy }}></div></div>)}
                 </div>
                 <div className="space-y-5">
                   <ScoreBar label="Cash Flow" value={scores.cashFlow} color="bg-green-500" />
                   <ScoreBar label="Appreciation" value={scores.appreciation} color="bg-blue-500" />
                   <ScoreBar label="Liquidity" value={scores.liquidity} color="bg-indigo-500" />
                   <ScoreBar label="Lifestyle" value={scores.lifestyle} color="bg-amber-500" />
                   <ScoreBar label="Risk (Low is Good)" value={scores.risk} color="bg-red-500" />
                 </div>
                 <div className="mt-8 pt-6 border-t border-slate-100 no-print">
                   <h4 className="font-bold text-slate-900 mb-2">Interested in {area.name}?</h4>
                   <p className="text-xs text-slate-500 mb-4">Get the full investment report and active listings.</p>
                   <button onClick={handleWhatsAppClick} className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg hover:shadow-green-500/20"><MessageCircle size={20} /> Contact Advisor</button>
                 </div>
              </div>

              {/* CONNECTIVITY */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2"><MapPin className="text-blue-600"/> Connectivity</h3>
                 <div className="space-y-4">
                   <DistanceRow icon={<Plane />} category="Airport" data={conn.airport} color="text-purple-600" />
                   <DistanceRow icon={<Briefcase />} category="Business Hub" data={conn.business} color="text-blue-600" />
                   <DistanceRow icon={<ShoppingBag />} category="Mall" data={conn.mall} color="text-pink-600" />
                 </div>
              </div>
          </div>
        </div>

        {/* 🟢 NEW: NEIGHBORHOOD EXPLORER (LUXURY CARDS) */}
        <div className="border-t border-slate-200 pt-16 mt-16 no-print">
           <h3 className="text-3xl font-serif font-bold text-slate-900 mb-10">Explore Neighboring Areas</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarAreas.map(neighbor => (
                 <Link to={`/area/${neighbor.id}`} key={neighbor.id} className="group relative block h-[350px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-slate-100">
                    <div className={`absolute inset-0 ${neighbor.imageColor || 'bg-slate-800'} transition-transform duration-1000 group-hover:scale-110`}>
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
                    </div>
                    <div className="absolute top-5 left-5 z-10">
                       <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                          <Crown size={10} className="fill-amber-400" /> {neighbor.category}
                       </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                       <div className="mt-auto mb-3">
                          <h3 className="text-2xl font-serif font-bold text-white leading-none mb-2 group-hover:text-amber-400 transition-colors">{neighbor.name}</h3>
                          <div className="h-0.5 w-8 bg-amber-500 rounded-full mb-2"></div>
                       </div>
                       <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex justify-between items-center group-hover:bg-white/20 transition-colors">
                          <div className="text-emerald-400 font-bold text-sm flex items-center gap-1"><TrendingUp size={14} /> {neighbor.roi} ROI</div>
                          <div className="text-white font-bold text-sm flex items-center gap-1">View <ArrowRight size={14} /></div>
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---
const FactItem = ({ icon, label, value }) => (<div className="flex flex-col items-center text-center p-2"><div className="text-slate-400 mb-2">{React.cloneElement(icon, { size: 20 })}</div><div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">{label}</div><div className="text-sm font-bold text-slate-900 leading-tight">{value}</div></div>);
const DemandBox = ({ icon, label, value, color }) => (<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100"><div className={`bg-white p-2 rounded-lg ${color} shadow-sm`}>{icon}</div><div><div className="text-[10px] uppercase font-bold text-slate-400">{label}</div><div className="text-sm font-bold text-slate-900">{value}</div></div></div>);
const ScoreBar = ({ label, value, color }) => (<div><div className="flex justify-between text-sm font-bold text-slate-700 mb-1"><span>{label}</span><span>{value}/10</span></div><div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden"><div className={`h-full rounded-full ${color}`} style={{ width: `${value * 10}%` }}></div></div></div>);
const DistanceRow = ({ icon, category, data, color }) => (<div className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0 p-2 rounded-lg transition-colors -mx-2"><div className="flex items-center gap-4"><div className="bg-slate-100 p-2.5 rounded-xl text-slate-500">{React.cloneElement(icon, { size: 18 })}</div><div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">{category}</div><div className="font-bold text-sm text-slate-900">{data?.name || "N/A"}</div></div></div><div className="text-right"><div className={`text-lg font-mono font-bold ${color}`}>{data?.mins || "--"}</div><div className="text-[10px] text-slate-400">{data?.km || "--"}</div></div></div>);

export default AreaPage;