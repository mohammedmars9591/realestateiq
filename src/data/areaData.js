// ==========================================================
// DUBAI DATA (Top 20 Investment Areas) - FULLY DETAILED
// ==========================================================

export const DUBAI_AREAS = [
  // --- EXISTING TOP 10 (Kept as is) ---
  {
    id: "jvc",
    name: "Jumeirah Village Circle",
    emirate: "Dubai",
    category: "High Yield",
    roi: "7.8%",
    avgPrice: "AED 950k",
    imageColor: "bg-emerald-600",
    amenities: ["Circle Mall", "30+ Parks", "Intl. Schools"],
    scores: { cashFlow: 9.1, appreciation: 7.8, liquidity: 8.5, risk: 6.2, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 55k" }, 
      oneBed: { roi: "7.9%", rent: "AED 75k" }, 
      twoBed: { roi: "6.4%", rent: "AED 105k" } 
    },
    overallScore: 8.4,
    description: "Dubai’s strongest mid-market cash flow zone with high rental demand.",
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
  {
    id: "arjan",
    name: "Arjan",
    emirate: "Dubai",
    category: "High Yield",
    roi: "7.2%",
    avgPrice: "AED 850k",
    imageColor: "bg-teal-600",
    amenities: ["Miracle Garden", "Butterfly Garden", "Parkview Hospital"],
    scores: { cashFlow: 8.5, appreciation: 7.5, liquidity: 6.5, risk: 6.0, lifestyle: 6.5 },
    unitEconomics: { 
      studio: { roi: "7.8%", rent: "AED 50k" }, 
      oneBed: { roi: "7.0%", rent: "AED 70k" }, 
      twoBed: { roi: "6.2%", rent: "AED 95k" } 
    },
    overallScore: 7.9,
    description: "Emerging hotspot with newer buildings and tourist attractions.",
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
  {
    id: "dubai-sports-city",
    name: "Dubai Sports City",
    emirate: "Dubai",
    category: "High Yield",
    roi: "7.4%",
    avgPrice: "AED 650k",
    imageColor: "bg-lime-700",
    amenities: ["Cricket Stadium", "Els Golf Club", "Fit Republik"],
    scores: { cashFlow: 8.2, appreciation: 6.0, liquidity: 7.0, risk: 5.5, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 42k" }, 
      oneBed: { roi: "7.2%", rent: "AED 60k" }, 
      twoBed: { roi: "6.0%", rent: "AED 85k" } 
    },
    overallScore: 7.5,
    description: "Active lifestyle community with budget entry prices and strong yields.",
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
  {
    id: "business-bay",
    name: "Business Bay",
    emirate: "Dubai",
    category: "Prime / Corporate",
    roi: "6.5%",
    avgPrice: "AED 1.6M",
    imageColor: "bg-indigo-700",
    amenities: ["Dubai Canal", "Metro Station", "Bay Avenue"],
    scores: { cashFlow: 7.8, appreciation: 8.5, liquidity: 9.2, risk: 6.2, lifestyle: 9.0 },
    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 85k" }, 
      oneBed: { roi: "6.5%", rent: "AED 115k" }, 
      twoBed: { roi: "5.5%", rent: "AED 160k" } 
    },
    overallScore: 9.0,
    description: "The corporate heart of Dubai with massive demand from professionals.",
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
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    emirate: "Dubai",
    category: "Ultra Prime",
    roi: "5.8%",
    avgPrice: "AED 2.2M",
    imageColor: "bg-gray-800",
    amenities: ["Burj Khalifa", "Dubai Mall", "Dubai Opera"],
    scores: { cashFlow: 6.5, appreciation: 9.0, liquidity: 9.8, risk: 4.5, lifestyle: 10.0 },
    unitEconomics: { 
      studio: { roi: "6.2%", rent: "AED 105k" }, 
      oneBed: { roi: "5.8%", rent: "AED 150k" }, 
      twoBed: { roi: "5.0%", rent: "AED 240k" } 
    },
    overallScore: 9.5,
    description: "The most prestigious square kilometer in the world. Safe, liquid, and iconic.",
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
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    emirate: "Dubai",
    category: "Luxury / Waterfront",
    roi: "6.8%",
    avgPrice: "AED 1.8M",
    imageColor: "bg-blue-600",
    amenities: ["Marina Walk", "Yacht Club", "JBR Beach"],
    scores: { cashFlow: 7.5, appreciation: 8.8, liquidity: 9.5, risk: 5.5, lifestyle: 9.8 },
    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 90k" }, 
      oneBed: { roi: "6.5%", rent: "AED 130k" }, 
      twoBed: { roi: "5.8%", rent: "AED 190k" } 
    },
    overallScore: 9.2,
    description: "The world's largest man-made marina. High occupancy and premium resale values.",
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
  {
    id: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    emirate: "Dubai",
    category: "Future Prime",
    roi: "6.2%",
    avgPrice: "AED 1.9M",
    imageColor: "bg-cyan-600",
    amenities: ["Creek Tower", "Island Park", "Marina"],
    scores: { cashFlow: 6.8, appreciation: 9.5, liquidity: 8.5, risk: 5.8, lifestyle: 9.2 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 80k" }, 
      oneBed: { roi: "6.5%", rent: "AED 110k" }, 
      twoBed: { roi: "6.0%", rent: "AED 165k" } 
    },
    overallScore: 9.1,
    description: "The 'New Downtown'. Massive capital appreciation potential as master plan matures.",
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
  {
    id: "dubai-hills",
    name: "Dubai Hills Estate",
    emirate: "Dubai",
    category: "Premium Family",
    roi: "6.9%",
    avgPrice: "AED 1.7M",
    imageColor: "bg-green-700",
    amenities: ["Dubai Hills Mall", "Central Park", "Golf Club"],
    scores: { cashFlow: 7.0, appreciation: 9.2, liquidity: 9.0, risk: 4.8, lifestyle: 9.5 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 75k" }, 
      oneBed: { roi: "7.1%", rent: "AED 100k" }, 
      twoBed: { roi: "6.5%", rent: "AED 150k" } 
    },
    overallScore: 9.3,
    description: "The 'Green Heart of Dubai'. Extremely popular with families and expats.",
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
  {
    id: "al-furjan",
    name: "Al Furjan",
    emirate: "Dubai",
    category: "Connectivity / Yield",
    roi: "7.6%",
    avgPrice: "AED 900k",
    imageColor: "bg-amber-600",
    amenities: ["Metro Access", "Ibn Battuta Mall", "Community Club"],
    scores: { cashFlow: 8.8, appreciation: 7.0, liquidity: 8.2, risk: 5.8, lifestyle: 7.5 },
    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 52k" }, 
      oneBed: { roi: "7.5%", rent: "AED 78k" }, 
      twoBed: { roi: "6.8%", rent: "AED 110k" } 
    },
    overallScore: 8.1,
    description: "Strategic location near Expo City and Metro line with excellent value.",
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
  {
    id: "meydan",
    name: "Meydan (MBR City)",
    emirate: "Dubai",
    category: "Luxury / Growth",
    roi: "6.4%",
    avgPrice: "AED 1.4M",
    imageColor: "bg-purple-800",
    amenities: ["Racecourse", "Golf Course", "Lagoons"],
    scores: { cashFlow: 6.5, appreciation: 9.0, liquidity: 7.8, risk: 5.5, lifestyle: 9.0 },
    unitEconomics: { 
      studio: { roi: "6.8%", rent: "AED 70k" }, 
      oneBed: { roi: "6.2%", rent: "AED 95k" }, 
      twoBed: { roi: "5.8%", rent: "AED 140k" } 
    },
    overallScore: 8.8,
    description: "Upscale living with crystal lagoons and proximity to Downtown.",
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

  // --- 10 NEW AREAS (NOW WITH DETAILED CONNECTIVITY) ---

  // 11. DUBAI SILICON OASIS
  {
    id: "dso",
    name: "Dubai Silicon Oasis",
    emirate: "Dubai",
    category: "Tech / Affordable",
    roi: "8.1%",
    avgPrice: "AED 550k",
    imageColor: "bg-blue-500",
    amenities: ["DSO Lake", "Silicon Central", "Tech Hub"],
    scores: { cashFlow: 8.8, appreciation: 6.5, liquidity: 8.0, risk: 5.0, lifestyle: 7.5 },
    unitEconomics: { 
      studio: { roi: "8.9%", rent: "AED 45k" }, 
      oneBed: { roi: "8.0%", rent: "AED 65k" }, 
      twoBed: { roi: "7.2%", rent: "AED 90k" } 
    },
    overallScore: 8.2,
    description: "A free zone technology park offering affordable living and high rental yields.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "15 km", mins: "15 mins" },
      school: { name: "GEMS Wellington", km: "2 km", mins: "5 mins" },
      tourist: { name: "Global Village", km: "12 km", mins: "15 mins" },
      metro: { name: "Rashidiya (Bus Link)", km: "15 km", mins: "20 mins" },
      mall: { name: "Silicon Central", km: "1 km", mins: "3 mins" },
      business: { name: "DIFC", km: "15 km", mins: "18 mins" },
      hospital: { name: "Fakeeh University Hospital", km: "1 km", mins: "3 mins" }
    }
  },

  // 12. JUMEIRAH LAKE TOWERS (JLT)
  {
    id: "jlt",
    name: "Jumeirah Lake Towers",
    emirate: "Dubai",
    category: "Corporate / Residential",
    roi: "7.0%",
    avgPrice: "AED 1.1M",
    imageColor: "bg-cyan-700",
    amenities: ["JLT Park", "Metro Stations", "Lakeside Dining"],
    scores: { cashFlow: 7.5, appreciation: 7.2, liquidity: 9.0, risk: 5.5, lifestyle: 8.5 },
    unitEconomics: { 
      studio: { roi: "7.2%", rent: "AED 63k" }, 
      oneBed: { roi: "6.8%", rent: "AED 90k" }, 
      twoBed: { roi: "6.5%", rent: "AED 130k" } 
    },
    overallScore: 8.7,
    description: "High-density free zone opposite Dubai Marina with excellent metro connectivity.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "35 km", mins: "30 mins" },
      school: { name: "Emirates Intl School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Marina Walk", km: "2 km", mins: "5 mins" },
      metro: { name: "DMCC Metro", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Marina Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Media City", km: "3 km", mins: "6 mins" },
      hospital: { name: "Mediclinic Meadows", km: "4 km", mins: "8 mins" }
    }
  },

  // 13. DISCOVERY GARDENS
  {
    id: "discovery-gardens",
    name: "Discovery Gardens",
    emirate: "Dubai",
    category: "Budget / Metro",
    roi: "8.5%",
    avgPrice: "AED 480k",
    imageColor: "bg-green-600",
    amenities: ["Metro Access", "Pavilion Mall", "Community Pools"],
    scores: { cashFlow: 9.2, appreciation: 6.0, liquidity: 8.8, risk: 5.2, lifestyle: 6.0 },
    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 48k" }, 
      oneBed: { roi: "8.2%", rent: "AED 72k" }, 
      twoBed: { roi: "7.5%", rent: "AED 95k" } 
    },
    overallScore: 8.3,
    description: "One of the most affordable areas near the Metro, popular with commuters.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "40 km", mins: "35 mins" },
      school: { name: "The Winchester School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Ibn Battuta Mall", km: "1 km", mins: "3 mins" },
      metro: { name: "The Gardens Metro", km: "0.5 km", mins: "2 mins" },
      mall: { name: "Ibn Battuta Mall", km: "1 km", mins: "3 mins" },
      business: { name: "Jebel Ali Free Zone", km: "5 km", mins: "8 mins" },
      hospital: { name: "Aster Cedars", km: "3 km", mins: "5 mins" }
    }
  },

  // 14. INTERNATIONAL CITY
  {
    id: "international-city",
    name: "International City",
    emirate: "Dubai",
    category: "Ultra Budget / Yield",
    roi: "9.5%",
    avgPrice: "AED 350k",
    imageColor: "bg-red-600",
    amenities: ["Dragon Mart", "Theme Clusters", "Affordable Dining"],
    scores: { cashFlow: 10.0, appreciation: 5.5, liquidity: 8.5, risk: 6.5, lifestyle: 5.0 },
    unitEconomics: { 
      studio: { roi: "9.8%", rent: "AED 32k" }, 
      oneBed: { roi: "9.2%", rent: "AED 45k" }, 
      twoBed: { roi: "8.5%", rent: "AED 65k" } 
    },
    overallScore: 8.0,
    description: "Offers the highest rental yields in Dubai due to very low entry prices.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "15 km", mins: "15 mins" },
      school: { name: "Intl School of Arts", km: "5 km", mins: "10 mins" },
      tourist: { name: "Dragon Mart", km: "1 km", mins: "2 mins" },
      metro: { name: "Rashidiya (Bus Link)", km: "15 km", mins: "20 mins" },
      mall: { name: "Dragon Mart 2", km: "1 km", mins: "2 mins" },
      business: { name: "Dubai Silicon Oasis", km: "8 km", mins: "10 mins" },
      hospital: { name: "Aster Clinic", km: "0.5 km", mins: "2 mins" }
    }
  },

  // 15. DUBAI PRODUCTION CITY (IMPZ)
  {
    id: "impz",
    name: "Dubai Production City",
    emirate: "Dubai",
    category: "Budget / Growth",
    roi: "8.0%",
    avgPrice: "AED 420k",
    imageColor: "bg-slate-600",
    amenities: ["City Centre Meaisem", "Connectivity", "New Projects"],
    scores: { cashFlow: 8.7, appreciation: 6.8, liquidity: 7.5, risk: 5.8, lifestyle: 6.5 },
    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 38k" }, 
      oneBed: { roi: "7.8%", rent: "AED 55k" }, 
      twoBed: { roi: "7.0%", rent: "AED 75k" } 
    },
    overallScore: 7.8,
    description: "Budget-friendly media production zone near Expo City.",
    connectivity: {
      airport: { name: "Al Maktoum Airport", km: "25 km", mins: "20 mins" },
      school: { name: "Sunmarke School", km: "5 km", mins: "10 mins" },
      tourist: { name: "Jumeirah Golf Estates", km: "6 km", mins: "10 mins" },
      metro: { name: "JGE Metro", km: "8 km", mins: "12 mins" },
      mall: { name: "City Centre Meaisem", km: "0.5 km", mins: "1 min" },
      business: { name: "Dubai Media City", km: "15 km", mins: "18 mins" },
      hospital: { name: "NMC Royal", km: "10 km", mins: "12 mins" }
    }
  },

  // 16. DAMAC HILLS 2
  {
    id: "damac-hills-2",
    name: "Damac Hills 2",
    emirate: "Dubai",
    category: "Villa Community",
    roi: "6.2%",
    avgPrice: "AED 1.1M",
    imageColor: "bg-green-800",
    amenities: ["Water Town", "Sports Town", "Community Mall"],
    scores: { cashFlow: 6.5, appreciation: 7.5, liquidity: 7.0, risk: 6.0, lifestyle: 8.0 },
    unitEconomics: { 
      studio: { roi: "6.5%", rent: "AED 35k" }, 
      oneBed: { roi: "6.2%", rent: "AED 55k" }, 
      twoBed: { roi: "6.0%", rent: "AED 75k" } 
    },
    overallScore: 7.5,
    description: "Green, self-contained community offering some of the lowest priced villas in Dubai.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "45 km", mins: "35 mins" },
      school: { name: "South View School", km: "15 km", mins: "15 mins" },
      tourist: { name: "Sevens Stadium", km: "10 km", mins: "10 mins" },
      metro: { name: "No Direct Link", km: "N/A", mins: "N/A" },
      mall: { name: "Dubai Outlet Mall", km: "15 km", mins: "15 mins" },
      business: { name: "Studio City", km: "20 km", mins: "20 mins" },
      hospital: { name: "Saudi German", km: "25 km", mins: "25 mins" }
    }
  },

  // 17. THE GREENS
  {
    id: "the-greens",
    name: "The Greens",
    emirate: "Dubai",
    category: "Established / Leafy",
    roi: "6.5%",
    avgPrice: "AED 1.2M",
    imageColor: "bg-emerald-500",
    amenities: ["The Souk", "Lakes", "Business Park"],
    scores: { cashFlow: 6.8, appreciation: 7.0, liquidity: 8.5, risk: 4.0, lifestyle: 9.2 },
    unitEconomics: { 
      studio: { roi: "6.5%", rent: "AED 70k" }, 
      oneBed: { roi: "6.2%", rent: "AED 100k" }, 
      twoBed: { roi: "5.8%", rent: "AED 150k" } 
    },
    overallScore: 8.9,
    description: "Low-rise, tree-lined community popular with Western expats and professionals.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "30 km", mins: "25 mins" },
      school: { name: "Regent Intl School", km: "1 km", mins: "2 mins" },
      tourist: { name: "Palm Jumeirah", km: "5 km", mins: "10 mins" },
      metro: { name: "Dubai Internet City", km: "1 km", mins: "3 mins" },
      mall: { name: "Mall of Emirates", km: "5 km", mins: "8 mins" },
      business: { name: "Internet City", km: "0.5 km", mins: "2 mins" },
      hospital: { name: "Saudi German", km: "3 km", mins: "5 mins" }
    }
  },

  // 18. DUBAI SOUTH
  {
    id: "dubai-south",
    name: "Dubai South",
    emirate: "Dubai",
    category: "Future / Airport",
    roi: "7.5%",
    avgPrice: "AED 600k",
    imageColor: "bg-amber-700",
    amenities: ["Al Maktoum Airport", "Expo City", "Logistics Hub"],
    scores: { cashFlow: 7.8, appreciation: 9.0, liquidity: 7.0, risk: 5.5, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 40k" }, 
      oneBed: { roi: "7.5%", rent: "AED 60k" }, 
      twoBed: { roi: "7.0%", rent: "AED 80k" } 
    },
    overallScore: 8.1,
    description: "Built around the world's largest future airport, offering massive long-term growth.",
    connectivity: {
      airport: { name: "Al Maktoum Airport", km: "5 km", mins: "5 mins" },
      school: { name: "Greenfield Intl", km: "15 km", mins: "15 mins" },
      tourist: { name: "Expo City", km: "10 km", mins: "10 mins" },
      metro: { name: "Expo 2020", km: "10 km", mins: "10 mins" },
      mall: { name: "Ibn Battuta Mall", km: "20 km", mins: "20 mins" },
      business: { name: "Logistics District", km: "5 km", mins: "5 mins" },
      hospital: { name: "NMC Royal", km: "15 km", mins: "15 mins" }
    }
  },

  // 19. REMRAAM
  {
    id: "remraam",
    name: "Remraam",
    emirate: "Dubai",
    category: "Budget / Family",
    roi: "7.1%",
    avgPrice: "AED 550k",
    imageColor: "bg-orange-500",
    amenities: ["South View School", "Community Pools", "Parks"],
    scores: { cashFlow: 7.5, appreciation: 6.0, liquidity: 7.2, risk: 5.8, lifestyle: 7.5 },
    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 38k" }, 
      oneBed: { roi: "7.0%", rent: "AED 58k" }, 
      twoBed: { roi: "6.8%", rent: "AED 82k" } 
    },
    overallScore: 7.6,
    description: "Quiet, budget-friendly gated community located in Dubailand.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "35 km", mins: "30 mins" },
      school: { name: "South View School", km: "1 km", mins: "2 mins" },
      tourist: { name: "Trump Golf Course", km: "3 km", mins: "5 mins" },
      metro: { name: "Jumeirah Golf Est", km: "10 km", mins: "12 mins" },
      mall: { name: "First Avenue Mall", km: "6 km", mins: "8 mins" },
      business: { name: "Studio City", km: "5 km", mins: "6 mins" },
      hospital: { name: "Mediclinic Parkview", km: "8 km", mins: "10 mins" }
    }
  },

  // 20. MOTOR CITY
  {
    id: "motor-city",
    name: "Motor City",
    emirate: "Dubai",
    category: "Family / Active",
    roi: "7.0%",
    avgPrice: "AED 900k",
    imageColor: "bg-red-700",
    amenities: ["Autodrome", "First Avenue Mall", "Green Spaces"],
    scores: { cashFlow: 7.2, appreciation: 6.5, liquidity: 8.0, risk: 4.8, lifestyle: 8.8 },
    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 50k" }, 
      oneBed: { roi: "7.0%", rent: "AED 75k" }, 
      twoBed: { roi: "6.5%", rent: "AED 110k" } 
    },
    overallScore: 8.4,
    description: "Cobbled streets and spacious apartments centered around a motorsport theme.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "30 km", mins: "25 mins" },
      school: { name: "GEMS Metropole", km: "1 km", mins: "2 mins" },
      tourist: { name: "Dubai Autodrome", km: "0.5 km", mins: "1 min" },
      metro: { name: "Mall of Emirates", km: "12 km", mins: "15 mins" },
      mall: { name: "First Avenue Mall", km: "0.5 km", mins: "1 min" },
      business: { name: "Studio City", km: "2 km", mins: "3 mins" },
      hospital: { name: "Prime Medical Ctr", km: "1 km", mins: "2 mins" }
    }
  }
];