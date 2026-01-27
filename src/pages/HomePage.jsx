import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Crown,
  Wallet,
  Zap,
  Map,
  ShieldCheck,
  Gem,
  BarChart3,
  HardHat,
  LineChart,
  Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import { DUBAI_AREAS } from '../data/areaData';
import { BUILDERS } from '../data/buildersData';

const HomePage = () => {
  const featuredAreas = (DUBAI_AREAS || []).slice(0, 4);
  const featuredBuilders = (BUILDERS || []).slice(0, 4);

  return (
    <div className="bg-slate-50 font-sans text-slate-900">

      <SEO
        title="RealEstateIQ | Dubai Property Intelligence Platform"
        description="Institutional-grade analytics for Dubai real estate investors. ROI heatmaps, developer scores, and AI-powered forecasts."
      />

      {/* ================= HERO ================= */}
      <section className="relative bg-white pt-20 pb-32 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
            Live 2026 Market Intelligence
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Smart Data for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Smart Investors
            </span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            Stop guessing. Make Dubai property decisions using verified data,
            AI forecasting, and institutional-grade scoring models.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/heatmap"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition"
            >
              Open ROI Heatmap
            </Link>
            <Link
              to="/compare"
              className="px-8 py-4 bg-white border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition"
            >
              Compare Areas
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
      </section>

      {/* ================= QUICK TOOLS ================= */}
      <section className="-mt-24 relative z-20 max-w-5xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-4 shadow-xl border">
          <ToolCard to="/areas" icon={<Globe />} label="Explore Areas" />
          <ToolCard to="/builders" icon={<HardHat />} label="Rate Developers" />
          <ToolCard to="/heatmap" icon={<TrendingUp />} label="ROI Heatmap" />
          <ToolCard to="/compare" icon={<LineChart />} label="Compare Tools" />
        </div>
      </section>

      {/* ================= HOW SMART INVESTORS WIN ================= */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            Institutional Playbook
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            How Smart Investors Win
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            The same framework used by family offices and private equity funds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LuxuryStep
            step="01"
            title="Identify Capital Flow"
            desc="Visualize where institutional money is moving using live ROI heatmaps."
            icon={<Map size={26} />}
          />
          <LuxuryStep
            step="02"
            title="Eliminate Developer Risk"
            desc="Evaluate delivery history, financial stability, and execution quality."
            icon={<ShieldCheck size={26} />}
          />
          <LuxuryStep
            step="03"
            title="Forecast Exit Value"
            desc="AI-powered resale and yield projections for 2028–2030."
            icon={<LineChart size={26} />}
          />
        </div>
      </section>

      {/* ================= TRENDING AREAS ================= */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <h2 className="text-3xl font-bold mb-8">Trending Districts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAreas.map(area => (
            <Link
              key={area.id}
              to={`/area/${area.id}`}
              className="relative h-[380px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className={`absolute inset-0 ${area.imageColor || 'bg-slate-800'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="absolute top-5 left-5 bg-black/40 text-amber-400 px-3 py-1 rounded-full text-xs font-bold">
                {area.category}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {area.name}
                </h3>
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-400 font-bold">
                    ROI {area.roi}
                  </span>
                  <span className="text-amber-400 font-bold">
                    {area.overallScore}/10
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= DEVELOPERS ================= */}
      <section className="bg-slate-100 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">
            Developer Reliability Index
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBuilders.map(builder => (
              <Link
                key={builder.id}
                to={`/builder/${builder.id}`}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
              >
                <div className="flex justify-between mb-4">
                  <Building2 />
                  {builder.id === 'emaar' && <Crown className="text-amber-500" />}
                </div>

                <h3 className="font-bold text-lg">{builder.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{builder.tier}</p>

                <div className="flex justify-between text-sm">
                  <span>Trust Score</span>
                  <span className="font-bold text-blue-600">
                    {builder.scores?.trust}/10
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-blue-600 text-white rounded-3xl p-14 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Invest Smarter?
          </h2>
          <p className="text-blue-100 mb-8">
            Access institutional-grade data. Free for a limited time.
          </p>
          <Link
            to="/areas"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
};

/* ================= COMPONENTS ================= */

const ToolCard = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex flex-col items-center justify-center p-6 rounded-xl border hover:bg-slate-50 transition"
  >
    {React.cloneElement(icon, { size: 30 })}
    <span className="mt-2 font-bold text-sm">{label}</span>
  </Link>
);

const LuxuryStep = ({ step, title, desc, icon }) => (
  <div className="relative bg-white rounded-3xl border p-8 shadow-xl hover:shadow-2xl transition hover:-translate-y-2">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500"></div>
    <div className="absolute top-6 right-6 text-6xl font-extrabold text-slate-100">
      {step}
    </div>
    <div className="w-14 h-14 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 text-sm">{desc}</p>
  </div>
);

export default HomePage;
