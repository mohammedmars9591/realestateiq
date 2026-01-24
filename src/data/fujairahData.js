// ==========================================================
// FUJAIRAH DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const FUJAIRAH_DATA = [
  // --- 1. AL AQAH ---
  {
    id: "al-aqah",
    name: "Al Aqah",
    emirate: "Fujairah",
    category: "Tourism / Luxury",
    
    roi: "8.2%", // Driven by holiday rentals
    avgPrice: "AED 1.2M",
    imageColor: "bg-cyan-800",
    amenities: ["Snoopy Island", "5-Star Resorts", "Diving Centers"],

    // === INVESTOR INTELLIGENCE ===
    investorTags: ["Holiday Homes", "High Appreciation", "Tourism Yields"],
    aiVerdict: {
      title: "The Holiday Home Hotspot",
      summary: "Fujairah's prime tourism belt. High demand for short-term rentals due to 'staycation' trends and diving tourism. Massive appreciation potential with new luxury projects like Ocean Living."
    },
    demandSignals: {
      rentalDemand: "Very High (Seasonal)",
      resaleLiquidity: "Medium",
      tenantProfile: "Tourists & Weekend Visitors"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.5, appreciation: 9.0, liquidity: 6.5, risk: 6.0, lifestyle: 9.5 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "8.5%", rent: "AED 60k (Short-term)" }, 
      twoBed: { roi: "8.0%", rent: "AED 95k (Short-term)" } 
    },

    shortTermScore: 9.2,
    shortTermRental: { allowed: true, avgDailyRate: "AED 750", occupancy: "65%", tenantType: "Staycation Families" },

    futureUpgrades: [
      { name: "Ocean Living Project", status: "Under Construction" },
      { name: "New Address Resort", status: "Operational" }
    ],

    priceTrend: { "2022": "AED 950k", "2023": "AED 1.05M", "2024": "AED 1.15M", "2025": "AED 1.2M" },

    description: "The crown jewel of Fujairah tourism. Prime location for luxury holiday homes and diving retreats.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "45 km", mins: "40 mins" },
      school: { name: "Local Schools", km: "10 km", mins: "12 mins" },
      tourist: { name: "Snoopy Island", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Centre Fujairah", km: "45 km", mins: "40 mins" },
      business: { name: "Fujairah City", km: "45 km", mins: "40 mins" },
      hospital: { name: "Dibba Hospital", km: "15 km", mins: "18 mins" }
    }
  },

  // --- 2. DIBBA ---
  {
    id: "dibba",
    name: "Dibba",
    emirate: "Fujairah",
    category: "Holiday / Nature",
    roi: "7.5%",
    avgPrice: "AED 850k (Villa)",
    imageColor: "bg-teal-700",
    amenities: ["Camping Spots", "Mountains", "Farmhouses"],

    investorTags: ["Eco-Tourism", "Affordable Villas", "Nature Lovers"],
    aiVerdict: {
      title: "Nature & Niche Yields",
      summary: "Famous for farmhouses and camping. A niche market offering high yields for investors converting properties into eco-lodges or holiday farms."
    },
    demandSignals: { rentalDemand: "High (Weekend)", resaleLiquidity: "Medium", tenantProfile: "UAE Residents (Weekend)" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 6.5, liquidity: 6.0, risk: 5.5, lifestyle: 8.5 },
    overallScore: 7.6,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "7.5%", rent: "AED 60k" } // Farm/Villa
    },

    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "55%", tenantType: "Adventure Tourists" },

    futureUpgrades: [
      { name: "Dibba Sports Club", status: "Renovation" },
      { name: "Eco-Tourism Zone", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 700k", "2023": "AED 750k", "2024": "AED 800k", "2025": "AED 850k" },

    description: "Scenic coastal town famous for its mountains and camping sites. Rising demand for holiday farmhouses.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "60 km", mins: "50 mins" },
      school: { name: "Dibba School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Dibba Rock", km: "5 km", mins: "10 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Local Markets", km: "2 km", mins: "5 mins" },
      business: { name: "Cement Factory", km: "10 km", mins: "12 mins" },
      hospital: { name: "Dibba Hospital", km: "3 km", mins: "5 mins" }
    }
  },

  // --- 3. FUJAIRAH CITY CENTER ---
  {
    id: "fujairah-city",
    name: "Fujairah City Center",
    emirate: "Fujairah",
    category: "Commercial / Residential",
    roi: "7.8%",
    avgPrice: "AED 450k",
    imageColor: "bg-blue-800",
    amenities: ["City Centre Mall", "Fujairah Fort", "Grand Mosque"],

    investorTags: ["Stable Income", "Low Entry Price", "Long Term"],
    aiVerdict: {
      title: "Commercial Core",
      summary: "The heart of the emirate. Steady demand from professionals working in the port and oil sectors. Extremely low vacancy risk."
    },
    demandSignals: { rentalDemand: "Steady", resaleLiquidity: "Medium", tenantProfile: "Port & Gov Employees" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.0, appreciation: 5.5, liquidity: 8.5, risk: 4.5, lifestyle: 7.0 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "8.2%", rent: "AED 28k" }, 
      oneBed: { roi: "7.8%", rent: "AED 40k" }, 
      twoBed: { roi: "7.0%", rent: "AED 55k" } 
    },

    shortTermScore: 4.5,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95% (Long Term)", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Etihad Rail Station", status: "Completion 2026" },
      { name: "Airport Expansion", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 380k", "2023": "AED 400k", "2024": "AED 420k", "2025": "AED 450k" },

    description: "The commercial hub offering stable rental income from professionals and government staff.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "2 km", mins: "5 mins" },
      school: { name: "GEMS Winchester", km: "3 km", mins: "6 mins" },
      tourist: { name: "Fujairah Fort", km: "2 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Centre", km: "1 km", mins: "3 mins" },
      business: { name: "Free Zone", km: "5 km", mins: "10 mins" },
      hospital: { name: "Fujairah Hospital", km: "2 km", mins: "5 mins" }
    }
  },

  // --- 4. AL FASEEL ---
  {
    id: "al-faseel",
    name: "Al Faseel",
    emirate: "Fujairah",
    category: "Premium Residential",
    roi: "6.2%",
    avgPrice: "AED 1.5M (Villa)",
    imageColor: "bg-indigo-600",
    amenities: ["Umbrella Beach", "Villas", "Hospital Access"],

    investorTags: ["Family Villas", "Premium", "End-User"],
    aiVerdict: {
      title: "Upscale Family Living",
      summary: "Preferred by affluent locals and senior expats. Offers larger villas and proximity to the beach, with stable but lower yields compared to apartments."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Medium", tenantProfile: "Doctors & Senior Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.0, appreciation: 7.0, liquidity: 7.5, risk: 4.0, lifestyle: 8.0 },
    overallScore: 8.1,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 45k" }, 
      twoBed: { roi: "6.5%", rent: "AED 70k" } 
    },

    shortTermScore: 5.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "90%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Beach Corniche Upgrade", status: "Complete" },
      { name: "New Private Hospital", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.3M", "2023": "AED 1.35M", "2024": "AED 1.45M", "2025": "AED 1.5M" },

    description: "Upscale villa community near Umbrella Beach, preferred by doctors and senior executives.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "10 km", mins: "12 mins" },
      school: { name: "St Mary's", km: "2 km", mins: "4 mins" },
      tourist: { name: "Umbrella Beach", km: "1 km", mins: "3 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Century Mall", km: "3 km", mins: "5 mins" },
      business: { name: "City Center", km: "5 km", mins: "8 mins" },
      hospital: { name: "Fujairah Hospital", km: "1 km", mins: "2 mins" }
    }
  },

  // --- 5. CREATIVE CITY ---
  {
    id: "creative-city",
    name: "Creative City Area",
    emirate: "Fujairah",
    category: "Business / Media",
    roi: "8.0%",
    avgPrice: "AED 500k",
    imageColor: "bg-purple-700",
    amenities: ["Media Offices", "Studios", "Commercial Hub"],

    investorTags: ["Business Hub", "Media", "Commercial Yields"],
    aiVerdict: {
      title: "Free Zone Magnet",
      summary: "Located near the Creative City Free Zone. Excellent for commercial investments or residential units targeting media professionals."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Media Professionals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.5, appreciation: 6.5, liquidity: 7.5, risk: 5.0, lifestyle: 6.5 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 30k" }, 
      oneBed: { roi: "8.0%", rent: "AED 42k" }, 
      twoBed: { roi: "7.5%", rent: "AED 58k" } 
    },

    shortTermScore: 4.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "92%", tenantType: "Expats" },

    futureUpgrades: [
      { name: "Media Park Expansion", status: "Planned" },
      { name: "Tech Hub", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 420k", "2023": "AED 450k", "2024": "AED 480k", "2025": "AED 500k" },

    description: "Strategic location near the Creative City Free Zone. Strong rental demand from media companies.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "5 km", mins: "8 mins" },
      school: { name: "Creative Academy", km: "1 km", mins: "2 mins" },
      tourist: { name: "Sheikh Zayed Mosque", km: "3 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Lulu Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Creative City", km: "0 km", mins: "0 mins" },
      hospital: { name: "Thumbay", km: "4 km", mins: "8 mins" }
    }
  },

  // --- 6. AL HAYL ---
  {
    id: "al-hayl",
    name: "Al Hayl",
    emirate: "Fujairah",
    category: "Industrial / Growth",
    roi: "9.2%",
    avgPrice: "AED 350k (Plot/Unit)",
    imageColor: "bg-slate-700",
    amenities: ["Industrial Zone", "Warehouses", "New Housing"],

    investorTags: ["Industrial", "Highest Yields", "Future Growth"],
    aiVerdict: {
      title: "Industrial Powerhouse",
      summary: "Major industrial zone undergoing residential expansion. Offers some of the highest yields in the emirate for labor accommodation and affordable housing."
    },
    demandSignals: { rentalDemand: "High (Staff)", resaleLiquidity: "Low", tenantProfile: "Industrial Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.5, appreciation: 6.0, liquidity: 5.5, risk: 6.0, lifestyle: 5.0 },
    overallScore: 7.4,

    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 22k" }, 
      oneBed: { roi: "9.0%", rent: "AED 30k" }, 
      twoBed: { roi: "8.5%", rent: "AED 40k" } 
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98%", tenantType: "Staff" },

    futureUpgrades: [
      { name: "Etihad Rail Depot", status: "Under Construction" },
      { name: "New Access Roads", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 280k", "2023": "AED 300k", "2024": "AED 320k", "2025": "AED 350k" },

    description: "Rapidly expanding industrial and residential area. Beneficiary of the new Etihad Rail freight network.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "8 km", mins: "10 mins" },
      school: { name: "Pakistan Islamia", km: "3 km", mins: "5 mins" },
      tourist: { name: "Fujairah Castle", km: "4 km", mins: "8 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "N/A", km: "N/A", mins: "N/A" },
      business: { name: "Industrial Estate", km: "0 km", mins: "0 mins" },
      hospital: { name: "Fujairah Hospital", km: "5 km", mins: "8 mins" }
    }
  },

  // --- 7. MIRBAH ---
  {
    id: "mirbah",
    name: "Mirbah",
    emirate: "Fujairah",
    category: "Coastal / Emerging",
    roi: "6.8%",
    avgPrice: "AED 750k (Villa)",
    imageColor: "bg-teal-500",
    amenities: ["Fishing Harbour", "Corniche", "Local Markets"],

    investorTags: ["Quiet Living", "Coastal Value", "Local Demand"],
    aiVerdict: {
      title: "Hidden Coastal Gem",
      summary: "Quiet town located halfway to Khor Fakkan. Popular with locals and those seeking affordable coastal villas away from the city."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Medium", tenantProfile: "Local Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 6.8, liquidity: 6.0, risk: 5.5, lifestyle: 7.0 },
    overallScore: 7.2,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "7.0%", rent: "AED 30k" }, 
      twoBed: { roi: "6.5%", rent: "AED 45k" } 
    },

    shortTermScore: 5.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "85%", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Power Plant Expansion", status: "Ongoing" },
      { name: "Corniche Development", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 650k", "2023": "AED 680k", "2024": "AED 720k", "2025": "AED 750k" },

    description: "Quiet coastal town offering affordable villas and a relaxed lifestyle near the sea.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "20 km", mins: "18 mins" },
      school: { name: "Govt Schools", km: "1 km", mins: "2 mins" },
      tourist: { name: "Mirbah Beach", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Local Shops", km: "1 km", mins: "2 mins" },
      business: { name: "Power Plant", km: "5 km", mins: "8 mins" },
      hospital: { name: "Local Clinic", km: "2 km", mins: "5 mins" }
    }
  },

  // --- 8. SAKAMKAM ---
  {
    id: "sakakam",
    name: "Sakamkam",
    emirate: "Fujairah",
    category: "Budget / Staff",
    roi: "8.5%",
    avgPrice: "AED 350k",
    imageColor: "bg-slate-600",
    amenities: ["Affordable Housing", "Mountain Views", "Football Club"],

    investorTags: ["High Occupancy", "Staff Housing", "Low CapEx"],
    aiVerdict: {
      title: "Workforce Hub",
      summary: "High-density area north of the city. Excellent for investors targeting workforce housing with consistent, high-yield rental returns."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Blue Collar & Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.0, appreciation: 5.0, liquidity: 7.0, risk: 5.5, lifestyle: 5.5 },
    overallScore: 7.5,

    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 22k" }, 
      oneBed: { roi: "8.5%", rent: "AED 32k" }, 
      twoBed: { roi: "8.0%", rent: "AED 45k" } 
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95%", tenantType: "Staff" },

    futureUpgrades: [
      { name: "Road Improvements", status: "Ongoing" },
      { name: "New Community Housing", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 300k", "2023": "AED 320k", "2024": "AED 330k", "2025": "AED 350k" },

    description: "Budget-friendly area north of the city. High demand for affordable accommodation.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "8 km", mins: "10 mins" },
      school: { name: "Indian School", km: "3 km", mins: "5 mins" },
      tourist: { name: "Mountains", km: "1 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Local Souq", km: "2 km", mins: "4 mins" },
      business: { name: "Port of Fujairah", km: "5 km", mins: "8 mins" },
      hospital: { name: "Fujairah Hospital", km: "5 km", mins: "8 mins" }
    }
  },

  // --- 9. QIDFA ---
  {
    id: "qidfa",
    name: "Qidfa",
    emirate: "Fujairah",
    category: "Industrial / Utilities",
    roi: "9.0%",
    avgPrice: "AED 400k (Plot)",
    imageColor: "bg-amber-700",
    amenities: ["Power Station", "Desalination Plant", "Beach"],

    investorTags: ["Utilities Hub", "Staff Accommodation", "Stable"],
    aiVerdict: {
      title: "Strategic Utility Zone",
      summary: "Home to major power and water plants. Housing demand is entirely driven by utility companies needing staff accommodation."
    },
    demandSignals: { rentalDemand: "Steady", resaleLiquidity: "Low", tenantProfile: "Utility Staff" },
    ownership: { type: "Restricted", eligibleFor: ["UAE Nationals Mostly"], minDownPayment: "20%" },

    scores: { cashFlow: 9.5, appreciation: 4.5, liquidity: 5.5, risk: 6.0, lifestyle: 4.5 },
    overallScore: 7.0,

    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 20k" }, 
      oneBed: { roi: "9.0%", rent: "AED 28k" }, 
      twoBed: { roi: "8.5%", rent: "AED 38k" } 
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98%", tenantType: "Staff" },

    futureUpgrades: [
      { name: "Desalination Expansion", status: "Ongoing" },
      { name: "Green Energy Projects", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 350k", "2023": "AED 360k", "2024": "AED 380k", "2025": "AED 400k" },

    description: "Industrial hub home to major power and water plants. Excellent yields for labor accommodation.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "25 km", mins: "22 mins" },
      school: { name: "Local Schools", km: "2 km", mins: "3 mins" },
      tourist: { name: "Qidfa Beach", km: "1 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "N/A", km: "N/A", mins: "N/A" },
      business: { name: "Utility Plants", km: "0.5 km", mins: "1 min" },
      hospital: { name: "Local Clinic", km: "1 km", mins: "2 mins" }
    }
  },

  // --- 10. CORNICHE AREA ---
  {
    id: "fujairah-corniche",
    name: "Fujairah Corniche",
    emirate: "Fujairah",
    category: "Waterfront / City",
    roi: "7.0%",
    avgPrice: "AED 600k",
    imageColor: "bg-cyan-600",
    amenities: ["Beach Promenade", "Hotels", "Restaurants"],

    investorTags: ["Lifestyle", "Waterfront", "Capital Growth"],
    aiVerdict: {
      title: "City Lifestyle Choice",
      summary: "Combines city convenience with waterfront living. Popular with high-income expats and offers strong potential for short-term rentals."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "Expats & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.2, appreciation: 6.5, liquidity: 8.0, risk: 4.8, lifestyle: 8.8 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 35k" }, 
      oneBed: { roi: "7.0%", rent: "AED 50k" }, 
      twoBed: { roi: "6.5%", rent: "AED 75k" } 
    },

    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "75%", tenantType: "City Tourists" },

    futureUpgrades: [
      { name: "Corniche Extension", status: "Planned" },
      { name: "New Hospitality Projects", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 500k", "2023": "AED 540k", "2024": "AED 580k", "2025": "AED 600k" },

    description: "Prime waterfront real estate offering city convenience with sea views and promenade access.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "4 km", mins: "8 mins" },
      school: { name: "Our Own English", km: "4 km", mins: "8 mins" },
      tourist: { name: "Bull Ring", km: "2 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Lulu Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Business Towers", km: "1 km", mins: "2 mins" },
      hospital: { name: "Thumbay Hospital", km: "3 km", mins: "6 mins" }
    }
  }
];