import React from 'react';

const stats = [
  { value: "7", label: "Emirates Covered" },
  { value: "500+", label: "Areas Analyzed" },
  { value: "200+", label: "Builder Profiles" },
  { value: "50K+", label: "Property Data Points" },
];

export function StatsSection() {
  return (
    <section className="section-warm border-y border-[rgba(198,167,94,0.2)] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:gap-12 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-5xl md:text-6xl font-serif font-bold text-[#3A3125] group-hover:text-[#C6A75E] tracking-tighter transition-all duration-700">
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#5A4F40]/40 group-hover:text-[#5A4F40] transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
