import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InvestorFilter from '../components/InvestorFilter';
import PropertyCard from '../components/PropertyCard';
import SEO from '../components/SEO';
import { DUBAI_PROPERTIES } from '../data/dubaiArea';

const MarketPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter Logic
  const filteredProperties = DUBAI_PROPERTIES.filter(prop => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Best for ROI") return prop.category === "High Yield" || prop.aiCategory === "High Yield";
    if (activeFilter === "Capital Growth") return prop.category === "Appreciation" || prop.aiCategory === "Appreciation";
    if (activeFilter === "Business Hubs") return prop.category === "Business" || prop.aiCategory === "Business";
    if (activeFilter === "Luxury Living") return prop.category === "Luxury" || prop.aiCategory === "Luxury";
    return true;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      <SEO 
        title="Live Dubai Real Estate Market | EstateIQ" 
        description="Browse verified high-yield properties in Dubai. Filter by ROI, Luxury, and Capital Growth."
      />

      <div className="py-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Live <span className="text-blue-600">Market</span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto mb-10">
          Real-time opportunities verified by our AI analysts.
        </p>
        
        {/* THE FILTER COMPONENT */}
        <InvestorFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>

      {/* RESULTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredProperties.map(prop => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
          <h3 className="text-lg font-bold text-slate-400 mb-2">No properties found</h3>
          <p className="text-slate-400 text-sm">Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};

export default MarketPage;