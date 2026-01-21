// ==========================================================
// ABU DHABI DATA (Top 10 Investment Areas 2026)
// ==========================================================

export const ABUDHABI_DATA = [
  // --- 1. AL REEM ISLAND ---
  {
    id: "al-reem-island",
    name: "Al Reem Island",
    emirate: "Abu Dhabi",
    category: "High Yield / Waterfront",
    roi: "8.5%", //
    avgPrice: "AED 1.3M", //
    imageColor: "bg-blue-600",
    amenities: ["Reem Central Park", "Shams Boutik", "Sorbonne University"],
    scores: { cashFlow: 8.8, appreciation: 7.5, liquidity: 9.2, risk: 5.0, lifestyle: 8.5 },
    unitEconomics: { 
      studio: { roi: "8.9%", rent: "AED 65k" }, //
      oneBed: { roi: "8.2%", rent: "AED 91k" }, //
      twoBed: { roi: "7.5%", rent: "AED 128k" } //
    },
    overallScore: 8.9,
    description: "The most popular investment zone in Abu Dhabi. High rental demand from professionals due to proximity to ADGM.",
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
    roi: "7.3%", //
    avgPrice: "AED 1.6M", //
    imageColor: "bg-red-700",
    amenities: ["Ferrari World", "Yas Mall", "F1 Circuit", "SeaWorld"],
    scores: { cashFlow: 7.2, appreciation: 9.0, liquidity: 8.5, risk: 5.5, lifestyle: 9.8 },
    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 60k" }, //
      oneBed: { roi: "7.1%", rent: "AED 85k" }, //
      twoBed: { roi: "6.5%", rent: "AED 130k" } //
    },
    overallScore: 9.2,
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
    roi: "5.6%", //
    avgPrice: "AED 2.8M", //
    imageColor: "bg-teal-700",
    amenities: ["Louvre Abu Dhabi", "Soul Beach", "Guggenheim (Upcoming)"],
    scores: { cashFlow: 6.0, appreciation: 9.8, liquidity: 7.5, risk: 4.5, lifestyle: 10.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 90k" }, 
      oneBed: { roi: "5.8%", rent: "AED 115k" }, //
      twoBed: { roi: "5.5%", rent: "AED 179k" } //
    },
    overallScore: 9.5,
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
    roi: "6.4%", //
    avgPrice: "AED 1.4M", //
    imageColor: "bg-cyan-600",
    amenities: ["Al Raha Mall", "Canal Promenade", "Etihad Plaza"],
    scores: { cashFlow: 6.8, appreciation: 7.5, liquidity: 8.0, risk: 5.5, lifestyle: 8.8 },
    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 70k" }, //
      oneBed: { roi: "6.5%", rent: "AED 95k" }, //
      twoBed: { roi: "6.2%", rent: "AED 140k" } //
    },
    overallScore: 8.6,
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
    roi: "8.4%", //
    avgPrice: "AED 850k",
    imageColor: "bg-emerald-600",
    amenities: ["Tech Park", "My City Centre", "Personal Rapid Transit"],
    scores: { cashFlow: 8.5, appreciation: 7.2, liquidity: 7.8, risk: 5.2, lifestyle: 8.0 },
    unitEconomics: { 
      studio: { roi: "8.2%", rent: "AED 55k" }, //
      oneBed: { roi: "7.5%", rent: "AED 75k" }, //
      twoBed: { roi: "6.5%", rent: "AED 100k" } //
    },
    overallScore: 8.3,
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
    roi: "8.7%", //
    avgPrice: "AED 600k",
    imageColor: "bg-lime-600",
    amenities: ["Harvest", "The Hub", "Community Farm"],
    scores: { cashFlow: 9.0, appreciation: 6.0, liquidity: 7.5, risk: 5.8, lifestyle: 7.0 },
    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 45k" }, //
      oneBed: { roi: "8.5%", rent: "AED 58k" }, //
      twoBed: { roi: "7.8%", rent: "AED 85k" } //
    },
    overallScore: 8.0,
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
    roi: "9.5%", //
    avgPrice: "AED 750k",
    imageColor: "bg-amber-600",
    amenities: ["Al Reef Downtown", "Villas", "Community Pools"],
    scores: { cashFlow: 9.5, appreciation: 5.8, liquidity: 8.8, risk: 5.0, lifestyle: 7.2 },
    unitEconomics: { 
      studio: { roi: "9.8%", rent: "AED 52k" }, //
      oneBed: { roi: "9.2%", rent: "AED 72k" }, //
      twoBed: { roi: "8.5%", rent: "AED 95k" } //
    },
    overallScore: 8.4,
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
    roi: "8.5%", //
    avgPrice: "AED 1.8M", //
    imageColor: "bg-indigo-700",
    amenities: ["Galleria Mall", "Cleveland Clinic", "Rosewood Hotel"],
    scores: { cashFlow: 8.0, appreciation: 8.2, liquidity: 7.8, risk: 5.2, lifestyle: 9.5 },
    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 75k" }, 
      oneBed: { roi: "7.0%", rent: "AED 95k" }, //
      twoBed: { roi: "6.5%", rent: "AED 150k" } //
    },
    overallScore: 8.8,
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
    roi: "6.0%", //
    avgPrice: "AED 3.5M (Villa)",
    imageColor: "bg-orange-600",
    amenities: ["Pink Shops", "Golf Club", "Spacious Villas"],
    scores: { cashFlow: 6.0, appreciation: 7.0, liquidity: 8.0, risk: 4.8, lifestyle: 8.2 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 35k" }, 
      oneBed: { roi: "N/A", rent: "AED 50k" }, 
      twoBed: { roi: "6.0%", rent: "AED 75k" }
    },
    overallScore: 7.9,
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
    avgPrice: "AED 3.6M", //
    imageColor: "bg-purple-800",
    amenities: ["Zayed National Museum", "Mamsha", "Abrahamic Family House"],
    scores: { cashFlow: 5.0, appreciation: 10.0, liquidity: 7.0, risk: 5.0, lifestyle: 10.0 },
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "5.2%", rent: "AED 130k" }, 
      twoBed: { roi: "4.8%", rent: "AED 220k" }
    },
    overallScore: 9.0,
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