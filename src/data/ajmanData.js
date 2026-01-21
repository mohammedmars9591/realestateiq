// ==========================================================
// AJMAN DATA (Top 10 Investment Areas 2026)
// ==========================================================

export const AJMAN_DATA = [
  // --- 1. AJMAN DOWNTOWN ---
  {
    id: "ajman-downtown",
    name: "Ajman Downtown",
    emirate: "Ajman",
    category: "High Yield / City Center",
    roi: "9.4%", //
    avgPrice: "AED 350k",
    imageColor: "bg-emerald-600",
    amenities: ["City Centre Ajman", "Ajman Hospital", "Safeer Mall"],
    scores: { cashFlow: 9.5, appreciation: 7.0, liquidity: 9.0, risk: 5.5, lifestyle: 8.0 },
    unitEconomics: { 
      studio: { roi: "9.8%", rent: "AED 22k" }, //
      oneBed: { roi: "9.2%", rent: "AED 32k" }, 
      twoBed: { roi: "8.5%", rent: "AED 45k" } 
    },
    overallScore: 8.8,
    description: "The vibrant heart of the emirate. Offers some of the highest rental yields in the UAE due to affordable entry prices.",
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
    roi: "6.2%", //
    avgPrice: "AED 2.1M (Apt)", //
    imageColor: "bg-teal-700",
    amenities: ["Oberoi Resort", "Golf Club", "Mangroves"],
    scores: { cashFlow: 6.0, appreciation: 9.5, liquidity: 7.5, risk: 4.5, lifestyle: 10.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 55k" }, 
      oneBed: { roi: "6.5%", rent: "AED 85k" }, 
      twoBed: { roi: "6.0%", rent: "AED 130k" } 
    },
    overallScore: 9.2,
    description: "A premium coastal destination with mangroves and a championship golf course. High capital appreciation potential.",
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
    roi: "7.9%", //
    avgPrice: "AED 280k", //
    imageColor: "bg-blue-600",
    amenities: ["Easy Highway Access", "Hypermarkets", "Parks"],
    scores: { cashFlow: 8.5, appreciation: 6.5, liquidity: 8.0, risk: 5.8, lifestyle: 6.5 },
    unitEconomics: { 
      studio: { roi: "8.2%", rent: "AED 18k" }, 
      oneBed: { roi: "7.9%", rent: "AED 26k" }, 
      twoBed: { roi: "7.5%", rent: "AED 36k" } 
    },
    overallScore: 8.0,
    description: "Located on Sheikh Mohammed Bin Zayed Road. Popular with commuters to Dubai offering unbeatable value.",
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

  // --- 4. AJMAN CORNICHE ---
  {
    id: "ajman-corniche",
    name: "Ajman Corniche",
    emirate: "Ajman",
    category: "Waterfront / Tourist",
    roi: "6.5%", //
    avgPrice: "AED 850k", //
    imageColor: "bg-cyan-600",
    amenities: ["Beach Access", "5-Star Hotels", "Restaurants"],
    scores: { cashFlow: 7.0, appreciation: 8.0, liquidity: 8.5, risk: 5.0, lifestyle: 9.0 },
    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 35k" }, 
      oneBed: { roi: "6.5%", rent: "AED 55k" }, 
      twoBed: { roi: "6.0%", rent: "AED 80k" } 
    },
    overallScore: 8.5,
    description: "Premium beachfront living with open sea views. Popular for holiday homes and long-term luxury rentals.",
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

  // --- 5. AL NUAIMIYA ---
  {
    id: "al-nuaimiya",
    name: "Al Nuaimiya",
    emirate: "Ajman",
    category: "High Demand / Border",
    roi: "8.5%", //
    avgPrice: "AED 380k", //
    imageColor: "bg-indigo-600",
    amenities: ["Sharjah Border", "Safeer Mall", "Schools"],
    scores: { cashFlow: 9.0, appreciation: 6.5, liquidity: 9.2, risk: 5.2, lifestyle: 7.5 },
    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 20k" }, //
      oneBed: { roi: "8.5%", rent: "AED 28k" }, //
      twoBed: { roi: "8.0%", rent: "AED 39k" } //
    },
    overallScore: 8.4,
    description: "Located on the Ajman-Sharjah border. Extremely high occupancy due to commuters working in Sharjah/Dubai.",
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

  // --- 6. AL RASHIDIYA ---
  {
    id: "al-rashidiya",
    name: "Al Rashidiya",
    emirate: "Ajman",
    category: "Family / Established",
    roi: "8.7%", //
    avgPrice: "AED 550k", //
    imageColor: "bg-amber-600",
    amenities: ["Rashidiya Park", "Fish Market", "Grand Mall"],
    scores: { cashFlow: 8.8, appreciation: 7.5, liquidity: 8.5, risk: 5.0, lifestyle: 8.2 },
    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 19k" }, //
      oneBed: { roi: "8.5%", rent: "AED 29k" }, //
      twoBed: { roi: "8.0%", rent: "AED 41k" } //
    },
    overallScore: 8.6,
    description: "Established family district with high-rise towers like Ajman One. Close to the beach and stadium.",
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

  // --- 7. AL YASMEEN ---
  {
    id: "al-yasmeen",
    name: "Al Yasmeen",
    emirate: "Ajman",
    category: "Villa / Freehold",
    roi: "6.0%", //
    avgPrice: "AED 1.4M (Villa)", //
    imageColor: "bg-green-700",
    amenities: ["Al Helio Park", "Garden City", "Mosques"],
    scores: { cashFlow: 6.5, appreciation: 8.5, liquidity: 7.0, risk: 5.0, lifestyle: 8.8 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 25k" }, 
      twoBed: { roi: "6.2%", rent: "AED 40k" } 
    },
    overallScore: 8.2,
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

  // --- 8. GARDEN CITY ---
  {
    id: "garden-city",
    name: "Garden City",
    emirate: "Ajman",
    category: "Budget / Green",
    roi: "9.3%", //
    avgPrice: "AED 395k", //
    imageColor: "bg-lime-600",
    amenities: ["Green Spaces", "Community Center", "Low Rise"],
    scores: { cashFlow: 9.5, appreciation: 6.0, liquidity: 7.5, risk: 5.5, lifestyle: 7.2 },
    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 18k" }, 
      oneBed: { roi: "9.2%", rent: "AED 25k" }, 
      twoBed: { roi: "8.8%", rent: "AED 34k" } 
    },
    overallScore: 8.3,
    description: "Known as the 'Greenest' community in Ajman. Offers excellent ROI for low-rise apartment investors.",
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

  // --- 9. AL RAWDA ---
  {
    id: "al-rawda",
    name: "Al Rawda",
    emirate: "Ajman",
    category: "Residential / Value",
    roi: "6.5%", //
    avgPrice: "AED 500k",
    imageColor: "bg-orange-600",
    amenities: ["Restaurants", "Schools", "Family Parks"],
    scores: { cashFlow: 7.5, appreciation: 7.2, liquidity: 8.0, risk: 5.0, lifestyle: 7.8 },
    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 16k" }, 
      oneBed: { roi: "7.0%", rent: "AED 24k" }, 
      twoBed: { roi: "6.5%", rent: "AED 34k" } //
    },
    overallScore: 8.1,
    description: "A densely populated area offering affordable rentals. High footfall and vibrant street life.",
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
    scores: { cashFlow: 8.0, appreciation: 6.8, liquidity: 7.5, risk: 5.2, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 24k" }, //
      oneBed: { roi: "7.5%", rent: "AED 30k" }, //
      twoBed: { roi: "7.0%", rent: "AED 40k" } //
    },
    overallScore: 7.9,
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