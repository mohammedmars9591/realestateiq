import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, ArrowRight, Zap, ShieldCheck, Wallet, 
  Building2, ArrowLeft, LayoutGrid, Palmtree, Anchor, Sun 
} from 'lucide-react';
import SEO from '../components/SEO';

// --- DATA IMPORTS (ALL 7 EMIRATES) ---
import { DUBAI_AREAS } from '../data/areaData';     
import { SHARJAH_DATA } from '../data/sharjahData'; 
import { RAK_DATA } from '../data/rakData';         
import { ABUDHABI_DATA } from '../data/abudhabiData';
import { AJMAN_DATA } from '../data/ajmanData';
import { FUJAIRAH_DATA } from '../data/fujairahData';
import { UAQ_DATA } from '../data/uaqData';

// --- MASTER DATABASE ---
// Combine all data into one super-list
const MASTER_DB = [
  ...(DUBAI_AREAS || []), 
  ...(SHARJAH_DATA || []), 
  ...(RAK_DATA || []),
  ...(ABUDHABI_DATA || []),
  ...(AJMAN_DATA || []),
  ...(FUJAIRAH_DATA || []),
  ...(UAQ_DATA || [])
];

const ExploreAreas = () => {
  const [selectedEmirate, setSelectedEmirate] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [selectedEmirate]);

  // --- FILTER LOGIC ---
  const currentAreas = selectedEmirate 
    ? MASTER_DB.filter(area => (area.emirate) === selectedEmirate)
    : [];

  // --- EMIRATE CARDS DATA ---
  const EMIRATES = [
    { name: 'Dubai', count: '22 Areas', color: 'bg-blue-900', icon: <Building2 className="text-blue-400" />, desc: "Global business hub & luxury living" },
    { name: 'Abu Dhabi', count: '9 Areas', color: 'bg-teal-900', icon: <ShieldCheck className="text-teal-400" />, desc: "Capital of UAE, high-income stability" },
    { name: 'Sharjah', count: '4 Areas', color: 'bg-orange-900', icon: <Wallet className="text-orange-400" />, desc: "Highest rental yields & culture" },
    { name: 'Ras Al Khaimah', count: '3 Areas', color: 'bg-purple-900', icon: <Zap className="text-purple-400" />, desc: "Gaming resorts & massive appreciation" },
    { name: 'Ajman', count: '1 Areas', color: 'bg-emerald-900', icon: <Sun className="text-emerald-400" />, desc: "Affordable entry & high occupancy" },
    { name: 'Fujairah', count: '13 Areas', color: 'bg-cyan-900', icon: <Anchor className="text-cyan-400" />, desc: "Port city with strategic growth" },
    { name: 'Umm Al Quwain', count: '10 Areas', color: 'bg-lime-900', icon: <Palmtree className="text-lime-400" />, desc: "Quiet coastal living & value" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen">
      <SEO 
        title={selectedEmirate ? `${selectedEmirate} Real Estate Market | EstateIQ` : "UAE Investment Map 2026 | EstateIQ"}
        description="Navigate the UAE's real estate landscape. From the luxury of Dubai to the high yields of Sharjah."
      />

      {/* --- VIEW 1: NATIONAL MAP (Selector) --- */}
      {!selectedEmirate && (
        <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              The National <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Investment Map</span>
            </h1>
            <p className="text-xl text-slate-500">Select an Emirate to drill down into local prices, yields, and growth zones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMIRATES.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedEmirate(item.name)}
                className={`
                  relative overflow-hidden p-8 rounded-3xl text-left transition-all duration-300 group
                  ${item.color} hover:scale-[1.02] hover:shadow-2xl
                `}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
                      {React.cloneElement(item.icon, { size: 28 })}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-white/70 text-sm font-medium">{item.desc}</p>
                  
                  <div className="mt-8 flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Explore Market <ArrowRight size={16} />
                  </div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- VIEW 2: EMIRATE DETAIL (The "Opened" State) --- */}
      {selectedEmirate && (
        <div className="py-8 animate-in zoom-in-95 duration-300">
          
          {/* Back Navigation */}
          <button 
            onClick={() => setSelectedEmirate(null)}
            className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors"
          >
            <div className="p-2 rounded-full bg-white border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50">
               <ArrowLeft size={18} />
            </div>
            Back to National Map
          </button>

          {/* Emirate Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{selectedEmirate}</h1>
                 <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                   {currentAreas.length} Areas Tracked
                 </span>
              </div>
              <p className="text-slate-500 text-lg">Top performing investment zones in {selectedEmirate}.</p>
            </div>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentAreas.length > 0 ? (
              currentAreas.map((area) => (
                <Link to={`/area/${area.id}`} key={area.id} className="group block hover:no-underline h-full">
                  <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-700 group-hover:scale-110`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {area.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{area.name}</h3>
                        <div className="flex items-center gap-3 text-xs font-medium mt-1 opacity-90">
                          <span className="flex items-center gap-1"><TrendingUp size={12} className="text-emerald-400"/> {area.roi} ROI</span>
                          <span>•</span>
                          <span>{area.avgPrice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {area.description}
                      </p>
                      
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                         <div className="flex gap-2">
                            {area.amenities?.slice(0, 2).map(am => (
                              <span key={am} className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium">
                                {am}
                              </span>
                            ))}
                         </div>
                         <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <ArrowRight size={14} />
                         </div>
                      </div>
                    </div>

                  </div>
                </Link>
              ))
            ) : (
              // Empty State
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                <LayoutGrid size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-900">Coming Soon</h3>
                <p className="text-slate-500 max-w-md mx-auto mt-2">
                  We are currently verifying investment data for {selectedEmirate}.
                </p>
                <button onClick={() => setSelectedEmirate(null)} className="mt-6 text-blue-600 font-bold text-sm hover:underline">
                  Back to Map
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreAreas;