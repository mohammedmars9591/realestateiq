import React from 'react';
import { BarChart3, Building2, Globe, LineChart, MapPin, Shield, TrendingUp, Users } from "lucide-react";

const features = [
  { icon: MapPin, title: "Comprehensive Area Analytics", description: "Get detailed insights into every area across all seven UAE emirates including price trends, rental yields, developer activity, and future growth projections." },
  { icon: Building2, title: "Builder Intelligence", description: "Access complete profiles of top UAE developers with project timelines, track records, quality ratings, and portfolio analysis across all emirates." },
  { icon: BarChart3, title: "Interactive Heatmaps", description: "Visualize market performance with dynamic heatmaps showing price appreciation, rental demand, transaction volume, and investment potential across UAE." },
  { icon: LineChart, title: "Market Comparison Engine", description: "Compare any two areas or builders side-by-side with over 50 data points including ROI, appreciation rate, liquidity scores, and risk analysis." },
  { icon: TrendingUp, title: "Investment Scorecards", description: "Get AI-powered investment ratings for every area covering Airbnb potential, cash flow, capital appreciation, liquidity, lifestyle value, and risk profile." },
  { icon: Shield, title: "Price History & Forecasts", description: "Access 5-year price history data with institutional-grade forecasting models to predict future appreciation and rental growth rates." },
  { icon: Users, title: "Buyer Intelligence", description: "Understand buyer demographics, nationality mix, investor profiles, and purchasing patterns to identify emerging demand trends and opportunities." },
  { icon: Globe, title: "Supply Pipeline Data", description: "Track upcoming project launches, construction timelines, master plan developments, and Vision 2030 initiatives across all emirates." },
];

export function FeaturesSection() {
  return (
    <section className="section-ivory py-16 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#3A3125] leading-tight mb-6 tracking-tight">
            Institutional <span className="gold-gradient">Alpha Tools</span>
          </h2>
          <p className="mt-4 text-lg text-[#5A4F40] leading-relaxed font-light">
            Our platform combines cross-emirate sovereign data with AI-forecasting to give you a structural competitive edge.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 flex flex-col items-start bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3A3125]/5 border border-[#3A3125]/10 transition-all duration-500 group-hover:bg-[#C6A75E] group-hover:text-white mb-6">
                <feature.icon className="h-6 w-6 text-[#C6A75E] transition-colors group-hover:text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#3A3125] mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-[#5A4F40] font-medium opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
