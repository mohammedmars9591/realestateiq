import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, ArrowLeft, CheckCircle, TrendingUp, 
  Plane, ShoppingBag, BarChart3, Construction,
  GraduationCap, Train, Briefcase, HeartPulse,
  Tags, Building, Download, Loader2, Flame, Users, DollarSign, MessageCircle,
  Calendar, Maximize, Waves, Building2, Map, Camera, Palmtree, 
  LineChart, Lightbulb, Target, Utensils, Car, Bike, Navigation, BookOpen, Home
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import SEO from '../components/SEO';
import { DUBAI_AREAS as MASTER_DB } from '../data/areaData'; 

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

  // --- PDF GENERATION ---
  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    const element = reportRef.current;
    
    try {
      const canvas = await html2canvas(element, { 
        scale: 2,
        useCORS: true, 
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        ignoreElements: (node) => node.classList.contains('no-print') 
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${area.name}_Investment_Summary.pdf`);
    } catch (err) {
      console.error("PDF Generation failed", err);
      alert("Could not generate PDF. Please try again.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // --- WHATSAPP LOGIC ---
  const handleWhatsAppClick = () => {
    const phone = "971501234567"; // REPLACE WITH YOUR NUMBER
    const text = `Hi, I'm interested in investment opportunities in ${area.name}. Can you share the latest availability and report?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
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

  // --- KEY FACTS ---
  const keyFacts = {
    developer: area.masterDeveloper || "Various",
    location: area.location || area.emirate,
    totalArea: area.totalArea || "N/A",
    privateBeach: area.amenities?.some(a => a.includes("Beach")) || area.investorTags?.includes("Waterfront") ? "Yes" : "No",
    towers: area.towers || "Multiple", 
    timeline: area.completion || "Ready"
  };

  // --- HIGHLIGHTS ---
  const highlights = area.highlights || [
    `Ranked ${area.overallScore}/10 for investment potential.`,
    `High rental demand: ${demand.rentalDemand}.`,
    `Strategic location near key hubs.`,
    `Known for ${area.category} status.`
  ];

  // --- ATTRACTIONS LOGIC ---
  const leisureItems = area.amenities?.filter(a => 
    a.includes("Park") || a.includes("Beach") || a.includes("Golf") || a.includes("Cinema") || a.includes("Garden")
  ) || ["Community Parks", "Fitness Centres"];

  const shoppingItems = area.amenities?.filter(a => 
    a.includes("Mall") || a.includes("Market") || a.includes("Shop") || a.includes("Retail")
  ) || ["Local Retail Centre", "Supermarkets"];

  // --- TRANSPORT LOGIC ---
  const roadAccess = area.description?.includes("Sheikh Zayed") ? "Sheikh Zayed Road (E11)" : 
                     area.description?.includes("Al Khail") ? "Al Khail Road (E44)" : "Main Highways";
  
  const walkability = area.amenities?.some(a => a.includes("Walk") || a.includes("Park")) ? "High (Pedestrian Friendly)" : "Moderate (Car Dependent)";

  // --- NARRATIVE GENERATOR ---
  const narratives = {
    priceTrends: `Property prices in ${area.name} have demonstrated a ${scores.appreciation > 7 ? "robust upward" : "stable"} trajectory over the last 36 months. Starting from an average of ${Object.values(priceTrend)[0] || "base rates"} in 2023, market valuations have strengthened to ${Object.values(priceTrend)[2] || "current levels"}. This growth is largely driven by ${futureInfra[0]?.name ? `anticipation of the ${futureInfra[0].name}` : "sustained high occupancy rates"}, making it a resilient asset class against inflation.`,
    
    investmentPotential: `${area.name} is currently positioned as a "${area.category}" powerhouse. With an average ROI of ${area.roi}, it outperforms many ${area.emirate} averages. The area scores ${scores.cashFlow}/10 for Cash Flow, making it particularly attractive for ${scores.cashFlow > 7 ? "income-focused investors seeking immediate yield" : "long-term capital growth strategies"}. The ${demand.rentalDemand.toLowerCase()} rental demand ensures minimal void periods for landlords.`,
    
    uaeTips: `For investors targeting ${area.name}, the strategy is clear: Focus on ${economics.studio ? "Studio and 1-Bedroom units" : "smaller units"} to maximize yield per sq.ft. Given the ${walkability.toLowerCase()} nature of the area, properties within walking distance to ${leisureItems[0] || "key amenities"} command a 10-15% rental premium. ${futureInfra.length > 0 ? "Buying before the completion of upcoming infrastructure is highly recommended to capture capital appreciation." : "Ensure you verify the service charges, as efficient management directly boosts your net income here."}`
  };

  // --- FORECAST LOGIC ---
  const baseGrowthRate = (scores.appreciation || 5) * 1.2; 
  const currentYear = 2026;
  const forecastData = Array.from({ length: 5 }, (_, i) => {
    const year = currentYear + i;
    const growth = (baseGrowthRate * (i + 1)).toFixed(1); 
    return { year, growth: `+${growth}%` };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen pt-8">
      <SEO 
        title={`${area.name} Investment Analysis | EstateIQ`} 
        description={`Why invest in ${area.name}? ROI: ${area.roi}, Rent: ${economics.oneBed?.rent}, Growth Forecast.`}
      />

      {/* TOP NAV & DOWNLOAD */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/areas" className="inline-flex items-center gap-2 text-slate-500 hover:text-black font-bold text-sm transition-colors">
          <ArrowLeft size={16} /> Back to National Map
        </Link>
        <button 
          onClick={handleDownloadPDF}
          disabled={isGeneratingPdf}
          className="bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
        >
          {isGeneratingPdf ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
          {isGeneratingPdf ? "Generating..." : "Download Investor PDF"}
        </button>
      </div>

      {/* --- PRINTABLE REPORT WRAPPER --- */}
      <div ref={reportRef} className="bg-slate-50 p-1 md:p-4 rounded-3xl"> 
        
        {/* HERO SECTION */}
        <div className={`rounded-3xl p-8 md:p-16 text-white mb-6 relative overflow-hidden shadow-xl ${area.imageColor || 'bg-blue-900'}`}>
           <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                  {area.emirate || "UAE"}
                </span>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold border border-yellow-500 flex items-center gap-1">
                   ★ {area.overallScore || 8.5}/10 Score
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{area.name}</h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl">{area.description}</p>
           </div>
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        {/* KEY FACTS BAR */}
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
              
              {/* EXECUTIVE MARKET BRIEF */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                   <BookOpen className="text-blue-600" /> Executive Market Brief
                 </h3>
                 <div className="space-y-6">
                    {/* Price Trends */}
                    <div>
                       <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                          <TrendingUp size={16} className="text-emerald-500" /> Price Insights & Trends
                       </h4>
                       <p className="text-slate-600 text-sm leading-relaxed text-justify">{narratives.priceTrends}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    {/* Investment Potential */}
                    <div>
                       <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                          <Target size={16} className="text-blue-500" /> Investment Potential
                       </h4>
                       <p className="text-slate-600 text-sm leading-relaxed text-justify">{narratives.investmentPotential}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    {/* UAE Tips */}
                    <div>
                       <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                          <Lightbulb size={16} className="text-yellow-500" /> Strategic Advisor Tips
                       </h4>
                       <p className="text-slate-600 text-sm leading-relaxed text-justify">{narratives.uaeTips}</p>
                    </div>
                 </div>
              </div>

              {/* KEY HIGHLIGHTS */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                   <CheckCircle className="text-blue-600" /> Key Highlights
                 </h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {highlights.map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-500"></div>
                       <span className="text-sm font-medium text-slate-700 leading-relaxed">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              {/* ATTRACTIONS (Split Categories) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Leisure Card */}
                 <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                       <div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><Palmtree size={20} /></div>
                       <h4 className="font-bold text-slate-900">Waterfront & Leisure</h4>
                    </div>
                    <ul className="space-y-3 mt-auto">
                       {leisureItems.slice(0,3).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                             <CheckCircle size={14} className="text-teal-500" /> {item}
                          </li>
                       ))}
                       {leisureItems.length === 0 && <li className="text-sm text-slate-400 italic">Standard community parks available.</li>}
                    </ul>
                 </div>
                 {/* Shopping Card */}
                 <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                       <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Utensils size={20} /></div>
                       <h4 className="font-bold text-slate-900">Shopping & Dining</h4>
                    </div>
                    <ul className="space-y-3 mt-auto">
                       {shoppingItems.slice(0,3).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                             <CheckCircle size={14} className="text-purple-500" /> {item}
                          </li>
                       ))}
                       {shoppingItems.length === 0 && <li className="text-sm text-slate-400 italic">Local retail centers nearby.</li>}
                    </ul>
                 </div>
              </div>

              {/* TRANSPORT HUB */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                       <Navigation className="text-blue-400" />
                       <h3 className="text-xl font-extrabold">Transport & Access</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                          <div className="text-blue-300 mb-2"><Car size={24} /></div>
                          <div className="text-xs font-bold uppercase opacity-60 mb-1">Road Network</div>
                          <div className="font-bold text-lg leading-tight mb-1">{roadAccess}</div>
                          <div className="text-xs opacity-70">Primary Highway Access</div>
                       </div>
                       <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                          <div className="text-blue-300 mb-2"><Train size={24} /></div>
                          <div className="text-xs font-bold uppercase opacity-60 mb-1">Public Transit</div>
                          <div className="font-bold text-lg leading-tight mb-1">{conn.metro?.name || "Bus Links"}</div>
                          <div className="text-xs opacity-70">{conn.metro?.mins ? `${conn.metro.mins} away` : "Planned"}</div>
                       </div>
                       <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                          <div className="text-blue-300 mb-2"><Bike size={24} /></div>
                          <div className="text-xs font-bold uppercase opacity-60 mb-1">Event Flow</div>
                          <div className="font-bold text-lg leading-tight mb-1">{walkability}</div>
                          <div className="text-xs opacity-70">Walking & Cycling Paths</div>
                       </div>
                    </div>
                 </div>
                 <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
              </div>

              {/* PRICE TRENDS CHART */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                   <LineChart className="text-purple-600" />
                   <h3 className="text-xl font-extrabold text-slate-900">Price History (Chart)</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                       <p className="text-sm text-slate-500">Historical average transaction price over the last 4 years.</p>
                       <div className="space-y-3">
                          {Object.entries(priceTrend).map(([year, price]) => (
                            <div key={year} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                               <span className="font-bold text-slate-500">{year}</span>
                               <div className="flex-1 mx-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }}></div>
                               </div>
                               <span className="font-extrabold text-slate-900">{price}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                       <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold uppercase text-xs tracking-wider"><TrendingUp size={14} /> Market Direction</div>
                       <div className="text-2xl font-extrabold text-slate-900 mb-2">Upward Trend</div>
                       <p className="text-sm text-slate-600 leading-relaxed">Values in {area.name} have seen consistent growth due to {futureInfra[0]?.name ? `upcoming infrastructure like the ${futureInfra[0].name}` : "high rental demand"}.</p>
                    </div>
                 </div>
              </div>

              {/* 🟢 NEW: PROPERTY CONFIGURATION TABLE (APARTMENT / TOWNHOUSE / VILLA) */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm overflow-hidden">
                 <div className="flex items-center gap-3 mb-4">
                   <Home className="text-emerald-600" />
                   <h3 className="text-xl font-extrabold text-slate-900">Property Configurations & Market Analytics</h3>
                 </div>
                 <p className="text-slate-500 text-sm mb-8">Detailed breakdown of typical sizes, ROI potential, and rental income by property type.</p>
                 <div className="overflow-x-auto -mx-8 px-8 pb-4">
                   <table className="w-full min-w-[700px] text-left border-collapse">
                     <thead>
                       <tr className="border-b-2 border-slate-100 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                         <th className="py-4 pr-4">Type</th>
                         <th className="py-4 px-4">Typical Size</th>
                         <th className="py-4 px-4">Signature Features</th>
                         <th className="py-4 px-4">Best For</th>
                         <th className="py-4 px-4 text-emerald-600">Avg. ROI</th>
                         <th className="py-4 pl-4">Avg. Rent</th>
                       </tr>
                     </thead>
                     <tbody className="text-sm font-medium text-slate-700">
                       
                       {/* APARTMENTS */}
                       <tr className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors group">
                         <td className="py-4 pr-4 font-bold text-slate-900 group-hover:text-blue-600">Studio Apartment</td>
                         <td className="py-4 px-4 text-slate-500">380 - 520 sq.ft</td>
                         <td className="py-4 px-4">Open plan, Low maintenance</td>
                         <td className="py-4 px-4"><span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold">High Yield</span></td>
                         <td className="py-4 px-4 font-extrabold text-emerald-600">{economics.studio?.roi || "N/A"}</td>
                         <td className="py-4 pl-4">{economics.studio?.rent || "N/A"}</td>
                       </tr>
                       <tr className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors group">
                         <td className="py-4 pr-4 font-bold text-slate-900 group-hover:text-blue-600">1-Bedroom Apt</td>
                         <td className="py-4 px-4 text-slate-500">750 - 950 sq.ft</td>
                         <td className="py-4 px-4">Balcony, Separate Living</td>
                         <td className="py-4 px-4"><span className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-xs font-bold">Liquidity</span></td>
                         <td className="py-4 px-4 font-extrabold text-emerald-600">{economics.oneBed?.roi || "N/A"}</td>
                         <td className="py-4 pl-4">{economics.oneBed?.rent || "N/A"}</td>
                       </tr>
                       <tr className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors group">
                         <td className="py-4 pr-4 font-bold text-slate-900 group-hover:text-blue-600">2-Bedroom Apt</td>
                         <td className="py-4 px-4 text-slate-500">1,100 - 1,400 sq.ft</td>
                         <td className="py-4 px-4">En-suite, Closed Kitchen</td>
                         <td className="py-4 px-4"><span className="bg-amber-50 text-amber-600 px-2 py-1 rounded text-xs font-bold">Stability</span></td>
                         <td className="py-4 px-4 font-extrabold text-emerald-600">{economics.twoBed?.roi || "N/A"}</td>
                         <td className="py-4 pl-4">{economics.twoBed?.rent || "N/A"}</td>
                       </tr>

                       {/* TOWNHOUSE (Conditional / Placeholder logic if specific data missing) */}
                       <tr className="border-b border-slate-50 hover:bg-emerald-50/30 transition-colors group">
                         <td className="py-4 pr-4 font-bold text-slate-900 group-hover:text-emerald-600">Townhouse (3-Bed)</td>
                         <td className="py-4 px-4 text-slate-500">2,100 - 2,500 sq.ft</td>
                         <td className="py-4 px-4">Private Garden, Maid's Room</td>
                         <td className="py-4 px-4"><span className="bg-teal-50 text-teal-600 px-2 py-1 rounded text-xs font-bold">Families</span></td>
                         <td className="py-4 px-4 font-extrabold text-emerald-600">~6.0-6.5%</td>
                         <td className="py-4 pl-4">AED 130k+</td>
                       </tr>

                       {/* VILLA */}
                       <tr className="hover:bg-emerald-50/30 transition-colors group">
                         <td className="py-4 pr-4 font-bold text-slate-900 group-hover:text-emerald-600">Villa (4-Bed+)</td>
                         <td className="py-4 px-4 text-slate-500">3,500+ sq.ft</td>
                         <td className="py-4 px-4">Private Pool, Large Plot</td>
                         <td className="py-4 px-4"><span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded text-xs font-bold">Luxury</span></td>
                         <td className="py-4 px-4 font-extrabold text-emerald-600">~5.5%</td>
                         <td className="py-4 pl-4">AED 200k+</td>
                       </tr>

                     </tbody>
                   </table>
                 </div>
              </div>

              {/* 5-YEAR FORECAST */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                 <div className="flex justify-between items-start mb-8 relative z-10">
                   <div>
                     <div className="flex items-center gap-2 mb-2">
                       <TrendingUp className="text-blue-400" />
                       <h3 className="text-xl font-extrabold">5-Year Growth Forecast</h3>
                     </div>
                     <p className="text-slate-400 text-sm">Projected capital appreciation.</p>
                   </div>
                   <div className="bg-blue-600/20 px-4 py-2 rounded-lg border border-blue-500/30 text-blue-300 font-bold text-sm">
                     {forecastData[4].growth} by 2030
                   </div>
                 </div>
                 <div className="grid grid-cols-5 gap-4 items-end h-40 relative z-10">
                   {forecastData.map((item, index) => {
                     const height = 40 + (index * 15); 
                     return (
                       <div key={item.year} className="flex flex-col items-center gap-2">
                         <div className="text-xs font-bold text-blue-300 mb-1">{item.growth}</div>
                         <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative" style={{ height: `${height}%` }}></div>
                         <div className="text-xs font-bold text-slate-500">{item.year}</div>
                       </div>
                     );
                   })}
                 </div>
              </div>

          </div>

          {/* === RIGHT COLUMN: SCORECARD & POTENTIAL === */}
          <div className="space-y-8">
              
              {/* INVESTMENT POTENTIAL CARD */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm relative overflow-hidden ring-4 ring-slate-50">
                <div className="absolute top-0 right-0 p-4 opacity-5"><Target size={64} className="text-blue-600" /></div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center gap-2"><span className="text-blue-600">🎯</span> Investment Potential</h4>
                <div className="text-sm font-bold text-slate-900 mb-1">{verdict.title}</div>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{verdict.summary}</p>
                <div className="space-y-3">
                  <DemandBox icon={<Users size={16}/>} label="Tenant Profile" value={demand.tenantProfile} color="text-blue-600" />
                  <DemandBox icon={<DollarSign size={16}/>} label="Rental Demand" value={demand.rentalDemand} color="text-emerald-600" />
                </div>
              </div>

              {/* SCORECARD */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                   <TrendingUp className="text-blue-600" />
                   <h3 className="text-xl font-extrabold text-slate-900">Scorecard</h3>
                 </div>
                 <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="text-xs font-bold uppercase text-blue-400">Airbnb Potential</div>
                        <div className="font-extrabold text-slate-900 text-lg">{strScore}/10</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold uppercase text-blue-400">Daily Rate</div>
                        <div className="font-extrabold text-slate-900">{strData.avgDailyRate}</div>
                      </div>
                    </div>
                    {strData.occupancy !== "N/A" && (
                      <div className="w-full bg-white/50 h-1.5 rounded-full overflow-hidden mt-1"><div className="bg-blue-500 h-full rounded-full" style={{ width: strData.occupancy }}></div></div>
                    )}
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
                   <button onClick={handleWhatsAppClick} className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg hover:shadow-green-500/20">
                     <MessageCircle size={20} /> Contact Advisor
                   </button>
                 </div>
              </div>

              {/* CONNECTIVITY */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                   <MapPin className="text-blue-600" />
                   <h3 className="text-xl font-extrabold text-slate-900">Strategic Connectivity</h3>
                 </div>
                 <div className="space-y-4">
                   <DistanceRow icon={<Plane />} category="Nearest Airport" data={conn.airport} color="text-purple-600" />
                   <DistanceRow icon={<Briefcase />} category="Business Hub" data={conn.business} color="text-blue-600" />
                   <DistanceRow icon={<Train />} category="Metro / Transport" data={conn.metro} color="text-green-600" />
                   <DistanceRow icon={<GraduationCap />} category="Top School" data={conn.school} color="text-yellow-600" />
                   <DistanceRow icon={<ShoppingBag />} category="Shopping Mall" data={conn.mall} color="text-pink-600" />
                   <DistanceRow icon={<HeartPulse />} category="Healthcare" data={conn.hospital} color="text-red-600" />
                 </div>
              </div>

          </div>
        </div>

        {/* NEIGHBORHOOD EXPLORER */}
        <div className="border-t border-slate-200 pt-16 mt-16 no-print">
           <h3 className="text-2xl font-bold text-slate-900 mb-8">Explore Neighboring Areas</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarAreas.map(neighbor => (
                 <Link to={`/area/${neighbor.id}`} key={neighbor.id} className="block group bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className={`h-32 rounded-xl mb-4 ${neighbor.imageColor || 'bg-slate-800'} relative overflow-hidden`}>
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                       <div className="absolute bottom-3 left-3 text-white font-bold">{neighbor.name}</div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500">Proj. ROI</span>
                       <span className="font-bold text-emerald-600">{neighbor.roi}</span>
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

const FactItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center text-center p-2">
    <div className="text-slate-400 mb-2">{React.cloneElement(icon, { size: 20 })}</div>
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">{label}</div>
    <div className="text-sm font-bold text-slate-900 leading-tight">{value}</div>
  </div>
);

const DemandBox = ({ icon, label, value, color }) => (
  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
     <div className={`bg-white p-2 rounded-lg ${color} shadow-sm`}>{icon}</div>
     <div>
       <div className="text-[10px] uppercase font-bold text-slate-400">{label}</div>
       <div className="text-sm font-bold text-slate-900">{value}</div>
     </div>
  </div>
);

const ScoreBar = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
      <span>{label}</span>
      <span>{value}/10</span>
    </div>
    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value * 10}%` }}></div>
    </div>
  </div>
);

const DistanceRow = ({ icon, category, data, color }) => (
  <div className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0 p-2 rounded-lg transition-colors -mx-2">
    <div className="flex items-center gap-4">
      <div className="bg-slate-100 p-2.5 rounded-xl text-slate-500">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">{category}</div>
        <div className="font-bold text-sm text-slate-900">{data?.name || "N/A"}</div>
      </div>
    </div>
    <div className="text-right">
       <div className={`text-lg font-mono font-bold ${color}`}>{data?.mins || "--"}</div>
       <div className="text-[10px] text-slate-400">{data?.km || "--"}</div>
    </div>
  </div>
);

export default AreaPage;