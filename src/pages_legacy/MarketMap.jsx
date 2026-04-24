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
const GRADIENTS = {
  live: { 0.2: '#C6A75E', 0.4: '#D4A95F', 0.6: '#eab308', 0.8: '#f97316', 1.0: '#ef4444' },
  roi: { 0.2: '#06b6d4', 0.4: '#0891b2', 0.6: '#10b981', 0.8: '#059669', 1.0: '#C6A75E' },
  supply: { 0.2: '#6366f1', 0.4: '#818cf8', 0.6: '#a855f7', 0.8: '#ec4899', 1.0: '#f43f5e' }
};

const HeatmapLayer = ({ points, mode }) => {
  const map = useMap();

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
      gradient: GRADIENTS[mode] || GRADIENTS.live
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
    <div className="min-h-screen bg-gradient-to-b from-[#F3E9D2] via-[#FDFBF7] to-[#FDFBF7] pb-20 fade-in">
      <SEO 
        title="Dubai Real Estate ROI Heatmap 2026 — Interactive Investment Intelligence Map"
        description="Visualize Dubai real estate investment opportunities on an interactive heatmap. Filter by ROI peaks, supply density, transaction volume, lifestyle score, and capital appreciation across 77+ UAE areas. Free 2026 data."
        url="/heatmap"
        schema={{
          "@context": "https://schema.org",
          "@type": "Map",
          "name": "Dubai Real Estate Investment Intelligence Map 2026",
          "description": "Interactive ROI heatmap showing investment potential, supply density, and transaction velocity across 77+ UAE areas.",
          "url": "https://www.realestateiq.ae/heatmap",
          "about": {
            "@type": "Place",
            "name": "Dubai, United Arab Emirates",
            "geo": { "@type": "GeoCoordinates", "latitude": "25.2048", "longitude": "55.2708" }
          },
          "creator": { "@type": "Organization", "name": "RealEstateIQ" }
        }}
        faqSchema={[
          {
            question: "Which areas in Dubai have the highest ROI according to the investment map?",
            answer: "According to RealEstateIQ's 2026 investment heatmap, the highest ROI areas in Dubai are JVC (9–11%), Dubai Studio City (9–10%), Sports City (8–9%), International City (9–10%), and Dubai South (8–9%). Filter the map by 'High Yield' to see all premium cash-flow zones highlighted."
          },
          {
            question: "How does the RealEstateIQ ROI heatmap work?",
            answer: "The RealEstateIQ heatmap color-codes 77+ UAE areas by investment score. Green = high ROI yield zones (>8%). Gold = high capital appreciation zones. Blue = premium lifestyle areas. Filter by metric (ROI, Supply, Lifestyle, Appreciation) to dynamically recolor the map based on your investment priority."
          }
        ]}
      />

      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C6A75E] rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* TOP HEADER & CONTROLS */}
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[#C6A75E] font-black uppercase tracking-[0.4em] text-[10px] mb-4">
                <div className="w-12 h-[1px] bg-[#C6A75E]/30"></div>
                Sovereign Heatmap Engine
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#3A3125] leading-none tracking-tighter mb-4">
                Market <span className="gold-gradient">Alpha Map</span>
              </h1>
              <p className="text-lg md:text-xl text-[#5A4F40] font-light leading-relaxed">
                Aggregating 2026 institutional volume and yield signals across 77+ nodes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
               {/* Fly-To Selector */}
               <div className="relative group min-w-[200px]">
                  <select 
                    onChange={handleEmirateChange}
                    className="w-full appearance-none bg-white/60 backdrop-blur-md border border-[rgba(198,167,94,0.3)] text-[#3A3125] px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest focus:ring-2 focus:ring-[#C6A75E] outline-none shadow-xl pr-14 cursor-pointer transition-all hover:bg-white"
                  >
                    {EMIRATES.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}
                  </select>
                  <MapIcon className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C6A75E]" size={18} />
               </div>

               {/* View Mode Toggle */}
               <div className="flex bg-white/40 backdrop-blur-md p-1.5 rounded-2xl border border-white shadow-xl">
                  {[
                    { id: 'live', label: 'Volume', icon: Activity },
                    { id: 'roi', label: 'Yields', icon: Percent },
                    { id: 'supply', label: 'Supply', icon: Box },
                  ].map(mode => (
                    <button
                      key={mode.id}
                      onClick={() => setViewMode(mode.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        viewMode === mode.id 
                        ? 'bg-[#3A3125] text-[#F4DFA0] shadow-2xl scale-[1.02]' 
                        : 'text-[#7A6E60] hover:text-[#3A3125] hover:bg-white/50'
                      }`}
                    >
                      <mode.icon size={14} /> {mode.label}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* DASHBOARD TICKER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {dashboardMetrics.map((m, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white/40 backdrop-blur-md border border-white rounded-[2rem] shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#3A3125]/5 flex items-center justify-center border border-[#3A3125]/10">
                    <m.icon className="text-[#C6A75E]" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-[#A69785] uppercase tracking-[0.2em] mb-1">{m.label}</p>
                    <p className="text-2xl font-serif font-black text-[#3A3125] leading-none mb-1">{m.value}</p>
                    <p className="text-[10px] font-bold text-[#5A4F40]/60 uppercase">{m.area}</p>
                  </div>
                </div>
                <div className="text-right">
                   <div className="flex items-center gap-1 text-emerald-600 font-black text-[10px] bg-emerald-50/50 border border-emerald-100 px-3 py-1.5 rounded-full">
                     <ArrowUpRight size={14} /> {m.trend}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* MAIN MAP INTERFACE */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* LEFT: THE MAP ENGINE */}
            <div className="lg:col-span-3 h-[750px] rounded-[3rem] overflow-hidden shadow-[0_60px_120px_rgba(58,49,37,0.15)] border border-white relative z-0 group">
              <MapContainer center={mapCenter} zoom={mapZoom} className="h-full w-full">
                <TileLayer
                  attribution='&copy; CARTO'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
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
                      radius={viewMode === 'live' ? 12 : 9}
                      pathOptions={{ 
                        color: 'white', 
                        fillColor: viewMode === 'roi' ? '#10b981' : '#C6A75E', 
                        fillOpacity: 0.9,
                        weight: 3
                      }}
                    >
                      <Popup className="premium-popup">
                         <div className="p-2 w-52 font-sans">
                            <div className="flex items-center gap-2 mb-3">
                               <div className="w-2.5 h-2.5 rounded-full bg-[#C6A75E] shadow-[0_0_8px_rgba(198,167,94,0.6)] animate-pulse"></div>
                               <h4 className="text-sm font-serif font-black text-[#3A3125] uppercase tracking-tight">{areaData.name}</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                               <div className="bg-[#FDFBF7] p-2.5 rounded-xl border border-[rgba(198,167,94,0.15)]">
                                  <p className="text-[9px] text-[#A69785] font-black uppercase tracking-widest mb-1">ROI</p>
                                  <p className="text-sm font-black text-emerald-600">{areaData.roi}</p>
                               </div>
                               <div className="bg-[#FDFBF7] p-2.5 rounded-xl border border-[rgba(198,167,94,0.15)]">
                                  <p className="text-[9px] text-[#A69785] font-black uppercase tracking-widest mb-1">Price</p>
                                  <p className="text-sm font-black text-[#3A3125]">{areaData.avgPrice}</p>
                               </div>
                            </div>
                            <div className="flex items-center justify-between border-t border-[rgba(198,167,94,0.08)] pt-3">
                               <p className="text-[10px] text-[#5A4F40]/60 font-black uppercase tracking-widest">3Y Momentum</p>
                               <MiniTrend data={[{value: 10}, {value: 15}, {value: 12}, {value: 20}, {value: 18}]} />
                            </div>
                         </div>
                      </Popup>
                      <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#3A3125] bg-white/90 backdrop-blur-md px-2 py-1 rounded shadow-sm border border-[rgba(198,167,94,0.1)]">{areaData.name}</div>
                      </Tooltip>
                    </CircleMarker>
                  );
                })}
              </MapContainer>

              {/* OVERLAY LEGEND */}
              <div className="absolute top-8 left-8 z-[1000] p-8 bg-[#FDFBF7]/95 backdrop-blur-3xl border border-[rgba(198,167,94,0.4)] rounded-[2.5rem] shadow-[0_40px_80px_rgba(58,49,37,0.2)] max-w-[280px]">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-[#3A3125] text-[#C6A75E]"><Layers size={18} /></div>
                    <h4 className="text-[11px] font-black text-[#3A3125] uppercase tracking-[0.25em]">Map Command</h4>
                 </div>
                 <div className="space-y-6">
                    <div className="flex flex-col gap-3">
                       <p className="text-[9px] font-black text-[#7A6E60] uppercase tracking-widest flex justify-between">
                          <span>Alpha Intensity Index</span>
                          <span className="text-[#C6A75E]">2026 Pulse</span>
                       </p>
                       <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#F3E9D2] via-[#C6A75E] to-[#3A3125] shadow-inner"></div>
                       <div className="flex justify-between text-[8px] font-black text-[#A69785] uppercase tracking-tighter">
                          <span>Baseline</span>
                          <span>Cap Capital Peak</span>
                       </div>
                    </div>
                    <div className="pt-6 border-t border-[rgba(198,167,94,0.15)]">
                       <p className="text-[11px] leading-relaxed text-[#5A4F40] font-medium italic">
                          Currently analyzing the <span className="text-[#3A3125] font-black underline decoration-[#C6A75E] decoration-2 underline-offset-4">{viewMode === 'live' ? 'Capital Velocity Corridor' : viewMode === 'roi' ? 'Yield Extraction Nodes' : 'Inventory Absorption Map'}</span> in the {activeEmirate} sector.
                       </p>
                    </div>
                 </div>
              </div>
            </div>

            {/* RIGHT: INTELLIGENCE SIDEBAR */}
            <div className="lg:col-span-1 flex flex-col gap-6">
               
               {/* SIDEBAR HEADER */}
               <div className="p-10 bg-[#3A3125] rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#C6A75E]/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#F4DFA0] text-[10px] font-black uppercase tracking-widest mb-6 border border-white/5">
                       <Zap size={10} className="fill-[#F4DFA0]" /> Buy Signals
                    </div>
                    <h3 className="text-2xl font-serif font-black text-white leading-tight mb-2 uppercase tracking-tighter">Growth <br/>Watchlist</h3>
                    <p className="text-sm text-white/40 font-medium">Accumulation signals in target market nodes.</p>
                  </div>
               </div>

               {/* AREA LIST */}
               <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar luxury-scroll min-h-[400px]">
                  {DUBAI_AREAS.filter(a => ['jvc', 'al-marjan-island', 'dubai-south', 'business-bay', 'saadiyat-island'].includes(a.id)).map((area) => (
                    <div key={area.id} className="group p-6 bg-white/40 backdrop-blur-md border border-white rounded-[2rem] shadow-sm cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300">
                       <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-[9px] font-black text-[#C6A75E] uppercase tracking-[0.2em] mb-1">{area.emirate}</p>
                            <h4 className="text-lg font-serif font-black text-[#3A3125] tracking-tight group-hover:text-[#C6A75E] transition-colors leading-none">{area.name}</h4>
                          </div>
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${area.overallScore > 8 ? 'bg-emerald-50 text-emerald-600' : 'bg-[#FDFBF7] text-[#C6A75E]'} border border-current opacity-20`}>
                             <p className="text-[10px] font-black">{area.overallScore}</p>
                          </div>
                       </div>
                       <div className="flex items-center justify-between text-[10px] pt-4 border-t border-[rgba(198,167,94,0.08)] text-[#7A6E60] font-black uppercase tracking-widest">
                          <span className="flex items-center gap-1.5 text-emerald-600"><Percent size={14}/> {area.roi} Yield</span>
                          <ChevronRight size={16} className="text-[#A69785] group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                  ))}
               </div>

               {/* AI BOT VERDICT */}
               <div className="bg-[#FDFBF7] p-8 rounded-[2.5rem] shadow-xl relative group overflow-hidden border border-[rgba(198,167,94,0.2)]">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-full -br-16 -mb-16 blur-2xl"></div>
                   <h4 className="text-[#C6A75E] font-black text-[10px] uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
                     <Target size={18} /> Market Verdict
                   </h4>
                   <p className="text-[13px] text-[#5A4F40] leading-relaxed font-light italic">
                     {viewMode === 'live' 
                        ? "Institutional accumulation in Business Bay is at a 5-year cyclical high. Expect structural supply squeeze by Q3 2026." 
                        : viewMode === 'roi' 
                        ? "JVC and Reem Island remain the primary yield generators for the next cycle with verified ROIs exceeding 8.5% net."
                        : "Focus on Al Marjan and Dubai South. Handover milestones will drive secondary market velocity to record levels."
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