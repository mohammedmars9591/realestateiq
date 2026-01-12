import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Bed, Bath, Maximize, CheckCircle, 
  TrendingUp, Wallet, Clock, AlertTriangle, Building2, 
  Plane, Briefcase, Train, GraduationCap, ShoppingBag, Camera, HeartPulse 
} from 'lucide-react';

import { DUBAI_PROPERTIES } from '../data/dubaiArea';
import { DUBAI_AREAS } from '../data/areaData';
import SEO from '../components/SEO';
import InvestmentScore from '../components/InvestmentScore';

const PropertyPage = () => {
  const { id } = useParams();
  
  // 1. Find Property
  const property = DUBAI_PROPERTIES.find(p => p.id === parseInt(id));

  // 2. Find Related Area (With Safe Matching)
  const area = DUBAI_AREAS.find(a => 
    a.id === property?.location.toLowerCase().replace(/\s+/g, '-') || 
    a.name.toLowerCase() === property?.location.toLowerCase() ||
    (a.id === 'jlt' && property?.location === 'JLT')
  );

  // 3. ROBUST CONNECTIVITY (THE FIX)
  // We define defaults first, then merge real data on top.
  // This prevents the "undefined" crash if an area is missing specific data points.
  const defaultConn = {
    airport: { name: "DXB Intl", km: "--", mins: "--" },
    business: { name: "Business Bay", km: "--", mins: "--" },
    metro: { name: "Nearest Stn", km: "--", mins: "--" },
    school: { name: "Intl School", km: "--", mins: "--" },
    mall: { name: "Local Mall", km: "--", mins: "--" },
    tourist: { name: "Downtown", km: "--", mins: "--" },
    hospital: { name: "General Hospital", km: "--", mins: "--" }
  };

  const conn = {
    airport: area?.connectivity?.airport || defaultConn.airport,
    business: area?.connectivity?.business || defaultConn.business,
    metro: area?.connectivity?.metro || defaultConn.metro,
    school: area?.connectivity?.school || defaultConn.school,
    mall: area?.connectivity?.mall || defaultConn.mall,
    tourist: area?.connectivity?.tourist || defaultConn.tourist,
    hospital: area?.connectivity?.hospital || defaultConn.hospital,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) return <div className="p-20 text-center text-slate-500">Property not found.</div>;

  // Auto-assign colors if missing
  const getColor = (cat) => {
    switch (cat) {
      case 'High Yield': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'Luxury': return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'Appreciation': return 'text-purple-600 bg-purple-50 border-purple-100';
      default: return 'text-blue-600 bg-blue-50 border-blue-100';
    }
  };
  const themeClass = getColor(property.category);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title={`${property.name} - Investment Analysis`} 
        description={`Net ROI: ${property.financials.netYield}. Price: AED ${property.price.toLocaleString()}. Full investment report.`}
      />

      {/* Breadcrumb */}
      <Link to="/market" className="inline-flex items-center gap-2 text-slate-500 hover:text-black mb-6 mt-8 font-bold text-sm">
        <ArrowLeft size={16} /> Back to Market
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: IMAGES & DETAILS */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* HERO IMAGE */}
           <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video group">
             <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${themeClass.split(' ')[0].replace('text-', 'bg-')}`}></span>
                {property.category}
             </div>
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{property.name}</h1>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <MapPin size={18} /> {property.location}
                </div>
             </div>
           </div>

           {/* KEY STATS ROW */}
           <div className="grid grid-cols-3 gap-4">
              <StatBox label="Price" value={`AED ${property.price.toLocaleString()}`} icon={<Wallet size={20} className="text-blue-500"/>} />
              <StatBox label="Est. Rent" value={`AED ${property.rent.toLocaleString()}/yr`} icon={<TrendingUp size={20} className="text-green-500"/>} />
              <StatBox label="Size" value={`${property.size} sq.ft`} icon={<Maximize size={20} className="text-slate-500"/>} />
           </div>

           {/* INVESTMENT ANALYSIS CARD */}
           <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Wallet className="text-blue-600" /> Financial Performance
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <FinancialMetric label="Gross Yield" value={property.financials.grossYield} desc="Before expenses" color="text-slate-700" />
                <FinancialMetric label="Net ROI" value={property.financials.netYield} desc="Actual take-home" color="text-emerald-600" highlight />
                <FinancialMetric label="Payback Period" value={`${property.financials.paybackYears} Years`} desc="To recover capital" color="text-blue-600" />
              </div>

              <div className={`p-4 rounded-xl border ${themeClass}`}>
                <div className="text-xs font-bold uppercase mb-2 opacity-70">AI Verdict</div>
                <p className="font-bold text-lg leading-relaxed">"{property.aiReason}"</p>
              </div>
           </div>

           {/* LOCATION & CONNECTIVITY (Safe Render) */}
           <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <MapPin className="text-blue-400" /> Strategic Location
              </h3>
              <div className="space-y-4">
                 <DistanceRow icon={<Plane />} label="Airport" data={conn.airport} />
                 <DistanceRow icon={<Briefcase />} label="Business Hub" data={conn.business} />
                 <DistanceRow icon={<Train />} label="Metro" data={conn.metro} />
                 <DistanceRow icon={<GraduationCap />} label="School" data={conn.school} />
                 <DistanceRow icon={<HeartPulse />} label="Hospital" data={conn.hospital} />
                 <DistanceRow icon={<ShoppingBag />} label="Mall" data={conn.mall} />
              </div>
           </div>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="space-y-6">
           
           {/* INVESTMENT SCORE */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                 <InvestmentScore score={property.developer?.trustScore || 8.0} size="lg" />
              </div>
              <div className="text-sm text-slate-500 mb-6">Based on developer track record, location demand, and price/sqft analysis.</div>
              <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition">
                Request Viewing
              </button>
           </div>

           {/* RISK PROFILE */}
           <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" /> Risk Profile
              </h4>
              <RiskRow label="Vacancy Risk" value={property.riskProfile.vacancyRisk} />
              <RiskRow label="Liquidity (Resale)" value={property.riskProfile.liquidityRisk} />
              <RiskRow label="Project Status" value={property.projectStatus} />
           </div>

           {/* TENANT PROFILE */}
           <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase">Target Tenant</h4>
              <div className="flex flex-wrap gap-2">
                 {property.tenantProfile.map(t => (
                   <span key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                     {t}
                   </span>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---
const StatBox = ({ label, value, icon }) => (
  <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col justify-center h-24 shadow-sm">
    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-1">
      {icon} {label}
    </div>
    <div className="text-lg font-extrabold text-slate-900">{value}</div>
  </div>
);

const FinancialMetric = ({ label, value, desc, color, highlight }) => (
  <div className={`p-4 rounded-2xl ${highlight ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50 border border-slate-100'}`}>
    <div className="text-xs font-bold text-slate-400 uppercase mb-1">{label}</div>
    <div className={`text-2xl font-extrabold mb-1 ${color}`}>{value}</div>
    <div className="text-[10px] text-slate-500 font-medium">{desc}</div>
  </div>
);

const DistanceRow = ({ icon, label, data }) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-800 last:border-0">
     <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
       {icon} {label}
     </div>
     <div className="text-right">
       <div className="text-white font-bold text-sm">{data?.mins || "-- mins"}</div>
       <div className="text-[10px] text-slate-500">{data?.name || "N/A"}</div>
     </div>
  </div>
);

const RiskRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
    <span className="text-sm text-slate-500 font-medium">{label}</span>
    <span className={`text-sm font-bold ${
      value.includes('Low') ? 'text-green-600' : 
      value.includes('High') ? 'text-red-500' : 'text-amber-500'
    }`}>
      {value}
    </span>
  </div>
);

export default PropertyPage;