// ==========================================================
// RAS AL KHAIMAH DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const RAK_DATA = [
  // --- 1. AL MARJAN ISLAND ---
  {
    id: "al-marjan-island",
    name: "Al Marjan Island",
    emirate: "Ras Al Khaimah",
    category: "Luxury / Casino",
    
    roi: "6.0%", // Yields compressing as prices spike
    avgPrice: "AED 2.2M", // Surged due to Wynn
    imageColor: "bg-purple-600",
    amenities: ["Wynn Casino", "Private Beaches", "5-Star Hotels"],

    // === INVESTOR INTELLIGENCE ===
    investorTags: ["Casino Jackpot", "Capital Appreciation", "Trophy Asset"],
    aiVerdict: {
      title: "The 'Vegas' of the Middle East",
      summary: "Home to the upcoming Wynn Resort (2027). Property prices have jumped 20%+ in 12 months. Investors are buying for massive capital growth rather than immediate yield."
    },
    demandSignals: {
      rentalDemand: "Very High (Future)",
      resaleLiquidity: "Extreme",
      tenantProfile: "Luxury Tourists & Gamblers"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 10.0, liquidity: 9.5, risk: 6.0, lifestyle: 9.8 },
    overallScore: 9.6,

    unitEconomics: { 
      studio: { roi: "6.5%", rent: "AED 55k" }, 
      oneBed: { roi: "6.0%", rent: "AED 85k" }, 
      twoBed: { roi: "5.5%", rent: "AED 130k" } 
    },

    shortTermScore: 9.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1200", occupancy: "85% (Proj)", tenantType: "Casino Tourists" },

    futureUpgrades: [
      { name: "Wynn Al Marjan Resort", status: "Opening 2027" },
      { name: "Rove Al Marjan Beach", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 1.2M", "2023": "AED 1.6M", "2024": "AED 2.0M", "2025": "AED 2.25M" },

    description: "The #1 investment hotspot in the UAE, driven by the region's first integrated gaming resort.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "30 km", mins: "25 mins" },
      school: { name: "RAK Academy", km: "10 km", mins: "12 mins" },
      tourist: { name: "Wynn Resort", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Al Hamra Mall", km: "5 km", mins: "6 mins" },
      business: { name: "RAK Central", km: "8 km", mins: "10 mins" },
      hospital: { name: "RAK Hospital", km: "25 km", mins: "25 mins" }
    }
  },

  // --- 2. YASMIN VILLAGE ---
  {
    id: "yasmin-village",
    name: "Yasmin Village",
    emirate: "Ras Al Khaimah",
    category: "High Yield / Budget",
    roi: "11.8%", // Highest in RAK
    avgPrice: "AED 350k",
    imageColor: "bg-orange-600",
    amenities: ["Mountain Views", "Hiking Trails", "Community Lake"],

    investorTags: ["Highest Yields", "Cash Flow King", "Low Entry"],
    aiVerdict: {
      title: "RAK's ROI Champion",
      summary: "Consistently delivers the highest rental yields in the emirate (near 12%). Ideal for pure cash-flow investors who want low entry prices."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Nature Lovers & Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 10.0, appreciation: 5.5, liquidity: 7.0, risk: 6.0, lifestyle: 7.0 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "12.0%", rent: "AED 30k" }, 
      oneBed: { roi: "11.5%", rent: "AED 45k" }, 
      twoBed: { roi: "10.0%", rent: "AED 60k" } 
    },

    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "60%", tenantType: "Hikers" },

    futureUpgrades: [
      { name: "Ring Road Connection", status: "Complete" },
      { name: "Community Retail", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 220k", "2023": "AED 250k", "2024": "AED 290k", "2025": "AED 350k" },

    description: "A tranquil community nestled in the mountains, offering the highest rental yields in RAK.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "15 km", mins: "15 mins" },
      school: { name: "Scholars", km: "5 km", mins: "8 mins" },
      tourist: { name: "Dhayah Fort", km: "15 km", mins: "20 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Manar Mall", km: "10 km", mins: "12 mins" },
      business: { name: "RAK City", km: "10 km", mins: "12 mins" },
      hospital: { name: "Saqr Hospital", km: "8 km", mins: "10 mins" }
    }
  },

  // --- 3. AL HAMRA VILLAGE ---
  {
    id: "al-hamra-village",
    name: "Al Hamra Village",
    emirate: "Ras Al Khaimah",
    category: "Golf / Marina",
    roi: "7.2%", //
    avgPrice: "AED 950k",
    imageColor: "bg-emerald-600",
    amenities: ["Championship Golf", "Marina", "Al Hamra Mall"],

    investorTags: ["Golf Estate", "Established", "Expat Hub"],
    aiVerdict: {
      title: "The Established Choice",
      summary: "A fully matured gated community. Villa prices jumped 42% last year. Offers a stable, high-quality tenant base of Western expats."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Western Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 8.0, liquidity: 8.0, risk: 5.0, lifestyle: 8.5 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 38k" }, 
      oneBed: { roi: "7.5%", rent: "AED 55k" }, 
      twoBed: { roi: "7.0%", rent: "AED 85k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "70%", tenantType: "Golfers & Families" },

    futureUpgrades: [
      { name: "Falcon Island Handover", status: "Ongoing" },
      { name: "Golf Club Renovation", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 600k", "2023": "AED 750k", "2024": "AED 850k", "2025": "AED 950k" },

    description: "Established expat community with championship golf course and marina. High capital growth in villas.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "35 km", mins: "30 mins" },
      school: { name: "RAK Academy", km: "2 km", mins: "5 mins" },
      tourist: { name: "Al Marjan Island", km: "5 km", mins: "6 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Al Hamra Mall", km: "0.5 km", mins: "2 mins" },
      business: { name: "RAK Free Zone", km: "10 km", mins: "12 mins" },
      hospital: { name: "Sheikh Khalifa", km: "15 km", mins: "18 mins" }
    }
  },

  // --- 4. MINA AL ARAB ---
  {
    id: "mina-al-arab",
    name: "Mina Al Arab",
    emirate: "Ras Al Khaimah",
    category: "Eco-Luxury / Resort",
    roi: "6.5%",
    avgPrice: "AED 1.2M",
    imageColor: "bg-teal-600",
    amenities: ["Maldives-style Villas", "Anantara Resort", "Mangroves"],

    investorTags: ["Eco-Luxury", "Waterfront", "Premium"],
    aiVerdict: {
      title: "Nature-First Luxury",
      summary: "Famous for its Anantara overwater villas and protected wetlands. Appeals to high-net-worth individuals seeking privacy and nature."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Eco-conscious Wealthy" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 8.5, liquidity: 7.5, risk: 5.0, lifestyle: 9.2 },
    overallScore: 8.8,

    unitEconomics: { 
      studio: { roi: "6.5%", rent: "AED 40k" }, 
      oneBed: { roi: "6.0%", rent: "AED 65k" }, 
      twoBed: { roi: "5.5%", rent: "AED 95k" } 
    },

    shortTermScore: 8.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "65%", tenantType: "Luxury Retreats" },

    futureUpgrades: [
      { name: "InterContinental Resort", status: "Operational" },
      { name: "Lagoon Walk Expansion", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 900k", "2023": "AED 1.0M", "2024": "AED 1.1M", "2025": "AED 1.2M" },

    description: "Eco-luxury living featuring Anantara resort and protected wetlands. High demand for waterfront villas.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "25 km", mins: "22 mins" },
      school: { name: "St. Mary's School", km: "10 km", mins: "12 mins" },
      tourist: { name: "Nikki Beach", km: "5 km", mins: "8 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "My City Centre", km: "8 km", mins: "10 mins" },
      business: { name: "RAK City", km: "20 km", mins: "25 mins" },
      hospital: { name: "RAK Hospital", km: "20 km", mins: "25 mins" }
    }
  },

  // --- 5. RAK CENTRAL ---
  {
    id: "rak-central",
    name: "RAK Central",
    emirate: "Ras Al Khaimah",
    category: "Future CBD",
    roi: "8.0%", // Projected
    avgPrice: "AED 800k (Off-plan)",
    imageColor: "bg-indigo-700",
    amenities: ["Business Hub", "High-Rise Living", "Retail Plaza"],

    investorTags: ["Early Bird", "Commercial Hub", "Off-Plan"],
    aiVerdict: {
      title: "The Future Downtown",
      summary: "RAK's new master-planned CBD. Buying here is a play on the future commercial growth of the emirate as companies set up HQs."
    },
    demandSignals: { rentalDemand: "Growing (Future)", resaleLiquidity: "Medium", tenantProfile: "White Collar Workers" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.5, appreciation: 9.0, liquidity: 7.0, risk: 6.0, lifestyle: 8.0 },
    overallScore: 8.3,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "8.2% (Proj)", rent: "AED 60k" }, 
      twoBed: { roi: "7.8% (Proj)", rent: "AED 90k" } 
    },

    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Business Travelers" },

    futureUpgrades: [
      { name: "Grade-A Offices", status: "Under Construction" },
      { name: "Central Park", status: "Planned" }
    ],

    priceTrend: { "2022": "N/A", "2023": "AED 650k", "2024": "AED 750k", "2025": "AED 800k" },

    description: "The upcoming Central Business District of RAK. Massive growth potential for early off-plan investors.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "15 km", mins: "15 mins" },
      school: { name: "St. Mary's", km: "8 km", mins: "10 mins" },
      tourist: { name: "Al Marjan Island", km: "10 km", mins: "12 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Al Hamra Mall", km: "5 km", mins: "6 mins" },
      business: { name: "RAK Central", km: "0 km", mins: "0 mins" },
      hospital: { name: "Sheikh Khalifa", km: "10 km", mins: "12 mins" }
    }
  },

  // --- 6. HAYAT ISLAND ---
  {
    id: "hayat-island",
    name: "Hayat Island",
    emirate: "Ras Al Khaimah",
    category: "Resort Living",
    roi: "7.5%",
    avgPrice: "AED 1.1M",
    imageColor: "bg-cyan-500",
    amenities: ["Angel Bay", "Beach Club", "InterContinental"],

    investorTags: ["Social Hub", "Nightlife", "Beach"],
    aiVerdict: {
      title: "The Social Heart of Mina Al Arab",
      summary: "Designed as the energetic social hub with beach clubs and nightlife. Attracts a younger, trendier demographic than the mainland."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "Young Couples & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 8.0, liquidity: 7.5, risk: 5.5, lifestyle: 9.0 },
    overallScore: 8.5,

    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 45k" }, 
      oneBed: { roi: "7.5%", rent: "AED 70k" }, 
      twoBed: { roi: "7.0%", rent: "AED 105k" } 
    },

    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 550", occupancy: "72%", tenantType: "Weekend Visitors" },

    futureUpgrades: [
      { name: "Angel Bay Club", status: "Operational" },
      { name: "New Retail Strip", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 850k", "2023": "AED 950k", "2024": "AED 1.05M", "2025": "AED 1.1M" },

    description: "The 'social hub' of Mina Al Arab. Offers resort-style apartments with direct beach access.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "25 km", mins: "22 mins" },
      school: { name: "British School", km: "12 km", mins: "15 mins" },
      tourist: { name: "Jebel Jais", km: "50 km", mins: "50 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Lagoon Walk", km: "0.1 km", mins: "1 min" },
      business: { name: "RAK Central", km: "15 km", mins: "18 mins" },
      hospital: { name: "Al Zahra", km: "15 km", mins: "18 mins" }
    }
  },

  // --- 7. JULPHAR TOWERS ---
  {
    id: "julphar-towers",
    name: "Julphar Towers",
    emirate: "Ras Al Khaimah",
    category: "Business / Views",
    roi: "7.0%",
    avgPrice: "AED 600k",
    imageColor: "bg-blue-800",
    amenities: ["Mangrove Views", "City Centre", "Offices"],

    investorTags: ["City Living", "Affordable", "Views"],
    aiVerdict: {
      title: "Iconic City Living",
      summary: "The twin towers are a RAK landmark. Good for investors seeking city center convenience and stable long-term tenants."
    },
    demandSignals: { rentalDemand: "Steady", resaleLiquidity: "Medium", tenantProfile: "City Professionals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.5, appreciation: 6.0, liquidity: 8.0, risk: 5.0, lifestyle: 6.5 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 32k" }, 
      oneBed: { roi: "7.0%", rent: "AED 48k" }, 
      twoBed: { roi: "6.5%", rent: "AED 72k" } 
    },

    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "60%", tenantType: "Business Travelers" },

    futureUpgrades: [
      { name: "Lobby Renovation", status: "Complete" },
      { name: "Creek Corniche", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 450k", "2023": "AED 500k", "2024": "AED 550k", "2025": "AED 600k" },

    description: "Iconic twin towers in RAK City offering stunning mangrove views and affordable entry prices.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "20 km", mins: "18 mins" },
      school: { name: "Indian Public School", km: "3 km", mins: "5 mins" },
      tourist: { name: "Corniche", km: "2 km", mins: "4 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Manar Mall", km: "1 km", mins: "3 mins" },
      business: { name: "Govt Offices", km: "0.5 km", mins: "2 mins" },
      hospital: { name: "RAK Hospital", km: "5 km", mins: "8 mins" }
    }
  },

  // --- 8. AL RAMS ---
  {
    id: "al-rams",
    name: "Al Rams",
    emirate: "Ras Al Khaimah",
    category: "Budget / Heritage",
    roi: "6.5%",
    avgPrice: "AED 1.1M (Villa)",
    imageColor: "bg-amber-700",
    amenities: ["Corniche", "Dhayah Fort", "Traditional Souq"],

    investorTags: ["Heritage", "Local Market", "Spacious"],
    aiVerdict: {
      title: "Authentic RAK",
      summary: "Historic area known for pearl diving. Best for investors targeting local families who want large, traditional villas."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Low", tenantProfile: "Local Families" },
    ownership: { type: "Restricted", eligibleFor: ["UAE/GCC mostly"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 5.5, liquidity: 6.5, risk: 5.5, lifestyle: 6.0 },
    overallScore: 7.4,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 35k" }, 
      twoBed: { roi: "6.8%", rent: "AED 50k" } 
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Corniche Development", status: "Ongoing" },
      { name: "Heritage Village", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 900k", "2023": "AED 950k", "2024": "AED 1.0M", "2025": "AED 1.1M" },

    description: "Historic area known for pearl diving heritage. Offers spacious traditional villas at low prices.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "25 km", mins: "25 mins" },
      school: { name: "Rams School", km: "1 km", mins: "2 mins" },
      tourist: { name: "Dhayah Fort", km: "3 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Naeem Mall", km: "10 km", mins: "15 mins" },
      business: { name: "Maritime City", km: "15 km", mins: "20 mins" },
      hospital: { name: "Ibrahim Obaidullah", km: "12 km", mins: "15 mins" }
    }
  },

  // --- 9. AL GHAIL ---
  {
    id: "al-ghail",
    name: "Al Ghail",
    emirate: "Ras Al Khaimah",
    category: "Industrial / Staff",
    roi: "9.5%",
    avgPrice: "AED 300k (Plot)",
    imageColor: "bg-slate-700",
    amenities: ["Industrial Zone", "Staff Accommodation", "Logistics"],

    investorTags: ["Industrial", "B2B", "High Yield"],
    aiVerdict: {
      title: "Logistics Hub",
      summary: "Purely a B2B investment play. High demand for warehouses and staff accommodation due to growing industrial activity."
    },
    demandSignals: { rentalDemand: "High (Commercial)", resaleLiquidity: "Low", tenantProfile: "Companies" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 10.0, appreciation: 5.0, liquidity: 6.0, risk: 6.5, lifestyle: 4.0 },
    overallScore: 7.2,

    unitEconomics: { 
      studio: { roi: "10.0%", rent: "AED 20k" }, 
      oneBed: { roi: "9.2%", rent: "AED 30k" }, 
      twoBed: { roi: "N/A", rent: "N/A" } 
    },

    shortTermScore: 1.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Etihad Rail Connection", status: "Under Construction" },
      { name: "Power Grid Upgrade", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 200k", "2023": "AED 220k", "2024": "AED 250k", "2025": "AED 300k" },

    description: "Industrial hub ideal for building staff accommodation and warehouses. High niche yields.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "15 km", mins: "12 mins" },
      school: { name: "N/A", km: "N/A", mins: "N/A" },
      tourist: { name: "Jebel Jais", km: "40 km", mins: "45 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "N/A", km: "N/A", mins: "N/A" },
      business: { name: "Industrial Zone", km: "0 km", mins: "0 mins" },
      hospital: { name: "Saqr Hospital", km: "20 km", mins: "25 mins" }
    }
  },

  // --- 10. JEBEL JAIS / MOUNTAIN RESORTS ---
  {
    id: "jebel-jais",
    name: "Jebel Jais Area",
    emirate: "Ras Al Khaimah",
    category: "Tourism / Niche",
    roi: "8.0%",
    avgPrice: "AED 2.5M (Chalet)",
    imageColor: "bg-stone-600",
    amenities: ["Zipline", "Hiking Trails", "Mountain Lodge"],

    investorTags: ["Adventure Tourism", "Unique Asset", "Winter Rentals"],
    aiVerdict: {
      title: "The Adventure Capital",
      summary: "Niche market for mountain lodges. Extremely high occupancy during winter months due to hiking and adventure tourism."
    },
    demandSignals: { rentalDemand: "Seasonal (Winter High)", resaleLiquidity: "Low", tenantProfile: "Adventure Tourists" },
    ownership: { type: "Restricted", eligibleFor: ["Specific Zones Only"], minDownPayment: "30%" },

    scores: { cashFlow: 8.5, appreciation: 7.5, liquidity: 6.0, risk: 6.5, lifestyle: 9.0 },
    overallScore: 8.1,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 300/night" }, 
      oneBed: { roi: "8.5%", rent: "AED 500/night" }, 
      twoBed: { roi: "8.0%", rent: "AED 800/night" } 
    },

    shortTermScore: 9.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1000", occupancy: "90% (Winter)", tenantType: "Hikers" },

    futureUpgrades: [
      { name: "Sais Hotel", status: "Planned" },
      { name: "Observation Deck 2", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 1.8M", "2023": "AED 2.0M", "2024": "AED 2.2M", "2025": "AED 2.5M" },

    description: "The UAE's highest peak. Emerging market for mountain lodges and holiday homes.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "40 km", mins: "45 mins" },
      school: { name: "N/A", km: "N/A", mins: "N/A" },
      tourist: { name: "Jebel Jais Peak", km: "0 km", mins: "0 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Manar Mall", km: "50 km", mins: "55 mins" },
      business: { name: "Tourism Authority", km: "45 km", mins: "50 mins" },
      hospital: { name: "Saqr Hospital", km: "40 km", mins: "45 mins" }
    }
  }
];