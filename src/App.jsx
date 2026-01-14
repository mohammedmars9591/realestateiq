import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- COMPONENTS ---
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler'; // <--- UPDATED NAME
import AIChatWidget from './components/AIChatWidget';

// --- PAGES ---
import HomePage from './pages/HomePage';
import ExploreAreas from './pages/ExploreAreas';
import AreaPage from './pages/AreaPage';
import AreaComparison from './pages/AreaComparison';
import HeatmapView from './pages/Heatmapview';
import BuildersPage from './pages/BuildersPage';
import BuilderDetailsPage from './pages/BuilderDetailsPage';

function App() {
  return (
    <Router>
      {/* 1. Scroll to top on route change */}
      <ScrollHandler /> 

      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExploreAreas />} />
            <Route path="/area/:id" element={<AreaPage />} />
            <Route path="/compare" element={<AreaComparison />} />
            <Route path="/heatmap" element={<HeatmapView />} />
            <Route path="/builders" element={<BuildersPage />} />
            <Route path="/builder/:id" element={<BuilderDetailsPage />} />
          </Routes>
        </main>

        <Footer />
        <AIChatWidget />
      </div>
    </Router>
  );
}

export default App;