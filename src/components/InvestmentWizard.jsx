import React, { useState } from 'react';
import { Search, Zap, TrendingUp, ShieldCheck, Wallet, ArrowRight, Clock, MapPin, HardHat, Home, Building, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentWizard = () => {
  // --- 1. USER INPUT STATE ---
  const [goal, setGoal] = useState('yield'); // 'yield', 'growth', 'luxury'
  const [type, setType] = useState('apartment'); // 'apartment', 'villa', 'penthouse'
  const [budget, setBudget] = useState('1m'); 
  const [showResult, setShowResult] = useState(false);

  // --- 2. SMART RECOMMENDATION LOGIC ---
  const getRecommendation = () => {
    // A. VILLA STRATEGY
    if (type === 'villa') {
      if (goal === 'yield') return {
        area: { name: 'Damac Hills 2', id: 'damac-hills', reason: 'Highest Villa Yields (6-7%)' },
        builder: { name: 'DAMAC', id: 'damac', reason: 'Master of Villa Communities' },
        timing: { verdict: 'BUY READY', color: 'text-blue-600', msg: 'Ready villas are in short supply.' }
      };
      if (goal === 'luxury') return {
        area: { name: 'Palm Jebel Ali', id: 'palm-jebel-ali', reason: 'New Waterfront Prime' },
        builder: { name: 'Nakheel', id: 'nakheel', reason: 'Creator of Palm Jumeirah' },
        timing: { verdict: 'BUY OFF-PLAN', color: 'text-green-600', msg: 'Get in early on Phase 1.' }
      };
      return { // Growth
        area: { name: 'Dubai South', id: 'dubai-south', reason: 'Airport Expansion Zone' },
        builder: { name: 'Emaar', id: 'emaar', reason: 'Emaar South Masterplan' },
        timing: { verdict: 'BUY NOW', color: 'text-green-600', msg: 'Prices to double by 2028.' }
      };
    }

    // B. PENTHOUSE STRATEGY
    if (type === 'penthouse') {
      return {
        area: { name: 'Downtown Dubai', id: 'downtown-dubai', reason: 'Ultimate Status Address' },
        builder: { name: 'Omniyat', id: 'omniyat', reason: 'Architectural Masterpieces' },
        timing: { verdict: 'MONITOR', color: 'text-orange-500', msg: 'Niche market, negotiate hard.' }
      };
    }

    // C. APARTMENT STRATEGY (Default)
    if (goal === 'yield') {
      return {
        area: { name: 'JVC', id: 'jvc', reason: 'ROI King (8-9%)' },
        builder: { name: 'Danube', id: 'danube', reason: '1% Payment Plan' },
        timing: { verdict: 'BUY READY', color: 'text-blue-600', msg: 'Immediate cash flow focus.' }
      };
    }
    if (goal === 'luxury') {
      return {
        area: { name: 'Dubai Marina', id: 'dubai-marina', reason: 'Global Waterfront Hub' },
        builder: { name: 'Select Group', id: 'select-group', reason: 'Marina Specialists' },
        timing: { verdict: 'BUY NOW', color: 'text-green-600', msg: 'High demand for renovated units.' }
      };
    }
    // Growth
    return {
      area: { name: 'Business Bay', id: 'business-bay', reason: 'Rising Commercial Hub' },
      builder: { name: 'Binghatti', id: 'binghatti', reason: 'Fastest Delivery' },
      timing: { verdict: 'BUY OFF-PLAN', color: 'text-green-600', msg: 'Project completions spiking in 2026.' }
    };
  };

  const result = getRecommendation();

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 w-full max-w-5xl mx-auto -mt-10 relative z-20">
      
      {/* HEADER */}
      <div className="bg-slate-900 text-white p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Zap className="text-yellow-400" /> Investment Finder
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Configure your strategy. Our AI maps it to the market's best opportunities.
        </p>
      </div>

      <div className="p-6 md:p-8">
        
        {/* --- INPUTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          
          {/* 1. SELECT GOAL */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              1. Main Goal
            </label>
            <div className="flex flex-col gap-2">
              <button onClick={() => setGoal('yield')} className={`p-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${goal === 'yield' ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-200 hover:border-blue-300'}`}>
                <Wallet size={18} /> High ROI
              </button>
              <button onClick={() => setGoal('growth')} className={`p-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${goal === 'growth' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-blue-300'}`}>
                <TrendingUp size={18} /> Growth
              </button>
              <button onClick={() => setGoal('luxury')} className={`p-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${goal === 'luxury' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-slate-200 hover:border-blue-300'}`}>
                <ShieldCheck size={18} /> Safety
              </button>
            </div>
          </div>

          {/* 2. SELECT PROPERTY TYPE (NEW) */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              2. Property Type
            </label>
            <div className="flex flex-col gap-2">
              <button onClick={() => setType('apartment')} className={`p-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${type === 'apartment' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-blue-300'}`}>
                <Building size={18} /> Apartment
              </button>
              <button onClick={() => setType('villa')} className={`p-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${type === 'villa' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-blue-300'}`}>
                <Home size={18} /> Villa / Townhouse
              </button>
              <button onClick={() => setType('penthouse')} className={`p-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${type === 'penthouse' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-blue-300'}`}>
                <Crown size={18} /> Penthouse
              </button>
            </div>
          </div>

          {/* 3. BUDGET & ACTION */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              3. Budget Range
            </label>
            <div className="space-y-4">
              <div className="relative pt-2">
                 <input 
                   type="range" min="1" max="3" step="1" 
                   value={budget === '1m' ? 1 : budget === '3m' ? 2 : 3}
                   onChange={(e) => {
                     const val = e.target.value;
                     if(val === '1') setBudget('1m');
                     if(val === '2') setBudget('3m');
                     if(val === '3') setBudget('high');
                   }}
                   className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                 />
                 <div className="flex justify-between text-xs font-bold text-slate-500 mt-2">
                   <span className={budget === '1m' ? 'text-blue-600' : ''}>&lt; 1M</span>
                   <span className={budget === '3m' ? 'text-blue-600' : ''}>1M - 3M</span>
                   <span className={budget === 'high' ? 'text-blue-600' : ''}>3M+</span>
                 </div>
              </div>

              <button 
                onClick={() => setShowResult(true)}
                className="w-full py-4 bg-slate-900 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Search size={20} /> Generate Plan
              </button>
            </div>
          </div>

        </div>

        {/* --- 3. RESULTS DISPLAY --- */}
        {showResult && (
          <div className="animate-fade-in border-t border-slate-100 pt-8">
            <h3 className="text-center font-bold text-slate-900 mb-6 flex items-center justify-center gap-2">
              <Zap size={18} className="text-yellow-500" /> AI Recommendation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* CARD 1: BEST AREA */}
              <Link to={`/area/${result.area.id}`} className="block group">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl hover:border-blue-500 transition-colors h-full">
                   <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                     <MapPin size={14} /> Best Area
                   </div>
                   <div className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                     {result.area.name}
                   </div>
                   <div className="text-xs text-slate-500 mt-1 font-medium">{result.area.reason}</div>
                </div>
              </Link>

              {/* CARD 2: BEST BUILDER */}
              <Link to={`/builders/${result.builder.id}`} className="block group">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl hover:border-blue-500 transition-colors h-full">
                   <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                     <HardHat size={14} /> Best Builder
                   </div>
                   <div className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                     {result.builder.name}
                   </div>
                   <div className="text-xs text-slate-500 mt-1 font-medium">{result.builder.reason}</div>
                </div>
              </Link>

              {/* CARD 3: TIMING */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl h-full">
                 <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                   <Clock size={14} /> Strategy
                 </div>
                 <div className={`text-lg font-extrabold ${result.timing.color}`}>
                   {result.timing.verdict}
                 </div>
                 <div className="text-xs text-slate-500 mt-1 font-medium">{result.timing.msg}</div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default InvestmentWizard;