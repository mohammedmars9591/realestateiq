// ==========================================================
// AJMAN DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const AJMAN_DATA = [
  // --- 1. AJMAN DOWNTOWN ---
  {
    id: "ajman-downtown",
    name: "Ajman Downtown",
    emirate: "Ajman",
    category: "High Yield / City Center",
    
    roi: "8.72%", //
    avgPrice: "AED 350k",
    imageColor: "bg-emerald-600",
    amenities: ["City Centre Ajman", "Ajman Hospital", "Safeer Mall"],

    // === INVESTOR INTELLIGENCE ===
    investorTags: ["High Cash Flow", "Capital Appreciation", "High Occupancy"],
    aiVerdict: {
      title: "Volume Leader",
      summary: "The vibrant heart of the emirate. Recorded a massive 32% increase in price per sq.ft in 2025. Offers some of the highest reliable rental yields in the UAE."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "High",
      tenantProfile: "Families & Professionals"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.5, appreciation: 8.5, liquidity: 9.0, risk: 5.5, lifestyle: 8.0 },
    overallScore: 8.9,

    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 22k" }, 
      oneBed: { roi: "8.7%", rent: "AED 32k" }, 
      twoBed: { roi: "8.2%", rent: "AED 45k" } 
    },

    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "75%", tenantType: "Business Travelers" },

    futureUpgrades: [
      { name: "City Centre Expansion", status: "Ongoing" },
      { name: "New Road Networks", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 280k", "2023": "AED 310k", "2024": "AED 350k", "2025": "AED 414k" },

    description: "The commercial and residential heart of Ajman, offering unbeatable occupancy rates and central connectivity.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "25 km", mins: "25 mins" },
      school: { name: "Ajman Academy", km: "5 km", mins: "8 mins" },
      tourist: { name: "Ajman Museum", km: "4 km", mins: "6 mins" },
      metro: { name: "Bus to Rashidiya", km: "0.5 km", mins: "5 mins" },
      mall: { name: "City Centre Ajman", km: "0.2 km", mins: "2 mins" },
      business: { name: "Free Zone", km: "6 km", mins: "10 mins" },
      hospital: { name: "Thumbay Hospital", km: "2 km", mins: "5 mins" }
    }
  },

  // --- 2. AL ZORAH ---
  {
    id: "al-zorah",
    name: "Al Zorah",
    emirate: "Ajman",
    category: "Ultra Luxury / Golf",
    roi: "6.16%", //
    avgPrice: "AED 1.1M",
    imageColor: "bg-teal-700",
    amenities: ["Oberoi Resort", "Golf Club", "Mangroves"],

    investorTags: ["Luxury Lifestyle", "Eco-Tourism", "High Appreciation"],
    aiVerdict: {
      title: "The Premium Choice",
      summary: "Ajman's most exclusive address. A nature-focused coastal destination featuring mangroves and a championship golf course. High potential for capital appreciation."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Wealthy Expats & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.0, appreciation: 9.5, liquidity: 7.5, risk: 4.5, lifestyle: 10.0 },
    overallScore: 9.2,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 55k" }, 
      oneBed: { roi: "6.5%", rent: "AED 85k" }, 
      twoBed: { roi: "6.0%", rent: "AED 130k" } 
    },

    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 800", occupancy: "70%", tenantType: "Luxury Tourists" },

    futureUpgrades: [
      { name: "Al Zorah Seaport", status: "Planned" },
      { name: "Gateway Porto", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 850k", "2023": "AED 920k", "2024": "AED 1.0M", "2025": "AED 1.1M" },

    description: "A premium coastal destination with mangroves and a championship golf course.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "30 km", mins: "35 mins" },
      school: { name: "Choueifat", km: "8 km", mins: "10 mins" },
      tourist: { name: "Golf Club", km: "0 km", mins: "0 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "China Mall", km: "10 km", mins: "12 mins" },
      business: { name: "Ajman Port", km: "10 km", mins: "15 mins" },
      hospital: { name: "Sheikh Khalifa", km: "12 km", mins: "15 mins" }
    }
  },

  // --- 3. EMIRATES CITY ---
  {
    id: "emirates-city",
    name: "Emirates City",
    emirate: "Ajman",
    category: "Budget / High Rise",
    roi: "7.85%", //
    avgPrice: "AED 370k",
    imageColor: "bg-blue-600",
    amenities: ["Easy Highway Access", "Hypermarkets", "Parks"],

    investorTags: ["Commuter Hub", "Value Buy", "Steady Yields"],
    aiVerdict: {
      title: "Budget Commuter Hub",
      summary: "Located on Sheikh Mohammed Bin Zayed Road, making it perfect for commuters to Dubai. Offers unbeatable value per square foot."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Dubai Commuters" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.5, appreciation: 6.5, liquidity: 8.0, risk: 5.8, lifestyle: 6.5 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "8.2%", rent: "AED 18k" }, 
      oneBed: { roi: "7.9%", rent: "AED 26k" }, 
      twoBed: { roi: "7.5%", rent: "AED 36k" } 
    },

    shortTermScore: 4.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95% (Long Term)", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Highway Expansion", status: "Ongoing" },
      { name: "New Community Retail", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 250k", "2023": "AED 290k", "2024": "AED 330k", "2025": "AED 372k" },

    description: "High-rise towers along the highway offering affordable living for Dubai commuters.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "15 km", mins: "15 mins" },
      school: { name: "Woodlem Park", km: "5 km", mins: "8 mins" },
      tourist: { name: "Helio Park", km: "2 km", mins: "4 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "My City Centre", km: "8 km", mins: "10 mins" },
      business: { name: "Dubai Silicon Oasis", km: "25 km", mins: "20 mins" },
      hospital: { name: "Saudi German", km: "6 km", mins: "8 mins" }
    }
  },

  // --- 4. GARDEN CITY ---
  {
    id: "garden-city",
    name: "Garden City",
    emirate: "Ajman",
    category: "High Yield / Budget",
    roi: "9.27%", //
    avgPrice: "AED 395k",
    imageColor: "bg-lime-600",
    amenities: ["Green Spaces", "Community Center", "Low Rise"],

    investorTags: ["Highest ROI", "Green Living", "Low Density"],
    aiVerdict: {
      title: "Ajman's ROI Champion",
      summary: "Ranked as the highest ROI area in Ajman for 2025. Low-rise buildings with plenty of greenery attract long-term tenants."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Medium", tenantProfile: "Families & Professionals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.8, appreciation: 6.0, liquidity: 7.5, risk: 5.5, lifestyle: 7.2 },
    overallScore: 8.5,

    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 18k" }, 
      oneBed: { roi: "9.2%", rent: "AED 25k" }, 
      twoBed: { roi: "8.8%", rent: "AED 34k" } 
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Park Expansion", status: "Ongoing" },
      { name: "New Access Roads", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 280k", "2023": "AED 320k", "2024": "AED 360k", "2025": "AED 395k" },

    description: "The 'Greenest' community in Ajman, offering the highest rental yields for apartment investors.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "12 km", mins: "15 mins" },
      school: { name: "Woodlem Park", km: "3 km", mins: "5 mins" },
      tourist: { name: "Al Jurf Park", km: "2 km", mins: "4 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "China Mall", km: "4 km", mins: "6 mins" },
      business: { name: "Jurft Industrial", km: "3 km", mins: "5 mins" },
      hospital: { name: "Thumbay", km: "3 km", mins: "5 mins" }
    }
  },

  // --- 5. AL RASHIDIYA ---
  {
    id: "al-rashidiya",
    name: "Al Rashidiya",
    emirate: "Ajman",
    category: "Family / Established",
    roi: "6.28%", //
    avgPrice: "AED 597k", //
    imageColor: "bg-amber-600",
    amenities: ["Rashidiya Park", "Fish Market", "Grand Mall"],

    investorTags: ["Most Popular", "High Liquidity", "Family Hub"],
    aiVerdict: {
      title: "Most Popular for Buyers",
      summary: "Consistently ranks as the most sought-after area for buying apartments. High liquidity and established infrastructure make it a safe bet."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Very High", tenantProfile: "Asian & Arab Expat Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 7.5, liquidity: 9.0, risk: 4.5, lifestyle: 8.2 },
    overallScore: 8.6,

    unitEconomics: { 
      studio: { roi: "6.5%", rent: "AED 22k" }, 
      oneBed: { roi: "6.2%", rent: "AED 32k" }, 
      twoBed: { roi: "6.0%", rent: "AED 45k" } 
    },

    shortTermScore: 5.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Ajman One Phase 2", status: "Planned" },
      { name: "Stadium Upgrade", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 450k", "2023": "AED 500k", "2024": "AED 550k", "2025": "AED 597k" },

    description: "Established family district with high-rise towers and excellent proximity to the beach.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "20 km", mins: "25 mins" },
      school: { name: "Indian School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Rashidiya Park", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Bus Station", km: "0.5 km", mins: "2 mins" },
      mall: { name: "Grand Mall", km: "0.5 km", mins: "2 mins" },
      business: { name: "Free Zone", km: "4 km", mins: "8 mins" },
      hospital: { name: "Aminah Hospital", km: "2 km", mins: "5 mins" }
    }
  },

  // --- 6. AL NUAIMIYA ---
  {
    id: "al-nuaimiya",
    name: "Al Nuaimiya",
    emirate: "Ajman",
    category: "High Demand / Border",
    roi: "6.19%", //
    avgPrice: "AED 393k", //
    imageColor: "bg-indigo-600",
    amenities: ["Sharjah Border", "Safeer Mall", "Schools"],

    investorTags: ["High Occupancy", "Commuter Zone", "Rising Rents"],
    aiVerdict: {
      title: "Rental Growth Hotspot",
      summary: "Rents have surged 20%+ in 2025 due to migration from Dubai/Sharjah. Extremely high occupancy due to its location on the Sharjah border."
    },
    demandSignals: { rentalDemand: "Extreme", resaleLiquidity: "High", tenantProfile: "Commuters & Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.5, appreciation: 6.5, liquidity: 9.2, risk: 5.0, lifestyle: 7.5 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "6.8%", rent: "AED 22k" }, 
      oneBed: { roi: "6.5%", rent: "AED 34k" }, 
      twoBed: { roi: "6.0%", rent: "AED 48k" } 
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98%", tenantType: "Commuters" },

    futureUpgrades: [
      { name: "Bridge to Sharjah", status: "Completed" },
      { name: "Nuaimia Two Tower", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 280k", "2023": "AED 320k", "2024": "AED 360k", "2025": "AED 393k" },

    description: "Located on the Sharjah border. High occupancy due to commuters seeking affordable rents.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "15 km", mins: "20 mins" },
      school: { name: "British Intl", km: "1 km", mins: "2 mins" },
      tourist: { name: "Ajman Corniche", km: "4 km", mins: "8 mins" },
      metro: { name: "Bus to Stadium", km: "0.5 km", mins: "5 mins" },
      mall: { name: "Safeer Mall", km: "0.5 km", mins: "2 mins" },
      business: { name: "Sharjah Ind Area", km: "2 km", mins: "5 mins" },
      hospital: { name: "Thumbay", km: "1 km", mins: "3 mins" }
    }
  },

  // --- 7. AJMAN CORNICHE ---
  {
    id: "ajman-corniche",
    name: "Ajman Corniche",
    emirate: "Ajman",
    category: "Waterfront / Tourist",
    roi: "5.43%", //
    avgPrice: "AED 595k", //
    imageColor: "bg-cyan-600",
    amenities: ["Beach Access", "5-Star Hotels", "Restaurants"],

    investorTags: ["Sea View", "Holiday Homes", "Premium"],
    aiVerdict: {
      title: "Waterfront Value",
      summary: "Offers direct sea views at a fraction of Dubai prices. Strong potential for short-term holiday rentals, though long-term yields are lower than inland areas."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Medium", tenantProfile: "Tourists & Upper Mid-Income" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.0, appreciation: 8.0, liquidity: 7.5, risk: 5.0, lifestyle: 9.0 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "5.8%", rent: "AED 35k" }, 
      oneBed: { roi: "5.5%", rent: "AED 55k" }, 
      twoBed: { roi: "5.2%", rent: "AED 80k" } 
    },

    shortTermScore: 8.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "75%", tenantType: "Beach Tourists" },

    futureUpgrades: [
      { name: "Corniche Beach Expansion", status: "Ongoing" },
      { name: "Ajman One Phase 2", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 480k", "2023": "AED 520k", "2024": "AED 560k", "2025": "AED 595k" },

    description: "Premium beachfront living with open sea views. Popular for holiday homes and luxury rentals.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "28 km", mins: "30 mins" },
      school: { name: "Bloomington", km: "4 km", mins: "8 mins" },
      tourist: { name: "Ajman Beach", km: "0.1 km", mins: "1 min" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Fairmont Souq", km: "0.5 km", mins: "2 mins" },
      business: { name: "Chamber of Commerce", km: "2 km", mins: "5 mins" },
      hospital: { name: "Aminah Hospital", km: "3 km", mins: "6 mins" }
    }
  },

  // --- 8. AL YASMEEN ---
  {
    id: "al-yasmeen",
    name: "Al Yasmeen",
    emirate: "Ajman",
    category: "Villa / Freehold",
    roi: "6.49%", //
    avgPrice: "AED 1.41M (Villa)", //
    imageColor: "bg-green-700",
    amenities: ["Al Helio Park", "Garden City", "Mosques"],

    investorTags: ["Villa Investment", "Freehold Land", "Capital Growth"],
    aiVerdict: {
      title: "Villa Growth Corridor",
      summary: "One of the fastest-growing villa communities. Popular for buying land and building custom homes. Prices per sq.ft increased by 10%+ in 2025."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Families (Owners & Tenants)" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 8.5, liquidity: 7.0, risk: 5.0, lifestyle: 8.8 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "6.5%", rent: "AED 60k" } // Villa
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Al Ameera Village Phase 3", status: "Sales Launch" },
      { name: "New Community Roads", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 1.1M", "2023": "AED 1.2M", "2024": "AED 1.3M", "2025": "AED 1.41M" },

    description: "Rapidly growing freehold villa community. Popular with investors seeking land or ready homes.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "10 km", mins: "12 mins" },
      school: { name: "Choueifat", km: "5 km", mins: "8 mins" },
      tourist: { name: "Al Tallah Camel Race", km: "4 km", mins: "6 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Festival Land", km: "3 km", mins: "5 mins" },
      business: { name: "Ajman Uptown", km: "2 km", mins: "4 mins" },
      hospital: { name: "Saudi German", km: "5 km", mins: "8 mins" }
    }
  },

  // --- 9. AL RAWDA ---
  {
    id: "al-rawda",
    name: "Al Rawda",
    emirate: "Ajman",
    category: "Residential / Value",
    roi: "4.54%", //
    avgPrice: "AED 2.3M (Villa)", //
    imageColor: "bg-orange-600",
    amenities: ["Restaurants", "Schools", "Family Parks"],

    investorTags: ["Spacious Living", "Established", "Stable"],
    aiVerdict: {
      title: "Established Villa District",
      summary: "Known for large, high-end villas. While ROI is lower (4.5%), it offers stability and capital preservation for high-net-worth investors."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Medium", tenantProfile: "Large Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 5.0, appreciation: 7.2, liquidity: 6.0, risk: 4.5, lifestyle: 7.8 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "4.5%", rent: "AED 110k" } // Villa Rent
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Infrastructure Upgrade", status: "Ongoing" },
      { name: "New Retail Strips", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.8M", "2023": "AED 2.0M", "2024": "AED 2.15M", "2025": "AED 2.3M" },

    description: "A densely populated area offering spacious villas and a vibrant street life.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "20 km", mins: "25 mins" },
      school: { name: "Oxford School", km: "1 km", mins: "2 mins" },
      tourist: { name: "Talllah Camel Race", km: "3 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Safeer Mall", km: "3 km", mins: "5 mins" },
      business: { name: "Ajman Ind", km: "2 km", mins: "4 mins" },
      hospital: { name: "Ajman Medical", km: "2 km", mins: "4 mins" }
    }
  },

  // --- 10. AL JURF ---
  {
    id: "al-jurf",
    name: "Al Jurf",
    emirate: "Ajman",
    category: "Commercial / Residential",
    roi: "7.5%",
    avgPrice: "AED 420k",
    imageColor: "bg-slate-600",
    amenities: ["China Mall", "Ajman University", "Court House"],

    investorTags: ["Mixed Use", "Student Demand", "Commercial"],
    aiVerdict: {
      title: "Commercial & Student Hub",
      summary: "Strategic hub housing the China Mall and Ajman University. Strong rental demand from students and traders ensures consistent occupancy."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Students & Traders" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.0, appreciation: 6.8, liquidity: 7.5, risk: 5.2, lifestyle: 7.0 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 20k" }, 
      oneBed: { roi: "7.5%", rent: "AED 28k" }, 
      twoBed: { roi: "7.0%", rent: "AED 38k" } 
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Students" },

    futureUpgrades: [
      { name: "China Mall Expansion", status: "Ongoing" },
      { name: "University Housing", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 350k", "2023": "AED 380k", "2024": "AED 400k", "2025": "AED 420k" },

    description: "Strategic hub housing the China Mall and Ajman University. Strong demand from students and traders.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "15 km", mins: "18 mins" },
      school: { name: "Ajman University", km: "1 km", mins: "2 mins" },
      tourist: { name: "China Mall", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "China Mall", km: "0.5 km", mins: "1 min" },
      business: { name: "Industrial Area", km: "1 km", mins: "2 mins" },
      hospital: { name: "Sheikh Khalifa", km: "2 km", mins: "4 mins" }
    }
  }
];