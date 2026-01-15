import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, ArrowLeft, CheckCircle, TrendingUp, 
  Plane, ShoppingBag, BarChart3, 
  GraduationCap, Train, Briefcase, Camera, HeartPulse 
} from 'lucide-react';

// --- IMPORTS ---
import { DUBAI_AREAS } from '../data/areaData';
import { PROPERTIES } from '../data/propertiesData'; // <--- FIXED: Using the file we created

const AreaPage = () => {
  // 1. FIXED: Changed 'areaName' to 'id' to match App.jsx
  const { id } = useParams();
  
  // 2. Find the Area Data
  const area = DUBAI_AREAS.find(a => a.id === id);

  // 3. Find Properties in this Area
  // We filter the properties list to find ones that match this area's name
  const areaProperties = PROPERTIES.filter(p => 
    p.location.toLowerCase().includes(area?.name.toLowerCase())
  );

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!area) return <div className="p-20 text-center text-slate-500">Area not found.</div>;

  // 4. Fallback Data (Safeguard in case data is missing)
  const conn = area.connectivity || {
    airport: { name: "DXB Intl", km: "--", mins: "--" },
    school: { name: "Intl School", km: "--", mins: "--" },
    tourist: { name: "Downtown", km: "--", mins: "--" },
    metro: { name: "Nearest Stn", km: "--", mins: "--" },
    mall: { name: "Local Mall", km: "--", mins: "--" },
    business: { name: "Business Hub", km: "--", mins: "--" },
    hospital: { name: "General Hospital", km: "--", mins: "--" }
  };

  const scores = area.scores || { cashFlow: 8, appreciation: 7, liquidity: 8, risk: 4, lifestyle: 8 };
  const economics = area.unitEconomics || { studio: { roi: "7.5%" }, oneBed: { roi: "6.8%" }, twoBed: { roi: "6.2%" } };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen">
      
      {/* Breadcrumb */}
      <Link to="/areas" className="inline-flex items-center gap-2 text-slate-500 hover:text-black mb-6 mt-8 font-bold text-sm transition-colors">
        <ArrowLeft size={16} /> Back to Districts
      </Link>

      {/* HEADER HERO SECTION */}
      <div className={`rounded-3xl p-8 md:p-16 text-white mb-10 relative overflow-hidden shadow-xl ${area.imageColor || 'bg-blue-900'}`}>
         <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                {area.category} District
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold border border-yellow-500 flex items-center gap-1">
                  ★ {area.overallScore || 8.5}/10 Score
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{area.name}</h1>
            <p className="text-xl opacity-90 leading-relaxed max-w-2xl">{area.description}</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* === LEFT COLUMN: DEEP DATA ANALYSIS === */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* 1. UNIT ECONOMICS TABLE */}
           <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-blue-600" />
                <h3 className="text-xl font-extrabold text-slate-900">
                  Rental <span className="text-blue-600">Yields</span> by Unit
                </h3>
              </div>
              <p className="text-slate-500 text-sm mb-6">Net ROI projections based on current rental contracts.</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <UnitBox label="Studio" value={economics.studio?.roi} color="text-green-600" bg="bg-green-50" border="border-green-100" />
                <UnitBox label="1-Bedroom" value={economics.oneBed?.roi} color="text-blue-700" bg="bg-blue-50" border="border-blue-100" />
                <UnitBox label="2-Bedroom" value={economics.twoBed?.roi} color="text-slate-700" bg="bg-slate-50" border="border-slate-100" />
              </div>
           </div>

           {/* 2. STRATEGIC CONNECTIVITY */}
           <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-blue-400" />
                <h3 className="text-xl font-extrabold text-white">
                  Strategic <span className="text-blue-400">Connectivity</span>
                </h3>
              </div>
              <p className="text-slate-400 text-sm mb-8">Distance to key landmarks and infrastructure.</p>
              
              <div className="space-y-6">
                <DistanceRow icon={<Plane />} category="Nearest Airport" data={conn.airport} color="text-purple-300" />
                <DistanceRow icon={<Briefcase />} category="Business Hub" data={conn.business} color="text-blue-300" />
                <DistanceRow icon={<Train />} category="Metro Station" data={conn.metro} color="text-green-300" />
                <DistanceRow icon={<GraduationCap />} category="Top School" data={conn.school} color="text-yellow-300" />
                <DistanceRow icon={<ShoppingBag />} category="Shopping Mall" data={conn.mall} color="text-pink-300" />
                <DistanceRow icon={<Camera />} category="Tourist Spot" data={conn.tourist} color="text-orange-300" />
                <DistanceRow icon={<HeartPulse />} category="Healthcare" data={conn.hospital} color="text-red-300" />
              </div>
           </div>
        </div>

        {/* === RIGHT COLUMN: SCORECARD & AMENITIES === */}
        <div className="space-y-8">
          
           {/* INVESTMENT SCORECARD */}
           <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-blue-600" />
                <h3 className="text-xl font-extrabold text-slate-900">
                  Investment <span className="text-blue-600">Scorecard</span>
                </h3>
              </div>
              <p className="text-slate-500 text-sm mb-6">Analyst ratings out of 10.</p>

              <div className="space-y-5">
                <ScoreBar label="Cash Flow" value={scores.cashFlow} color="bg-green-500" />
                <ScoreBar label="Appreciation" value={scores.appreciation} color="bg-blue-500" />
                <ScoreBar label="Liquidity" value={scores.liquidity} color="bg-indigo-500" />
                <ScoreBar label="Lifestyle" value={scores.lifestyle} color="bg-amber-500" />
                <ScoreBar label="Risk (Low is Good)" value={scores.risk} color="bg-red-500" />
              </div>
           </div>

           {/* LIFESTYLE AMENITIES */}
           <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
             <h4 className="font-extrabold text-slate-900 mb-4 flex items-center gap-2 text-lg">
               <CheckCircle size={20} className="text-blue-600"/> 
               <span><span className="text-blue-600">Lifestyle</span> Perks</span>
             </h4>
             <div className="flex flex-wrap gap-2">
               {area.amenities?.map((am, idx) => (
                 <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm">
                   {am}
                 </span>
               ))}
             </div>
          </div>

        </div>
      </div>

      {/* === BOTTOM SECTION: AVAILABLE PROPERTIES === */}
      <div className="border-t border-slate-200 pt-16">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
          Verified <span className="text-blue-600">Opportunities</span> in {area.name}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areaProperties.map(prop => (
            <Link to={`/property/${prop.id}`} key={prop.id} className="block group hover:no-underline">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className={`h-48 ${prop.imageColor || 'bg-slate-200'} flex items-center justify-center text-4xl`}>
                    🏠
                  </div>
                  <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-slate-900">{prop.title}</h3>
                        <span className="text-blue-600 font-bold">{prop.price}</span>
                      </div>
                      <p className="text-slate-500 text-sm mb-4">📍 {prop.location}</p>
                      <div className="flex gap-4 text-sm text-slate-600 border-t pt-4">
                          <span>🛏️ {prop.beds} Beds</span>
                          <span>🚿 {prop.baths} Baths</span>
                          <span>📐 {prop.sqft} sqft</span>
                      </div>
                  </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {areaProperties.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <h3 className="text-lg font-bold text-slate-400 mb-2">No Verified Listings Yet</h3>
            <p className="text-slate-400 text-sm">We are currently auditing new properties in {area.name}.</p>
          </div>
        )}
      </div>

    </div>
  );
};

