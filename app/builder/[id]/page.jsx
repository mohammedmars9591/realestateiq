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
import { BUILDERS } from '../../../src/data/buildersData';
import WhatsAppButton from '../../../src/components/WhatsAppButton';
import { isInWatchlist, toggleWatchlist } from '../../../src/utils/watchlist';

const BuilderDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const [isSaved, setIsSaved] = useState(false);
  
  const builder = BUILDERS.find(b => b.id === id);

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm">
             <h3 className="text-lg font-serif font-bold text-[#3A3125] mb-8 flex items-center gap-3">
               <div className="p-2 rounded-xl bg-[#C6A75E]/10"><BarChart size={18} className="text-[#C6A75E]" /></div> Performance Scores
             </h3>
             <div className="space-y-6">
               <ScoreBar label="Market Trust & Reputation" value={scores.trust} color="from-[#C6A75E] to-[#E2C98E]" />
               <ScoreBar label="Delivery Reliability" value={scores.deliveryReliability} color="from-emerald-500 to-emerald-400" />
               <ScoreBar label="Construction Quality" value={scores.constructionQuality} color="from-blue-500 to-blue-400" />
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white/40 backdrop-blur-md border border-white/60 p-7 rounded-3xl shadow-sm">
                <div className="text-[10px] font-bold text-[#C6A75E] uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                  <TrendingUp size={14}/> 5-Year Appreciation
                </div>
                <div className="text-3xl font-serif font-black text-[#3A3125] mb-1">
                  {perf.avgCapitalAppreciation5Y}
                </div>
             </div>
             <div className="bg-white/40 backdrop-blur-md border border-white/60 p-7 rounded-3xl shadow-sm">
                <div className="text-[10px] font-bold text-[#C6A75E] uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                  <Wallet size={14}/> Rental Yields
                </div>
                <div className="text-3xl font-serif font-black text-[#3A3125] mb-1">
                  {perf.avgRentalYield}
                </div>
             </div>
           </div>

           <div className="bg-[#3A3125] text-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                 <h3 className="text-xl font-serif font-bold mb-10 flex items-center gap-4 uppercase tracking-[0.2em]">
                    <Database className="text-[#C6A75E]" /> Intelligence <span className="text-[10px] bg-[#C6A75E] text-white px-3 py-1 rounded-full">2026 EXCLUSIVE</span>
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-[#C6A75E] font-bold uppercase tracking-widest text-[10px]">
                             <Leaf size={16} /> ESG PERFORMANCE
                          </div>
                          <div className="text-3xl font-serif font-black">{builder.esgRating || "N/A"}</div>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-[#C6A75E] font-bold uppercase tracking-widest text-[10px]">
                             <Activity size={16} /> AI CONFIDENCE
                          </div>
                          <div className="text-3xl font-serif font-black">{builder.aiConfidence || "N/A"}%</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm text-center">
             <h3 className="font-serif font-bold text-[#3A3125] mb-2 text-lg">Interested in {builder.name}?</h3>
             <WhatsAppButton text="Get Inventory List" message={`Hi, I'm interested in projects by ${builder.name}.`} />
           </div>

           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm">
             <h3 className="font-serif font-bold text-lg mb-6 text-[#3A3125]">Investor Verdict</h3>
             <div className="mb-8">
                <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                   <CheckCircle size={14}/> IDEAL FOR
                </div>
                <div className="flex flex-wrap gap-2">
                   {builder.bestFor?.map(item => (
                     <span key={item} className="px-3 py-1.5 bg-emerald-50/50 border border-emerald-100 rounded-lg text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                       {item}
                     </span>
                   ))}
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
