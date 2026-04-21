import React from 'react';
import SEO from '../components/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { EmiratesSection } from '../components/home/EmiratesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

const HOME_FAQ = [
  {
    question: "What is the best area to invest in Dubai in 2026?",
    answer: "The top investment areas in Dubai for 2026 are Business Bay (7.5–9% ROI), JVC (9–11% ROI), Dubai Marina (6.5–8% ROI), and Palm Jumeirah (5–7% ROI + capital appreciation). For affordable high-yield, Dubai Studio City and Sports City offer 9%+ ROI. Use RealEstateIQ's free comparison tool to compare any two areas side-by-side."
  },
  {
    question: "Which Dubai real estate developer is the most reliable in 2026?",
    answer: "Emaar Properties (Trust Score 9.8/10, 100% delivery rate) and Aldar Properties (Abu Dhabi government-backed) are the most reliable developers in UAE. Sobha Realty is ranked highest for build quality (10/10). For speed, Binghatti delivers projects ahead of schedule with a 100% on-time record."
  },
  {
    question: "Is Dubai real estate a good investment in 2026?",
    answer: "Yes. Dubai real estate offers 6–11% net rental yields — among the highest globally — with zero property tax, zero capital gains tax, and 10-year Golden Visa eligibility for properties over AED 2M. The market saw 97,000+ transactions in 2024 worth AED 600B+, with sustained demand from expats and institutional investors."
  },
  {
    question: "How much money do I need to invest in Dubai real estate?",
    answer: "You can start with as little as AED 500,000 for a studio apartment in areas like JVC or Dubai Studio City. For off-plan, payment plans start at 1% monthly with no mortgage needed. Golden Visa eligibility requires AED 2M+. Luxury properties in Palm Jumeirah or Downtown start from AED 3M."
  },
  {
    question: "What is the difference between freehold and leasehold in Dubai?",
    answer: "Freehold means you own the property and land outright — available to all nationalities in designated zones like Downtown, Marina, Palm Jumeirah, and JVC. Leasehold gives you the right to use a property for 10–99 years. RealEstateIQ only tracks freehold investment zones eligible for foreign ownership."
  },
  {
    question: "What are the best off-plan developers in Dubai 2026?",
    answer: "Top off-plan developers in 2026 include Emaar (Tier 1, government-backed), Damac (villa specialist), Sobha (ultra-quality), Binghatti (fastest delivery), Danube (best payment plans — 1% monthly), and Ellington (boutique design). RealEstateIQ's Builder Intelligence page provides full Trust Scores, AI Delivery Confidence %, and ESG Ratings for all 25+ developers."
  }
];

const HOME_HOW_TO = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Analyze a Dubai Real Estate Investment Using RealEstateIQ",
  "description": "Step-by-step guide to using RealEstateIQ to find the best investment property in Dubai for free.",
  "totalTime": "PT5M",
  "step": [
    { "@type": "HowToStep", "name": "Choose Your Area", "text": "Browse 77+ Dubai and UAE areas on the National Map. Filter by Emirate, ROI range, or investment category." },
    { "@type": "HowToStep", "name": "Read the Investment Brief", "text": "Open any area's Intelligence Report. Review the ROI, price trends, connectivity matrix, and AI verdict." },
    { "@type": "HowToStep", "name": "Compare Two Contenders", "text": "Use the Investment Battleground tool to compare two areas or two builders head-to-head. Select your investment goal: Capital Growth, Yield, or Safety." },
    { "@type": "HowToStep", "name": "Check the Developer", "text": "Go to the Builder Intelligence hub. Check Trust Scores, Delivery Track Records, ESG Ratings, and AI Confidence percentages." },
    { "@type": "HowToStep", "name": "Contact an Advisor", "text": "Click the WhatsApp button on any area or builder page to get the latest project inventory and pricing from a verified advisor." }
  ]
};

const HOME_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "RealEstateIQ",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AED" },
  "description": "Free AI-powered UAE real estate investment intelligence platform. Compare 77+ areas, 25+ builders, with ROI data, ESG scores, and AI delivery confidence.",
  "featureList": ["Area ROI Comparison", "Builder Trust Scores", "ESG Analytics", "AI Delivery Confidence", "FutureScope 5-Year Projections", "Investment Battleground"],
  "url": "https://www.realestateiq.ae",
  "screenshot": "https://www.realestateiq.ae/og-image.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2400",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const HOME_BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.realestateiq.ae" }
  ]
};

const HomePage = () => {

  return (
    <div className="fade-in bg-[#F8F5EF] font-sans text-[#1C1C22]">
      <SEO 
        title="Free AI Dubai Real Estate Investment Tool 2026" 
        description="Stop guessing. Access 100% free verified rental yields, ROI forecasts, and compare top Dubai builders. The ultimate platform for Indian, European, and Global investors in UAE. Zero property tax, golden visa eligible zones."
        schema={HOME_APP_SCHEMA}
        faqSchema={HOME_FAQ}
        articleSchema={null}
        url="/"
      />

      {/* GEO: Injecting HowTo schema and Breadcrumb manually */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_HOW_TO) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_BREADCRUMB) }} />

      {/* --- 1. LIVE MARKET TICKER --- */}
      <div className="bg-[#1C1C22] text-[#F8F5EF]/60 text-[10px] md:text-xs py-2 overflow-hidden border-b border-[rgba(198,167,94,0.3)]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 animate-pulse">
            <span className="flex items-center gap-1 text-[#C6A75E] font-bold"><div className="w-1.5 h-1.5 rounded-full bg-[#E6B76A]"></div> Market Active</span>
            <span className="hidden md:inline">Dubai Transactions (24h): <span className="text-white">AED 1.2B</span></span>
            <span className="hidden md:inline">Top Gainer: <span className="text-[#C6A75E]">Palm Jebel Ali (+4.2%)</span></span>
          </div>
          <div className="flex gap-4">
             <span>Data updated: <span className="text-white">Live</span></span>
          </div>
        </div>
      </div>

      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <EmiratesSection />
      <TestimonialsSection />
      <CTASection />
      
    </div>
  );
};

export default HomePage;