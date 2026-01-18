// ==========================================================
// RAS AL KHAIMAH AREA DATA – SAME STRUCTURE AS DUBAI / SHARJAH
// ==========================================================

export const RAK_AREAS = [
  {
    id: "al-marjan-island",
    name: "Al Marjan Island",
    category: "Luxury / Waterfront",
    roi: "6.9%",
    avgPrice: "AED 1.3M",
    imageColor: "bg-sky-600",
    amenities: ["Beaches", "Resorts", "Waterfront Promenade"],
    scores: { cashFlow: 7.8, appreciation: 8.6, liquidity: 7.5, risk: 6.4, lifestyle: 9.0 },
    unitEconomics: { studio: { roi: "7.4%" }, oneBed: { roi: "6.9%" }, twoBed: { roi: "5.8%" } },
    overallScore: 8.4,
    description: "RAK’s prime waterfront destination with strong tourism demand.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "30 km", mins: "35 mins" },
      school: { name: "RAK Academy", km: "18 km", mins: "22 mins" },
      tourist: { name: "Wynn Al Marjan Island", km: "1 km", mins: "3 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Al Hamra Mall", km: "8 km", mins: "10 mins" },
      business: { name: "RAK Free Trade Zone", km: "20 km", mins: "25 mins" },
      hospital: { name: "RAK Hospital", km: "22 km", mins: "28 mins" }
    }
  },
  {
    id: "al-hamra-village",
    name: "Al Hamra Village",
    category: "Golf / Waterfront",
    roi: "7.2%",
    avgPrice: "AED 980k",
    imageColor: "bg-emerald-700",
    amenities: ["Golf Course", "Marina", "Beach Access"],
    scores: { cashFlow: 8.3, appreciation: 7.8, liquidity: 7.6, risk: 6.3, lifestyle: 8.7 },
    unitEconomics: { studio: { roi: "7.8%" }, oneBed: { roi: "7.2%" }, twoBed: { roi: "6.0%" } },
    overallScore: 8.3,
    description: "Established expat-friendly community with strong rentals.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "25 km", mins: "30 mins" },
      school: { name: "RAK Academy", km: "12 km", mins: "15 mins" },
      tourist: { name: "Al Hamra Marina", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Al Hamra Mall", km: "1 km", mins: "3 mins" },
      business: { name: "RAK Economic Zone", km: "18 km", mins: "22 mins" },
      hospital: { name: "RAK Hospital", km: "16 km", mins: "20 mins" }
    }
  },
  {
    id: "mina-al-arab",
    name: "Mina Al Arab",
    category: "Master Community",
    roi: "6.5%",
    avgPrice: "AED 900k",
    imageColor: "bg-teal-600",
    amenities: ["Lagoon", "Parks", "Retail"],
    scores: { cashFlow: 7.5, appreciation: 8.2, liquidity: 7.2, risk: 6.5, lifestyle: 8.5 },
    unitEconomics: { studio: { roi: "7.0%" }, oneBed: { roi: "6.6%" }, twoBed: { roi: "5.5%" } },
    overallScore: 8.1,
    description: "Waterfront community popular with end-users and holiday rentals.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "27 km", mins: "32 mins" },
      school: { name: "RAK Academy", km: "14 km", mins: "18 mins" },
      tourist: { name: "Flamingo Beach", km: "2 km", mins: "5 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Al Hamra Mall", km: "6 km", mins: "8 mins" },
      business: { name: "RAK Economic Zone", km: "17 km", mins: "22 mins" },
      hospital: { name: "Ibrahim Bin Hamad Hospital", km: "15 km", mins: "20 mins" }
    }
  },
  {
    id: "raha-beach",
    name: "RAK Corniche / Al Nakheel",
    category: "Central / Family",
    roi: "7.6%",
    avgPrice: "AED 620k",
    imageColor: "bg-indigo-600",
    amenities: ["Corniche", "Retail", "Restaurants"],
    scores: { cashFlow: 8.9, appreciation: 7.0, liquidity: 8.0, risk: 6.6, lifestyle: 7.8 },
    unitEconomics: { studio: { roi: "8.2%" }, oneBed: { roi: "7.6%" }, twoBed: { roi: "6.2%" } },
    overallScore: 8.2,
    description: "High-demand central apartments near RAK Corniche.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "20 km", mins: "25 mins" },
      school: { name: "Scholars Indian School", km: "3 km", mins: "6 mins" },
      tourist: { name: "RAK Corniche", km: "0.3 km", mins: "1 min" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Manar Mall", km: "1 km", mins: "3 mins" },
      business: { name: "RAK City Centre", km: "2 km", mins: "5 mins" },
      hospital: { name: "Ibrahim Bin Hamad Hospital", km: "2 km", mins: "5 mins" }
    }
  },
  {
    id: "khuzam",
    name: "Khuzam",
    category: "Villa / Local",
    roi: "6.1%",
    avgPrice: "AED 1.6M",
    imageColor: "bg-amber-700",
    amenities: ["Villas", "Local Parks", "Mosques"],
    scores: { cashFlow: 6.9, appreciation: 7.4, liquidity: 6.8, risk: 6.3, lifestyle: 7.2 },
    unitEconomics: { villa: { roi: "6.1%" } },
    overallScore: 7.6,
    description: "Low-density villa area popular with local families.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "18 km", mins: "22 mins" },
      school: { name: "Indian Public High School", km: "2 km", mins: "5 mins" },
      tourist: { name: "RAK National Museum", km: "4 km", mins: "8 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Manar Mall", km: "3 km", mins: "6 mins" },
      business: { name: "RAK Municipality", km: "4 km", mins: "7 mins" },
      hospital: { name: "RAK Hospital", km: "3 km", mins: "6 mins" }
    }
  }
  ,
  {
    id: "al-dhait",
    name: "Al Dhait",
    category: "Central / Family",
    roi: "7.4%",
    avgPrice: "AED 650k",
    imageColor: "bg-green-600",
    amenities: ["Schools", "Clinics", "Local Retail"],
    scores: { cashFlow: 8.7, appreciation: 7.0, liquidity: 8.1, risk: 6.5, lifestyle: 7.3 },
    unitEconomics: { studio: { roi: "8.0%" }, oneBed: { roi: "7.5%" }, twoBed: { roi: "6.2%" } },
    overallScore: 8.1,
    description: "High-demand residential district close to RAK city center.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "17 km", mins: "22 mins" },
      school: { name: "GEMS Westminster School", km: "1.5 km", mins: "4 mins" },
      tourist: { name: "RAK National Museum", km: "5 km", mins: "8 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Manar Mall", km: "3 km", mins: "6 mins" },
      business: { name: "RAK Municipality", km: "3 km", mins: "6 mins" },
      hospital: { name: "Ibrahim Bin Hamad Hospital", km: "2 km", mins: "5 mins" }
    }
  },
  {
    id: "julphar",
    name: "Julphar",
    category: "Mixed Use / Affordable",
    roi: "7.8%",
    avgPrice: "AED 580k",
    imageColor: "bg-emerald-600",
    amenities: ["Creekside", "Retail", "Mosques"],
    scores: { cashFlow: 9.0, appreciation: 6.8, liquidity: 8.2, risk: 6.7, lifestyle: 7.0 },
    unitEconomics: { studio: { roi: "8.5%" }, oneBed: { roi: "7.9%" }, twoBed: { roi: "6.4%" } },
    overallScore: 8.3,
    description: "Affordable apartments with strong long-term rental demand.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "19 km", mins: "25 mins" },
      school: { name: "Indian Public High School", km: "2 km", mins: "5 mins" },
      tourist: { name: "RAK Creek", km: "0.8 km", mins: "2 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Manar Mall", km: "2 km", mins: "5 mins" },
      business: { name: "RAK Industrial Area", km: "4 km", mins: "7 mins" },
      hospital: { name: "RAK Hospital", km: "3 km", mins: "6 mins" }
    }
  },
  {
    id: "al-rams",
    name: "Al Rams",
    category: "Coastal / Heritage",
    roi: "6.7%",
    avgPrice: "AED 720k",
    imageColor: "bg-cyan-700",
    amenities: ["Fishing Port", "Beach", "Heritage Sites"],
    scores: { cashFlow: 7.6, appreciation: 7.5, liquidity: 6.9, risk: 6.8, lifestyle: 7.9 },
    unitEconomics: { oneBed: { roi: "7.0%" }, twoBed: { roi: "5.8%" }, villa: { roi: "5.5%" } },
    overallScore: 7.8,
    description: "Quiet coastal town with long-term appreciation potential.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "30 km", mins: "35 mins" },
      school: { name: "Al Rams School", km: "1 km", mins: "3 mins" },
      tourist: { name: "Al Rams Beach", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Manar Mall", km: "18 km", mins: "22 mins" },
      business: { name: "RAK Port", km: "5 km", mins: "8 mins" },
      hospital: { name: "RAK Hospital", km: "20 km", mins: "25 mins" }
    }
  },
  {
    id: "seih-al-harf",
    name: "Seih Al Harf",
    category: "Industrial / Workforce",
    roi: "7.9%",
    avgPrice: "AED 540k",
    imageColor: "bg-stone-700",
    amenities: ["Factories", "Worker Housing", "Highways"],
    scores: { cashFlow: 9.1, appreciation: 6.4, liquidity: 7.8, risk: 7.0, lifestyle: 5.8 },
    unitEconomics: { studio: { roi: "8.6%" }, oneBed: { roi: "8.0%" } },
    overallScore: 7.9,
    description: "Pure cash-flow zone driven by industrial employment.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "16 km", mins: "20 mins" },
      school: { name: "RAK School", km: "6 km", mins: "10 mins" },
      tourist: { name: "RAK Mountains", km: "12 km", mins: "18 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Manar Mall", km: "8 km", mins: "12 mins" },
      business: { name: "RAK Industrial Area", km: "1 km", mins: "2 mins" },
      hospital: { name: "RAK Hospital", km: "7 km", mins: "12 mins" }
    }
  },
  {
    id: "al-jazirah-al-hamra",
    name: "Al Jazirah Al Hamra",
    category: "Heritage / Waterfront",
    roi: "6.9%",
    avgPrice: "AED 820k",
    imageColor: "bg-blue-600",
    amenities: ["Heritage Village", "Beach", "Resorts"],
    scores: { cashFlow: 7.8, appreciation: 8.0, liquidity: 7.2, risk: 6.5, lifestyle: 8.2 },
    unitEconomics: { oneBed: { roi: "7.2%" }, twoBed: { roi: "6.0%" }, villa: { roi: "5.6%" } },
    overallScore: 8.0,
    description: "Historic waterfront area benefiting from tourism spillover.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "28 km", mins: "32 mins" },
      school: { name: "RAK Academy", km: "10 km", mins: "15 mins" },
      tourist: { name: "Al Jazirah Heritage Village", km: "0.5 km", mins: "2 mins" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Al Hamra Mall", km: "5 km", mins: "7 mins" },
      business: { name: "Al Hamra Free Zone", km: "6 km", mins: "8 mins" },
      hospital: { name: "RAK Hospital", km: "18 km", mins: "22 mins" }
    }
  },
  {
    id: "dafan-al-khor",
    name: "Dafan Al Khor",
    category: "Creekside / High Yield",
    roi: "8.1%",
    avgPrice: "AED 560k",
    imageColor: "bg-purple-700",
    amenities: ["Creek Views", "Retail", "Restaurants"],
    scores: { cashFlow: 9.3, appreciation: 6.9, liquidity: 8.4, risk: 6.6, lifestyle: 7.4 },
    unitEconomics: { studio: { roi: "8.8%" }, oneBed: { roi: "8.2%" }, twoBed: { roi: "6.6%" } },
    overallScore: 8.5,
    description: "One of RAK’s strongest rental yield corridors.",
    connectivity: {
      airport: { name: "RAK Intl Airport", km: "21 km", mins: "26 mins" },
      school: { name: "Scholars Indian School", km: "2 km", mins: "5 mins" },
      tourist: { name: "RAK Creek", km: "0.4 km", mins: "1 min" },
      metro: { name: "N/A", km: "—", mins: "—" },
      mall: { name: "Manar Mall", km: "1.5 km", mins: "4 mins" },
      business: { name: "RAK City Centre", km: "2 km", mins: "5 mins" },
      hospital: { name: "Ibrahim Bin Hamad Hospital", km: "2 km", mins: "5 mins" }
    }
  }
  
];
