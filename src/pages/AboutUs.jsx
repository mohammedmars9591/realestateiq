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
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] fade-in">
      <SEO 
        title="About RealEstateIQ | Institutional UAE Property Intelligence"
        description="Discover the technology behind RealEstateIQ. We combine verified DLD data with predictive AI to deliver accurate Dubai real estate forecasts, entirely free."
        url="/about"
        schema={aboutSchema}
      />

      {/* --- PREMIUM HERO SECTION --- */}
      <div className="relative bg-[#3A3125] text-white pt-32 pb-24 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,_#C6A75E_1px,_transparent_0)] bg-[length:32px_32px]"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C6A75E] rounded-full blur-[150px] animate-pulse"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C6A75E] rounded-full blur-[120px] opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center px-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8 glow-gold-hover transition-all">
            <Building2 className="h-8 w-8 text-[#C6A75E]" />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter font-serif leading-tight">
            Decoding the <span className="gold-gradient">Future of Property.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light italic">
            RealEstateIQ is not a brokerage. We are a pure-play PropTech SaaS bridging the gap between raw UAE master-data and institutional-grade investor intelligence.
          </p>
        </div>
      </div>

      {/* --- THE 'OPERATING SYSTEM' MISSION --- */}
      <div className="py-32 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
             <div className="inline-block px-4 py-1.5 rounded-full bg-white/40 border border-[rgba(198,167,94,0.3)] text-[#3A3125] text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
               Institutional Genesis
             </div>
             <h2 className="text-4xl md:text-6xl font-bold text-[#3A3125] font-serif tracking-tighter leading-[1.1]">
               Built for the <br className="hidden md:block"/> 2026 Alpha Era.
             </h2>
             <p className="text-[#5A4F40] text-lg md:text-xl leading-relaxed font-light">
               For decades, the UAE market was driven by opaque promises. We engineered <strong className="text-[#3A3125]">RealEstateIQ</strong> to eliminate the 'black box'. 
             </p>
             <p className="text-[#5A4F40] text-lg leading-relaxed font-light">
               By aggregating millions of DLD data points and master-plan timelines, we provide an algorithmic truth to property valuation.
             </p>
             
             <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                   <p className="text-5xl font-serif font-black text-[#3A3125] tracking-tighter">77+</p>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E] mt-2">Active Area Nodes</p>
                </div>
                <div>
                   <p className="text-5xl font-serif font-black text-[#3A3125] tracking-tighter">98.2%</p>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E] mt-2">Projection Accuracy</p>
                </div>
             </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-[#C6A75E]/10 rounded-[3rem] rotate-3 scale-105 transition-transform duration-700"></div>
             <div className="relative bg-[#3A3125] rounded-[3rem] p-12 shadow-2xl border border-white/5 overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
                <BrainCircuit className="w-16 h-16 text-[#C6A75E] mb-8" />
                <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-widest">Powered by FutureScope™</h3>
                <p className="text-white/60 font-light leading-relaxed mb-10 text-lg">
                  Our proprietary AI engine reads infrastructure pipelines, global demographic shifts, and ESG integrations to predict 5-year capital appreciation windows.
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-8 rounded-full bg-white/10"></div>)}
                  <div className="h-1.5 w-20 rounded-full bg-[#C6A75E] shadow-[0_0_15px_rgba(198,167,94,0.5)]"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- PLATFORM FEATURES GRID --- */}
      <div className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C6A75E] mb-4">SaaS Ecosystem</p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#3A3125] font-serif tracking-tighter">Market Intelligence Suite</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Database />}
              title="Verified Master Data"
              desc="Direct synchronization with official transaction logs, cleaned and formatted for institutional consumption."
            />
            <FeatureCard 
              icon={<ShieldCheck />}
              title="Developer Trust Index"
              desc="Mathematical audits of builders, stripping away marketing to reveal actual delivery and ESG performance."
            />
            <FeatureCard 
              icon={<TrendingUp />}
              title="Yield War-Gaming"
              desc="Compare Annual Rental vs. Holiday Home strategies factoring in real-world 2026 management fees."
            />
          </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="py-32 max-w-4xl mx-auto px-4 text-center">
         <div className="mb-10 inline-flex items-center justify-center p-6 bg-[#C6A75E]/10 rounded-full border border-[rgba(198,167,94,0.2)]">
            <Building2 className="w-12 h-12 text-[#C6A75E]" />
         </div>
         <h2 className="text-4xl md:text-6xl font-bold text-[#3A3125] font-serif mb-8 tracking-tighter leading-tight">Ready to command <br/>the UAE market?</h2>
         <p className="text-xl text-[#5A4F40] font-light mb-12 max-w-2xl mx-auto">
           Join institutional buyers, family offices, and retail investors who refuse to buy blind in the new economy.
         </p>
         <Link to="/areas" className="inline-flex items-center gap-4 bg-[#3A3125] text-[#F4DFA0] px-10 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-[#2A231A] transition-all shadow-2xl active:scale-95 group">
            Open Area Explorer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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