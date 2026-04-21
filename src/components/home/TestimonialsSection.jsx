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
          <h2 className="display-medium text-[#1C1C22] mb-6">
            Trusted by UAE <span className="gold-gradient">Real Estate Professionals</span>
          </h2>
          <p className="mt-4 text-lg text-[#7A6E60] leading-relaxed font-light">
            Investors, agents, and developers rely on our intelligence to make smarter decisions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card-hover p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#C6A75E]/80 text-[#C6A75E]/80" strokeWidth={1} />
                  ))}
                </div>
                <p className="text-base italic leading-relaxed text-[#4A3F2F]/80 font-light mb-8">{`"${t.quote}"`}</p>
              </div>
              <div className="border-t border-[rgba(198,167,94,0.2)] pt-6">
                <p className="text-base font-bold text-[#1C1C22] mb-1 tracking-tight">{t.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A75E]/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
