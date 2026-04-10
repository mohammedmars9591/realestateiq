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
    <section className="section-ivory py-32 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="display-medium text-[#1C1C22] mb-6">
            Everything You Need for <span className="gold-gradient">UAE Property Intelligence</span>
          </h2>
          <p className="mt-4 text-lg text-[#7A6E60] leading-relaxed font-light">
            Our platform combines institutional-grade data with intuitive tools to give you a competitive edge.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card-hover group p-8 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(198,167,94,0.12)] border border-[rgba(198,167,94,0.25)] transition-all duration-500 group-hover:bg-[rgba(198,167,94,0.22)] group-hover:scale-110 mb-6">
                <feature.icon className="h-6 w-6 text-[#C6A75E]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#1C1C22] mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[#7A6E60] font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
