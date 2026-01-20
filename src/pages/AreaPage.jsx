import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, ArrowLeft, TrendingUp, Building2, 
  CheckCircle, Wallet, Plane, Briefcase, Train, GraduationCap, ShoppingBag, Camera, HeartPulse, BarChart3
} from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';

// --- IMPORT ALL DATA FILES ---
import { DUBAI_AREAS } from '../data/areaData';
import { SHARJAH_DATA } from '../data/sharjahData';
import { RAK_DATA } from '../data/rakData';
import { ABUDHABI_DATA } from '../data/abudhabiData';
import { AJMAN_DATA } from '../data/ajmanData';
import { FUJAIRAH_DATA } from '../data/fujairahData';
import { UAQ_DATA } from '../data/uaqData';

// --- COMBINE INTO MASTER DB ---
const MASTER_DB = [
  ...(DUBAI_AREAS || []), 
  ...(SHARJAH_DATA || []), 
  ...(RAK_DATA || []), 
  ...(ABUDHABI_DATA || []),
  ...(AJMAN_DATA || []),
  ...(FUJAIRAH_DATA || []),
  ...(UAQ_DATA || [])
];

const AreaPage = () => {
  const { id } = useParams();
  
  // 1. Find the Area Data (Search all Emirates)
  const area = MASTER_DB.find(a => a.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!area) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Area Not Found</h1>
        <Link to="/areas" className="text-blue-600 hover:underline">Return to Map</Link>
      </div>
    );
  }

  // 2. Fallback Data
  const conn = area.connectivity || {
    airport: { name: "Nearest Airport", km: "--", mins: "--" },
    school: { name: "Intl School", km: "--", mins: "--" },
    tourist: { name: "City Center", km: "--", mins: "--" },
    metro: { name: "Nearest Stn", km: "--", mins: "--" },
    mall: { name: "Local Mall", km: "--", mins: "--" },
    business: { name: "Business Hub", km: "--", mins: "--" },
    hospital: { name: "General Hospital", km: "--", mins: "--" }
  };

  const scores = area.scores || { cashFlow: 8, appreciation: 7, liquidity: 8, risk: 4, lifestyle: 8 };
  const economics = area.unitEconomics || { studio: { roi: "N/A" }, oneBed: { roi: "N/A" }, twoBed: { roi: "N/A" } };
  const prices = area.prices || {};

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50 min-h-screen pt-8">
      
      <SEO 
        title={`${area.name} Real Estate Analysis | EstateIQ`} 
        description={`Investment analysis for ${area.name}. ROI: ${area.roi}, Avg Price: ${area.avgPrice}.`}
      />

      {/* Breadcrumb */}
      <Link to="/areas" className="inline-flex items-center gap-2 text-slate-500 hover:text-black mb-6 font-bold text-sm transition-colors">
        <ArrowLeft size={16} /> Back to National Map
      </Link>

      {/* HEADER HERO SECTION */}
      <div className={`rounded-3xl p-8 md:p-16 text-white mb-10 relative overflow-hidden shadow-xl ${area.imageColor || 'bg-blue-900'}`}>
         <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                {area.emirate || "UAE"}
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold border border-yellow-500 flex items-center gap-1">
                  ★ {area.overallScore || 8.5}/10 Score
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{area.name}</h1>
            <p className="text-xl opacity-90 leading-relaxed max-w-2xl">{area.description}</p>
         </div>
         
         {/* Background Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* === LEFT COLUMN: DEEP DATA ANALYSIS === */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* 1. MARKET PRICING TABLE (New Feature) */}
           <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
                <Wallet className="text-blue-600" size={24} /> 
                <h3 className="text-xl font-extrabold text-slate-900">Market Pricing <span className="text-blue-600">(2026 Estimates)</span></h3>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <PriceBox label="Studio" value={prices.studio} />
                <PriceBox label="1 Bed" value={prices.oneBed} />
                <PriceBox label="2 Bed" value={prices.twoBed} />
                <PriceBox label="3 Bed" value={prices.threeBed || prices.villa} />
             </div>
           </div>

           {/* 2. UNIT ECONOMICS TABLE */}
           <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-emerald-600" />
                <h3 className="text-xl font-extrabold text-slate-900">
                  Rental <span className="text-emerald-600">Yields</span> by Unit
                </h3>
              </div>
              <p className="text-slate-500 text-sm mb-6">Net ROI projections based on current rental contracts.</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <UnitBox label="Studio" value={economics.studio?.roi} color="text-green-600" bg="bg-green-50" border="border-green-100" />
                <UnitBox label="1-Bedroom" value={economics.oneBed?.roi} color="text-blue-700" bg="bg-blue-50" border="border-blue-100" />
                <UnitBox label="2-Bedroom" value={economics.twoBed?.roi} color="text-slate-700" bg="bg-slate-50" border="border-slate-100" />
              </div>
           </div>

           {/* 3. STRATEGIC CONNECTIVITY */}
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
                <DistanceRow icon={<Train />} category="Metro / Transport" data={conn.metro} color="text-green-300" />
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
           <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
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

              {/* WHATSAPP BUTTON */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <WhatsAppButton data={area} type="area" />
              </div>
           </div>

           {/* LIFESTYLE AMENITIES */}
           <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
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

const PriceBox = ({ label, value }) => (
  <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100 hover:border-blue-200 transition-colors">
    <div className="text-xs font-bold text-slate-400 uppercase mb-1">{label}</div>
    <div className="font-bold text-slate-900 text-sm md:text-base">{value || "N/A"}</div>
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