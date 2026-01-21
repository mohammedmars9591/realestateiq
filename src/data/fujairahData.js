// ==========================================================
// FUJAIRAH DATA (Top 10 Investment Areas 2026)
// ==========================================================

export const FUJAIRAH_DATA = [
  // --- 1. AL AQAH ---
  {
    id: "al-aqah",
    name: "Al Aqah",
    emirate: "Fujairah",
    category: "Tourism / Resort",
    roi: "8.2%", // High short-term rental yield
    avgPrice: "AED 1.2M",
    imageColor: "bg-cyan-800",
    amenities: ["Snoopy Island", "5-Star Resorts", "Diving Centers"],
    scores: { cashFlow: 8.5, appreciation: 7.0, liquidity: 6.5, risk: 6.0, lifestyle: 9.5 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 400/night" }, 
      oneBed: { roi: "8.5%", rent: "AED 600/night" }, 
      twoBed: { roi: "8.0%", rent: "AED 900/night" } 
    },
    overallScore: 8.4,
    description: "The crown jewel of Fujairah tourism. Prime location for holiday homes and diving retreats.",
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

  // --- 2. FUJAIRAH CITY CENTER ---
  {
    id: "fujairah-city",
    name: "Fujairah City Center",
    emirate: "Fujairah",
    category: "Commercial / Residential",
    roi: "7.8%",
    avgPrice: "AED 450k",
    imageColor: "bg-blue-800",
    amenities: ["City Centre Mall", "Fujairah Fort", "Grand Mosque"],
    scores: { cashFlow: 8.0, appreciation: 5.5, liquidity: 8.5, risk: 4.5, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "8.2%", rent: "AED 28k" }, 
      oneBed: { roi: "7.8%", rent: "AED 40k" }, 
      twoBed: { roi: "7.0%", rent: "AED 55k" } 
    },
    overallScore: 7.9,
    description: "The commercial heart of the emirate. Steady demand from professionals working in the port and oil sectors.",
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

  // --- 3. DIBBA ---
  {
    id: "dibba",
    name: "Dibba",
    emirate: "Fujairah",
    category: "Holiday / Nature",
    roi: "7.5%",
    avgPrice: "AED 850k (Villa)",
    imageColor: "bg-teal-700",
    amenities: ["Camping Spots", "Mountains", "Farmhouses"],
    scores: { cashFlow: 7.8, appreciation: 6.5, liquidity: 6.0, risk: 5.5, lifestyle: 8.5 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 35k" }, 
      twoBed: { roi: "7.5%", rent: "AED 60k" } 
    },
    overallScore: 7.6,
    description: "Famous for its farmhouses and camping sites. High weekend rental demand from UAE residents.",
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
    scores: { cashFlow: 6.0, appreciation: 7.0, liquidity: 7.5, risk: 4.0, lifestyle: 8.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 45k" }, 
      twoBed: { roi: "6.5%", rent: "AED 70k" } 
    },
    overallScore: 8.1,
    description: "Upscale villa community near the beach, preferred by affluent locals and senior expats.",
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

  // --- 5. CORNICHE AREA ---
  {
    id: "fujairah-corniche",
    name: "Fujairah Corniche",
    emirate: "Fujairah",
    category: "Waterfront / City",
    roi: "7.0%",
    avgPrice: "AED 600k",
    imageColor: "bg-cyan-600",
    amenities: ["Beach Promenade", "Hotels", "Restaurants"],
    scores: { cashFlow: 7.2, appreciation: 6.5, liquidity: 8.0, risk: 4.8, lifestyle: 8.8 },
    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 35k" }, 
      oneBed: { roi: "7.0%", rent: "AED 50k" }, 
      twoBed: { roi: "6.5%", rent: "AED 75k" } 
    },
    overallScore: 8.0,
    description: "Prime waterfront real estate offering city convenience with sea views.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "4 km", mins: "8 mins" },
      school: { name: "Our Own English", km: "4 km", mins: "8 mins" },
      tourist: { name: "Bull Ring", km: "2 km", mins: "5 mins" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Lulu Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Business Towers", km: "1 km", mins: "2 mins" },
      hospital: { name: "Thumbay Hospital", km: "3 km", mins: "6 mins" }
    }
  },

  // --- 6. SAKAKAM ---
  {
    id: "sakakam",
    name: "Sakakam",
    emirate: "Fujairah",
    category: "Budget / Staff",
    roi: "8.5%",
    avgPrice: "AED 350k",
    imageColor: "bg-slate-600",
    amenities: ["Affordable Housing", "Mountain Views", "Football Club"],
    scores: { cashFlow: 9.0, appreciation: 5.0, liquidity: 7.0, risk: 5.5, lifestyle: 5.5 },
    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 22k" }, 
      oneBed: { roi: "8.5%", rent: "AED 32k" }, 
      twoBed: { roi: "8.0%", rent: "AED 45k" } 
    },
    overallScore: 7.5,
    description: "Budget-friendly area north of the city. High demand for affordable staff accommodation.",
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
    scores: { cashFlow: 7.0, appreciation: 6.8, liquidity: 6.0, risk: 5.5, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "7.0%", rent: "AED 30k" }, 
      twoBed: { roi: "6.5%", rent: "AED 45k" } 
    },
    overallScore: 7.2,
    description: "Quiet coastal town halfway between Fujairah City and Khor Fakkan. Growing residential demand.",
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

  // --- 8. CREATIVE CITY ---
  {
    id: "creative-city",
    name: "Creative City Area",
    emirate: "Fujairah",
    category: "Business / Media",
    roi: "8.0%",
    avgPrice: "AED 500k",
    imageColor: "bg-purple-700",
    amenities: ["Media Offices", "Studios", "Commercial Hub"],
    scores: { cashFlow: 8.5, appreciation: 6.5, liquidity: 7.5, risk: 5.0, lifestyle: 6.5 },
    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 30k" }, 
      oneBed: { roi: "8.0%", rent: "AED 42k" }, 
      twoBed: { roi: "7.5%", rent: "AED 58k" } 
    },
    overallScore: 7.8,
    description: "Located near the Creative City Free Zone. Strong rental demand from media companies and staff.",
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

  // --- 9. QIDFA ---
  {
    id: "qidfa",
    name: "Qidfa",
    emirate: "Fujairah",
    category: "Industrial / Staff",
    roi: "9.0%",
    avgPrice: "AED 400k (Plot)",
    imageColor: "bg-amber-700",
    amenities: ["Power Station", "Desalination Plant", "Beach"],
    scores: { cashFlow: 9.5, appreciation: 4.5, liquidity: 5.5, risk: 6.0, lifestyle: 4.5 },
    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 20k" }, 
      oneBed: { roi: "9.0%", rent: "AED 28k" }, 
      twoBed: { roi: "8.5%", rent: "AED 38k" } 
    },
    overallScore: 7.0,
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

  // --- 10. MASAFI ---
  {
    id: "masafi",
    name: "Masafi",
    emirate: "Fujairah",
    category: "Heritage / Market",
    roi: "6.5%",
    avgPrice: "AED 900k (Farm)",
    imageColor: "bg-green-700",
    amenities: ["Friday Market", "Springs", "Mountains"],
    scores: { cashFlow: 6.5, appreciation: 5.5, liquidity: 5.0, risk: 5.5, lifestyle: 7.5 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 25k" }, 
      twoBed: { roi: "6.5%", rent: "AED 40k" } 
    },
    overallScore: 7.3,
    description: "Famous for its natural springs and Friday Market. Niche market for agricultural and holiday farms.",
    connectivity: {
      airport: { name: "Fujairah Intl", km: "30 km", mins: "25 mins" },
      school: { name: "Masafi School", km: "1 km", mins: "2 mins" },
      tourist: { name: "Friday Market", km: "0.5 km", mins: "1 min" },
      metro: { name: "N/A", km: "N/A", mins: "N/A" },
      mall: { name: "Local Souq", km: "0.5 km", mins: "1 min" },
      business: { name: "Water Factory", km: "2 km", mins: "4 mins" },
      hospital: { name: "Masafi Hospital", km: "1 km", mins: "2 mins" }
    }
  }
];