import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';
import { TrendingUp, Activity, ArrowUpRight, Flame, Building2, MapPin, Layers, Clock, Eye, Zap } from 'lucide-react';
import SEO from '../components/SEO';

// --- IMPORT REAL DATA ---
import { DUBAI_AREAS } from '../data/areaData';

// --- 1. HELPER: MAP CONTROLLER (HANDLES ZOOM/PAN) ---
const MapController = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.5 });
    }
  }, [center, zoom, map]);
  return null;
};

// --- 2. HEATMAP LAYER COMPONENT ---
const HeatmapLayer = ({ points }) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    
    // Clean up previous layers
    map.eachLayer((layer) => {
      if (layer._heat) {
        map.removeLayer(layer);
      }
    });

    // Intense Gradient for Light Map
    const heat = L.heatLayer(points, {
      radius: 35,
      blur: 20,
      maxZoom: 12,
      minOpacity: 0.5,
      gradient: { 
        0.2: '#3b82f6', // Blue (Cool)
        0.4: '#06b6d4', // Cyan
        0.6: '#22c55e', // Green (Active)
        0.8: '#f59e0b', // Orange (Hot)
        1.0: '#ef4444'  // Red (Very Hot)
      }
    });
    heat.addTo(map);
    return () => { map.removeLayer(heat); };
  }, [map, points]);
  return null;
};

