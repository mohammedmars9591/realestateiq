import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, TrendingUp, ArrowRight, Zap, ShieldCheck, Wallet, Gem, 
  Building2, Palmtree, Sun, Anchor 
} from 'lucide-react';
import SEO from '../components/SEO';

// --- DATA IMPORT ---
import { DUBAI_AREAS } from '../data/emiratesData';

const ExploreAreas = () => {
  const [activeEmirate, setActiveEmirate] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- 1. SMART CATEGORIZER ---
  // This helper function assigns an Emirate based on the ID if the data is missing the 'emirate' field
  const getEmirate = (area) => {
    if (area.emirate) return area.emirate; // Use field if it exists
    
    const id = area.id.toLowerCase();
    const name = area.name.toLowerCase();

    if (id.includes('rak') || name.includes('rak') || id.includes('marjan') || id.includes('hamra') || id.includes('mina-al-arab') || id.includes('julphar')) return 'Ras Al Khaimah';
    if (id.includes('yas') || id.includes('saadiyat') || id.includes('reem') || id.includes('aldar')) return 'Abu Dhabi';
    if (id.includes('sharjah') || id.includes('aljada') || id.includes('maryam')) return 'Sharjah';
    if (id.includes('ajman') || id.includes('zorah')) return 'Ajman';
    if (id.includes('fujairah') || id.includes('aqah')) return 'Fujairah';
    if (id.includes('uaq') || id.includes('mistral')) return 'Umm Al Quwain';
    
    return 'Dubai'; // Default to Dubai
  };

  // --- 2. FILTER LOGIC ---
  const filteredAreas = activeEmirate === 'All' 
    ? DUBAI_AREAS 
    : DUBAI_AREAS.filter(area => getEmirate(area) === activeEmirate);

  // --- 3. EMIRATE CARDS DATA ---
  const EMIRATES = [
    { name: 'All', icon: <MapPin />, color: 'bg-slate-800' },
    { name: 'Dubai', icon: <Building2 />, color: 'bg-blue-600' },
    { name: 'Abu Dhabi', icon: <ShieldCheck />, color: 'bg-teal-700' },
    { name: 'Ras Al Khaimah', icon: <Zap />, color: 'bg-purple-600' },
    { name: 'Sharjah', icon: <Sun />, color: 'bg-orange-500' },
    { name: 'Ajman', icon: <Wallet />, color: 'bg-emerald-600' },
    { name: 'Fujairah', icon: <Anchor />, color: 'bg-cyan-700' },
    { name: 'Umm Al Quwain', icon: <Palmtree />, color: 'bg-lime-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title="UAE Area Guide 2026 | National Investment Analysis" 
        description="Compare investment performance across Dubai, Abu Dhabi, RAK, and Sharjah. Validated rental yields and capital growth forecasts."
      />

      {/* --- HEADER SECTION --- */}
      <div className="py-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Explore UAE's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Investment Zones</span>
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Select an Emirate to analyze local yields, price trends, and future growth hotspots.
        </p>
      </div>

      {/* --- EMIRATE SELECTOR CARDS --- */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {EMIRATES.map((emirate) => (
          <button
            key={emirate.name}
            onClick={() => setActiveEmirate(emirate.name)}
            className={`
              flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 shadow-sm border
              ${activeEmirate === emirate.name 
                ? `${emirate.color} text-white border-transparent scale-105 shadow-md` 
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-slate-50'}
            `}
          >
            {React.cloneElement(emirate.icon, { size: 18 })}
            {emirate.name}
          </button>
        ))}
      </div>

      {/* --- AREAS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredAreas.length > 0 ? (
          filteredAreas.map((area) => (
            <Link to={`/area/${area.id}`} key={area.id} className="group block hover:no-underline h-full">
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-700 group-hover:scale-110`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {getEmirate(area)}
                    </span>
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
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
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <h3 className="text-xl font-bold text-slate-400">No Areas Found</h3>
            <p className="text-slate-400">We are currently updating data for {activeEmirate}. Check back soon!</p>
          </div>
        )}
      </div>

      {/* --- ANALYST VERDICTS SECTION --- */}
      <div className="border-t border-slate-200 pt-16">
         <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
           <div>
             <div className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2">
                <Zap size={16} /> National FutureScope
             </div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                 Analyst Verdicts: <span className="text-blue-600">2026 Edition</span>
             </h2>
           </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <VerdictBox 
             icon={<TrendingUp size={24} />}
             title="Best Appreciation"
             winner="Al Marjan (RAK)"
             desc="The Wynn Casino effect is driving +20% annual capital appreciation."
             color="bg-purple-50 border-purple-100"
             iconColor="text-purple-600"
           />
           <VerdictBox 
             icon={<ShieldCheck size={24} />}
             title="Safest Investment"
             winner="Downtown Dubai"
             desc="The most liquid asset in the region. Instant resale demand."
             color="bg-emerald-50 border-emerald-100"
             iconColor="text-emerald-600"
           />
           <VerdictBox 
             icon={<Wallet size={24} />}
             title="Best Cash Flow"
             winner="Ajman Corniche"
             desc="Unbeatable entry prices with massive 9-10% net rental yields."
             color="bg-teal-50 border-teal-100"
             iconColor="text-teal-600"
           />
           <VerdictBox 
             icon={<Gem size={24} />}
             title="Luxury Pick"
             winner="Saadiyat Island"
             desc="The Cultural District. Museums and beaches attract ultra-HNWIs."
             color="bg-indigo-50 border-indigo-100"
             iconColor="text-indigo-600"
           />
         </div>
      </div>

    </div>
  );
};

const VerdictBox = ({ icon, title, winner, desc, color, iconColor }) => (
  <div className={`p-6 rounded-2xl border ${color} hover:shadow-lg transition-all hover:-translate-y-1 h-full`}>
     <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm ${iconColor}`}>
       {icon}
     </div>
     <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{title}</div>
     <h3 className="text-xl font-extrabold text-slate-900 mb-2">{winner}</h3>
     <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-90">"{desc}"</p>
  </div>
);

export default ExploreAreas;