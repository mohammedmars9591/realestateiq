import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Zap, ShieldCheck, Users, BarChart3, 
  Cpu, Globe, ArrowRight, BrainCircuit 
} from 'lucide-react';
import SEO from '../components/SEO';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fade-in">
      <SEO 
        title="About EstateIQ | The AI Behind Smart Real Estate" 
        description="We are revolutionizing Dubai real estate with predictive AI. Learn how our FutureScope engine calculates ROI and capital appreciation."
      />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Abstract Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[100px] opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            <BrainCircuit size={14} /> EST. 2024
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            We Decode the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future of Real Estate</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            EstateIQ is not just a listing platform. We are a data science company building the operating system for smart investors in Dubai.
          </p>
        </div>
      </div>

      {/* --- STATS ROW --- */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <StatItem value="15M+" label="Data Points Analyzed" />
             <StatItem value="98.2%" label="Forecast Accuracy" />
             <StatItem value="AED 4B+" label="Property Value Tracked" />
             <StatItem value="24/7" label="Market Monitoring" />
          </div>
        </div>
      </div>

      {/* --- OUR MISSION --- */}
      <div className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Black Box" Problem</h2>
             <p className="text-slate-600 text-lg mb-6 leading-relaxed">
               For decades, Dubai real estate was driven by hype, whatsapp broadcasts, and aggressive sales pitches. Investors were buying based on promises, not data.
             </p>
             <p className="text-slate-600 text-lg mb-8 leading-relaxed">
               We built <strong className="text-slate-900">EstateIQ</strong> to change that. We believe every dirham invested should be backed by rigorous data analysis, not just a glossy brochure.
             </p>
             <div className="flex gap-4">
               <div className="flex items-center gap-2 text-slate-800 font-bold bg-slate-100 px-4 py-2 rounded-lg">
                 <ShieldCheck size={20} className="text-green-600" /> Transparent
               </div>
               <div className="flex items-center gap-2 text-slate-800 font-bold bg-slate-100 px-4 py-2 rounded-lg">
                 <Zap size={20} className="text-yellow-500" /> Data-Driven
               </div>
             </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
               alt="Dubai Skyline Data" 
               className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px]"
             />
          </div>
        </div>
      </div>

      {/* --- THE TECHNOLOGY (FutureScope) --- */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Powered by <span className="text-blue-600">FutureScope™</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our proprietary AI engine doesn't just look at today's prices. It simulates future scenarios to predict capital appreciation trends for 2026 and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <TechCard 
               icon={<BarChart3 size={32} className="text-blue-600"/>}
               title="Predictive ROI"
               desc="We analyze 10 years of rental contracts (Ejari) and sales transaction (DLD) data to forecast future yields with high precision."
             />
             <TechCard 
               icon={<Globe size={32} className="text-purple-600"/>}
               title="Infrastructure Impact"
               desc="Our model factors in government master plans—like the Blue Line Metro and Airport Expansion—before prices react."
             />
             <TechCard 
               icon={<Cpu size={32} className="text-emerald-600"/>}
               title="Builder Scoring"
               desc="We don't trust marketing. We audit developer delivery records, material quality, and resale liquidity to assign a 'Trust Score'."
             />
          </div>
        </div>
      </div>

      {/* --- VALUES / CULTURE --- */}
      <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Built for Investors, by Investors</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueBox title="Radical Transparency" desc="We show the bad data too. If a property has high service charges or low liquidity, we flag it." />
            <ValueBox title="Speed of Execution" desc="Real estate moves fast. Our live market feeds update every 24 hours." />
            <ValueBox title="Zero Hype" desc="No sales calls. No aggressive agents. Just pure, unadulterated financial data." />
            <ValueBox title="Long-Term Vision" desc="We focus on sustainable wealth creation, not quick 'flip' schemes." />
         </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="bg-slate-900 text-white py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest with Confidence?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Join thousands of smart investors using EstateIQ to find the best opportunities in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/market" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg flex items-center justify-center gap-2">
              Explore Market Data <ArrowRight size={20} />
            </Link>
            <Link to="/builders" className="px-8 py-4 bg-transparent border border-slate-600 hover:bg-white/10 text-white font-bold rounded-xl transition">
              Compare Developers
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatItem = ({ value, label }) => (
  <div>
    <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">{value}</div>
    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{label}</div>
  </div>
);

const TechCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const ValueBox = ({ title, desc }) => (
  <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm text-center">
    <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

export default AboutUs;