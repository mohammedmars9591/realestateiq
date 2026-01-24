// ==========================================================
// UMM AL QUWAIN DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const UAQ_DATA = [
  // --- 1. SOBHA SINIYA ISLAND ---
  {
    id: "sobha-siniya",
    name: "Sobha Siniya Island",
    emirate: "Umm Al Quwain",
    category: "Ultra Luxury / Island",
    
    roi: "8.5%", // Projected based on pre-launch demand
    avgPrice: "AED 1.2M", //
    imageColor: "bg-teal-800",
    amenities: ["18-Hole Golf Course", "Mangrove Forests", "Yacht Club"],

    // === INVESTOR INTELLIGENCE ===
    investorTags: ["First Mover Advantage", "Capital Appreciation", "Eco-Luxury"],
    aiVerdict: {
      title: "The 'Pearl' of the Northern Emirates",
      summary: "UAQ's game-changer project. A massive luxury island masterplan by Sobha Realty. Investors are buying for significant capital appreciation as infrastructure develops."
    },
    demandSignals: {
      rentalDemand: "High (Future)",
      resaleLiquidity: "Very High",
      tenantProfile: "Luxury Tourists & Nature Lovers"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.0, appreciation: 10.0, liquidity: 8.5, risk: 4.5, lifestyle: 9.8 },
    overallScore: 9.4,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "8.0% (Proj)", rent: "AED 85k (Proj)" }, 
      twoBed: { roi: "7.5% (Proj)", rent: "AED 120k (Proj)" } 
    },

    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "80% (Proj)", tenantType: "Eco-Tourists" },

    futureUpgrades: [
      { name: "Bridge Connection", status: "Under Construction" },
      { name: "Luxury Resorts", status: "Planned" }
    ],

    priceTrend: { "2022": "N/A", "2023": "N/A", "2024": "AED 1.1M", "2025": "AED 1.25M" },

    description: "The 'Palm Jumeirah' of UAQ. Massive luxury masterplan featuring bridge-connected island living and protected mangroves.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "35 km", mins: "30 mins" },
      school: { name: "The International School", km: "10 km", mins: "12 mins" },
      tourist: { name: "Mangrove Beach", km: "0 km", mins: "0 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Mall of UAQ", km: "8 km", mins: "10 mins" },
      business: { name: "UAQ Free Trade Zone", km: "10 km", mins: "12 mins" },
      hospital: { name: "Sheikh Khalifa", km: "12 km", mins: "15 mins" }
    }
  },

  // --- 2. UMM AL QUWAIN MARINA (MISTRAL) ---
  {
    id: "uaq-marina",
    name: "UAQ Marina (Mistral)",
    emirate: "Umm Al Quwain",
    category: "Waterfront / Villa",
    roi: "7.2%", //
    avgPrice: "AED 2.2M (Villa)", //
    imageColor: "bg-blue-700",
    amenities: ["Mistral Villas", "Marina Promenade", "Gated Security"],

    investorTags: ["Established", "Family Villas", "Waterfront"],
    aiVerdict: {
      title: "Established Waterfront Value",
      summary: "A fully developed community by Emaar. Offers spacious Spanish-style villas at prices 50% lower than Dubai. High occupancy and stable rental yields."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Families & Commuters" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.2, appreciation: 6.5, liquidity: 7.0, risk: 5.0, lifestyle: 8.5 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "7.2%", rent: "AED 65k" } // Villa/Townhouse
    },

    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "60%", tenantType: "Families" },

    futureUpgrades: [
      { name: "Retail Expansion", status: "Proposed" },
      { name: "Hotel Development", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.8M", "2023": "AED 2.0M", "2024": "AED 2.1M", "2025": "AED 2.25M" },

    description: "Established waterfront community offering spacious Spanish-style villas at very competitive prices.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "30 km", mins: "25 mins" },
      school: { name: "Choueifat", km: "5 km", mins: "8 mins" },
      tourist: { name: "UAQ Marine Club", km: "2 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Mall of UAQ", km: "5 km", mins: "8 mins" },
      business: { name: "UAQ City", km: "5 km", mins: "8 mins" },
      hospital: { name: "Sheikh Khalifa", km: "6 km", mins: "8 mins" }
    }
  },

  // --- 3. AL SALAMA ---
  {
    id: "al-salama",
    name: "Al Salama",
    emirate: "Umm Al Quwain",
    category: "Family / Commuter",
    roi: "8.5%", //
    avgPrice: "AED 1.8M (Villa)",
    imageColor: "bg-orange-600",
    amenities: ["Easy Highway Access", "Parks", "Schools"],

    investorTags: ["High Occupancy", "Commuter Hub", "Steady Income"],
    aiVerdict: {
      title: "The Commuter's Favorite",
      summary: "Located on Ittihad Road, making it the top choice for commuters working in Sharjah and Dubai. consistently high rental demand for affordable apartments."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Commuters & Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.5, appreciation: 7.0, liquidity: 8.0, risk: 5.2, lifestyle: 7.5 },
    overallScore: 8.3,

    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 16k" }, //
      oneBed: { roi: "8.5%", rent: "AED 21k" }, //
      twoBed: { roi: "8.0%", rent: "AED 29k" }  //
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95% (Long Term)", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Road Improvements", status: "Ongoing" },
      { name: "New Schools", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.5M", "2023": "AED 1.65M", "2024": "AED 1.75M", "2025": "AED 1.85M" },

    description: "The most popular residential area for commuters working in Sharjah and Dubai due to its highway access.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "20 km", mins: "18 mins" },
      school: { name: "New Indian School", km: "2 km", mins: "3 mins" },
      tourist: { name: "Dreamland Aqua Park", km: "10 km", mins: "12 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Mall", km: "2 km", mins: "3 mins" },
      business: { name: "Sharjah Border", km: "15 km", mins: "15 mins" },
      hospital: { name: "Sheikh Khalifa", km: "3 km", mins: "5 mins" }
    }
  },

  // --- 4. EMIRATES MODERN INDUSTRIAL ---
  {
    id: "emirates-industrial",
    name: "Emirates Modern Ind.",
    emirate: "Umm Al Quwain",
    category: "Industrial / High Yield",
    roi: "9.5%", //
    avgPrice: "AED 450k (Plot)",
    imageColor: "bg-slate-700",
    amenities: ["Warehouses", "Staff Accom", "Logistics Hub"],

    investorTags: ["Industrial", "Highest Yields", "B2B"],
    aiVerdict: {
      title: "High-Yield Industrial",
      summary: "A powerhouse for investors seeking high returns (9%+) through warehouses and labor accommodation. Benefiting from UAQ's pro-business Free Trade Zone policies."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Companies & Labor" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.8, appreciation: 6.0, liquidity: 7.0, risk: 6.0, lifestyle: 4.0 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "10.0%", rent: "AED 18k" }, 
      oneBed: { roi: "9.2%", rent: "AED 26k" }, 
      twoBed: { roi: "8.8%", rent: "AED 36k" }
    },

    shortTermScore: 1.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98% (Long Term)", tenantType: "Staff" },

    futureUpgrades: [
      { name: "Logistics Hub Expansion", status: "Planned" },
      { name: "Road Network Upgrade", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 380k", "2023": "AED 400k", "2024": "AED 420k", "2025": "AED 450k" },

    description: "Ideal for high-yield investors. Building labor accommodation or warehouses yields 9%+ net returns.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "25 km", mins: "20 mins" },
      school: { name: "N/A", km: "N/A", mins: "N/A" },
      tourist: { name: "N/A", km: "N/A", mins: "N/A" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "N/A", km: "N/A", mins: "N/A" },
      business: { name: "Industrial Zone", km: "0 km", mins: "0 mins" },
      hospital: { name: "Sheikh Khalifa", km: "8 km", mins: "10 mins" }
    }
  },

  // --- 5. AL MAQTAA ---
  {
    id: "al-maqtaa",
    name: "Al Maqtaa",
    emirate: "Umm Al Quwain",
    category: "Budget / Residential",
    roi: "7.8%", //
    avgPrice: "AED 350k",
    imageColor: "bg-amber-600",
    amenities: ["Local Markets", "Mosques", "Affordable Dining"],

    investorTags: ["Low Entry Price", "Stable Rents", "Budget"],
    aiVerdict: {
      title: "Budget Living Hub",
      summary: "Offers some of the lowest rents in the UAE, ensuring consistently high occupancy from budget-conscious residents. Very low entry price for investors."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Medium", tenantProfile: "Low-Mid Income Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.2, appreciation: 5.5, liquidity: 7.5, risk: 5.5, lifestyle: 6.5 },
    overallScore: 7.5,

    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 18k" }, 
      oneBed: { roi: "8.0%", rent: "AED 25k" }, 
      twoBed: { roi: "7.5%", rent: "AED 32k" } //
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Public Park Renovation", status: "Planned" },
      { name: "Street Lighting", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 300k", "2023": "AED 320k", "2024": "AED 340k", "2025": "AED 350k" },

    description: "Quiet residential area offering some of the lowest rents in the UAE. High occupancy rate.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "25 km", mins: "22 mins" },
      school: { name: "Local Schools", km: "2 km", mins: "3 mins" },
      tourist: { name: "UAQ National Museum", km: "4 km", mins: "6 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Lulu Center", km: "2 km", mins: "3 mins" },
      business: { name: "UAQ City", km: "3 km", mins: "5 mins" },
      hospital: { name: "UAQ Hospital", km: "2 km", mins: "4 mins" }
    }
  },

  // --- 6. AL RAMLAH ---
  {
    id: "al-ramlah",
    name: "Al Ramlah",
    emirate: "Umm Al Quwain",
    category: "Emerging / Villa",
    roi: "7.0%", //
    avgPrice: "AED 1.65M (Villa)", //
    imageColor: "bg-green-600",
    amenities: ["New Infrastructure", "Spacious Plots", "Quiet"],

    investorTags: ["Growth Area", "Villa Investment", "Family"],
    aiVerdict: {
      title: "Rising Villa District",
      summary: "Fast-developing area with new infrastructure. Price per sqft has jumped 21% in 12 months as families seek affordable standalone homes."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 8.5, liquidity: 6.5, risk: 5.0, lifestyle: 7.8 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 17k" }, 
      oneBed: { roi: "7.2%", rent: "AED 25k" }, 
      twoBed: { roi: "7.0%", rent: "AED 27k" } //
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "90%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "New Community Roads", status: "Ongoing" },
      { name: "Retail Center", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 1.3M", "2023": "AED 1.45M", "2024": "AED 1.55M", "2025": "AED 1.65M" },

    description: "Fast-developing area with new roads and infrastructure. Popular for affordable, spacious villas.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "20 km", mins: "18 mins" },
      school: { name: "Elite American", km: "3 km", mins: "5 mins" },
      tourist: { name: "UAQ Corniche", km: "5 km", mins: "8 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Mall of UAQ", km: "3 km", mins: "5 mins" },
      business: { name: "Govt Offices", km: "2 km", mins: "4 mins" },
      hospital: { name: "Sheikh Khalifa", km: "4 km", mins: "6 mins" }
    }
  },

  // --- 7. AL RAUDAH ---
  {
    id: "al-raudah",
    name: "Al Raudah",
    emirate: "Umm Al Quwain",
    category: "Coastal / Luxury",
    roi: "6.8%",
    avgPrice: "AED 750k",
    imageColor: "bg-cyan-600",
    amenities: ["AYA by Deyaar", "Beach Access", "Resorts"],

    investorTags: ["Beachfront", "New Projects", "Appreciation"],
    aiVerdict: {
      title: "Affordable Coastal Luxury",
      summary: "Home to new projects like AYA by Deyaar. A rising star for affordable beachfront living with strong capital appreciation potential."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Medium", tenantProfile: "Tourists & Expats" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 8.8, liquidity: 7.0, risk: 5.2, lifestyle: 9.0 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 28k" }, 
      oneBed: { roi: "6.8%", rent: "AED 40k" }, 
      twoBed: { roi: "6.2%", rent: "AED 60k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 400", occupancy: "65%", tenantType: "Beach Tourists" },

    futureUpgrades: [
      { name: "AYA Residence Completion", status: "2027" },
      { name: "Promenade Expansion", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 600k", "2023": "AED 650k", "2024": "AED 700k", "2025": "AED 750k" },

    description: "Home to new premium projects like AYA by Deyaar. A rising star for affordable beachfront living.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "30 km", mins: "25 mins" },
      school: { name: "The English School", km: "4 km", mins: "6 mins" },
      tourist: { name: "Kite Beach Center", km: "1 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "China Mall", km: "8 km", mins: "10 mins" },
      business: { name: "UAQ City", km: "5 km", mins: "8 mins" },
      hospital: { name: "Sheikh Khalifa", km: "6 km", mins: "8 mins" }
    }
  },

  // --- 8. AL ABRAQ ---
  {
    id: "al-abraq",
    name: "Al Abraq",
    emirate: "Umm Al Quwain",
    category: "Villa / Spacious",
    roi: "6.5%",
    avgPrice: "AED 1.15M (Villa)", //
    imageColor: "bg-lime-700",
    amenities: ["Large Plots", "Family Privacy", "Local Vibe"],

    investorTags: ["Large Villas", "Local Families", "Stable"],
    aiVerdict: {
      title: "Traditional Family Living",
      summary: "Known for large, independent villas on generous plots. Popular with local families and long-term residents seeking privacy."
    },
    demandSignals: { rentalDemand: "Steady", resaleLiquidity: "Medium", tenantProfile: "Local Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 7.0, liquidity: 6.0, risk: 4.5, lifestyle: 8.0 },
    overallScore: 7.6,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 28k" }, 
      twoBed: { roi: "6.8%", rent: "AED 42k" } 
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "90%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "New Park", status: "Planned" },
      { name: "Road Maintenance", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 950k", "2023": "AED 1.0M", "2024": "AED 1.1M", "2025": "AED 1.15M" },

    description: "Known for large, independent villas. Popular with local families and long-term residents.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "22 km", mins: "20 mins" },
      school: { name: "UAQ High School", km: "2 km", mins: "3 mins" },
      tourist: { name: "National Museum", km: "3 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Lulu Center", km: "2 km", mins: "3 mins" },
      business: { name: "Federal Courts", km: "1 km", mins: "2 mins" },
      hospital: { name: "UAQ Hospital", km: "2 km", mins: "3 mins" }
    }
  },

  // --- 9. UAQ CITY CENTRE (OLD TOWN) ---
  {
    id: "uaq-city-centre",
    name: "UAQ City Centre",
    emirate: "Umm Al Quwain",
    category: "Budget / Central",
    roi: "8.8%",
    avgPrice: "AED 300k",
    imageColor: "bg-red-700",
    amenities: ["Souq", "Banks", "Corniche Access"],

    investorTags: ["High Yield", "Commercial Hub", "Budget"],
    aiVerdict: {
      title: "The Commercial Heart",
      summary: "The historic and commercial center. Offers the cheapest apartments in the emirate with high rental demand from workers and small business owners."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Workers & Small Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.0, appreciation: 5.0, liquidity: 8.5, risk: 5.0, lifestyle: 6.5 },
    overallScore: 7.7,

    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 16k" }, 
      oneBed: { roi: "9.0%", rent: "AED 24k" }, 
      twoBed: { roi: "8.2%", rent: "AED 34k" } 
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Souq Renovation", status: "Ongoing" },
      { name: "Urban Regeneration", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 250k", "2023": "AED 270k", "2024": "AED 290k", "2025": "AED 300k" },

    description: "The historic commercial center. Offers the cheapest apartments with high tenant demand.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "25 km", mins: "25 mins" },
      school: { name: "Local Schools", km: "1 km", mins: "2 mins" },
      tourist: { name: "Old Souq", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Mall", km: "1 km", mins: "2 mins" },
      business: { name: "Banks Street", km: "0.1 km", mins: "1 min" },
      hospital: { name: "UAQ Hospital", km: "1 km", mins: "2 mins" }
    }
  },

  // --- 10. AL HADITHA ---
  {
    id: "al-haditha",
    name: "Al Haditha",
    emirate: "Umm Al Quwain",
    category: "Residential / Quiet",
    roi: "6.8%",
    avgPrice: "AED 800k",
    imageColor: "bg-emerald-600",
    amenities: ["Parks", "Wide Streets", "Villas"],

    investorTags: ["Quiet Living", "Family Area", "Stable"],
    aiVerdict: {
      title: "Quiet Suburban Living",
      summary: "A purely residential district with wide streets and parks. Ideal for families looking for affordable, standalone homes away from the city bustle."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Medium", tenantProfile: "Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.8, appreciation: 6.5, liquidity: 6.0, risk: 4.8, lifestyle: 7.5 },
    overallScore: 7.4,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "7.2%", rent: "AED 26k" }, 
      twoBed: { roi: "6.8%", rent: "AED 38k" } 
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "90%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Park Upgrade", status: "Complete" },
      { name: "New Mosque", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 700k", "2023": "AED 750k", "2024": "AED 780k", "2025": "AED 800k" },

    description: "A quiet, purely residential district. Ideal for families looking for affordable standalone homes.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "25 km", mins: "22 mins" },
      school: { name: "New Indian School", km: "3 km", mins: "5 mins" },
      tourist: { name: "Mango Garden", km: "2 km", mins: "3 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Lulu Center", km: "3 km", mins: "5 mins" },
      business: { name: "Govt Offices", km: "3 km", mins: "5 mins" },
      hospital: { name: "Sheikh Khalifa", km: "4 km", mins: "6 mins" }
    }
  }
];