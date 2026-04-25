"use client";

import React, { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DUBAI_AREAS } from "../../data/emiratesData";

const HeatmapMap = ({ center, zoom }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const LOCATIONS = useMemo(() => ({
    'dubai-marina': [25.0805, 55.1403],
    'business-bay': [25.1850, 55.2750],
    'downtown-dubai': [25.1972, 55.2744],
    'jvc': [25.0581, 55.2091],
    'palm-jumeirah': [25.1124, 55.1390],
    'yas-island': [24.4942, 54.6074],
    'al-marjan-island': [25.6667, 55.7500],
    'dubai-hills-estate': [25.1105, 55.2635],
    'jlt': [25.0673, 55.1458],
  }), []);

  if (!mounted || typeof window === 'undefined') return null;

  return (
    <MapContainer 
      key={`${center[0]}-${center[1]}`}
      center={center} 
      zoom={zoom} 
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {Object.entries(LOCATIONS).map(([id, pos]) => {
        const areaData = DUBAI_AREAS.find(a => String(a.id).toLowerCase() === id.toLowerCase());
        if (!areaData) return null;
        
        return (
          <CircleMarker 
            key={id} 
            center={pos} 
            radius={15} 
            pathOptions={{ 
              color: '#C6A75E', 
              fillColor: '#C6A75E', 
              fillOpacity: 0.6,
              weight: 3
            }}
          >
            <Popup className="premium-popup">
              <div className="p-3 min-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] animate-pulse"></div>
                   <span className="text-[9px] font-black uppercase text-[#C6A75E] tracking-widest">Active Market Node</span>
                </div>
                <h4 className="text-sm font-serif font-bold text-[#3A3125] mb-1">{areaData.name}</h4>
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-[10px] font-bold text-[#A69785] uppercase tracking-wide">Net Yield</p>
                      <p className="text-xl font-black text-[#3A3125]">{areaData.roi}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-bold text-[#A69785] uppercase tracking-wide">Category</p>
                      <p className="text-[10px] font-bold text-[#3A3125]">{areaData.category?.split('/')[0] || "Luxury"}</p>
                   </div>
                </div>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default HeatmapMap;
