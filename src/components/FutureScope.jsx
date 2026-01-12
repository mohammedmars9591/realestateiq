import React, { useState } from 'react';
import { TrendingUp, MapPin, Calendar, AlertCircle } from 'lucide-react';

const FutureScope = ({ property }) => {
  const [year, setYear] = useState(2026);

  // Mock Logic: Calculate future price based on a growth rate (e.g. 5% per year)
  // In a real app, this would come from your AI backend
  const growthRate = property.aiCategory === "Appreciation" ? 1.08 : 1.05; // 8% vs 5%
  const yearsDiff = year - 2026;
  
  const futurePrice = Math.round(property.price * Math.pow(growthRate, yearsDiff));
  const profit = futurePrice - property.price;

  // Future Milestones (Mock Data)
  const milestones = [
    { year: 2027, event: "New Metro Station Opens (0.5km)", impact: "High" },
    { year: 2028, event: "Community Mall Completion", impact: "Med" },
    { year: 2029, event: "Airport Expansion", impact: "High" }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-700 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="text-blue-400" /> FutureScope AI
            </h2>
            <p className="text-slate-400 text-sm">Predictive appreciation engine</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-center">
             <div className="text-xs text-slate-400 uppercase font-bold">Target Year</div>
             <div className="text-2xl font-bold font-mono text-blue-300">{year}</div>
          </div>
        </div>

        {/* --- THE SLIDER --- */}
        <div className="mb-10 px-2">
          <input 
            type="range" 
            min="2026" 
            max="2031" 
            step="1" 
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-3 font-bold uppercase tracking-widest">
            <span>Today</span>
            <span>2027</span>
            <span>2028</span>
            <span>2029</span>
            <span>2030</span>
            <span>2031</span>
          </div>
        </div>

        {/* --- PREDICTION CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Price Card */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="text-slate-400 text-xs font-bold uppercase mb-1">Projected Value</div>
            <div className="text-3xl font-extrabold text-white mb-2">
              AED {futurePrice.toLocaleString()}
            </div>
            <div className="inline-flex items-center gap-1 text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">
              + AED {profit.toLocaleString()} ({((profit/property.price)*100).toFixed(0)}%)
            </div>
          </div>

          {/* Infrastructure Impact Card */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
            <div className="text-slate-400 text-xs font-bold uppercase mb-3">Upcoming Catalysts</div>
            <div className="space-y-3">
              {milestones.filter(m => m.year <= year).map((m, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm animate-in fade-in slide-in-from-left-4">
                  <div className="mt-1 min-w-[4px] h-[4px] rounded-full bg-blue-400"></div>
                  <div>
                    <span className="text-blue-200 font-bold">{m.year}:</span> <span className="text-slate-300">{m.event}</span>
                  </div>
                </div>
              ))}
              {milestones.filter(m => m.year <= year).length === 0 && (
                <div className="text-slate-500 text-sm italic">Move slider to see future infrastructure...</div>
              )}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 text-[10px] text-slate-500 bg-black/20 p-3 rounded-lg">
          <AlertCircle size={12} className="mt-0.5 shrink-0" />
          Predictions are based on historical data and announced government infrastructure projects. Actual market conditions may vary.
        </div>
      </div>
    </div>
  );
};

export default FutureScope;