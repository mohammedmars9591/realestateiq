import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from "react-ga4"; // <--- 1. Import GA4

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

// --- 2. INITIALIZE GOOGLE ANALYTICS ---
// Replace "G-XXXXXXXXXX" with your actual Measurement ID from Google Analytics
ReactGA.initialize("G-XXXXXXXXXX");

// --- 3. ANALYTICS TRACKER COMPONENT ---
// This helper watches for URL changes and sends a pageview event
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview to Google Analytics whenever the route changes
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      {/* 4. ACTIVE COMPONENTS (Scroll & Analytics) */}
      <ScrollHandler /> 
      <AnalyticsTracker /> {/* <--- Tracks page views automatically */}

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
            
            {/* --- DUAL ROUTING FOR BUILDERS --- */}
            {/* 1. Singular Route (Standard) */}
            <Route path="/builder/:builderId" element={<BuilderDetailsPage />} />
            
            {/* 2. Plural Route (Safety Fallback) */}
            <Route path="/builders/:builderId" element={<BuilderDetailsPage />} />
            {/* ---------------------------------- */}
            
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