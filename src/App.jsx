import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- COMPONENTS ---
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';
import AIChatWidget from './components/AIChatWidget';

// --- PAGES ---
import HomePage from './pages/HomePage';
import ExploreAreas from './pages/ExploreAreas';      // 1. Area List
import AreaPage from './pages/AreaPage';              // 1. Area Details
import BuildersPage from './pages/BuildersPage';      // 2. Builder List
import BuilderDetailsPage from './pages/BuilderDetailsPage'; // 2. Builder Details
import AreaComparison from './pages/AreaComparison';  // 3. Comparison Tool
import MarketMap from './pages/MarketMap';            // 4. Market View (Heatmap)

function App() {
  return (
    <Router>
      <ScrollHandler /> 

      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            
            {/* Tool 1: Area Intelligence */}
            <Route path="/areas" element={<ExploreAreas />} />
            <Route path="/area/:id" element={<AreaPage />} />
            
            {/* Tool 2: Developer Intelligence */}
            <Route path="/builders" element={<BuildersPage />} />
            
            {/* --- CRITICAL FIX: DUAL ROUTING & PARAMETER NAME --- */}
            {/* We use :builderId to match the useParams() in your BuilderDetailsPage */}
            {/* 1. Singular Route (Standard) */}
            <Route path="/builder/:builderId" element={<BuilderDetailsPage />} />
            
            {/* 2. Plural Route (Safety Fallback for typos or old links) */}
            <Route path="/builders/:builderId" element={<BuilderDetailsPage />} />
            {/* --------------------------------------------------- */}
            
            {/* Tool 3: Comparison Engine */}
            <Route path="/compare" element={<AreaComparison />} />
            
            {/* Tool 4: Market Heatmap */}
            <Route path="/heatmap" element={<MarketMap />} />
          </Routes>
        </main>

        <Footer />
        <AIChatWidget />
      </div>
    </Router>
  );
}

export default App;