import React from 'react';

const stats = [
  { value: "7", label: "Emirates Covered" },
  { value: "500+", label: "Areas Analyzed" },
  { value: "200+", label: "Builder Profiles" },
  { value: "50K+", label: "Property Data Points" },
];

export function StatsSection() {
  return (
    <section className="section-warm border-y border-[rgba(198,167,94,0.2)] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:gap-12 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-4xl md:text-5xl font-bold gold-gradient tracking-tighter transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7A6E60]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
