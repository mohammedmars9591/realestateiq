"use client";

import React, { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { 
  TrendingUp, Activity, Map as MapIcon, Zap 
} from 'lucide-react';
import { DUBAI_AREAS } from '../../src/data/emiratesData'; 

// Dynamic components with proper loading states
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { 
  ssr: false, 
  loading: () => <div className="h-full w-full bg-[#1C1C22]/5 animate-pulse rounded-[3rem]" /> 
});
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const MarketMap = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [viewMode, setViewMode] = useState('live');
  const [mapCenter, setMapCenter] = useState([25.08, 55.20]);
  const [mapZoom, setMapZoom] = useState(10);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const LOCATIONS = useMemo(() => ({
    'dubai-marina': [25.0805, 55.1403],
    'business-bay': [25.1850, 55.2750],
    'downtown-dubai': [25.1972, 55.2744],
    'jvc': [25.0581, 55.2091],
    'palm-jumeirah': [25.1124, 55.1390],
    'yas-island': [24.4942, 54.6074],
    'al-marjan-island': [25.6667, 55.7500],
  }), []);

  const EMIRATES = [
    { name: 'Dubai', center: [25.08, 55.25], zoom: 10 },
    { name: 'Abu Dhabi', center: [24.45, 54.40], zoom: 11 },
    { name: 'Ras Al Khaimah', center: [25.67, 55.75], zoom: 11 },
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12">
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#3A3125] mb-12">
          Market <span className="gold-gradient">Alpha Map</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 h-[700px] rounded-[3rem] overflow-hidden border border-[#C6A75E]/20 shadow-2xl relative z-0">
             <MapContainer center={mapCenter} zoom={mapZoom} className="h-full w-full">
               <TileLayer
                 attribution='&copy; CARTO'
                 url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
               />
               {Object.entries(LOCATIONS).map(([id, pos]) => {
                 const areaData = DUBAI_AREAS.find(a => a.id === id);
                 if (!areaData) return null;
                 return (
                   <CircleMarker key={id} center={pos} radius={12} pathOptions={{ color: '#C6A75E', fillColor: '#C6A75E', fillOpacity: 0.8 }}>
                     <Popup>
                       <div className="p-2">
                         <h4 className="font-bold">{areaData.name}</h4>
                         <p className="text-[#C6A75E]">{areaData.roi} Yield</p>
                       </div>
                     </Popup>
                   </CircleMarker>
                 );
               })}
             </MapContainer>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
             <div className="p-8 bg-[#3A3125] text-white rounded-[2.5rem]">
                <h3 className="text-xl font-serif font-bold mb-4 uppercase tracking-widest text-[#C6A75E]">Intelligence Feed</h3>
                <p className="text-sm opacity-60">Verified institutional data streaming from UAE nodes.</p>
             </div>
             {DUBAI_AREAS.slice(0, 4).map(a => (
               <div key={a.id} className="p-6 bg-white border border-[#C6A75E]/10 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-[#3A3125]">{a.name}</h4>
                  <p className="text-xs text-[#C6A75E] font-black uppercase mt-1">{a.roi} Net Yield</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketMap;
