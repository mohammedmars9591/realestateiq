"use client";

import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { 
  TrendingUp, Map as MapIcon, Zap, Loader2, Info, Search, Activity
} from 'lucide-react';
import { DUBAI_AREAS } from '../../src/data/nationalIntelligenceFeed'; 

// CRITICAL: Force dynamic import with strictly NO SSR for the map engine
const GeospatialEngine = dynamic(() => import('../../src/components/heatmap/GeospatialEngine'), { 
  ssr: false, 
  loading: () => <div className="h-full w-full bg-[#3A3125]/5 rounded-[3rem] animate-pulse flex items-center justify-center flex-col gap-4">
     <Activity className="animate-spin text-[#C6A75E] h-12 w-12" />
     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E]">Calibrating Satellite Feeds...</p>
  </div>
});

export default function MarketHeatmapPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState([25.0805, 55.1403]); // Default: Dubai Marina
  const [mapZoom, setMapZoom] = useState(13);

  // Hydration Guard: Prevents ANY rendering until the browser is confirmed
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Filter intelligence nodes based on search
  const filteredNodes = useMemo(() => {
    return DUBAI_AREAS.filter(area => 
      area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.category?.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 15); // Show top 15 matches for feed performance
  }, [searchQuery]);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-[1500px] mx-auto">
        
        {/* === HEADER SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-[#C6A75E] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg shadow-[#C6A75E]/20">
                Institutional Intel
              </span>
              <div className="flex items-center gap-1.5 text-[#C6A75E]">
                <Activity size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Live 2026 Feed active</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[#3A3125] leading-none tracking-tighter">
              Geospatial <br/>
              <span className="text-[#C6A75E]">Intelligence.</span>
            </h1>
          </div>
          
          <div className="max-w-md text-right">
             <p className="text-[#A69785] text-lg font-medium leading-relaxed mb-6">
               Visualizing high-velocity ROI nodes across the UAE's institutional real estate landscape.
             </p>
             <div className="flex gap-2 justify-end">
                {['Capital Appreciation', 'Rental Yield', 'Exit Velocity'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#3A3125]/5 text-[#3A3125] text-[9px] font-black uppercase tracking-widest rounded-md">
                    {tag}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* === MAIN PLATFORM GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px]">
          
          {/* SEARCH & FEED SIDEBAR (4 COLUMNS) */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full overflow-hidden">
            
            {/* SEARCH ANCHOR */}
            <div className="bg-[#3A3125] p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Search size={120} />
               </div>
               <h3 className="text-white text-xs font-black uppercase tracking-[0.4em] mb-6 relative z-10">Intelligence Search</h3>
               <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Filter by area, builder or yield..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C6A75E]/50 transition-all font-medium"
                 />
                 <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40" size={20} />
               </div>
            </div>

            {/* HIGH-VELOCITY FEED */}
            <div className="flex-1 bg-white border border-[#3A3125]/10 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-[#3A3125] text-xs font-black uppercase tracking-[0.3em]">Performance Feed</h3>
                 <span className="text-[10px] font-bold text-[#A69785] bg-[#3A3125]/5 px-2 py-1 rounded">SORT: ROI %</span>
              </div>
              
              <div className="space-y-6">
                {filteredNodes.map((node) => (
                  <button 
                    key={node.id}
                    onClick={() => {
                        // In a real map we would pan to the coordinates. 
                        // For now we set center if we knew where the area was
                        // setMapCenter([node.lat, node.lng]);
                    }}
                    className="w-full text-left p-5 rounded-3xl hover:bg-[#3A3125]/5 transition-all border border-transparent hover:border-[#C6A75E]/20 group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-[#3A3125] font-serif font-bold text-lg group-hover:text-[#C6A75E] transition-colors">{node.name}</h4>
                      <div className="flex items-center gap-1 text-[#C6A75E]">
                        <TrendingUp size={14} />
                        <span className="text-sm font-black tracking-tighter">{node.roi}</span>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-[#A69785] uppercase tracking-[0.2em] mb-4">{node.category}</p>
                    <div className="w-full bg-[#3A3125]/5 h-1 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-[#C6A75E] to-[#3A3125] rounded-full transition-all duration-1000"
                         style={{ width: `${parseFloat(node.roi) * 8}%` }}
                       ></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MAP CANVAS (8 COLUMNS) */}
          <div className="lg:col-span-8 relative rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl bg-white group">
            <div className="absolute inset-0 z-0">
               <GeospatialEngine 
                 center={mapCenter} 
                 zoom={mapZoom} 
                 data={DUBAI_AREAS} 
               />
            </div>

            {/* OVERLAY: MAP CONTROLS */}
            <div className="absolute top-10 left-10 flex flex-col gap-3 z-10 pointer-events-none">
               {[
                 { icon: <MapIcon size={20} />, label: 'Satellite View' },
                 { icon: <Zap size={20} />, label: 'ROI Heat-Overlay' },
                 { icon: <Info size={20} />, label: 'Market Meta' }
               ].map((btn, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 pr-6 rounded-2xl shadow-xl shadow-[#3A3125]/10 border border-[#3A3125]/5 pointer-events-auto cursor-pointer hover:bg-[#3A3125] hover:text-white transition-all transform hover:scale-105 group">
                    <div className="text-[#C6A75E] group-hover:text-white transition-colors">
                      {btn.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{btn.label}</span>
                 </div>
               ))}
            </div>

            {/* OVERLAY: STATUS INDICATOR */}
            <div className="absolute bottom-10 right-10 bg-[#3A3125] text-white p-6 rounded-[2rem] shadow-2xl z-10 pointer-events-auto hover:bg-[#C6A75E] transition-colors cursor-help">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Activity size={24} className="animate-pulse text-[#C6A75E]" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">Global Health</h5>
                    <p className="text-xl font-black tracking-tighter">98.4% ALPHA</p>
                  </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
