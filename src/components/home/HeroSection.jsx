import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Map, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#FDFBF7]">
      {/* Background and Overlays */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.85]" style={{ backgroundImage: "url('/hero-bg.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,223,160,0.35)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,169,95,0.12)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(198,167,94,0.4)] bg-[rgba(198,167,94,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A75E] animate-pulse" />
              UAE Property Market Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-[#1C1C22]">
              <span>Make Smarter <span className="sm:hidden"><br /></span>Real</span>
              <br className="hidden sm:block" />
              <span>Estate Decisions</span>
              <br className="hidden sm:block" />
              <span>in the <span className="gold-gradient">UAE</span></span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-[#7A6E60] font-light max-w-lg">
              Access institutional-grade market intelligence for every area, builder, and property type across all seven emirates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/heatmap" className="btn-primary group inline-flex items-center justify-center gap-3 text-sm">
                Open Heatmap
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/compare" className="btn-secondary inline-flex items-center justify-center gap-3 text-sm">
                Compare Markets
              </Link>
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#7A6E60]/60">
              Trusted by 2,000+ investors across the UAE
            </p>
          </div>

          {/* Right - Glass Cards */}
          <div className="flex flex-col gap-5">
            {[
              { icon: BarChart3, title: "Market Analytics", desc: "Real-time trends & ROI data.", stat: "7.2%", label: "Avg Yield" },
              { icon: Map, title: "Area Intelligence", desc: "Deep insights for 7 Emirates.", stat: "500+", label: "Areas" },
              { icon: TrendingUp, title: "Investment Scores", desc: "AI-powered scorecards.", stat: "92/100", label: "Airbnb Score" },
            ].map((item, idx) => (
              <div key={idx} className="glass-card-hover group flex items-center gap-4 md:gap-5 p-5 md:p-6 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(198,167,94,0.12)] border border-[rgba(198,167,94,0.25)] transition-all duration-500 group-hover:bg-[rgba(198,167,94,0.2)]">
                  <item.icon className="h-6 w-6 text-[#C6A75E]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[#1C1C22] tracking-tight">{item.title}</h3>
                  <p className="text-sm text-[#7A6E60] font-light leading-snug">{item.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xl font-bold gold-gradient tracking-tighter">{item.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#7A6E60]/60">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
