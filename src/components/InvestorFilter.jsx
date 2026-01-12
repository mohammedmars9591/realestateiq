import React from 'react';

// These exact names match the logic in your pages
const filters = [
  "All", 
  "Best for ROI", 
  "Capital Growth", 
  "Business Hubs", 
  "Luxury Living"
];

const InvestorFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <button 
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
            activeFilter === filter 
            ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105' 
            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-500 hover:text-blue-600'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default InvestorFilter;