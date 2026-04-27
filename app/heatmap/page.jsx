"use client";

import React, { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { 
  TrendingUp, Map as MapIcon, Zap, Loader2, Info, Search, Activity
} from 'lucide-react';
import { DUBAI_AREAS } from '../../src/data/emiratesData'; 

// Dynamic Map Component (SSR: false is critical for Leaflet)
const HeatmapMap = dynamic(() => import('../../src/components/heatmap/HeatmapMap'), { 
  ssr: false, 
  loading: () => <div className="h-full w-full bg-[#3A3125]/5 rounded-[3rem] animate-pulse flex items-center justify-center flex-col gap-4">
     <Activity className="animate-spin text-[#C6A75E] h-12 w-12" />
     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E]">Calibrating Satellite Feeds...</p>
  </div>
});

const MarketHeatmapPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeEmirate, setActiveEmirate] = useState('Dubai');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const EMIRATES = [
    { name: 'Dubai', center: [25.08, 55.20], zoom: 11 },
    { name: 'Abu Dhabi', center: [24.45, 54.40], zoom: 11 },
    { name: 'Ras Al Khaimah', center: [25.67, 55.75], zoom: 11 },
  ];

  const currentEmirate = EMIRATES.find(e => e.name === activeEmirate) || EMIRATES[0];

  const filteredAreas = useMemo(() => {
    return DUBAI_AREAS.filter(a => 
       a.emirate === activeEmirate && 
       a.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeEmirate, searchQuery]);

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
                      onClick={() => {
                        setActiveEmirate(e.name);
                        setSearchQuery('');
                      }}
                      className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeEmirate === e.name ? "bg-[#3A3125] text-[#C6A75E] shadow-lg" : "text-[#7A6E60] hover:bg-[#FDFBF7]"}`}
                    >
                      {e.name}
                    </button>
                 ))}
              </div>
           </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* --- SIDEBAR SEARCH & INTEL --- */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
             <div className="p-8 bg-white border border-[rgba(198,167,94,0.3)] rounded-[2.5rem] shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-sm font-serif font-black mb-6 uppercase tracking-widest text-[#3A3125] flex items-center gap-3">
                      <Search size={18} className="text-[#C6A75E]" /> Locate Node
                   </h3>
                   <div className="relative mb-8">
                      <input 
                         type="text" 
                         placeholder="Search area..." 
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                         className="w-full bg-[#FDFBF7] border border-[rgba(198,167,94,0.2)] rounded-2xl px-5 py-4 text-xs font-bold text-[#3A3125] focus:outline-none focus:border-[#C6A75E] transition-all"
                      />
                   </div>
                   <div className="max-h-[300px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                      {filteredAreas.length > 0 ? filteredAreas.slice(0, 10).map(a => (
                         <div key={a.id} className="flex justify-between items-center p-3 hover:bg-[#FDFBF7] rounded-xl transition-all cursor-pointer border border-transparent hover:border-[#C6A75E]/20">
                            <span className="text-[11px] font-bold text-[#5A4F40]">{a.name}</span>
                            <span className="text-[10px] font-black text-[#C6A75E]">{a.roi}</span>
                         </div>
                      )) : (
                         <p className="text-[10px] font-bold text-[#A69785] text-center py-4 italic">No matching nodes found</p>
                      )}
                   </div>
                </div>
             </div>

             <div className="p-8 bg-[#3A3125] text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10"><Activity size={60} /></div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E] mb-8">High-Velocity Feed</p>
                <div className="space-y-6">
                   {DUBAI_AREAS.filter(a => a.roi && parseFloat(String(a.roi).replace('%', '')) > 7.8).slice(0, 4).map(a => (
                     <div key={a.id} className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-1">
                           <h4 className="text-[11px] font-black uppercase text-white group-hover:text-[#C6A75E] transition-colors">{a.name}</h4>
                           <span className="text-[10px] font-black text-[#C6A75E]">{a.roi}</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                           <div className="h-full bg-[#C6A75E] transition-all duration-1000" style={{ width: `${parseFloat(String(a.roi).replace('%', '')) * 10}%` }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* --- MAP CONTAINER --- */}
          <div className="lg:col-span-3 h-[700px] md:h-[800px] rounded-[3rem] overflow-hidden border border-[#C6A75E]/30 shadow-2xl relative z-0 order-1 lg:order-2">
             <HeatmapMap 
               center={currentEmirate.center} 
               zoom={currentEmirate.zoom} 
               data={DUBAI_AREAS}
             />
             
             <div className="absolute top-8 right-8 z-10">
                <div className="bg-white/90 backdrop-blur-md border border-[rgba(198,167,94,0.3)] px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[10px] font-black text-[#3A3125] uppercase tracking-widest">Active Data Stream: {activeEmirate}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketHeatmapPage;
