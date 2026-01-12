import React from 'react';

const InvestmentScore = ({ score, size = 'md', showLabel = true }) => {
  // 1. Determine Color based on score (0-10)
  const getColor = (val) => {
    if (val >= 8.5) return 'text-emerald-500 stroke-emerald-500'; // Excellent
    if (val >= 7.0) return 'text-blue-500 stroke-blue-500';       // Good
    if (val >= 5.0) return 'text-yellow-500 stroke-yellow-500';   // Average
    return 'text-red-500 stroke-red-500';                         // Risk
  };

  // 2. Size Configuration
  const sizes = {
    sm: { width: 40, stroke: 3, fontSize: 'text-[10px]' },
    md: { width: 50, stroke: 4, fontSize: 'text-xs' },
    lg: { width: 70, stroke: 5, fontSize: 'text-lg' }
  };
  
  const config = sizes[size] || sizes.md;
  const radius = (config.width - config.stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - ((score || 0) / 10) * circumference;
  const colorClass = getColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center" style={{ width: config.width, height: config.width }}>
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth={config.stroke}
            fill="transparent"
            className="text-slate-100"
          />
          {/* Progress Circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth={config.stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`transition-all duration-1000 ease-out ${colorClass}`}
          />
        </svg>
        
        {/* Number in Center */}
        <div className={`absolute inset-0 flex items-center justify-center font-extrabold ${config.fontSize} ${colorClass.split(' ')[0]}`}>
          {score || "-"}
        </div>
      </div>
      
      {/* Label Text */}
      {showLabel && (
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
          Score
        </span>
      )}
    </div>
  );
};

export default InvestmentScore;