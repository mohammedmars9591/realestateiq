import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- COMPONENTS ---
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';
import AIChatWidget from './components/AIChatWidget';

// --- PAGES ---
import HomePage from './pages/HomePage';
import ExploreAreas from './pages/ExploreAreas';      // The "Areas" list
import AreaPage from './pages/AreaPage';              // Single Area Details
import BuildersPage from './pages/BuildersPage';      // The "Developers" list
import BuilderDetailsPage from './pages/BuilderDetailsPage'; // Single Developer Details
import AreaComparison from './pages/AreaComparison';
import MarketMap from './pages/MarketMap';            // <--- NEW NAME (Fixed)
import MarketPage from './pages/MarketPage';
import PropertyPage from './pages/PropertyPage';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      {/* 1. Scroll to top on route change */}
      <ScrollHandler /> 

      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<HomePage />} />
            
            {/* Areas */}
            <Route path="/areas" element={<ExploreAreas />} />
            <Route path="/area/:id" element={<AreaPage />} />
            
            {/* Developers (Builders) */}
            <Route path="/builders" element={<BuildersPage />} />
            <Route path="/builder/:id" element={<BuilderDetailsPage />} />
            
            {/* Tools */}
            <Route path="/compare" element={<AreaComparison />} />
            <Route path="/heatmap" element={<MarketMap />} /> {/* <--- UPDATED ROUTE */}
            
            {/* Market & Properties */}
            <Route path="/market" element={<MarketPage />} />
            <Route path="/property/:id" element={<PropertyPage />} />
            
            {/* Company */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
        
        {/* AI Widget stays on top of everything */}
        <AIChatWidget />
      </div>
    </Router>
  );
}

export default App;