// --- MAIN PAGE COMPONENT ---
const Heatmapview = () => {
  const [activeTab, setActiveTab] = useState('areas');
  const [viewMode, setViewMode] = useState('live');    
  const [mapCenter, setMapCenter] = useState([25.12, 55.20]); 
  const [mapZoom, setMapZoom] = useState(11);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- 1. EXPANDED MAP LOCATIONS ---
  const LOCATIONS = {
    // Core Areas
    'dubai-marina': [25.0805, 55.1403],
    'downtown-dubai': [25.1972, 55.2744],
    'jvc': [25.0581, 55.2091],
    'business-bay': [25.1837, 55.2666],
    'palm-jumeirah': [25.1124, 55.1390],
    
    // New Residential Hubs
    'dubai-hills': [25.1100, 55.2600],
    'meydan': [25.1600, 55.3000],
    'damac-hills': [25.0250, 55.2350],
    'jlt': [25.0700, 55.1450],
    'al-furjan': [25.0400, 55.1500],
    'discovery-gardens': [25.0350, 55.1300],

    // Future 2026 Hotspots
    'dubai-south': [24.9450, 55.1200],
    'creek-harbour': [25.1929, 55.3489],
    'palm-jebel-ali': [25.0050, 54.9900],
    'dubai-islands': [25.2900, 55.3300],
    'expo-city': [24.9600, 55.1500],
  };

  // --- 2. EXPANDED HEATMAP DATASETS ---
  
  // LIVE: Current Rental/Sales Activity
  const liveHeatmapPoints = [
    [25.0805, 55.1403, 1.0], [25.0815, 55.1413, 0.9], // Marina (Hot)
    [25.1972, 55.2744, 1.0], [25.1982, 55.2754, 1.0], // Downtown (Hot)
    [25.0581, 55.2091, 0.9], [25.0600, 55.2150, 0.8], // JVC (Very Active)
    [25.1837, 55.2666, 0.8], [25.1850, 55.2680, 0.8], // Business Bay
    [25.1100, 55.2600, 0.7], // Dubai Hills (Steady)
    [25.0700, 55.1450, 0.8], // JLT
    [25.0350, 55.1300, 0.6], // Discovery Gardens
    [25.0250, 55.2350, 0.6], // Damac Hills
  ];

  // FUTURE: 2026 Growth Forecast
  const forecastHeatmapPoints = [
    [24.9450, 55.1200, 1.0], // Dubai South (Explosive - Airport)
    [25.0050, 54.9900, 0.9], // Palm Jebel Ali (New Prime)
    [25.1929, 55.3489, 0.9], // Creek Harbour (Peak Delivery)
    [25.2900, 55.3300, 0.8], // Dubai Islands
    [25.1600, 55.3000, 0.7], // Meydan (D3 Extension)
    [25.0400, 55.1500, 0.7], // Al Furjan (Expo Spillover)
    [24.9600, 55.1500, 0.8], // Expo City
  ];

  // --- 3. SIDEBAR LISTS ---
  const liveAreas = [
    { id: 'jvc', name: "JVC", roi: "8.5%", vol: "High" },
    { id: 'dubai-marina', name: "Dubai Marina", roi: "6.5%", vol: "Very High" },
    { id: 'downtown-dubai', name: "Downtown Dubai", roi: "5.8%", vol: "High" },
    { id: 'jlt', name: "JLT", roi: "7.2%", vol: "Med-High" },
    { id: 'dubai-hills', name: "Dubai Hills", roi: "6.0%", vol: "Med" },
    { id: 'discovery-gardens', name: "Discovery Gardens", roi: "9.0%", vol: "High (Budget)" },
  ];

  const trendingAreas2026 = [
    { id: 'dubai-south', name: "Dubai South", score: "9.8/10", reason: "Airport Expansion ($35B)", type: "Appreciation" },
    { id: 'palm-jebel-ali', name: "Palm Jebel Ali", score: "9.5/10", reason: "New Luxury Coastline", type: "Luxury" },
    { id: 'creek-harbour', name: "Dubai Creek Hrb", score: "9.2/10", reason: "Next Downtown", type: "Growth" },
    { id: 'meydan', name: "Meydan", score: "8.8/10", reason: "Metro Blue Line", type: "Connectivity" },
    { id: 'al-furjan', name: "Al Furjan", score: "8.5/10", reason: "Expo City Growth", type: "Value" },
  ];

  const handleFocus = (coords) => {
    if (coords) {
      setMapCenter(coords);
      setMapZoom(13);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title="Interactive ROI Heatmap & 2026 Forecast | EstateIQ" 
        description="Visualize Dubai's real estate hotspots. Switch between current transaction volume and 2026 future growth predictions."
      />

      {/* HEADER */}
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 flex items-center gap-3">
              <Activity className="text-blue-600" size={40} />
              Market <span className="text-blue-600">Intelligence</span>
            </h1>
            <p className="text-slate-500 mt-2">
              Visualize transaction density. Switch modes to see <strong className="text-red-600">Future 2026 Predictions</strong>.
            </p>
          </div>

          {/* VIEW MODE TOGGLE */}
          <div className="bg-white border border-slate-200 p-1.5 rounded-xl flex shadow-sm">
            <button 
              onClick={() => { setViewMode('live'); setActiveTab('areas'); setMapZoom(11); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${viewMode === 'live' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Flame size={16} /> Live Volume
            </button>
            <button 
              onClick={() => { setViewMode('future'); setActiveTab('trending'); setMapZoom(10); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${viewMode === 'future' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Eye size={16} /> 2026 FutureScope
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* === LEFT: THE MAP === */}
          {/* Replaced 'border-white' with 'border-slate-200' and removed dark styling */}
          <div className="lg:col-span-3 h-[600px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative z-0 bg-slate-100">
            <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false} className="h-full w-full">
              {/* UPDATED TO LIGHT MAP THEME */}
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <MapController center={mapCenter} zoom={mapZoom} />
              
              <HeatmapLayer points={viewMode === 'live' ? liveHeatmapPoints : forecastHeatmapPoints} />
              
              {/* Markers for Future Areas */}
              {viewMode === 'future' && trendingAreas2026.map(area => (
                 <CircleMarker 
                   key={area.id} 
                   center={LOCATIONS[area.id]} 
                   radius={14} 
                   pathOptions={{ color: 'white', fillColor: '#4f46e5', fillOpacity: 0.9, weight: 2 }}
                 >
                    <Popup className="font-bold">
                      <div className="text-center">
                        <div className="text-indigo-700 text-sm mb-1">{area.name}</div>
                        <div className="text-xs text-slate-500">{area.reason}</div>
                      </div>
                    </Popup>
                 </CircleMarker>
              ))}

            </MapContainer>

            {/* Map Legend (Light Mode Compatible) */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur text-slate-800 p-4 rounded-xl z-[1000] border border-slate-200 text-xs shadow-xl">
              <div className="font-bold mb-2 uppercase text-slate-400">
                {viewMode === 'live' ? 'Volume Intensity' : 'Growth Potential'}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${viewMode === 'live' ? 'bg-red-500' : 'bg-indigo-600'}`}></span> 
                {viewMode === 'live' ? 'High Volume' : 'Explosive Growth'}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span> 
                {viewMode === 'live' ? 'Moderate Activity' : 'Steady Appreciation'}
              </div>
            </div>
          </div>

          {/* === RIGHT: INTELLIGENCE SIDEBAR === */}
          <div className="lg:col-span-1 flex flex-col h-[600px]">
             
             {/* SIDEBAR HEADER */}
             <div className="bg-white border border-slate-200 p-4 rounded-xl mb-4 shadow-sm">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  {viewMode === 'live' ? <TrendingUp size={18} className="text-blue-600"/> : <Clock size={18} className="text-indigo-600"/>}
                  {viewMode === 'live' ? 'Market Movers' : '2026 Watchlist'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {viewMode === 'live' ? 'Top performing areas right now.' : 'Areas predicted to spike in value.'}
                </p>
             </div>

             {/* SCROLLABLE LIST */}
             <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                
                {/* MODE 1: LIVE AREAS */}
                {viewMode === 'live' && liveAreas.map((area, index) => (
                  <div 
                    key={area.id} 
                    onClick={() => handleFocus(LOCATIONS[area.id])}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{area.name}</h3>
                       <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-100">Live</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-2">
                       <span className="font-bold text-slate-700">{area.roi} Yield</span>
                       <span className="text-slate-300">|</span>
                       <span className="text-slate-500">Vol: {area.vol}</span>
                    </div>
                  </div>
                ))}

                {/* MODE 2: FUTURE 2026 FORECAST */}
                {viewMode === 'future' && trendingAreas2026.map((area, index) => (
                   <div 
                     key={area.id} 
                     onClick={() => handleFocus(LOCATIONS[area.id])}
                     className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm cursor-pointer hover:bg-indigo-100 hover:border-indigo-300 transition-all group"
                   >
                     <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{area.name}</h3>
                        <span className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded">
                          {area.type}
                        </span>
                     </div>
                     <div className="text-xs text-indigo-800 font-medium mb-2 flex items-center gap-1">
                       <Zap size={12} fill="currentColor" /> {area.reason}
                     </div>
                     <div className="w-full bg-indigo-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-full rounded-full" style={{ width: '92%' }}></div>
                     </div>
                     <div className="text-[10px] text-indigo-500 text-right mt-1 font-bold">Growth Probability: High</div>
                   </div>
                ))}

             </div>

             {/* BOTTOM AI INSIGHT */}
             <div className="mt-4 bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-sm">
               <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase text-xs mb-2">
                 <ArrowUpRight size={14} /> Analyst Verdict
               </div>
               <p className="text-xs text-slate-300 leading-relaxed">
                 {viewMode === 'live' 
                   ? "JVC and Discovery Gardens are seeing record rental transaction volumes in Q4 due to affordability migration." 
                   : "Dubai South & Al Furjan are the clear winners for 2026 capital appreciation due to the $35B airport expansion."}
               </p>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Heatmapview;