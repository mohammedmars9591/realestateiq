import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { 
  TrendingUp, Map as MapIcon, Zap, Loader2, Info
} from 'lucide-react';
import { DUBAI_AREAS } from '../../src/data/emiratesData'; 

// Dynamic Map Component (SSR: false is critical for Leaflet)
const HeatmapMap = dynamic(() => import('../../src/components/heatmap/HeatmapMap'), { 
  ssr: false, 
  loading: () => <div className="h-full w-full bg-[#3A3125]/5 rounded-[3rem] animate-pulse flex items-center justify-center"><Loader2 className="animate-spin text-[#C6A75E]" /></div>
});

const MarketHeatmapPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeEmirate, setActiveEmirate] = useState('Dubai');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const EMIRATES = [
    { name: 'Dubai', center: [25.08, 55.20], zoom: 11 },
    { name: 'Abu Dhabi', center: [24.45, 54.40], zoom: 11 },
    { name: 'Ras Al Khaimah', center: [25.67, 55.75], zoom: 11 },
  ];

  const currentEmirate = EMIRATES.find(e => e.name === activeEmirate) || EMIRATES[0];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24 fade-in">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
           <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-[1px] w-12 bg-[#C6A75E]"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C6A75E]">Geospatial Alpha</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-black text-[#3A3125] leading-none tracking-tighter">
                Market <span className="gold-gradient">Alpha Map</span>
              </h1>
           </div>
           
           <div className="flex flex-col items-end gap-4 w-full lg:w-auto">
              <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-[rgba(198,167,94,0.2)] rounded-3xl shadow-sm">
                 {EMIRATES.map(e => (
                    <button 
                      key={e.name}
                      onClick={() => setActiveEmirate(e.name)}
                      className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeEmirate === e.name ? "bg-[#3A3125] text-[#C6A75E] shadow-lg" : "text-[#7A6E60] hover:bg-[#FDFBF7]"}`}
                    >
                      {e.name}
                    </button>
                 ))}
              </div>
           </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* --- MAP CONTAINER --- */}
          <div className="lg:col-span-3 h-[700px] md:h-[800px] rounded-[3rem] overflow-hidden border border-[#C6A75E]/30 shadow-2xl relative z-0">
             <HeatmapMap 
               center={currentEmirate.center} 
               zoom={currentEmirate.zoom} 
               data={DUBAI_AREAS}
             />
             
             <div className="absolute top-8 right-8 z-10 flex flex-col gap-3">
                <div className="bg-white/90 backdrop-blur-md border border-[rgba(198,167,94,0.3)] p-6 rounded-3xl shadow-2xl min-w-[200px]">
                   <p className="text-[9px] font-black text-[#C6A75E] uppercase tracking-widest mb-4 flex items-center gap-2">
                     <TrendingUp size={12} /> Hot Zones (2026)
                   </p>
                   <div className="space-y-4">
                      {DUBAI_AREAS.filter(a => a.emirate === activeEmirate).slice(0, 3).map(a => (
                        <div key={a.id} className="flex justify-between items-center group cursor-pointer">
                           <span className="text-xs font-bold text-[#3A3125] group-hover:text-[#C6A75E] transition-colors">{a.name}</span>
                           <span className="text-xs font-black text-[#C6A75E]">{a.roi}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
             <div className="p-8 bg-white border border-[rgba(198,167,94,0.3)] rounded-[2.5rem] shadow-sm">
                <h3 className="text-lg font-serif font-black mb-4 uppercase tracking-widest text-[#3A3125] flex items-center gap-3">
                   <Info size={18} className="text-[#C6A75E]" /> Map Guide
                </h3>
                <p className="text-sm text-[#5A4F40] leading-relaxed font-light">
                   Interactive nodes represent high-velocity market micro-zones. Hover to reveal yield benchmarks and institutional liquidity scores.
                </p>
             </div>

             <div className="p-8 bg-[#3A3125] text-white rounded-[2.5rem] shadow-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E] mb-2 text-center underline decoration-wavy underline-offset-4 decoration-[#C6A75E]/30 text-white">Elite Market Feed</p>
                <div className="space-y-6 mt-8">
                   {DUBAI_AREAS.filter(a => a.roi && parseFloat(String(a.roi).replace('%', '')) > 7.5).slice(0, 4).map(a => (
                     <div key={a.id} className="border-b border-white/5 pb-4 last:border-0 hover:translate-x-1 transition-transform cursor-pointer group">
                        <div className="flex justify-between items-start mb-1">
                           <h4 className="text-xs font-black uppercase text-white group-hover:text-[#C6A75E] transition-colors">{a.name}</h4>
                           <span className="text-[10px] font-black text-[#C6A75E]">{a.roi}</span>
                        </div>
                        <p className="text-[9px] text-[#A69785] tracking-wide">{String(a.category).split('/')[0]}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketHeatmapPage;
