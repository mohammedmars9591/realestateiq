import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, ArrowRight, Zap, ShieldCheck, Wallet, Gem } from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/areaData';

const ExploreAreas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title="Dubai Area Guide 2026 | ROI & Yield Analysis" 
        description="Compare investment performance of Dubai Marina, JVC, Business Bay, and more. Validated rental yields and capital growth forecasts."
      />

      {/* --- 1. UPDATED HEADER SECTION --- */}
      <div className="py-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Explore Dubai's <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">Districts</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-blue-600 leading-relaxed">
          "Every neighborhood has a specific investment DNA. Find the one that matches your goals."
        </p>
      </div>

      {/* AREAS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {DUBAI_AREAS.map((area) => (
          <Link to={`/area/${area.id}`} key={area.id} className="group block hover:no-underline h-full">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-700 group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {area.category}
                  </span>
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                       <TrendingUp size={14} /> {area.roi} Yield
                    </span>
                    <span className="w-px h-4 bg-white/30"></span>
                    <span className="text-amber-400 font-bold">
                       Score: {area.overallScore}/10
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {area.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:text-blue-700">
                  <span>View Analysis</span>
                  <div className="bg-blue-50 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* --- 2. ANALYST VERDICTS: 2026 EDITION --- */}
      <div className="border-t border-slate-200 pt-16">
         <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2">
                 <Zap size={16} /> FutureScope Analysis
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                 Analyst Verdicts: <span className="text-blue-600">2026 Edition</span>
              </h2>
            </div>
         </div>

         {/* Verdict Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
           <VerdictBox 
              icon={<TrendingUp size={24} />}
              title="Best for ROI"
              winner="Dubai South"
              desc="The $35B Airport expansion makes this the #1 capital growth zone for the next 5 years."
              color="bg-blue-50 border-blue-100"
              iconColor="text-blue-600"
           />

           <VerdictBox 
              icon={<ShieldCheck size={24} />}
              title="Safest Investment"
              winner="Emaar Properties"
              desc="With government backing and master communities like Downtown, they remain the 'Gold Standard'."
              color="bg-emerald-50 border-emerald-100"
              iconColor="text-emerald-600"
           />

           <VerdictBox 
              icon={<Wallet size={24} />}
              title="Best Cash Flow"
              winner="JVC & Danube"
              desc="High rental demand combined with 1% payment plans creates the highest net yields (8%+)."
              color="bg-purple-50 border-purple-100"
              iconColor="text-purple-600"
           />

           <VerdictBox 
              icon={<Gem size={24} />}
              title="Luxury Pick"
              winner="Palm Jebel Ali"
              desc="The 'New Palm' is offering villa entry prices 50% lower than Palm Jumeirah. Massive upside."
              color="bg-amber-50 border-amber-100"
              iconColor="text-amber-600"
           />

         </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENT FOR VERDICTS ---
const VerdictBox = ({ icon, title, winner, desc, color, iconColor }) => (
  <div className={`p-6 rounded-2xl border ${color} hover:shadow-lg transition-all hover:-translate-y-1 h-full`}>
     <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm ${iconColor}`}>
       {icon}
     </div>
     <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{title}</div>
     <h3 className="text-xl font-extrabold text-slate-900 mb-2">{winner}</h3>
     <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-90">
       "{desc}"
     </p>
  </div>
);

export default ExploreAreas;