"use client";
import React, { useEffect, useState, useMemo } from "react";
// We import Leaflet CSS here for the browser
import "leaflet/dist/leaflet.css";

// The core problem in Next.js 14 is often the top-level import of Leaflet-dependent libs.
// We will dynamically import react-leaflet components inside the component to ensure total SSR isolation.
let MapComponents = null;

const GeospatialEngine = ({ center, zoom, data }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load react-leaflet only on the client
    const loadLeaflet = async () => {
      const L = await import("leaflet");
      const ReactLeaflet = await import("react-leaflet");
      
      // Fix for Leaflet default icons in Next.js
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      MapComponents = ReactLeaflet;
      setIsReady(true);
    };

    loadLeaflet();
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

  if (!isReady || !MapComponents) {
    return (
      <div className="h-full w-full bg-[#3A3125]/5 animate-pulse flex items-center justify-center">
         <p className="text-[10px] font-black uppercase tracking-widest text-[#C6A75E]">Initializing Canvas...</p>
      </div>
    );
  }

  const { MapContainer, TileLayer, CircleMarker, Popup } = MapComponents;

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
        const areaData = (data || []).find(a => String(a.id).toLowerCase() === id.toLowerCase());
        if (!areaData) return null;
        
        return (
          <CircleMarker 
            key={id} 
            center={pos} 
            radius={20} 
            pathOptions={{ 
              color: '#C6A75E', 
              fillColor: '#C6A75E', 
              fillOpacity: 0.8,
              weight: 4
            }}
          >
            <Popup className="premium-popup">
              <div className="p-3 min-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-ping"></div>
                   <span className="text-[10px] font-black uppercase text-[#C6A75E] tracking-tighter">Live Market Node</span>
                </div>
                <h4 className="text-md font-serif font-bold text-[#3A3125] mb-2">{areaData.name}</h4>
                <div className="grid grid-cols-2 gap-4 border-t border-[#C6A75E]/10 pt-3">
                   <div>
                      <p className="text-[9px] font-black text-[#A69785] uppercase tracking-widest mb-1">Yield</p>
                      <p className="text-lg font-black text-[#3A3125]">{areaData.roi}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[9px] font-black text-[#A69785] uppercase tracking-widest mb-1">Status</p>
                      <p className="text-[11px] font-bold text-[#C6A75E] uppercase tracking-tighter">Alpha Zone</p>
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

export default GeospatialEngine;
