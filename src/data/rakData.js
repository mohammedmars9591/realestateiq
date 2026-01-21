// ==========================================================
// RAS AL KHAIMAH DATA (Top 10 Investment Areas 2026)
// ==========================================================

export const RAK_DATA = [
  // --- 1. AL MARJAN ISLAND ---
  {
    id: "al-marjan-island",
    name: "Al Marjan Island",
    emirate: "Ras Al Khaimah",
    category: "Luxury / Casino",
    roi: "9.0%", //
    avgPrice: "AED 1.8M", //
    imageColor: "bg-purple-600",
    amenities: ["Wynn Casino", "Private Beaches", "5-Star Hotels"],
    scores: { cashFlow: 8.5, appreciation: 10.0, liquidity: 9.0, risk: 6.5, lifestyle: 9.5 },
    unitEconomics: { 
      studio: { roi: "9.2%", rent: "AED 45k" }, //
      oneBed: { roi: "8.8%", rent: "AED 75k" }, //
      twoBed: { roi: "8.0%", rent: "AED 110k" } //
    },
    overallScore: 9.6,
    description: "Home to the upcoming Wynn Resort & Casino. The #1 hotspot for capital appreciation in the UAE.",
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

  // --- 2. AL HAMRA VILLAGE ---
  {
    id: "al-hamra-village",
    name: "Al Hamra Village",
    emirate: "Ras Al Khaimah",
    category: "Golf / Marina",
    roi: "7.5%", //
    avgPrice: "AED 950k", //
    imageColor: "bg-emerald-600",
    amenities: ["Championship Golf Course", "Marina", "Al Hamra Mall"],
    scores: { cashFlow: 7.8, appreciation: 7.0, liquidity: 8.0, risk: 5.5, lifestyle: 8.5 },
    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 38k" }, //
      oneBed: { roi: "7.5%", rent: "AED 55k" }, //
      twoBed: { roi: "7.0%", rent: "AED 85k" } //
    },
    overallScore: 8.4,
    description: "Established expat community with championship golf course, marina, and 42% villa price growth in 2025.",
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

  // --- 3. MINA AL ARAB ---
  {
    id: "mina-al-arab",
    name: "Mina Al Arab",
    emirate: "Ras Al Khaimah",
    category: "Eco-Luxury / Resort",
    roi: "6.0%", //
    avgPrice: "AED 1.2M",
    imageColor: "bg-teal-600",
    amenities: ["Maldives-style Villas", "Anantara Resort", "Mangroves"],
    scores: { cashFlow: 6.5, appreciation: 8.5, liquidity: 7.5, risk: 5.0, lifestyle: 9.2 },
    unitEconomics: { 
      studio: { roi: "6.5%", rent: "AED 40k" }, 
      oneBed: { roi: "6.0%", rent: "AED 65k" }, 
      twoBed: { roi: "5.5%", rent: "AED 95k" } 
    },
    overallScore: 8.8,
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

  // --- 4. HAYAT ISLAND ---
  {
    id: "hayat-island",
    name: "Hayat Island",
    emirate: "Ras Al Khaimah",
    category: "Resort Living",
    roi: "7.5%", //
    avgPrice: "AED 1.1M", //
    imageColor: "bg-cyan-500",
    amenities: ["Angel Bay", "Beach Club", "InterContinental"],
    scores: { cashFlow: 7.8, appreciation: 8.0, liquidity: 7.5, risk: 5.5, lifestyle: 9.0 },
    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 45k" }, 
      oneBed: { roi: "7.5%", rent: "AED 70k" }, 
      twoBed: { roi: "7.0%", rent: "AED 105k" } 
    },
    overallScore: 8.5,
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

  // --- 5. YASMIN VILLAGE ---
  {
    id: "yasmin-village",
    name: "Yasmin Village",
    emirate: "Ras Al Khaimah",
    category: "High Yield / Budget",
    roi: "12.0%", //
    avgPrice: "AED 450k",
    imageColor: "bg-orange-600",
    amenities: ["Mountain Views", "Hiking Trails", "Community Lake"],
    scores: { cashFlow: 10.0, appreciation: 5.5, liquidity: 7.0, risk: 6.0, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "12.5%", rent: "AED 28k" }, 
      oneBed: { roi: "11.8%", rent: "AED 42k" }, 
      twoBed: { roi: "10.5%", rent: "AED 60k" } 
    },
    overallScore: 8.2,
    description: "The highest rental yield hotspot in RAK (up to 12%). Ideal for pure cash-flow investors.",
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

  // --- 6. JULPHAR TOWERS ---
  {
    id: "julphar-towers",
    name: "Julphar Towers",
    emirate: "Ras Al Khaimah",
    category: "Business / Views",
    roi: "7.0%", //
    avgPrice: "AED 600k",
    imageColor: "bg-blue-800",
    amenities: ["Mangrove Views", "City Centre", "Offices"],
    scores: { cashFlow: 7.5, appreciation: 6.0, liquidity: 8.0, risk: 5.0, lifestyle: 6.5 },
    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 32k" }, 
      oneBed: { roi: "7.0%", rent: "AED 48k" }, 
      twoBed: { roi: "6.5%", rent: "AED 72k" } 
    },
    overallScore: 7.9,
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

  // --- 7. RAK CENTRAL ---
  {
    id: "rak-central",
    name: "RAK Central",
    emirate: "Ras Al Khaimah",
    category: "Future CBD",
    roi: "8.0%", //
    avgPrice: "AED 800k (Off-plan)",
    imageColor: "bg-indigo-700",
    amenities: ["Business Hub", "High-Rise Living", "Retail Plaza"],
    scores: { cashFlow: 7.5, appreciation: 9.0, liquidity: 7.0, risk: 6.0, lifestyle: 8.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "8.2% (Proj)", rent: "AED 60k" }, 
      twoBed: { roi: "7.8% (Proj)", rent: "AED 90k" } 
    },
    overallScore: 8.3,
    description: "The upcoming Central Business District of RAK. Massive growth potential for early investors.",
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

  // --- 8. AL RAMS ---
  {
    id: "al-rams",
    name: "Al Rams",
    emirate: "Ras Al Khaimah",
    category: "Budget / Heritage",
    roi: "6.5%",
    avgPrice: "AED 1.1M (Villa)", //
    imageColor: "bg-amber-700",
    amenities: ["Corniche", "Dhayah Fort", "Traditional Souq"],
    scores: { cashFlow: 7.0, appreciation: 5.5, liquidity: 6.5, risk: 5.5, lifestyle: 6.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "AED 35k" }, 
      twoBed: { roi: "6.8%", rent: "AED 50k" } 
    },
    overallScore: 7.4,
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
    scores: { cashFlow: 10.0, appreciation: 5.0, liquidity: 6.0, risk: 6.5, lifestyle: 4.0 },
    unitEconomics: { 
      studio: { roi: "10.0%", rent: "AED 20k" }, 
      oneBed: { roi: "9.2%", rent: "AED 30k" }, 
      twoBed: { roi: "N/A", rent: "N/A" } 
    },
    overallScore: 7.2,
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
    roi: "8.0%", // Tourism dependent
    avgPrice: "AED 2.5M (Chalet)",
    imageColor: "bg-stone-600",
    amenities: ["Zipline", "Hiking Trails", "Mountain Lodge"],
    scores: { cashFlow: 8.5, appreciation: 7.5, liquidity: 6.0, risk: 6.5, lifestyle: 9.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 300/night" }, 
      oneBed: { roi: "8.5%", rent: "AED 500/night" }, 
      twoBed: { roi: "8.0%", rent: "AED 800/night" } 
    },
    overallScore: 8.1,
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