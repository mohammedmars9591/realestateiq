export const AJMAN_DATA = [
  {
    id: "ajman-corniche",
    name: "Ajman Corniche",
    category: "Budget Beach",
    roi: "9.5%",
    avgPrice: "AED 600k",
    imageColor: "bg-teal-500",
    amenities: ["Beach Access", "Fairmont Hotel", "Promenade"],
    scores: { cashFlow: 9.8, appreciation: 5.5, liquidity: 6.5, risk: 6.0, lifestyle: 7.5 },
    overallScore: 7.8,
    description: "Unbeatable value. Beachfront property for AED 600k with 9% yields.",
    connectivity: { 
        airport: { name: "DXB Airport", km: "25 km", mins: "35 mins" }, 
        mall: { name: "Ajman City Centre", km: "5 km", mins: "8 mins" },
        hospital: { name: "Thumbay Hospital", km: "4 km", mins: "8 mins" }
    }
  },
  {
    id: "al-zorah",
    name: "Al Zorah",
    category: "Golf Resort",
    roi: "7.0%",
    avgPrice: "AED 1.8M",
    imageColor: "bg-emerald-700",
    amenities: ["Golf Club", "Mangroves", "Oberoi Resort"],
    scores: { cashFlow: 6.5, appreciation: 8.0, liquidity: 5.5, risk: 4.5, lifestyle: 9.0 },
    overallScore: 8.1,
    description: "Eco-friendly luxury living amidst mangroves and a championship golf course.",
    connectivity: { 
        airport: { name: "DXB Airport", km: "35 km", mins: "40 mins" }, 
        mall: { name: "Ajman City Centre", km: "12 km", mins: "15 mins" },
        tourist: { name: "Marina 1", km: "1 km", mins: "3 mins" }
    }
  }
];