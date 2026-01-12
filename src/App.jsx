import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- COMPONENTS ---
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AIChatWidget from './components/AIChatWidget'; // <--- NEW AI WIDGET

// --- PAGES ---
import HomePage from './pages/HomePage';
import ExploreAreas from './pages/ExploreAreas';
import AreaPage from './pages/AreaPage';
import AreaComparison from './pages/AreaComparison';
// Assuming these pages exist based on your sidebar/menu structure:
// You might need to create placeholders if you haven't built them yet
import HeatmapView from './pages/HeatmapView'; 
import BuildersPage from './pages/BuildersPage';
import BuilderDetailsPage from './pages/BuilderDetailsPage';

function App() {
  return (
    <Router>
      {/* 1. Scroll to top on route change */}
      <ScrollToTop />

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900 flex flex-col">
        
        {/* 2. Global Header */}
        <Header />
        
        {/* 3. Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            
            {/* Areas */}
            <Route path="/areas" element={<ExploreAreas />} />
            <Route path="/area/:id" element={<AreaPage />} />
            
            {/* Comparison Tool */}
            <Route path="/compare" element={<AreaComparison />} />
            
            {/* Builders (Developers) */}
            <Route path="/builders" element={<BuildersPage />} />
            <Route path="/builders/:id" element={<BuilderDetailsPage />} />

            {/* Heatmap */}
            <Route path="/heatmap" element={<HeatmapView />} />
            
            {/* Fallback for 404 (Optional) */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* 4. Global Footer */}
        <Footer />
        
        {/* 5. AI CHAT WIDGET (Floating Overlay) */}
        <AIChatWidget />

      </div>
    </Router>
  );
}

export default App;