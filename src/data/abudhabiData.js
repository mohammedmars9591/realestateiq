// ==========================================================
// ABU DHABI DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const ABUDHABI_DATA = [
  // --- 1. AL REEM ISLAND ---
  {
    id: "al-reem-island",
    name: "Al Reem Island",
    emirate: "Abu Dhabi",
    category: "High Yield / Waterfront",
    
    roi: "8.5%",
    avgPrice: "AED 1.3M",
    imageColor: "bg-blue-600",
    amenities: ["Reem Central Park", "Shams Boutik", "Sorbonne University"],

    // === INVESTOR INTELLIGENCE ===
    investorTags: ["High Liquidity", "Expat Hub", "Stable Yields"],
    aiVerdict: {
      title: "The Safe Bet",
      summary: "Abu Dhabi's most established investment zone. High volume of transactions and consistent demand from professionals working in ADGM and the city."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "High",
      tenantProfile: "Young Professionals & Families"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.8, appreciation: 7.5, liquidity: 9.2, risk: 5.0, lifestyle: 8.5 },
    overallScore: 8.9,

    unitEconomics: { 
      studio: { roi: "8.9%", rent: "AED 65k" }, 
      oneBed: { roi: "8.2%", rent: "AED 91k" }, 
      twoBed: { roi: "7.5%", rent: "AED 128k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 400", occupancy: "75%", tenantType: "Business & Leisure" },

    futureUpgrades: [
      { name: "Reem Mall Completion", status: "Operational" },
      { name: "New Bridges to City", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.1M", "2023": "AED 1.2M", "2024": "AED 1.25M", "2025": "AED 1.3M" },

    description: "The most popular investment zone in Abu Dhabi, offering high-rise waterfront living with excellent connectivity.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "30 km", mins: "25 mins" },
      school: { name: "Repton School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Louvre Abu Dhabi", km: "10 km", mins: "12 mins" },
      metro: { name: "Bus Network", km: "0.1 km", mins: "1 min" },
      mall: { name: "Reem Mall", km: "1 km", mins: "3 mins" },
      business: { name: "ADGM (Al Maryah)", km: "3 km", mins: "5 mins" },
      hospital: { name: "Cleveland Clinic", km: "3 km", mins: "5 mins" }
    }
  },

  // --- 2. YAS ISLAND ---
  {
    id: "yas-island",
    name: "Yas Island",
    emirate: "Abu Dhabi",
    category: "Entertainment / Luxury",
    roi: "7.3%",
    avgPrice: "AED 1.6M",
    imageColor: "bg-red-700",
    amenities: ["Ferrari World", "Yas Mall", "F1 Circuit", "SeaWorld"],

    investorTags: ["Tourism", "Luxury Rentals", "Capital Growth"],
    aiVerdict: {
      title: "Entertainment Capital",
      summary: "The premier leisure destination. Command premium rents due to world-class attractions (F1, SeaWorld) and high demand for holiday homes."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "Tourists & Western Expats" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.2, appreciation: 9.0, liquidity: 8.5, risk: 5.5, lifestyle: 9.8 },
    overallScore: 9.2,

    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 60k" }, 
      oneBed: { roi: "7.1%", rent: "AED 85k" }, 
      twoBed: { roi: "6.5%", rent: "AED 130k" } 
    },

    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 650", occupancy: "82%", tenantType: "Tourists & Event Goers" },

    futureUpgrades: [
      { name: "Yas Bay Waterfront", status: "Expanding" },
      { name: "Harry Potter World", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.3M", "2023": "AED 1.45M", "2024": "AED 1.55M", "2025": "AED 1.6M" },

    description: "Abu Dhabi's premier entertainment hub. High demand for short-term rentals and holiday homes.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "10 km", mins: "10 mins" },
      school: { name: "Sabis Intl School", km: "4 km", mins: "8 mins" },
      tourist: { name: "Yas Waterworld", km: "2 km", mins: "5 mins" },
      metro: { name: "Yas Express", km: "0.1 km", mins: "1 min" },
      mall: { name: "Yas Mall", km: "1 km", mins: "3 mins" },
      business: { name: "Yas Creative Hub", km: "5 km", mins: "8 mins" },
      hospital: { name: "Burjeel Medical", km: "3 km", mins: "6 mins" }
    }
  },

  // --- 3. SAADIYAT ISLAND ---
  {
    id: "saadiyat-island",
    name: "Saadiyat Island",
    emirate: "Abu Dhabi",
    category: "Ultra Prime / Cultural",
    roi: "5.6%",
    avgPrice: "AED 2.8M",
    imageColor: "bg-teal-700",
    amenities: ["Louvre Abu Dhabi", "Soul Beach", "Guggenheim (Upcoming)"],

    investorTags: ["Trophy Asset", "Beachfront", "High Appreciation"],
    aiVerdict: {
      title: "Exclusive Cultural District",
      summary: "The most prestigious address in the capital. Lower initial yields but massive capital appreciation potential driven by upcoming museums."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "High Net Worth Individuals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.0, appreciation: 9.8, liquidity: 7.5, risk: 4.5, lifestyle: 10.0 },
    overallScore: 9.5,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 90k" }, 
      oneBed: { roi: "5.8%", rent: "AED 115k" }, 
      twoBed: { roi: "5.5%", rent: "AED 179k" } 
    },

    shortTermScore: 9.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "75%", tenantType: "Luxury Travelers" },

    futureUpgrades: [
      { name: "Guggenheim Abu Dhabi", status: "2026 Opening" },
      { name: "Zayed National Museum", status: "Near Completion" }
    ],

    priceTrend: { "2022": "AED 2.2M", "2023": "AED 2.5M", "2024": "AED 2.65M", "2025": "AED 2.8M" },

    description: "The cultural district of the UAE. Offers exclusive beachfront living and highest capital appreciation potential.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "25 km", mins: "20 mins" },
      school: { name: "Cranleigh Abu Dhabi", km: "2 km", mins: "5 mins" },
      tourist: { name: "Louvre Museum", km: "1 km", mins: "3 mins" },
      metro: { name: "Bus Network", km: "0.5 km", mins: "5 mins" },
      mall: { name: "The Collection", km: "3 km", mins: "6 mins" },
      business: { name: "Abu Dhabi CBD", km: "10 km", mins: "12 mins" },
      hospital: { name: "Cleveland Clinic", km: "8 km", mins: "10 mins" }
    }
  },

  // --- 4. AL RAHA BEACH ---
  {
    id: "al-raha-beach",
    name: "Al Raha Beach",
    emirate: "Abu Dhabi",
    category: "Waterfront / Family",
    roi: "6.4%",
    avgPrice: "AED 1.4M",
    imageColor: "bg-cyan-600",
    amenities: ["Al Raha Mall", "Canal Promenade", "Etihad Plaza"],

    investorTags: ["Family Friendly", "Stable Rents", "Waterfront"],
    aiVerdict: {
      title: "Premium Family Living",
      summary: "A favorite for families desiring waterfront living without the Yas Island price tag. Very stable occupancy rates."
    },
    demandSignals: { rentalDemand: "Steady", resaleLiquidity: "Medium", tenantProfile: "Families & Airline Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.8, appreciation: 7.5, liquidity: 8.0, risk: 5.5, lifestyle: 8.8 },
    overallScore: 8.6,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 70k" }, 
      oneBed: { roi: "6.5%", rent: "AED 95k" }, 
      twoBed: { roi: "6.2%", rent: "AED 140k" } 
    },

    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "65%", tenantType: "Families" },

    futureUpgrades: [
      { name: "Al Raha Creek", status: "Development" },
      { name: "New Retail Strips", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 1.2M", "2023": "AED 1.3M", "2024": "AED 1.35M", "2025": "AED 1.4M" },

    description: "Premium waterfront community stretching along the highway to Dubai. Popular with families.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "8 km", mins: "10 mins" },
      school: { name: "Raha Intl School", km: "3 km", mins: "6 mins" },
      tourist: { name: "Yas Island", km: "5 km", mins: "8 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Al Raha Mall", km: "0.5 km", mins: "2 mins" },
      business: { name: "Masdar City", km: "5 km", mins: "8 mins" },
      hospital: { name: "NMC Royal", km: "4 km", mins: "7 mins" }
    }
  },

  // --- 5. MASDAR CITY ---
  {
    id: "masdar-city",
    name: "Masdar City",
    emirate: "Abu Dhabi",
    category: "Sustainable / Tech",
    roi: "8.4%",
    avgPrice: "AED 850k",
    imageColor: "bg-emerald-600",
    amenities: ["Tech Park", "My City Centre", "Personal Rapid Transit"],

    investorTags: ["Green Tech", "High Yield", "Future Living"],
    aiVerdict: {
      title: "Sustainable & High Yield",
      summary: "One of the most sustainable cities in the world. High rental yields due to lower entry prices and demand from eco-conscious tenants."
    },
    demandSignals: { rentalDemand: "Rising", resaleLiquidity: "Medium", tenantProfile: "Tech Workers & Students" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.5, appreciation: 7.2, liquidity: 7.8, risk: 5.2, lifestyle: 8.0 },
    overallScore: 8.3,

    unitEconomics: { 
      studio: { roi: "8.2%", rent: "AED 55k" }, 
      oneBed: { roi: "7.5%", rent: "AED 75k" }, 
      twoBed: { roi: "6.5%", rent: "AED 100k" } 
    },

    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "60%", tenantType: "Business Travelers" },

    futureUpgrades: [
      { name: "Masdar Park Phase 2", status: "Completed" },
      { name: "Autonomous Transport", status: "Expanding" }
    ],

    priceTrend: { "2022": "AED 750k", "2023": "AED 790k", "2024": "AED 820k", "2025": "AED 850k" },

    description: "One of the world's most sustainable urban communities. High demand from eco-conscious tenants.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "3 km", mins: "5 mins" },
      school: { name: "Ryan Intl School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Central Park", km: "0.5 km", mins: "2 mins" },
      metro: { name: "PRT System", km: "0 km", mins: "0 mins" },
      mall: { name: "My City Centre", km: "0.5 km", mins: "2 mins" },
      business: { name: "Siemens HQ", km: "0.5 km", mins: "2 mins" },
      hospital: { name: "NMC Royal", km: "3 km", mins: "6 mins" }
    }
  },

  // --- 6. AL GHADEER ---
  {
    id: "al-ghadeer",
    name: "Al Ghadeer",
    emirate: "Abu Dhabi",
    category: "Budget / Commuter",
    roi: "8.7%",
    avgPrice: "AED 600k",
    imageColor: "bg-lime-600",
    amenities: ["Harvest", "The Hub", "Community Farm"],

    investorTags: ["Border Zone", "Commuter Hub", "High ROI"],
    aiVerdict: {
      title: "Strategic Border Location",
      summary: "Located on the Dubai-Abu Dhabi border. Perfect for capturing demand from commuters working in Dubai South or JAFZA but seeking lower rents."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Dubai Commuters" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.0, appreciation: 6.0, liquidity: 7.5, risk: 5.8, lifestyle: 7.0 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 45k" }, 
      oneBed: { roi: "8.5%", rent: "AED 58k" }, 
      twoBed: { roi: "7.8%", rent: "AED 85k" } 
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "95% (Long Term)", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Retail Hub", status: "Planned" },
      { name: "Community Farm", status: "Operational" }
    ],

    priceTrend: { "2022": "AED 500k", "2023": "AED 550k", "2024": "AED 580k", "2025": "AED 600k" },

    description: "Located on the border of Dubai & Abu Dhabi. Ideal for commuters working in Dubai South or JAFZA.",
    connectivity: {
      airport: { name: "Al Maktoum (DWC)", km: "20 km", mins: "15 mins" },
      school: { name: "British Oak", km: "1 km", mins: "2 mins" },
      tourist: { name: "Expo City (Dubai)", km: "25 km", mins: "20 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Outlet Village", km: "20 km", mins: "15 mins" },
      business: { name: "Dubai South", km: "20 km", mins: "15 mins" },
      hospital: { name: "NMC Royal", km: "25 km", mins: "20 mins" }
    }
  },

  // --- 7. AL REEF ---
  {
    id: "al-reef",
    name: "Al Reef",
    emirate: "Abu Dhabi",
    category: "Affordable Family",
    roi: "9.5%",
    avgPrice: "AED 750k",
    imageColor: "bg-amber-600",
    amenities: ["Al Reef Downtown", "Villas", "Community Pools"],

    investorTags: ["Highest Yields", "Entry Level", "Family Villas"],
    aiVerdict: {
      title: "ROI Champion",
      summary: "Consistently offers the highest rental yields in Abu Dhabi. A no-frills, high-occupancy community popular with mid-income families."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Mid-income Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.5, appreciation: 5.8, liquidity: 8.8, risk: 5.0, lifestyle: 7.2 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "9.8%", rent: "AED 52k" }, 
      oneBed: { roi: "9.2%", rent: "AED 72k" }, 
      twoBed: { roi: "8.5%", rent: "AED 95k" } 
    },

    shortTermScore: 4.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "98% (Long Term)", tenantType: "Families" },

    futureUpgrades: [
      { name: "Parks Renovation", status: "Ongoing" },
      { name: "Community Center", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 650k", "2023": "AED 700k", "2024": "AED 720k", "2025": "AED 750k" },

    description: "Consistently offers the highest rental yields in Abu Dhabi for affordable apartments and villas.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "10 km", mins: "10 mins" },
      school: { name: "Sabis Intl", km: "5 km", mins: "8 mins" },
      tourist: { name: "Ferrari World", km: "10 km", mins: "12 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Deerfields Mall", km: "8 km", mins: "10 mins" },
      business: { name: "Masdar City", km: "10 km", mins: "12 mins" },
      hospital: { name: "NMC Royal", km: "10 km", mins: "12 mins" }
    }
  },

  // --- 8. AL MARYAH ISLAND ---
  {
    id: "al-maryah-island",
    name: "Al Maryah Island",
    emirate: "Abu Dhabi",
    category: "Business / Luxury",
    roi: "8.5%",
    avgPrice: "AED 1.8M",
    imageColor: "bg-indigo-700",
    amenities: ["Galleria Mall", "Cleveland Clinic", "Rosewood Hotel"],

    investorTags: ["Financial District", "Luxury", "Corporate Demand"],
    aiVerdict: {
      title: "The Financial Center",
      summary: "Abu Dhabi's designated financial free zone (ADGM). Commands premium rents from high-earning finance and legal professionals."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Finance Professionals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.0, appreciation: 8.2, liquidity: 7.8, risk: 5.2, lifestyle: 9.5 },
    overallScore: 8.8,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 75k" }, 
      oneBed: { roi: "7.0%", rent: "AED 95k" }, 
      twoBed: { roi: "6.5%", rent: "AED 150k" } 
    },

    shortTermScore: 8.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 800", occupancy: "80%", tenantType: "Business Executives" },

    futureUpgrades: [
      { name: "ADGM Expansion", status: "Planned" },
      { name: "Al Maryah Central", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 1.6M", "2023": "AED 1.7M", "2024": "AED 1.75M", "2025": "AED 1.8M" },

    description: "Abu Dhabi's designated financial free zone (ADGM). High-end living for finance professionals.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "30 km", mins: "25 mins" },
      school: { name: "Repton School", km: "3 km", mins: "6 mins" },
      tourist: { name: "Galleria Mall", km: "0.1 km", mins: "1 min" },
      metro: { name: "Bus Network", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Galleria Mall", km: "0 km", mins: "0 mins" },
      business: { name: "ADGM HQ", km: "0 km", mins: "0 mins" },
      hospital: { name: "Cleveland Clinic", km: "0.2 km", mins: "2 mins" }
    }
  },

  // --- 9. KHALIFA CITY ---
  {
    id: "khalifa-city",
    name: "Khalifa City",
    emirate: "Abu Dhabi",
    category: "Suburban Family",
    roi: "6.0%",
    avgPrice: "AED 3.5M (Villa)",
    imageColor: "bg-orange-600",
    amenities: ["Pink Shops", "Golf Club", "Spacious Villas"],

    investorTags: ["Villas", "Suburban", "Restricted Ownership"],
    aiVerdict: {
      title: "Suburban Stability",
      summary: "Massive villa community popular with locals and expats. Note: Ownership is restricted mainly to UAE/GCC nationals in many zones."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Medium", tenantProfile: "Large Families" },
    ownership: { type: "Restricted", eligibleFor: ["UAE/GCC mostly"], minDownPayment: "20%" },

    scores: { cashFlow: 6.0, appreciation: 7.0, liquidity: 8.0, risk: 4.8, lifestyle: 8.2 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 35k" }, 
      oneBed: { roi: "N/A", rent: "AED 50k" }, 
      twoBed: { roi: "6.0%", rent: "AED 75k" }
    },

    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Residents" },

    futureUpgrades: [
      { name: "Forsan Central Mall", status: "Complete" },
      { name: "Infrastructure Upgrade", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 3.0M", "2023": "AED 3.2M", "2024": "AED 3.35M", "2025": "AED 3.5M" },

    description: "Massive suburban hub popular for spacious independent villas and proximity to the airport.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "15 km", mins: "12 mins" },
      school: { name: "Raha Intl", km: "3 km", mins: "5 mins" },
      tourist: { name: "Al Forsan Resort", km: "2 km", mins: "4 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Forsan Central", km: "2 km", mins: "4 mins" },
      business: { name: "Masdar City", km: "5 km", mins: "8 mins" },
      hospital: { name: "NMC Royal", km: "2 km", mins: "4 mins" }
    }
  },

  // --- 10. SAADIYAT CULTURAL DISTRICT ---
  {
    id: "saadiyat-cultural",
    name: "Saadiyat Cultural District",
    emirate: "Abu Dhabi",
    category: "Ultra Luxury / Art",
    roi: "5.0%",
    avgPrice: "AED 3.6M",
    imageColor: "bg-purple-800",
    amenities: ["Zayed National Museum", "Mamsha", "Abrahamic Family House"],

    investorTags: ["Iconic", "Ultra High Net Worth", "Legacy Asset"],
    aiVerdict: {
      title: "Global Art Capital",
      summary: "Surrounded by the Louvre, Guggenheim, and Zayed National Museum. The most exclusive and culturally significant real estate in the region."
    },
    demandSignals: { rentalDemand: "Medium", resaleLiquidity: "High", tenantProfile: "Art Collectors & VIPs" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 5.0, appreciation: 10.0, liquidity: 7.0, risk: 5.0, lifestyle: 10.0 },
    overallScore: 9.0,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "5.2%", rent: "AED 130k" }, 
      twoBed: { roi: "4.8%", rent: "AED 220k" }
    },

    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1500", occupancy: "70%", tenantType: "Art Tourists" },

    futureUpgrades: [
      { name: "Guggenheim Museum", status: "2026 Opening" },
      { name: "Natural History Museum", status: "Under Construction" }
    ],

    priceTrend: { "2022": "AED 2.8M", "2023": "AED 3.2M", "2024": "AED 3.4M", "2025": "AED 3.6M" },

    description: "The most exclusive address in the capital, home to the Louvre and upcoming Guggenheim.",
    connectivity: {
      airport: { name: "Zayed Intl Airport", km: "28 km", mins: "22 mins" },
      school: { name: "Cranleigh", km: "1 km", mins: "2 mins" },
      tourist: { name: "Louvre Abu Dhabi", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "The Collection", km: "2 km", mins: "5 mins" },
      business: { name: "Abu Dhabi CBD", km: "12 km", mins: "15 mins" },
      hospital: { name: "Cleveland Clinic", km: "10 km", mins: "12 mins" }
    }
  }
];