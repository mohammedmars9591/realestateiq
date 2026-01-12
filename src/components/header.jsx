import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, BarChart3, Search, MapPin, HardHat, Building2 } from 'lucide-react';

// --- DATA FOR SEARCH ENGINE ---
import { DUBAI_PROPERTIES } from '../data/dubaiArea';
import { DUBAI_AREAS } from '../data/areaData';
import { BUILDERS } from '../data/buildersData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({ properties: [], areas: [], builders: [] });
  const [showResults, setShowResults] = useState(false);
  
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // --- SEARCH ENGINE LOGIC ---
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults({ properties: [], areas: [], builders: [] });
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    // 1. Search Properties
    const matchedProps = DUBAI_PROPERTIES.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || p.location.toLowerCase().includes(lowerQuery)
    ).slice(0, 3);

    // 2. Search Areas
    const matchedAreas = DUBAI_AREAS.filter(a => 
      a.name.toLowerCase().includes(lowerQuery)
    ).slice(0, 2);

    // 3. Search Builders
    const matchedBuilders = BUILDERS.filter(b => 
      b.name.toLowerCase().includes(lowerQuery)
    ).slice(0, 2);

    setSearchResults({ properties: matchedProps, areas: matchedAreas, builders: matchedBuilders });
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
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl mx-auto gap-4">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-extrabold text-slate-900 hover:text-slate-900 no-underline shrink-0">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <BarChart3 size={24} />
          </div>
          <span className="hidden md:inline">Estate<span className="text-blue-600">IQ</span></span>
          <span className="md:hidden">E<span className="text-blue-600">IQ</span></span>
        </Link>
        
        {/* --- GLOBAL SEARCH BAR --- */}
        <div className="flex-1 max-w-md relative" ref={searchRef}>
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <input 
               type="text" 
               placeholder="Search area, developer, or property..." 
               className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all outline-none"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
             />
          </div>

          {/* DROPDOWN RESULTS */}
          {showResults && (searchResults.properties.length > 0 || searchResults.areas.length > 0 || searchResults.builders.length > 0) && (
            <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded-xl shadow-xl mt-2 overflow-hidden z-50">
               
               {/* Areas */}
               {searchResults.areas.length > 0 && (
                 <div className="p-2">
                   <div className="text-[10px] font-bold text-slate-400 uppercase px-2 mb-1">Districts</div>
                   {searchResults.areas.map(a => (
                     <button key={a.id} onClick={() => handleNavigate(`/area/${a.id}`)} className="w-full flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-left transition-colors">
                       <MapPin size={16} className="text-blue-500" />
                       <span className="text-sm font-bold text-slate-700">{a.name}</span>
                     </button>
                   ))}
                 </div>
               )}

               {/* Builders */}
               {searchResults.builders.length > 0 && (
                 <div className="p-2 border-t border-slate-100">
                   <div className="text-[10px] font-bold text-slate-400 uppercase px-2 mb-1">Developers</div>
                   {searchResults.builders.map(b => (
                     <button key={b.id} onClick={() => handleNavigate(`/builders/${b.id}`)} className="w-full flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-left transition-colors">
                       <HardHat size={16} className="text-orange-500" />
                       <span className="text-sm font-bold text-slate-700">{b.name}</span>
                     </button>
                   ))}
                 </div>
               )}

               {/* Properties */}
               {searchResults.properties.length > 0 && (
                 <div className="p-2 border-t border-slate-100">
                   <div className="text-[10px] font-bold text-slate-400 uppercase px-2 mb-1">Properties</div>
                   {searchResults.properties.map(p => (
                     <button key={p.id} onClick={() => handleNavigate(`/property/${p.id}`)} className="w-full flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-left transition-colors">
                       <Building2 size={16} className="text-slate-400" />
                       <div className="overflow-hidden">
                         <div className="text-sm font-bold text-slate-700 truncate">{p.name}</div>
                         <div className="text-xs text-slate-400">{p.location}</div>
                       </div>
                     </button>
                   ))}
                 </div>
               )}
            </div>
          )}
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-600 items-center">
          <Link to="/market" className="hover:text-blue-600 transition">Market</Link>
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
            <Link to="/market" onClick={() => setIsMenuOpen(false)}>Live Market</Link>
            <Link to="/areas" onClick={() => setIsMenuOpen(false)}>Explore Areas</Link>
            <Link to="/builders" onClick={() => setIsMenuOpen(false)}>Top Developers</Link>
            <Link to="/heatmap" onClick={() => setIsMenuOpen(false)}>ROI Heatmap</Link>
            <Link to="/compare" onClick={() => setIsMenuOpen(false)}>Comparison Tool</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;