import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, TrendingUp, ArrowRight, Zap, ShieldCheck, Wallet, Gem, 
  Building2, Check, Star, Crown, Lock
} from 'lucide-react';
import SEO from '../components/SEO';

// --- DATA IMPORT ---
import { DUBAI_AREAS } from '../data/emiratesData';

const ExploreAreas = () => {
  const [activeEmirate, setActiveEmirate] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- 1. SMART CATEGORIZER ---
  const getEmirate = (area) => {
    if (area.emirate) return area.emirate;
    const id = area.id.toLowerCase();
    const name = area.name.toLowerCase();
    if (id.includes('rak') || name.includes('rak') || id.includes('marjan')) return 'Ras Al Khaimah';
    if (id.includes('yas') || id.includes('saadiyat') || id.includes('aldar')) return 'Abu Dhabi';
    if (id.includes('sharjah') || id.includes('aljada')) return 'Sharjah';
    return 'Dubai';
  };

  // --- 2. FILTER LOGIC ---
  const filteredAreas = activeEmirate === 'All' 
    ? DUBAI_AREAS 
    : DUBAI_AREAS.filter(area => getEmirate(area) === activeEmirate);

  // --- 3. LUXURY EMIRATE CARDS DATA ---
  const EMIRATES = [
    { name: 'Dubai', count: '220+ Areas', image: 'bg-blue-900', icon: <Building2 className="text-blue-400" /> },
    { name: 'Abu Dhabi', count: '90+ Areas', image: 'bg-teal-900', icon: <ShieldCheck className="text-teal-400" /> },
    { name: 'Ras Al Khaimah', count: '30+ Areas', image: 'bg-purple-900', icon: <Zap className="text-purple-400" /> },
    { name: 'Sharjah', count: '45+ Areas', image: 'bg-orange-900', icon: <Wallet className="text-orange-400" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in bg-slate-50">
      <SEO 
        title="UAE Investment Map 2026 | EstateIQ" 
        description="Explore investment zones across all 7 Emirates. Compare yields, prices, and growth potential."
      />

      {/* --- HEADER --- */}
      <div className="py-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          The National <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Investment Map</span>
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Navigate the UAE's real estate landscape. From the luxury of Dubai to the high yields of Sharjah.
        </p>
      </div>

      {/* --- SECTION 1: LUXURY EMIRATE SELECTOR --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <button 
          onClick={() => setActiveEmirate('All')}
          className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 group
            ${activeEmirate === 'All' ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'}
          `}
        >
          <MapPin size={32} className={activeEmirate === 'All' ? "text-white" : "text-slate-400 group-hover:text-blue-500"} />
          <div className="text-lg font-bold">All Emirates</div>
          <div className={`text-xs uppercase tracking-widest ${activeEmirate === 'All' ? 'text-slate-400' : 'text-slate-400'}`}>National View</div>
        </button>

        {EMIRATES.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveEmirate(item.name)}
            className={`
              relative overflow-hidden p-6 rounded-2xl border text-left transition-all duration-300 group
              ${activeEmirate === item.name 
                ? `${item.image} text-white border-transparent shadow-2xl scale-105 ring-2 ring-offset-2 ring-blue-500` 
                : 'bg-white border-slate-200 hover:shadow-xl hover:-translate-y-1'}
            `}
          >
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h3 className={`text-xl font-bold mb-1 ${activeEmirate === item.name ? 'text-white' : 'text-slate-900'}`}>{item.name}</h3>
                <p className={`text-xs font-medium ${activeEmirate === item.name ? 'text-white/70' : 'text-slate-500'}`}>{item.count}</p>
              </div>
              <div className={`p-3 rounded-full ${activeEmirate === item.name ? 'bg-white/10 backdrop-blur-md' : 'bg-slate-50'}`}>
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
            </div>
            {/* Background Glow for Active State */}
            {activeEmirate === item.name && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            )}
          </button>
        ))}
      </div>

      {/* --- SECTION 2: AREAS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredAreas.length > 0 ? (
          filteredAreas.map((area) => (
            <Link to={`/area/${area.id}`} key={area.id} className="group block hover:no-underline h-full">
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'} transition-transform duration-700 group-hover:scale-110`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {getEmirate(area)}
                    </span>
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                    <div className="flex items-center gap-4 text-sm font-medium">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                         <TrendingUp size={14} /> {area.roi} Yield
                      </span>
                      <span className="w-px h-4 bg-white/30"></span>
                      <span className="text-amber-400 font-bold">
                         {area.avgPrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {area.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:text-blue-700">
                    <span>View Analysis</span>
                    <div className="bg-blue-50 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <h3 className="text-xl font-bold text-slate-400">Loading Data...</h3>
          </div>
        )}
      </div>

      {/* --- SECTION 3: MEMBERSHIP PRICING ("Prising about product") --- */}
      <div className="border-t border-slate-200 pt-20 pb-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Gem size={14} /> EstateIQ Membership
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Unlock <span className="text-blue-600">Pro Insights</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Choose a plan to access advanced features like 5-Year Forecasts, Developer Risk Scores, and Heatmap Overlays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          
          {/* PLAN 1: BASIC */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
            <div className="text-4xl font-extrabold text-slate-900 mb-6">Free</div>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">Essential market access for casual browsers.</p>
            
            <ul className="space-y-4 mb-8 text-sm font-medium text-slate-600">
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> Access to 50+ Areas</li>
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> Basic ROI Data</li>
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> Developer Profiles</li>
              <li className="flex gap-3 opacity-50"><Lock size={18} /> 5-Year FutureScope™</li>
              <li className="flex gap-3 opacity-50"><Lock size={18} /> Risk Score Analysis</li>
            </ul>
            
            <button className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">
              Get Started
            </button>
          </div>

          {/* PLAN 2: PRO (Highlighted) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4 border border-slate-800">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-widest">
              Most Popular
            </div>
            
            <h3 className="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2">
              <Star size={20} fill="currentColor" /> Pro Investor
            </h3>
            <div className="text-4xl font-extrabold mb-6">$49<span className="text-lg font-medium text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-300 mb-8 leading-relaxed">For serious investors who need data-backed decisions.</p>
            
            <ul className="space-y-4 mb-8 text-sm font-medium text-slate-200">
              <li className="flex gap-3"><Check size={18} className="text-blue-400" /> Everything in Basic</li>
              <li className="flex gap-3"><Check size={18} className="text-blue-400" /> <span className="text-white font-bold">FutureScope™ Forecasts</span></li>
              <li className="flex gap-3"><Check size={18} className="text-blue-400" /> Developer Risk Scores</li>
              <li className="flex gap-3"><Check size={18} className="text-blue-400" /> Compare 3 Areas at once</li>
              <li className="flex gap-3"><Check size={18} className="text-blue-400" /> PDF Reports Download</li>
            </ul>
            
            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/50">
              Upgrade to Pro
            </button>
          </div>

          {/* PLAN 3: ELITE */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Crown size={20} className="text-yellow-500" /> Elite
            </h3>
            <div className="text-4xl font-extrabold text-slate-900 mb-6">$99<span className="text-lg font-medium text-slate-400">/mo</span></div>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">Full access for agencies and institutional investors.</p>
            
            <ul className="space-y-4 mb-8 text-sm font-medium text-slate-600">
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> Everything in Pro</li>
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> API Access</li>
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> White-Label Reports</li>
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> Priority Support</li>
              <li className="flex gap-3"><Check size={18} className="text-green-500" /> 1-on-1 Consultation</li>
            </ul>
            
            <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-900 font-bold hover:border-slate-900 transition-all">
              Contact Sales
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ExploreAreas;