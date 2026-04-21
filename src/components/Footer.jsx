import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(198,167,94,0.2)] bg-[#FDFBF7] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* BRAND COLUMN */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="gold-gradient-bg flex h-10 w-10 items-center justify-center rounded-xl shadow-lg ring-1 ring-[rgba(198,167,94,0.3)]">
                <Building2 className="h-5 w-5 text-[#1C1C22]" strokeWidth={1.5} />
              </div>
              <span className="text-xl font-bold tracking-tight font-heading text-[#1C1C22]">
                RealEstate<span className="gold-gradient">IQ</span><span className="text-[#7A6E60] font-light text-sm italic">.ae</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#7A6E60] mb-8 font-light">
              The smartest way to analyze UAE real estate markets with data-driven insights and verified institutional intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[rgba(198,167,94,0.2)] text-[#7A6E60] hover:text-[#C6A75E] hover:border-[#C6A75E] transition-all shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[rgba(198,167,94,0.2)] text-[#7A6E60] hover:text-[#C6A75E] hover:border-[#C6A75E] transition-all shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[rgba(198,167,94,0.2)] text-[#7A6E60] hover:text-[#C6A75E] hover:border-[#C6A75E] transition-all shadow-sm">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* PLATFORM LINKS */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1C22]">Market Intelligence</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li><Link to="/areas" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">Area Explorer</Link></li>
              <li><Link to="/builders" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">Builder Ratings</Link></li>
              <li><Link to="/heatmap" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">ROI Heatmap</Link></li>
              <li><Link to="/compare" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">Comparison Engine</Link></li>
            </ul>
          </div>

          {/* EMIRATES LINKS */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1C22]">Strategic Hubs</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li><Link to="/areas" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">Dubai Markets</Link></li>
              <li><Link to="/areas" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">Abu Dhabi Hubs</Link></li>
              <li><Link to="/areas" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">Sharjah & Northern Emirates</Link></li>
              <li><Link to="/about" className="text-[#7A6E60] hover:text-[#C6A75E] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* CONTACT / ACTION */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1C22]">Institutional Access</h4>
            <div className="bg-white p-6 rounded-2xl border border-[rgba(198,167,94,0.2)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-xs text-[#7A6E60] mb-4 font-light leading-relaxed">Subscribe to receive institutional-grade market briefs monthly.</p>
                <div className="relative">
                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A69785]" size={14} />
                   <input 
                     type="email" 
                     placeholder="your@email.com" 
                     className="w-full pl-9 pr-4 py-2.5 bg-[#FDFBF7] border border-[rgba(198,167,94,0.15)] rounded-xl text-xs focus:ring-1 focus:ring-[#C6A75E] outline-none transition-all"
                   />
                </div>
                <button className="mt-3 w-full btn-primary py-2.5 text-[10px] font-bold tracking-widest uppercase">Subscribe</button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 border-t border-[rgba(198,167,94,0.1)] pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#A69785]">
          <p>© 2026 RealEstateIQ.ae. Reserved Institutional Property Data.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-[#1C1C22] transition-colors">Privacy Charter</Link>
            <Link to="#" className="hover:text-[#1C1C22] transition-colors">Terms of Engagement</Link>
            <Link to="#" className="hover:text-[#1C1C22] transition-colors">Data Governance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;