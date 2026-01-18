export const BUILDERS = [
  // ==========================================================
  // TIER 1: THE ULTRA-LUXURY & GOVERNMENT GIANTS
  // ==========================================================
  {
    id: "emaar",
    name: "Emaar Properties",
    tier: "Market Leader (Government Backed)",
    established: 1997,
    origin: "Dubai",
    imageColor: "bg-blue-900",

    scores: {
      trust: 10.0,
      deliveryReliability: 9.9,
      constructionQuality: 9.5,
      resaleValue: 10.0,
      rentalDemand: 10.0
    },
    overallDeveloperScore: 9.9,

    bestFor: ["Capital Appreciation", "Safe Haven Assets"],
    idealFor: ["Long-Term Investors", "End Users", "First Time Buyers"],
    notIdealFor: ["Short-Term Flippers (High Entry Price)"],

    signatureProject: "Burj Khalifa & Downtown Dubai",
    flagshipCommunities: ["Downtown Dubai", "Dubai Hills Estate", "Dubai Creek Harbour", "Emaar Beachfront"],

    portfolio: { totalProjects: 150, activeProjects: 35 },
    deliveryTrackRecord: { onTime: "98%", delayed: "2%", cancelled: "0%" },

    paymentFlexibility: {
      score: 5.0,
      commonPlans: ["80/20", "60/40"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+85%",
      avgRentalYield: "5.5% - 6.5%",
      resaleLiquidity: "Very High"
    },

    buyerRiskProfile: { offPlanRisk: "Zero", handoverRisk: "Zero" },

    usp: "The Gold Standard. If Emaar builds it, the world buys it.",
    records: "Built the world's tallest building and largest mall.",
    description: "Emaar is the safest bet in Dubai real estate. Their communities define the city's skyline. While they are expensive and offer rigid payment plans, the resale value and maintenance are unmatched."
  },
  {
    id: "nakheel",
    name: "Nakheel",
    tier: "Master Developer (Government)",
    established: 2000,
    origin: "Dubai",
    imageColor: "bg-cyan-700",

    scores: {
      trust: 9.5,
      deliveryReliability: 9.0,
      constructionQuality: 8.8,
      resaleValue: 9.7,
      rentalDemand: 9.5
    },
    overallDeveloperScore: 9.3,

    bestFor: ["Waterfront Living", "Villa Communities"],
    idealFor: ["Wealthy Families", "Luxury Investors"],
    notIdealFor: ["Budget Investors"],

    signatureProject: "Palm Jumeirah",
    flagshipCommunities: ["Palm Jumeirah", "Palm Jebel Ali", "Dubai Islands"],

    portfolio: { totalProjects: 80, activeProjects: 12 },
    deliveryTrackRecord: { onTime: "90%", delayed: "10%", cancelled: "0%" },

    paymentFlexibility: {
      score: 6.0,
      commonPlans: ["60/40", "50/50"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+110% (Palm Jumeirah)",
      avgRentalYield: "5.0% - 7.0%",
      resaleLiquidity: "High"
    },

    buyerRiskProfile: { offPlanRisk: "Very Low", handoverRisk: "Low" },

    usp: "Creators of the World's Islands. Now leading Dubai's coastal expansion.",
    records: "Built the largest man-made island on Earth.",
    description: "Nakheel is synonymous with Dubai's coastline. After a restructuring, they are back stronger than ever with the massive Palm Jebel Ali masterplan."
  },
  {
    id: "aldar",
    name: "Aldar Properties",
    tier: "Abu Dhabi Giant",
    established: 2005,
    origin: "Abu Dhabi",
    imageColor: "bg-teal-900",

    scores: {
      trust: 9.8,
      deliveryReliability: 9.6,
      constructionQuality: 9.5,
      resaleValue: 9.4,
      rentalDemand: 9.0
    },
    overallDeveloperScore: 9.6,

    bestFor: ["Safety & Stability", "Sustainable Communities"],
    idealFor: ["Conservative Investors", "Institutional Buyers"],
    notIdealFor: ["High-Risk Flippers"],

    signatureProject: "Yas Island & Haven (Dubai)",
    flagshipCommunities: ["Dubailand", "Yas Island (AD)", "Saadiyat (AD)"],

    portfolio: { totalProjects: 65, activeProjects: 8 },
    deliveryTrackRecord: { onTime: "96%", delayed: "4%", cancelled: "0%" },

    paymentFlexibility: {
      score: 6.5,
      commonPlans: ["60/40", "50/50"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+60%",
      avgRentalYield: "6.0%",
      resaleLiquidity: "High"
    },

    buyerRiskProfile: { offPlanRisk: "Very Low", handoverRisk: "Very Low" },

    usp: "The Safest Hands in the UAE. Abu Dhabi's biggest developer now in Dubai.",
    records: "Developer of the F1 Track and Ferrari World.",
    description: "Aldar is the Emaar of Abu Dhabi. Their entry into Dubai (Haven, Athlon) brings immense trust, quality, and community management expertise."
  },
  {
    id: "sobha",
    name: "Sobha Realty",
    tier: "High-End Quality",
    established: 1976,
    origin: "Oman / Dubai",
    imageColor: "bg-yellow-700",

    scores: {
      trust: 9.4,
      deliveryReliability: 9.8,
      constructionQuality: 10.0,
      resaleValue: 9.2,
      rentalDemand: 8.9
    },
    overallDeveloperScore: 9.5,

    bestFor: ["Build Quality", "Green Communities"],
    idealFor: ["Quality-Obsessed End Users", "Long Term Holders"],
    notIdealFor: ["Short-Term Flips"],

    signatureProject: "Sobha Hartland",
    flagshipCommunities: ["Sobha Hartland 1 & 2", "Sobha One", "Siniya Island"],

    portfolio: { totalProjects: 45, activeProjects: 15 },
    deliveryTrackRecord: { onTime: "99%", delayed: "1%", cancelled: "0%" },

    paymentFlexibility: {
      score: 6.0,
      commonPlans: ["60/40", "50/50"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+45%",
      avgRentalYield: "6.5%",
      resaleLiquidity: "Medium-High"
    },

    buyerRiskProfile: { offPlanRisk: "Very Low", handoverRisk: "Zero" },

    usp: "The 'Backward Integration' Model. They make their own windows, doors, and furniture.",
    records: "Zero-defect track record on handovers.",
    description: "Sobha doesn't outsource. They build everything themselves, resulting in the best finishing quality in the market, often better than Emaar."
  },

  // ==========================================================
  // TIER 2: HIGH VOLUME & INVESTOR FAVORITES
  // ==========================================================
  {
    id: "damac",
    name: "DAMAC Properties",
    tier: "Luxury / Volume",
    established: 2002,
    origin: "Dubai",
    imageColor: "bg-gray-900",

    scores: {
      trust: 8.8,
      deliveryReliability: 8.5,
      constructionQuality: 8.5,
      resaleValue: 8.7,
      rentalDemand: 9.0
    },
    overallDeveloperScore: 8.7,

    bestFor: ["Villa Communities", "Branded Towers"],
    idealFor: ["Families", "Status Seekers"],
    notIdealFor: ["Minimalists"],

    signatureProject: "Damac Hills 1",
    flagshipCommunities: ["Damac Hills", "Damac Lagoons", "Safa Two (De Grisogono)"],

    portfolio: { totalProjects: 100, activeProjects: 25 },
    deliveryTrackRecord: { onTime: "85%", delayed: "15%", cancelled: "0%" },

    paymentFlexibility: {
      score: 7.5,
      commonPlans: ["70/30", "60/40"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+50% (Villas)",
      avgRentalYield: "6.0% - 7.5%",
      resaleLiquidity: "High"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },

    usp: "The Master of Marketing. Known for Co-Branded Towers (Cavalli, Fendi).",
    records: "Developer of the first Trump International Golf Club in Middle East.",
    description: "DAMAC dominates the villa market with Damac Hills and Lagoons. Their apartment towers are flashy, branded, and marketed aggressively."
  },
  {
    id: "binghatti",
    name: "Binghatti Developers",
    tier: "Architectural / Fast",
    established: 2008,
    origin: "Dubai",
    imageColor: "bg-orange-600",

    scores: {
      trust: 8.6,
      deliveryReliability: 10.0,
      constructionQuality: 8.2,
      resaleValue: 8.5,
      rentalDemand: 9.2
    },
    overallDeveloperScore: 8.8,

    bestFor: ["Fast Capital Rotation", "Hyper-Towers"],
    idealFor: ["Investors seeking speed", "Design Lovers"],
    notIdealFor: ["Traditionalists"],

    signatureProject: "Burj Binghatti Jacob & Co",
    flagshipCommunities: ["Business Bay", "JVC", "Dubai Science Park"],

    portfolio: { totalProjects: 55, activeProjects: 20 },
    deliveryTrackRecord: { onTime: "100%", delayed: "0%", cancelled: "0%" },

    paymentFlexibility: {
      score: 7.0,
      commonPlans: ["70/30", "50/50"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+35%",
      avgRentalYield: "7.0% - 8.5%",
      resaleLiquidity: "High"
    },

    buyerRiskProfile: { offPlanRisk: "Very Low", handoverRisk: "Low" },

    usp: "The Fastest Developer in Dubai. They finish projects months ahead of schedule.",
    records: "Building the world's tallest residential tower (Hyper Tower).",
    description: "Binghatti is known for its distinct orange angular architecture and lightning-fast delivery speeds. A favorite for investors who want their keys quickly."
  },
  {
    id: "danube",
    name: "Danube Properties",
    tier: "Affordable Luxury",
    established: 1993,
    origin: "Dubai",
    imageColor: "bg-red-600",

    scores: {
      trust: 8.9,
      deliveryReliability: 9.2,
      constructionQuality: 7.8,
      resaleValue: 8.2,
      rentalDemand: 9.5
    },
    overallDeveloperScore: 8.8,

    bestFor: ["High ROI Yields", "First Time Investors"],
    idealFor: ["Budget Investors", "Salary Earners"],
    notIdealFor: ["Luxury Purists"],

    signatureProject: "Opalz & Viewz",
    flagshipCommunities: ["JLT", "Arjan", "JVC"],

    portfolio: { totalProjects: 30, activeProjects: 12 },
    deliveryTrackRecord: { onTime: "95%", delayed: "5%", cancelled: "0%" },

    paymentFlexibility: {
      score: 10.0,
      commonPlans: ["1% Monthly", "65/35 Post-Handover"],
      postHandoverAvailable: true
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+30%",
      avgRentalYield: "8.0% - 9.5%",
      resaleLiquidity: "Medium-High"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },

    usp: "The King of the 1% Payment Plan. Making real estate accessible to everyone.",
    records: "Launched 5 projects in one year and sold out all of them.",
    description: "Danube revolutionized the market with the 1% monthly payment plan. They build compact, furnished apartments with high rental yields."
  },

  // ==========================================================
  // TIER 3: BOUTIQUE & DESIGN-LED
  // ==========================================================
  {
    id: "ellington",
    name: "Ellington Properties",
    tier: "Design-Led Boutique",
    established: 2014,
    origin: "Dubai",
    imageColor: "bg-slate-800",

    scores: {
      trust: 9.2,
      deliveryReliability: 9.0,
      constructionQuality: 9.6,
      resaleValue: 9.5,
      rentalDemand: 9.8
    },
    overallDeveloperScore: 9.4,

    bestFor: ["Airbnb / Holiday Homes", "Aesthetic Living"],
    idealFor: ["Design Conscious", "European Investors"],
    notIdealFor: ["Cheapest Entry Price"],

    signatureProject: "Wilton Park & Ocean House",
    flagshipCommunities: ["JVC", "Palm Jumeirah", "MBR City"],

    portfolio: { totalProjects: 25, activeProjects: 8 },
    deliveryTrackRecord: { onTime: "92%", delayed: "8%", cancelled: "0%" },

    paymentFlexibility: {
      score: 6.0,
      commonPlans: ["50/50", "60/40"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+40%",
      avgRentalYield: "7.5% - 9.0% (Short Term)",
      resaleLiquidity: "High"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },

    usp: "Resort-style living in city apartments. Famous for their pool decks and lobbies.",
    records: "Highest rental premiums in JVC compared to neighbors.",
    description: "Ellington treats every building like a boutique hotel. Their focus on art, design, and lifestyle amenities allows owners to charge premium rents."
  },
  {
    id: "omniyat",
    name: "Omniyat",
    tier: "Ultra-Luxury Architectural",
    established: 2005,
    origin: "Dubai",
    imageColor: "bg-purple-900",

    scores: {
      trust: 9.0,
      deliveryReliability: 8.0,
      constructionQuality: 10.0,
      resaleValue: 9.8,
      rentalDemand: 9.0
    },
    overallDeveloperScore: 9.1,

    bestFor: ["Trophy Assets", "Billionaire Collection"],
    idealFor: ["UHNW Individuals", "Art Collectors"],
    notIdealFor: ["ROI Chasers"],

    signatureProject: "The Opus by Zaha Hadid",
    flagshipCommunities: ["Business Bay", "Palm Jumeirah"],

    portfolio: { totalProjects: 18, activeProjects: 5 },
    deliveryTrackRecord: { onTime: "75%", delayed: "25%", cancelled: "0%" },

    paymentFlexibility: {
      score: 5.0,
      commonPlans: ["60/40"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+70% (Premium Seg)",
      avgRentalYield: "4.5% - 5.5%",
      resaleLiquidity: "Medium (Niche)"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },

    usp: "They only build Masterpieces. Partnering with Zaha Hadid and Foster + Partners.",
    records: "Most expensive penthouse sold on Palm Jumeirah (Orla).",
    description: "Omniyat treats buildings as art. Their delivery is slow, but the final product is always a world-class architectural landmark."
  },

  // ==========================================================
  // TIER 4: EMERGING & MID-MARKET
  // ==========================================================
  {
    id: "azizi",
    name: "Azizi Developments",
    tier: "Mid-Market Giant",
    established: 2007,
    origin: "Dubai",
    imageColor: "bg-blue-600",

    scores: {
      trust: 7.9,
      deliveryReliability: 7.5,
      constructionQuality: 7.8,
      resaleValue: 7.9,
      rentalDemand: 8.5
    },
    overallDeveloperScore: 7.9,

    bestFor: ["Community Living", "Lower Entry Prices"],
    idealFor: ["Volume Investors", "Budget Families"],
    notIdealFor: ["Detail Perfectionists"],

    signatureProject: "Riviera (Meydan)",
    flagshipCommunities: ["Meydan", "Dubai South", "Palm Jumeirah"],

    portfolio: { totalProjects: 60, activeProjects: 15 },
    deliveryTrackRecord: { onTime: "70%", delayed: "30%", cancelled: "0%" },

    paymentFlexibility: {
      score: 8.0,
      commonPlans: ["50/50", "40/60"],
      postHandoverAvailable: true
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+25%",
      avgRentalYield: "7.0%",
      resaleLiquidity: "Medium"
    },

    buyerRiskProfile: { offPlanRisk: "Medium", handoverRisk: "Low" },

    usp: "Developing massive master communities like Azizi Venice.",
    records: "Launched the second tallest tower plan in Dubai.",
    description: "Azizi is known for scale. They have improved significantly since 2020 and are now building massive lagoon communities in Dubai South."
  },
  {
    id: "deyaar",
    name: "Deyaar",
    tier: "Mid-Market (Gov Link)",
    established: 2002,
    origin: "Dubai",
    imageColor: "bg-emerald-700",

    scores: {
      trust: 8.8,
      deliveryReliability: 9.0,
      constructionQuality: 8.2,
      resaleValue: 8.0,
      rentalDemand: 8.5
    },
    overallDeveloperScore: 8.5,

    bestFor: ["Stability", "Business Bay Growth"],
    idealFor: ["Safe Investors"],
    notIdealFor: ["Luxury Seekers"],

    signatureProject: "Regalia",
    flagshipCommunities: ["Business Bay", "Dubai Production City"],

    portfolio: { totalProjects: 35, activeProjects: 6 },
    deliveryTrackRecord: { onTime: "90%", delayed: "10%", cancelled: "0%" },

    paymentFlexibility: {
      score: 7.0,
      commonPlans: ["60/40", "Post-Handover Options"],
      postHandoverAvailable: true
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+28%",
      avgRentalYield: "7.5%",
      resaleLiquidity: "Medium"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },

    usp: "Majority owned by Dubai Islamic Bank. High financial stability.",
    records: "Consistent delivery in Business Bay.",
    description: "Deyaar is a steady, reliable developer. They may not be the flashiest, but they deliver solid quality and are financially backed by a major bank."
  },
  {
    id: "iman",
    name: "Iman Developers",
    tier: "Modern Boutique",
    established: 2016,
    origin: "Dubai",
    imageColor: "bg-slate-600",

    scores: {
      trust: 8.9,
      deliveryReliability: 9.5,
      constructionQuality: 9.0,
      resaleValue: 9.1,
      rentalDemand: 9.3
    },
    overallDeveloperScore: 9.1,

    bestFor: ["Modern Tech-Homes", "JVC Yields"],
    idealFor: ["Young Professionals", "Tech Savvy Investors"],
    notIdealFor: ["Waterfront Seekers"],

    signatureProject: "One Sky Park & Oxford Gardens",
    flagshipCommunities: ["JVC", "Arjan"],

    portfolio: { totalProjects: 12, activeProjects: 4 },
    deliveryTrackRecord: { onTime: "100%", delayed: "0%", cancelled: "0%" },

    paymentFlexibility: {
      score: 6.5,
      commonPlans: ["50/50", "60/40"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+42%",
      avgRentalYield: "8.5%",
      resaleLiquidity: "High"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Zero" },

    usp: "Premium Automation. Smart homes with sleek, white/grey modern aesthetics.",
    records: "Sold out projects in hours in JVC.",
    description: "Iman is a rising star. They build Apple-store-like aesthetic buildings in JVC. High demand from European and younger tenants."
  },
  {
    id: "samana",
    name: "Samana Developers",
    tier: "Resort-Style Mid-Market",
    established: 2016,
    origin: "Dubai",
    imageColor: "bg-cyan-500",

    scores: {
      trust: 8.4,
      deliveryReliability: 8.8,
      constructionQuality: 8.0,
      resaleValue: 8.3,
      rentalDemand: 9.0
    },
    overallDeveloperScore: 8.5,

    bestFor: ["Private Pools", "Holiday Rentals"],
    idealFor: ["Airbnb Investors"],
    notIdealFor: ["Traditional Long-Term Rentals"],

    signatureProject: "Samana Golf Views",
    flagshipCommunities: ["JVC", "Arjan", "Dubai Studio City"],

    portfolio: { totalProjects: 20, activeProjects: 8 },
    deliveryTrackRecord: { onTime: "90%", delayed: "10%", cancelled: "0%" },

    paymentFlexibility: {
      score: 9.0,
      commonPlans: ["1% Monthly", "Post-Handover 5 Years"],
      postHandoverAvailable: true
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "+35%",
      avgRentalYield: "9.0% (Short Term)",
      resaleLiquidity: "Medium"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },

    usp: "Apartments with Private Pools on the balcony.",
    records: "Highest number of pool units in Dubai.",
    description: "Samana carved a niche by putting a pool on almost every balcony. This makes their units extremely popular for Airbnb and short-term rentals."
  },

  // ==========================================================
  // TIER 5: THE NEW & NICHE PLAYERS
  // ==========================================================
  {
    id: "london-gate",
    name: "London Gate",
    tier: "Branded Luxury",
    established: 2023,
    origin: "Dubai / UK",
    imageColor: "bg-rose-800",

    scores: {
      trust: 8.2,
      deliveryReliability: 8.5, // Estimated (New)
      constructionQuality: 8.8, // Estimated
      resaleValue: 8.5,
      rentalDemand: 8.8
    },
    overallDeveloperScore: 8.5,

    bestFor: ["Tallest Clocks", "Branded Luxury"],
    idealFor: ["Watch Collectors", "Icon Hunters"],
    notIdealFor: ["Conservative Investors"],

    signatureProject: "Franck Muller Aeternitas",
    flagshipCommunities: ["Dubai Marina"],

    portfolio: { totalProjects: 5, activeProjects: 3 },
    deliveryTrackRecord: { onTime: "New", delayed: "0%", cancelled: "0%" },

    paymentFlexibility: {
      score: 7.5,
      commonPlans: ["60/40"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "N/A (New)",
      avgRentalYield: "Proj. 7.0%",
      resaleLiquidity: "Medium"
    },

    buyerRiskProfile: { offPlanRisk: "Medium (New Developer)", handoverRisk: "Low" },

    usp: "Building the tallest residential clock tower in the world.",
    records: "Partnership with Franck Muller watches.",
    description: "London Gate burst onto the scene with the Franck Muller tower. They aim to bring London-style elegance and massive branded landmarks to Dubai."
  },
  {
    id: "object-1",
    name: "Object 1",
    tier: "Contemporary Art",
    established: 2022,
    origin: "International",
    imageColor: "bg-violet-600",

    scores: {
      trust: 8.3,
      deliveryReliability: 9.0,
      constructionQuality: 8.9,
      resaleValue: 8.6,
      rentalDemand: 9.0
    },
    overallDeveloperScore: 8.7,

    bestFor: ["Art Lovers", "JVC Modern"],
    idealFor: ["Gen Z", "Creative Professionals"],
    notIdealFor: ["Classical Style Lovers"],

    signatureProject: "RA1N & 1WOOD",
    flagshipCommunities: ["JVC", "Dubai Sports City"],

    portfolio: { totalProjects: 8, activeProjects: 5 },
    deliveryTrackRecord: { onTime: "100%", delayed: "0%", cancelled: "0%" },

    paymentFlexibility: {
      score: 7.0,
      commonPlans: ["60/40"],
      postHandoverAvailable: false
    },

    marketPerformance: {
      avgCapitalAppreciation5Y: "N/A (New)",
      avgRentalYield: "Proj. 8.0%",
      resaleLiquidity: "Medium"
    },

    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },

    usp: "Real Estate as Art. Every building has a distinct artistic theme.",
    records: "Unique amenities like 'Rain Rooms' and 'Cinema Pods'.",
    description: "Object 1 is refreshing the JVC market with buildings that feel like art galleries. They focus heavily on community amenities and modern, clean lines."
  },
  {
    id: "merras",
    name: "Meraas",
    tier: "Lifestyle Master",
    established: 2007,
    origin: "Dubai",
    imageColor: "bg-teal-600",
    scores: { trust: 9.3, deliveryReliability: 9.5, constructionQuality: 9.2, resaleValue: 9.6, rentalDemand: 9.8 },
    overallDeveloperScore: 9.5,
    bestFor: ["Urban Lifestyle", "Low-Rise Luxury"],
    idealFor: ["End Users", "Families"],
    notIdealFor: ["Budget Buyers"],
    signatureProject: "Bluewaters Island",
    flagshipCommunities: ["City Walk", "Port de La Mer", "Bluewaters"],
    portfolio: { totalProjects: 40, activeProjects: 10 },
    deliveryTrackRecord: { onTime: "95%", delayed: "5%", cancelled: "0%" },
    paymentFlexibility: { score: 5.0, commonPlans: ["50/50"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+55%", avgRentalYield: "6.0%", resaleLiquidity: "High" },
    buyerRiskProfile: { offPlanRisk: "Zero", handoverRisk: "Zero" },
    usp: "Curators of Dubai's coolest districts.",
    records: "Built the Ain Dubai (Dubai Eye).",
    description: "Meraas builds the places everyone wants to visit on weekends. City Walk and Bluewaters are iconic lifestyle destinations."
  },
  {
    id: "select-group",
    name: "Select Group",
    tier: "Premium Waterfront",
    established: 2002,
    origin: "Dubai",
    imageColor: "bg-indigo-800",
    scores: { trust: 9.1, deliveryReliability: 9.4, constructionQuality: 9.3, resaleValue: 9.5, rentalDemand: 9.7 },
    overallDeveloperScore: 9.2,
    bestFor: ["Marina Living", "Capital Growth"],
    idealFor: ["Waterfront Investors"],
    notIdealFor: ["Villa Buyers"],
    signatureProject: "Marina Gate",
    flagshipCommunities: ["Dubai Marina", "Business Bay", "Palm Jumeirah"],
    portfolio: { totalProjects: 30, activeProjects: 5 },
    deliveryTrackRecord: { onTime: "98%", delayed: "2%", cancelled: "0%" },
    paymentFlexibility: { score: 5.5, commonPlans: ["40/60"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+48%", avgRentalYield: "6.8%", resaleLiquidity: "Very High" },
    buyerRiskProfile: { offPlanRisk: "Very Low", handoverRisk: "Low" },
    usp: "The Kings of Dubai Marina.",
    records: "Marina Gate is the most liquid asset in the Marina.",
    description: "Select Group dominates the Marina skyline. Their buildings hold value incredibly well and are favorites among European expats."
  },
  {
    id: "nshama",
    name: "Nshama",
    tier: "Affordable Master",
    established: 2014,
    origin: "Dubai",
    imageColor: "bg-lime-600",
    scores: { trust: 8.8, deliveryReliability: 9.0, constructionQuality: 8.0, resaleValue: 8.5, rentalDemand: 9.2 },
    overallDeveloperScore: 8.7,
    bestFor: ["Affordable Communities", "First Time Buyers"],
    idealFor: ["Families", "Mid-Income Investors"],
    notIdealFor: ["Luxury Seekers"],
    signatureProject: "Town Square",
    flagshipCommunities: ["Town Square"],
    portfolio: { totalProjects: 40, activeProjects: 5 },
    deliveryTrackRecord: { onTime: "95%", delayed: "5%", cancelled: "0%" },
    paymentFlexibility: { score: 6.5, commonPlans: ["50/50"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+38%", avgRentalYield: "7.5%", resaleLiquidity: "High" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Created the best affordable family community in Dubai.",
    records: "Town Square Park is a major attraction.",
    description: "Nshama focuses on one thing: Town Square. And they do it perfectly. It is the go-to community for families wanting affordable villas and apartments."
  },
  {
    id: "mag",
    name: "MAG Lifestyle",
    tier: "Wellness Luxury",
    established: 1978,
    origin: "Dubai",
    imageColor: "bg-stone-600",
    scores: { trust: 8.6, deliveryReliability: 8.8, constructionQuality: 8.5, resaleValue: 8.7, rentalDemand: 8.5 },
    overallDeveloperScore: 8.6,
    bestFor: ["Health-Centric Living", "Luxury Villas"],
    idealFor: ["Health Conscious", "Luxury Buyers"],
    notIdealFor: ["Budget Flippers"],
    signatureProject: "Keturah Reserve",
    flagshipCommunities: ["MBR City", "Dubai Creek"],
    portfolio: { totalProjects: 25, activeProjects: 6 },
    deliveryTrackRecord: { onTime: "90%", delayed: "10%", cancelled: "0%" },
    paymentFlexibility: { score: 6.0, commonPlans: ["60/40"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+40%", avgRentalYield: "6.0%", resaleLiquidity: "Medium" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Pioneers of 'Bio-Living' and Wellness Real Estate.",
    records: "Partnered with Ritz-Carlton for Creekside residences.",
    description: "MAG is pivoting to wellness. Their 'Keturah' brand focuses on air quality, light, and space to improve resident health."
  },
  {
    id: "majid-al-futtaim",
    name: "Majid Al Futtaim",
    tier: "Lifestyle Giant",
    established: 1992,
    origin: "Dubai",
    imageColor: "bg-blue-500",
    scores: { trust: 9.7, deliveryReliability: 9.8, constructionQuality: 9.5, resaleValue: 9.8, rentalDemand: 9.9 },
    overallDeveloperScore: 9.7,
    bestFor: ["Integrated Communities", "Lagoon Living"],
    idealFor: ["Families", "End Users"],
    notIdealFor: ["Short Term Flippers"],
    signatureProject: "Tilal Al Ghaf",
    flagshipCommunities: ["Tilal Al Ghaf", "Al Zahia"],
    portfolio: { totalProjects: 15, activeProjects: 5 },
    deliveryTrackRecord: { onTime: "98%", delayed: "2%", cancelled: "0%" },
    paymentFlexibility: { score: 5.5, commonPlans: ["50/50"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+90% (Tilal Al Ghaf)", avgRentalYield: "5.5%", resaleLiquidity: "Very High" },
    buyerRiskProfile: { offPlanRisk: "Zero", handoverRisk: "Zero" },
    usp: "The Retail Giant behind Mall of the Emirates.",
    records: "Tilal Al Ghaf broke records for villa price appreciation.",
    description: "MAF brings their retail expertise to housing. Tilal Al Ghaf is arguably the most successful villa community launch of the last decade."
  },
  {
    id: "prescott",
    name: "Prescott",
    tier: "Mid-Market Value",
    established: 2006,
    origin: "Dubai",
    imageColor: "bg-indigo-500",
    scores: { trust: 8.5, deliveryReliability: 9.0, constructionQuality: 8.2, resaleValue: 8.3, rentalDemand: 8.6 },
    overallDeveloperScore: 8.5,
    bestFor: ["Value Investing", "Sports City"],
    idealFor: ["Budget Investors"],
    notIdealFor: ["Luxury"],
    signatureProject: "Serene Gardens",
    flagshipCommunities: ["Al Furjan", "Dubai Sports City", "Discovery Gardens"],
    portfolio: { totalProjects: 15, activeProjects: 3 },
    deliveryTrackRecord: { onTime: "95%", delayed: "5%", cancelled: "0%" },
    paymentFlexibility: { score: 7.0, commonPlans: ["60/40"], postHandoverAvailable: true },
    marketPerformance: { avgCapitalAppreciation5Y: "+25%", avgRentalYield: "7.8%", resaleLiquidity: "Medium" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Quietly delivering quality for 15+ years.",
    records: "Strong presence in Sports City.",
    description: "Prescott is a 'slow and steady' developer. They don't hype much, but they deliver good quality buildings in mid-market areas."
  },
  {
    id: "bloom",
    name: "Bloom Holding",
    tier: "Abu Dhabi Quality",
    established: 2007,
    origin: "Abu Dhabi",
    imageColor: "bg-amber-600",
    scores: { trust: 8.9, deliveryReliability: 9.0, constructionQuality: 8.6, resaleValue: 8.5, rentalDemand: 8.8 },
    overallDeveloperScore: 8.8,
    bestFor: ["JVC Towers", "School Proximity"],
    idealFor: ["Families"],
    notIdealFor: ["Hyped Launches"],
    signatureProject: "Bloom Towers",
    flagshipCommunities: ["JVC", "Abu Dhabi"],
    portfolio: { totalProjects: 20, activeProjects: 4 },
    deliveryTrackRecord: { onTime: "90%", delayed: "10%", cancelled: "0%" },
    paymentFlexibility: { score: 6.0, commonPlans: ["50/50"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+30%", avgRentalYield: "7.2%", resaleLiquidity: "Medium" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Strong focus on education-linked communities.",
    records: "Developed Brighton College campuses.",
    description: "Bloom brings Abu Dhabi construction standards to JVC. Their towers are well-maintained and popular with families due to their school connections."
  },
  {
    id: "dubai-properties",
    name: "Dubai Properties",
    tier: "Government Master",
    established: 2004,
    origin: "Dubai",
    imageColor: "bg-blue-800",
    scores: { trust: 9.5, deliveryReliability: 9.2, constructionQuality: 8.8, resaleValue: 9.2, rentalDemand: 9.4 },
    overallDeveloperScore: 9.2,
    bestFor: ["Waterfront (JBR)", "Family Villas"],
    idealFor: ["Safe Investors", "Families"],
    notIdealFor: ["Short Term Flips"],
    signatureProject: "1/JBR",
    flagshipCommunities: ["JBR", "Business Bay", "Mudon", "Villanova"],
    portfolio: { totalProjects: 60, activeProjects: 10 },
    deliveryTrackRecord: { onTime: "92%", delayed: "8%", cancelled: "0%" },
    paymentFlexibility: { score: 6.0, commonPlans: ["60/40"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+45%", avgRentalYield: "6.5%", resaleLiquidity: "High" },
    buyerRiskProfile: { offPlanRisk: "Zero", handoverRisk: "Zero" },
    usp: "The Original Master Developer of New Dubai.",
    records: "Developed JBR, the world's largest single-phase residential development.",
    description: "Dubai Properties is the backbone of the city. From JBR to Business Bay, they build the districts that define Dubai."
  },
  {
    id: "h-and-h",
    name: "H&H Development",
    tier: "Boutique Ultra-Luxury",
    established: 2007,
    origin: "Dubai",
    imageColor: "bg-gray-700",
    scores: { trust: 9.0, deliveryReliability: 9.0, constructionQuality: 9.8, resaleValue: 9.5, rentalDemand: 9.0 },
    overallDeveloperScore: 9.1,
    bestFor: ["Bespoke Luxury", "Canal Living"],
    idealFor: ["UHNWIs"],
    notIdealFor: ["Budget Buyers"],
    signatureProject: "Eden House",
    flagshipCommunities: ["Dubai Water Canal", "Jumeirah"],
    portfolio: { totalProjects: 10, activeProjects: 3 },
    deliveryTrackRecord: { onTime: "90%", delayed: "10%", cancelled: "0%" },
    paymentFlexibility: { score: 4.0, commonPlans: ["Cash / 50-50"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+65%", avgRentalYield: "5.0%", resaleLiquidity: "Medium (Exclusive)" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "True Bespoke Luxury. Not for the masses.",
    records: "Four Seasons Residences.",
    description: "H&H flies under the radar but builds some of the most exclusive addresses in Dubai, like the Four Seasons Residences."
  },
  {
    id: "sankari",
    name: "Sankari Properties",
    tier: "Ultra-Prime Newcomer",
    established: 2023,
    origin: "Dubai",
    imageColor: "bg-yellow-600",
    scores: { trust: 8.5, deliveryReliability: 8.5, constructionQuality: 10.0, resaleValue: 9.0, rentalDemand: 8.5 },
    overallDeveloperScore: 8.8,
    bestFor: ["Billionaire Living", "Marasi Bay"],
    idealFor: ["Super Rich"],
    notIdealFor: ["Investors"],
    signatureProject: "Sankari Place",
    flagshipCommunities: ["Marasi Bay"],
    portfolio: { totalProjects: 2, activeProjects: 2 },
    deliveryTrackRecord: { onTime: "New", delayed: "0%", cancelled: "0%" },
    paymentFlexibility: { score: 4.0, commonPlans: ["50/50"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "N/A", avgRentalYield: "N/A", resaleLiquidity: "Niche" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "$10M+ Apartments only.",
    records: "Most expensive entry price in Business Bay.",
    description: "Sankari is targeting the absolute top 0.01%. Their project in Marasi Bay is redefining luxury with massive floorplates and hotel-grade service."
  },
  // ==========================================================
// ADDITIONAL 15 BUILDERS TO APPEND TO BUILDERS ARRAY
// ==========================================================
  {
    id: "reportage",
    name: "Reportage Properties",
    tier: "Affordable / High-Yield",
    established: 2014,
    origin: "Abu Dhabi",
    imageColor: "bg-sky-700",
    scores: { trust: 8.2, deliveryReliability: 8.8, constructionQuality: 7.8, resaleValue: 8.0, rentalDemand: 9.0 },
    overallDeveloperScore: 8.4,
    bestFor: ["High Rental Yield", "Entry-Level Buyers"],
    idealFor: ["Salary Investors", "Buy-to-Let"],
    notIdealFor: ["Luxury Buyers"],
    signatureProject: "Rukan Lofts",
    flagshipCommunities: ["Dubailand", "Abu Dhabi"],
    portfolio: { totalProjects: 25, activeProjects: 8 },
    deliveryTrackRecord: { onTime: "92%", delayed: "8%", cancelled: "0%" },
    paymentFlexibility: { score: 9.0, commonPlans: ["1% Monthly"], postHandoverAvailable: true },
    marketPerformance: { avgCapitalAppreciation5Y: "+28%", avgRentalYield: "8.5%", resaleLiquidity: "Medium" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Strong yields with low entry prices",
    records: "Major player in Abu Dhabi affordable housing",
    description: "Reportage focuses on compact, affordable homes with strong rental demand."
  },
  {
    id: "meraki",
    name: "Meraki Developers",
    tier: "Boutique Luxury",
    established: 2016,
    origin: "Dubai",
    imageColor: "bg-fuchsia-700",
    scores: { trust: 8.7, deliveryReliability: 9.0, constructionQuality: 9.2, resaleValue: 9.0, rentalDemand: 9.3 },
    overallDeveloperScore: 9.0,
    bestFor: ["Design Apartments", "Airbnb"],
    idealFor: ["Lifestyle Investors"],
    notIdealFor: ["Budget Buyers"],
    signatureProject: "Iconic Tower",
    flagshipCommunities: ["Dubai Internet City"],
    portfolio: { totalProjects: 6, activeProjects: 2 },
    deliveryTrackRecord: { onTime: "95%", delayed: "5%", cancelled: "0%" },
    paymentFlexibility: { score: 6.0, commonPlans: ["60/40"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+45%", avgRentalYield: "8.0%", resaleLiquidity: "High" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Iconic silhouettes with premium interiors",
    records: "High Airbnb premiums",
    description: "Meraki delivers statement buildings in prime tech-driven locations."
  },
  {
    id: "ora",
    name: "ORA Developers",
    tier: "Ultra-Luxury Global",
    established: 2016,
    origin: "International",
    imageColor: "bg-black",
    scores: { trust: 9.0, deliveryReliability: 8.5, constructionQuality: 9.8, resaleValue: 9.6, rentalDemand: 8.8 },
    overallDeveloperScore: 9.2,
    bestFor: ["Trophy Assets"],
    idealFor: ["UHNWIs"],
    notIdealFor: ["Yield Investors"],
    signatureProject: "ORLA Palm Jumeirah",
    flagshipCommunities: ["Palm Jumeirah"],
    portfolio: { totalProjects: 10, activeProjects: 3 },
    deliveryTrackRecord: { onTime: "85%", delayed: "15%", cancelled: "0%" },
    paymentFlexibility: { score: 4.5, commonPlans: ["60/40"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+75%", avgRentalYield: "5.0%", resaleLiquidity: "Niche" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Hotel-grade residences",
    records: "Managed by global hospitality brands",
    description: "ORA focuses on rare beachfront trophy homes."
  },
  {
    id: "peace-homes",
    name: "Peace Homes",
    tier: "Affordable / Fast",
    established: 2014,
    origin: "Dubai",
    imageColor: "bg-green-600",
    scores: { trust: 8.0, deliveryReliability: 9.5, constructionQuality: 7.5, resaleValue: 7.8, rentalDemand: 8.8 },
    overallDeveloperScore: 8.3,
    bestFor: ["Quick Delivery"],
    idealFor: ["Entry Investors"],
    notIdealFor: ["Luxury Buyers"],
    signatureProject: "Peace Lagoons",
    flagshipCommunities: ["DLRC", "JVC"],
    portfolio: { totalProjects: 18, activeProjects: 6 },
    deliveryTrackRecord: { onTime: "97%", delayed: "3%", cancelled: "0%" },
    paymentFlexibility: { score: 9.5, commonPlans: ["Post-Handover"], postHandoverAvailable: true },
    marketPerformance: { avgCapitalAppreciation5Y: "+22%", avgRentalYield: "8.2%", resaleLiquidity: "Medium" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Speed-focused delivery",
    records: "Consistent handovers",
    description: "Peace Homes is known for fast execution and attractive payment plans."
  },
  {
    id: "condor",
    name: "Condor Developers",
    tier: "Mid-Market",
    established: 1980,
    origin: "Dubai",
    imageColor: "bg-zinc-700",
    scores: { trust: 8.4, deliveryReliability: 8.6, constructionQuality: 8.4, resaleValue: 8.2, rentalDemand: 8.6 },
    overallDeveloperScore: 8.5,
    bestFor: ["Value Apartments"],
    idealFor: ["Long-Term Hold"],
    notIdealFor: ["Hype Buyers"],
    signatureProject: "Condor Marina Star",
    flagshipCommunities: ["Dubai Marina", "Al Furjan"],
    portfolio: { totalProjects: 20, activeProjects: 4 },
    deliveryTrackRecord: { onTime: "90%", delayed: "10%", cancelled: "0%" },
    paymentFlexibility: { score: 6.5, commonPlans: ["60/40"], postHandoverAvailable: false },
    marketPerformance: { avgCapitalAppreciation5Y: "+35%", avgRentalYield: "7.0%", resaleLiquidity: "High" },
    buyerRiskProfile: { offPlanRisk: "Low", handoverRisk: "Low" },
    usp: "Quiet consistency",
    records: "40+ years presence",
    description: "Condor delivers dependable mid-market projects in strong locations."
  }
];
