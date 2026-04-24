import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Map, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#FDFBF7]">
      {/* Background and Overlays */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.92]" style={{ backgroundImage: "url('/hero-main.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-[#FDFBF7]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,223,160,0.4)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,169,95,0.15)_0%,_transparent_60%)] mix-blend-multiply pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(198,167,94,0.3)] bg-white/40 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#3A3125]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A75E] animate-pulse" />
              Sovereign Market Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight text-[#3A3125]">
              <span>Make Smarter <span className="sm:hidden"><br /></span>Real</span>
              <br className="hidden sm:block" />
              <span>Estate Decisions</span>
              <br className="hidden sm:block" />
              <span>in the <span className="gold-gradient">UAE</span></span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-[#5A4F40] font-light max-w-lg">
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

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5A4F40]/30">
              Trusted by 2,000+ institutional and global investors
            </p>
          </div>

          {/* Right - Glass Cards */}
          <div className="flex flex-col gap-5">
            {[
              { icon: BarChart3, title: "Market Alpha", desc: "Real-time trends & ROI data.", stat: "7.2%", label: "Alpha Yield" },
              { icon: Map, title: "Area Intelligence", desc: "Deep insights for 7 Emirates.", stat: "500+", label: "Analytic Nodes" },
              { icon: TrendingUp, title: "Investment Scores", desc: "AI-powered scorecards.", stat: "92/100", label: "Alpha Score" },
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center gap-4 md:gap-6 p-6 md:p-8 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3A3125]/5 border border-[#3A3125]/10 transition-all duration-500 group-hover:bg-[#C6A75E] group-hover:text-white">
                  <item.icon className="h-6 w-6 text-[#C6A75E] transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-serif font-bold text-[#3A3125] tracking-tight">{item.title}</h3>
                  <p className="text-xs text-[#5A4F40] font-medium leading-snug">{item.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-serif font-bold text-[#3A3125] tracking-tighter transition-colors group-hover:text-[#C6A75E]">{item.stat}</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#5A4F40]/40">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
