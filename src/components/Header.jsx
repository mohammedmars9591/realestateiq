import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, BarChart3, Search, MapPin, HardHat } from 'lucide-react';

// --- DATA IMPORTS ---
import { DUBAI_AREAS } from '../data/areaData';
import { BUILDERS } from '../data/buildersData';
import { SHARJAH_DATA } from '../data/sharjahData';
import { AJMAN_DATA } from '../data/ajmanData';
import { RAK_DATA } from '../data/rakData';
import { UAQ_DATA } from '../data/uaqData';
import { ABUDHABI_DATA } from '../data/abudhabiData';
import { FUJAIRAH_DATA } from '../data/fujairahData';

// --- MERGE ALL DATA FOR GLOBAL SEARCH ---
const ALL_AREAS = [
  ...DUBAI_AREAS,
  ...(SHARJAH_DATA || []),
  ...(AJMAN_DATA || []),
  ...(RAK_DATA || []),
  ...(UAQ_DATA || []),
  ...(ABUDHABI_DATA || []),
  ...(FUJAIRAH_DATA || [])
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({ areas: [], builders: [] });
  const [showResults, setShowResults] = useState(false);
  
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // --- SEARCH ENGINE LOGIC ---
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults({ areas: [], builders: [] });
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    // 1. Search All Areas (Dubai, Shj, RAK, etc.)
    const matchedAreas = ALL_AREAS.filter(a => 
      a.name?.toLowerCase().includes(lowerQuery)
    ).slice(0, 5); // Increased limit to 5

    // 2. Search Builders
    const matchedBuilders = (BUILDERS || []).filter(b => 
      b.name?.toLowerCase().includes(lowerQuery)
    ).slice(0, 3);

    setSearchResults({ areas: matchedAreas, builders: matchedBuilders });
    setShowResults(true);
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setShowResults(false);
    setSearchQuery("");
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl mx-auto gap-4">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-extrabold text-slate-900 hover:text-slate-900 no-underline shrink-0">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <BarChart3 size={24} />
          </div>
          <span className="hidden md:inline">RealEstate<span className="text-blue-600">IQ</span></span>
          <span className="md:hidden">RE<span className="text-blue-600">IQ</span></span>
        </Link>
        
        {/* --- GLOBAL SEARCH BAR --- */}
        <div className="flex-1 max-w-md relative" ref={searchRef}>
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <input 
               type="text" 
               placeholder="Search Dubai, Sharjah, Abu Dhabi..." 
               className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all outline-none"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
             />
          </div>

          {/* DROPDOWN RESULTS */}
          {showResults && (searchResults.areas.length > 0 || searchResults.builders.length > 0) && (
            <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded-xl shadow-xl mt-2 overflow-hidden z-50">
               
               {/* Areas Results */}
               {searchResults.areas.length > 0 && (
                 <div className="p-2">
                   <div className="text-[10px] font-bold text-slate-400 uppercase px-2 mb-1">Locations</div>
                   {searchResults.areas.map(a => (
                     <button key={a.id} onClick={() => handleNavigate(`/area/${a.id}`)} className="w-full flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-left transition-colors">
                       <MapPin size={16} className="text-blue-500" />
                       <div className="flex flex-col">
                         <span className="text-sm font-bold text-slate-700 leading-none">{a.name}</span>
                         <span className="text-[10px] text-slate-400 uppercase mt-0.5">{a.emirate}</span>
                       </div>
                     </button>
                   ))}
                 </div>
               )}

               {/* Builders Results */}
               {searchResults.builders.length > 0 && (
                 <div className="p-2 border-t border-slate-100">
                   <div className="text-[10px] font-bold text-slate-400 uppercase px-2 mb-1">Developers</div>
                   {searchResults.builders.map(b => (
                     <button key={b.id} onClick={() => handleNavigate(`/builder/${b.id}`)} className="w-full flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-left transition-colors">
                       <HardHat size={16} className="text-orange-500" />
                       <span className="text-sm font-bold text-slate-700">{b.name}</span>
                     </button>
                   ))}
                 </div>
               )}
            </div>
          )}
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-600 items-center">
          <Link to="/areas" className="hover:text-blue-600 transition">Areas</Link>
          <Link to="/builders" className="hover:text-blue-600 transition">Developers</Link>
          <Link to="/heatmap" className="hover:text-blue-600 transition">Heatmap</Link>
          <Link to="/compare" className="hover:text-blue-600 transition">Compare</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-slate-900 p-2 shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 flex flex-col gap-6 shadow-xl absolute w-full left-0 z-50">
          <nav className="flex flex-col gap-4 text-lg font-bold text-slate-700">
            <Link to="/areas" onClick={() => setIsMenuOpen(false)}>Explore Areas</Link>
            <Link to="/builders" onClick={() => setIsMenuOpen(false)}>Top Developers</Link>
            <Link to="/heatmap" onClick={() => setIsMenuOpen(false)}>ROI Heatmap</Link>
            <Link to="/compare" onClick={() => setIsMenuOpen(false)}>Comparison Tool</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;