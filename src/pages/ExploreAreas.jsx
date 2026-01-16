import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, ArrowRight, Zap, ShieldCheck, Wallet, Gem } from 'lucide-react';
import SEO from '../components/SEO';

// --- UPDATED IMPORT: Point to the Master Emirates File ---
import { DUBAI_AREAS } from '../data/emiratesData';

const ExploreAreas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title="UAE Area Guide 2026 | National Investment Analysis" 
        description="Compare investment performance across Dubai, Abu Dhabi, RAK, and Sharjah. Validated rental yields and capital growth forecasts."
      />

      {/* --- 1. UPDATED HEADER SECTION --- */}
      <div className="py-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Explore UAE's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Investment Zones</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-slate-500 leading-relaxed">
          "From the casinos of Ras Al Khaimah to the luxury of Dubai Marina. Find the market that matches your goals."
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
             title="Best for Appreciation"
             winner="Al Marjan (RAK)"
             desc="The Wynn Casino effect is driving the highest capital appreciation in the country right now."
             color="bg-purple-50 border-purple-100"
             iconColor="text-purple-600"
           />

           <VerdictBox 
             icon={<ShieldCheck size={24} />}
             title="Safest Investment"
             winner="Downtown Dubai"
             desc="The 'Gold Standard'. While yields are lower, it remains the most liquid asset in the region."
             color="bg-emerald-50 border-emerald-100"
             iconColor="text-emerald-600"
           />

           <VerdictBox 
             icon={<Wallet size={24} />}
             title="Best Cash Flow"
             winner="Ajman Corniche"
             desc="Unbeatable entry prices (AED 500k) with massive 9-10% net rental yields."
             color="bg-teal-50 border-teal-100"
             iconColor="text-teal-600"
           />

           <VerdictBox 
             icon={<Gem size={24} />}
             title="Luxury Pick"
             winner="Saadiyat Island"
             desc="The Cultural District. Museums, pristine beaches, and ultra-high-net-worth demand."
             color="bg-indigo-50 border-indigo-100"
             iconColor="text-indigo-600"
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