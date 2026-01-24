// ==========================================================
// DUBAI DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const DUBAI_AREAS = [
  // --- 1. JUMEIRAH VILLAGE CIRCLE (JVC) ---
  {
    id: "jvc",
    name: "Jumeirah Village Circle",
    emirate: "Dubai",
    category: "High Yield",
    
    roi: "7.8%",
    avgPrice: "AED 950k",
    imageColor: "bg-emerald-600",
    amenities: ["Circle Mall", "30+ Parks", "Intl. Schools"],

    // === INVESTOR INTELLIGENCE ===
    investorTags: ["High Cash Flow", "Entry-Level Investment", "Family Rentals", "Low Vacancy Risk"],
    aiVerdict: {
      title: "Best for Monthly Rental Income",
      summary: "JVC offers one of Dubai’s most stable rental markets with strong tenant demand, affordable entry prices, and consistent yields across all unit sizes."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "High",
      tenantProfile: "Young professionals & small families"
    },
    ownership: {
      type: "Freehold",
      eligibleFor: ["All Nationalities"],
      minDownPayment: "20%"
    },

    // === SCORES ===
    scores: { cashFlow: 9.1, appreciation: 7.8, liquidity: 8.5, risk: 6.2, lifestyle: 7.0 },
    overallScore: 8.4,

    // === UNIT ECONOMICS ===
    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 55k" }, 
      oneBed: { roi: "7.9%", rent: "AED 75k" }, 
      twoBed: { roi: "6.4%", rent: "AED 105k" } 
    },

    // === SHORT TERM RENTAL ===
    shortTermScore: 8.2,
    shortTermRental: {
      allowed: true,
      avgDailyRate: "AED 420",
      occupancy: "68%",
      tenantType: "Tourists & short-term professionals"
    },

    // === FUTURE INFRASTRUCTURE ===
    futureUpgrades: [
      { name: "Metro Extension (Blue Line)", status: "Planned 2029" },
      { name: "Circle Mall Phase 2", status: "Under Construction" },
      { name: "New Community Parks", status: "Approved" }
    ],

    // === PRICE TREND ===
    priceTrend: { "2022": "AED 720k", "2023": "AED 810k", "2024": "AED 900k", "2025": "AED 950k" },

    description: "Dubai’s strongest mid-market cash flow zone with consistently high rental demand.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "28 km", mins: "25 mins" },
      school: { name: "JSS Intl School", km: "1.2 km", mins: "4 mins" },
      tourist: { name: "Miracle Garden", km: "6 km", mins: "9 mins" },
      metro: { name: "Mall of Emirates", km: "10 km", mins: "14 mins" },
      mall: { name: "Circle Mall", km: "0.5 km", mins: "2 mins" },
      business: { name: "Business Bay", km: "18 km", mins: "20 mins" },
      hospital: { name: "Mediclinic Parkview", km: "5 km", mins: "8 mins" }
    }
  },

  // --- 2. ARJAN ---
  {
    id: "arjan",
    name: "Arjan",
    emirate: "Dubai",
    category: "High Yield",
    roi: "7.2%",
    avgPrice: "AED 850k",
    imageColor: "bg-teal-600",
    amenities: ["Miracle Garden", "Butterfly Garden", "Parkview Hospital"],

    investorTags: ["Tourism Yields", "Growth Potential", "Affordable Luxury"],
    aiVerdict: {
      title: "Rising Star for Tourism Rentals",
      summary: "Located near Miracle Garden, Arjan is becoming a hotspot for holiday homes, offering higher yields than established areas."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Tourists & Healthcare Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.5, appreciation: 7.5, liquidity: 6.5, risk: 6.0, lifestyle: 6.5 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "7.8%", rent: "AED 50k" }, 
      oneBed: { roi: "7.0%", rent: "AED 70k" }, 
      twoBed: { roi: "6.2%", rent: "AED 95k" } 
    },

    shortTermScore: 8.8, // High due to Miracle Garden
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "72%", tenantType: "Holiday Makers" },

    futureUpgrades: [
      { name: "New School Complex", status: "Proposed" },
      { name: "Hospital Expansion", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 650k", "2023": "AED 720k", "2024": "AED 790k", "2025": "AED 850k" },

    description: "Emerging hotspot with newer buildings and major tourist attractions.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "29 km", mins: "26 mins" },
      school: { name: "Nord Anglia School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Butterfly Garden", km: "1 km", mins: "2 mins" },
      metro: { name: "Mall of Emirates", km: "11 km", mins: "15 mins" },
      mall: { name: "Dubai Hills Mall", km: "6 km", mins: "9 mins" },
      business: { name: "Business Bay", km: "19 km", mins: "22 mins" },
      hospital: { name: "Mediclinic Parkview", km: "0.5 km", mins: "2 mins" }
    }
  },

  // --- 3. DUBAI SPORTS CITY ---
  {
    id: "dubai-sports-city",
    name: "Dubai Sports City",
    emirate: "Dubai",
    category: "High Yield",
    roi: "7.4%",
    avgPrice: "AED 650k",
    imageColor: "bg-lime-700",
    amenities: ["Cricket Stadium", "Els Golf Club", "Fit Republik"],

    investorTags: ["Budget Entry", "Stable Yields", "Active Lifestyle"],
    aiVerdict: {
      title: "Best Value for Money",
      summary: "Excellent for investors with a lower budget seeking reliable ROI. High demand from fitness-conscious tenants."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Singles & Active Couples" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.2, appreciation: 6.0, liquidity: 7.0, risk: 5.5, lifestyle: 7.0 },
    overallScore: 7.5,

    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 42k" }, 
      oneBed: { roi: "7.2%", rent: "AED 60k" }, 
      twoBed: { roi: "6.0%", rent: "AED 85k" } 
    },

    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 300", occupancy: "60%", tenantType: "Sports Tourists" },

    futureUpgrades: [
      { name: "Stadium Renovation", status: "Planned" },
      { name: "Canal Walk Extension", status: "Concept" }
    ],

    priceTrend: { "2022": "AED 500k", "2023": "AED 580k", "2024": "AED 620k", "2025": "AED 650k" },

    description: "Active lifestyle community with budget entry prices and strong yields.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "30 km", mins: "28 mins" },
      school: { name: "Victory Heights", km: "1 km", mins: "3 mins" },
      tourist: { name: "Dubai Autodrome", km: "3 km", mins: "6 mins" },
      metro: { name: "DMCC Metro", km: "12 km", mins: "16 mins" },
      mall: { name: "City Centre Meaisem", km: "4 km", mins: "7 mins" },
      business: { name: "Media City", km: "14 km", mins: "18 mins" },
      hospital: { name: "Mediclinic Parkview", km: "6 km", mins: "9 mins" }
    }
  },

  // --- 4. BUSINESS BAY ---
  {
    id: "business-bay",
    name: "Business Bay",
    emirate: "Dubai",
    category: "Prime / Corporate",
    roi: "6.5%",
    avgPrice: "AED 1.6M",
    imageColor: "bg-indigo-700",
    amenities: ["Dubai Canal", "Metro Station", "Bay Avenue"],

    investorTags: ["Corporate Tenants", "Capital Appreciation", "Luxury Rentals"],
    aiVerdict: {
      title: "The Corporate Hub Choice",
      summary: "Ideal for investors targeting high-income corporate tenants. Significant appreciation expected as waterfront plots develop."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Very High", tenantProfile: "Executives & Professionals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 8.5, liquidity: 9.2, risk: 6.2, lifestyle: 9.0 },
    overallScore: 9.0,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 85k" }, 
      oneBed: { roi: "6.5%", rent: "AED 115k" }, 
      twoBed: { roi: "5.5%", rent: "AED 160k" } 
    },

    shortTermScore: 9.2, // Very high due to proximity to Downtown
    shortTermRental: { allowed: true, avgDailyRate: "AED 750", occupancy: "85%", tenantType: "Business Travelers & Tourists" },

    futureUpgrades: [
      { name: "Canal Promenade Completion", status: "Ongoing" },
      { name: "Marasi Marina Expansion", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.2M", "2023": "AED 1.4M", "2024": "AED 1.5M", "2025": "AED 1.6M" },

    description: "The corporate heart of Dubai with massive demand from professionals.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "15 km", mins: "18 mins" },
      school: { name: "Hartland Intl", km: "5 km", mins: "10 mins" },
      tourist: { name: "Burj Khalifa", km: "2 km", mins: "5 mins" },
      metro: { name: "Business Bay Stn", km: "0.5 km", mins: "2 mins" },
      mall: { name: "Dubai Mall", km: "2 km", mins: "5 mins" },
      business: { name: "DIFC", km: "4 km", mins: "8 mins" },
      hospital: { name: "Emirates Hospital", km: "3 km", mins: "6 mins" }
    }
  },

  // --- 5. DOWNTOWN DUBAI ---
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    emirate: "Dubai",
    category: "Ultra Prime",
    roi: "5.8%",
    avgPrice: "AED 2.2M",
    imageColor: "bg-gray-800",
    amenities: ["Burj Khalifa", "Dubai Mall", "Dubai Opera"],

    investorTags: ["Trophy Asset", "Safe Haven", "High Liquidity"],
    aiVerdict: {
      title: "The Gold Standard",
      summary: "The most prestigious address in the region. Lower yields but unmatched capital preservation and resale liquidity."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Excellent", tenantProfile: "Wealthy Expats & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 9.0, liquidity: 9.8, risk: 4.5, lifestyle: 10.0 },
    overallScore: 9.5,

    unitEconomics: { 
      studio: { roi: "6.2%", rent: "AED 105k" }, 
      oneBed: { roi: "5.8%", rent: "AED 150k" }, 
      twoBed: { roi: "5.0%", rent: "AED 240k" } 
    },

    shortTermScore: 9.8, // Best for Airbnb
    shortTermRental: { allowed: true, avgDailyRate: "AED 1200", occupancy: "90%", tenantType: "Luxury Tourists" },

    futureUpgrades: [
      { name: "Dubai Opera District", status: "Completing" },
      { name: "Boulevard Expansion", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 1.8M", "2023": "AED 2.0M", "2024": "AED 2.1M", "2025": "AED 2.2M" },

    description: "The most prestigious square kilometer in the world. Safe, liquid, and iconic.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "14 km", mins: "15 mins" },
      school: { name: "Hartland Intl", km: "5 km", mins: "10 mins" },
      tourist: { name: "Dubai Fountain", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Dubai Mall Metro", km: "1 km", mins: "3 mins" },
      mall: { name: "Dubai Mall", km: "0.1 km", mins: "1 min" },
      business: { name: "DIFC", km: "3 km", mins: "6 mins" },
      hospital: { name: "Mediclinic Dubai Mall", km: "0.5 km", mins: "2 mins" }
    }
  },

  // --- 6. DUBAI MARINA ---
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    emirate: "Dubai",
    category: "Luxury / Waterfront",
    roi: "6.8%",
    avgPrice: "AED 1.8M",
    imageColor: "bg-blue-600",
    amenities: ["Marina Walk", "Yacht Club", "JBR Beach"],

    investorTags: ["Waterfront", "Expat Favorite", "Resale Value"],
    aiVerdict: {
      title: "The Expat Favorite",
      summary: "Perennially popular with Western expats. High occupancy rates and strong resale demand for sea-view units."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Very High", tenantProfile: "Western Expats & Couples" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.5, appreciation: 8.8, liquidity: 9.5, risk: 5.5, lifestyle: 9.8 },
    overallScore: 9.2,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 90k" }, 
      oneBed: { roi: "6.5%", rent: "AED 130k" }, 
      twoBed: { roi: "5.8%", rent: "AED 190k" } 
    },

    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 850", occupancy: "88%", tenantType: "Beach Tourists" },

    futureUpgrades: [
      { name: "Dubai Harbour Cruise Terminal", status: "Operational" },
      { name: "Blue Waters Connection", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 1.4M", "2023": "AED 1.6M", "2024": "AED 1.7M", "2025": "AED 1.8M" },

    description: "The world's largest man-made marina. High occupancy and premium resale values.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "32 km", mins: "28 mins" },
      school: { name: "Emirates Intl School", km: "3 km", mins: "8 mins" },
      tourist: { name: "Ain Dubai", km: "2 km", mins: "10 mins" },
      metro: { name: "Sobha Realty Metro", km: "0.5 km", mins: "3 mins" },
      mall: { name: "Marina Mall", km: "0.5 km", mins: "3 mins" },
      business: { name: "Media City", km: "2 km", mins: "5 mins" },
      hospital: { name: "King's College Hospital", km: "1 km", mins: "4 mins" }
    }
  },

  // --- 7. DUBAI CREEK HARBOUR ---
  {
    id: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    emirate: "Dubai",
    category: "Future Prime",
    roi: "6.2%",
    avgPrice: "AED 1.9M",
    imageColor: "bg-cyan-600",
    amenities: ["Creek Tower", "Island Park", "Marina"],

    investorTags: ["Long-Term Growth", "Master Plan", "New Downtown"],
    aiVerdict: {
      title: "The Next Downtown",
      summary: "Massive appreciation potential as the master plan matures. Ideal for investors with a 5-10 year horizon."
    },
    demandSignals: { rentalDemand: "Growing", resaleLiquidity: "Medium", tenantProfile: "Modern Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.8, appreciation: 9.5, liquidity: 8.5, risk: 5.8, lifestyle: 9.2 },
    overallScore: 9.1,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 80k" }, 
      oneBed: { roi: "6.5%", rent: "AED 110k" }, 
      twoBed: { roi: "6.0%", rent: "AED 165k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 550", occupancy: "70%", tenantType: "Lifestyle Tourists" },

    futureUpgrades: [
      { name: "The Creek Tower", status: "Redesigned" },
      { name: "Creek Square Mall", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.5M", "2023": "AED 1.7M", "2024": "AED 1.8M", "2025": "AED 1.9M" },

    description: "The 'New Downtown'. Massive capital appreciation potential as master plan matures.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "10 km", mins: "12 mins" },
      school: { name: "Swiss Intl School", km: "4 km", mins: "8 mins" },
      tourist: { name: "Wildlife Sanctuary", km: "2 km", mins: "5 mins" },
      metro: { name: "Creek Metro", km: "1 km", mins: "4 mins" },
      mall: { name: "Dubai Festival City", km: "3 km", mins: "6 mins" },
      business: { name: "Business Bay", km: "8 km", mins: "12 mins" },
      hospital: { name: "American Hospital", km: "7 km", mins: "10 mins" }
    }
  },

  // --- 8. DUBAI HILLS ESTATE ---
  {
    id: "dubai-hills",
    name: "Dubai Hills Estate",
    emirate: "Dubai",
    category: "Premium Family",
    roi: "6.9%",
    avgPrice: "AED 1.7M",
    imageColor: "bg-green-700",
    amenities: ["Dubai Hills Mall", "Central Park", "Golf Club"],

    investorTags: ["Family Centric", "Green Living", "Premium Yields"],
    aiVerdict: {
      title: "Top Choice for Families",
      summary: "The most successful master community by Emaar. High demand from families ensures very low vacancy rates."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Wealthy Families & Expats" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 9.2, liquidity: 9.0, risk: 4.8, lifestyle: 9.5 },
    overallScore: 9.3,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 75k" }, 
      oneBed: { roi: "7.1%", rent: "AED 100k" }, 
      twoBed: { roi: "6.5%", rent: "AED 150k" } 
    },

    shortTermScore: 7.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "75%", tenantType: "Family Holidays" },

    futureUpgrades: [
      { name: "Metro Link (Pink Line)", status: "Proposed" },
      { name: "Business Park Expansion", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 1.3M", "2023": "AED 1.5M", "2024": "AED 1.6M", "2025": "AED 1.7M" },

    description: "The 'Green Heart of Dubai'. Extremely popular with families and expats.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "22 km", mins: "20 mins" },
      school: { name: "GEMS Wellington", km: "1 km", mins: "3 mins" },
      tourist: { name: "Global Village", km: "10 km", mins: "12 mins" },
      metro: { name: "Mall of Emirates", km: "6 km", mins: "8 mins" },
      mall: { name: "Dubai Hills Mall", km: "0.2 km", mins: "1 min" },
      business: { name: "Downtown", km: "12 km", mins: "15 mins" },
      hospital: { name: "King's College Hospital", km: "0.5 km", mins: "2 mins" }
    }
  },

  // --- 9. AL FURJAN ---
  {
    id: "al-furjan",
    name: "Al Furjan",
    emirate: "Dubai",
    category: "Connectivity / Yield",
    roi: "7.6%",
    avgPrice: "AED 900k",
    imageColor: "bg-amber-600",
    amenities: ["Metro Access", "Ibn Battuta Mall", "Community Club"],

    investorTags: ["Metro Access", "Growth Corridor", "Value Buy"],
    aiVerdict: {
      title: "Strategic Growth Zone",
      summary: "Benefiting from the Metro extension and proximity to Expo City. Excellent value for money with strong rental yields."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Commuters & Airport Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.8, appreciation: 7.0, liquidity: 8.2, risk: 5.8, lifestyle: 7.5 },
    overallScore: 8.1,

    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 52k" }, 
      oneBed: { roi: "7.5%", rent: "AED 78k" }, 
      twoBed: { roi: "6.8%", rent: "AED 110k" } 
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "65%", tenantType: "Budget Tourists" },

    futureUpgrades: [
      { name: "Al Maktoum Airport Expansion", status: "Approved" },
      { name: "Expo City Growth", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 700k", "2023": "AED 800k", "2024": "AED 850k", "2025": "AED 900k" },

    description: "Strategic location near Expo City and Metro line with excellent value.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "35 km", mins: "30 mins" },
      school: { name: "Arbor School", km: "1 km", mins: "3 mins" },
      tourist: { name: "Expo City", km: "5 km", mins: "8 mins" },
      metro: { name: "Al Furjan Metro", km: "0.5 km", mins: "2 mins" },
      mall: { name: "Ibn Battuta Mall", km: "3 km", mins: "5 mins" },
      business: { name: "DMCC / JLT", km: "6 km", mins: "8 mins" },
      hospital: { name: "NMC Royal", km: "4 km", mins: "6 mins" }
    }
  },

  // --- 10. MEYDAN (MBR CITY) ---
  {
    id: "meydan",
    name: "Meydan (MBR City)",
    emirate: "Dubai",
    category: "Luxury / Growth",
    roi: "6.4%",
    avgPrice: "AED 1.4M",
    imageColor: "bg-purple-800",
    amenities: ["Racecourse", "Golf Course", "Lagoons"],

    investorTags: ["Luxury Living", "High Appreciation", "Gated Communities"],
    aiVerdict: {
      title: "Upscale Future Living",
      summary: "Home to crystal lagoons and mansions. Positioned as a luxury alternative to Downtown with significant upside potential."
    },
    demandSignals: { rentalDemand: "Growing", resaleLiquidity: "Medium", tenantProfile: "High Net Worth Individuals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 9.0, liquidity: 7.8, risk: 5.5, lifestyle: 9.0 },
    overallScore: 8.8,

    unitEconomics: { 
      studio: { roi: "6.8%", rent: "AED 70k" }, 
      oneBed: { roi: "6.2%", rent: "AED 95k" }, 
      twoBed: { roi: "5.8%", rent: "AED 140k" } 
    },

    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "70%", tenantType: "Event Tourists (Racecourse)" },

    futureUpgrades: [
      { name: "Meydan One Mall", status: "Under Construction" },
      { name: "Metro Connection", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 1.1M", "2023": "AED 1.25M", "2024": "AED 1.35M", "2025": "AED 1.4M" },

    description: "Upscale living with crystal lagoons and proximity to Downtown.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "18 km", mins: "16 mins" },
      school: { name: "Hartland Intl", km: "2 km", mins: "4 mins" },
      tourist: { name: "Meydan Racecourse", km: "1 km", mins: "2 mins" },
      metro: { name: "Business Bay", km: "8 km", mins: "10 mins" },
      mall: { name: "Meydan One Mall", km: "2 km", mins: "4 mins" },
      business: { name: "Downtown", km: "6 km", mins: "8 mins" },
      hospital: { name: "Mediclinic City", km: "8 km", mins: "12 mins" }
    }
  }
];