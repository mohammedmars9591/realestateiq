export const DUBAI_AREAS = [
  // ==========================================
  // 1. HIGH YIELD / BUDGET
  // ==========================================
  {
    id: "jvc",
    name: "Jumeirah Village Circle",
    category: "High Yield",
    roi: "7.8%",
    avgPrice: "AED 950k",
    imageColor: "bg-emerald-600",
    amenities: ["Circle Mall", "30+ Parks", "Intl. Schools"],
    scores: { cashFlow: 9.1, appreciation: 7.8, liquidity: 8.5, risk: 6.2, lifestyle: 7.0 },
    unitEconomics: { studio: { roi: "8.5%" }, oneBed: { roi: "7.9%" }, twoBed: { roi: "6.4%" } },
    overallScore: 8.4,
    description: "Dubai’s strongest mid-market cash flow zone.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "28 km", mins: "25 mins" },
      school: { name: "JSS Intl School", km: "1.2 km", mins: "4 mins" },
      tourist: { name: "Miracle Garden", km: "6 km", mins: "9 mins" },
      metro: { name: "Mall of Emirates", km: "10 km", mins: "14 mins" },
      mall: { name: "Circle Mall", km: "0.5 km", mins: "2 mins" },
      business: { name: "Business Bay", km: "18 km", mins: "20 mins" },
      hospital: { name: "Mediclinic Parkview", km: "5 km", mins: "8 mins" } // NEW
    }
  },
  {
    id: "arjan",
    name: "Arjan",
    category: "High Yield",
    roi: "7.2%",
    avgPrice: "AED 850k",
    imageColor: "bg-teal-600",
    amenities: ["Miracle Garden", "Butterfly Garden", "Parkview Hospital"],
    scores: { cashFlow: 8.5, appreciation: 7.5, liquidity: 6.5, risk: 6.0, lifestyle: 6.5 },
    unitEconomics: { studio: { roi: "7.8%" }, oneBed: { roi: "7.0%" }, twoBed: { roi: "6.2%" } },
    overallScore: 7.9,
    description: "Emerging hotspot with newer buildings than JVC.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "29 km", mins: "26 mins" },
      school: { name: "Nord Anglia School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Butterfly Garden", km: "1 km", mins: "2 mins" },
      metro: { name: "Mall of Emirates", km: "11 km", mins: "15 mins" },
      mall: { name: "Dubai Hills Mall", km: "6 km", mins: "9 mins" },
      business: { name: "Business Bay", km: "19 km", mins: "22 mins" },
      hospital: { name: "Mediclinic Parkview", km: "0.5 km", mins: "2 mins" } // NEW
    }
  },
  {
    id: "dubai-sports-city",
    name: "Dubai Sports City",
    category: "High Yield",
    roi: "7.4%",
    avgPrice: "AED 650k",
    imageColor: "bg-lime-700",
    amenities: ["Cricket Stadium", "Els Golf Club", "Fit Republik"],
    scores: { cashFlow: 8.2, appreciation: 6.0, liquidity: 7.0, risk: 5.5, lifestyle: 7.0 },
    unitEconomics: { studio: { roi: "8.0%" }, oneBed: { roi: "7.2%" }, twoBed: { roi: "6.0%" } },
    overallScore: 7.5,
    description: "Active lifestyle community with budget entry prices.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "30 km", mins: "28 mins" },
      school: { name: "Victory Heights", km: "1 km", mins: "3 mins" },
      tourist: { name: "Dubai Autodrome", km: "3 km", mins: "6 mins" },
      metro: { name: "DMCC Metro", km: "12 km", mins: "16 mins" },
      mall: { name: "City Centre Meaisem", km: "4 km", mins: "7 mins" },
      business: { name: "Media City", km: "14 km", mins: "18 mins" },
      hospital: { name: "Mediclinic Parkview", km: "6 km", mins: "9 mins" } // NEW
    }
  },

  // ==========================================
  // 2. PRIME & LUXURY
  // ==========================================
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    category: "Luxury",
    roi: "5.4%",
    avgPrice: "AED 3.5M",
    imageColor: "bg-slate-900",
    amenities: ["Burj Khalifa", "Dubai Mall", "Dubai Opera"],
    scores: { cashFlow: 5.5, appreciation: 9.0, liquidity: 8.8, risk: 3.5, lifestyle: 10.0 },
    unitEconomics: { studio: { roi: "5.8%" }, oneBed: { roi: "5.4%" }, twoBed: { roi: "4.8%" } },
    overallScore: 7.9,
    description: "The global center of Dubai. Prestige over ROI.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "14 km", mins: "15 mins" },
      school: { name: "Hartland Intl", km: "6 km", mins: "10 mins" },
      tourist: { name: "Burj Khalifa", km: "0 km", mins: "1 min" },
      metro: { name: "Burj Khalifa/Mall", km: "1 km", mins: "5 mins" },
      mall: { name: "Dubai Mall", km: "0.2 km", mins: "2 mins" },
      business: { name: "Emaar Square", km: "1 km", mins: "3 mins" },
      hospital: { name: "Mediclinic Mall", km: "1 km", mins: "5 mins" } // NEW
    }
  },
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    category: "Luxury",
    roi: "5.9%",
    avgPrice: "AED 2.2M",
    imageColor: "bg-blue-600",
    amenities: ["Marina Walk", "Dubai Marina Mall", "Yacht Club"],
    scores: { cashFlow: 6.5, appreciation: 8.2, liquidity: 9.5, risk: 4.0, lifestyle: 9.8 },
    unitEconomics: { studio: { roi: "6.5%" }, oneBed: { roi: "6.0%" }, twoBed: { roi: "5.5%" } },
    overallScore: 8.1,
    description: "Tourist favorite. High occupancy for short-term rentals.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "32 km", mins: "28 mins" },
      school: { name: "Emirates Intl", km: "4 km", mins: "8 mins" },
      tourist: { name: "JBR Beach", km: "1 km", mins: "5 mins" },
      metro: { name: "Sobha Realty", km: "0.5 km", mins: "5 mins" },
      mall: { name: "Marina Mall", km: "0.5 km", mins: "3 mins" },
      business: { name: "Media City", km: "2 km", mins: "6 mins" },
      hospital: { name: "King's Marina", km: "1 km", mins: "4 mins" } // NEW
    }
  },
  {
    id: "dubai-hills",
    name: "Dubai Hills Estate",
    category: "Luxury",
    roi: "5.8%",
    avgPrice: "AED 2.5M",
    imageColor: "bg-green-800",
    amenities: ["Hills Mall", "Golf Club", "Central Park"],
    scores: { cashFlow: 5.8, appreciation: 9.2, liquidity: 8.5, risk: 3.5, lifestyle: 9.5 },
    unitEconomics: { studio: { roi: "6.2%" }, oneBed: { roi: "5.8%" }, twoBed: { roi: "5.2%" } },
    overallScore: 8.2,
    description: "The 'Green Heart of Dubai'. Massive central park and mall.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "25 km", mins: "22 mins" },
      school: { name: "GEMS New Millennium", km: "2 km", mins: "4 mins" },
      tourist: { name: "Dubai Hills Park", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Mall of Emirates", km: "8 km", mins: "12 mins" },
      mall: { name: "Dubai Hills Mall", km: "1 km", mins: "3 mins" },
      business: { name: "Business Bay", km: "12 km", mins: "15 mins" },
      hospital: { name: "King's College", km: "1 km", mins: "3 mins" } // NEW
    }
  },

  // ==========================================
  // 3. BUSINESS HUBS
  // ==========================================
  {
    id: "business-bay",
    name: "Business Bay",
    category: "Business",
    roi: "6.2%",
    avgPrice: "AED 1.8M",
    imageColor: "bg-blue-800",
    amenities: ["Metro Access", "Dubai Canal", "Bay Avenue"],
    scores: { cashFlow: 7.2, appreciation: 7.5, liquidity: 8.0, risk: 5.5, lifestyle: 8.0 },
    unitEconomics: { studio: { roi: "7.0%" }, oneBed: { roi: "6.5%" }, twoBed: { roi: "5.8%" } },
    overallScore: 7.8,
    description: "The corporate capital of Dubai. High demand for 1-beds.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "16 km", mins: "18 mins" },
      school: { name: "Horizon English", km: "3 km", mins: "8 mins" },
      tourist: { name: "Dubai Canal", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Business Bay Metro", km: "0.5 km", mins: "3 mins" },
      mall: { name: "Bay Avenue", km: "0.2 km", mins: "2 mins" },
      business: { name: "Downtown Dubai", km: "2 km", mins: "5 mins" },
      hospital: { name: "Emirates Hospital", km: "2 km", mins: "6 mins" } // NEW
    }
  },

  // ==========================================
  // 4. FAMILY & SUBURBAN (Includes Town Square)
  // ==========================================
  {
    id: "town-square",
    name: "Town Square",
    category: "High Yield",
    specialty: "Modern Family",
    vibe: "Community Focused",
    roi: "7.0%",
    avgPrice: "AED 800k",
    imageColor: "bg-yellow-600",
    amenities: ["Central Park", "Skate Park", "Wave Pool"],
    scores: { cashFlow: 7.5, appreciation: 7.0, liquidity: 7.2, risk: 5.0, lifestyle: 8.2 },
    unitEconomics: { studio: { roi: "7.5%" }, oneBed: { roi: "7.0%" }, twoBed: { roi: "6.2%" } },
    overallScore: 7.6,
    description: "A highly active, family-centric community with immense parks and affordable rents.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "35 km", mins: "32 mins" },
      school: { name: "Fairgreen Intl", km: "1.5 km", mins: "3 mins" },
      tourist: { name: "Global Village", km: "8 km", mins: "12 mins" },
      metro: { name: "Mall of Emirates", km: "18 km", mins: "20 mins" }, 
      mall: { name: "Dubai Hills Mall", km: "15 km", mins: "18 mins" },
      business: { name: "Studio City", km: "10 km", mins: "12 mins" },
      hospital: { name: "Mediclinic Parkview", km: "12 km", mins: "15 mins" } // NEW
    }
  },
  {
    id: "motor-city",
    name: "Motor City",
    category: "Appreciation",
    roi: "6.8%",
    avgPrice: "AED 900k",
    imageColor: "bg-red-700",
    amenities: ["Autodrome", "First Avenue Mall", "Linear Park"],
    scores: { cashFlow: 7.0, appreciation: 6.5, liquidity: 7.0, risk: 5.0, lifestyle: 8.0 },
    unitEconomics: { studio: { roi: "7.5%" }, oneBed: { roi: "6.8%" }, twoBed: { roi: "6.2%" } },
    overallScore: 7.5,
    description: "Spacious apartments, very walkable, great for families.",
    connectivity: {
      airport: { name: "DXB Intl Airport", km: "30 km", mins: "28 mins" },
      school: { name: "GEMS Metropole", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Dubai Autodrome", km: "0.2 km", mins: "2 mins" },
      metro: { name: "Mall of Emirates", km: "12 km", mins: "15 mins" },
      mall: { name: "First Avenue Mall", km: "0.2 km", mins: "2 mins" },
      business: { name: "Studio City", km: "2 km", mins: "4 mins" },
      hospital: { name: "Mediclinic Parkview", km: "5 km", mins: "6 mins" } // NEW
     }
  },
  {
  id: "al-ras",
  name: "Al Ras",
  category: "High Yield",
  roi: "7.2%",
  avgPrice: "AED 650k",
  imageColor: "bg-yellow-700",
  amenities: ["Gold Souk", "Spice Souk", "Dubai Creek"],
  scores: { cashFlow: 8.2, appreciation: 5.8, liquidity: 7.5, risk: 6.5, lifestyle: 6.0 },
  unitEconomics: { studio: { roi: "7.8%" }, oneBed: { roi: "7.2%" } },
  overallScore: 7.1,
  description: "Historic trading district with strong rental demand.",
  connectivity: {
    airport: { name: "DXB Intl Airport", km: "8 km", mins: "15 mins" },
    school: { name: "Dubai Scholars School", km: "3 km", mins: "8 mins" },
    tourist: { name: "Gold Souk", km: "0.3 km", mins: "3 mins" },
    metro: { name: "Al Ras Metro", km: "0.2 km", mins: "2 mins" },
    mall: { name: "Al Ghurair Centre", km: "2 km", mins: "6 mins" },
    business: { name: "Deira Business District", km: "1 km", mins: "4 mins" },
    hospital: { name: "Dubai Hospital", km: "3 km", mins: "7 mins" }
  }
},

{
  id: "abu-hail",
  name: "Abu Hail",
  category: "Rental Demand",
  roi: "6.9%",
  avgPrice: "AED 720k",
  imageColor: "bg-orange-600",
  amenities: ["Metro Access", "Clinics", "Retail"],
  scores: { cashFlow: 7.8, appreciation: 6.0, liquidity: 7.2, risk: 5.8, lifestyle: 6.5 },
  unitEconomics: { studio: { roi: "7.4%" }, oneBed: { roi: "6.9%" } },
  overallScore: 7.0,
  description: "Affordable residential area near Deira.",
  connectivity: {
    airport: { name: "DXB Intl Airport", km: "7 km", mins: "12 mins" },
    school: { name: "The Millennium School", km: "2 km", mins: "6 mins" },
    tourist: { name: "Deira Waterfront", km: "4 km", mins: "10 mins" },
    metro: { name: "Abu Hail Metro", km: "0.3 km", mins: "3 mins" },
    mall: { name: "Century Mall", km: "2 km", mins: "6 mins" },
    business: { name: "Deira Offices", km: "3 km", mins: "8 mins" },
    hospital: { name: "Al Kuwait Hospital", km: "4 km", mins: "9 mins" }
  }
},

{
  id: "al-karama",
  name: "Al Karama",
  category: "High Yield",
  roi: "7.5%",
  avgPrice: "AED 800k",
  imageColor: "bg-pink-700",
  amenities: ["Karama Market", "Metro", "Restaurants"],
  scores: { cashFlow: 8.5, appreciation: 6.2, liquidity: 8.0, risk: 6.0, lifestyle: 7.0 },
  unitEconomics: { studio: { roi: "8.0%" }, oneBed: { roi: "7.5%" } },
  overallScore: 7.6,
  description: "One of Dubai’s highest occupancy rental zones.",
  connectivity: {
    airport: { name: "DXB Intl Airport", km: "10 km", mins: "18 mins" },
    school: { name: "Indian High School", km: "1 km", mins: "3 mins" },
    tourist: { name: "Dubai Frame", km: "2 km", mins: "5 mins" },
    metro: { name: "ADC Metro", km: "0.4 km", mins: "4 mins" },
    mall: { name: "Oud Metha Mall", km: "2 km", mins: "6 mins" },
    business: { name: "Bur Dubai Offices", km: "2 km", mins: "5 mins" },
    hospital: { name: "Aster Hospital", km: "1.5 km", mins: "4 mins" }
  }
},

{
  id: "al-satwa",
  name: "Al Satwa",
  category: "Cash Flow",
  roi: "7.3%",
  avgPrice: "AED 750k",
  imageColor: "bg-teal-700",
  amenities: ["Clinics", "Cafes", "Bus Network"],
  scores: { cashFlow: 8.0, appreciation: 5.9, liquidity: 7.0, risk: 6.4, lifestyle: 6.5 },
  unitEconomics: { studio: { roi: "7.9%" }, oneBed: { roi: "7.3%" } },
  overallScore: 7.2,
  description: "Budget central living near Sheikh Zayed Road.",
  connectivity: {
    airport: { name: "DXB Intl Airport", km: "12 km", mins: "20 mins" },
    school: { name: "Jumeira Baccalaureate", km: "3 km", mins: "8 mins" },
    tourist: { name: "City Walk", km: "2 km", mins: "5 mins" },
    metro: { name: "World Trade Centre", km: "2 km", mins: "6 mins" },
    mall: { name: "City Walk Mall", km: "2 km", mins: "5 mins" },
    business: { name: "DIFC", km: "3 km", mins: "7 mins" },
    hospital: { name: "Iranian Hospital", km: "1 km", mins: "3 mins" }
  }
},

{
  id: "dubai-south",
  name: "Dubai South",
  category: "Future Growth",
  roi: "6.5%",
  avgPrice: "AED 620k",
  imageColor: "bg-sky-700",
  amenities: ["Expo City", "Logistics Hub", "New Schools"],
  scores: { cashFlow: 6.8, appreciation: 8.0, liquidity: 6.0, risk: 7.0, lifestyle: 6.2 },
  unitEconomics: { studio: { roi: "7.2%" }, oneBed: { roi: "6.5%" } },
  overallScore: 7.1,
  description: "Long-term growth driven by airport and Expo.",
  connectivity: {
    airport: { name: "Al Maktoum Airport", km: "5 km", mins: "8 mins" },
    school: { name: "GEMS Founders", km: "6 km", mins: "10 mins" },
    tourist: { name: "Expo City", km: "4 km", mins: "7 mins" },
    metro: { name: "Expo 2020 Metro", km: "6 km", mins: "10 mins" },
    mall: { name: "Dubai South Mall", km: "3 km", mins: "6 mins" },
    business: { name: "Logistics District", km: "2 km", mins: "4 mins" },
    hospital: { name: "NMC Royal Hospital", km: "12 km", mins: "15 mins" }
  }
},

{
  id: "damac-hills",
  name: "Damac Hills",
  category: "Golf Community",
  roi: "6.6%",
  avgPrice: "AED 1.5M",
  imageColor: "bg-green-900",
  amenities: ["Trump Golf", "Parks", "International Schools"],
  scores: { cashFlow: 6.8, appreciation: 7.2, liquidity: 7.0, risk: 5.8, lifestyle: 8.5 },
  unitEconomics: { oneBed: { roi: "6.8%" }, villa: { roi: "6.4%" } },
  overallScore: 7.5,
  description: "Premium golf community popular with families.",
  connectivity: {
    airport: { name: "DXB Intl Airport", km: "28 km", mins: "30 mins" },
    school: { name: "Jebel Ali School", km: "2 km", mins: "4 mins" },
    tourist: { name: "Trump Golf Club", km: "0.3 km", mins: "2 mins" },
    metro: { name: "Mall of Emirates", km: "14 km", mins: "18 mins" },
    mall: { name: "DAMAC Mall", km: "0.2 km", mins: "2 mins" },
    business: { name: "Business Bay", km: "20 km", mins: "25 mins" },
    hospital: { name: "Mediclinic Parkview", km: "8 km", mins: "10 mins" }
  }
}

];
