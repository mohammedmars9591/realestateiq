import React, { useState, useEffect } from 'react';
import {
  TrendingUp, ShieldCheck, Wallet, Plane, ShoppingBag,
  Zap, Scale, Trophy, Swords, Building2, MapPin, CheckCircle,
  Leaf, Activity, Globe, Target, ArrowRight, Crown
} from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/emiratesData';
import { BUILDERS } from '../data/buildersData';
import WhatsAppButton from '../components/WhatsAppButton';

const AreaComparison = () => {
  const [mode, setMode] = useState('areas');
  const [goal, setGoal] = useState('growth');
  const [area1Id, setArea1Id] = useState('jvc');
  const [area2Id, setArea2Id] = useState('yas-island');
  const [builder1Id, setBuilder1Id] = useState('emaar');
  const [builder2Id, setBuilder2Id] = useState('binghatti');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const item1 = mode === 'areas'
    ? (DUBAI_AREAS.find(a => a.id === area1Id) || DUBAI_AREAS[0])
    : (BUILDERS.find(b => b.id === builder1Id) || BUILDERS[0]);

  const item2 = mode === 'areas'
    ? (DUBAI_AREAS.find(a => a.id === area2Id) || DUBAI_AREAS[1])
    : (BUILDERS.find(b => b.id === builder2Id) || BUILDERS[1]);

  const simulateGrowth = (item) => {
    if (!item) return { rate: 0, profit: 0 };
    let growthRate = 0;
    const initial = 1000000;
    if (mode === 'areas') {
      if (item.category === 'High Yield') growthRate = 0.25;
      if (item.category === 'Appreciation') growthRate = 0.45;
      if (item.category === 'Luxury') growthRate = 0.30;
      if (item.category === 'Gaming Resort') growthRate = 0.60;
      growthRate += ((item.overallScore || 5) - 7) * 0.02;
    } else {
      if (item.tier === 'Ultra Luxury') growthRate = 0.40;
      if (item.tier === 'High End') growthRate = 0.35;
      if (item.tier === 'Mid-Market') growthRate = 0.25;
      growthRate += ((item.scores?.trust || 5) - 7) * 0.03;
    }
    const futureValue = initial * (1 + growthRate);
    return {
      rate: (growthRate * 100).toFixed(1),
      profit: (futureValue - initial).toLocaleString(undefined, { maximumFractionDigits: 0 }),
    };
  };

  const calculatePersonaScore = (item) => {
    if (!item) return 0;
    if (mode === 'areas') {
      const s = item.scores || {};
      const roiNum = parseFloat(item.roi) || 0;
      if (goal === 'yield') return (roiNum * 2) + (s.cashFlow || 0) + (s.airbnb || 0);
      if (goal === 'growth') return (parseFloat(simulateGrowth(item).rate) * 0.5) + (s.appreciation || 0);
      if (goal === 'safety') return (s.trust || 8) + (item.emirate === 'Abu Dhabi' ? 2 : 0) - (s.risk || 0);
    } else {
      const s = item.scores || {};
      const esg = item.esgRating || 8;
      const conf = (item.aiConfidence || 90) / 10;
      if (goal === 'yield') return (s.rentalDemand || 0) + (s.resaleValue || 0);
      if (goal === 'growth') return (s.resaleValue || 0) + (s.appreciation || 0);
      if (goal === 'safety') return (s.trust || 0) + (item.fundingStability?.includes('Sovereign') ? 3 : 0) + conf + (esg / 10);
    }
    return 0;
  };

  const sim1 = simulateGrowth(item1);
  const sim2 = simulateGrowth(item2);
  const score1 = calculatePersonaScore(item1);
  const score2 = calculatePersonaScore(item2);
  const winner = score1 > score2 ? item1 : item2;

  const i1Scores = item1.scores || {};
  const i2Scores = item2.scores || {};
  const i1Conn = item1.connectivity || {};
  const i2Conn = item2.connectivity || {};

  const GOALS = [
    { id: 'growth', label: 'Capital Growth', icon: TrendingUp, color: 'blue' },
    { id: 'yield', label: 'High Yield', icon: Wallet, color: 'emerald' },
    { id: 'safety', label: 'Safety & Trust', icon: ShieldCheck, color: 'indigo' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EF] fade-in">
      <SEO
        title={mode === 'areas'
          ? `Compare Dubai Areas 2026 — ${item1.name} vs ${item2.name} | Free ROI Analysis`
          : `Compare Dubai Developers 2026 — ${item1.name} vs ${item2.name} | Trust Scores`}
        description="Free AI-powered comparison of Dubai areas and developers. Goal-based winner analysis for capital growth, rental yield, and safety."
        url="/compare"
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#1C1C22] text-white py-20 md:py-28">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6A75E]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C6A75E]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_2px_2px,_#C6A75E_1px,_transparent_0)] bg-[length:32px_32px]" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(198,167,94,0.4)] bg-[rgba(198,167,94,0.08)] px-4 py-1.5 mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
            <Swords size={12} /> AI Investment Battleground
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
            The Investment<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A75E] to-[#E6B76A]">Battleground</span>
          </h1>
          <p className="text-white/60 font-light text-lg max-w-xl mx-auto mb-10">
            Select your goal. Pick two contenders. Our AI engine will tell you which wins for your strategy.
          </p>

          {/* Mode Toggle */}
          <div className="inline-flex bg-white/10 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setMode('areas')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${mode === 'areas' ? 'bg-[#C6A75E] text-[#1C1C22] shadow-md' : 'text-white/70 hover:text-white'}`}
            >
              <MapPin size={16} /> Compare Areas
            </button>
            <button
              onClick={() => setMode('builders')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${mode === 'builders' ? 'bg-[#C6A75E] text-[#1C1C22] shadow-md' : 'text-white/70 hover:text-white'}`}
            >
              <Building2 size={16} /> Compare Developers
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-24">

        {/* ─── GOAL SELECTOR ─── */}
        <div className="bg-white border border-[rgba(198,167,94,0.2)] rounded-3xl p-6 -mt-8 mb-10 shadow-xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-[#1C1C22] font-bold text-sm shrink-0">
              <Target size={16} className="text-[#C6A75E]" />
              My Investment Goal:
            </div>
            <div className="grid grid-cols-3 gap-3 flex-grow w-full">
              {GOALS.map((goalObj) => (
                <button
                  key={goalObj.id}
                  onClick={() => setGoal(goalObj.id)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs md:text-sm font-bold transition-all border ${
                    goal === goalObj.id
                      ? 'bg-[#1C1C22] text-[#C6A75E] border-[#C6A75E]'
                      : 'bg-[#F8F5EF] text-[#7A6E60] border-transparent hover:border-[rgba(198,167,94,0.4)]'
                  }`}
                >
                  <goalObj.icon size={14} /> {goalObj.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─── SELECTOR ─── */}
        <div className="bg-white border border-[rgba(198,167,94,0.2)] rounded-3xl p-8 mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#1C1C22] text-[#C6A75E] rounded-full items-center justify-center border-4 border-[#F8F5EF] shadow-xl z-20">
              <Swords size={20} />
            </div>
            {[
              { label: 'Contender 1', id: mode === 'areas' ? area1Id : builder1Id, onChange: (v) => mode === 'areas' ? setArea1Id(v) : setBuilder1Id(v), color: 'text-[#C6A75E]' },
              { label: 'Contender 2', id: mode === 'areas' ? area2Id : builder2Id, onChange: (v) => mode === 'areas' ? setArea2Id(v) : setBuilder2Id(v), color: 'text-purple-600' },
            ].map(({ label, id, onChange, color }, i) => (
              <div key={i}>
                <label className={`block text-[10px] font-bold uppercase tracking-widest mb-2 ${color}`}>{label}</label>
                <select
                  value={id}
                  onChange={e => onChange(e.target.value)}
                  className="w-full p-4 bg-[#F8F5EF] border border-[rgba(198,167,94,0.25)] rounded-xl font-bold text-[#1C1C22] focus:ring-2 focus:ring-[#C6A75E]/40 outline-none"
                >
                  {(mode === 'areas' ? DUBAI_AREAS : BUILDERS).map(i => (
                    <option key={i.id} value={i.id}>{i.name}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ─── LEFT: DATA ─── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Stats battle table */}
            <div className="bg-white border border-[rgba(198,167,94,0.18)] rounded-3xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-[#1C1C22] text-white text-[10px] font-bold uppercase tracking-widest py-4 text-center">
                <div className="text-white/40 pl-6 text-left">Metric</div>
                <div className="text-[#C6A75E]">{item1.name}</div>
                <div className="text-purple-400">{item2.name}</div>
              </div>
              {mode === 'areas' ? (
                <>
                  <StatRow label="Avg. Price" val1={item1.avgPrice} val2={item2.avgPrice} />
                  <StatRow label="Rental Yield" val1={item1.roi} val2={item2.roi} highlight />
                  <StatRow label="Overall Score" val1={item1.overallScore} val2={item2.overallScore} isScore />
                  <StatRow label="Cash Flow Score" val1={i1Scores.cashFlow} val2={i2Scores.cashFlow} isScore />
                  <StatRow label="Risk Level" val1={i1Scores.risk} val2={i2Scores.risk} inverse />
                  <StatRow label="Lifestyle Score" val1={i1Scores.lifestyle} val2={i2Scores.lifestyle} isScore />
                </>
              ) : (
                <>
                  <StatRow label="Trust Score" val1={i1Scores.trust} val2={i2Scores.trust} isScore highlight />
                  <StatRow label="ESG Rating" val1={item1.esgRating} val2={item2.esgRating} isScore suffix="/10" />
                  <StatRow label="AI Confidence" val1={item1.aiConfidence} val2={item2.aiConfidence} isScore suffix="%" />
                  <StatRow label="Delivery Reliability" val1={i1Scores.deliveryReliability} val2={i2Scores.deliveryReliability} isScore />
                  <StatRow label="Build Quality" val1={i1Scores.constructionQuality} val2={i2Scores.constructionQuality} isScore />
                  <StatRow label="Resale Value" val1={i1Scores.resaleValue} val2={i2Scores.resaleValue} isScore />
                </>
              )}
            </div>

            {/* Connectivity (areas only) */}
            {mode === 'areas' && (
              <div className="bg-white border border-[rgba(198,167,94,0.18)] rounded-3xl p-7 shadow-sm">
                <h3 className="font-bold text-[#1C1C22] mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                  <Plane size={16} className="text-[#C6A75E]" /> Connectivity Showdown
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { name: item1.name, conn: i1Conn, color: 'text-[#C6A75E]' },
                    { name: item2.name, conn: i2Conn, color: 'text-purple-600' },
                  ].map(({ name, conn, color }, idx) => (
                    <div key={idx} className={idx === 1 ? 'border-l border-[rgba(198,167,94,0.15)] pl-8' : ''}>
                      <div className={`font-bold text-sm mb-4 ${color}`}>{name}</div>
                      <ConnItem icon={<Plane size={14} />} label="Airport" val={conn.airport?.mins} />
                      <ConnItem icon={<ShoppingBag size={14} />} label="Mall" val={conn.mall?.mins} />
                      <ConnItem icon={<Building2 size={14} />} label="Downtown" val={conn.business?.mins || 'N/A'} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FutureScope */}
            <div className="relative bg-[#1C1C22] text-white rounded-3xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#C6A75E] font-bold uppercase tracking-widest text-xs mb-6">
                  <Zap size={14} /> FutureScope™ Forecast (5-Year)
                </div>

                {[
                  { item: item1, sim: sim1, color: 'bg-[#C6A75E]', labelColor: 'text-[#C6A75E]' },
                  { item: item2, sim: sim2, color: 'bg-purple-500', labelColor: 'text-purple-300' },
                ].map(({ item, sim, color, labelColor }, i) => (
                  <div key={i} className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className={`font-bold ${labelColor}`}>{item.name}</span>
                      <span className="font-bold">+{sim.rate}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className={`${color} h-full rounded-full transition-all duration-1000`} style={{ width: `${Math.min(Number(sim.rate) * 1.5, 100)}%` }} />
                    </div>
                    <div className="text-xs text-white/40 mt-1.5">Proj. Profit on 1M AED investment: <span className="text-white/70">{sim.profit} AED</span></div>
                  </div>
                ))}

                {/* Winner Banner */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4">
                  <Trophy size={32} className="text-[#C6A75E] shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">
                      {goal === 'yield' ? 'Best for Cash Flow' : goal === 'growth' ? 'Best for Capital Growth' : 'Best for Safety'}
                    </div>
                    <h4 className="font-bold text-xl text-[#C6A75E] mb-1">{winner.name}</h4>
                    <p className="text-sm text-white/50 font-light leading-relaxed">
                      {goal === 'yield' ? 'Optimized for maximum rental income and periodic cash flow.'
                        : goal === 'growth' ? 'Projected superior capital appreciation over the next 5 years.'
                        : 'Selected for institutional backing, transparency, and long-term stability.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: PROFILES ─── */}
          <div className="space-y-5">
            {[
              { item: item1, color: 'border-[#C6A75E]/30 bg-gradient-to-br from-[#FDFBF7] to-[#F8F5EF]', badge: 'text-[#C6A75E] bg-[rgba(198,167,94,0.1)]' },
              { item: item2, color: 'border-purple-200 bg-gradient-to-br from-purple-50 to-white', badge: 'text-purple-700 bg-purple-50' },
            ].map(({ item, color, badge }) => (
              <div key={item.id} className={`p-6 rounded-3xl border ${color} shadow-sm`}>
                <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 ${badge}`}>
                  {mode === 'areas' ? item.category : item.tier}
                </div>
                <h3 className="text-lg font-extrabold text-[#1C1C22] mb-3 tracking-tight">{item.name}</h3>
                {mode === 'areas' && item.amenities && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.amenities.slice(0, 3).map(am => (
                      <span key={am} className="text-[10px] bg-white px-2 py-1 rounded-lg border border-[rgba(198,167,94,0.2)] text-[#7A6E60]">{am}</span>
                    ))}
                  </div>
                )}
                <p className="text-xs text-[#7A6E60] leading-relaxed line-clamp-3 mb-5 font-light">
                  {mode === 'areas' ? item.description : item.usp}
                </p>
                <WhatsAppButton data={item} type={mode === 'areas' ? 'area' : 'builder'} />
              </div>
            ))}

            {/* AI Verdict */}
            <div className="bg-[#1C1C22] text-white p-6 rounded-3xl shadow-sm">
              <h3 className="font-bold flex items-center gap-2 mb-5 text-[#C6A75E]">
                <Scale size={18} /> AI Recommendation
              </h3>
              <div className="space-y-3">
                <VerdictRow
                  label="Safety First"
                  winner={mode === 'areas'
                    ? (item1.overallScore > item2.overallScore ? item1.name : item2.name)
                    : (i1Scores.trust > i2Scores.trust ? item1.name : item2.name)}
                  color="text-emerald-400"
                />
                <VerdictRow label="Max Growth" winner={winner.name} color="text-[#C6A75E]" />
                {mode === 'areas' && (
                  <VerdictRow
                    label="Best Cash Flow"
                    winner={parseFloat(item1.roi) > parseFloat(item2.roi) ? item1.name : item2.name}
                    color="text-purple-400"
                  />
                )}
                {mode === 'builders' && (
                  <VerdictRow
                    label="Best ESG Score"
                    winner={(item1.esgRating || 0) > (item2.esgRating || 0) ? item1.name : item2.name}
                    color="text-cyan-400"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── SUB-COMPONENTS ─────────────────────────────────────────

const StatRow = ({ label, val1, val2, highlight, isScore, inverse, suffix = '' }) => {
  const v1 = parseFloat(val1) || 0;
  const v2 = parseFloat(val2) || 0;
  const win1 = inverse ? v1 < v2 : v1 > v2;
  const isTie = v1 === v2;

  return (
    <div className={`grid grid-cols-3 py-3.5 border-b border-[rgba(198,167,94,0.1)] text-sm text-center items-center transition hover:bg-[#FDFBF7] ${highlight ? 'bg-[rgba(198,167,94,0.04)]' : ''}`}>
      <div className="font-medium text-[#7A6E60] text-left pl-6 text-xs">{label}</div>
      <div className={`font-bold flex items-center justify-center gap-1 text-sm ${isScore && win1 ? 'text-[#C6A75E]' : 'text-[#1C1C22]'}`}>
        {val1 || 'N/A'}{val1 && suffix}
        {isScore && win1 && !isTie && <Trophy size={11} className="text-[#C6A75E]" />}
      </div>
      <div className={`font-bold flex items-center justify-center gap-1 text-sm ${isScore && !win1 && !isTie ? 'text-purple-600' : 'text-[#1C1C22]'}`}>
        {val2 || 'N/A'}{val2 && suffix}
        {isScore && !win1 && !isTie && <Trophy size={11} className="text-purple-500" />}
      </div>
    </div>
  );
};

const ConnItem = ({ icon, label, val }) => (
  <div className="flex justify-between items-center text-xs py-2 border-b border-[rgba(198,167,94,0.08)] last:border-0">
    <div className="flex items-center gap-2 text-[#7A6E60]">{icon} {label}</div>
    <div className="font-bold text-[#1C1C22]">{val || '--'}</div>
  </div>
);

const VerdictRow = ({ label, winner, color }) => (
  <div className="flex justify-between items-center py-2.5 px-3 rounded-xl bg-white/5 border border-white/10">
    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{label}</span>
    <span className={`font-bold text-sm ${color}`}>{winner}</span>
  </div>
);

export default AreaComparison;