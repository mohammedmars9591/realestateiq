"use client";

export const dynamic = 'force-dynamic';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, TrendingUp, AlertTriangle, 
  Crown, Clock, Wallet, BarChart, ShieldCheck, Building2, MapPin, CheckCircle,
  Leaf, Activity, Globe, Zap, Database, BrainCircuit,
  Bookmark, BookmarkCheck
} from 'lucide-react';
import { BUILDERS_DATA as BUILDERS } from '../../../src/data/developerIntelligence';
import WhatsAppButton from '../../../src/components/WhatsAppButton';
import { isInWatchlist, toggleWatchlist } from '../../../src/utils/watchlist';

const BuilderDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const [isSaved, setIsSaved] = useState(false);
  
  const builder = BUILDERS.find(b => String(b.id).toLowerCase() === String(id).toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
    if (builder) {
      setIsSaved(isInWatchlist('builders', builder.id));
    }
  }, [id, builder]);

  const handleToggleWatchlist = () => {
    if (builder) {
      toggleWatchlist('builders', builder.id);
      setIsSaved(!isSaved);
    }
  };

  if (!builder) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#FDFBF7]">
        <div className="p-4 rounded-3xl bg-[#3A3125]/5 mb-8">
           <AlertTriangle size={64} className="text-[#C6A75E] opacity-20" />
        </div>
        <h2 className="text-4xl font-serif font-black text-[#3A3125] mb-4 uppercase tracking-tighter">Developer Not Found</h2>
        <p className="text-[#5A4F40] mb-10 max-w-md font-medium text-sm leading-relaxed uppercase tracking-widest opacity-60">
          We couldn't find the developer with intelligence node: <br/>
          <span className="text-[#3A3125] opacity-100 font-black">{id}</span>
        </p>
        <Link href="/builders" className="bg-[#3A3125] text-[#C6A75E] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:bg-[#2A231A] active:scale-95">
          Return to Intelligence Hub
        </Link>
      </div>
    );
  }

  const scores = builder.scores || {};
  const perf = builder.marketPerformance || {};
  const trackRecord = builder.deliveryTrackRecord || {};
  const risk = builder.buyerRiskProfile || { offPlanRisk: "N/A", handoverRisk: "N/A" };
  const payment = builder.paymentFlexibility || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] pb-24 fade-in">
      
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <Link href="/builders" className="group flex items-center gap-3 text-[#7A6E60] hover:text-[#C6A75E] font-bold text-xs uppercase tracking-widest transition-all">
            <div className="p-2 rounded-full border border-[rgba(198,167,94,0.2)] group-hover:bg-[#C6A75E] group-hover:text-white transition-all">
               <ArrowLeft size={14} />
            </div>
            Back to Developers
          </Link>
          
          <button 
            onClick={handleToggleWatchlist} 
            className={`flex items-center gap-2 text-[10px] md:text-xs py-2.5 px-6 rounded-full font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
              isSaved 
              ? 'bg-[#C6A75E] text-white border border-[#C6A75E]' 
              : 'bg-white text-[#7A6E60] border border-[rgba(198,167,94,0.2)] hover:border-[#C6A75E] hover:text-[#C6A75E]'
            }`}
          >
            {isSaved ? <BookmarkCheck size={16} fill="currentColor" /> : <Bookmark size={16} />}
            {isSaved ? 'In Watchlist' : 'Watch Developer'}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* --- HERO HEADER --- */}
        <div className="relative w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden mb-12 min-h-[500px] md:h-[600px] flex items-end">
          <div className="absolute inset-0 w-full h-full">
             <img 
               src={`https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1600`} 
               alt={builder.name}
               className="w-full h-full object-cover grayscale-[20%]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/90 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 p-6 md:p-14 w-full md:w-2/3">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-white/40 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#3A3125]">
                Institutional Intelligence Node
              </span>
              <div className="flex items-center gap-2 bg-[#C6A75E] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                <Crown size={12} /> Market Grade: AAA
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#3A3125] leading-tight mb-4 tracking-tight">
              {builder.name}
            </h1>
            <p className="text-base md:text-lg text-[#5A4F40] font-light max-w-2xl leading-relaxed mb-6">
              {builder.description}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-[#C6A75E]">
               <span className="flex items-center gap-2 px-3 py-1.5 bg-white/40 backdrop-blur-sm border border-white/60 rounded-lg"><Clock size={14}/> Est. {builder.established}</span>
               <span className="flex items-center gap-2 px-3 py-1.5 bg-white/40 backdrop-blur-sm border border-white/60 rounded-lg"><MapPin size={14}/> {builder.origin}</span>
               <span className="flex items-center gap-2 px-3 py-1.5 bg-white/40 backdrop-blur-sm border border-white/60 rounded-lg"><Building2 size={14}/> {builder.portfolio?.totalProjects} Projects</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-2 space-y-12">
           {/* --- 1. SPECIALTY & DNA --- */}
           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[3rem] p-10 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Crown size={120} />
             </div>
             <h3 className="text-xl font-serif font-black text-[#3A3125] mb-8 flex items-center gap-4 uppercase tracking-[0.2em]">
               <div className="p-3 rounded-2xl bg-[#3A3125] text-[#C6A75E]"><BarChart size={20} /></div> 
               Development DNA
             </h3>
             <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                      <p className="text-[10px] font-black text-[#A69785] uppercase tracking-widest mb-4">Core Specialty</p>
                      <p className="text-2xl font-serif font-bold text-[#3A3125] leading-tight">{builder.usp}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-[#A69785] uppercase tracking-widest mb-4">Market Tier</p>
                      <p className="text-2xl font-serif font-bold text-[#C6A75E]">{builder.tier}</p>
                   </div>
                </div>
                <div className="pt-8 border-t border-[rgba(198,167,94,0.1)]">
                   <p className="text-[10px] font-black text-[#A69785] uppercase tracking-widest mb-6">Track Record Audit</p>
                   <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-[#3A3125]/5 rounded-2xl text-center border border-white/60">
                         <p className="text-[10px] font-bold text-[#7A6E60] mb-1">On Time</p>
                         <p className="text-xl font-black text-emerald-600">{trackRecord.onTime}</p>
                      </div>
                      <div className="p-4 bg-[#3A3125]/5 rounded-2xl text-center border border-white/60">
                         <p className="text-[10px] font-bold text-[#7A6E60] mb-1">Delayed</p>
                         <p className="text-xl font-black text-amber-600">{trackRecord.delayed}</p>
                      </div>
                      <div className="p-4 bg-[#3A3125]/5 rounded-2xl text-center border border-white/60">
                         <p className="text-[10px] font-bold text-[#7A6E60] mb-1">Cancelled</p>
                         <p className="text-xl font-black text-[#3A3125]">{trackRecord.cancelled}</p>
                      </div>
                   </div>
                </div>
             </div>
           </div>

           {/* --- 2. RISK & PERFORMANCE MATRIX --- */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#3A3125] text-white rounded-[2.5rem] p-10 shadow-2xl relative group overflow-hidden">
                 <div className="absolute bottom-0 right-0 p-6 text-[#C6A75E]/10 group-hover:scale-110 transition-transform duration-700">
                    <ShieldCheck size={140} />
                 </div>
                 <p className="text-[9px] font-black uppercase text-[#C6A75E] tracking-[0.3em] mb-4">Risk Profile Audit</p>
                 <h4 className="text-2xl font-serif font-bold mb-8 italic">Safety Assessment</h4>
                 <div className="space-y-6 relative z-10">
                    <div>
                       <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Off-Plan Safety</p>
                       <p className="text-xl font-black text-[#C6A75E] tracking-tighter">{risk.offPlanRisk}</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Handover Compliance</p>
                       <p className="text-xl font-black text-white tracking-tighter">{risk.handoverRisk}</p>
                    </div>
                    <div className="pt-4">
                       <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Funding Stability</p>
                       <p className="text-xs font-bold leading-relaxed">{builder.fundingStability || "Institutional Growth Capital"}</p>
                    </div>
                 </div>
              </div>

              <div className="bg-white border border-[#C6A75E]/20 rounded-[2.5rem] p-10 shadow-xl overflow-hidden">
                 <p className="text-[9px] font-black uppercase text-[#C6A75E] tracking-[0.3em] mb-4">Capital Yield View</p>
                 <h4 className="text-2xl font-serif font-bold text-[#3A3125] mb-8">Intelligence Delta</h4>
                 <div className="space-y-8">
                    <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                       <div>
                          <p className="text-[10px] font-bold text-[#A69785] uppercase tracking-widest mb-1">5Y Appreciation</p>
                          <p className="text-3xl font-serif font-black text-[#3A3125]">{perf.avgCapitalAppreciation5Y}</p>
                       </div>
                       <TrendingUp className="text-emerald-500 mb-1" />
                    </div>
                    <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                       <div>
                          <p className="text-[10px] font-bold text-[#A69785] uppercase tracking-widest mb-1">Avg Rental Yield</p>
                          <p className="text-3xl font-serif font-black text-[#C6A75E]">{perf.avgRentalYield}</p>
                       </div>
                       <BarChart className="text-[#C6A75E] mb-1" />
                    </div>
                 </div>
              </div>
           </div>

           {/* --- 3. EMPIRE FOOTPRINT --- */}
           <div className="bg-white border border-[rgba(198,167,94,0.1)] rounded-[3rem] p-10 shadow-sm">
             <h3 className="text-xl font-serif font-black text-[#3A3125] mb-10 flex items-center gap-4 uppercase tracking-[0.2em]">
               <div className="p-3 rounded-2xl bg-[#C6A75E]/10 text-[#C6A75E]"><MapPin size={20} /></div> 
               Empire Footprint
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                   <p className="text-[10px] font-black text-[#A69785] uppercase tracking-widest mb-4">Signature Project</p>
                   <div className="p-6 bg-gradient-to-br from-[#3A3125] to-[#4A4135] text-white rounded-3xl shadow-xl">
                      <p className="text-2xl font-serif font-black text-[#C6A75E] mb-2">{builder.signatureProject}</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Iconic Market Marker</p>
                   </div>
                </div>
                <div>
                   <p className="text-[10px] font-black text-[#A69785] uppercase tracking-widest mb-4">Flagship Communities</p>
                   <div className="flex flex-wrap gap-2">
                      {builder.flagshipCommunities?.map(comm => (
                         <span key={comm} className="px-4 py-2 bg-[#FDFBF7] border border-[rgba(198,167,94,0.2)] rounded-xl text-[10px] font-bold text-[#3A3125] uppercase tracking-widest">
                            {comm}
                         </span>
                      ))}
                   </div>
                </div>
             </div>
             <div className="mt-10 p-6 bg-[#FDFBF7] rounded-3xl border border-[#C6A75E]/10">
                <p className="text-[10px] font-black text-[#C6A75E] uppercase tracking-widest mb-2 italic">Institutional Note</p>
                <p className="text-sm italic font-serif leading-relaxed text-[#5A4F40]">"{builder.records}"</p>
             </div>
           </div>
        </div>

        <div className="space-y-12">
           <div className="bg-[#FDFBF7] border border-[#C6A75E]/30 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
              <h3 className="text-[10px] font-black mb-8 uppercase tracking-[0.2em] text-[#3A3125] bg-[#C6A75E] text-white inline-block px-4 py-1.5 rounded-full">Investment Verdict</h3>
              <div className="space-y-10">
                 <div>
                    <p className="text-[10px] font-bold text-[#C6A75E] uppercase tracking-widest mb-4 flex items-center gap-2 underline underline-offset-4 decoration-wavy">
                       <ShieldCheck size={14} /> Strategic Fit
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {builder.idealFor?.map(item => (
                         <span key={item} className="px-4 py-2 bg-[#3A3125] text-white rounded-xl text-[9px] font-black uppercase tracking-widest">
                           {item}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div className="pt-8 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                       <AlertTriangle size={14} /> Risk Exclusion
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {builder.notIdealFor?.map(item => (
                         <span key={item} className="px-4 py-2 bg-rose-50 border border-rose-100 text-rose-800 rounded-xl text-[9px] font-black uppercase tracking-widest">
                           {item}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div className="pt-8 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-[#A69785] shadow-sm uppercase tracking-widest mb-4">Financial Terms</p>
                    <div className="flex flex-wrap gap-2">
                       {payment.commonPlans?.map(plan => (
                          <span key={plan} className="px-4 py-2 bg-white border border-[#C6A75E]/20 rounded-xl text-[10px] font-black text-[#C6A75E] uppercase tracking-widest">
                             {plan}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[3rem] p-10 shadow-sm text-center">
             <div className="w-20 h-20 bg-[#3A3125] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C6A75E] shadow-xl">
               <Database size={32} />
             </div>
             <p className="text-[10px] font-black text-[#A69785] uppercase tracking-widest mb-2">Portfolio Access</p>
             <h3 className="font-serif font-black text-[#3A3125] mb-8 text-xl leading-snug tracking-tighter">Secure {builder.name} Private Inventory</h3>
             <WhatsAppButton text="Request Full Dossier" message={`Hi RealEstateIQ, please send the latest investor portfolio for ${builder.name}.`} />
           </div>

           <div className="bg-[#3A3125] text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[#C6A75E]/5"><BrainCircuit size={100} /></div>
              <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-6">
                 <div className="p-3 rounded-2xl bg-[#C6A75E] text-white"><Activity size={20} /></div>
                 <p className="text-[10px] font-black uppercase text-[#C6A75E] tracking-[0.3em]">AI Delta 2026</p>
              </div>
              <div className="space-y-10">
                 <div>
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">ESG Alpha Rating</span>
                       <span className="text-3xl font-serif font-black text-[#C6A75E]">{builder.esgRating || "8.5"}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                       <div className="h-full bg-[#C6A75E] transition-all duration-1000" style={{ width: `${(builder.esgRating || 8.5) * 10}%` }}></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Confidence Delta</span>
                       <span className="text-3xl font-serif font-black text-emerald-400">{builder.aiConfidence || "94"}%</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
    </div>
    </div>
  );
};

const ScoreBar = ({ label, value, color }) => (
  <div className="group">
    <div className="flex justify-between text-[10px] font-bold text-[#5A4F40] uppercase tracking-widest mb-2 transition-colors group-hover:text-[#C6A75E]">
      <span>{label}</span>
      <span className="font-black text-[#3A3125]">{value}/10</span>
    </div>
    <div className="w-full bg-[#3A3125]/5 h-2 rounded-full overflow-hidden p-[1px]">
      <div className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg transition-all duration-1000`} style={{ width: `${(value / 10) * 100}%` }}></div>
    </div>
  </div>
);

export default BuilderDetailsPage;
