import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, ArrowLeft, CheckCircle, TrendingUp, 
  Plane, ShoppingBag, BarChart3, Construction,
  GraduationCap, Train, Briefcase, HeartPulse,
  Tags, Building, Download, Loader2, Flame, Users, DollarSign, MessageCircle
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import SEO from '../components/SEO';
// import WhatsAppButton from '../components/WhatsAppButton'; // Replaced with direct logic below
import { DUBAI_AREAS as MASTER_DB } from '../data/emiratesData';

const AreaPage = () => {
  const { id } = useParams();
  const reportRef = useRef(); 
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const area = MASTER_DB.find(a => a.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!area) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Area Not Found</h1>
      <Link to="/areas" className="text-blue-600 hover:underline">Return to Map</Link>
    </div>
  );

  // --- PDF GENERATION FIX ---
  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    const element = reportRef.current;
    
    try {
      // Added useCORS and scroll options to fix blank/cut-off PDFs
      const canvas = await html2canvas(element, { 
        scale: 2,
        useCORS: true, 
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        ignoreElements: (node) => node.classList.contains('no-print') // Ignores buttons
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

  // --- SAFE DATA DEFAULTS ---
  const conn = area.connectivity || {};
  const scores = area.scores || { cashFlow: 5, appreciation: 5, liquidity: 5, risk: 5, lifestyle: 5 };
  const economics = area.unitEconomics || { studio: {}, oneBed: {}, twoBed: {} };
  const strScore = area.shortTermScore || ((scores.cashFlow + scores.lifestyle) / 2).toFixed(1);
  const investorTags = area.investorTags || ["High Yield", "Growth Potential"];
  const futureInfra = area.futureUpgrades || [{ name: "Infrastructure Upgrade", status: "Planned" }];
  const verdict = area.aiVerdict || { title: "Solid Investment Choice", summary: area.description };
  const demand = area.demandSignals || { tenantProfile: "Professionals & Families", rentalDemand: "High" };
  const strData = area.shortTermRental || { avgDailyRate: "N/A", occupancy: "N/A" };

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
        <div className={`rounded-3xl p-8 md:p-16 text-white mb-10 relative overflow-hidden shadow-xl ${area.imageColor || 'bg-blue-900'}`}>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* === LEFT COLUMN: DATA & CHARTS === */}
          <div className="lg:col-span-2 space-y-8">
              
              {/* UNIT ECONOMICS */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                   <BarChart3 className="text-emerald-600" />
                   <h3 className="text-xl font-extrabold text-slate-900">
                     Market <span className="text-emerald-600">Yields</span> & Rent
                   </h3>
                 </div>
                 <p className="text-slate-500 text-sm mb-6">Average ROI and annual rental income by unit type.</p>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                   <UnitBox label="Studio" roi={economics.studio?.roi} rent={economics.studio?.rent} color="text-green-600" bg="bg-green-50" border="border-green-100" />
                   <UnitBox label="1-Bedroom" roi={economics.oneBed?.roi} rent={economics.oneBed?.rent} color="text-blue-700" bg="bg-blue-50" border="border-blue-100" />
                   <UnitBox label="2-Bedroom" roi={economics.twoBed?.roi} rent={economics.twoBed?.rent} color="text-slate-700" bg="bg-slate-50" border="border-slate-100" />
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
                     <p className="text-slate-400 text-sm">Projected capital appreciation based on current Appreciation Score.</p>
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

              {/* FUTURE INFRASTRUCTURE */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                   <Construction className="text-orange-500" />
                   <h3 className="text-xl font-extrabold text-slate-900">Future <span className="text-orange-500">Infrastructure</span></h3>
                 </div>
                 <div className="space-y-4">
                   {futureInfra.map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400"><Building size={18} /></div>
                         <span className="font-bold text-slate-700">{item.name}</span>
                       </div>
                       <span className="text-[10px] font-bold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-500 uppercase tracking-wide">{item.status}</span>
                     </div>
                   ))}
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

          {/* === RIGHT COLUMN: INTELLIGENCE & SCORECARD === */}
          <div className="space-y-8">
              
              {/* 🔥 WHY INVEST HERE? (Dynamic Data) */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm relative overflow-hidden ring-4 ring-slate-50">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Flame size={64} className="text-red-600" />
                </div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-red-500">🔥</span> {verdict.title}
                </h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{verdict.summary}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                     <div className="bg-white p-2 rounded-lg text-blue-600 shadow-sm"><Users size={16}/></div>
                     <div>
                       <div className="text-[10px] uppercase font-bold text-slate-400">Tenant Profile</div>
                       <div className="text-sm font-bold text-slate-900">{demand.tenantProfile}</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                     <div className="bg-white p-2 rounded-lg text-emerald-600 shadow-sm"><DollarSign size={16}/></div>
                     <div>
                       <div className="text-[10px] uppercase font-bold text-slate-400">Rental Demand</div>
                       <div className="text-sm font-bold text-slate-900">{demand.rentalDemand}</div>
                     </div>
                  </div>
                </div>
              </div>

              {/* INVESTOR FIT TAGS */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
                 <div className="flex items-center gap-2 mb-4">
                   <Tags size={20} className="text-blue-600"/>
                   <h4 className="font-extrabold text-slate-900">Investor Fit</h4>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {investorTags.map((tag, i) => (
                     <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                       {tag}
                     </span>
                   ))}
                 </div>
              </div>

              {/* SCORECARD */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                   <TrendingUp className="text-blue-600" />
                   <h3 className="text-xl font-extrabold text-slate-900">Scorecard</h3>
                 </div>
                 
                 {/* STR INTELLIGENCE BOX */}
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
                      <div className="w-full bg-white/50 h-1.5 rounded-full overflow-hidden mt-1">
                         <div className="bg-blue-500 h-full rounded-full" style={{ width: strData.occupancy }}></div>
                      </div>
                    )}
                 </div>

                 <div className="space-y-5">
                   <ScoreBar label="Cash Flow" value={scores.cashFlow} color="bg-green-500" />
                   <ScoreBar label="Appreciation" value={scores.appreciation} color="bg-blue-500" />
                   <ScoreBar label="Liquidity" value={scores.liquidity} color="bg-indigo-500" />
                   <ScoreBar label="Lifestyle" value={scores.lifestyle} color="bg-amber-500" />
                   <ScoreBar label="Risk (Low is Good)" value={scores.risk} color="bg-red-500" />
                 </div>
                 
                 {/* WHATSAPP FIX */}
                 <div className="mt-8 pt-6 border-t border-slate-100 no-print">
                   <h4 className="font-bold text-slate-900 mb-2">Interested in {area.name}?</h4>
                   <p className="text-xs text-slate-500 mb-4">Get the full investment report and active listings.</p>
                   
                   <button 
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg hover:shadow-green-500/20"
                   >
                     <MessageCircle size={20} />
                     Contact Advisor
                   </button>
                 </div>
              </div>

              {/* LIFESTYLE PERKS FIX */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                  <CheckCircle size={20} className="text-blue-600"/> 
                  <span>Lifestyle Perks</span>
                </h4>
                {area.amenities && area.amenities.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {area.amenities.map((am, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600 whitespace-nowrap">
                            {am}
                        </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-slate-400 italic">No specific lifestyle perks listed.</p>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const UnitBox = ({ label, roi, rent, color, bg, border }) => (
  <div className={`p-4 rounded-xl border ${bg} ${border} flex flex-col justify-center`}>
    <div className={`text-[10px] font-bold uppercase mb-1 opacity-60`}>{label}</div>
    <div className={`text-2xl font-extrabold mb-1 ${color}`}>{roi || "N/A"}</div>
    <div className="text-[10px] font-medium opacity-50 mb-2">ROI</div>
    <div className="pt-2 border-t border-black/5 mt-auto">
       <div className="text-xs font-bold text-slate-700">{rent || "N/A"}</div>
       <div className="text-[9px] text-slate-400">Avg. Rent</div>
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