import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, BrainCircuit, ShieldCheck, Database, 
  TrendingUp, Activity, Globe, ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About RealEstateIQ — The 2026 UAE Property Intelligence SaaS",
    "url": "https://www.realestateiq.ae/about",
    "description": "RealEstateIQ is the UAE's premier AI-powered real estate investment intelligence platform, delivering institutional-grade analytics, FutureScope™ forecasts, and ESG developer ratings.",
    "mainEntity": {
      "@type": "Organization",
      "name": "RealEstateIQ",
      "url": "https://www.realestateiq.ae",
      "foundingDate": "2024",
      "description": "A dark-luxury PropTech SaaS providing UAE real estate investment tools including area analytics, developer trust scores, and predictive modeling.",
      "areaServed": "UAE",
      "knowsAbout": ["Dubai Real Estate", "UAE Property Investment", "Builder Analytics", "ROI Heatmaps", "ESG Scoring", "AI Delivery Confidence", "FutureScope Projections"],
      "slogan": "Institutional Data. AI Precision."
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] fade-in">
      <SEO 
        title="About RealEstateIQ | Institutional UAE Property Intelligence"
        description="Discover the technology behind RealEstateIQ. We combine verified DLD data with predictive AI to deliver accurate Dubai real estate forecasts, entirely free."
        url="/about"
        schema={aboutSchema}
      />

      {/* --- PREMIUM HERO SECTION --- */}
      <div className="relative bg-[#1C1C22] text-white pt-32 pb-24 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C6A75E] rounded-full blur-[150px] animate-pulse"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C6A75E] rounded-full blur-[120px] opacity-60"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8 glow-gold-hover transition-all">
            <Building2 className="h-8 w-8 text-[#C6A75E]" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter font-serif leading-tight">
            Decoding the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A75E] to-[#E2C98E]">Future of Real Estate.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light italic">
            RealEstateIQ is not a brokerage. We are a pure-play PropTech SaaS bridging the gap between raw UAE master-data and institutional-grade investor intelligence.
          </p>
        </div>
      </div>

      {/* --- THE 'OPERATING SYSTEM' MISSION --- */}
      <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C22]/5 border border-[#C6A75E]/30 text-[#C6A75E] text-[10px] font-black uppercase tracking-[0.2em]">
               The Core Mission
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C22] font-serif tracking-tight leading-tight">
               Built for the Modern <br className="hidden md:block"/> 2026 Investor.
             </h2>
             <p className="text-[#4A3F2F] text-lg leading-relaxed font-light">
               For decades, the UAE real estate market was driven heavily by aggressive sales tactics and opaque broker promises. The data was there, but it wasn't accessible or actionable for the everyday buyer.
             </p>
             <p className="text-[#4A3F2F] text-lg leading-relaxed font-light">
               We engineered <strong className="text-[#1C1C22]">RealEstateIQ</strong> to eliminate the 'black box'. By aggregating millions of DLD data points, Ejari contracts, and master-plan timelines, we provide an algorithmic truth to property valuation.
             </p>
             
             <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="border-l-2 border-[#C6A75E] pl-4">
                 <p className="text-4xl font-black text-[#1C1C22]">77+</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-[#7A6E60] mt-1">Prime Hubs Analyzed</p>
               </div>
               <div className="border-l-2 border-[#C6A75E] pl-4">
                 <p className="text-4xl font-black text-[#1C1C22]">98.2%</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-[#7A6E60] mt-1">AI Forecast Accuracy</p>
               </div>
             </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-[#C6A75E]/10 rounded-3xl rotate-3 scale-105 transition-transform duration-700"></div>
             <div className="relative bg-[#1C1C22] rounded-3xl p-10 shadow-2xl border border-[rgba(198,167,94,0.3)]">
                <BrainCircuit className="w-16 h-16 text-[#C6A75E] mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4">Powered by FutureScope™</h3>
                <p className="text-slate-300 font-light leading-relaxed mb-8">
                  Our proprietary AI engine doesn't just look at past prices. It reads infrastructure pipelines, ESG integrations, and global demographic shifts to predict 5-year capital appreciation windows with ruthless precision.
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-8 rounded-full bg-[#C6A75E]/40"></div>)}
                  <div className="h-1.5 w-16 rounded-full bg-[#C6A75E]"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- PLATFORM FEATURES GRID --- */}
      <div className="bg-white border-y border-[rgba(198,167,94,0.1)] py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C22] font-serif tracking-tight mb-4">Institutional Features</h2>
            <p className="text-[#7A6E60] text-lg font-light">The tools we provide to give you symmetric market advantage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Database />}
              title="Symmetric Data Access"
              desc="We pull directly from government APIs, cleaning and formatting thousands of transaction logs so you see exactly what the institutions see."
            />
            <FeatureCard 
              icon={<ShieldCheck />}
              title="Developer Trust Index"
              desc="We audit builders mathematically. Our ESG scores and AI Delivery Confidence metrics strip away the marketing to reveal actual performance."
            />
            <FeatureCard 
              icon={<TrendingUp />}
              title="Yield War-Gaming"
              desc="Interactive calculators allow you to pit Annual Rental yields against Holiday Home (Airbnb) strategies factoring in real-world 2026 management fees."
            />
            <FeatureCard 
              icon={<Activity />}
              title="Live Velocity Mapping"
              desc="Track the heartbeat of an area. Watch real-time negotiation spreads, days-on-market drops, and 7-day transaction volumes."
            />
            <FeatureCard 
              icon={<Globe />}
              title="Global Demographic Radars"
              desc="Understand who you are buying next to, and who you will eventually sell to, with deep-dive breakdowns of buyer nationalities."
            />
            <FeatureCard 
              icon={<BrainCircuit />}
              title="Audio AI Briefings"
              desc="For the investor on the move. Every area report is packaged into a concise, multimodal AI audio summary you can listen to anywhere."
            />
          </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="py-24 max-w-4xl mx-auto px-4 text-center">
         <div className="mb-8 inline-flex items-center justify-center p-4 bg-[#C6A75E]/10 rounded-full">
            <Building2 className="w-10 h-10 text-[#C6A75E]" />
         </div>
         <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C22] font-serif mb-6 tracking-tight">Ready to command the market?</h2>
         <p className="text-lg text-[#7A6E60] font-light mb-10">
           Join thousands of institutional buyers, family offices, and retail investors who refuse to buy blind. 
         </p>
         <Link to="/areas" className="inline-flex items-center gap-3 bg-[#1C1C22] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-[#C6A75E] transition-all shadow-[0_10px_30px_rgba(28,28,34,0.2)]">
            Open Area Explorer <ArrowRight size={18} />
         </Link>
      </div>

    </div>
  );
};

// Helper Component for Feature Grid
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-3xl border border-[rgba(198,167,94,0.15)] bg-[#FDFBF7] p-8 hover:bg-white hover:shadow-[0_10px_40px_rgba(198,167,94,0.08)] hover:-translate-y-1 transition-all duration-500">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C6A75E]/10 text-[#C6A75E] group-hover:scale-110 group-hover:bg-[#C6A75E] group-hover:text-white transition-all duration-500">
        {React.cloneElement(icon, { size: 24, strokeWidth: 1.5 })}
      </div>
      <h3 className="mb-3 text-xl font-bold text-[#1C1C22] font-serif">{title}</h3>
      <p className="text-sm leading-relaxed text-[#7A6E60] font-light">
        {desc}
      </p>
    </div>
  );
}

export default AboutUs;