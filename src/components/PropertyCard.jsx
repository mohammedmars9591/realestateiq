import React from 'react';
import { MapPin, TrendingUp, ArrowRight, BarChart3 } from 'lucide-react'; // Added BarChart3 for Area stats
import { Link } from 'react-router-dom';
import InvestmentScore from './InvestmentScore';

// --- 1. IMPORT ALL THREE DATA SOURCES ---
import { BUILDERS } from '../data/buildersData'; 
import { DUBAI_AREAS } from '../data/areaData';
import { DUBAI_PROPERTIES } from '../data/dubaiArea';

const PropertyCard = ({ property }) => {
  
  // --- A. DATA LOOKUPS ---
  
  // 1. Find Developer Data (for Trust Score)
  const developerData = BUILDERS.find(b => 
    b.name.toLowerCase().includes(property.developer?.name?.toLowerCase()) || 
    b.id === property.developer?.name?.toLowerCase()
  );

  // 2. Find Area Data (for Area Score/Vibe)
  // We match the property location (e.g. "JVC") to the Area ID or Name
  const areaData = DUBAI_AREAS.find(a => 
    a.name === property.location || 
    a.id === property.location.toLowerCase().replace(/\s+/g, '-')
  );

  // 3. Find Market Position (from Properties Data)
  // Example: Is this property cheaper than the average for this location?
  const areaListings = DUBAI_PROPERTIES.filter(p => p.location === property.location);
  const avgAreaPrice = areaListings.reduce((acc, curr) => acc + curr.price, 0) / (areaListings.length || 1);
  const isBelowMarketPrice = property.price < avgAreaPrice;

  // --- B. VISUAL LOGIC ---

  const getColor = (category) => {
    switch (category) {
      case 'High Yield': return 'bg-emerald-600';
      case 'Luxury': return 'bg-blue-600';
      case 'Appreciation': return 'bg-purple-600';
      case 'Business': return 'bg-slate-700';
      default: return 'bg-blue-600';
    }
  };

  const colorClass = getColor(property.category || property.aiCategory);
  const textColorClass = colorClass.replace('bg-', 'text-');
  
  // Trust Score: Priority is Real DB > Manual > Default
  const scoreValue = developerData?.scores?.trust || property.developer?.trustScore || 7.5;

  return (
    <Link to={`/property/${property.id}`} className="block h-full group hover:no-underline">
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative">
        
        {/* IMAGE HEADER */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={property.image} 
            alt={property.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`${colorClass} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1`}>
               <TrendingUp size={12} /> {property.aiCategory || property.category}
            </span>
          </div>

          {/* Investment Score (Top Right) */}
          <div className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
             <InvestmentScore score={scoreValue} size="sm" showLabel={false} />
          </div>

          {/* PRICE */}
          <div className="absolute bottom-4 left-4 text-white">
             <div className="text-xs opacity-90 font-medium uppercase tracking-widest">Starting Price</div>
             <div className="text-xl font-extrabold">AED {property.price.toLocaleString()}</div>
             {/* Show "Value Deal" if below average */}
             {isBelowMarketPrice && (
               <div className="text-[10px] text-green-300 font-bold flex items-center gap-1 mt-0.5">
                 <BarChart3 size={10} /> Below Market Avg
               </div>
             )}
          </div>
        </div>

        {/* CARD BODY */}
        <div className="p-5 flex flex-col flex-grow">
          
          {/* Title & Location */}
          <div className="mb-4">
             <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
               {property.name}
             </h3>
             <div className="flex items-center justify-between">
               <div className="flex items-center text-slate-500 text-xs font-medium uppercase tracking-wide">
                 <MapPin size={12} className="mr-1" /> {property.location}
               </div>
               {/* Show Area Score if available */}
               {areaData && (
                 <div className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                   Area Score: {areaData.overallScore}/10
                 </div>
               )}
             </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-5">
             <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-0.5">Net ROI</div>
                <div className={`text-sm font-extrabold ${textColorClass}`}>
                  {property.financials?.netYield || "N/A"}
                </div>
             </div>
             <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-0.5">Developer</div>
                <div className="text-sm font-bold text-slate-700 truncate">
                  {developerData?.name || property.developer?.name || "Unknown"}
                </div>
             </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-500 italic mb-3 line-clamp-2">
              "{property.aiReason}"
            </p>
            <div className={`w-full py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-center transition-colors ${colorClass} text-white group-hover:opacity-90 flex items-center justify-center gap-2`}>
              View Investment Data <ArrowRight size={14} />
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;