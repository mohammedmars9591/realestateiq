import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Building2, CheckCircle, TrendingUp, AlertTriangle, 
  Crown, ShieldCheck, Clock, Hammer, Wallet, BarChart 
} from 'lucide-react';
import { BUILDERS } from '../data/buildersData';
import SEO from '../components/SEO';

const BuilderDetailsPage = () => {
  const { builderId } = useParams();
  const builder = BUILDERS.find(b => b.id === builderId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [builderId]);

  if (!builder) return <div className="text-center p-20">Builder Not Found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title={`${builder.name} - Developer Review 2026`} 
        description={`${builder.name} Review. Trust Score: ${builder.overallDeveloperScore}/10. Delivery Track Record: ${builder.deliveryTrackRecord.onTime} On Time.`}
      />

      {/* Breadcrumb */}
      <Link to="/builders" className="inline-flex items-center gap-2 text-slate-500 hover:text-black mb-6 mt-8 font-bold text-sm">
        <ArrowLeft size={16} /> Back to Developers
      </Link>

      {/* HEADER HERO */}
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
            <p className="text-xl opacity-90 max-w-2xl">{builder.description}</p>
         </div>
         {/* Decorative Circle */}
         <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN - STATS & SCORES */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* 1. THE SCORECARD */}
           <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
               <BarChart className="text-blue-600" /> Performance Scores
             </h3>
             <div className="space-y-5">
               <ScoreBar label="Market Trust & Reputation" value={builder.scores.trust} color="bg-blue-600" />
               <ScoreBar label="Delivery Reliability (On Time)" value={builder.scores.deliveryReliability} color="bg-green-500" />
               <ScoreBar label="Construction Quality" value={builder.scores.constructionQuality} color="bg-indigo-500" />
               <ScoreBar label="Resale Value Retention" value={builder.scores.resaleValue} color="bg-amber-500" />
               <ScoreBar label="Rental Demand" value={builder.scores.rentalDemand} color="bg-purple-500" />
             </div>
           </div>

           {/* 2. MARKET DATA */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <div className="text-sm font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                  <TrendingUp size={16}/> 5-Year Growth
                </div>
                <div className="text-4xl font-extrabold text-green-600 mb-1">
                  {builder.marketPerformance.avgCapitalAppreciation5Y}
                </div>
                <div className="text-xs text-slate-400">Avg. Capital Appreciation</div>
             </div>
             
             <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <div className="text-sm font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                  <Wallet size={16}/> Avg Rental Yield
                </div>
                <div className="text-4xl font-extrabold text-blue-600 mb-1">
                  {builder.marketPerformance.avgRentalYield}
                </div>
                <div className="text-xs text-slate-400">ROI for Investors</div>
             </div>
           </div>

           {/* 3. DELIVERY TRACK RECORD */}
           <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Clock className="text-blue-600" /> Delivery Track Record
              </h3>
              <div className="flex gap-4 mb-6">
                 <div className="flex-1 bg-green-50 p-4 rounded-xl text-center border border-green-100">
                    <div className="text-2xl font-bold text-green-700">{builder.deliveryTrackRecord.onTime}</div>
                    <div className="text-xs font-bold text-green-600 uppercase">On Time</div>
                 </div>
                 <div className="flex-1 bg-yellow-50 p-4 rounded-xl text-center border border-yellow-100">
                    <div className="text-2xl font-bold text-yellow-700">{builder.deliveryTrackRecord.delayed}</div>
                    <div className="text-xs font-bold text-yellow-600 uppercase">Delayed</div>
                 </div>
                 <div className="flex-1 bg-red-50 p-4 rounded-xl text-center border border-red-100">
                    <div className="text-2xl font-bold text-red-700">{builder.deliveryTrackRecord.cancelled}</div>
                    <div className="text-xs font-bold text-red-600 uppercase">Cancelled</div>
                 </div>
              </div>
              <p className="text-sm text-slate-500 italic">
                *Data based on registered project completions over the last 10 years.
              </p>
           </div>
        </div>

        {/* RIGHT COLUMN - PROFILE & USP */}
        <div className="space-y-8">
           
           {/* PROFILE CARD */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
             <h3 className="font-bold text-lg mb-4">Developer Profile</h3>
             <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100">
                   <span className="text-slate-500">Established</span>
                   <span className="font-bold">{builder.established}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                   <span className="text-slate-500">Origin</span>
                   <span className="font-bold">{builder.origin}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                   <span className="text-slate-500">Total Projects</span>
                   <span className="font-bold">{builder.portfolio.totalProjects}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                   <span className="text-slate-500">Payment Plans</span>
                   <span className="font-bold text-green-600">{builder.paymentFlexibility.commonPlans.join(", ")}</span>
                </div>
             </div>
           </div>

           {/* BEST FOR / NOT FOR */}
           <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">Investor Verdict</h3>
              
              <div className="mb-4">
                <div className="text-xs font-bold text-green-600 uppercase mb-2 flex items-center gap-1">
                   <CheckCircle size={14}/> Best For
                </div>
                <div className="flex flex-wrap gap-2">
                   {builder.bestFor.map(item => (
                     <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
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
                   {builder.notIdealFor.map(item => (
                     <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
                       {item}
                     </span>
                   ))}
                </div>
              </div>
           </div>

           {/* USP BOX */}
           <div className="bg-slate-900 text-white p-6 rounded-2xl">
              <div className="text-xs font-bold text-yellow-400 uppercase mb-2">Signature Quality</div>
              <p className="font-medium leading-relaxed">"{builder.usp}"</p>
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
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value * 10}%` }}></div>
    </div>
  </div>
);

export default BuilderDetailsPage;