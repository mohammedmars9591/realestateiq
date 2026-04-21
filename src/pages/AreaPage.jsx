import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Download, Loader2, MessageCircle, 
  MapPin, Crown, TrendingUp, PlayCircle, PauseCircle, Volume2
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import SEO from '../components/SEO';
import { DUBAI_AREAS as MASTER_DB } from '../data/emiratesData'; 
import { AreaDetailSections } from '../components/area/AreaDetailSections';
import { MetricInsightCharts } from '../components/area/AreaCharts';

const AreaPage = () => {
  const { id } = useParams();
  const reportRef = useRef(); 
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const area = MASTER_DB.find(a => a.id === id);
  const similarAreas = MASTER_DB.filter(a => a.id !== id && a.emirate === area?.emirate).slice(0, 3);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!area) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F5EF]">
      <h1 className="text-3xl font-bold text-[#1C1C22] mb-4">Area Intelligence Not Found</h1>
      <Link to="/areas" className="btn-secondary text-sm">Return to National Map</Link>
    </div>
  );

  // --- PDF & WHATSAPP LOGIC ---
  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    const element = reportRef.current;
    try {
      const canvas = await html2canvas(element, { 
          scale: 2, 
          useCORS: true, 
          backgroundColor: '#F8F5EF',
          scrollY: -window.scrollY, 
          windowWidth: document.documentElement.offsetWidth 
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`RealEstateIQ_${area.name}_Market_Brief.pdf`);
    } catch (err) { 
        console.error("PDF Generation failed", err); 
        alert("Could not generate high-fidelity PDF."); 
    } finally { 
        setIsGeneratingPdf(false); 
    }
  };

  const handleWhatsAppClick = () => {
    const phone = "971501234567"; 
    const text = `Hi, I'm analyzing ${area.name} in ${area.emirate} through RealEstateIQ. Can you share the latest investment report and availability?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Metric Mappings - Refined for professional intelligence
  const metricCharts = [
    { title: "Investment Yield", valueLabel: area.roi || "N/A", score: parseFloat((area.roi || "0").replace(/[^0-9.]/g, "")) * 10 || 65, explanation: "Yield strength based on active rental contracts and benchmarked capital velocity." },
    { title: "Appreciation Score", valueLabel: (area.scores?.appreciation > 8) ? "Elite Potential" : "High Growth", score: (area.scores?.appreciation || 7) * 11, explanation: "Projected capital growth floor based on infrastructure maturity and masterplan status." },
    { title: "Investor Demand", valueLabel: area.demandSignals?.rentalDemand || "Institutional", score: 85, explanation: "Active buy-side pressure from both domestic syndicates and international HNWIs." },
    { title: "Market Liquidity", valueLabel: area.demandSignals?.resaleLiquidity || "Liquid", score: (area.scores?.liquidity || 6) * 13, explanation: "Exit velocity in the secondary resale market and ease of off-plan flip arbitrage." },
  ];

  // --- AEO/GEO: BUILD SCHEMAS FOR THIS AREA ---
  const areaListingSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": area.name,
    "description": area.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.name,
      "addressRegion": area.emirate,
      "addressCountry": "AE"
    },
    "url": `https://www.realestateiq.ae/area/${area.id}`,
    "knowsAbout": area.amenities || [],
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Avg. ROI", "value": area.roi || "N/A" },
      { "@type": "PropertyValue", "name": "Avg. Price", "value": area.avgPrice || "N/A" },
      { "@type": "PropertyValue", "name": "Overall Score", "value": area.overallScore || "N/A" },
      { "@type": "PropertyValue", "name": "Ownership Type", "value": area.ownership?.type || "Freehold" }
    ]
  };

  const areaFAQ = [
    {
      question: `Is ${area.name} a good investment in 2026?`,
      answer: area.aiVerdict?.summary || `${area.name} offers strong investment fundamentals with approximately ${area.roi || "competitive"} rental yield. ${area.description || ""}`
    },
    {
      question: `What is the average property price in ${area.name}?`,
      answer: `The average property price in ${area.name} is approximately ${area.avgPrice || "N/A"}. Prices range from ${area.unitEconomics?.studio?.price || "AED 500K"} for studios to ${area.unitEconomics?.villa?.price || "AED 10M+"} for villas.`
    },
    {
      question: `What is the rental yield in ${area.name}?`,
      answer: `${area.name} delivers approximately ${area.roi || "6–9%"} annual rental yield. One-bedroom units typically return ${area.unitEconomics?.oneBed?.roi || "7–9%"} ROI at average rents of ${area.unitEconomics?.oneBed?.rent || "AED 80–100K per year"}.`
    },
    {
      question: `Is ${area.name} freehold for foreigners?`,
      answer: area.ownership ? `${area.name} is a ${area.ownership.type} area. It is eligible for ${area.ownership.eligibleFor?.join(", ") || "all nationalities"} with a minimum down payment of ${area.ownership.minDownPayment || "25%"}.` : `${area.name} is a freehold zone open to all nationalities.`
    }
  ];

  const areaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.realestateiq.ae" },
      { "@type": "ListItem", "position": 2, "name": "Areas", "item": "https://www.realestateiq.ae/areas" },
      { "@type": "ListItem", "position": 3, "name": area.name, "item": `https://www.realestateiq.ae/area/${area.id}` }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] pb-24 fade-in">
      <SEO 
        title={`${area.name} Investment Intelligence 2026 — ROI, Prices & Forecast`}
        description={`Professional real estate analysis for ${area.name}, ${area.emirate}. Average ROI: ${area.roi || "N/A"}.`}
        url={`/area/${area.id}`}
        schema={areaListingSchema}
        faqSchema={areaFAQ}
        articleSchema={{
          headline: `${area.name} Real Estate Investment Guide 2026`,
          description: `Comprehensive investment intelligence for ${area.name}, ${area.emirate}.`,
          datePublished: "2026-01-01",
          dateModified: new Date().toISOString().split('T')[0]
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumb) }} />

      {/* TOP DECK: ACTIONS */}
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <Link to="/areas" className="group flex items-center gap-3 text-[#7A6E60] hover:text-[#C6A75E] font-bold text-xs uppercase tracking-widest transition-all">
            <div className="p-2 rounded-full border border-[rgba(198,167,94,0.2)] group-hover:bg-[#C6A75E] group-hover:text-white transition-all">
               <ArrowLeft size={14} />
            </div>
            Back to National Map
          </Link>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <button onClick={handleDownloadPDF} disabled={isGeneratingPdf} className="btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 text-[10px] md:text-xs py-2.5">
              {isGeneratingPdf ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />} 
              Download Market Brief
            </button>
            <button onClick={handleWhatsAppClick} className="btn-primary flex-1 sm:flex-none flex items-center justify-center gap-3 text-[10px] md:text-xs py-2.5">
              <MessageCircle size={16} /> Contact Advisor
            </button>
          </div>
        </div>

        {/* --- MAIN GENERATED CONTENT --- */}
        <div ref={reportRef} className="relative w-full rounded-2xl md:rounded-[2.5rem] bg-transparent overflow-hidden mb-12">
          
          {/* HERO HEADER */}
          <div className="relative w-full min-h-[500px] md:h-[650px] flex items-end">
            <div className="absolute inset-0 w-full h-full">
               <img 
                 src={`https://source.unsplash.com/1600x900/?dubai,${area.name.replace(/\s+/g, ',')},buildings`} 
                 alt={area.name}
                 className="w-full h-full object-cover"
                 onError={(e) => {
                    e.target.src = 'https://source.unsplash.com/1600x900/?dubai,skyline,downtown';
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/90 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-6 md:p-14 w-full md:w-2/3">
              <h1 className="text-5xl md:text-7xl font-serif text-[#3A3125] leading-tight mb-2 tracking-tight drop-shadow-sm">
                {area.name}
              </h1>
              <div className="flex items-center gap-2 mb-6">
                 <span className="text-lg md:text-xl text-[#3A3125] font-light">{area.emirate},</span>
                 <span className="text-lg md:text-xl text-[#C6A75E] font-medium tracking-wide">UAE</span>
              </div>
              
              <p className="text-base md:text-lg text-[#5A4F40] font-light max-w-2xl leading-relaxed mb-8">
                {area.description}
              </p>

              {/* MAJOR DEVELOPERS GLASS CARD */}
              <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-sm mb-6 max-w-xl">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="p-1 rounded-md bg-[#C6A75E]/10"><HardHat size={14} className="text-[#C6A75E]" /></span>
                    <h3 className="text-sm font-serif font-bold text-[#3A3125]">Major Developers</h3>
                 </div>
                 <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {area.masterDeveloper?.split(',').map((dev, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#5A4F40] font-medium">
                         <div className="w-1 h-3 rounded-full bg-gradient-to-b from-[#C6A75E] to-[#E2C98E]"></div>
                         {dev.trim()}
                      </div>
                    )) || (
                      <>
                        <div className="flex items-center gap-2 text-xs text-[#5A4F40] font-medium"><div className="w-1 h-3 rounded-full bg-gradient-to-b from-[#C6A75E] to-[#E2C98E]"></div>Emaar Properties</div>
                        <div className="flex items-center gap-2 text-xs text-[#5A4F40] font-medium"><div className="w-1 h-3 rounded-full bg-gradient-to-b from-[#C6A75E] to-[#E2C98E]"></div>DAMAC Properties</div>
                        <div className="flex items-center gap-2 text-xs text-[#5A4F40] font-medium"><div className="w-1 h-3 rounded-full bg-gradient-to-b from-[#C6A75E] to-[#E2C98E]"></div>Select Group</div>
                      </>
                    )}
                 </div>
              </div>
              
              {/* AI AUDIO BRIEFING COMPONENT (Warm Glass) */}
              <div className="flex items-center gap-4 bg-white/40 backdrop-blur-xl border border-white/60 p-2.5 pr-6 rounded-full max-w-md shadow-sm">
                 <button 
                   onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                   className="text-[#3A3125] bg-white hover:bg-[#C6A75E] hover:text-white transition-all rounded-full p-2"
                 >
                   {isPlayingAudio ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                 </button>
                 <div className="flex-grow">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-[#3A3125]">AI Market Briefing</span>
                     <span className="text-[10px] font-bold text-[#3A3125]/60">1:14</span>
                   </div>
                   <div className="w-full h-1 bg-[#3A3125]/10 rounded-full overflow-hidden flex items-center">
                     {isPlayingAudio ? (
                        <div className="w-full flex items-end gap-0.5 px-0.5 h-3">
                           {[...Array(20)].map((_, i) => (
                             <div key={i} className="w-full bg-[#C6A75E] animate-pulse rounded-t-sm" style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDuration: `${0.3 + Math.random() * 0.5}s` }} />
                           ))}
                        </div>
                     ) : (
                        <div className="w-1/3 h-full bg-[#C6A75E] rounded-full" />
                     )}
                   </div>
                 </div>
                 <Volume2 size={16} className="text-[#3A3125]/60" />
              </div>

            </div>
          </div>
          
          {/* CONTENT RECEPTACLE FOR SECTIONS */}
          <div className="px-4 md:px-14 pb-20">
            {/* INVESTMENT METRICS DECK */}
            <div className="mb-16 -mt-8 relative z-20">
              <MetricInsightCharts metrics={metricCharts} />
            </div>

            {/* STRIPPED OUT HEADER TITLES, LETTING THE FROSTED CARDS SHINE */}
            <AreaDetailSections area={area} allAreas={MASTER_DB} />

            {/* NEIGHBORHOOD EXPLORER */}
            <div className="mt-24 pt-16 border-t border-[rgba(198,167,94,0.2)] no-print">
               <h3 className="text-3xl font-serif font-bold text-[#1C1C22] mb-12">Comparative Markets ({area.emirate})</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {similarAreas.map(neighbor => (
                     <Link to={`/area/${neighbor.id}`} key={neighbor.id} className="group relative block h-[380px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-[rgba(198,167,94,0.15)] bg-white">
                        <div className={`absolute inset-0 ${neighbor.imageColor || 'bg-[#1C1C22]'} transition-transform duration-1000 group-hover:scale-110 opacity-20`}></div>
                        <div className="absolute top-6 left-6 z-10">
                           <div className="bg-white/90 backdrop-blur-md border border-[rgba(198,167,94,0.3)] text-[#C6A75E] text-[10px] font-extrabold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-2 transition-all group-hover:bg-[#C6A75E] group-hover:text-white">
                              <Crown size={12} /> {neighbor.category}
                           </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                           <div className="mt-auto mb-4">
                              <h3 className="text-3xl font-serif font-bold text-[#1C1C22] leading-tight mb-2 transition-colors">{neighbor.name}</h3>
                              <div className="h-1 w-10 bg-[#C6A75E] rounded-full"></div>
                           </div>
                           <div className="bg-white/60 backdrop-blur-md border border-[rgba(198,167,94,0.2)] rounded-2xl p-4 flex justify-between items-center group-hover:bg-white transition-all">
                              <div>
                                 <p className="text-[10px] font-bold text-[#7A6E60] uppercase mb-0.5">Average ROI</p>
                                 <p className="text-[#C6A75E] font-black text-lg flex items-center gap-1.5"><TrendingUp size={16} /> {neighbor.roi}</p>
                              </div>
                              <div className="h-10 w-10 rounded-full bg-[#1C1C22] text-white flex items-center justify-center transform transition-transform group-hover:rotate-45">
                                 <ArrowLeft size={20} className="rotate-180" />
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPage;