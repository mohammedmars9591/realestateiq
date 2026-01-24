import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Crown, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/areaData'; // Corrected Import

const MarketPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // --- FILTER LOGIC ---
  const filteredProperties = (DUBAI_AREAS || []).filter(prop => {
    if (activeFilter === "All") return true;
    
    // Filter by Tags/Category
    if (activeFilter === "High Yield") {
      // Check if ROI starts with 8, 9, or 10+
      return prop.roi?.match(/^[8-9]|^1[0-9]/) || prop.category?.includes("Yield");
    }
    if (activeFilter === "Growth") {
      return prop.category?.includes("Appreciation") || prop.category?.includes("Growth");
    }
    if (activeFilter === "Luxury") {
      return prop.category?.includes("Luxury") || prop.category?.includes("Villa");
    }
    return true;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12 px-4 fade-in">
      <SEO title="Dubai Market Analysis | RealEstateIQ" description="Analyze top performing areas in Dubai by ROI and Capital Growth." />
      
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Market Analysis</h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Filter Dubai's top investment zones based on your strategy.
          </p>
        </div>
        
        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-10">
          <FilterButton label="All" active={activeFilter} onClick={setActiveFilter} />
          <FilterButton label="High Yield" active={activeFilter} onClick={setActiveFilter} icon={<DollarSign size={14}/>} />
          <FilterButton label="Growth" active={activeFilter} onClick={setActiveFilter} icon={<TrendingUp size={14}/>} />
          <FilterButton label="Luxury" active={activeFilter} onClick={setActiveFilter} icon={<Crown size={14}/>} />
        </div>

        {/* RESULTS GRID */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((area) => (
              <Link to={`/area/${area.id}`} key={area.id} className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Image Section */}
                <div className={`h-48 ${area.imageColor || 'bg-slate-800'} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-1">{area.emirate}</div>
                    <h3 className="text-2xl font-bold">{area.name}</h3>
                  </div>
                </div>
                
                {/* Data Section */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Proj. ROI</div>
                      <div className="text-xl font-extrabold text-emerald-600">{area.roi}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 font-bold uppercase">Entry Price</div>
                      <div className="text-lg font-bold text-slate-900">{area.avgPrice}</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 text-sm font-bold">
                    <span>View Analysis</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <p>No areas found matching this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-component for buttons
const FilterButton = ({ label, active, onClick, icon }) => (
  <button
    onClick={() => onClick(label)}
    className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-sm ${
      active === label 
      ? 'bg-blue-600 text-white shadow-blue-500/30' 
      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
    }`}
  >
    {icon} {label}
  </button>
);

export default MarketPage;