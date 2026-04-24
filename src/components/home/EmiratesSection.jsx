import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const emirates = [
  { name: "Dubai", areas: "120+ Areas", slug: "dubai", highlight: "Business Bay, Downtown, Marina" },
  { name: "Abu Dhabi", areas: "80+ Areas", slug: "abu-dhabi", highlight: "Saadiyat Island, Yas Island, Al Reem" },
  { name: "Sharjah", areas: "60+ Areas", slug: "sharjah", highlight: "Al Nahda, Al Khan, Al Majaz" },
  { name: "Ajman", areas: "30+ Areas", slug: "ajman", highlight: "Al Rashidiya, Al Nuaimiya, Emirates City" },
  { name: "Ras Al Khaimah", areas: "25+ Areas", slug: "ras-al-khaimah", highlight: "Al Hamra Village, Mina Al Arab" },
  { name: "Fujairah", areas: "15+ Areas", slug: "fujairah", highlight: "Fujairah City, Dibba" },
  { name: "Umm Al Quwain", areas: "10+ Areas", slug: "umm-al-quwain", highlight: "UAQ Marina, Al Salamah" },
];

export function EmiratesSection() {
  return (
    <section className="section-warm py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#3A3125] leading-tight mb-6 tracking-tight">
            National <span className="gold-gradient">Node Coverage</span>
          </h2>
          <p className="mt-4 text-lg text-[#5A4F40] leading-relaxed font-light">
            Deep institutional analytics for all seven UAE emirates. Explore area-level liquidity, market velocity, and sovereign trends.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {emirates.map((emirate, idx) => (
            <Link key={idx} to={`/areas`} className="group flex flex-col justify-between p-8 min-h-[260px] bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3A3125] mb-2 tracking-tight">{emirate.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A75E] mb-6">{emirate.areas}</p>
                <div className="h-px w-8 bg-[#C6A75E]/30 mb-6 transition-all group-hover:w-full" />
                <p className="text-xs leading-relaxed text-[#5A4F40] font-medium opacity-80 italic">"{emirate.highlight}"</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#3A3125]">
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">Explore Intel</span>
                <div className="h-9 w-9 rounded-full bg-[#3A3125] text-white flex items-center justify-center transition-all group-hover:bg-[#C6A75E] group-hover:scale-110">
                   <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
