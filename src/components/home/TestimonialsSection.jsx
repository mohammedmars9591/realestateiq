import React from 'react';
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ahmed Al Mansoor", role: "Property Investor, Dubai", quote: "RealEstateIQ transformed how I analyze markets. The area scorecards and heatmaps helped me identify Business Bay as a high-yield opportunity before the mainstream market caught on." },
  { name: "Sarah Williams", role: "Real Estate Agent, Abu Dhabi", quote: "The builder intelligence and comparison tools are invaluable. I can now present data-backed recommendations to clients with confidence, setting me apart from other agents." },
  { name: "Khalid Rahman", role: "Developer, Sharjah", quote: "Understanding supply pipelines and buyer demographics has been critical for our launch strategy. This platform provides institutional-quality data at a fraction of the cost." },
];

export function TestimonialsSection() {
  return (
    <section className="section-ivory py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#3A3125] leading-tight mb-6 tracking-tight">
            Institutional <span className="gold-gradient">Consensus</span>
          </h2>
          <p className="mt-4 text-lg text-[#5A4F40] leading-relaxed font-light">
            Sovereign wealth managers, global HNWIs, and institutional developers rely on our decentralized intelligence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-10 flex flex-col justify-between bg-white/40 backdrop-blur-md border border-white/60 rounded-[2.5rem] transition-all duration-300 hover:bg-white hover:shadow-2xl">
              <div>
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#C6A75E] text-[#C6A75E]" strokeWidth={1} />
                  ))}
                </div>
                <p className="text-lg font-serif italic leading-relaxed text-[#3A3125] opacity-80 mb-10">{`"${t.quote}"`}</p>
              </div>
              <div className="border-t border-[#3A3125]/5 pt-8">
                <p className="text-lg font-serif font-bold text-[#3A3125] mb-1 tracking-tight">{t.name}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
