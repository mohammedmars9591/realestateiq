import React, { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, useMap, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';
import { 
  TrendingUp, Activity, ArrowUpRight, Flame, Clock, Eye, Zap, 
  Map as MapIcon, Layers, Percent, Box, ChevronRight, Target
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer 
} from 'recharts';
import SEO from '../components/SEO';

// --- IMPORT NATIONAL DATA ---
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

// --- 2. PREMIUM HEATMAP LAYER ---
const HeatmapLayer = ({ points, mode }) => {
  const map = useMap();

  const gradients = {
    live: { 0.2: '#C6A75E', 0.4: '#D4A95F', 0.6: '#eab308', 0.8: '#f97316', 1.0: '#ef4444' },
    roi: { 0.2: '#06b6d4', 0.4: '#0891b2', 0.6: '#10b981', 0.8: '#059669', 1.0: '#C6A75E' },
    supply: { 0.2: '#6366f1', 0.4: '#818cf8', 0.6: '#a855f7', 0.8: '#ec4899', 1.0: '#f43f5e' }
  };

  useEffect(() => {
    if (!map || !L.heatLayer) return;
    
    map.eachLayer((layer) => {
      if (layer._heat) map.removeLayer(layer);
    });

    const heat = L.heatLayer(points, {
      radius: 35,
      blur: 20,
      maxZoom: 10,
      minOpacity: 0.5,
      gradient: gradients[mode] || gradients.live
    });
    
    heat.addTo(map);
    heat._heat = true;
    return () => { if (map.hasLayer(heat)) map.removeLayer(heat); };
  }, [map, points, mode]);

  return null;
};

// --- MINI TREND CHART FOR POPUPS ---
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
  const [viewMode, setViewMode] = useState('live'); // 'live', 'roi', 'supply'
  const [mapCenter, setMapCenter] = useState([25.08, 55.20]); 
  const [mapZoom, setMapZoom] = useState(10); 
  const [activeEmirate, setActiveEmirate] = useState('Dubai');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- COORDINATE DATABASE ---
  const LOCATIONS = useMemo(() => ({
    'dubai-marina': [25.0805, 55.1403],
    'business-bay': [25.1850, 55.2750],
    'downtown-dubai': [25.1972, 55.2744],
    'jvc': [25.0581, 55.2091],
    'palm-jumeirah': [25.1124, 55.1390],
    'dubai-hills': [25.1000, 55.2500],
    'dubai-south': [24.9450, 55.1200],
    'al-barari': [25.0970, 55.3000],
    'yas-island': [24.4942, 54.6074],
    'saadiyat-island': [24.5420, 54.4370],
    'al-reem-island': [24.4960, 54.4050],
    'aljada': [25.3130, 55.4590],
    'maryam-island': [25.3280, 55.3670],
    'al-marjan-island': [25.6667, 55.7500],
    'ajman-corniche': [25.4190, 55.4410],
  }), []);

  // --- DATASETS ---
  const heatmapPoints = useMemo(() => {
    const points = {
      live: [
        [25.1850, 55.2750, 1.0], // Business Bay
        [25.0805, 55.1403, 0.9], // Marina
        [25.1972, 55.2744, 1.0], // Downtown
        [25.6667, 55.7500, 1.0], // RAK
        [25.0581, 55.2091, 0.8], // JVC
        [24.4942, 54.6074, 0.7], // Yas
        [25.3130, 55.4590, 0.6], // Aljada
      ],
      roi: [
        [25.0581, 55.2091, 1.0], // JVC (High ROI)
        [25.1850, 55.2750, 0.9], // Business Bay
        [24.4960, 54.4050, 0.9], // Reem Island
        [25.4190, 55.4410, 0.8], // Ajman
        [25.3130, 55.4590, 0.7], // Sharjah
      ],
      supply: [
        [24.9450, 55.1200, 1.0], // Dubai South
        [25.0100, 55.2300, 0.9], // Damac Lagoons area
        [25.6667, 55.7500, 1.0], // RAK
        [25.1000, 55.2500, 0.8], // Dubai Hills
      ]
    };
    return points[viewMode] || points.live;
  }, [viewMode]);

  const EMIRATES = [
    { name: 'Dubai', center: [25.08, 55.25], zoom: 10 },
    { name: 'Abu Dhabi', center: [24.45, 54.40], zoom: 11 },
    { name: 'Ras Al Khaimah', center: [25.67, 55.75], zoom: 11 },
    { name: 'Sharjah/Ajman', center: [25.35, 55.45], zoom: 12 },
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

  const dashboardMetrics = [
    { label: 'Highest Yield', value: '8.4%', area: 'JVC', trend: '+1.2%', icon: Percent },
    { label: 'Volume Peak', value: 'AED 4.2B', area: 'Business Bay', trend: '+15%', icon: Flame },
    { label: 'Growth Star', value: '+32%', area: 'Al Marjan', trend: 'Ultra Hot', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-20 fade-in">
      <SEO 
        title="2026 Investor Intelligence Map | EstateIQ" 
        description="Advanced real estate heatmap for UAE investors. Visualize ROI peaks, supply density, and transaction volume for 2026."
      />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* TOP HEADER & CONTROLS */}
        <div className="py-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-[#C6A75E] font-bold uppercase tracking-widest text-xs mb-3">
                <div className="w-8 h-[1px] bg-[#C6A75E]"></div>
                2026 Institutional Intel
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C22] tracking-tight">
                Market <span className="gold-gradient">Intelligence</span> Map
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4">
               {/* Fly-To Selector */}
               <div className="relative group">
                  <select 
                    onChange={handleEmirateChange}
                    className="appearance-none bg-white border border-[rgba(198,167,94,0.3)] text-[#1C1C22] px-6 py-3.5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#C6A75E] outline-none shadow-lg pr-12 cursor-pointer transition-all hover:border-[#C6A75E]"
                  >
                    {EMIRATES.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}
                  </select>
                  <MapIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C6A75E]" size={18} />
               </div>

               {/* View Mode Toggle */}
               <div className="flex bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-[rgba(198,167,94,0.2)] shadow-xl">
                  {[
                    { id: 'live', label: 'Volume', icon: Activity },
                    { id: 'roi', label: 'Yields', icon: Percent },
                    { id: 'supply', label: 'Supply', icon: Box },
                  ].map(mode => (
                    <button
                      key={mode.id}
                      onClick={() => setViewMode(mode.id)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        viewMode === mode.id 
                        ? 'bg-[#1C1C22] text-[#F4DFA0] shadow-xl scale-[1.02]' 
                        : 'text-[#7A6E60] hover:text-[#1C1C22] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <mode.icon size={16} /> {mode.label}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* DASHBOARD TICKER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {dashboardMetrics.map((m, i) => (
              <div key={i} className="glass-card-hover bg-white/40 p-5 border border-white/60 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(198,167,94,0.1)] flex items-center justify-center border border-[rgba(198,167,94,0.2)]">
                    <m.icon className="text-[#C6A75E]" size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#A69785] uppercase tracking-widest">{m.label}</p>
                    <p className="text-xl font-bold text-[#1C1C22]">{m.value} <span className="text-xs font-light text-[#7A6E60]">in {m.area}</span></p>
                  </div>
                </div>
                <div className="text-right">
                   <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-lg">
                     <ArrowUpRight size={14} /> {m.trend}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* MAIN MAP INTERFACE */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* LEFT: THE MAP ENGINE */}
            <div className="lg:col-span-3 h-[700px] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-white relative z-0 group">
              <MapContainer center={mapCenter} zoom={mapZoom} className="h-full w-full">
                <TileLayer
                  attribution='&copy; CARTO'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <MapController center={mapCenter} zoom={mapZoom} />
                <HeatmapLayer points={heatmapPoints} mode={viewMode} />

                {/* Hotspot Markers */}
                {Object.entries(LOCATIONS).map(([id, pos]) => {
                  const areaData = DUBAI_AREAS.find(a => a.id === id);
                  if (!areaData) return null;
                  
                  return (
                    <CircleMarker 
                      key={id} 
                      center={pos} 
                      radius={viewMode === 'live' ? 10 : 8}
                      pathOptions={{ 
                        color: 'white', 
                        fillColor: viewMode === 'roi' ? '#10b981' : '#C6A75E', 
                        fillOpacity: 0.8,
                        weight: 2
                      }}
                    >
                      <Popup className="premium-popup">
                         <div className="p-1 w-48 font-sans">
                            <div className="flex items-center gap-2 mb-2">
                               <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse"></div>
                               <h4 className="text-sm font-bold text-slate-900">{areaData.name}</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-3">
                               <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                  <p className="text-[10px] text-slate-400 font-bold uppercase">ROI</p>
                                  <p className="text-sm font-bold text-emerald-600">{areaData.roi}</p>
                               </div>
                               <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                  <p className="text-[10px] text-slate-400 font-bold uppercase">Price</p>
                                  <p className="text-sm font-bold text-slate-800">{areaData.avgPrice}</p>
                               </div>
                            </div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">3-Year Trend</p>
                            <MiniTrend data={[{value: 10}, {value: 15}, {value: 12}, {value: 20}, {value: 18}]} />
                         </div>
                      </Popup>
                      <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                        <div className="text-[10px] font-bold">{areaData.name}</div>
                      </Tooltip>
                    </CircleMarker>
                  );
                })}
              </MapContainer>

              {/* OVERLAY LEGEND */}
              <div className="absolute top-6 left-6 z-[1000] p-6 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl max-w-[240px]">
                 <h4 className="text-sm font-bold text-[#1C1C22] mb-4 flex items-center gap-2">
                    <Layers size={16} className="text-[#C6A75E]" /> Map Context
                 </h4>
                 <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                       <p className="text-[10px] font-bold text-[#A69785] uppercase tracking-widest">Intensity</p>
                       <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-600"></div>
                       <div className="flex justify-between text-[9px] font-bold text-[#7A6E60]">
                          <span>Low</span>
                          <span>Moderate</span>
                          <span>Critical</span>
                       </div>
                    </div>
                    <div className="pt-4 border-t border-[rgba(198,167,94,0.1)]">
                       <p className="text-[11px] leading-relaxed text-[#7A6E60]">
                          Showing <span className="text-[#1C1C22] font-bold">{viewMode === 'live' ? 'Real-Time Volume' : viewMode === 'roi' ? '2026 Yield Hotspots' : '2026 Supply Pipeline'}</span> across {activeEmirate}.
                       </p>
                    </div>
                 </div>
              </div>
            </div>

            {/* RIGHT: INTELLIGENCE SIDEBAR */}
            <div className="lg:col-span-1 flex flex-col gap-6">
               
               {/* SIDEBAR HEADER */}
               <div className="p-8 bg-[#1C1C22] rounded-[2.2rem] shadow-2xl border border-[#333] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-yellow-500/20 transition-all duration-700"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-[10px] font-bold uppercase mb-4 border border-white/5">
                       <Zap size={10} className="fill-yellow-400" /> Hot Movers
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Watchlist 2026</h3>
                    <p className="text-sm text-slate-400 font-light">Areas showing institutional accumulation signals.</p>
                  </div>
               </div>

               {/* AREA LIST */}
               <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar luxury-scroll min-h-[400px]">
                  {DUBAI_AREAS.filter(a => ['jvc', 'al-marjan-island', 'dubai-south', 'business-bay', 'saadiyat-island'].includes(a.id)).map((area) => (
                    <div key={area.id} className="glass-card-hover bg-white group p-6 border border-white shadow-sm cursor-pointer hover:border-[#F4DFA0]">
                       <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="text-[9px] font-bold text-[#C6A75E] uppercase tracking-widest mb-1">{area.emirate}</p>
                            <h4 className="text-lg font-bold text-[#1C1C22] group-hover:text-[#C6A75E] transition-colors">{area.name}</h4>
                          </div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${area.overallScore > 8 ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'} border border-current opacity-20`}>
                             <p className="text-[10px] font-bold">{area.overallScore}</p>
                          </div>
                       </div>
                       <div className="flex items-center justify-between text-xs pt-4 border-t border-[rgba(198,167,94,0.1)] text-[#7A6E60]">
                          <span className="flex items-center gap-1.5 font-bold"><Percent size={14}/> {area.roi} Yield</span>
                          <ChevronRight size={16} className="text-[#A69785] group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                  ))}
               </div>

               {/* AI BOT VERDICT */}
               <div className="bg-gradient-to-br from-[#1C1C22] to-[#2A2A33] p-8 rounded-[2.2rem] shadow-2xl relative group overflow-hidden border border-white/5">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#C6A75E]/10 rounded-full -br-16 -mb-16 blur-2xl"></div>
                   <h4 className="text-[#F4DFA0] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                     <Target size={16} /> Analyst Verdict
                   </h4>
                   <p className="text-sm text-white/80 leading-relaxed font-light">
                     {viewMode === 'live' 
                        ? "Accumulation in Business Bay is at a 5-year high. Expect supply squeeze in Q3 2026." 
                        : viewMode === 'roi' 
                        ? "JVC and Reem Island are the ROI champions for the next cycle with projected yields > 8.5%."
                        : "Watch Al Marjan and Dubai South. The 2026 handover cycle will drive massive secondary market activity."
                     }
                   </p>
               </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MarketMap;