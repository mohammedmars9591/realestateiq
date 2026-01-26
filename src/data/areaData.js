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

    investorTags: ["High Cash Flow", "Entry-Level", "Family Rentals", "Low Vacancy"],
    aiVerdict: {
      title: "Best for Monthly Income",
      summary: "Dubai's volume leader for rentals. Offers the perfect balance of affordability and amenities, ensuring near-zero vacancy."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "High",
      tenantProfile: "Young professionals & small families"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.1, appreciation: 7.8, liquidity: 8.5, risk: 6.2, lifestyle: 7.0 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 55k" }, 
      oneBed: { roi: "7.9%", rent: "AED 75k" }, 
      twoBed: { roi: "6.4%", rent: "AED 105k" } 
    },

    shortTermScore: 8.2,
    shortTermRental: { allowed: true, avgDailyRate: "AED 420", occupancy: "68%", tenantType: "Budget Tourists" },

    futureUpgrades: [
      { name: "Metro Extension (Blue Line)", status: "Planned 2029" },
      { name: "Circle Mall Phase 2", status: "Under Construction" },
      { name: "New Community Parks", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 720k", "2023": "AED 810k", "2024": "AED 900k", "2025": "AED 950k" },

    description: "Dubai’s top mid-market community offering high rental yields and rapid liquidity.",
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
      title: "Rising Star for Short-Term",
      summary: "Located near Miracle Garden, Arjan is rapidly becoming a holiday home hotspot with yields outperforming established areas."
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

    shortTermScore: 8.8, 
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "72%", tenantType: "Holiday Makers" },

    futureUpgrades: [
      { name: "New School Complex", status: "Proposed" },
      { name: "Hospital Expansion", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 650k", "2023": "AED 720k", "2024": "AED 790k", "2025": "AED 850k" },

    description: "Emerging tourist hotspot near Miracle Garden, ideal for high-yield holiday homes.",
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
      summary: "Offers one of the lowest entry points in Dubai with reliable ROI driven by fitness-conscious long-term tenants."
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

    description: "Budget-friendly active lifestyle community with excellent rental stability.",
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

    investorTags: ["Corporate Tenants", "Appreciation", "Luxury Rentals"],
    aiVerdict: {
      title: "The Corporate Hub",
      summary: "Ideal for targeting high-income executives. Waterfront plots and proximity to Downtown drive consistent capital appreciation."
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

    shortTermScore: 9.2,
    shortTermRental: { allowed: true, avgDailyRate: "AED 750", occupancy: "85%", tenantType: "Business Travelers" },

    futureUpgrades: [
      { name: "Canal Promenade", status: "Ongoing" },
      { name: "Marasi Marina", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.2M", "2023": "AED 1.4M", "2024": "AED 1.5M", "2025": "AED 1.6M" },

    description: "Dubai’s central business district offering high-demand corporate and luxury rentals.",
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
      summary: "The most prestigious address in the region. Offers unmatched capital preservation and liquidity, though yields are lower."
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

    shortTermScore: 9.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1200", occupancy: "90%", tenantType: "Luxury Tourists" },

    futureUpgrades: [
      { name: "Opera District", status: "Completing" },
      { name: "Boulevard Expansion", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 1.8M", "2023": "AED 2.0M", "2024": "AED 2.1M", "2025": "AED 2.2M" },

    description: "The world's most prestigious square kilometer, offering unmatched capital preservation.",
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

    description: "The world's largest man-made marina, offering premium waterfront living and high liquidity.",
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

    description: "The 'New Downtown' of Dubai, promising massive capital growth as the master plan completes.",
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
      summary: "Emaar's most successful family community. High demand from wealthy families ensures very low vacancy rates."
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

    description: "Dubai's 'Green Heart', offering a premium lifestyle that attracts high-net-worth families.",
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

    description: "Strategically located near Expo City and the Metro, offering excellent value and connectivity.",
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
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "70%", tenantType: "Event Tourists" },

    futureUpgrades: [
      { name: "Meydan One Mall", status: "Under Construction" },
      { name: "Metro Connection", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 1.1M", "2023": "AED 1.25M", "2024": "AED 1.35M", "2025": "AED 1.4M" },

    description: "A premium lifestyle destination featuring crystal lagoons and proximity to Downtown Dubai.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "18 km", mins: "16 mins" },
      school: { name: "Hartland Intl", km: "2 km", mins: "4 mins" },
      tourist: { name: "Meydan Racecourse", km: "1 km", mins: "2 mins" },
      metro: { name: "Business Bay", km: "8 km", mins: "10 mins" },
      mall: { name: "Meydan One Mall", km: "2 km", mins: "4 mins" },
      business: { name: "Downtown", km: "6 km", mins: "8 mins" },
      hospital: { name: "Mediclinic City", km: "8 km", mins: "12 mins" }
    }
  },


  // ==========================================================
  // DUBAI ACADEMIC CITY
  // ==========================================================
  {
    id: "academic-city",
    name: "Dubai Academic City",
    emirate: "Dubai",
    category: "High Yield",

    roi: "8.2%",
    avgPrice: "AED 720k",
    imageColor: "bg-indigo-600",
    amenities: ["Universities", "Student Housing", "Retail Centers"],

    investorTags: ["Student Rentals", "High Yield", "Low Entry Price", "Stable Demand"],
    aiVerdict: {
      title: "Student Rental King",
      summary: "A high-occupancy rental market driven by year-round student demand and predictable cash flow."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "Medium",
      tenantProfile: "Students & academic staff"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.3, appreciation: 7.2, liquidity: 6.8, risk: 6.5, lifestyle: 6.0 },
    overallScore: 8.1,

    unitEconomics: {
      studio: { roi: "9.1%", rent: "AED 48k" },
      oneBed: { roi: "8.2%", rent: "AED 65k" },
      twoBed: { roi: "6.1%", rent: "AED 82k" }
    },

    shortTermScore: 6.9,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "New University Campuses", status: "Under Construction" },
      { name: "Road Connectivity Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 580k", "2023": "AED 640k", "2024": "AED 690k", "2025": "AED 720k" },

    description: "A purpose-built education hub offering student-focused housing, predictable rental income, and strong cash flow, supported by year-round academic demand and relatively affordable entry prices for investors.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "22 km", mins: "20 mins" },
      school: { name: "University of Dubai", km: "0.8 km", mins: "3 mins" },
      tourist: { name: "Global Village", km: "9 km", mins: "12 mins" },
      metro: { name: "Rashidiya Metro", km: "18 km", mins: "18 mins" },
      mall: { name: "Dragon Mart", km: "6 km", mins: "8 mins" },
      business: { name: "Silicon Oasis", km: "7 km", mins: "10 mins" },
      hospital: { name: "Mediclinic Parkview", km: "12 km", mins: "14 mins" }
    }
  },

  // ==========================================================
  // AL BARARI
  // ==========================================================
  {
    id: "al-barari",
    name: "Al Barari",
    emirate: "Dubai",
    category: "Ultra Luxury",

    roi: "5.2%",
    avgPrice: "AED 4.8M",
    imageColor: "bg-green-800",
    amenities: ["Botanical Gardens", "Wellness Centers", "Luxury Dining"],

    investorTags: ["Luxury Villas", "Capital Appreciation", "End-User Focused"],
    aiVerdict: {
      title: "Elite Green Luxury",
      summary: "A rare, low-density luxury community designed for wellness-driven end users."
    },
    demandSignals: {
      rentalDemand: "Medium",
      resaleLiquidity: "High",
      tenantProfile: "High-net-worth families"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

    scores: { cashFlow: 6.1, appreciation: 9.2, liquidity: 8.4, risk: 5.5, lifestyle: 9.5 },
    overallScore: 8.0,

    unitEconomics: {
      villa: { roi: "5.2%", rent: "AED 250k+" }
    },

    shortTermScore: 5.8,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Luxury Retail Pavilion", status: "Approved" },
      { name: "Green Community Expansion", status: "Under Development" }
    ],

    priceTrend: { "2022": "AED 3.9M", "2023": "AED 4.3M", "2024": "AED 4.6M", "2025": "AED 4.8M" },

    description: "An ultra-luxury, low-density green community designed for privacy and wellness, attracting high-net-worth end users and long-term tenants while delivering limited-supply driven capital appreciation.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "24 km", mins: "22 mins" },
      school: { name: "Dunecrest American School", km: "3 km", mins: "6 mins" },
      tourist: { name: "Global Village", km: "10 km", mins: "12 mins" },
      metro: { name: "Business Bay Metro", km: "20 km", mins: "25 mins" },
      mall: { name: "Cityland Mall", km: "6 km", mins: "8 mins" },
      business: { name: "Downtown Dubai", km: "18 km", mins: "22 mins" },
      hospital: { name: "Mediclinic Parkview", km: "7 km", mins: "10 mins" }
    }
  },

  // ==========================================================
  // AL BARSHA (1, 2, 3)
  // ==========================================================
  {
    id: "al-barsha",
    name: "Al Barsha (1, 2, 3)",
    emirate: "Dubai",
    category: "Balanced Investment",

    roi: "6.9%",
    avgPrice: "AED 1.25M",
    imageColor: "bg-sky-700",
    amenities: ["Mall of the Emirates", "Metro Access", "Hospitals"],

    investorTags: ["Family Rentals", "Central Location", "High Liquidity"],
    aiVerdict: {
      title: "Central Living Hub",
      summary: "A dependable district combining location strength with consistent rental demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "Very High",
      tenantProfile: "Families & professionals"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.4, appreciation: 8.0, liquidity: 9.1, risk: 6.0, lifestyle: 8.5 },
    overallScore: 8.3,

    unitEconomics: {
      oneBed: { roi: "7.2%", rent: "AED 85k" },
      twoBed: { roi: "6.5%", rent: "AED 115k" },
      threeBed: { roi: "5.9%", rent: "AED 145k" }
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 480", occupancy: "64%", tenantType: "Business Travelers" },

    futureUpgrades: [
      { name: "Traffic Flow Improvements", status: "Approved" },
      { name: "Retail Redevelopment Projects", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.05M", "2023": "AED 1.12M", "2024": "AED 1.20M", "2025": "AED 1.25M" },

    description: "A centrally located, mature residential district combining metro connectivity, family-friendly living, strong rental demand, and exceptional resale liquidity, making it one of Dubai’s most dependable investment zones.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "26 km", mins: "25 mins" },
      school: { name: "Dubai American Academy", km: "2 km", mins: "5 mins" },
      tourist: { name: "Ski Dubai", km: "1 km", mins: "3 mins" },
      metro: { name: "Mall of Emirates", km: "0.8 km", mins: "2 mins" },
      mall: { name: "Mall of the Emirates", km: "0.7 km", mins: "2 mins" },
      business: { name: "Internet City", km: "8 km", mins: "10 mins" },
      hospital: { name: "Saudi German Hospital", km: "1.5 km", mins: "4 mins" }
    }
  },

  // ==========================================================
  // AL BARSHA SOUTH
  // ==========================================================
  {
    id: "al-barsha-south",
    name: "Al Barsha South",
    emirate: "Dubai",
    category: "Growth Corridor",

    roi: "7.4%",
    avgPrice: "AED 980k",
    imageColor: "bg-teal-700",
    amenities: ["Dubai Hills", "Parks", "New Schools"],

    investorTags: ["Emerging Area", "Family Living", "Future Appreciation"],
    aiVerdict: {
      title: "Growth Corridor Play",
      summary: "A developing district positioned for mid-term price and rent growth."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "Medium",
      tenantProfile: "Families & executives"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 8.3, liquidity: 7.2, risk: 6.4, lifestyle: 7.9 },
    overallScore: 8.0,

    unitEconomics: {
      oneBed: { roi: "7.6%", rent: "AED 78k" },
      twoBed: { roi: "6.8%", rent: "AED 108k" }
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "60%", tenantType: "Medical Tourists" },

    futureUpgrades: [
      { name: "Dubai Hills Expansion", status: "Under Development" },
      { name: "New Educational Facilities", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 820k", "2023": "AED 880k", "2024": "AED 940k", "2025": "AED 980k" },

    description: "A rapidly developing residential corridor near Dubai Hills, offering modern housing, growing family demand, and attractive medium-term appreciation potential as infrastructure, schools, and amenities continue expanding.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "27 km", mins: "26 mins" },
      school: { name: "GEMS World Academy", km: "2.5 km", mins: "6 mins" },
      tourist: { name: "Dubai Hills Park", km: "3 km", mins: "6 mins" },
      metro: { name: "Mall of Emirates", km: "9 km", mins: "12 mins" },
      mall: { name: "Dubai Hills Mall", km: "4 km", mins: "7 mins" },
      business: { name: "Business Bay", km: "16 km", mins: "18 mins" },
      hospital: { name: "King’s College Hospital", km: "4 km", mins: "7 mins" }
    }
  },

  // ==========================================================
  // AL GARHOUD
  // ==========================================================
  {
    id: "al-garhoud",
    name: "Al Garhoud",
    emirate: "Dubai",
    category: "Core City",

    roi: "6.5%",
    avgPrice: "AED 1.1M",
    imageColor: "bg-amber-700",
    amenities: ["Metro Stations", "Hotels", "Parks"],

    investorTags: ["Airport Proximity", "Stable Rentals", "Corporate Tenants"],
    aiVerdict: {
      title: "Airport Stability Zone",
      summary: "A low-volatility rental market supported by airport and corporate demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "High",
      tenantProfile: "Airline staff & corporate tenants"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 7.4, liquidity: 8.2, risk: 6.1, lifestyle: 7.3 },
    overallScore: 7.8,

    unitEconomics: {
      oneBed: { roi: "6.8%", rent: "AED 82k" },
      twoBed: { roi: "6.1%", rent: "AED 110k" }
    },

    shortTermScore: 7.9,
    shortTermRental: { allowed: true, avgDailyRate: "AED 520", occupancy: "70%", tenantType: "Transit Travelers" },

    futureUpgrades: [
      { name: "Airport Road Enhancements", status: "Approved" },
      { name: "Hotel Redevelopment Projects", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 950k", "2023": "AED 1.02M", "2024": "AED 1.08M", "2025": "AED 1.1M" },

    description: "A well-established, airport-adjacent neighborhood delivering stable corporate rentals, consistent occupancy, and balanced investment performance, supported by excellent connectivity to business districts, metro stations, and key city infrastructure.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "4 km", mins: "6 mins" },
      school: { name: "Dubai English Speaking School", km: "1.8 km", mins: "5 mins" },
      tourist: { name: "Dubai Creek", km: "5 km", mins: "8 mins" },
      metro: { name: "GGICO Metro", km: "1 km", mins: "3 mins" },
      mall: { name: "City Centre Deira", km: "6 km", mins: "10 mins" },
      business: { name: "Deira CBD", km: "5 km", mins: "8 mins" },
      hospital: { name: "Thumbay Hospital", km: "4 km", mins: "7 mins" }
    }
  },

  // ==========================================================
  // AL JADDAF
  // ==========================================================
  {
    id: "al-jaddaf",
    name: "Al Jaddaf",
    emirate: "Dubai",
    category: "Urban Growth",

    roi: "7.3%",
    avgPrice: "AED 980k",
    imageColor: "bg-purple-700",
    amenities: ["Waterfront", "Hotels", "Healthcare City"],

    investorTags: ["Waterfront Living", "Healthcare Tenants", "Mid-Term Growth"],
    aiVerdict: {
      title: "Creekside Growth Zone",
      summary: "An emerging waterfront district supported by medical and hospitality demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "High",
      tenantProfile: "Medical professionals & executives"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.6, appreciation: 8.2, liquidity: 8.0, risk: 6.3, lifestyle: 7.8 },
    overallScore: 8.1,

    unitEconomics: {
      studio: { roi: "7.8%", rent: "AED 58k" },
      oneBed: { roi: "7.2%", rent: "AED 78k" },
      twoBed: { roi: "6.3%", rent: "AED 105k" }
    },

    shortTermScore: 7.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "66%", tenantType: "Medical & Leisure Visitors" },

    futureUpgrades: [
      { name: "Creekside Promenade", status: "Under Development" },
      { name: "Healthcare City Expansion", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 820k", "2023": "AED 890k", "2024": "AED 940k", "2025": "AED 980k" },

    description: "A fast-evolving waterfront neighborhood near Healthcare City, offering strong rental demand, improving lifestyle appeal, and attractive growth potential driven by medical, hotel, and business-related tenant activity.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "9 km", mins: "12 mins" },
      school: { name: "Swiss International School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Dubai Creek", km: "3 km", mins: "6 mins" },
      metro: { name: "Al Jaddaf Metro", km: "1 km", mins: "3 mins" },
      mall: { name: "Festival City Mall", km: "4 km", mins: "8 mins" },
      business: { name: "Business Bay", km: "10 km", mins: "14 mins" },
      hospital: { name: "Dubai Healthcare City", km: "1.5 km", mins: "4 mins" }
    }
  },

  // ==========================================================
  // AL KHAIL GATE
  // ==========================================================
  {
    id: "al-khail-gate",
    name: "Al Khail Gate",
    emirate: "Dubai",
    category: "Affordable Housing",

    roi: "8.6%",
    avgPrice: "AED 620k",
    imageColor: "bg-rose-700",
    amenities: ["Community Retail", "Parks", "Schools"],

    investorTags: ["Affordable Rentals", "High Yield", "Blue-Collar Demand"],
    aiVerdict: {
      title: "Cash Flow Focus",
      summary: "A budget-friendly rental zone delivering strong yields through workforce housing demand."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "Medium",
      tenantProfile: "Workforce & service professionals"
    },
    ownership: { type: "Leasehold", eligibleFor: ["UAE Nationals & GCC"], minDownPayment: "25%" },

    scores: { cashFlow: 9.0, appreciation: 6.4, liquidity: 6.2, risk: 6.8, lifestyle: 5.8 },
    overallScore: 7.7,

    unitEconomics: {
      studio: { roi: "9.2%", rent: "AED 42k" },
      oneBed: { roi: "8.4%", rent: "AED 55k" }
    },

    shortTermScore: 5.5,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Community Retail Expansion", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 520k", "2023": "AED 570k", "2024": "AED 600k", "2025": "AED 620k" },

    description: "An affordable residential cluster focused on workforce housing, delivering very high rental yields and stable occupancy, though primarily suited for cash-flow-driven investors rather than lifestyle-focused end users.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "20 km", mins: "22 mins" },
      school: { name: "GEMS Wellington", km: "3 km", mins: "7 mins" },
      tourist: { name: "Meydan Racecourse", km: "6 km", mins: "10 mins" },
      metro: { name: "Business Bay Metro", km: "9 km", mins: "14 mins" },
      mall: { name: "Oasis Mall", km: "8 km", mins: "12 mins" },
      business: { name: "Business Bay", km: "7 km", mins: "10 mins" },
      hospital: { name: "Mediclinic Parkview", km: "10 km", mins: "15 mins" }
    }
  },

  // ==========================================================
  // AL KHAWANEEJ (1 & 2)
  // ==========================================================
  {
    id: "al-khawaneej",
    name: "Al Khawaneej (1 & 2)",
    emirate: "Dubai",
    category: "Villa Living",

    roi: "5.9%",
    avgPrice: "AED 2.6M",
    imageColor: "bg-lime-700",
    amenities: ["Last Exit", "Parks", "Private Farms"],

    investorTags: ["Villa Community", "End-User Focused", "Low Density"],
    aiVerdict: {
      title: "Suburban Family Haven",
      summary: "A quiet villa-focused district designed for long-term family living."
    },
    demandSignals: {
      rentalDemand: "Medium",
      resaleLiquidity: "Medium",
      tenantProfile: "Local families & executives"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

    scores: { cashFlow: 6.0, appreciation: 7.8, liquidity: 6.9, risk: 6.0, lifestyle: 8.6 },
    overallScore: 7.6,

    unitEconomics: {
      villa: { roi: "5.9%", rent: "AED 150k+" }
    },

    shortTermScore: 4.9,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Road Infrastructure Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 2.1M", "2023": "AED 2.3M", "2024": "AED 2.5M", "2025": "AED 2.6M" },

    description: "A low-density villa community offering spacious homes, privacy, and suburban living, appealing primarily to end users and long-term tenants seeking calm environments over short-term rental returns.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "16 km", mins: "18 mins" },
      school: { name: "Mirdif American School", km: "4 km", mins: "8 mins" },
      tourist: { name: "Last Exit Khawaneej", km: "2 km", mins: "4 mins" },
      metro: { name: "Centrepoint Metro", km: "12 km", mins: "15 mins" },
      mall: { name: "City Centre Mirdif", km: "6 km", mins: "10 mins" },
      business: { name: "Dubai Airport Freezone", km: "14 km", mins: "18 mins" },
      hospital: { name: "Mediclinic Mirdif", km: "6 km", mins: "10 mins" }
    }
  },

  // ==========================================================
  // AL LISAili
  // ==========================================================
  {
    id: "al-lisaili",
    name: "Al Lisaili",
    emirate: "Dubai",
    category: "Rural Growth",

    roi: "6.8%",
    avgPrice: "AED 540k",
    imageColor: "bg-stone-700",
    amenities: ["Open Land", "Warehouses", "Truck Routes"],

    investorTags: ["Land Investment", "Industrial Use", "Long-Term Hold"],
    aiVerdict: {
      title: "Land Banking Zone",
      summary: "A low-density area suited for long-term land appreciation strategies."
    },
    demandSignals: {
      rentalDemand: "Low",
      resaleLiquidity: "Low",
      tenantProfile: "Logistics & agricultural users"
    },
    ownership: { type: "Freehold", eligibleFor: ["UAE Nationals & GCC"], minDownPayment: "30%" },

    scores: { cashFlow: 5.5, appreciation: 7.0, liquidity: 5.8, risk: 7.2, lifestyle: 4.5 },
    overallScore: 6.6,

    unitEconomics: {
      land: { roi: "6.8%", rent: "N/A" }
    },

    shortTermScore: 3.5,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Logistics Corridor Expansion", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 430k", "2023": "AED 470k", "2024": "AED 510k", "2025": "AED 540k" },

    description: "A sparsely populated outskirts area primarily suited for land banking and industrial use, offering speculative long-term appreciation rather than immediate rental income or lifestyle-driven residential demand.",

    connectivity: {
      airport: { name: "Al Maktoum Airport", km: "35 km", mins: "30 mins" },
      school: { name: "GEMS Education", km: "18 km", mins: "20 mins" },
      tourist: { name: "Al Qudra Lakes", km: "12 km", mins: "15 mins" },
      metro: { name: "Expo City Metro", km: "28 km", mins: "25 mins" },
      mall: { name: "Cityland Mall", km: "20 km", mins: "22 mins" },
      business: { name: "Dubai South", km: "30 km", mins: "28 mins" },
      hospital: { name: "NMC Royal Hospital", km: "22 km", mins: "24 mins" }
    }
  },

  // ==========================================================
  // AL MAMZAR
  // ==========================================================
  {
    id: "al-mamzar",
    name: "Al Mamzar",
    emirate: "Dubai",
    category: "Beachside Living",

    roi: "6.7%",
    avgPrice: "AED 1.4M",
    imageColor: "bg-cyan-700",
    amenities: ["Beach Park", "Corniche", "Waterfront"],

    investorTags: ["Beach Proximity", "Family Living", "Lifestyle Appeal"],
    aiVerdict: {
      title: "Affordable Beachside",
      summary: "A rare coastal residential area combining lifestyle appeal with steady rental demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "High",
      tenantProfile: "Families & professionals"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.9, appreciation: 7.6, liquidity: 8.3, risk: 6.0, lifestyle: 8.8 },
    overallScore: 8.0,

    unitEconomics: {
      oneBed: { roi: "6.9%", rent: "AED 78k" },
      twoBed: { roi: "6.3%", rent: "AED 105k" }
    },

    shortTermScore: 7.2,
    shortTermRental: { allowed: true, avgDailyRate: "AED 480", occupancy: "62%", tenantType: "Leisure Travelers" },

    futureUpgrades: [
      { name: "Beachfront Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 1.2M", "2023": "AED 1.28M", "2024": "AED 1.35M", "2025": "AED 1.4M" },

    description: "A well-established beachfront community offering relaxed coastal living, consistent rental demand, and strong lifestyle appeal, supported by parks, open beaches, and proximity to Sharjah and Deira.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "10 km", mins: "14 mins" },
      school: { name: "The Millennium School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Al Mamzar Beach Park", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Al Qiyadah Metro", km: "4 km", mins: "8 mins" },
      mall: { name: "Century Mall", km: "3 km", mins: "6 mins" },
      business: { name: "Deira CBD", km: "6 km", mins: "10 mins" },
      hospital: { name: "Prime Hospital", km: "3 km", mins: "6 mins" }
    }
  },

  // ==========================================================
  // AL MIZHAR (1 & 2)
  // ==========================================================
  {
    id: "al-mizhar",
    name: "Al Mizhar (1 & 2)",
    emirate: "Dubai",
    category: "Family Villas",

    roi: "5.8%",
    avgPrice: "AED 2.3M",
    imageColor: "bg-emerald-800",
    amenities: ["Parks", "Schools", "Community Centers"],

    investorTags: ["Villa Community", "Family End Users", "Low Turnover"],
    aiVerdict: {
      title: "Quiet Family Zone",
      summary: "A low-density villa district designed for long-term family residency."
    },
    demandSignals: {
      rentalDemand: "Medium",
      resaleLiquidity: "Medium",
      tenantProfile: "Local families"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

    scores: { cashFlow: 5.9, appreciation: 7.5, liquidity: 6.8, risk: 6.0, lifestyle: 8.2 },
    overallScore: 7.4,

    unitEconomics: {
      villa: { roi: "5.8%", rent: "AED 140k+" }
    },

    shortTermScore: 4.7,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Community Park Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 1.9M", "2023": "AED 2.05M", "2024": "AED 2.2M", "2025": "AED 2.3M" },

    description: "A calm, villa-focused residential neighborhood favored by families, offering spacious homes, community parks, and stable long-term occupancy, though better suited for end users than yield-focused investors.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "14 km", mins: "16 mins" },
      school: { name: "Uptown International School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Mushrif Park", km: "4 km", mins: "7 mins" },
      metro: { name: "Centrepoint Metro", km: "10 km", mins: "14 mins" },
      mall: { name: "City Centre Mirdif", km: "5 km", mins: "9 mins" },
      business: { name: "Airport Freezone", km: "12 km", mins: "15 mins" },
      hospital: { name: "Mediclinic Mirdif", km: "5 km", mins: "9 mins" }
    }
  },

  // ==========================================================
  // AL MURAQQABAT
  // ==========================================================
  {
    id: "al-muraqqabat",
    name: "Al Muraqqabat",
    emirate: "Dubai",
    category: "Urban Core",

    roi: "7.1%",
    avgPrice: "AED 880k",
    imageColor: "bg-red-700",
    amenities: ["Retail Streets", "Metro Access", "Hotels"],

    investorTags: ["City Core", "High Occupancy", "Transit Demand"],
    aiVerdict: {
      title: "Inner-City Performer",
      summary: "A dense urban district delivering reliable rental demand."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "High",
      tenantProfile: "Urban professionals & service workers"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 7.0, liquidity: 8.5, risk: 6.4, lifestyle: 6.9 },
    overallScore: 7.9,

    unitEconomics: {
      studio: { roi: "7.6%", rent: "AED 52k" },
      oneBed: { roi: "7.1%", rent: "AED 70k" }
    },

    shortTermScore: 7.6,
    shortTermRental: { allowed: true, avgDailyRate: "AED 460", occupancy: "69%", tenantType: "City Travelers" },

    futureUpgrades: [
      { name: "Streetscape Revitalization", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 760k", "2023": "AED 810k", "2024": "AED 850k", "2025": "AED 880k" },

    description: "A busy inner-city neighborhood offering excellent metro connectivity, constant rental demand, and strong occupancy levels, making it a reliable option for investors focused on steady income over lifestyle.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "6 km", mins: "10 mins" },
      school: { name: "Little Flower English School", km: "1.5 km", mins: "4 mins" },
      tourist: { name: "Al Ghurair Centre", km: "1 km", mins: "3 mins" },
      metro: { name: "Al Rigga Metro", km: "0.4 km", mins: "2 mins" },
      mall: { name: "Al Ghurair Centre", km: "1 km", mins: "3 mins" },
      business: { name: "Deira CBD", km: "2 km", mins: "5 mins" },
      hospital: { name: "NMC Specialty Hospital", km: "2 km", mins: "5 mins" }
    }
  },

  {
  id: "al-nahada-dubai",
  name: "Al Nahada Dubai",
  emirate: "Dubai",
  category: "High Yield",

  roi: "7.6%",
  avgPrice: "AED 760k",
  imageColor: "bg-indigo-500",
  amenities: ["Metro Access", "Retail Strips", "Parks"],

  investorTags: ["High Rental Demand", "Affordability", "Sharjah Commute"],
  aiVerdict: {
    title: "Sharjah & Dubai Commuter Magnet",
    summary: "Consistent rental demand driven by affordability and proximity to Sharjah and Dubai, delivering dependable yields."
  },
  demandSignals: {
    rentalDemand: "Very High",
    resaleLiquidity: "High",
    tenantProfile: "Professionals & Families"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 8.7, appreciation: 6.9, liquidity: 8.3, risk: 6.2, lifestyle: 6.4 },
  overallScore: 8.1,

  unitEconomics: {
    studio: { roi: "8.4%", rent: "AED 50k" },
    oneBed: { roi: "7.8%", rent: "AED 68k" },
    twoBed: { roi: "7.0%", rent: "AED 92k" }
  },

  shortTermScore: 7.0,
  shortTermRental: { allowed: true, avgDailyRate: "AED 400", occupancy: "62%", tenantType: "Commuter & Budget Tourists" },

  futureUpgrades: [
    { name: "Community Park Enhancements", status: "Planned" },
    { name: "Retail Node Expansion", status: "Approved" }
  ],

  priceTrend: { "2022": "AED 650k", "2023": "AED 700k", "2024": "AED 730k", "2025": "AED 760k" },

  description: "A high-yield residential hub favored by Sharjah commuters and mid-income families, combining affordability, strong rental demand and metro access to deliver consistent cash flow.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "16 km", mins: "18 mins" },
    school: { name: "GEMS Winchester School", km: "2 km", mins: "5 mins" },
    tourist: { name: "Expo City Park", km: "8 km", mins: "12 mins" },
    metro: { name: "Etisalat Metro", km: "3 km", mins: "6 mins" },
    mall: { name: "Dubai Festival City Mall", km: "7 km", mins: "10 mins" },
    business: { name: "Deira CBD", km: "10 km", mins: "14 mins" },
    hospital: { name: "Al Qusais Health Centre", km: "4 km", mins: "8 mins" }
  }
},
{
  id: "al-quoz",
  name: "Al Quoz (1,2,3,4 & Industrial)",
  emirate: "Dubai",
  category: "Mixed Use",

  roi: "7.1%",
  avgPrice: "AED 1.02M",
  imageColor: "bg-gray-700",
  amenities: ["Art District", "Warehouses", "Retail & Studios"],

  investorTags: ["Industrial to Creative", "Long-Term Upside", "Mixed Use Demand"],
  aiVerdict: {
    title: "Creative & Industrial Blend",
    summary: "A unique mixed-use district balancing industrial, creative and residential dynamics for diversified investment exposure."
  },
  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "Medium",
    tenantProfile: "Artists, SMEs & Industrial Tenants"
  },
  ownership: { type: "Freehold (Project Specific)", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

  scores: { cashFlow: 7.3, appreciation: 8.0, liquidity: 7.0, risk: 6.6, lifestyle: 7.4 },
  overallScore: 7.7,

  unitEconomics: {
    studio: { roi: "7.4%", rent: "AED 54k" },
    oneBed: { roi: "7.0%", rent: "AED 70k" },
    twoBed: { roi: "6.5%", rent: "AED 95k" }
  },

  shortTermScore: 6.8,
  shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "60%", tenantType: "Artists & Visitors" },

  futureUpgrades: [
    { name: "Alserkal Avenue Expansion", status: "Planned" },
    { name: "Industrial Retrofits", status: "Approved" }
  ],

  priceTrend: { "2022": "AED 900k", "2023": "AED 950k", "2024": "AED 990k", "2025": "AED 1.02M" },

  description: "A transforming mixed-use district combining industrial, creative and residential elements, offering investors diversified rental demand and long-term appreciation potential from regeneration trends.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "15 km", mins: "16 mins" },
    school: { name: "Dubai British School", km: "4 km", mins: "8 mins" },
    tourist: { name: "Alserkal Avenue", km: "1 km", mins: "3 mins" },
    metro: { name: "First Al Khail Metro", km: "2 km", mins: "5 mins" },
    mall: { name: "Mall of the Emirates", km: "10 km", mins: "12 mins" },
    business: { name: "Business Bay", km: "12 km", mins: "14 mins" },
    hospital: { name: "Mediclinic Meadows", km: "7 km", mins: "10 mins" }
  }
},
{
  id: "al-qusais",
  name: "Al Qusais",
  emirate: "Dubai",
  category: "Family Residential",

  roi: "7.2%",
  avgPrice: "AED 820k",
  imageColor: "bg-sky-600",
  amenities: ["Metro Access", "Parks", "Schools"],

  investorTags: ["Stable Rents", "Family Focused", "Metro Connectivity"],
  aiVerdict: {
    title: "Reliable Mid-Market",
    summary: "A stable residential district with balanced rental demand and family-oriented tenancy."
  },
  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "High",
    tenantProfile: "Families & professionals"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 8.2, appreciation: 7.0, liquidity: 8.1, risk: 6.1, lifestyle: 7.0 },
  overallScore: 8.1,

  unitEconomics: {
    studio: { roi: "8.0%", rent: "AED 48k" },
    oneBed: { roi: "7.3%", rent: "AED 68k" },
    twoBed: { roi: "6.7%", rent: "AED 92k" }
  },

  shortTermScore: 7.2,
  shortTermRental: { allowed: true, avgDailyRate: "AED 420", occupancy: "58%", tenantType: "Family Tourists" },

  futureUpgrades: [
    { name: "Community Retail Growth", status: "Under Construction" }
  ],

  priceTrend: { "2022": "AED 720k", "2023": "AED 760k", "2024": "AED 795k", "2025": "AED 820k" },

  description: "A balanced residential neighborhood with metro connections and family demand, delivering stable rents, predictable occupancy, and strong mid-market investment performance.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "14 km", mins: "16 mins" },
    school: { name: "Al Salam School", km: "2.5 km", mins: "6 mins" },
    tourist: { name: "Mushrif Park", km: "6 km", mins: "10 mins" },
    metro: { name: "Al Qusais Metro", km: "1 km", mins: "3 mins" },
    mall: { name: "Qusais Plaza", km: "2 km", mins: "5 mins" },
    business: { name: "Deira CBD", km: "9 km", mins: "12 mins" },
    hospital: { name: "NMC Specialty Hospital", km: "3 km", mins: "8 mins" }
  }
},
{
  id: "al-rashidiya",
  name: "Al Rashidiya",
  emirate: "Dubai",
  category: "Low Density",

  roi: "6.7%",
  avgPrice: "AED 900k",
  imageColor: "bg-green-700",
  amenities: ["Parks", "Metro", "Villas"],

  investorTags: ["Stable Rentals", "Low Turnover", "Family Focus"],
  aiVerdict: {
    title: "Calm Residential Node",
    summary: "A laid-back residential neighborhood with stable occupancy and limited volatility."
  },
  demandSignals: {
    rentalDemand: "Medium-High",
    resaleLiquidity: "Medium",
    tenantProfile: "Families & professionals"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 7.0, appreciation: 6.8, liquidity: 7.0, risk: 5.8, lifestyle: 7.4 },
  overallScore: 7.2,

  unitEconomics: {
    oneBed: { roi: "6.8%", rent: "AED 74k" },
    twoBed: { roi: "6.3%", rent: "AED 95k" }
  },

  shortTermScore: 6.0,
  shortTermRental: { allowed: true, avgDailyRate: "AED 380", occupancy: "55%", tenantType: "Family Tourists" },

  futureUpgrades: [
    { name: "Metro Corridor Enhancements", status: "Planned" }
  ],

  priceTrend: { "2022": "AED 820k", "2023": "AED 860k", "2024": "AED 885k", "2025": "AED 900k" },

  description: "A peaceful, low-density residential neighborhood near the airport offering steady rental demand, calm lifestyle appeal, and dependable mid-market investment performance.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "6 km", mins: "8 mins" },
    school: { name: "Rashidiya English School", km: "3 km", mins: "7 mins" },
    tourist: { name: "Dubai Dolphinarium", km: "5 km", mins: "10 mins" },
    metro: { name: "Rashidiya Metro", km: "1.5 km", mins: "3 mins" },
    mall: { name: "City Centre Deira", km: "7 km", mins: "10 mins" },
    business: { name: "Deira CBD", km: "8 km", mins: "12 mins" },
    hospital: { name: "NMC Hospital", km: "4 km", mins: "8 mins" }
  }
},
{
  id: "al-ras",
  name: "Al Ras",
  emirate: "Dubai",
  category: "Historic Commercial",

  roi: "7.3%",
  avgPrice: "AED 720k",
  imageColor: "bg-amber-700",
  amenities: ["Gold & Spice Souks", "Abra Dock", "Heritage Sites"],

  investorTags: ["Tourism Rentals", "High Footfall", "Commercial Demand"],
  aiVerdict: {
    title: "Old Dubai Income Core",
    summary: "Historic adult demand combines tourism and commerce for stable rental cash flow."
  },
  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "Medium",
    tenantProfile: "Retailers, tourists & service staff"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

  scores: { cashFlow: 8.4, appreciation: 6.2, liquidity: 7.1, risk: 6.7, lifestyle: 5.8 },
  overallScore: 7.2,

  unitEconomics: {
    studio: { roi: "8.1%", rent: "AED 50k" },
    oneBed: { roi: "7.5%", rent: "AED 66k" }
  },

  shortTermScore: 7.5,
  shortTermRental: { allowed: true, avgDailyRate: "AED 420", occupancy: "63%", tenantType: "Tourists & Traders" },

  futureUpgrades: [
    { name: "Heritage Corridor Revamp", status: "Planned" }
  ],

  priceTrend: { "2022": "AED 650k", "2023": "AED 690k", "2024": "AED 710k", "2025": "AED 720k" },

  description: "A historic commercial core blending traditional markets, tourism, and retail demand, offering steady rental occupancy and consistent footfall-driven investment returns.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "8 km", mins: "12 mins" },
    school: { name: "Al Ittihad School", km: "1.8 km", mins: "5 mins" },
    tourist: { name: "Gold & Spice Souk", km: "0.2 km", mins: "1 min" },
    metro: { name: "Al Ghubaiba Metro", km: "1 km", mins: "3 mins" },
    mall: { name: "Naif Centre", km: "1.2 km", mins: "3 mins" },
    business: { name: "Deira CBD", km: "4 km", mins: "8 mins" },
    hospital: { name: "Al Baraha Hospital", km: "3 km", mins: "7 mins" }
  }
},
{
  id: "al-rigga",
  name: "Al Rigga",
  emirate: "Dubai",
  category: "Urban Core",

  roi: "7.7%",
  avgPrice: "AED 780k",
  imageColor: "bg-red-700",
  amenities: ["Metro", "Hotels", "Retail Corridors"],

  investorTags: ["High Occupancy", "Short Term Demand", "Urban Rentals"],
  aiVerdict: {
    title: "Metro-Linked Yield Center",
    summary: "Strong rental demand driven by hospitality, commuters, and urban living."
  },
  demandSignals: {
    rentalDemand: "Very High",
    resaleLiquidity: "High",
    tenantProfile: "Tourists, professionals & urban residents"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 8.8, appreciation: 6.5, liquidity: 8.5, risk: 6.8, lifestyle: 7.0 },
  overallScore: 8.3,

  unitEconomics: {
    studio: { roi: "8.3%", rent: "AED 50k" },
    oneBed: { roi: "7.9%", rent: "AED 68k" }
  },

  shortTermScore: 8.0,
  shortTermRental: { allowed: true, avgDailyRate: "AED 460", occupancy: "68%", tenantType: "Short-Term Tourists" },

  futureUpgrades: [
    { name: "Streetscape Revitalization", status: "Planned" }
  ],

  priceTrend: { "2022": "AED 690k", "2023": "AED 730k", "2024": "AED 760k", "2025": "AED 780k" },

  description: "A high-density urban district with excellent metro access, strong short-term and long-term rental demand, and vibrant lifestyle choices that drive dependable cash-flow returns.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "6 km", mins: "10 mins" },
    school: { name: "GEMS FirstPoint School", km: "1.5 km", mins: "4 mins" },
    tourist: { name: "Al Ghurair Centre", km: "1.2 km", mins: "3 mins" },
    metro: { name: "Al Rigga Metro", km: "0.5 km", mins: "2 mins" },
    mall: { name: "Al Ghurair Centre", km: "1.2 km", mins: "3 mins" },
    business: { name: "Deira CBD", km: "2.5 km", mins: "6 mins" },
    hospital: { name: "NMC Specialty Hospital", km: "2 km", mins: "5 mins" }
  }
}


];

