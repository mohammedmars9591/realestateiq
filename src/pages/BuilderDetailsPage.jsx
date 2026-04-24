import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, TrendingUp, AlertTriangle, 
  Crown, Clock, Wallet, BarChart, ShieldCheck, Building2, MapPin, CheckCircle,
  Leaf, Activity, Globe, Zap, Database, BrainCircuit
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
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#FDFBF7]">
        <div className="p-4 rounded-3xl bg-[#3A3125]/5 mb-8">
           <AlertTriangle size={64} className="text-[#C6A75E] opacity-20" />
        </div>
        <h2 className="text-4xl font-serif font-black text-[#3A3125] mb-4 uppercase tracking-tighter">Developer Not Found</h2>
        <p className="text-[#5A4F40] mb-10 max-w-md font-medium text-sm leading-relaxed uppercase tracking-widest opacity-60">
          We couldn't find the developer with intelligence node: <br/>
          <span className="text-[#3A3125] opacity-100 font-black">{id}</span>
        </p>
        <Link to="/builders" className="bg-[#3A3125] text-[#C6A75E] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:bg-[#2A231A] active:scale-95">
          Return to Intelligence Hub
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

  // --- AEO/GEO: BUILD SCHEMAS ---
  const builderOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": builder.name,
    "description": builder.description,
    "url": `https://www.realestateiq.ae/builder/${builder.id}`,
    "foundingDate": String(builder.established),
    "areaServed": builder.flagshipCommunities?.join(", ") || "Dubai, UAE",
    "knowsAbout": ["Real Estate Development", "Off-Plan Properties", "UAE Construction"],
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Trust Score", "value": `${scores.trust}/10` },
      { "@type": "PropertyValue", "name": "Delivery Reliability", "value": `${scores.deliveryReliability}/10` },
      { "@type": "PropertyValue", "name": "ESG Rating", "value": `${builder.esgRating || "N/A"}/10` },
      { "@type": "PropertyValue", "name": "On-Time Delivery", "value": trackRecord.onTime || "N/A" },
      { "@type": "PropertyValue", "name": "Funding Stability", "value": builder.fundingStability || "N/A" }
    ]
  };

  const builderFAQ = [
    {
      question: `Is ${builder.name} a reliable developer in Dubai?`,
      answer: `${builder.name} has a Trust Score of ${scores.trust}/10 and a Construction Quality score of ${scores.constructionQuality}/10 on RealEstateIQ. Their delivery track record shows ${trackRecord.onTime || "strong"} on-time project completion. They are best for ${builder.bestFor?.join(", ") || "property investors"}.`
    },
    {
      question: `What are the best projects by ${builder.name}?`,
      answer: `${builder.name}'s signature project is ${builder.signatureProject || "not yet specified"}. Their flagship communities include ${builder.flagshipCommunities?.join(", ") || "Dubai"}. They have a total portfolio of ${builder.portfolio?.totalProjects || "multiple"} projects.`
    },
    {
      question: `What payment plans does ${builder.name} offer?`,
      answer: `${builder.name} offers payment plans including ${payment.commonPlans?.join(" and ") || "standard options"} with a flexibility score of ${payment.score || "N/A"}/10. Post-handover payment: ${payment.postHandoverAvailable ? "Available" : "Not Available"}.`
    },
    {
      question: `What is the rental yield for ${builder.name} properties?`,
      answer: `Properties by ${builder.name} deliver an average rental yield of ${perf.avgRentalYield || "N/A"} with a market liquidity of ${perf.resaleLiquidity || "N/A"}. 5-year capital appreciation averages ${perf.avgCapitalAppreciation5Y || "N/A"}.`
    }
  ];

  const builderBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.realestateiq.ae" },
      { "@type": "ListItem", "position": 2, "name": "Developers", "item": "https://www.realestateiq.ae/builders" },
      { "@type": "ListItem", "position": 3, "name": builder.name, "item": `https://www.realestateiq.ae/builder/${builder.id}` }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] pb-24 fade-in">
      <SEO 
        title={`${builder.name} Review 2026 — Trust Score, Projects & ROI Analysis`}
        description={`Institutional investment analysis of ${builder.name}. Trust Score: ${scores.trust}/10. Delivery: ${trackRecord.onTime || "N/A"} on time. ESG: ${builder.esgRating || "N/A"}/10. AI Confidence: ${builder.aiConfidence || "N/A"}%. Best for: ${builder.bestFor?.join(", ") || "investors"}.`}
        url={`/builder/${builder.id}`}
        schema={builderOrgSchema}
        faqSchema={builderFAQ}
        articleSchema={{
          headline: `${builder.name} — 2026 Investment Intelligence Report`,
          description: `Full institutional-grade analysis of ${builder.name}: Trust Scores, ESG Ratings, AI Delivery Confidence, payment plans, and ROI forecasts.`,
          datePublished: "2026-01-01",
          dateModified: new Date().toISOString().split('T')[0]
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(builderBreadcrumb) }} />

      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <Link to="/builders" className="group flex items-center gap-3 text-[#7A6E60] hover:text-[#C6A75E] font-bold text-xs uppercase tracking-widest transition-all mb-10">
          <div className="p-2 rounded-full border border-[rgba(198,167,94,0.2)] group-hover:bg-[#C6A75E] group-hover:text-white transition-all">
             <ArrowLeft size={14} />
          </div>
          Back to Developers
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* --- HERO HEADER --- */}
        <div className="relative w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden mb-12 min-h-[500px] md:h-[600px] flex items-end">
          <div className="absolute inset-0 w-full h-full">
             <img 
               src={`https://source.unsplash.com/1600x900/?dubai,${builder.name.replace(/\s+/g, ',')},architecture`} 
               alt={builder.name}
               className="w-full h-full object-cover"
               onError={(e) => {
                  e.target.src = 'https://source.unsplash.com/1600x900/?dubai,skyscraper,architecture';
               }}
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
        
        {/* === LEFT COLUMN: ANALYTICS === */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* 1. SCORECARD */}
           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm">
             <h3 className="text-lg font-serif font-bold text-[#3A3125] mb-8 flex items-center gap-3">
               <div className="p-2 rounded-xl bg-[#C6A75E]/10"><BarChart size={18} className="text-[#C6A75E]" /></div> Performance Scores
             </h3>
             <div className="space-y-6">
               <ScoreBar label="Market Trust & Reputation" value={scores.trust} color="from-[#C6A75E] to-[#E2C98E]" />
               <ScoreBar label="Delivery Reliability" value={scores.deliveryReliability} color="from-emerald-500 to-emerald-400" />
               <ScoreBar label="Construction Quality" value={scores.constructionQuality} color="from-blue-500 to-blue-400" />
               <ScoreBar label="Resale Value Retention" value={scores.resaleValue} color="from-amber-600 to-amber-500" />
               <ScoreBar label="Rental Demand" value={scores.rentalDemand} color="from-purple-600 to-purple-500" />
             </div>
           </div>

           {/* 2. MARKET DATA GRID */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white/40 backdrop-blur-md border border-white/60 p-7 rounded-3xl shadow-sm">
                <div className="text-[10px] font-bold text-[#C6A75E] uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                  <TrendingUp size={14}/> 5-Year Appreciation
                </div>
                <div className="text-3xl font-serif font-black text-[#3A3125] mb-1">
                  {perf.avgCapitalAppreciation5Y}
                </div>
                <div className="text-[10px] uppercase font-bold text-[#5A4F40]/60">Historical Average</div>
             </div>
             
             <div className="bg-white/40 backdrop-blur-md border border-white/60 p-7 rounded-3xl shadow-sm">
                <div className="text-[10px] font-bold text-[#C6A75E] uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                  <Wallet size={14}/> Rental Yields
                </div>
                <div className="text-3xl font-serif font-black text-[#3A3125] mb-1">
                  {perf.avgRentalYield}
                </div>
                <div className="text-[10px] uppercase font-bold text-[#5A4F40]/60">Avg. Net ROI</div>
             </div>
           </div>

           {/* 3. DELIVERY & RISK */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Delivery Stats */}
             <div className="bg-white/40 backdrop-blur-md border border-white/60 p-7 rounded-3xl shadow-sm">
                <h4 className="font-serif font-bold text-[#3A3125] mb-6 flex items-center gap-3 text-sm uppercase tracking-widest">
                   <Clock size={16} className="text-[#C6A75E]"/> Delivery Record
                </h4>
                <div className="space-y-4">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                      <span className="text-[#5A4F40]/60 text-[10px]">On Time Handover</span>
                      <span className="text-emerald-600">{trackRecord.onTime}</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                      <span className="text-[#5A4F40]/60 text-[10px]">Delayed / Legacy</span>
                      <span className="text-amber-600">{trackRecord.delayed}</span>
                   </div>
                   <div className="w-full bg-[#3A3125]/5 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full" style={{ width: trackRecord.onTime }}></div>
                   </div>
                </div>
             </div>

             {/* Risk Profile */}
             <div className="bg-[#3A3125] text-white p-7 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                   <h4 className="font-serif font-bold mb-6 flex items-center gap-3 text-sm uppercase tracking-widest">
                      <ShieldCheck size={16} className="text-[#C6A75E]"/> Risk Profile
                   </h4>
                   <div className="space-y-5 text-xs font-bold uppercase tracking-widest">
                      <div className="flex justify-between border-b border-white/10 pb-3">
                         <span className="opacity-40 text-[9px]">Off-Plan Risk</span>
                         <span className={risk.offPlanRisk === 'Zero' || risk.offPlanRisk === 'Very Low' ? 'text-emerald-400' : 'text-[#C6A75E]'}>
                           {risk.offPlanRisk}
                         </span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-3">
                         <span className="opacity-40 text-[9px]">Handover Risk</span>
                         <span className="text-white">{risk.handoverRisk}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                         <span className="opacity-40 text-[9px]">Resale Liquidity</span>
                         <span className="text-[#C6A75E]">{perf.resaleLiquidity}</span>
                      </div>
                   </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/10 rounded-full blur-2xl"></div>
             </div>
           </div>

           {/* 4. INSTITUTIONAL INTELLIGENCE 2026 (NEW) */}
           <div className="bg-[#3A3125] text-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                 <h3 className="text-xl font-serif font-bold mb-10 flex items-center gap-4 uppercase tracking-[0.2em]">
                   <Database className="text-[#C6A75E]" /> Intelligence <span className="text-[10px] bg-[#C6A75E] text-white px-3 py-1 rounded-full">2026 EXCLUSIVE</span>
                 </h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* ESG Section */}
                    <div className="space-y-4">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-[#C6A75E] font-bold uppercase tracking-widest text-[10px]">
                             <Leaf size={16} /> ESG PERFORMANCE
                          </div>
                          <div className="text-3xl font-serif font-black">{builder.esgRating || "N/A"}<span className="text-sm opacity-40">/10</span></div>
                       </div>
                       <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                          <div 
                             className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                             style={{ width: `${(builder.esgRating || 0) * 10}%` }}
                          ></div>
                       </div>
                       <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-widest">
                          Net-Zero Roadmap & Urban Sustainability Index
                       </p>
                    </div>

                    {/* AI Delivery Confidence */}
                    <div className="space-y-4">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-[#C6A75E] font-bold uppercase tracking-widest text-[10px]">
                             <Activity size={16} /> AI CONFIDENCE
                          </div>
                          <div className="text-3xl font-serif font-black">{builder.aiConfidence || "N/A"}<span className="text-sm opacity-40">%</span></div>
                       </div>
                       <div className="flex gap-1.5 h-3">
                          {[...Array(10)].map((_, i) => (
                             <div 
                                key={i} 
                                className={`flex-grow rounded-sm ${i < (builder.aiConfidence / 10) ? 'bg-[#C6A75E] shadow-[0_0_10px_rgba(198,167,94,0.4)]' : 'bg-white/5'}`}
                             ></div>
                          ))}
                       </div>
                       <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-widest">
                          Real-Time Labor Force & Supply Chain Prediction
                       </p>
                    </div>
                 </div>

                 <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-10">
                    <div className="text-center">
                       <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Funding</div>
                       <div className="text-xs font-bold text-[#C6A75E]">{builder.fundingStability || "Standard"}</div>
                     </div>
                     <div className="text-center">
                        <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Secondary</div>
                        <div className="text-xs font-bold text-[#C6A75E]">{builder.marketLiquidityVelocity || "Medium"}</div>
                     </div>
                     <div className="text-center">
                        <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Digital Twin</div>
                        <div className="text-xs font-bold text-[#C6A75E]">{builder.digitalTwinReadiness ? "Integrated" : "Legacy"}</div>
                     </div>
                     <div className="text-center">
                        <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-2">Grade</div>
                        <div className="text-xs font-bold text-[#C6A75E]">Institutional AAA</div>
                     </div>
                  </div>
               </div>
               {/* Background mesh gradient */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A75E]/10 rounded-full blur-[120px] pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C6A75E]/5 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            {/* 5. AI PREDICT DETAIL 2026 (ENHANCED) */}
            <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-10 shadow-sm relative overflow-hidden">
               <h3 className="text-lg font-serif font-bold text-[#3A3125] mb-8 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#C6A75E]/10"><Zap size={18} className="text-[#C6A75E]" /></div> AI Predict Detail 2026
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-white/60 rounded-2xl border border-white shadow-sm transition-all hover:shadow-md">
                     <p className="text-[10px] font-black text-[#5A4F40]/40 uppercase tracking-widest mb-2">Liquidity Velocity</p>
                     <div className="text-2xl font-serif font-black text-[#3A3125] mb-1">High-Alpha</div>
                     <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Predicted +12.4% 2026</p>
                  </div>
                  
                  <div className="p-6 bg-white/60 rounded-2xl border border-white shadow-sm transition-all hover:shadow-md">
                     <p className="text-[10px] font-black text-[#5A4F40]/40 uppercase tracking-widest mb-2">Capital Stack Transparency</p>
                     <div className="text-2xl font-serif font-black text-[#3A3125] mb-1">Grade-A</div>
                     <p className="text-[10px] font-bold text-[#C6A75E] uppercase tracking-widest">Sovereign Backed</p>
                  </div>

                  <div className="p-6 bg-white/60 rounded-2xl border border-white shadow-sm transition-all hover:shadow-md">
                     <p className="text-[10px] font-black text-[#5A4F40]/40 uppercase tracking-widest mb-2">Delivery Deviation Risk</p>
                     <div className="text-2xl font-serif font-black text-emerald-600 mb-1">0.45%</div>
                     <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-widest">Near-Zero Variance</p>
                  </div>
               </div>

               <div className="mt-8 p-6 bg-[#3A3125]/5 rounded-2xl border border-[#3A3125]/5">
                  <div className="flex gap-4 items-start">
                     <div className="p-3 bg-white rounded-xl shadow-sm"><BrainCircuit size={20} className="text-[#C6A75E]" /></div>
                     <div>
                        <h4 className="text-sm font-serif font-black text-[#3A3125] mb-1 uppercase tracking-widest">2026 Market Outlook</h4>
                        <p className="text-xs text-[#5A4F40] leading-relaxed font-medium">
                           The AI model predicts a structural shift in {builder.name}'s portfolio towards higher density, ESG-compliant assets. Anticipated capital appreciation across off-plan launches remains in the top 5th percentile of UAE developers for the 2026-2027 cycle.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

        </div>

        {/* === RIGHT COLUMN: PROFILE & INSIGHTS === */}
        <div className="space-y-8">
           
           {/* WHATSAPP CTA */}
           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm text-center">
             <h3 className="font-serif font-bold text-[#3A3125] mb-2 text-lg">Interested in {builder.name}?</h3>
             <p className="text-xs text-[#5A4F40] mb-6 font-medium">Request the latest institutional portfolio & inventory.</p>
             <WhatsAppButton text="Get Inventory List" message={`Hi, I'm interested in projects by ${builder.name}.`} />
           </div>

           {/* VERDICT */}
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

             <div>
               <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <AlertTriangle size={14}/> LIMITATIONS
               </div>
               <div className="flex flex-wrap gap-2">
                  {builder.notIdealFor?.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-red-50/50 border border-red-100 rounded-lg text-[10px] font-bold text-red-800 uppercase tracking-wider">
                      {item}
                    </span>
                  ))}
               </div>
             </div>
           </div>

           {/* INFO SPECS */}
           <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-sm space-y-6">
             <div>
                 <span className="text-[9px] font-bold text-[#C6A75E] uppercase tracking-[0.2em] block mb-2">Signature Project</span>
                 <div className="font-serif font-bold text-[#3A3125]">{builder.signatureProject}</div>
             </div>
             <div>
                 <span className="text-[9px] font-bold text-[#C6A75E] uppercase tracking-[0.2em] block mb-2">Key Communities</span>
                 <div className="font-medium text-[#5A4F40] text-sm leading-relaxed">
                    {builder.flagshipCommunities?.join(", ")}
                 </div>
             </div>
             <div>
                 <span className="text-[9px] font-bold text-[#C6A75E] uppercase tracking-[0.2em] block mb-2">Payment Structures</span>
                 <div className="font-bold text-[#C6A75E] text-xs uppercase tracking-wider">
                    {payment.commonPlans?.join(" • ")}
                 </div>
             </div>
           </div>

           {/* USP */}
           <div className="bg-gradient-to-br from-[#FDFBF7] to-[#F3E9D2] border border-[rgba(198,167,94,0.2)] p-8 rounded-3xl shadow-sm italic relative overflow-hidden">
             <div className="relative z-10">
               <div className="text-[9px] font-bold text-[#C6A75E] uppercase tracking-[0.2em] mb-3">Alpha Signal</div>
               <p className="font-serif font-bold text-[#3A3125] leading-relaxed text-lg">"{builder.usp}"</p>
             </div>
             <Crown size={64} className="absolute -bottom-4 -right-4 text-[#C6A75E]/5 rotate-12" />
           </div>

        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

// Helper Component for Score Bars
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