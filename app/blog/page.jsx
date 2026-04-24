"use client";

import React from 'react';
import { Calendar, User, ArrowRight, Bookmark, Search, Filter } from 'lucide-react';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why JVC is the ROI King of 2026",
    excerpt: "With the 2026 Blue Line activation and occupancy hitting 95%, JVC has transitioned from a value play to a structural yield powerhouse. We dive into the GFA metrics.",
    date: "Jan 12, 2026",
    author: "Intelligence Team",
    category: "Yield Analytics",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "Off-Plan vs Ready: The Liquidity Gap",
    excerpt: "Institutional capital is shifting. We analyze 1,200 secondary transactions to reveal why the 'Handover Arbitrage' is closing faster than expected in 2026.",
    date: "Jan 08, 2026",
    author: "Sarah Jenkins",
    category: "Capital Flow",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Dubai South: Sovereign Expansion Brief",
    excerpt: "The Al Maktoum expansion isn't just an airport story. It's a logistics-to-living conversion play. Discover the 2030 vision map and infrastructure milestones.",
    date: "Jan 03, 2026",
    author: "Macro Strategies",
    category: "Macro Forecast",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7] to-[#F4EDE2] pb-24 fade-in">

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HEADER SECTION */}
        <div className="py-20 text-center lg:text-left border-b border-[rgba(198,167,94,0.15)] mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-[#C6A75E] font-black uppercase tracking-[0.4em] text-[10px] mb-4">
                <div className="w-12 h-[1px] bg-[#C6A75E]/30"></div>
                Institutional Journal
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-black text-[#3A3125] leading-none tracking-tighter mb-6">
                Market <span className="gold-gradient italic">Intelligence</span>
              </h1>
              <p className="text-lg md:text-xl text-[#5A4F40] font-light leading-relaxed max-w-xl">
                Synthesizing multi-modal data for the professional investor. 
              </p>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
               <div className="relative flex-grow lg:w-80">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69785]" />
                  <input 
                    type="text" 
                    placeholder="Search intelligence reports..."
                    className="w-full pl-12 pr-4 py-3 bg-white/50 border border-[rgba(198,167,94,0.3)] rounded-2xl text-xs font-bold outline-none focus:ring-2 focus:ring-[#C6A75E] transition-all"
                  />
               </div>
               <button className="p-3 bg-white border border-[rgba(198,167,94,0.2)] rounded-2xl text-[#3A3125] hover:bg-[#C6A75E] hover:text-white transition-all shadow-sm">
                  <Filter size={20} />
               </button>
            </div>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="group relative flex flex-col bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-[rgba(198,167,94,0.15)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6">
                   <div className="bg-white/90 backdrop-blur-md border border-[rgba(198,167,94,0.3)] text-[#C6A75E] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      {post.category}
                   </div>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-[10px] text-[#A69785] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#C6A75E]"/> {post.date}</span>
                    <div className="w-1 h-1 rounded-full bg-[#C6A75E]/30"></div>
                    <span className="text-[#C6A75E]">{post.readTime}</span>
                  </div>
                  <button className="text-[#A69785] hover:text-[#C6A75E] transition-colors"><Bookmark size={18} /></button>
                </div>
                
                <h2 className="text-2xl font-serif font-black text-[#3A3125] mb-4 leading-tight group-hover:text-[#C6A75E] transition-colors">
                   {post.title}
                </h2>
                
                <p className="text-[#5A4F40] text-sm font-light leading-relaxed mb-8 line-clamp-3 italic opacity-70">
                   "{post.excerpt}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-[rgba(198,167,94,0.1)] flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#C6A75E]/10 flex items-center justify-center text-[#C6A75E] font-black text-[10px]">
                         {post.author[0]}
                      </div>
                      <span className="text-[11px] font-bold text-[#3A3125]">{post.author}</span>
                   </div>
                   <button className="text-[#3A3125] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-[#C6A75E] transition-all">
                      Read Report <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* NEWSLETTER (Institutional) */}
        <div className="mt-32 rounded-[3.5rem] bg-[#3A3125] p-12 md:p-20 shadow-2xl relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6A75E]/10 rounded-full blur-[120px] pointer-events-none" />
           <div className="relative z-10 flex flex-col lg:row items-center justify-between gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                 <h3 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight mb-6">
                    Sovereign <br/><span className="gold-gradient italic">Briefing.</span>
                 </h3>
                 <p className="text-lg text-white/40 font-light max-w-md">
                    Join 4,500+ institutional subscribers receiving weekly 2026 yield forecasts.
                 </p>
              </div>
              <div className="lg:w-1/2 w-full">
                 <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                    <input 
                       type="email" 
                       placeholder="institutional@firm.com" 
                       className="flex-grow bg-transparent border-none px-6 py-4 text-white placeholder-white/20 outline-none text-sm font-medium" 
                    />
                    <button className="bg-[#C6A75E] text-[#1C1C22] px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-[#D4A95F] transition-all">
                       Subscribe
                    </button>
                 </form>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
