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
    <section className="section-warm py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="display-medium text-[#1C1C22] mb-6">
            All Seven Emirates, <span className="gold-gradient">One Platform</span>
          </h2>
          <p className="mt-4 text-lg text-[#7A6E60] leading-relaxed font-light">
            Deep analytics for every emirate in the UAE. Explore area-level data, market trends, and investment opportunities.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {emirates.map((emirate, idx) => (
            <Link key={idx} to={`/areas`} className="glass-card-hover group flex flex-col justify-between p-7 min-h-[220px]">
              <div>
                <h3 className="text-xl font-bold text-[#1C1C22] mb-2 tracking-tight">{emirate.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A75E] mb-4">{emirate.areas}</p>
                <p className="text-sm leading-relaxed text-[#7A6E60] font-light line-clamp-2">{emirate.highlight}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#C6A75E]">
                <span>Explore Intelligence</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
