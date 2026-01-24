// ==========================================================
// SHARJAH DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const SHARJAH_DATA = [
  // --- 1. ALJADA ---
  {
    id: "aljada",
    name: "Aljada",
    emirate: "Sharjah",
    category: "Master Community",
    
    roi: "6.17%", //
    avgPrice: "AED 1.17M", //
    imageColor: "bg-indigo-600",
    amenities: ["Madar Complex", "SABIS School", "Business Park"],

    investorTags: ["High Liquidity", "Master Plan", "Youth/Student Demand"],
    aiVerdict: {
      title: "The 'New Downtown' of Sharjah",
      summary: "Sharjah's largest mixed-use project. High demand from students and young families due to its modern lifestyle and proximity to University City."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "High",
      tenantProfile: "Students, Professionals, Young Families"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.5, appreciation: 8.8, liquidity: 9.0, risk: 5.0, lifestyle: 9.5 },
    overallScore: 8.9,

    unitEconomics: { 
      studio: { roi: "6.5%", rent: "AED 28k" }, 
      oneBed: { roi: "6.0%", rent: "AED 45k" }, 
      twoBed: { roi: "5.8%", rent: "AED 65k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "75%", tenantType: "University Visitors & Events" },

    futureUpgrades: [
      { name: "Aljada Central Hub", status: "Phase 2 Construction" },
      { name: "Vida Hotel Aljada", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 850k", "2023": "AED 950k", "2024": "AED 1.05M", "2025": "AED 1.17M" },

    description: "A futuristic city-within-a-city designed for active living, education, and entertainment.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "5 km", mins: "8 mins" },
      school: { name: "SABIS Int School", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Madar Aljada", km: "0.2 km", mins: "1 min" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Centre Zahia", km: "2 km", mins: "5 mins" },
      business: { name: "Arada CBD", km: "0.5 km", mins: "2 mins" },
      hospital: { name: "University Hospital", km: "4 km", mins: "6 mins" }
    }
  },

  // --- 2. MARYAM ISLAND ---
  {
    id: "maryam-island",
    name: "Maryam Island",
    emirate: "Sharjah",
    category: "Luxury / Waterfront",
    roi: "6.9%", 
    avgPrice: "AED 850k",
    imageColor: "bg-cyan-700",
    amenities: ["Beach Access", "Resort Hotels", "Promenade"],

    investorTags: ["Waterfront", "Premium Yields", "Holiday Homes"],
    aiVerdict: {
      title: "Sharjah's First Resort Community",
      summary: "Offers a unique waterfront lifestyle previously unavailable in Sharjah. High potential for capital appreciation as the master plan matures."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Affluent Expats & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.9, appreciation: 8.5, liquidity: 7.0, risk: 5.5, lifestyle: 9.2 },
    overallScore: 8.5,

    unitEconomics: { 
      studio: { roi: "7.2%", rent: "AED 35k" }, 
      oneBed: { roi: "6.8%", rent: "AED 55k" }, 
      twoBed: { roi: "6.5%", rent: "AED 85k" } 
    },

    shortTermScore: 8.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "70%", tenantType: "Beach Tourists" },

    futureUpgrades: [
      { name: "Maryam Beach Residences", status: "Handover Started" },
      { name: "Luxury Hotel (The Chedi)", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 650k", "2023": "AED 720k", "2024": "AED 790k", "2025": "AED 850k" },

    description: "Exclusive waterfront living in Downtown Sharjah, offering direct beach access and resort amenities.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "15 km", mins: "20 mins" },
      school: { name: "Victoria Int School", km: "3 km", mins: "5 mins" },
      tourist: { name: "Al Khan Beach", km: "1 km", mins: "3 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Expo Centre", km: "2 km", mins: "5 mins" },
      business: { name: "Chamber of Commerce", km: "2 km", mins: "5 mins" },
      hospital: { name: "Oriana Hospital", km: "3 km", mins: "6 mins" }
    }
  },

  // --- 3. AL NAHDA (SHARJAH) ---
  {
    id: "al-nahda-shj",
    name: "Al Nahda",
    emirate: "Sharjah",
    category: "High Yield / Budget",
    roi: "7.10%", //
    avgPrice: "AED 550k",
    imageColor: "bg-blue-800",
    amenities: ["Sahara Centre", "Nahda Park", "Dubai Border"],

    investorTags: ["High Cash Flow", "Commuter Hub", "Low Entry Price"],
    aiVerdict: {
      title: "The Commuter's Choice",
      summary: "Ideally located on the Dubai border. Offers the highest occupancy rates in Sharjah due to commuters seeking affordable rents."
    },
    demandSignals: { rentalDemand: "Extreme", resaleLiquidity: "High", tenantProfile: "Dubai Commuters & Families" },
    ownership: { type: "Leasehold", eligibleFor: ["Arabs (Freehold)", "Others (100yr Lease)"], minDownPayment: "20%" },

    scores: { cashFlow: 9.0, appreciation: 5.5, liquidity: 9.5, risk: 4.0, lifestyle: 6.5 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 29k" }, 
      oneBed: { roi: "7.1%", rent: "AED 37k" }, 
      twoBed: { roi: "6.8%", rent: "AED 48k" } 
    },

    shortTermScore: 5.0, // Mostly long-term
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98% (Long Term)", tenantType: "Long-term Residents" },

    futureUpgrades: [
      { name: "Traffic Improvement Plan", status: "Ongoing" },
      { name: "Sahara Centre Expansion", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 450k", "2023": "AED 480k", "2024": "AED 520k", "2025": "AED 550k" },

    description: "High-density residential area popular for its affordability and walking distance to Dubai.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "10 km", mins: "15 mins" },
      school: { name: "Pristine Private", km: "2 km", mins: "5 mins" },
      tourist: { name: "Nahda Park", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Stadium Metro (Dubai)", km: "3 km", mins: "10 mins" },
      mall: { name: "Sahara Centre", km: "1 km", mins: "3 mins" },
      business: { name: "Dubai", km: "0.1 km", mins: "1 min" },
      hospital: { name: "NMC Specialty", km: "1 km", mins: "3 mins" }
    }
  },

  // --- 4. MUWAILEH ---
  {
    id: "muwaileh",
    name: "Muwaileh",
    emirate: "Sharjah",
    category: "Family / Education",
    roi: "5.90%", //
    avgPrice: "AED 860k",
    imageColor: "bg-orange-600",
    amenities: ["University City", "Top Schools", "Zahia City Centre"],

    investorTags: ["Student Housing", "Stable Demand", "Family Friendly"],
    aiVerdict: {
      title: "Education Hub of the UAE",
      summary: "Home to the country's top universities and schools. Consistent demand from faculty and families ensures stability."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Families & University Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.2, appreciation: 6.5, liquidity: 7.5, risk: 4.5, lifestyle: 7.5 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "6.2%", rent: "AED 24k" }, 
      oneBed: { roi: "6.0%", rent: "AED 38k" }, 
      twoBed: { roi: "5.8%", rent: "AED 55k" } 
    },

    shortTermScore: 4.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95% (Long Term)", tenantType: "Families" },

    futureUpgrades: [
      { name: "New Bridge Access", status: "Complete" },
      { name: "University Expansion", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 700k", "2023": "AED 750k", "2024": "AED 800k", "2025": "AED 860k" },

    description: "Quiet, family-focused district known for housing the best schools and universities in the Northern Emirates.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "8 km", mins: "10 mins" },
      school: { name: "Delta English School", km: "1 km", mins: "2 mins" },
      tourist: { name: "University City", km: "2 km", mins: "4 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Centre Zahia", km: "3 km", mins: "5 mins" },
      business: { name: "Sharjah Ind Area", km: "5 km", mins: "8 mins" },
      hospital: { name: "University Hospital", km: "3 km", mins: "5 mins" }
    }
  },

  // --- 5. SHARJAH SUSTAINABLE CITY ---
  {
    id: "sharjah-sustainable-city",
    name: "Sharjah Sustainable City",
    emirate: "Sharjah",
    category: "Eco / Villa",
    roi: "6.5%", 
    avgPrice: "AED 1.9M (Villa)",
    imageColor: "bg-green-700",
    amenities: ["Solar Power", "Urban Farms", "Zero Service Fees"],

    investorTags: ["Green Investing", "No Service Fees", "Future Proof"],
    aiVerdict: {
      title: "Zero Bills, High Returns",
      summary: "First fully sustainable community in Sharjah. Investors benefit from 5 years of zero service fees and huge savings on utility bills."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Medium", tenantProfile: "Eco-conscious Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 8.0, liquidity: 6.5, risk: 4.8, lifestyle: 9.0 },
    overallScore: 8.6,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "6.5%", rent: "AED 90k" } // Villa
    },

    shortTermScore: 5.5,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "100%", tenantType: "Green Living Families" },

    futureUpgrades: [
      { name: "Phase 4 Handover", status: "Coming Soon" },
      { name: "Community Mall", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.4M", "2023": "AED 1.6M", "2024": "AED 1.8M", "2025": "AED 1.95M" },

    description: "Net-zero energy community powered by solar, offering huge savings on utility bills.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "10 km", mins: "10 mins" },
      school: { name: "Sustainable School", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Al Rahmaniya Park", km: "2 km", mins: "4 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Centre Zahia", km: "8 km", mins: "10 mins" },
      business: { name: "Sharjah Airport Freezone", km: "8 km", mins: "10 mins" },
      hospital: { name: "University Hospital", km: "10 km", mins: "12 mins" }
    }
  },

  // --- 6. AL KHAN ---
  {
    id: "al-khan",
    name: "Al Khan",
    emirate: "Sharjah",
    category: "Waterfront / Classic",
    roi: "3.73%", //
    avgPrice: "AED 1.15M",
    imageColor: "bg-cyan-600",
    amenities: ["Al Khan Beach", "Sharjah Aquarium", "Expo Centre"],

    investorTags: ["Capital Safety", "Waterfront", "Renovation Potential"],
    aiVerdict: {
      title: "Established Waterfront Value",
      summary: "One of the most prestigious addresses in Sharjah. Lower yields but excellent capital preservation and demand for sea-view units."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Medium", tenantProfile: "Long-term Residents" },
    ownership: { type: "Leasehold", eligibleFor: ["Arabs", "Expats (Usufruct)"], minDownPayment: "25%" },

    scores: { cashFlow: 5.5, appreciation: 6.0, liquidity: 7.0, risk: 4.0, lifestyle: 8.5 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "4.2%", rent: "AED 28k" }, 
      oneBed: { roi: "4.0%", rent: "AED 42k" }, 
      twoBed: { roi: "3.8%", rent: "AED 60k" } 
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 400", occupancy: "65%", tenantType: "Beach Tourists" },

    futureUpgrades: [
      { name: "Beach Promenade Upgrade", status: "Proposed" },
      { name: "New 5-Star Hotels", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 950k", "2023": "AED 1.0M", "2024": "AED 1.1M", "2025": "AED 1.15M" },

    description: "Historic waterfront district known for its lagoon views and proximity to Dubai.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "12 km", mins: "15 mins" },
      school: { name: "Victoria Int School", km: "3 km", mins: "5 mins" },
      tourist: { name: "Sharjah Aquarium", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Sahara Centre", km: "4 km", mins: "8 mins" },
      business: { name: "Expo Centre", km: "1 km", mins: "2 mins" },
      hospital: { name: "Oriana Hospital", km: "2 km", mins: "4 mins" }
    }
  },

  // --- 7. TILAL CITY ---
  {
    id: "tilal-city",
    name: "Tilal City",
    emirate: "Sharjah",
    category: "Land / Villa",
    roi: "5.82%", //
    avgPrice: "AED 3.2M (Villa)",
    imageColor: "bg-stone-600",
    amenities: ["Tilal Mall", "Community Parks", "Freehold Land"],

    investorTags: ["Buy-to-Build", "Land Investment", "Master Plan"],
    aiVerdict: {
      title: "Build Your Own Wealth",
      summary: "First freehold community allowing all nationalities to buy land and build. High potential for appreciation once Tilal Mall opens."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Low (Land)", tenantProfile: "Villa Owners" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "30% (Land)" },

    scores: { cashFlow: 5.0, appreciation: 8.5, liquidity: 5.0, risk: 6.0, lifestyle: 7.5 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "6.0%", rent: "AED 85k" } 
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Tilal Mall", status: "Planned" },
      { name: "Central Park", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 2.8M", "2023": "AED 2.9M", "2024": "AED 3.1M", "2025": "AED 3.26M" },

    description: "Sharjah's first master-planned community offering freehold land plots for all nationalities.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "10 km", mins: "10 mins" },
      school: { name: "GEMS Westminster", km: "2 km", mins: "4 mins" },
      tourist: { name: "Desert Park", km: "8 km", mins: "10 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Tilal Mall", km: "0.1 km", mins: "1 min" },
      business: { name: "Sharjah Media City", km: "8 km", mins: "10 mins" },
      hospital: { name: "University Hospital", km: "10 km", mins: "12 mins" }
    }
  },

  // --- 8. AL MAJAZ ---
  {
    id: "al-majaz",
    name: "Al Majaz",
    emirate: "Sharjah",
    category: "Culture / Waterfront",
    roi: "4.62%", //
    avgPrice: "AED 920k",
    imageColor: "bg-teal-800",
    amenities: ["Al Majaz Waterfront", "Amphitheatre", "Blue Souq"],

    investorTags: ["Cultural Hub", "Tourist Friendly", "Stable Asset"],
    aiVerdict: {
      title: "The Cultural Heart",
      summary: "The center of tourism in Sharjah. Consistent demand for rentals overlooking the Khalid Lagoon."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "Families & Tourists" },
    ownership: { type: "Leasehold", eligibleFor: ["Arabs", "Expats (Usufruct)"], minDownPayment: "25%" },

    scores: { cashFlow: 6.0, appreciation: 5.5, liquidity: 8.0, risk: 4.5, lifestyle: 9.0 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "5.0%", rent: "AED 28k" }, 
      oneBed: { roi: "4.8%", rent: "AED 38k" }, 
      twoBed: { roi: "4.5%", rent: "AED 51k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "75%", tenantType: "Event Tourists" },

    futureUpgrades: [
      { name: "Waterfront Expansion", status: "Ongoing" },
      { name: "Smart Parking", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 800k", "2023": "AED 850k", "2024": "AED 890k", "2025": "AED 920k" },

    description: "Famous for its waterfront park, amphitheater, and festivals. The lifestyle hub of the city.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "15 km", mins: "18 mins" },
      school: { name: "Intl School of Choueifat", km: "4 km", mins: "8 mins" },
      tourist: { name: "Al Majaz Waterfront", km: "0.1 km", mins: "1 min" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Centre Sharjah", km: "2 km", mins: "5 mins" },
      business: { name: "Bank Street", km: "1 km", mins: "3 mins" },
      hospital: { name: "Corniche Hospital", km: "2 km", mins: "5 mins" }
    }
  },

  // --- 9. AL MAMSHA ---
  {
    id: "al-mamsha",
    name: "Al Mamsha",
    emirate: "Sharjah",
    category: "Walkable / Modern",
    roi: "6.5%", 
    avgPrice: "AED 750k",
    imageColor: "bg-amber-600",
    amenities: ["Car-Free Zone", "Retail Walk", "University City"],

    investorTags: ["Car-Free Living", "Millennial Appeal", "Growth"],
    aiVerdict: {
      title: "Sharjah's First Walkable Community",
      summary: "A unique car-free concept appealing to millennials and students. High growth potential as the lifestyle concept gains traction."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Students & Young Pros" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 7.5, liquidity: 6.5, risk: 5.5, lifestyle: 8.5 },
    overallScore: 8.1,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 30k" }, 
      oneBed: { roi: "6.8%", rent: "AED 45k" }, 
      twoBed: { roi: "6.2%", rent: "AED 65k" } 
    },

    shortTermScore: 6.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "90%", tenantType: "Students" },

    futureUpgrades: [
      { name: "Retail Zone Completion", status: "Ongoing" },
      { name: "Bridge to University", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 600k", "2023": "AED 650k", "2024": "AED 700k", "2025": "AED 750k" },

    description: "A pedestrian-friendly community offering a modern, car-free lifestyle near University City.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "6 km", mins: "8 mins" },
      school: { name: "Wesgreen Int School", km: "2 km", mins: "4 mins" },
      tourist: { name: "06 Mall", km: "2 km", mins: "4 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Al Mamsha Souks", km: "0.1 km", mins: "1 min" },
      business: { name: "Muwaileh Comm", km: "1 km", mins: "2 mins" },
      hospital: { name: "University Hospital", km: "3 km", mins: "5 mins" }
    }
  },

  // --- 10. HAYYAN (BARASHI) ---
  {
    id: "hayyan",
    name: "Hayyan",
    emirate: "Sharjah",
    category: "Green / Villa",
    roi: "5.0%", // Estimated for new villa
    avgPrice: "AED 2.5M",
    imageColor: "bg-emerald-800",
    amenities: ["Largest Lagoon", "Community Forest", "Organic Farms"],

    investorTags: ["Green Living", "Luxury Villas", "Long Term"],
    aiVerdict: {
      title: "The Greenest Project",
      summary: "Features Sharjah's largest swimming lagoon and community forest. A premium choice for end-users seeking nature."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "Low (New)", tenantProfile: "Eco-Luxury Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 5.5, appreciation: 8.0, liquidity: 5.0, risk: 5.5, lifestyle: 9.5 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "N/A", rent: "N/A" } // Townhouses/Villas only
    },

    shortTermScore: 4.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Blue Water Lagoon", status: "Under Construction" },
      { name: "Community Mall", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 2.1M", "2023": "AED 2.3M", "2024": "AED 2.4M", "2025": "AED 2.5M" },

    description: "A luxury green community featuring the emirate's largest swimmable crystal lagoon.",
    connectivity: {
      airport: { name: "Sharjah Airport", km: "10 km", mins: "10 mins" },
      school: { name: "GEMS Founders", km: "5 km", mins: "8 mins" },
      tourist: { name: "Barashi Park", km: "1 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "City Centre Zahia", km: "10 km", mins: "12 mins" },
      business: { name: "Sharjah Airport Freezone", km: "10 km", mins: "12 mins" },
      hospital: { name: "University Hospital", km: "12 km", mins: "15 mins" }
    }
  }
];