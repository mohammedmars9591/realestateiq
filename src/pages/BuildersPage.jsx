import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, TrendingUp, Wallet, CheckCircle, 
  Crown, ShieldCheck, Zap, ArrowRight, Heart, Palette, Gem, Leaf, Activity, Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import { BUILDERS } from '../data/buildersData';

const BuildersPage = () => {
  const [quizResult, setQuizResult] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const filteredBuilders = BUILDERS.filter(b => {
    if (filter === 'all') return true;
    if (filter === 'esg') return b.esgRating > 9.0;
    if (filter === 'govt') return b.fundingStability?.includes('Sovereign') || b.fundingStability?.includes('Government');
    if (filter === 'confidence') return b.aiConfidence > 95;
    return true;
  });
  
  // --- 1. QUIZ LOGIC (Matches User Goal to Developer) ---
  const matchBuilder = (goal) => {
    switch(goal) {
      case 'cheap': 
        setQuizResult(BUILDERS.find(b => b.id === 'danube')); // 1% Plan
        break;
      case 'luxury_art': 
        setQuizResult(BUILDERS.find(b => b.id === 'omniyat')); // Zaha Hadid
        break;
      case 'wellness': 
        setQuizResult(BUILDERS.find(b => b.id === 'mag')); // Bio-Living
        break;
      case 'safe': 
        setQuizResult(BUILDERS.find(b => b.id === 'aldar')); // Govt Safety
        break;
      case 'boutique': 
        setQuizResult(BUILDERS.find(b => b.id === 'ellington')); // Hotel Style
        break;
      case 'villa': 
        setQuizResult(BUILDERS.find(b => b.id === 'damac')); // Lagoons
        break;
      case 'records': 
        setQuizResult(BUILDERS.find(b => b.id === 'binghatti')); // Bugatti
        break;
      default:
        setQuizResult(BUILDERS.find(b => b.id === 'emaar'));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buildersListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Dubai & UAE Real Estate Developers 2026",
    "description": "Comprehensive institutional analysis of 25+ UAE real estate developers with Trust Scores, ESG Ratings, AI Delivery Confidence, and payment plan data.",
    "url": "https://www.realestateiq.ae/builders",
    "numberOfItems": BUILDERS.length,
    "itemListElement": BUILDERS.slice(0, 10).map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "url": `https://www.realestateiq.ae/builder/${b.id}`,
      "description": `${b.name} — Tier: ${b.tier}, Trust Score: ${b.scores?.trust || "N/A"}/10, Best For: ${b.bestFor?.[0] || "investors"}`
    }))
  };

  const buildersBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.realestateiq.ae" },
      { "@type": "ListItem", "position": 2, "name": "Developer Intelligence Hub", "item": "https://www.realestateiq.ae/builders" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 fade-in">
      
      <SEO 
        title="Top 25 Dubai Real Estate Developers 2026 — Trust Scores, Reviews & ROI"
        description="Compare 25+ top Dubai real estate developers for free. Free Trust Scores, ESG Ratings, AI Delivery Confidence, and payment plan data for Emaar, Damac, Sobha, Binghatti, Danube and more. Updated 2026."
        url="/builders"
        schema={buildersListSchema}
        faqSchema={[
          {
            question: "Who is the most trusted developer in Dubai?",
            answer: "Emaar Properties is the most trusted developer in Dubai with a Trust Score of 9.8/10 on RealEstateIQ. They are government-backed, have 100% delivery rate, and are responsible for iconic projects like Burj Khalifa, Downtown Dubai, and Dubai Mall. Aldar is the most trusted in Abu Dhabi."
          },
          {
            question: "Which developer has the best payment plan in Dubai?",
            answer: "Danube Properties is ranked #1 for payment flexibility on RealEstateIQ with a 10/10 payment score. Their signature 1% monthly payment plan makes them the most accessible developer for first-time investors. Ellington, Samana, and Reportage also offer flexible post-handover plans."
          },
          {
            question: "What is the most reliable off-plan developer in UAE?",
            answer: "Binghatti Developers has a 100% on-time delivery record — making them the most reliable for off-plan delivery. Emaar has a 99%+ track record. Sobha Realty (AI Confidence: 97.2%) is ranked highest for construction quality with a 10/10 build quality score."
          }
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildersBreadcrumb) }} />

      {/* HERO SECTION */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900">
          The Titans of <span className="text-blue-600">Dubai Real Estate</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          We track the top 15 developers in the UAE. From ultra-luxury masterpieces to investor-friendly budget options.
        </p>
      </div>

      {/* --- FEATURE: THE BUILDER MATCHER --- */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
            <Zap className="text-yellow-400" /> 
            Find Your Perfect Developer Match
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <QuizButton label="💰 Best Payment Plan" onClick={() => matchBuilder('cheap')} />
            <QuizButton label="🛡️ Safest (Govt Backed)" onClick={() => matchBuilder('safe')} />
            <QuizButton label="🏡 Luxury Villas" onClick={() => matchBuilder('villa')} />
            <QuizButton label="🧘 Wellness & Health" onClick={() => matchBuilder('wellness')} />
            <QuizButton label="🎨 Boutique Design" onClick={() => matchBuilder('boutique')} />
            <QuizButton label="💎 Architectural Art" onClick={() => matchBuilder('luxury_art')} />
            <QuizButton label="🏆 Record Breakers" onClick={() => matchBuilder('records')} />
          </div>

          {/* QUIZ RESULT CARD */}
          {quizResult && (
            <div className="bg-white text-slate-900 p-8 rounded-2xl max-w-lg mx-auto animate-fade-in shadow-2xl border-4 border-yellow-400 relative">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-sm">
                Top Recommendation
              </div>
              <div className="text-sm font-bold uppercase text-slate-400 mb-2">Based on your choice</div>
              <h3 className="text-4xl font-extrabold text-blue-600 mb-2">{quizResult.name}</h3>
              <p className="text-slate-600 font-medium mb-6 text-lg">"{quizResult.usp}"</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-left bg-slate-50 p-4 rounded-xl">
                 <div>
                   <span className="text-xs font-bold text-slate-400 uppercase">Best For</span>
                   <div className="font-bold text-slate-900 text-sm">{quizResult.bestFor[0]}</div>
                 </div>
                 <div>
                   <span className="text-xs font-bold text-slate-400 uppercase">Trust Score</span>
                   <div className="font-bold text-green-600 text-sm">{quizResult.scores.trust}/10</div>
                 </div>
              </div>

              {/* FIX: Use /builder/ (singular) to match App.jsx routing */}
              <Link to={`/builder/${quizResult.id}`} className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition w-full justify-center">
                Read Full Analysis <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-slate-900 -z-0"></div>
      </div>

      {/* --- INSTITUTIONAL FILTERS --- */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <button 
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-400'}`}
        >
          All Titans
        </button>
        <button 
          onClick={() => setFilter('esg')}
          className={`px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${filter === 'esg' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-emerald-400'}`}
        >
          <Leaf size={14} /> ESG Leaders
        </button>
        <button 
          onClick={() => setFilter('govt')}
          className={`px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${filter === 'govt' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-purple-400'}`}
        >
          <Globe size={14} /> Government Backed
        </button>
        <button 
          onClick={() => setFilter('confidence')}
          className={`px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${filter === 'confidence' ? 'bg-amber-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-amber-400'}`}
        >
          <Activity size={14} /> High Confidence
        </button>
      </div>

      {/* --- BUILDER GRID (Filtered) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBuilders.map((builder) => (
          // FIX: Use /builder/ (singular) here as well
          <Link to={`/builder/${builder.id}`} key={builder.id} className="block hover:no-underline group h-full">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
              
              {/* Colored Header */}
              <div className={`p-6 ${builder.imageColor || 'bg-slate-800'} text-white relative overflow-hidden`}>
                <div className="relative z-10 flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold truncate pr-2">{builder.name}</h3>
                  {builder.id === 'emaar' && <Crown size={24} className="text-yellow-400 shrink-0" />}
                  {builder.id === 'omniyat' && <Gem size={24} className="text-purple-400 shrink-0" />}
                  {builder.id === 'mag' && <Heart size={24} className="text-red-400 shrink-0" />}
                </div>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                  {builder.tier}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Building2 size={16} /> Est.
                  </span>
                  <span className="font-bold text-slate-900">{builder.established}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-2">
                    <TrendingUp size={16} /> Best For
                  </span>
                  <span className="font-bold text-blue-600 text-right text-xs max-w-[150px] truncate">{builder.bestFor[0]}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-4">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed line-clamp-3">
                    "{builder.usp}"
                  </p>
                </div>
                
                {/* Highlights */}
                <div className="pt-2 space-y-2">
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                      <CheckCircle size={14} className="text-green-500 shrink-0" />
                      <span>Trust Score: <strong>{builder.scores?.trust || "N/A"}/10</strong></span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                      <Leaf size={14} className="text-emerald-500 shrink-0" />
                      <span>ESG Rating: <strong>{builder.esgRating || "N/A"}/10</strong></span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-600">
                      <Activity size={14} className="text-amber-500 shrink-0" />
                      <span>AI Delivery Confidence: <strong className="text-amber-600">{builder.aiConfidence || "N/A"}%</strong></span>
                  </div>
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-blue-600 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                View Full Analysis →
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* --- 3. ANALYST VERDICTS (Bottom Section) --- */}
      <div className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Analyst Verdicts: 2026 Edition</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <VerdictBox 
            title="Best Build Quality" 
            winner="Sobha & Ellington" 
            desc="For obsessive attention to detail, Sobha's in-house construction and Ellington's boutique hotel finish are unmatched."
            icon={<ShieldCheck size={24} />}
            color="bg-purple-50 border-purple-100 text-purple-800"
            iconBg="bg-purple-200 text-purple-900"
          />

          <VerdictBox 
            title="Best for Flipping" 
            winner="Emaar & Select" 
            desc="Emaar (Downtown) and Select Group (Marina) offer the highest liquidity. You can sell these units in days, not months."
            icon={<TrendingUp size={24} />}
            color="bg-blue-50 border-blue-100 text-blue-800"
            iconBg="bg-blue-200 text-blue-900"
          />

          <VerdictBox 
            title="Most Unique" 
            winner="Omniyat & MAG" 
            desc="Omniyat builds art (The Opus). MAG builds health (Keturah). Choose these if you want a trophy asset, not just a rental."
            icon={<Gem size={24} />}
            color="bg-emerald-50 border-emerald-100 text-emerald-800"
            iconBg="bg-emerald-200 text-emerald-900"
          />

          <VerdictBox 
            title="Safest Investment" 
            winner="Aldar & Emaar" 
            desc="Aldar is backed by Abu Dhabi Govt. Emaar is backed by Dubai Govt. These are 'Too Big To Fail' investments."
            icon={<Crown size={24} />}
            color="bg-amber-50 border-amber-100 text-amber-800"
            iconBg="bg-amber-200 text-amber-900"
          />

          <VerdictBox 
            title="Best Payment Plan" 
            winner="Danube" 
            desc="Still the undefeated king of the 1% Monthly Payment Plan. Perfect for first-time investors with limited cash flow."
            icon={<Wallet size={24} />}
            color="bg-green-50 border-green-100 text-green-800"
            iconBg="bg-green-200 text-green-900"
          />

           <VerdictBox 
            title="Best for Youth" 
            winner="Arada" 
            desc="Arada brings skate parks, forests, and modern community centers. They are capturing the younger demographic perfectly."
            icon={<Palette size={24} />}
            color="bg-red-50 border-red-100 text-red-800"
            iconBg="bg-red-200 text-red-900"
          />

        </div>
      </div>

    </div>
  );
};

// --- SUB-COMPONENTS ---

const QuizButton = ({ label, onClick }) => (
  <button 
    onClick={onClick} 
    className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition font-bold text-sm md:text-base backdrop-blur-sm"
  >
    {label}
  </button>
);

const VerdictBox = ({ title, winner, desc, icon, color, iconBg }) => (
  <div className={`p-6 rounded-2xl border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow ${color}`}>
    <div className={`p-3 rounded-full mb-4 ${iconBg}`}>
      {icon}
    </div>
    <h3 className="text-sm font-bold uppercase tracking-wider opacity-70 mb-1">{title}</h3>
    <div className="font-extrabold text-lg mb-3">{winner}</div>
    <p className="text-xs opacity-80 leading-relaxed font-medium">{desc}</p>
  </div>
);

export default BuildersPage;