// --- HELPER SUB-COMPONENTS ---

const UnitBox = ({ label, value, color, bg, border }) => (
  <div className={`p-4 rounded-xl border ${bg} ${border}`}>
    <div className={`text-xs font-bold uppercase mb-1 opacity-60`}>{label}</div>
    <div className={`text-2xl font-extrabold mb-1 ${color}`}>{value || "-"}</div>
    <div className="text-xs font-medium opacity-50">ROI</div>
  </div>
);

const ScoreBar = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
      <span>{label}</span>
      <span>{value}/10</span>
    </div>
    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value * 10}%` }}></div>
    </div>
  </div>
);

const DistanceRow = ({ icon, category, data, color }) => (
  <div className="flex items-center justify-between pb-4 border-b border-slate-700 last:border-0 last:pb-0 hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
    <div className="flex items-center gap-4">
      <div className="bg-slate-800 p-2.5 rounded-xl text-slate-300">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">{category}</div>
        <div className="font-bold text-sm text-white">{data?.name || "N/A"}</div>
      </div>
    </div>
    <div className="text-right">
       <div className={`text-lg font-mono font-bold ${color}`}>{data?.mins || "--"}</div>
       <div className="text-[10px] text-slate-500">{data?.km || "--"}</div>
    </div>
  </div>
);

export default AreaPage;