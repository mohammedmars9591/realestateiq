import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// --- LAYOUT COMPONENTS ---
import Navbar from './components/Header';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';
// 🟢 CORRECTED: Using your existing ScrollHandler from components
import ScrollHandler from './components/ScrollHandler'; 

// --- PAGE IMPORTS (MATCHING YOUR FILE STRUCTURE) ---
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ExploreAreas from './pages/ExploreAreas';
import AreaPage from './pages/AreaPage';
import BuildersPage from './pages/BuildersPage';
import BuilderDetailsPage from './pages/BuilderDetailsPage';

// --- TOOLS IMPORTS ---
import MarketMap from './pages/MarketMap';       // Matches your file structure
import AreaComparison from './pages/AreaComparison'; // Matches your file structure

const App = () => {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Scroll Helper: Uses your existing component to scroll top on page change */}
        <ScrollHandler />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* --- 1. CORE PAGES --- */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />

            {/* --- 2. AREAS --- */}
            <Route path="/areas" element={<ExploreAreas />} />
            <Route path="/area/:id" element={<AreaPage />} />

            {/* --- 3. BUILDERS --- */}
            <Route path="/builders" element={<BuildersPage />} />
            <Route path="/builder/:id" element={<BuilderDetailsPage />} />

            {/* --- 4. INTELLIGENCE TOOLS --- */}
            <Route path="/heatmap" element={<MarketMap />} />
            <Route path="/compare" element={<AreaComparison />} />

            {/* --- 5. 404 CATCH-ALL --- */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h1 className="text-6xl font-extrabold text-slate-900 mb-4">404</h1>
                <p className="text-xl text-slate-500 mb-8">Oops! We couldn't find that page.</p>
                <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                  Return Home
                </a>
              </div>
            } />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating AI Widget - Visible on every page */}
        <AIChatWidget />
      </div>
    </HelmetProvider>
  );
};

export default App;