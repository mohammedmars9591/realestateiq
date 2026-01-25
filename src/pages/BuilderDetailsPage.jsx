import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, TrendingUp, AlertTriangle, 
  Crown, Clock, Wallet, BarChart, ShieldCheck, Building2, MapPin, CheckCircle
} from 'lucide-react';
import { BUILDERS } from '../data/buildersData';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';

const BuilderDetailsPage = () => {
  // 🟢 FIXED: Changed 'builderId' to 'id' to match App.jsx
  const { id } = useParams(); 
  
  // 1. Find the builder using the correct ID
  const builder = BUILDERS.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 2. Safety Check
  if (!builder) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Developer Not Found</h2>
        <p className="text-slate-500 mb-8">We couldn't find the developer with ID: <span className="font-mono text-red-500 bg-red-50 px-2 py-1 rounded">{id}</span></p>
        <Link to="/builders" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
          View All Developers
        </Link>
      </div>
    );
  }

  // 3. Destructure Data for easy access (with fallbacks)
  const scores = builder.scores || {};
  const perf = builder.marketPerformance || {};
  const trackRecord = builder.deliveryTrackRecord || {};
  const risk = builder.buyerRiskProfile || { offPlanRisk: "N/A", handoverRisk: "N/A" };
  const payment = builder.paymentFlexibility || {};

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen pt-8">
      <SEO 
        title={`${builder.name} - Review & Analytics 2026`} 
        description={`Investment analysis of ${builder.name}. Trust Score: ${scores.trust}/10. Risk Profile: ${risk.offPlanRisk}.`}
      />

      {/* BREADCRUMB */}
      <Link to="/builders" className="inline-flex items-center gap-2 text-slate-500 hover:text-black mb-6 font-bold text-sm transition-colors">
        <ArrowLeft size={16} /> Back to Developers
      </Link>

      {/* --- HERO SECTION --- */}
      <div className={`rounded-3xl p-8 md:p-12 text-white mb-10 shadow-xl relative overflow-hidden ${builder.imageColor || 'bg-slate-900'}`}>
         <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
               <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                 {builder.tier}
               </span>
               <div className="flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                 <Crown size={14} /> Overall Score: {builder.overallDeveloperScore}/10
               </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{builder.name}</h1>
            <p className="text-xl opacity-90 max-w-3xl leading-relaxed">{builder.description}</p>
            
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium opacity-80">
               <span className="flex items-center gap-2"><Clock size={16}/> Est. {builder.established}</span>
               <span className="flex items-center gap-2"><MapPin size={16}/> {builder.origin}</span>
               <span className="flex items-center gap-2"><Building2 size={16}/> {builder.portfolio?.totalProjects} Projects</span>
            </div>
         </div>
         {/* Decorative Circle */}
         <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* === LEFT COLUMN: ANALYTICS === */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* 1. SCORECARD */}
           <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
               <BarChart className="text-blue-600" /> Performance Scores
             </h3>
             <div className="space-y-5">
               <ScoreBar label="Market Trust & Reputation" value={scores.trust} color="bg-blue-600" />
               <ScoreBar label="Delivery Reliability" value={scores.deliveryReliability} color="bg-green-500" />
               <ScoreBar label="Construction Quality" value={scores.constructionQuality} color="bg-indigo-500" />
               <ScoreBar label="Resale Value Retention" value={scores.resaleValue} color="bg-amber-500" />
               <ScoreBar label="Rental Demand" value={scores.rentalDemand} color="bg-purple-500" />
             </div>
           </div>

           {/* 2. MARKET DATA GRID */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                  <TrendingUp size={14}/> 5-Year Appreciation
                </div>
                <div className="text-3xl font-extrabold text-green-600 mb-1">
                  {perf.avgCapitalAppreciation5Y}
                </div>
                <div className="text-xs text-slate-500">Historical Average</div>
             </div>
             
             <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                  <Wallet size={14}/> Rental Yields
                </div>
                <div className="text-3xl font-extrabold text-blue-600 mb-1">
                  {perf.avgRentalYield}
                </div>
                <div className="text-xs text-slate-500">Avg. Net ROI</div>
             </div>
           </div>

           {/* 3. DELIVERY & RISK */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Delivery Stats */}
             <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <Clock size={16} className="text-blue-500"/> Delivery Record
                </h4>
                <div className="space-y-3">
                   <div className="flex justify-between text-sm">
                      <span className="text-slate-500">On Time</span>
                      <span className="font-bold text-green-600">{trackRecord.onTime}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Delayed</span>
                      <span className="font-bold text-yellow-600">{trackRecord.delayed}</span>
                   </div>
                   <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-green-500 h-full" style={{ width: trackRecord.onTime }}></div>
                   </div>
                </div>
             </div>

             {/* Risk Profile */}
             <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                   <ShieldCheck size={16} className="text-emerald-400"/> Risk Profile
                </h4>
                <div className="space-y-4 text-sm">
                   <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="opacity-70">Off-Plan Risk</span>
                      <span className={`font-bold ${risk.offPlanRisk === 'Zero' || risk.offPlanRisk === 'Very Low' ? 'text-emerald-400' : 'text-yellow-400'}`}>
                        {risk.offPlanRisk}
                      </span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="opacity-70">Handover Risk</span>
                      <span className="font-bold text-white">{risk.handoverRisk}</span>
                   </div>
                   <div className="flex justify-between pt-1">
                      <span className="opacity-70">Resale Liquidity</span>
                      <span className="font-bold text-blue-300">{perf.resaleLiquidity}</span>
                   </div>
                </div>
             </div>
           </div>

        </div>

        {/* === RIGHT COLUMN: PROFILE & INSIGHTS === */}
        <div className="space-y-8">
           
           {/* WHATSAPP CTA */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
             <h3 className="font-bold text-slate-900 mb-2">Interested in {builder.name}?</h3>
             <p className="text-xs text-slate-500 mb-4">Get the latest brochure and inventory list.</p>
             <WhatsAppButton text="Get Inventory List" message={`Hi, I'm interested in projects by ${builder.name}.`} />
           </div>

           {/* VERDICT */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
             <h3 className="font-bold text-lg mb-4 text-slate-900">Investor Verdict</h3>
             
             <div className="mb-6">
               <div className="text-xs font-bold text-green-600 uppercase mb-2 flex items-center gap-1">
                  <CheckCircle size={14}/> Best For
               </div>
               <div className="flex flex-wrap gap-2">
                  {builder.bestFor?.map(item => (
                    <span key={item} className="px-3 py-1 bg-green-50 border border-green-100 rounded-lg text-xs font-bold text-green-800">
                      {item}
                    </span>
                  ))}
               </div>
             </div>

             <div>
               <div className="text-xs font-bold text-red-500 uppercase mb-2 flex items-center gap-1">
                  <AlertTriangle size={14}/> Not Ideal For
               </div>
               <div className="flex flex-wrap gap-2">
                  {builder.notIdealFor?.map(item => (
                    <span key={item} className="px-3 py-1 bg-red-50 border border-red-100 rounded-lg text-xs font-bold text-red-800">
                      {item}
                    </span>
                  ))}
               </div>
             </div>
           </div>

           {/* INFO SPECS */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
             <div>
                 <span className="text-xs font-bold text-slate-400 uppercase">Signature Project</span>
                 <div className="font-bold text-slate-900">{builder.signatureProject}</div>
             </div>
             <div>
                 <span className="text-xs font-bold text-slate-400 uppercase">Key Communities</span>
                 <div className="font-medium text-slate-700 text-sm mt-1">
                    {builder.flagshipCommunities?.join(", ")}
                 </div>
             </div>
             <div>
                 <span className="text-xs font-bold text-slate-400 uppercase">Payment Plans</span>
                 <div className="font-medium text-blue-600 text-sm mt-1">
                    {payment.commonPlans?.join(" | ")}
                 </div>
             </div>
           </div>

           {/* USP */}
           <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl">
             <div className="text-xs font-bold text-yellow-600 uppercase mb-2">The "X" Factor</div>
             <p className="font-bold text-slate-800 leading-relaxed italic">"{builder.usp}"</p>
           </div>

        </div>

      </div>
    </div>
  );
};

// Helper Component for Score Bars
const ScoreBar = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
      <span>{label}</span>
      <span>{value}/10</span>
    </div>
    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${(value / 10) * 100}%` }}></div>
    </div>
  </div>
);

export default BuilderDetailsPage;