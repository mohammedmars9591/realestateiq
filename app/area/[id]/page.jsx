"use client";

import React, { useEffect, useRef, useState, use } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, Download, Loader2, MessageCircle, HardHat,
  MapPin, Crown, TrendingUp, PlayCircle, PauseCircle, Volume2,
  Bookmark, BookmarkCheck, CircleHelp, Zap, Activity
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { DUBAI_AREAS as MASTER_DB } from '../../../src/data/emiratesData'; 
import { AreaDetailSections } from '../../../src/components/area/AreaDetailSections';
import { MetricInsightCharts } from '../../../src/components/area/AreaCharts';
import { isInWatchlist, toggleWatchlist } from '../../../src/utils/watchlist';

const AreaPage = () => {
  const params = useParams();
  const id = params.id;
  const reportRef = useRef(); 
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const routeId = decodeURIComponent(id || "").replace(/\/$/, "");
  const db = Array.isArray(MASTER_DB) ? MASTER_DB : [];
  const area = db.find((a) => String(a.id) === routeId);
  const similarAreas = db.filter((a) => String(a.id) !== routeId && a.emirate === area?.emirate).slice(0, 3);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    if (area) {
      setIsSaved(isInWatchlist('areas', area.id));
    }
  }, [id, area]);

  const handleToggleWatchlist = () => {
    if (area) {
      toggleWatchlist('areas', area.id);
      setIsSaved(!isSaved);
    }
  };

  if (!area) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
      <div className="p-4 rounded-3xl bg-[#3A3125]/5 mb-8">
         <Loader2 size={64} className="text-[#C6A75E] opacity-20" />
      </div>
      <h1 className="text-4xl font-serif font-black text-[#3A3125] mb-4 uppercase tracking-tighter">Area Intelligence Not Found</h1>
      <p className="text-[#5A4F40] mb-10 max-w-md font-medium text-sm leading-relaxed uppercase tracking-widest opacity-60">
        We couldn't locate the specified market node in our 2026 intelligence database.
      </p>
      <Link href="/areas" className="bg-[#3A3125] text-[#C6A75E] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:bg-[#2A231A] active:scale-95">
        Return to National Map
      </Link>
    </div>
  );

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

  const metricCharts = [
    { title: "Investment Yield", valueLabel: area.roi || "N/A", score: parseFloat((area.roi || "0").replace(/[^0-9.]/g, "")) * 10 || 65, explanation: "Yield strength based on active rental contracts and benchmarked capital velocity." },
    { title: "Appreciation Score", valueLabel: (area.scores?.appreciation > 8) ? "Elite Potential" : "High Growth", score: (area.scores?.appreciation || 7) * 11, explanation: "Projected capital growth floor based on infrastructure maturity and masterplan status." },
    { title: "Investor Demand", valueLabel: area.demandSignals?.rentalDemand || "Institutional", score: 85, explanation: "Active buy-side pressure from both domestic syndicates and international HNWIs." },
    { title: "Market Liquidity", valueLabel: area.demandSignals?.resaleLiquidity || "Liquid", score: (area.scores?.liquidity || 6) * 13, explanation: "Exit velocity in the secondary resale market and ease of off-plan flip arbitrage." },
  ];

  const areaFAQ = [
    {
      question: `Is ${area.name} a good investment in 2026?`,
      answer: area.aiVerdict?.summary || `${area.name} offers strong investment fundamentals with approximately ${area.roi || "competitive"} rental yield. ${area.description || ""}`
    },
    {
      question: `What is the average property price in ${area.name}?`,
      answer: `The average property price in ${area.name} is approximately ${area.avgPrice || "N/A"}. Prices range from ${area.unitEconomics?.studio?.price || "AED 500K"} for studios to ${area.unitEconomics?.villa?.price || "AED 10M+"} for villas.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] pb-24 fade-in">
      
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <Link href="/areas" className="group flex items-center gap-3 text-[#7A6E60] hover:text-[#C6A75E] font-bold text-xs uppercase tracking-widest transition-all">
            <div className="p-2 rounded-full border border-[rgba(198,167,94,0.2)] group-hover:bg-[#C6A75E] group-hover:text-white transition-all">
               <ArrowLeft size={14} />
            </div>
            Back to National Map
          </Link>
          
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button 
              onClick={handleToggleWatchlist} 
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 text-[10px] md:text-xs py-2.5 px-6 rounded-full font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
                isSaved 
                ? 'bg-[#C6A75E] text-white border border-[#C6A75E]' 
                : 'bg-white text-[#7A6E60] border border-[rgba(198,167,94,0.2)] hover:border-[#C6A75E] hover:text-[#C6A75E]'
              }`}
            >
              {isSaved ? <BookmarkCheck size={16} fill="currentColor" /> : <Bookmark size={16} />}
              {isSaved ? 'In Watchlist' : 'Watch Area'}
            </button>
            <button onClick={handleDownloadPDF} disabled={isGeneratingPdf} className="btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 text-[10px] md:text-xs py-2.5">
              {isGeneratingPdf ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />} 
              Market Brief
            </button>
            <button onClick={handleWhatsAppClick} className="btn-primary flex-1 sm:flex-none flex items-center justify-center gap-3 text-[10px] md:text-xs py-2.5">
              <MessageCircle size={16} /> Contact Advisor
            </button>
          </div>
        </div>

        <div ref={reportRef} className="relative w-full rounded-2xl md:rounded-[2.5rem] bg-transparent overflow-hidden mb-12">
          
          <div className="relative w-full min-h-[500px] md:h-[650px] flex items-end">
            <div className="absolute inset-0 w-full h-full">
               <img 
                 src={`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600&q=20`} 
                 alt={area.name}
                 className="w-full h-full object-cover grayscale-[20%] brightness-[70%]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-6 md:p-14 w-full md:w-2/3">
              <h1 className="text-5xl md:text-7xl font-serif text-[#3A3125] leading-tight mb-2 tracking-tight">
                {area.name}
              </h1>
              <div className="flex items-center gap-2 mb-6">
                 <span className="text-lg md:text-xl text-[#3A3125] font-light">{area.emirate},</span>
                 <span className="text-lg md:text-xl text-[#C6A75E] font-medium tracking-wide">UAE</span>
              </div>
              
              <p className="text-base md:text-lg text-[#5A4F40] font-light max-w-2xl leading-relaxed mb-8">
                {area.description}
              </p>

              <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-sm mb-6 max-w-xl">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="p-1 rounded-md bg-[#C6A75E]/10"><HardHat size={14} className="text-[#C6A75E]" /></span>
                    <h3 className="text-sm font-serif font-bold text-[#3A3125]">Major Developers</h3>
                 </div>
                 <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {(area.masterDeveloper || "Emaar Properties, Nakheel, DAMAC").split(',').map((dev, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#5A4F40] font-medium">
                         <div className="w-1 h-3 rounded-full bg-gradient-to-b from-[#C6A75E] to-[#E2C98E]"></div>
                         {dev.trim()}
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
          
          <div className="px-4 md:px-14 pb-20">
             <div className="mb-16 -mt-8 relative z-20">
                <div className="bg-[#3A3125] text-white rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/10 rounded-full blur-[80px] pointer-events-none" />
                   
                   <div className="flex items-center gap-6 w-full md:w-auto border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-10">
                      <div className="p-4 rounded-2xl bg-[#C6A75E]/20 text-[#C6A75E]"><Zap size={24} /></div>
                      <div>
                         <p className="text-[10px] font-black uppercase text-[#C6A75E] tracking-[0.2em] mb-1">Market Stance</p>
                         <h4 className="text-xl font-serif font-black text-white uppercase tracking-tighter">Aggressive Growth</h4>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                      <div className="group">
                         <p className="text-[9px] font-black uppercase text-white/40 tracking-widest mb-2 flex items-center gap-2 group-hover:text-[#C6A75E] transition-colors"><Activity size={12} /> Price Basis</p>
                         <p className="text-sm font-bold text-white leading-tight">Cyclical Undervalued</p>
                      </div>
                      <div className="group">
                         <p className="text-[9px] font-black uppercase text-white/40 tracking-widest mb-2 flex items-center gap-2 group-hover:text-[#C6A75E] transition-colors"><TrendingUp size={12} /> Top Alpha Driver</p>
                         <p className="text-sm font-bold text-white leading-tight">{area.highlights?.[0] || "Infrastructure"}</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mb-16">
               <MetricInsightCharts metrics={metricCharts} />
             </div>

             <AreaDetailSections area={area} allAreas={MASTER_DB} />

             <div className="mt-24 pt-16 border-t border-[rgba(198,167,94,0.1)] no-print">
                <h3 className="text-3xl font-serif font-bold text-[#3A3125] mb-12">
                  Comparative Markets ({area.emirate})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {similarAreas.map(neighbor => (
                      <Link href={`/area/${neighbor.id}`} key={neighbor.id} className="group relative block h-[380px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-[rgba(198,167,94,0.15)] bg-white">
                         <div className="absolute inset-0 bg-[#3A3125] opacity-5"></div>
                         <div className="absolute top-6 left-6 z-10">
                            <div className="bg-white/90 backdrop-blur-md border border-[rgba(198,167,94,0.3)] text-[#C6A75E] text-[10px] font-extrabold px-4 py-2 rounded-full uppercase tracking-widest">
                               {neighbor.category}
                            </div>
                         </div>
                         <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                            <h3 className="text-3xl font-serif font-bold text-[#3A3125] leading-tight mb-2">{neighbor.name}</h3>
                            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-5 flex justify-between items-center group-hover:bg-white transition-all">
                               <div>
                                  <p className="text-[10px] font-black text-[#5A4F40]/40 uppercase tracking-widest mb-1">Average ROI</p>
                                  <p className="text-[#C6A75E] font-black text-xl">{neighbor.roi}</p>
                               </div>
                               <div className="h-11 w-11 rounded-full bg-[#3A3125] text-white flex items-center justify-center">
                                  <ArrowLeft size={20} className="rotate-180" />
                               </div>
                            </div>
                         </div>
                      </Link>
                   ))}
                </div>
             </div>

             <div className="mt-24 pt-16 border-t border-[rgba(198,167,94,0.1)] no-print">
                <div className="max-w-4xl">
                   <h3 className="text-3xl font-serif font-bold text-[#3A3125] mb-12 flex items-center gap-4">
                      Intelligence FAQ
                   </h3>
                   <div className="space-y-6">
                      {areaFAQ.map((faq, idx) => (
                         <div key={idx} className="bg-white/40 backdrop-blur-md border border-white p-8 rounded-3xl">
                            <h4 className="text-lg font-serif font-bold text-[#3A3125] mb-4">{faq.question}</h4>
                            <p className="text-[#5A4F40] leading-relaxed font-light text-sm italic">{faq.answer}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPage;
