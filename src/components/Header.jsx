import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Search, MapPin, HardHat } from 'lucide-react';

// --- DATA IMPORTS ---
import { DUBAI_AREAS } from '../data/emiratesData'; 
import { BUILDERS } from '../data/buildersData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({ areas: [], builders: [] });
  const [showResults, setShowResults] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);

  const pathname = location.pathname;

  // --- SEARCH ENGINE LOGIC ---
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults({ areas: [], builders: [] });
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    // 1. Search Areas
    const matchedAreas = (DUBAI_AREAS || []).filter(a => 
      a.name?.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);

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

  const navLinks = [
    { href: "/", label: "Overview" },
    { href: "/areas", label: "Areas" },
    { href: "/builders", label: "Builders" },
    { href: "/heatmap", label: "Heatmap" },
    { href: "/compare", label: "Compare" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(198,167,94,0.2)] bg-[rgba(248,245,239,0.88)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="gold-gradient-bg flex h-10 w-10 items-center justify-center rounded-xl glow-gold-hover transition-all duration-500 shadow-lg">
            <Building2 className="h-5 w-5 text-[#1C1C22]" strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold tracking-tight font-heading text-[#1C1C22] hidden sm:inline">
            RealEstate<span className="gold-gradient">IQ</span><span className="text-[#7A6E60] font-light text-sm italic ml-0.5">.ae</span>
          </span>
          <span className="sm:hidden text-lg font-bold text-[#1C1C22]">RE<span className="gold-gradient">IQ</span></span>
        </Link>
        
        {/* --- GLOBAL SEARCH BAR --- */}
        <div className="flex-1 max-w-sm mx-4 relative hidden md:block" ref={searchRef}>
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A69785]" size={16} />
             <input 
               type="text" 
               placeholder="Search area or builder..." 
               className="w-full pl-10 pr-4 py-2 bg-white/50 border border-[rgba(198,167,94,0.3)] rounded-full text-xs font-medium focus:ring-2 focus:ring-[#C6A75E] transition-all outline-none text-[#1C1C22] placeholder-[#A69785]"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
             />
          </div>

          {/* DROPDOWN RESULTS */}
          {showResults && (searchResults.areas.length > 0 || searchResults.builders.length > 0) && (
            <div className="absolute top-full left-0 w-full bg-white border border-[rgba(198,167,94,0.25)] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] mt-3 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
               
               {/* Areas Results */}
               {searchResults.areas.length > 0 && (
                 <div className="p-2">
                   <div className="text-[10px] font-bold text-[#A69785] uppercase px-3 mb-1 tracking-widest">Premium Locations</div>
                   {searchResults.areas.map(a => (
                     <button key={a.id} onClick={() => handleNavigate(`/area/${a.id}`)} className="w-full flex items-center gap-4 p-3 hover:bg-[#FDFBF7] rounded-xl text-left transition-colors group">
                       <MapPin size={16} className="text-[#C6A75E] group-hover:scale-110 transition-transform" />
                       <div className="flex flex-col">
                         <span className="text-sm font-bold text-[#1C1C22] leading-none">{a.name}</span>
                         <span className="text-[10px] text-[#A69785] uppercase mt-1 tracking-wider">{a.emirate}</span>
                       </div>
                     </button>
                   ))}
                 </div>
               )}

               {/* Builders Results */}
               {searchResults.builders.length > 0 && (
                 <div className="p-2 border-t border-[rgba(198,167,94,0.1)]">
                   <div className="text-[10px] font-bold text-[#A69785] uppercase px-3 mb-1 tracking-widest">Top Developers</div>
                   {searchResults.builders.map(b => (
                     <button key={b.id} onClick={() => handleNavigate(`/builder/${b.id}`)} className="w-full flex items-center gap-4 p-3 hover:bg-[#FDFBF7] rounded-xl text-left transition-colors group">
                       <HardHat size={16} className="text-[#8E7F6E]" />
                       <span className="text-sm font-bold text-[#1C1C22]">{b.name}</span>
                     </button>
                   ))}
                 </div>
               )}
            </div>
          )}
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                pathname === link.href ? "text-[#C6A75E]" : "text-[#7A6E60] hover:text-[#1C1C22]"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 h-[2.5px] w-6 -translate-x-1/2 gold-gradient-bg rounded-full shadow-[0_1px_4px_rgba(198,167,94,0.4)]" />
              )}
            </Link>
          ))}
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:gap-4 lg:hidden">
          <button 
            className="text-[#1C1C22] p-2"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          >
             <Search size={22} className={isMobileSearchOpen ? "text-[#C6A75E]" : "text-[#A69785]"} />
          </button>
          <button 
            className="text-[#1C1C22] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH BAR OVERLAY */}
      {isMobileSearchOpen && (
        <div className="lg:hidden p-4 bg-white border-t border-[rgba(198,167,94,0.15)] animate-in slide-in-from-top-2">
           <div className="relative" ref={searchRef}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A69785]" size={18} />
              <input 
                type="text" 
                placeholder="Search area or builder..." 
                className="w-full pl-12 pr-4 py-3 bg-[#FDFBF7] border border-[rgba(198,167,94,0.3)] rounded-2xl text-sm font-medium focus:ring-2 focus:ring-[#C6A75E] transition-all outline-none"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {/* Mobile Results Dropdown */}
              {showResults && (searchResults.areas.length > 0 || searchResults.builders.length > 0) && (
                <div className="absolute top-full left-0 w-full bg-white border border-[rgba(198,167,94,0.25)] rounded-2xl shadow-2xl mt-2 overflow-hidden z-[60]">
                   {searchResults.areas.length > 0 && (
                     <div className="p-2">
                       {searchResults.areas.map(a => (
                         <button key={a.id} onClick={() => { handleNavigate(`/area/${a.id}`); setIsMobileSearchOpen(false); }} className="w-full flex items-center gap-4 p-4 hover:bg-[#FDFBF7] rounded-xl text-left">
                           <MapPin size={18} className="text-[#C6A75E]" />
                           <div className="flex flex-col">
                             <span className="text-base font-bold text-[#1C1C22]">{a.name}</span>
                             <span className="text-xs text-[#A69785] uppercase tracking-wider">{a.emirate}</span>
                           </div>
                         </button>
                       ))}
                     </div>
                   )}
                   {searchResults.builders.length > 0 && (
                     <div className="p-2 border-t border-[rgba(198,167,94,0.1)]">
                       {searchResults.builders.map(b => (
                         <button key={b.id} onClick={() => { handleNavigate(`/builder/${b.id}`); setIsMobileSearchOpen(false); }} className="w-full flex items-center gap-4 p-4 hover:bg-[#FDFBF7] rounded-xl text-left">
                           <HardHat size={18} className="text-[#8E7F6E]" />
                           <span className="text-base font-bold text-[#1C1C22]">{b.name}</span>
                         </button>
                       ))}
                     </div>
                   )}
                </div>
              )}
           </div>
        </div>
      )}

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-[100] bg-[rgba(248,245,239,0.95)] backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-500 lg:hidden">
          <div className="flex h-full flex-col p-6 overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-6 py-5 transition-all ${
                    pathname === link.href 
                      ? "bg-white border border-[rgba(198,167,94,0.3)] text-[#C6A75E] shadow-sm" 
                      : "text-[#1C1C22] hover:bg-white/50"
                  }`}
                >
                  <span className="text-xl font-bold tracking-tight">{link.label}</span>
                  {pathname === link.href && <div className="h-2 w-2 rounded-full gold-gradient-bg" />}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 space-y-4 px-2">
              <button className="w-full btn-primary px-6 py-5 rounded-2xl text-lg font-bold shadow-xl">
                 Get Intelligence
              </button>
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#A69785] mt-4">
                 Trusted by 2,000+ Investors
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;