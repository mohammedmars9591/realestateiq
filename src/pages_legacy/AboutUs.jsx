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
    "description": "RealEstateIQ is the UAE's premier AI-powered real estate investment intelligence platform, delivering institutional-grade analytics and predictive modeling.",
    "mainEntity": {
      "@type": "Organization",
      "name": "RealEstateIQ",
      "url": "https://www.realestateiq.ae",
      "foundingDate": "2024",
      "description": "A PropTech SaaS providing UAE real estate investment tools including area analytics and developer trust scores.",
      "areaServed": "UAE",
      "slogan": "Institutional Data. AI Precision."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7] to-[#F4EDE2] pb-24 fade-in">
      <SEO 
        title="About RealEstateIQ | Institutional UAE Property Intelligence"
        description="Discover the technology behind RealEstateIQ. We combine verified DLD data with predictive AI to deliver accurate Dubai real estate forecasts."
        url="/about"
        schema={aboutSchema}
      />

      {/* --- REFINED INSTITUTIONAL HERO SECTION --- */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#C6A75E] rounded-full blur-[180px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3A3125] text-[#C6A75E] mb-10 shadow-2xl shadow-[#3A3125]/20 glow-gold-hover transition-all">
            <Building2 className="h-8 w-8" />
          </div>
          
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-[#C6A75E] font-black uppercase tracking-[0.4em] text-[10px]">
              <div className="w-12 h-[1px] bg-[#C6A75E]/30"></div>
              Mission Protocol 2026
              <div className="w-12 h-[1px] bg-[#C6A75E]/30"></div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#3A3125] tracking-tighter font-serif leading-[0.9]">
              Decoding the <span className="gold-gradient italic">Future</span> <br/>
              <span className="text-[#3A3125]/40 opacity-70">of Global Property.</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl text-[#5A4F40] max-w-3xl mx-auto leading-relaxed font-light italic mb-16">
            RealEstateIQ is the pure-play PropTech SaaS bridging the gap between raw UAE master-data and institutional-grade investor intelligence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-[rgba(198,167,94,0.15)] pt-16">
            <StatItem val="77+" label="Area Nodes" />
            <StatItem val="98.2%" label="Proj. Accuracy" />
            <StatItem val="AED 40B+" label="Data Tracked" />
            <StatItem val="2026" label="Alpha Ready" />
          </div>
        </div>
      </div>

      {/* --- THE 'OPERATING SYSTEM' MISSION --- */}
      <div className="py-32 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 bg-[#C6A75E]/10 rounded-[3rem] rotate-2 scale-105 transition-transform duration-700"></div>
             <div className="relative bg-[#3A3125] rounded-[3rem] p-12 md:p-16 shadow-2xl border border-white/5 overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A75E]/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-10"><BrainCircuit className="w-12 h-12 text-[#C6A75E]" /></div>
                   <h3 className="text-3xl font-serif font-black text-white mb-6 uppercase tracking-tighter leading-tight">Powered by <br/><span className="gold-gradient italic">FutureScope™</span></h3>
                   <p className="text-white/60 font-light leading-relaxed mb-12 text-lg italic">
                     "Our proprietary AI engine reads infrastructure pipelines, global demographic shifts, and ESG integrations to predict 5-year capital appreciation windows with sovereign-grade precision."
                   </p>
                   <div className="flex gap-3">
                     {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-10 rounded-full bg-white/5"></div>)}
                     <div className="h-1.5 w-24 rounded-full bg-[#C6A75E]"></div>
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
             <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[rgba(198,167,94,0.3)] text-[#3A3125] text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
               Institutional Genesis
             </div>
             <h2 className="text-4xl md:text-7xl font-black text-[#3A3125] font-serif tracking-tighter leading-[1.0]">
               Built for the <br className="hidden md:block"/> <span className="gold-gradient">Alpha Era.</span>
             </h2>
             <div className="space-y-6 text-[#5A4F40] text-lg md:text-xl leading-relaxed font-light">
                <p>
                   For decades, the UAE market was driven by opaque promises. We engineered <strong className="text-[#3A3125] font-bold">RealEstateIQ</strong> to eliminate the 'black box'. 
                </p>
                <p>
                   By aggregating millions of DLD data points and master-plan timelines, we provide an algorithmic truth to property valuation.
                </p>
             </div>
             
             <button className="flex items-center gap-4 text-[#3A3125] font-black text-[11px] uppercase tracking-[0.3em] group">
                Download Infrastructure Whitepaper <ArrowRight size={18} className="text-[#C6A75E] group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </div>

      {/* --- PLATFORM FEATURES GRID --- */}
      <div className="py-32 relative overflow-hidden bg-white/30 backdrop-blur-md border-y border-[rgba(198,167,94,0.1)]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-20">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C6A75E] mb-6">The Intelligence Ecosystem</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#3A3125] font-serif tracking-tighter leading-tight">
               Precision <span className="gold-gradient italic">Instruments.</span>
            </h2>
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

      {/* --- CONTACT ACCESS --- */}
      <div className="py-40 max-w-5xl mx-auto px-4 text-center">
         <div className="mb-12 inline-flex items-center justify-center h-20 w-20 bg-[#FDFBF7] rounded-3xl border-2 border-[#3A3125] shadow-2xl transform rotate-12 transition-transform hover:rotate-0">
            <Building2 className="w-10 h-10 text-[#3A3125]" />
         </div>
         <h2 className="text-4xl md:text-7xl font-black text-[#3A3125] font-serif mb-10 tracking-tighter leading-tight">Ready to command <br/>the UAE market?</h2>
         <p className="text-xl md:text-2xl text-[#5A4F40] font-light mb-16 max-w-3xl mx-auto">
           Join institutional buyers, family offices, and retail investors who refuse to buy blind in the 2026 economy.
         </p>
         <Link to="/areas" className="inline-flex items-center gap-4 bg-[#3A3125] text-white px-12 py-6 rounded-2xl font-black text-[11px] tracking-[0.25em] uppercase hover:bg-[#2A231A] transition-all shadow-2xl active:scale-95 group">
            Open Alpha Explorer <ArrowRight size={20} className="text-[#C6A75E] group-hover:translate-x-2 transition-transform" />
         </Link>
      </div>

    </div>
  );
};

// Helper Item for Stats
function StatItem({ val, label }) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <p className="text-4xl md:text-6xl font-serif font-black text-[#3A3125] tracking-tighter">{val}</p>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E] mt-3">{label}</p>
    </div>
  );
}

// Helper Component for Feature Grid
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-[2.5rem] border border-[rgba(198,167,94,0.15)] bg-white p-10 hover:shadow-2xl hover:shadow-[#3A3125]/5 hover:-translate-y-2 transition-all duration-700">
      <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDFBF7] border border-[rgba(198,167,94,0.2)] text-[#3A3125] group-hover:bg-[#393125] group-hover:text-[#C6A75E] transition-all duration-500 shadow-sm">
        {React.cloneElement(icon, { size: 28, strokeWidth: 1.2 })}
      </div>
      <h3 className="mb-4 text-2xl font-black text-[#3A3125] font-serif tracking-tight leading-none">{title}</h3>
      <p className="text-sm leading-relaxed text-[#5A4F40] font-light italic">
         "{desc}"
      </p>
    </div>
  );
}

export default AboutUs;