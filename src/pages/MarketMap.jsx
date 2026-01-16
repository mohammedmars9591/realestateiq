import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';
import { TrendingUp, Activity, ArrowUpRight, Flame, Clock, Eye, Zap } from 'lucide-react';
import SEO from '../components/SEO';

// --- IMPORT NATIONAL DATA (ALL 7 EMIRATES) ---
import { DUBAI_AREAS } from '../data/emiratesData'; 

// --- 1. HELPER: MAP CONTROLLER ---
const MapController = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.5 });
    }
  }, [center, zoom, map]);
  return null;
};

// --- 2. HEATMAP LAYER ---
const HeatmapLayer = ({ points }) => {
  const map = useMap();
  useEffect(() => {
    if (!map || !L.heatLayer) return;
    
    // Clean up previous layers
    map.eachLayer((layer) => {
      if (layer._heat) {
        map.removeLayer(layer);
      }
    });

    const heat = L.heatLayer(points, {
      radius: 40, // Larger radius for country-wide view
      blur: 25,
      maxZoom: 10,
      minOpacity: 0.4,
      gradient: { 
        0.2: '#3b82f6', 
        0.4: '#06b6d4', 
        0.6: '#22c55e', 
        0.8: '#f59e0b', 
        1.0: '#ef4444' 
      }
    });
    heat.addTo(map);
    heat._heat = true;
    return () => { map.removeLayer(heat); };
  }, [map, points]);
  return null;
};

// --- MAIN PAGE COMPONENT ---
const MarketMap = () => {
  const [viewMode, setViewMode] = useState('live');    
  // Default Center: Zoomed out to see Abu Dhabi -> RAK
  const [mapCenter, setMapCenter] = useState([25.0, 55.6]); 
  const [mapZoom, setMapZoom] = useState(9); 

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- 1. NATIONAL MAP LOCATIONS ---
  const LOCATIONS = {
    // DUBAI
    'dubai-marina': [25.0805, 55.1403],
    'jvc': [25.0581, 55.2091],
    'downtown-dubai': [25.1972, 55.2744],
    'dubai-south': [24.9450, 55.1200],

    // ABU DHABI
    'yas-island': [24.4942, 54.6074],
    'saadiyat-island': [24.5420, 54.4370],
    'al-reem-island': [24.4960, 54.4050],

    // NORTHERN EMIRATES
    'al-marjan-island': [25.6667, 55.7500], // RAK
    'aljada': [25.3130, 55.4590],           // Sharjah
    'ajman-corniche': [25.4190, 55.4410],
    'mistral-uaq': [25.5300, 55.5500],
    'al-aqah': [25.5100, 56.3600],          // Fujairah
  };

  // --- 2. HEATMAP DATASETS (NATIONAL) ---
  
  // LIVE: Transaction Activity
  const liveHeatmapPoints = [
    // Dubai
    [25.0805, 55.1403, 1.0], // Marina (Hot)
    [25.0581, 55.2091, 0.9], // JVC
    // Abu Dhabi
    [24.4942, 54.6074, 0.8], // Yas Island
    // RAK
    [25.6667, 55.7500, 1.0], // Al Marjan (Casino hype)
    // Sharjah
    [25.3130, 55.4590, 0.7], // Aljada
  ];

  // FUTURE: 2030 Growth Forecast
  const forecastHeatmapPoints = [
    [25.6667, 55.7500, 1.0], // RAK (Explosive)
    [24.9450, 55.1200, 1.0], // Dubai South (Airport)
    [24.5420, 54.4370, 0.9], // Saadiyat (Culture)
    [25.0050, 54.9900, 0.9], // Palm Jebel Ali
  ];

  // --- 3. DYNAMIC SIDEBAR LIST ---
  // Create a quick list of top areas from the imported data
  const highlightedAreas = DUBAI_AREAS.filter(area => 
    ['jvc', 'al-marjan-island', 'yas-island', 'dubai-south', 'ajman-corniche'].includes(area.id)
  );

  const handleFocus = (id) => {
    if (LOCATIONS[id]) {
      setMapCenter(LOCATIONS[id]);
      setMapZoom(12);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title="UAE Real Estate Heatmap | EstateIQ" 
        description="Visualize investment hotspots across Dubai, Abu Dhabi, RAK, and Sharjah."
      />

      {/* HEADER */}
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 flex items-center gap-3">
              <Activity className="text-blue-600" size={40} />
              National <span className="text-blue-600">Intelligence</span>
            </h1>
            <p className="text-slate-500 mt-2">
              Tracking <strong className="text-slate-900">7 Emirates</strong>. Toggle modes to see 2030 Forecasts.
            </p>
          </div>

          {/* VIEW MODE TOGGLE */}
          <div className="bg-white border border-slate-200 p-1.5 rounded-xl flex shadow-sm">
            <button 
              onClick={() => { setViewMode('live'); setMapZoom(9); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${viewMode === 'live' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Flame size={16} /> Live Volume
            </button>
            <button 
              onClick={() => { setViewMode('future'); setMapZoom(8); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${viewMode === 'future' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Eye size={16} /> 2030 Forecast
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* === LEFT: THE MAP === */}
          <div className="lg:col-span-3 h-[600px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative z-0 bg-slate-100">
            {typeof window !== 'undefined' && (
              <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false} className="h-full w-full">
                <TileLayer
                  attribution='&copy; CARTO'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <MapController center={mapCenter} zoom={mapZoom} />
                
                <HeatmapLayer points={viewMode === 'live' ? liveHeatmapPoints : forecastHeatmapPoints} />
                
                {/* Markers for Future Areas */}
                {viewMode === 'future' && forecastHeatmapPoints.map((point, idx) => (
                   <CircleMarker 
                     key={idx} 
                     center={[point[0], point[1]]} 
                     radius={14} 
                     pathOptions={{ color: 'white', fillColor: '#4f46e5', fillOpacity: 0.9, weight: 2 }}
                   >
                      <Popup className="font-bold text-center">
                        <div>High Growth Zone</div>
                      </Popup>
                   </CircleMarker>
                ))}
              </MapContainer>
            )}

            {/* Map Legend */}
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
                  {viewMode === 'live' ? 'Market Movers' : '2030 Watchlist'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {viewMode === 'live' ? 'Top performing areas right now.' : 'Areas predicted to spike in value.'}
                </p>
             </div>

             {/* SCROLLABLE LIST */}
             <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                
                {highlightedAreas.map((area, index) => (
                  <div 
                    key={area.id} 
                    onClick={() => handleFocus(area.id)}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{area.name}</h3>
                       {viewMode === 'live' && (
                         <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-100">Live</span>
                       )}
                    </div>
                    <div className="flex items-center gap-3 text-xs mt-2">
                       <span className="font-bold text-slate-700">{area.roi} Yield</span>
                       <span className="text-slate-300">|</span>
                       <span className="text-slate-500">Score: {area.overallScore}</span>
                    </div>
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
                   ? "Ras Al Khaimah (Al Marjan) is seeing highest volume growth (+40%) due to casino development." 
                   : "Dubai South & RAK are the clear winners for 2030 capital appreciation."}
               </p>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MarketMap;