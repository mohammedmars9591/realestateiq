"use client";

import React, { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { 
  TrendingUp, Activity, ArrowUpRight, Flame, Clock, Eye, Zap, 
  Map as MapIcon, Layers, Percent, Box, ChevronRight, Target
} from 'lucide-react';
import { 
  LineChart, Line, ResponsiveContainer 
} from 'recharts';

import { DUBAI_AREAS } from '../src/data/emiratesData'; 

// Dynamic import for Leaflet components to prevent SSR errors
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then(mod => mod.Tooltip), { ssr: false });
const MapControllerComp = dynamic(() => Promise.resolve(({ center, zoom }) => {
  const { useMap } = require('react-leaflet');
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.5 });
    }
  }, [center, zoom, map]);
  return null;
}), { ssr: false });

const HeatmapLayerComp = dynamic(() => Promise.resolve(({ points, mode }) => {
  const { useMap } = require('react-leaflet');
  const L = require('leaflet');
  require('leaflet.heat');
  const map = useMap();

  useEffect(() => {
    if (!map || !L.heatLayer) return;
    
    map.eachLayer((layer) => {
      if (layer._heat) map.removeLayer(layer);
    });

    const GRADIENTS = {
      live: { 0.2: '#C6A75E', 0.4: '#D4A95F', 0.6: '#eab308', 0.8: '#f97316', 1.0: '#ef4444' },
      roi: { 0.2: '#06b6d4', 0.4: '#0891b2', 0.6: '#10b981', 0.8: '#059669', 1.0: '#C6A75E' },
      supply: { 0.2: '#6366f1', 0.4: '#818cf8', 0.6: '#a855f7', 0.8: '#ec4899', 1.0: '#f43f5e' }
    };

    const heat = L.heatLayer(points, {
      radius: 35,
      blur: 20,
      maxZoom: 10,
      minOpacity: 0.5,
      gradient: GRADIENTS[mode] || GRADIENTS.live
    });
    
    heat.addTo(map);
    heat._heat = true;
    return () => { if (map.hasLayer(heat)) map.removeLayer(heat); };
  }, [map, points, mode]);

  return null;
}), { ssr: false });

const MiniTrend = ({ data }) => (
  <div className="h-16 w-32 mt-2">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke="#C6A75E" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const MarketMap = () => {
  const [viewMode, setViewMode] = useState('live');
  const [mapCenter, setMapCenter] = useState([25.08, 55.20]); 
  const [mapZoom, setMapZoom] = useState(10); 
  const [activeEmirate, setActiveEmirate] = useState('Dubai');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const LOCATIONS = useMemo(() => ({
    'dubai-marina': [25.0805, 55.1403],
    'business-bay': [25.1850, 55.2750],
    'downtown-dubai': [25.1972, 55.2744],
    'jvc': [25.0581, 55.2091],
    'palm-jumeirah': [25.1124, 55.1390],
    'yas-island': [24.4942, 54.6074],
    'al-marjan-island': [25.6667, 55.7500],
  }), []);

  const heatmapPoints = useMemo(() => {
    const points = {
      live: [
        [25.1850, 55.2750, 1.0],
        [25.0805, 55.1403, 0.9],
        [25.1972, 55.2744, 1.0],
        [25.6667, 55.7500, 1.0],
      ],
      roi: [
        [25.0581, 55.2091, 1.0],
        [25.1850, 55.2750, 0.9],
      ]
    };
    return points[viewMode] || points.live;
  }, [viewMode]);

  const EMIRATES = [
    { name: 'Dubai', center: [25.08, 55.25], zoom: 10 },
    { name: 'Abu Dhabi', center: [24.45, 54.40], zoom: 11 },
    { name: 'Ras Al Khaimah', center: [25.67, 55.75], zoom: 11 },
  ];

  const handleEmirateChange = (e) => {
    const cityName = e.target.value;
    const city = EMIRATES.find(c => c.name === cityName);
    if (city) {
      setMapCenter(city.center);
      setMapZoom(city.zoom);
      setActiveEmirate(cityName);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] pb-20 fade-in">
      
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
            <div>
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#3A3125] leading-none tracking-tighter mb-4">
                Market <span className="gold-gradient">Alpha Map</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4">
               <div className="relative group min-w-[200px]">
                  <select 
                    onChange={handleEmirateChange}
                    className="w-full appearance-none bg-white/60 backdrop-blur-md border border-[rgba(198,167,94,0.3)] text-[#3A3125] px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest focus:ring-2 focus:ring-[#C6A75E] outline-none shadow-xl pr-14 cursor-pointer"
                  >
                    {EMIRATES.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}
                  </select>
                  <MapIcon className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C6A75E]" size={18} />
               </div>

               <div className="flex bg-white/40 backdrop-blur-md p-1.5 rounded-2xl border border-white shadow-xl">
                  {['live', 'roi', 'supply'].map(mode => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        viewMode === mode 
                        ? 'bg-[#3A3125] text-[#F4DFA0]' 
                        : 'text-[#7A6E60]'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 h-[750px] rounded-[3rem] overflow-hidden shadow-2xl border border-white relative z-0">
               {/* Prevent server-side rendering of the map */}
               {typeof window !== 'undefined' && (
                 <MapContainer center={mapCenter} zoom={mapZoom} className="h-full w-full">
                   <TileLayer
                     attribution='&copy; CARTO'
                     url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                   />
                   <MapControllerComp center={mapCenter} zoom={mapZoom} />
                   <HeatmapLayerComp points={heatmapPoints} mode={viewMode} />

                   {Object.entries(LOCATIONS).map(([id, pos]) => {
                     const areaData = DUBAI_AREAS.find(a => a.id === id);
                     if (!areaData) return null;
                     return (
                       <CircleMarker 
                         key={id} 
                         center={pos} 
                         radius={10}
                         pathOptions={{ color: 'white', fillColor: '#C6A75E', fillOpacity: 0.9 }}
                       >
                         <Popup>
                            <div className="p-2 w-48">
                               <h4 className="text-sm font-black text-[#3A3125]">{areaData.name}</h4>
                               <p className="text-xs text-emerald-600 font-bold">{areaData.roi} Yield</p>
                            </div>
                         </Popup>
                       </CircleMarker>
                     );
                   })}
                 </MapContainer>
               )}
            </div>

            <div className="lg:col-span-1 flex flex-col gap-6">
               <div className="p-10 bg-[#3A3125] rounded-[3rem] text-white">
                  <h3 className="text-2xl font-serif font-black mb-2 uppercase tracking-tighter">Market <br/>Pulse</h3>
                  <p className="text-sm opacity-40">Direct-to-Node institutional data feed.</p>
               </div>

               <div className="flex-1 overflow-y-auto space-y-4 luxury-scroll">
                  {DUBAI_AREAS.slice(0, 5).map((area) => (
                    <div key={area.id} className="p-6 bg-white/40 border border-white rounded-[2rem]">
                       <h4 className="text-lg font-black text-[#3A3125]">{area.name}</h4>
                       <p className="text-[10px] text-[#C6A75E] font-black uppercase tracking-widest">{area.roi} Net Yield</p>
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

export default MarketMap;
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
 Broadway
