import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND COLUMN */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-white mb-4 no-underline">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <BarChart3 size={24} />
              </div>
              <span>RealEstate<span className="text-blue-500">IQ</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              The AI-powered intelligence engine for Dubai real estate investors. Verified data, zero hype.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Github size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition">Market Overview</Link></li>
              <li><Link to="/areas" className="hover:text-white transition">Explore Areas</Link></li>
              <li><Link to="/heatmap" className="hover:text-white transition">ROI Heatmap</Link></li>
              <li><Link to="/builders" className="hover:text-white transition">Developer Ratings</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Market Blog</Link></li>
              <li><Link to="/compare" className="hover:text-white transition">Comparison Tool</Link></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* NEWSLETTER / CREDITS */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Developer</h3>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p className="text-xs text-slate-400 mb-2">Designed & Built by</p>
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  Mohammed M# <Heart size={16} className="text-red-500 fill-red-500" />
                </div>
                <p className="text-xs text-slate-500 mt-2">Full Stack AI Real Estate Project</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 RealEstateIQ. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;