// ==========================================================
// DUBAI DATA (Deep Investor Intelligence Edition)
// ==========================================================

export const DUBAI_AREAS = [
// --- DUBAI: AL BARARI ---
  {
    id: "al-barari",
    name: "Al Barari",
    emirate: "Dubai",
    category: "Ultra-Luxury / Green Living",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "5.8%",
    avgPrice: "AED 12.5M",
    imageColor: "bg-emerald-800", // Deep Green/Nature
    
    // 🟢 KEY FACTS
    masterDeveloper: "Al Barari Development",
    location: "Nad Al Sheba / Sheikh Mohammed Bin Zayed Rd",
    totalArea: "15.3 Million sq. ft.",
    towers: "Low-rise (7th Heaven/Ashjar) & Villas",
    completion: "Mature / Expansion Phase",
    privateBeach: "No (Man-made Lakes & Streams)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "Dubai's greenest community with 60% of the area dedicated to botanical gardens and lakes.",
      "Home to 'The Farm', one of Dubai's most famous organic dining destinations.",
      "Exclusive, low-density living favored by HNWIs seeking privacy and wellness.",
      "Unique micro-climate; typically 2-3 degrees cooler than the rest of Dubai due to greenery."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "The Farm (Dining)", 
      "Body Language Health Club (Wellness)", 
      "Heart & Soul Spa (Wellness)", 
      "Open-air Cinema (Leisure)", 
      "Themed Botanical Gardens (Nature)",
      "Waitrose Supermarket (Retail)",
      "7th Heaven Retail District (Shopping)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "2,500+ (Villas & Apts)",
      handedOver: "85%",
      underConstruction: "15%",
      nextDelivery: "Q4 2026 (IXORA / Chorisia II)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "N/A", mins: "--", status: "Car Dependent" },
      roadAccess: ["Sheikh Mohammed Bin Zayed Road (E311)"],
      walkability: "High (Within gardens & paths)",
      cycling: "Scenic community tracks"
    },

    aiVerdict: {
      title: "The Ultimate Sanctuary",
      summary: "Al Barari is an 'end-user' paradise. While rental yields (5-6%) are lower than mass-market areas, the capital appreciation on its limited villa stock is exceptional. It is immune to market oversupply due to its unique 'botanical' niche."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 9.5M", 
      "2024": "AED 11.0M", 
      "2025": "AED 12.5M",
      "2026 (Proj)": "AED 13.8M" 
    },

    demandSignals: { 
      rentalDemand: "High (Niche Luxury)", 
      resaleLiquidity: "Moderate (High Ticket)", 
      tenantProfile: "CEOs, Celebrities & Nature Lovers" 
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

    scores: { cashFlow: 6.5, appreciation: 9.2, liquidity: 6.8, risk: 4.5, lifestyle: 10.0 },
    overallScore: 8.9,

    // 🟢 UNIT ECONOMICS (Real Rents)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.2%", rent: "AED 160k" }, // 7th Heaven / Ashjar
      twoBed: { roi: "5.9%", rent: "AED 240k" }  // 7th Heaven / Ashjar
    },

    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,500+", occupancy: "65%", tenantType: "Wellness Retreats" },

    futureUpgrades: [
      { name: "Al Barari Playground", status: "Completed" },
      { name: "Lunaria Villas", status: "Handing Over" },
      { name: "Community Mall Expansion", status: "Planned" }
    ],

    // 🟢 REAL ESTATE IN AL BARARI
    description: "Al Barari is a unique destination in Dubai, famously known as the 'Green Heart' of the city. It is an eco-conscious development that integrates luxury homes with nature. Unlike the skyscraper-heavy districts, Al Barari features 60% green space, including themed gardens, natural lakes, and freshwater streams. The real estate mix includes palatial villas (The Residences, The Reserve), contemporary villas (The Nest, Chorisia), and luxury low-rise apartments (Ashjar, 7th Heaven), catering to an elite demographic.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Predominantly wealthy end-users (families) looking for a permanent residence. Low speculator activity compared to off-plan hotspots." },
      { factor: "Rental Demand", read: "Steady demand for the unique apartments in Ashjar and 7th Heaven from professionals seeking a 'resort-like' daily life." },
      { factor: "Price Drivers", read: "Scarcity of true 'green' communities in Dubai drives the premium. The limited number of plots ensures values remain protected." },
      { factor: "Liquidity", read: "Sales cycles can be longer due to high price points (AED 10M+), but properties retain value exceptionally well during downturns." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "1-Bedroom apartments in Ashjar start from AED 150k, significantly higher than the Dubai average due to size and finish.",
      "Luxury 6-bedroom villas can command rents upwards of AED 1.2 Million per year.",
      "Tenant retention is extremely high, with many tenants eventually converting to buyers."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "Entry-level apartments (1-bed) trade around AED 2.2M - 2.5M.",
      "Mid-range villas (The Nest/Chorisia) range from AED 10M to 15M.",
      "Bespoke mansions in 'The Reserve' trade between AED 30M to AED 100M+ depending on customization."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "For ROI, look at 'Ashjar' or '7th Heaven' apartments. For capital preservation and prestige, 'The Nest' or 'Chorisia' villas are unbeatable.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "18 km", mins: "20 mins" },
      school: { name: "Dunecrest American", km: "1 km", mins: "2 mins" },
      tourist: { name: "Global Village", km: "4 km", mins: "8 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Cityland Mall", km: "5 km", mins: "9 mins" },
      business: { name: "DIFC", km: "15 km", mins: "18 mins" },
      hospital: { name: "Mediclinic Parkview", km: "12 km", mins: "15 mins" }
    },

    buyerPsychology: {
      trigger: "Wellness & Exclusivity",
      archetype: "The Nature Connoisseur",
      motivation: "Buyers choose Al Barari to escape the concrete jungle. They are motivated by air quality, privacy, and the prestige of living in Dubai's most exclusive green address."
    }
  },

 // --- DUBAI: AL BARSHA (1, 2, 3) ---
  {
    id: "al-barsha",
    name: "Al Barsha (1, 2, 3)",
    emirate: "Dubai",
    category: "Central / Family / Mixed",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "6.8%",
    avgPrice: "AED 4.5M (Villas)",
    imageColor: "bg-blue-600", // Corporate/Central
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private Developers / TECOM",
    location: "Sheikh Zayed Road / Hessa Street",
    totalArea: "Large District (Zones 1, 2, 3, South)",
    towers: "Mid-rise Apts (Barsha 1) & Villas (2/3)",
    completion: "Established / Fully Developed",
    privateBeach: "No (15 mins to Jumeirah Beach)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "Home to the iconic Mall of the Emirates and Ski Dubai.",
      "Barsha 1 is a high-density apartment zone; Barsha 2 & 3 are quiet, upscale villa communities.",
      "Unmatched connectivity: bounded by Sheikh Zayed Rd (E11) and Al Khail Rd (E44).",
      "Top-tier schooling district with gems like Dubai American Academy and Kings' School."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Mall of the Emirates (Shopping)", 
      "Ski Dubai (Leisure)", 
      "Al Barsha Pond Park (Nature)", 
      "Dubai Community Theatre (Culture)", 
      "Al Barsha Mall (Shopping)",
      "High-end Restaurants (Dining)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Mature Market",
      handedOver: "98%",
      underConstruction: "2%",
      nextDelivery: "Limited Infill Plots"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Mall of Emirates / Mashreq", mins: "Direct Access", status: "Active (Red Line)" },
      roadAccess: ["Sheikh Zayed Road (E11)", "Al Khail Road (E44)"],
      walkability: "High (Barsha 1) / Moderate (Barsha 2/3)",
      cycling: "Tracks in Pond Park"
    },

    aiVerdict: {
      title: "The Central Hub",
      summary: "Ideally located for families and commuters. Barsha 1 offers solid apartment yields due to metro access. Barsha 2 & 3 villas are 'forever homes' with capital growth driven by land value and scarcity."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 3.8M (Villa)", 
      "2024": "AED 4.2M (Villa)", 
      "2025": "AED 4.5M (Villa)",
      "2026 (Proj)": "AED 4.8M (Villa)" 
    },

    demandSignals: { 
      rentalDemand: "Very High", 
      resaleLiquidity: "High", 
      tenantProfile: "Families & Professionals" 
    },
    ownership: { type: "Mixed (Freehold in Barsha South / Leasehold in 1,2,3)", eligibleFor: ["GCC / Expats (South)"], minDownPayment: "20%" },

    scores: { cashFlow: 7.5, appreciation: 6.8, liquidity: 8.5, risk: 4.0, lifestyle: 8.5 },
    overallScore: 8.4,

    // 🟢 UNIT ECONOMICS (Barsha 1 Apts / Barsha South)
    unitEconomics: { 
      studio: { roi: "7.2%", rent: "AED 60k" }, 
      oneBed: { roi: "6.8%", rent: "AED 85k" }, 
      twoBed: { roi: "6.5%", rent: "AED 125k" } 
    },

    shortTermScore: 8.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 550", occupancy: "82%", tenantType: "Shoppers/Tourists" },

    futureUpgrades: [
      { name: "Mall of Emirates Expansion", status: "Ongoing" },
      { name: "Hessa Street Improvement", status: "Under Construction" },
      { name: "New Local Parks", status: "Planned" }
    ],

    // 🟢 REAL ESTATE IN AL BARSHA
    description: "Al Barsha is one of Dubai's most established and diverse districts. It is divided into sub-communities: Al Barsha 1 (bustling commercial/apartment hub near the Metro), and Al Barsha 2 & 3 (quiet, affluent villa neighborhoods). It is famous for housing the Mall of the Emirates. The area is a favorite for families due to the wide roads, large plot sizes, and high concentration of top-rated international schools.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Barsha 2 & 3 are heavily GCC/Local dominated for villas. Barsha South (Arjan/Science Park) attracts expat investors." },
      { factor: "Rental Demand", read: "Extremely consistent. Barsha 1 attracts workers needing Metro access. Barsha 2/3 attract senior execs with families." },
      { factor: "Price Drivers", read: "Location is the #1 driver. Being equidistant to Marina and Downtown makes it the 'center of gravity' for Dubai." },
      { factor: "Liquidity", read: "High demand for rentals ensures low vacancy. Sales liquidity is lower for leasehold plots but high for freehold zones nearby." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "1-Bedroom apartments in Barsha 1 command AED 75k-95k, driven by MOE workers and tourists.",
      "4-5 Bedroom independent villas in Barsha 2/3 rent for AED 350k - 500k+ annually.",
      "Short-term rentals near the Mall are highly lucrative, capitalizing on shopping tourism."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "Apartment prices in freehold zones (Barsha South) start from AED 800k for 1-beds.",
      "Villas in Barsha 2/3 are often traded as land value + structure, ranging from AED 8M to 25M.",
      "Renovated resale villas fetch a 15-20% premium over older, original condition units."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "Check ownership laws carefully. Barsha 1, 2, 3 are largely Leasehold (GCC Only). For Expat Freehold, target 'Al Barsha South' or 'Villa Lantana'.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "25 km", mins: "22 mins" },
      school: { name: "Dubai American Academy", km: "1 km", mins: "3 mins" },
      tourist: { name: "Ski Dubai", km: "0.5 km", mins: "2 mins" },
      metro: { name: "MOE Metro Station", km: "0.2 km", mins: "1 min" },
      mall: { name: "Mall of the Emirates", km: "0.1 km", mins: "1 min" },
      business: { name: "Media City", km: "6 km", mins: "8 mins" },
      hospital: { name: "Saudi German Hospital", km: "2 km", mins: "4 mins" }
    },

    buyerPsychology: {
      trigger: "Convenience & Education",
      archetype: "The Family Pragmatist",
      motivation: "Buyers and tenants choose Barsha for logistics. The ability to do the school run, get to work, and visit a major mall all within 10 minutes is the primary driver."
    }
  },
// --- DUBAI: AL BARSHA SOUTH (Arjan, Science Park, Miracle Garden) ---
  {
    id: "al-barsha-south",
    name: "Al Barsha South",
    emirate: "Dubai",
    category: "High Yield / Affordable",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "8.2%",
    avgPrice: "AED 950k",
    imageColor: "bg-orange-600", // Vibrant/Family
    
    // 🟢 KEY FACTS
    masterDeveloper: "Tecom / Dubai Properties",
    location: "Umm Suqeim Road / Sheikh Mohammed Bin Zayed Rd",
    totalArea: "High-density Residential Zone",
    towers: "Mid-rise (G+10 to G+30)",
    completion: "Developing / High Activity",
    privateBeach: "No",

    // 🟢 HIGHLIGHTS
    highlights: [
      "Home to Dubai Miracle Garden and Butterfly Garden (Major Tourist Spots).",
      "Contains 'Dubai Science Park' – a growing hub for pharma and tech professionals.",
      "One of the highest rental yield zones in Dubai (consistently topping 8%).",
      "Excellent connectivity to Hessa Street and Umm Suqeim Road."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Dubai Miracle Garden (Leisure)", 
      "Dubai Butterfly Garden (Nature)", 
      "My City Centre Al Barsha (Shopping)", 
      "High-Street Retail Strips (Dining)", 
      "Safa Community School (Education)",
      "Mediclinic Parkview Hospital (Healthcare)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "40,000+",
      handedOver: "65%",
      underConstruction: "35%",
      nextDelivery: "Q3 2026 (Binghatti / Danube Projects)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Planned (Blue Line)", mins: "Future", status: "Under Planning" },
      roadAccess: ["Umm Suqeim St (D63)", "SMBZ Road (E311)"],
      walkability: "Moderate (Community Parks)",
      cycling: "Developing Network"
    },

    aiVerdict: {
      title: "The Yield King",
      summary: "Al Barsha South (specifically Arjan and Science Park) is the current king of gross rental yields for apartments. Entry prices are low, and rental demand is massive from mid-income professionals. Capital appreciation is steady as infrastructure improves."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 750k", 
      "2024": "AED 850k", 
      "2025": "AED 950k",
      "2026 (Proj)": "AED 1.05M" 
    },

    demandSignals: { 
      rentalDemand: "Extremely High", 
      resaleLiquidity: "High", 
      tenantProfile: "Teachers, Healthcare & Tech Workers" 
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.5, appreciation: 7.8, liquidity: 8.2, risk: 6.0, lifestyle: 7.5 },
    overallScore: 8.8,

    // 🟢 UNIT ECONOMICS
    unitEconomics: { 
      studio: { roi: "8.8%", rent: "AED 55k" }, 
      oneBed: { roi: "8.2%", rent: "AED 78k" }, 
      twoBed: { roi: "7.5%", rent: "AED 110k" } 
    },

    shortTermScore: 7.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 400", occupancy: "75%", tenantType: "Budget Tourists/Families" },

    futureUpgrades: [
      { name: "Dubai Metro Blue Line", status: "Approved" },
      { name: "New Regional Mall", status: "Planned" },
      { name: "Hessa Street Upgrade", status: "Under Construction" }
    ],

    description: "Al Barsha South has evolved from a quiet suburb into a bustling residential district. It comprises Arjan, Dubai Science Park, and Barsha South 1, 2, & 3. It is famous for housing the Miracle Garden. The area is a magnet for investors due to its affordability and the high number of new, modern building launches with resort-style amenities.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Heavy investor presence (70%+) focusing on buy-to-let apartments. End-users are increasing as schools and hospitals open." },
      { factor: "Rental Demand", read: "Vacancy is near zero in Science Park due to the influx of professionals working in the free zone." },
      { factor: "Price Drivers", read: "The upcoming Metro Blue Line station is the single biggest catalyst for future price growth here." },
      { factor: "Liquidity", read: "Small ticket sizes (under AED 1M) make these units very easy to sell in the secondary market." }
    ],

    rentalAnalysisPoints: [
      "Studios in Science Park can achieve net yields of 7-8% due to high corporate demand.",
      "2-Bedroom units in Arjan are popular with families due to proximity to Safa Community School.",
      "Rents have risen 15% year-on-year due to the spillover effect from pricier neighboring areas."
    ],

    salesAnalysisPoints: [
      "Off-plan payment plans here are among the most aggressive (1% monthly), attracting first-time buyers.",
      "Resale premiums are modest (5-10%), making it a volume market rather than a high-margin flip market.",
      "Fully furnished units command a significant price per sq.ft premium."
    ],

    investorTip: "Buy near the proposed Metro Blue Line stations in Arjan/Science Park. Once construction starts, capital values will jump.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "28 km", mins: "25 mins" },
      school: { name: "Safa Community School", km: "1 km", mins: "2 mins" },
      tourist: { name: "Miracle Garden", km: "0.5 km", mins: "1 min" },
      metro: { name: "MOE (Current Nearest)", km: "8 km", mins: "12 mins" },
      mall: { name: "My City Centre", km: "1 km", mins: "3 mins" },
      business: { name: "Dubai Science Park", km: "0 km", mins: "0 mins" },
      hospital: { name: "Mediclinic Parkview", km: "1 km", mins: "2 mins" }
    },

    buyerPsychology: {
      trigger: "Value & Future Growth",
      archetype: "The Smart Entry-Level Investor",
      motivation: "Driven by the numbers. They want the highest possible rental return for the lowest entry price, betting on the future metro connectivity."
    }
  },
  // --- DUBAI: AL FURJAN ---
  {
    id: "al-furjan",
    name: "Al Furjan",
    emirate: "Dubai",
    category: "Family / High Yield / Connected",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "7.5%",
    avgPrice: "AED 1.6M (Avg. Unit)",
    imageColor: "bg-blue-700", // Corporate/Family
    
    // 🟢 KEY FACTS
    masterDeveloper: "Nakheel",
    location: "Jebel Ali District (Route 2020 Metro)",
    totalArea: "5.6 Million sq. m",
    towers: "Mid-rise (Apartments) & Villas",
    completion: "Mature / Expansion (Murooj/Tilal)",
    privateBeach: "No (15 mins to Marina Beach)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "Directly connected to the Route 2020 Metro Line (Al Furjan Station).",
      "One of the highest rental yield zones for mid-market apartments (Studio/1-Beds approx 8%).",
      "Strategic location: 15 mins to Expo City and 10 mins to Dubai Marina.",
      "Self-contained community with 'Al Furjan Pavilion' and 'Al Furjan Club'."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Furjan Pavilion (Spinneys/Retail)", 
      "Al Furjan Club (Dining/Pool/Gym)", 
      "Ibn Battuta Mall (Nearby Shopping)", 
      "The Arbor School (Education)", 
      "Cycling Tracks (40km Network)",
      "Discovery Gardens Pavilion (Retail)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "28,000+ (Planned)",
      handedOver: "80%",
      underConstruction: "20%",
      nextDelivery: "Q3 2026 (Murooj & Tilal Al Furjan)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Al Furjan Station", mins: "Direct Access", status: "Active (Route 2020)" },
      roadAccess: ["Sheikh Zayed Rd (E11)", "Yalayis St (D57)"],
      walkability: "High (Near Metro & Pavilion)",
      cycling: "Excellent (Community Tracks)"
    },

    aiVerdict: {
      title: "The Smart Commuter's Choice",
      summary: "Al Furjan is the 'sweet spot' for investors seeking high rental yields (driven by Metro connectivity) and end-users seeking villa living without the premium price tag of Jumeirah Park."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 950k (Apt Avg)", 
      "2024": "AED 1.1M (Apt Avg)", 
      "2025": "AED 1.35M (Apt Avg)",
      "2026 (Proj)": "AED 1.5M (Apt Avg)" 
    },

    demandSignals: { 
      rentalDemand: "Very High", 
      resaleLiquidity: "High (Apartments)", 
      tenantProfile: "Jebel Ali/Media City Professionals" 
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.8, appreciation: 7.5, liquidity: 8.0, risk: 4.5, lifestyle: 7.8 },
    overallScore: 8.4,

    // 🟢 UNIT ECONOMICS (Apartment Rentals)
    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 52k" }, 
      oneBed: { roi: "7.2%", rent: "AED 80k" }, 
      twoBed: { roi: "6.8%", rent: "AED 115k" } 
    },

    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "75%", tenantType: "Expo Visitors/Business" },

    futureUpgrades: [
      { name: "Murooj Al Furjan Handover", status: "Construction" },
      { name: "Blue Line Metro Link", status: "Proposed Nearby" },
      { name: "New Community Mosques", status: "Planning" }
    ],

    // 🟢 REAL ESTATE IN AL FURJAN
    description: "Al Furjan is a vibrant residential development located between Sheikh Zayed Road and Mohammed Bin Zayed Road. It is famous for its shared community network of pathways and amenities. The area features two community centers (Pavilions) and a sports club. It is divided into apartment complexes (near the Metro) and villa communities (Quortaj and Dubai Style).",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Apartments are dominated by Asian and European investors chasing yields. Villas are popular with Arab and Western expat families." },
      { factor: "Rental Demand", read: "Driven by the 'Route 2020' Metro extension. Professionals working in JLT, Marina, and Expo City choose Furjan for affordability." },
      { factor: "Price Drivers", read: "Spillover from Discovery Gardens and Jumeirah Park. As Marina becomes too expensive, Al Furjan is the next logical freehold choice." },
      { factor: "Liquidity", read: "Studios and 1-beds near the Metro station sell within days. Villas take longer but have seen a 30% capital appreciation since 2021." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "Studios near the Metro station command a premium, renting for AED 50k-55k compared to AED 40k further away.",
      "3-Bedroom townhouses are highly sought after by families, renting for AED 160k - 180k.",
      "Service charges are relatively reasonable (AED 12-15/sq.ft for villas), boosting net yields."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "Apartment prices have crossed AED 1,100 per sq.ft in prime buildings (e.g., Azizi Riviera / Danube projects).",
      "Ready villas (Quortaj/Dubai Style) trade for AED 4.5M+, offering better value per sq.ft than The Springs.",
      "Off-plan launches (Tilal Al Furjan) sold out rapidly, indicating strong investor confidence in the master plan."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "Target 1-Bedroom apartments within 500m of the 'Al Furjan' or 'Discovery Gardens' Metro stations for maximum occupancy and yield.",

    connectivity: {
      airport: { name: "DWC (Al Maktoum)", km: "20 km", mins: "15 mins" },
      school: { name: "The Arbor School", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Expo City", km: "5 km", mins: "8 mins" },
      metro: { name: "Al Furjan Metro", km: "0.1 km", mins: "1 min" },
      mall: { name: "Ibn Battuta Mall", km: "3 km", mins: "5 mins" },
      business: { name: "Jebel Ali Freezone", km: "4 km", mins: "6 mins" },
      hospital: { name: "NMC Royal (DIP)", km: "5 km", mins: "8 mins" }
    },

    buyerPsychology: {
      trigger: "Connectivity & Community",
      archetype: "The Modern Family",
      motivation: "Buyers want the 'gated community' feel with a clubhouse and pool, but they also need the Metro to commute to work. Al Furjan offers both."
    }
  },

  // --- DUBAI: AL GARHOUD ---
  {
    id: "al-garhoud",
    name: "Al Garhoud",
    emirate: "Dubai",
    category: "Leasehold / Aviation Hub",
    
    // 🟢 REAL MARKET METRICS (Rental Focus)
    roi: "N/A (Leasehold)",
    avgPrice: "N/A (Rental Market)",
    imageColor: "bg-slate-700", // Corporate/Old Dubai
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private / Government",
    location: "Near DXB Airport / Deira",
    totalArea: "Established District",
    towers: "Low-rise & Mid-rise Legacy Buildings",
    completion: "Fully Developed",
    privateBeach: "No (Creek Views)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "The aviation capital of Dubai, adjacent to DXB Airport and Emirates Headquarters.",
      "Famous for 'The Irish Village' and the Dubai Tennis Stadium.",
      "Primarily a Leasehold area (GCC/Local ownership), meaning it's a rental-only market for most expats.",
      "Charming 'Old Dubai' feel with leafy streets and established villas."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "The Irish Village (Dining/Nightlife)", 
      "Dubai Tennis Stadium (Events)", 
      "Century Village (Dining)", 
      "Le Meridien Hotel (Hospitality)", 
      "Emirates Aviation College (Education)",
      "Dubai Creek Golf & Yacht Club (Leisure)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Stable Supply",
      handedOver: "100%",
      underConstruction: "0%",
      nextDelivery: "No Major New Inventory"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "GGICO / Airport T1", mins: "Direct Access", status: "Active (Red Line)" },
      roadAccess: ["Sheikh Zayed Road (E11)", "Airport Road"],
      walkability: "Moderate (Around Century Village)",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Pilot's Choice",
      summary: "Al Garhoud is a rental-heavy district dominated by Emirates Airline staff and families who love the 'Old Dubai' charm. For investors, this area is not for buying (Leasehold), but for tenants, it offers unbeatable convenience."
    },

    // 🟢 PRICE HISTORY (Rentals)
    priceTrend: { 
      "2023": "AED 85k (Rent - 2B)", 
      "2024": "AED 95k (Rent - 2B)", 
      "2025": "AED 110k (Rent - 2B)",
      "2026 (Proj)": "AED 115k (Rent - 2B)" 
    },

    demandSignals: { 
      rentalDemand: "High (Airline Staff)", 
      resaleLiquidity: "N/A (Leasehold)", 
      tenantProfile: "Pilots, Cabin Crew, Families" 
    },
    ownership: { type: "Leasehold (Non-Freehold)", eligibleFor: ["GCC / Locals"], minDownPayment: "N/A" },

    scores: { cashFlow: 0, appreciation: 0, liquidity: 0, risk: 0, lifestyle: 8.5 }, // Scores N/A for investment
    overallScore: 7.5, // Lifestyle score

    // 🟢 UNIT ECONOMICS (Rents)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 50k" }, 
      oneBed: { roi: "N/A", rent: "AED 75k" }, 
      twoBed: { roi: "N/A", rent: "AED 110k" } 
    },

    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "60%", tenantType: "Transit Passengers" },

    futureUpgrades: [
      { name: "Airport Expansion Support", status: "Ongoing" },
      { name: "Century Village Revamp", status: "Proposed" }
    ],

    description: "Al Garhoud is one of Dubai's most distinct neighborhoods, blending commercial activity with quiet residential pockets. It sits practically on the runway of Dubai International Airport, making it the preferred home for thousands of aviation professionals. The area is character-rich, hosting some of Dubai's oldest and most loved social venues.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A - This market is predominantly for tenants. Ownership is restricted to UAE/GCC nationals." },
      { factor: "Rental Demand", read: "Inelastic demand from the aviation sector. Vacancy rates are tied directly to Emirates Airlines hiring cycles." },
      { factor: "Price Drivers", read: "Rents are driven by the convenience of the commute to DXB and the quality of the older, larger apartments." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: [
      "Apartments here are significantly larger than new Dubai builds (e.g., 2-beds often 1,600+ sq.ft).",
      "Rents are stable and less volatile than Marina or Downtown.",
      "Villas in Garhoud are rare and often rented by senior executives or diplomats."
    ],

    salesAnalysisPoints: [
      "Sales data is negligible for expatriate investors due to ownership restrictions.",
      "GCC investors focus on land plots or full building acquisitions.",
      "The area holds value due to its irreplaceable location."
    ],

    investorTip: "This is not an investment zone for expats. Look here if you want to rent a spacious home with a garden near the airport.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "1 km", mins: "2 mins" },
      school: { name: "The Indian High School", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Irish Village", km: "0.2 km", mins: "1 min" },
      metro: { name: "GGICO Station", km: "0.5 km", mins: "2 mins" },
      mall: { name: "Deira City Centre", km: "2 km", mins: "5 mins" },
      business: { name: "Airport Freezone", km: "1 km", mins: "3 mins" },
      hospital: { name: "Mediclinic Welcare", km: "0.5 km", mins: "1 min" }
    },

    buyerPsychology: {
      trigger: "N/A (Rental Market)",
      archetype: "The Aviation Professional",
      motivation: "Tenants choose Garhoud for one reason: Zero commute to the airport and a vibrant, established social scene."
    }
  },

  // --- DUBAI: AL JADDAF (Culture Village) ---
  {
    id: "al-jaddaf",
    name: "Al Jaddaf / Culture Village",
    emirate: "Dubai",
    category: "Waterfront / Cultural",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "6.5%",
    avgPrice: "AED 1.4M",
    imageColor: "bg-indigo-600", // Cultural/Arts
    
    // 🟢 KEY FACTS
    masterDeveloper: "Dubai Holding",
    location: "Dubai Creek / Near Business Bay",
    totalArea: "Waterfront District",
    towers: "Luxury Mid-rise (Palazzo Versace, D1)",
    completion: "Developing / Partially Ready",
    privateBeach: "No (Creek Promenade)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "Strategically located between Old and New Dubai, on the banks of the Creek.",
      "Home to the ultra-luxury Palazzo Versace Hotel and D1 Tower.",
      "Developing into a cultural and arts hub with the Jameel Arts Centre.",
      "Direct Metro access (Green Line) and easy access to Al Khail Road."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Jameel Arts Centre (Culture)", 
      "Palazzo Versace (Luxury Dining)", 
      "Al Jaddaf Waterfront (Leisure)", 
      "Zabeel Stadium (Sports)", 
      "Latifa Hospital (Healthcare)",
      "Dubai Creek Boardwalk (Nature)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "12,000+",
      handedOver: "60%",
      underConstruction: "40%",
      nextDelivery: "Q1 2027 (Kempinski Residences)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Al Jadaf Station", mins: "Direct Access", status: "Active (Green Line)" },
      roadAccess: ["Al Khail Road (E44)"],
      walkability: "High (Along the Creek)",
      cycling: "Waterfront tracks"
    },

    aiVerdict: {
      title: "The Silent Performer",
      summary: "Al Jaddaf is undervalued compared to Business Bay. With its waterfront location, metro access, and proximity to Downtown (10 mins), it offers a 'luxury for less' proposition. Strong potential for capital growth as the 'Culture Village' vision matures."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 1.1M", 
      "2024": "AED 1.25M", 
      "2025": "AED 1.4M",
      "2026 (Proj)": "AED 1.55M" 
    },

    demandSignals: { 
      rentalDemand: "Moderate-High", 
      resaleLiquidity: "Moderate", 
      tenantProfile: "Healthcare Professionals & Creatives" 
    },
    ownership: { type: "Freehold (Culture Village)", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 8.0, liquidity: 6.5, risk: 5.0, lifestyle: 8.8 },
    overallScore: 8.2,

    // 🟢 UNIT ECONOMICS
    unitEconomics: { 
      studio: { roi: "6.8%", rent: "AED 60k" }, 
      oneBed: { roi: "6.5%", rent: "AED 90k" }, 
      twoBed: { roi: "5.9%", rent: "AED 130k" } 
    },

    shortTermScore: 7.2,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "70%", tenantType: "Medical Tourists/Business" },

    futureUpgrades: [
      { name: "Culture Village Completion", status: "Ongoing" },
      { name: "New Pedestrian Bridges", status: "Planned" },
      { name: "Water Transport Expansion", status: "Active" }
    ],

    description: "Al Jaddaf is Dubai's bridge between the past and the future. Situated on the Creek, it hosts traditional dhow building yards alongside the neo-classical luxury of the Palazzo Versace. The area is rapidly gentrifying, attracting investors who recognize the value of waterfront freehold land just minutes from the Burj Khalifa.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "A mix of GCC nationals appreciating the cultural heritage and smart investors spotting the price gap vs. Business Bay." },
      { factor: "Rental Demand", read: "Driven by staff from the massive Healthcare City nearby and creatives working in the Design District (d3)." },
      { factor: "Price Drivers", read: "Waterfront views are the primary value driver. Units facing the Creek command a 20% premium." },
      { factor: "Liquidity", read: "Moderate. It is not yet as liquid as Marina, but patient sellers realize good gains." }
    ],

    rentalAnalysisPoints: [
      "1-Bedroom apartments in 'D1 Tower' or 'Versace' rent for AED 110k+, offering luxury yields.",
      "Standard units in Al Jaddaf waterfront rent for AED 80k-90k, offering affordability near Downtown.",
      "High demand from medical tourists due to proximity to Latifa Hospital and Healthcare City."
    ],

    salesAnalysisPoints: [
      "Entry prices for luxury waterfront apartments are 30% cheaper than Business Bay.",
      "Branded residences (Versace, Kempinski) hold their value well during market fluctuations.",
      "Off-plan supply is limited compared to JVC, protecting resale values."
    ],

    investorTip: "Look for 'Creek-facing' units. The view is protected and will always command a premium over back-facing units.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "6 km", mins: "8 mins" },
      school: { name: "Swiss Scientific School", km: "2 km", mins: "4 mins" },
      tourist: { name: "Jameel Arts Centre", km: "0.5 km", mins: "1 min" },
      metro: { name: "Al Jadaf Station", km: "0.2 km", mins: "1 min" },
      mall: { name: "Dubai Festival City", km: "3 km", mins: "5 mins" },
      business: { name: "DIFC", km: "6 km", mins: "9 mins" },
      hospital: { name: "Latifa Hospital", km: "1 km", mins: "2 mins" }
    },

    buyerPsychology: {
      trigger: "Culture & Class",
      archetype: "The Sophisticated Investor",
      motivation: "Buyers here want the 'Versace' lifestyle or the artsy vibe of the waterfront without the chaos of Downtown traffic. They value the serenity of the Creek."
    }
  },

  
  // ==========================================================
  // AL KHAIL GATE
  // ==========================================================
 // --- DUBAI: AL KHAIL GATE ---
  {
    id: "al-khail-gate",
    name: "Al Khail Gate",
    emirate: "Dubai",
    category: "Affordable / Family",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "8.5%",
    avgPrice: "AED 620k",
    imageColor: "bg-orange-700", // Warm/Community
    
    // 🟢 KEY FACTS
    masterDeveloper: "Dubai Properties (Dubai Asset Management)",
    location: "Al Quoz Industrial Area 2",
    totalArea: "Massive Residential Community",
    towers: "Mid-rise Apartments (Phases 1 & 2)",
    completion: "Ready / Mature",
    privateBeach: "No",

    // 🟢 HIGHLIGHTS
    highlights: [
      "One of Dubai's most popular affordable housing communities for families and professionals.",
      "Centrally located with direct access to Al Khail Road (E44), equidistant to New and Old Dubai.",
      "Self-contained community with its own mall (West Zone), sports courts, and mosques.",
      "Consistently high occupancy rates (95%+) ensuring stable rental income."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Khail Gate Community Centre (Shopping)", 
      "West Zone Mall (Retail)", 
      "Jogging Track (Fitness)", 
      "Football & Basketball Courts (Sports)", 
      "Children's Playgrounds (Family)",
      "Community Mosques (Worship)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "9,000+ Apartments",
      handedOver: "100%",
      underConstruction: "0%",
      nextDelivery: "No Major New Supply"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "No Direct Metro", mins: "Feeder Bus F15/F17", status: "Bus Link to ONPASSIVE Station" },
      roadAccess: ["Al Khail Road (E44)", "Marabea Street"],
      walkability: "High (Within community walls)",
      cycling: "Internal community paths"
    },

    aiVerdict: {
      title: "The Budget Yield Star",
      summary: "Al Khail Gate is a 'cash cow' for rental income. While capital appreciation is modest compared to luxury areas, the entry price is unbeatable and tenant demand is perpetual due to its central location and affordability."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 480k", 
      "2024": "AED 550k", 
      "2025": "AED 620k",
      "2026 (Proj)": "AED 680k" 
    },

    demandSignals: { 
      rentalDemand: "Extremely High", 
      resaleLiquidity: "Moderate", 
      tenantProfile: "Mid-income Families & Staff Accommodation" 
    },
    ownership: { type: "Leasehold (Primary) / Select Freehold", eligibleFor: ["GCC / Select Units"], minDownPayment: "20%" },

    scores: { cashFlow: 9.2, appreciation: 6.0, liquidity: 7.5, risk: 3.5, lifestyle: 6.8 },
    overallScore: 8.1,

    // 🟢 UNIT ECONOMICS (Real Rents)
    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 38k" }, 
      oneBed: { roi: "8.5%", rent: "AED 52k" }, 
      twoBed: { roi: "8.0%", rent: "AED 72k" } 
    },

    shortTermScore: 5.5,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Long-term Residents" },

    futureUpgrades: [
      { name: "Al Khail Road Improvement", status: "Ongoing" },
      { name: "Community Centre Upgrade", status: "Planned" }
    ],

    // 🟢 REAL ESTATE IN AL KHAIL GATE
    description: "Al Khail Gate is a massive residential development in Al Quoz, offering modern, affordable apartments to Dubai's workforce. Divided into two phases, it is renowned for its spacious layouts (larger than average Dubai units) and robust community facilities. It serves as a vital housing hub for those working in Business Bay, Downtown, and Jumeirah who seek value for money.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Primarily institutional investors and GCC nationals buying bulk units for rental portfolios." },
      { factor: "Rental Demand", read: "Inelastic demand. Even during market downturns, Al Khail Gate remains full due to its price point and location." },
      { factor: "Price Drivers", read: "Rents are driven by the rising cost of living in nearby Business Bay, pushing tenants to affordable options like AKG." },
      { factor: "Liquidity", read: "Sales volume is lower as most units are held by the master developer for leasing." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "Studios offer entry-level rents from AED 36k, making them highly competitive.",
      "2-Bedroom apartments are massive (up to 1,600 sq.ft) renting for ~AED 70k, offering unmatched value per sq.ft.",
      "Rents have seen a steady 10% increase year-on-year due to city-wide inflation."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "Sales are rare and often restricted to specific buildings or GCC nationals.",
      "Prices per sq.ft are among the lowest in central Dubai, often below AED 700/sq.ft.",
      "Value is driven by yield (ROI) rather than capital growth speculation."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "This is a pure yield play. Do not expect massive flipping profits. It's a 'buy and hold' asset for steady 8-9% annual income.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "22 km", mins: "20 mins" },
      school: { name: "Springdales School", km: "5 km", mins: "8 mins" },
      tourist: { name: "Kite Beach", km: "8 km", mins: "12 mins" },
      metro: { name: "ONPASSIVE Metro", km: "6 km", mins: "10 mins" },
      mall: { name: "Dubai Hills Mall", km: "5 km", mins: "7 mins" },
      business: { name: "Business Bay", km: "8 km", mins: "10 mins" },
      hospital: { name: "Al Quoz Visa Medical", km: "2 km", mins: "4 mins" }
    },

    buyerPsychology: {
      trigger: "Value & Practicality",
      archetype: "The Pragmatic Tenant/Investor",
      motivation: "Choosing space and convenience over luxury. Tenants want to live 10 minutes from work without paying Downtown prices."
    }
  },

  // ==========================================================
  // AL KHAWANEEJ (1 & 2)
  // ==========================================================
// --- DUBAI: AL KHAWANEEJ (1 & 2) ---
  {
    id: "al-khawaneej",
    name: "Al Khawaneej 1 & 2",
    emirate: "Dubai",
    category: "Villas / Cultural / Farm",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "4.5%",
    avgPrice: "AED 5.2M (Villas)",
    imageColor: "bg-amber-700", // Rustic/Desert
    
    // 🟢 KEY FACTS
    masterDeveloper: "Meraas / Private / Government",
    location: "Emirates Road (E611) / Dubai-Sharjah Border",
    totalArea: "Vast Agricultural & Residential",
    towers: "None (Villas & Farms only)",
    completion: "Developing (Phase 2) / Mature (Phase 1)",
    privateBeach: "No (Desert/Farm Vibe)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "A unique 'farming' district blending traditional Emirati heritage with modern lifestyle destinations.",
      "Home to the Quranic Park and 'The Yard' by Meraas, a rustic outdoor destination.",
      "Al Khawaneej 2 is witnessing a massive government housing initiative (1,050 new villas).",
      "Famous for its organic farms, stables, and spacious family compounds."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "The Yard (Leisure/Dining)", 
      "Quranic Park (Culture/Nature)", 
      "Last Exit Al Khawaneej (Dining)", 
      "Al Khawaneej Walk (Retail)", 
      "Al Rawabi Dairy Farm (Attraction)",
      "Cycling Tracks (Fitness)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "3,500+ Villas Planned",
      handedOver: "60%",
      underConstruction: "40%",
      nextDelivery: "May 2025 (Bhatia Project)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "No Metro", mins: "--", status: "Car Dependent" },
      roadAccess: ["Emirates Road (E611)", "Maleha Street"],
      walkability: "High (In Parks/The Yard) / Low (Streets)",
      cycling: "Dedicated 20km+ Cycling Track"
    },

    aiVerdict: {
      title: "The Rustic Retreat",
      summary: "Al Khawaneej is Dubai's countryside. It appeals to locals and long-term residents seeking huge plots and a quiet life. Investment potential lies in the commercial 'Walk' areas or land plots for custom builds."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 4.2M", 
      "2024": "AED 4.8M", 
      "2025": "AED 5.2M",
      "2026 (Proj)": "AED 5.8M" 
    },

    demandSignals: { 
      rentalDemand: "Moderate (Niche)", 
      resaleLiquidity: "Low (High Ticket/Custom)", 
      tenantProfile: "Emirati Families & Farm Owners" 
    },
    ownership: { type: "Freehold (Select Zones) / Leasehold (Farms)", eligibleFor: ["GCC (Mostly) / Expats (Select)"], minDownPayment: "20-25%" },

    scores: { cashFlow: 4.5, appreciation: 8.5, liquidity: 5.0, risk: 3.0, lifestyle: 8.8 },
    overallScore: 7.9,

    // 🟢 UNIT ECONOMICS (Villas)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "N/A", rent: "N/A" } // Mostly Villas
    },
    // Custom field for villas could be handled, but standardizing for the table:
    // We can inject villa data into 'unitEconomics' loosely or rely on the description.

    shortTermScore: 4.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,200", occupancy: "50%", tenantType: "Staycations/Retreats" },

    futureUpgrades: [
      { name: "1,050 New Villas", status: "May 2025 Delivery" },
      { name: "77km Internal Roads", status: "80% Complete" },
      { name: "New Community Mall", status: "Planned" }
    ],

    // 🟢 REAL ESTATE IN AL KHAWANEEJ
    description: "Al Khawaneej is split into two zones: Phase 1 (Agriculture/Farms) and Phase 2 (Residential Villas). It is unique in Dubai for offering a 'countryside' living experience. The area is rapidly gentrifying with the addition of 'Al Khawaneej Walk' and 'The Yard', bringing high-end retail and dining to what was once purely farmland. It is a stronghold for Emirati housing but is opening up to broader luxury lifestyle concepts.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Dominant Emirati/GCC buyer base for land and villas. Expats visit for leisure but ownership opportunities are specific." },
      { factor: "Rental Demand", read: "Demand is for sprawling 5+ bedroom villas with private pools and huge gardens." },
      { factor: "Price Drivers", read: "Infrastructure upgrades (roads) and new lifestyle destinations (The Yard) are pushing land values up." },
      { factor: "Liquidity", read: "Low. These are 'forever homes', not flip assets. Sales turnover is much slower than marina apartments." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "4-Bedroom villas rent for approx AED 250k - 300k, offering massive value compared to Jumeirah.",
      "5 and 6-bedroom luxury compounds can command AED 400k+ annually.",
      "Commercial rentals in 'The Yard' are seeing high demand from F&B concepts."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "Land plots are the primary commodity, with prices rising 15% as infrastructure improves.",
      "Ready villas trade at a premium due to high construction costs of custom builds.",
      "Government housing initiatives are boosting the quality of neighborhood infrastructure."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "This is a lifestyle play, not a rental yield play. Look for commercial opportunities in the retail districts or land for custom luxury builds.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "15 km", mins: "17 mins" },
      school: { name: "Al Athbaa School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Quranic Park", km: "0.5 km", mins: "1 min" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Al Khawaneej Walk", km: "1 km", mins: "2 mins" },
      business: { name: "Mirdif City Centre", km: "10 km", mins: "12 mins" },
      hospital: { name: "Aster Hospital", km: "8 km", mins: "10 mins" }
    },

    buyerPsychology: {
      trigger: "Heritage & Space",
      archetype: "The Family Patriarch",
      motivation: "Buyers here value privacy, large family gatherings, and a connection to the land/tradition. They want a home that feels like a private estate."
    }
  },
  // ==========================================================
  // AL LISAili
  // ==========================================================
// --- DUBAI: AL LISAILI ---
  {
    id: "al-lisaili",
    name: "Al Lisaili",
    emirate: "Dubai",
    category: "Heritage / Equestrian / Rural",
    
    // 🟢 REAL MARKET METRICS (2025/26 Niche Data)
    roi: "5.2%",
    avgPrice: "AED 3.5M (Villas/Farms)",
    imageColor: "bg-amber-800", // Desert/Heritage
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private / Dubai Government",
    location: "Dubai-Al Ain Road (E66)",
    totalArea: "Expansive Desert District",
    towers: "None (Villas & Farms only)",
    completion: "Developing / Heritage Zone",
    privateBeach: "No (Desert Reserves)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "The equestrian and camel racing capital of Dubai, home to the Dubai Camel Racing Club.",
      "Located next to the Al Marmoom Desert Conservation Reserve, the UAE's largest unfenced reserve.",
      "A sanctuary for locals and expats seeking expansive farm-style living and privacy.",
      "Direct access to the new 'Saih Al Salam Scenic Route' tourism project."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Dubai Camel Racing Club (Sport)", 
      "Al Marmoom Heritage Village (Culture)", 
      "Al Lisaili Park (Nature)", 
      "Local Souq (Shopping)", 
      "Cycle Track - 86km (Fitness)",
      "Expo 2020 Lake (Leisure)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Low Density (Custom Builds)",
      handedOver: "90% (Existing)",
      underConstruction: "10% (New Plots)",
      nextDelivery: "2026 (Private Estates)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "No Metro", mins: "--", status: "Car Dependent" },
      roadAccess: ["Dubai-Al Ain Road (E66)", "Jebel Ali-Lehbab Rd (E77)"],
      walkability: "Low (Car/Off-road focus)",
      cycling: "World-Class (Al Qudra/Marmoom tracks)"
    },

    aiVerdict: {
      title: "The Heritage Retreat",
      summary: "Al Lisaili is a niche market for 'lifestyle investors' who value space, heritage, and nature over urban yields. It is poised for long-term appreciation as Dubai's 'Rural Tourism' master plan (Saih Al Salam) develops."
    },

    // 🟢 PRICE HISTORY (Estimated for Niche Market)
    priceTrend: { 
      "2023": "AED 2.8M", 
      "2024": "AED 3.1M", 
      "2025": "AED 3.5M",
      "2026 (Proj)": "AED 3.9M" 
    },

    demandSignals: { 
      rentalDemand: "Moderate (Niche)", 
      resaleLiquidity: "Low (Long-term holders)", 
      tenantProfile: "Farm Owners & Equestrian Staff" 
    },
    ownership: { type: "Freehold (Select Plots) / Leasehold", eligibleFor: ["GCC (Mostly) / Expats (Select)"], minDownPayment: "25%" },

    scores: { cashFlow: 5.0, appreciation: 8.5, liquidity: 4.0, risk: 3.5, lifestyle: 9.0 },
    overallScore: 7.8,

    // 🟢 UNIT ECONOMICS (Farm/Villa Rentals)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "5.5%", rent: "AED 80k" } // Small villas/staff accommodation
    },

    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "45%", tenantType: "Eco-Tourists/Campers" },

    futureUpgrades: [
      { name: "Saih Al Salam Scenic Route", status: "Approved (Vision 2040)" },
      { name: "New Cycling Hubs", status: "Under Construction" },
      { name: "Desert Glamping Resorts", status: "Planned" }
    ],

    // 🟢 REAL ESTATE IN AL LISAILI
    description: "Al Lisaili is a tranquil community situated off the Dubai-Al Ain Road, offering a stark contrast to the city's skyscrapers. It is the heart of Dubai's heritage sports, hosting the famous Al Marmoom Camel Race Track. The real estate landscape consists of large private family villas, farmhouses, and equestrian estates. It is currently the focus of a major government push to develop 'Rural Dubai' into a sustainable tourism destination.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Heavily dominated by UAE Nationals establishing family estates and farms. Increasing interest from expats for 'off-grid' luxury living." },
      { factor: "Rental Demand", read: "Niche demand driven by professionals working in the camel racing industry and seasonal tourism staff." },
      { factor: "Price Drivers", read: "Land value is the primary driver. As the city expands, these large plots become increasingly valuable 'land banks'." },
      { factor: "Liquidity", read: "Low trading volume creates a stable but illiquid market. Properties are typically held for generations, not flipped." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "Standard 3-bedroom villas rent for approx AED 100k - 130k, offering massive space value.",
      "Private farms with pools can command holiday rental premiums of AED 2,000+ per night in winter.",
      "Staff accommodation compounds are a steady, albeit low-yield, asset class here."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "Land plots are the main investable asset, trading at significantly lower price-per-sq-ft than urban Dubai.",
      "Finished farmhouses are rare on the market and trade at a premium due to construction costs.",
      "Government infrastructure spending (Saih Al Salam project) is expected to boost land values by 20-30% by 2028."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "This is a long-term 'land banking' play. Buy plots near the Al Marmoom Reserve or Cycle Track for future tourism-linked appreciation.",

    connectivity: {
      airport: { name: "DWC (Al Maktoum)", km: "35 km", mins: "25 mins" },
      school: { name: "The Aquila School", km: "15 km", mins: "15 mins" },
      tourist: { name: "Camel Race Track", km: "1 km", mins: "2 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Dubai Outlet Mall", km: "12 km", mins: "12 mins" },
      business: { name: "Silicon Oasis", km: "20 km", mins: "18 mins" },
      hospital: { name: "Fakeeh University Hosp", km: "18 km", mins: "18 mins" }
    },

    buyerPsychology: {
      trigger: "Privacy & Passion",
      archetype: "The Heritage Keeper",
      motivation: "Buying here is a lifestyle choice driven by a love for animals (horses/camels), desert silence, and vast personal space."
    }
  },

  // --- DUBAI: AL MAMZAR (Hidden Waterfront Gem) ---
  {
    id: "al-mamzar",
    name: "Al Mamzar",
    emirate: "Dubai",
    category: "Beachfront / Hidden Gem",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "4.8% (Villas) / 6.5% (Apts)",
    avgPrice: "AED 12M (Plots/Villas)", // High due to plots
    imageColor: "bg-cyan-500", // Beach/Ocean
    
    // 🟢 KEY FACTS
    masterDeveloper: "Wasl / Dubai Municipality",
    location: "Deira / Sharjah Border",
    totalArea: "Waterfront Peninsula",
    towers: "Mid-rise (Leasehold) & Villas",
    completion: "Established / Revitalizing",
    privateBeach: "Yes (Al Mamzar Beach Park)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "Home to Al Mamzar Beach Park, one of Dubai's largest and most scenic beach parks.",
      "Undergoing a massive AED 400M beachfront redevelopment (night swimming, floating bridges).",
      "Unique location offering both calm Creek waters and open Arabian Gulf views.",
      "Rare freehold plots available in 'Al Mamzar Front', attracting luxury villa builders."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Mamzar Beach Park (Leisure)", 
      "Century Mall (Shopping)", 
      "Dubai Bowling Centre (Sport)", 
      "Al Mamzar Corniche (Fitness)", 
      "Public Library (Culture)",
      "Floating Bridge (Transport)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Restricted Supply",
      handedOver: "95%",
      underConstruction: "5% (Beach Project)",
      nextDelivery: "2025 (Beach Revamp)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Stadium / Al Qiyadah", mins: "5 mins Drive", status: "Green Line Nearby" },
      roadAccess: ["Al Ittihad Road (E11)", "Cairo Street"],
      walkability: "Very High (Along Corniche)",
      cycling: "New dedicated beach tracks"
    },

    aiVerdict: {
      title: "The Silent Luxury Zone",
      summary: "Al Mamzar is undervalued compared to Jumeirah. With the new AED 400M beach upgrade, property values for freehold plots in 'Al Mamzar Front' are set to skyrocket. It is the Jumeirah of Old Dubai."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 8.5M (Villa)", 
      "2024": "AED 10.2M (Villa)", 
      "2025": "AED 12.0M (Villa)",
      "2026 (Proj)": "AED 13.5M (Villa)" 
    },

    demandSignals: { 
      rentalDemand: "High (Families)", 
      resaleLiquidity: "Moderate (High Ticket)", 
      tenantProfile: "Local Families & Sharjah Commuters" 
    },
    ownership: { type: "Mixed (Freehold Plots / Leasehold Apts)", eligibleFor: ["All Nationalities (Plots)"], minDownPayment: "20-50%" },

    scores: { cashFlow: 6.0, appreciation: 9.0, liquidity: 6.5, risk: 4.0, lifestyle: 9.5 },
    overallScore: 8.7,

    // 🟢 UNIT ECONOMICS (Apartment Rentals)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 45k" }, 
      oneBed: { roi: "6.8%", rent: "AED 65k" }, 
      twoBed: { roi: "6.5%", rent: "AED 90k" } 
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "75%", tenantType: "Beach Tourists" },

    futureUpgrades: [
      { name: "AED 400M Beach Upgrade", status: "Completion 2025" },
      { name: "Floating Pedestrian Bridge", status: "Under Construction" },
      { name: "Night Swimming Beach", status: "Completed" }
    ],

    // 🟢 REAL ESTATE IN AL MAMZAR
    description: "Al Mamzar is a hidden gem located on a peninsula at the Dubai-Sharjah border. It is famous for its sprawling Beach Park and Corniche. The area is divided into a leasehold apartment district (popular with families working in Deira) and an ultra-exclusive freehold villa district known as 'Al Mamzar Front', where custom mansions overlook the sea.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Freehold plots are snapped up by wealthy GCC and Asian investors building custom mansions. Apartments are mostly held by institutional landlords." },
      { factor: "Rental Demand", read: "Consistent demand from families who want the 'Jumeirah lifestyle' at a 30% discount, with easy access to Sharjah schools." },
      { factor: "Price Drivers", read: "The massive government investment in beach infrastructure is the primary catalyst, rapidly gentrifying the area." },
      { factor: "Liquidity", read: "Plot sales are high-value and slower moving. Apartment rentals are extremely liquid with low vacancy." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "2-Bedroom apartments with sea views rent for AED 85k-100k, offering great value for waterfront living.",
      "Older leasehold villas are available for rent at AED 200k+, often used by large extended families.",
      "The area is witnessing a 'flight to quality' as new, modern buildings replace older stock."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "Freehold residential plots in Al Mamzar Front trade between AED 8M to AED 15M+, depending on sea view.",
      "There is virtually no freehold apartment supply; the investment play here is land/villas.",
      "Prices have risen 20% in 2 years, tracking the general 'waterfront premium' trend in Dubai."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "The opportunity here is 'Al Mamzar Front' land. Buy a plot, build a luxury modern villa, and flip it to HNWIs who want privacy near Deira.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "7 km", mins: "10 mins" },
      school: { name: "Victoria Int. School", km: "3 km", mins: "5 mins" },
      tourist: { name: "Mamzar Beach Park", km: "0.1 km", mins: "1 min" },
      metro: { name: "Al Qiyadah Metro", km: "2 km", mins: "5 mins" },
      mall: { name: "Century Mall", km: "1 km", mins: "2 mins" },
      business: { name: "Deira Business Dist.", km: "5 km", mins: "10 mins" },
      hospital: { name: "Dubai Hospital", km: "6 km", mins: "12 mins" }
    },

    buyerPsychology: {
      trigger: "Exclusivity & Legacy",
      archetype: "The Legacy Builder",
      motivation: "Buyers here aren't looking for a quick flip. They are building 'forever homes' on rare waterfront land that will never lose its appeal."
    }
  },

 
 // --- DUBAI: AL MURAQQABAT (Deira's Commercial Heart) ---
  {
    id: "al-muraqqabat",
    name: "Al Muraqqabat",
    emirate: "Dubai",
    category: "Commercial / Heritage",
    
    // 🟢 REAL MARKET METRICS (Rental Focus)
    roi: "N/A (Leasehold)",
    avgPrice: "N/A (Rental Market)",
    imageColor: "bg-slate-800", // Corporate/Nightlife
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private / Al Ghurair",
    location: "Deira (Between Rigga & Salah Al Din)",
    totalArea: "High-Density Grid",
    towers: "Mid-rise Mixed Use (G+4 to G+7)",
    completion: "Fully Developed",
    privateBeach: "No",

    // 🟢 HIGHLIGHTS
    highlights: [
      "The beating heart of Deira, famous for its grid-like streets and 24/7 commercial activity.",
      "Home to Al Ghurair Centre, Dubai's first modern shopping mall.",
      "A foodie paradise with hundreds of diverse restaurants along Al Muraqqabat Rd.",
      "Extremely high footfall and occupancy rates due to central connectivity."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Ghurair Centre (Shopping)", 
      "Reef Mall (Retail)", 
      "Swissôtel Al Ghurair (Hospitality)", 
      "Al Muraqqabat Police Station (Landmark)", 
      "Salah Al Din Street (Dining)",
      "Union Metro Hub (Transport)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Stable Supply",
      handedOver: "100%",
      underConstruction: "< 5% (Redevelopment)",
      nextDelivery: "Limited Infill Projects"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Union / Al Rigga / Salah Al Din", mins: "Walking Distance", status: "Active (Red & Green Lines)" },
      roadAccess: ["Salah Al Din St", "Omar Bin Al Khattab St"],
      walkability: "Very High (Grid layout)",
      cycling: "Limited (High traffic)"
    },

    aiVerdict: {
      title: "The Urban Pulse",
      summary: "Al Muraqqabat is not an investment zone for buying apartments (it is largely Leasehold). However, for commercial investors and tenants, it is arguably the most connected and vibrant district in Old Dubai."
    },

    // 🟢 PRICE HISTORY (Rentals)
    priceTrend: { 
      "2023": "AED 65k (Rent - 2B)", 
      "2024": "AED 75k (Rent - 2B)", 
      "2025": "AED 82k (Rent - 2B)",
      "2026 (Proj)": "AED 88k (Rent - 2B)" 
    },

    demandSignals: { 
      rentalDemand: "Very High", 
      resaleLiquidity: "N/A", 
      tenantProfile: "Asian Families & Professionals" 
    },
    ownership: { type: "Leasehold (GCC Only)", eligibleFor: ["GCC Nationals / Locals"], minDownPayment: "N/A" },

    scores: { cashFlow: 8.0, appreciation: 4.0, liquidity: 5.0, risk: 3.0, lifestyle: 8.5 },
    overallScore: 7.9,

    // 🟢 UNIT ECONOMICS (Rents)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 42k" }, 
      oneBed: { roi: "N/A", rent: "AED 60k" }, 
      twoBed: { roi: "N/A", rent: "AED 85k" } 
    },

    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "75%", tenantType: "Business/Shopping Tourists" },

    futureUpgrades: [
      { name: "Deira Enrichment Project", status: "Ongoing (Nearby)" },
      { name: "Urban Streetscaping", status: "Planned" }
    ],

    // 🟢 REAL ESTATE IN AL MURAQQABAT
    description: "Al Muraqqabat is one of the most iconic localities in eastern Dubai. It is a strictly structured grid of streets packed with hotels, banks, malls, and residential buildings. Unlike New Dubai, this area never sleeps. It offers a nostalgic yet convenient lifestyle with direct access to the Union Metro station—the main interchange for the entire city's rail network.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Restricted Market. Ownership is generally limited to UAE/GCC nationals, meaning most expats are long-term tenants." },
      { factor: "Rental Demand", read: "Driven by affordability and connectivity. Vacancy is rare because you can live car-free easily here." },
      { factor: "Price Drivers", read: "Rents mirror the broader Deira market but command a premium over Naif due to wider streets and better building quality." },
      { factor: "Liquidity", read: "N/A for Expat Sales." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "Apartments here are spacious (old layouts), often 20-30% larger than new builds in JVC.",
      "Rents have risen by 12% in 2024/25 as tenants get priced out of Bur Dubai.",
      "Commercial retail spaces on the ground floor are goldmines with zero vacancy."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "N/A - This is a Leasehold area.",
      "Investment opportunities exist in commercial leases or business purchases (restaurants/shops).",
      "Building acquisition is possible for GCC investors, with block yields often exceeding 8-10%."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "If you are an expat, look here for *business* investment (restaurants/retail) rather than property ownership. The footfall is unbeatable.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "4 km", mins: "8 mins" },
      school: { name: "Little Flower School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Dubai Creek", km: "3 km", mins: "7 mins" },
      metro: { name: "Union / Al Rigga", km: "0.5 km", mins: "5 mins" },
      mall: { name: "Al Ghurair Centre", km: "0.2 km", mins: "2 mins" },
      business: { name: "Govt Offices", km: "1 km", mins: "3 mins" },
      hospital: { name: "Canadian Specialist", km: "2 km", mins: "5 mins" }
    },

    buyerPsychology: {
      trigger: "Connectivity & Hustle",
      archetype: "The Urban Commuter",
      motivation: "Tenants choose Al Muraqqabat to be in the center of the action. They value walking to the Metro and having 100 restaurants at their doorstep."
    }
  },

  // --- DUBAI: AL NAHDA (Dubai) ---
  {
    id: "al-nahda-dubai",
    name: "Al Nahda (Dubai)",
    emirate: "Dubai",
    category: "Affordable / Family",
    
    // 🟢 REAL MARKET METRICS (Rental Focus)
    roi: "N/A (Leasehold)", 
    avgPrice: "N/A (Rental Market)",
    imageColor: "bg-indigo-700", // Family/Suburban
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private Developers",
    location: "Dubai-Sharjah Border",
    totalArea: "High-Density Residential",
    towers: "High-rise Residential",
    completion: "Mature",
    privateBeach: "No (Al Mamzar nearby)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "The ultimate commuter hub, located on the Dubai-Sharjah border.",
      "Offers the most spacious apartments in Dubai for the lowest rental price points.",
      "Home to the massive Al Nahda Pond Park, a key family attraction.",
      "Excellent healthcare infrastructure (NMC, Zulekha Hospitals)."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Nahda Pond Park (Leisure)", 
      "NMC Specialty Hospital (Healthcare)", 
      "Sahara Centre (Shopping - Nearby)", 
      "Al Mulla Plaza (Landmark)", 
      "Sheffield Private School (Education)",
      "Zulekha Hospital (Healthcare)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "High Density",
      handedOver: "98%",
      underConstruction: "2%",
      nextDelivery: "Few Infill Towers"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Al Nahda / Stadium", mins: "5-10 mins Bus", status: "Active (Green Line)" },
      roadAccess: ["Al Ittihad Rd (E11)", "Baghdad St"],
      walkability: "High (Around Pond Park)",
      cycling: "Park Tracks Only"
    },

    aiVerdict: {
      title: "The Commuter's Value Pick",
      summary: "Al Nahda (Dubai) offers the best 'space-for-money' ratio in the emirate. While it lacks the glitz of Marina, it is a stable, high-demand residential zones for families working in Deira or Sharjah."
    },

    // 🟢 PRICE HISTORY (Rentals)
    priceTrend: { 
      "2023": "AED 55k (Rent - 2B)", 
      "2024": "AED 62k (Rent - 2B)", 
      "2025": "AED 68k (Rent - 2B)",
      "2026 (Proj)": "AED 72k (Rent - 2B)" 
    },

    demandSignals: { 
      rentalDemand: "Extremely High", 
      resaleLiquidity: "N/A", 
      tenantProfile: "Families & Medical Staff" 
    },
    ownership: { type: "Leasehold (Mostly)", eligibleFor: ["GCC / Locals"], minDownPayment: "N/A" },

    scores: { cashFlow: 8.5, appreciation: 3.0, liquidity: 6.0, risk: 2.0, lifestyle: 7.2 },
    overallScore: 7.6,

    // 🟢 UNIT ECONOMICS (Rents)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 38k" }, 
      oneBed: { roi: "N/A", rent: "AED 50k" }, 
      twoBed: { roi: "N/A", rent: "AED 70k" } 
    },

    shortTermScore: 5.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "Long-term Only" },

    futureUpgrades: [
      { name: "Al Ittihad Road Bridge", status: "Planned" },
      { name: "New Community Clinics", status: "Ongoing" }
    ],

    // 🟢 REAL ESTATE IN AL NAHDA
    description: "Al Nahda (Dubai) acts as a buffer zone between the bustling activity of Dubai and the residential affordability of Sharjah. Unlike its Sharjah counterpart, Al Nahda Dubai offers better traffic flow, access to the Dubai Metro, and higher building standards. It is dominated by large, family-oriented towers often with gyms and pools included.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Predominantly a rental market. Ownership is restricted in most sectors, keeping it stable and free from speculative bubbles." },
      { factor: "Rental Demand", read: "Historically high. Families move here to upgrade from studio/1-beds in other areas to spacious 2-3 beds for the same price." },
      { factor: "Price Drivers", read: "Rent increases are driven by the spillover from Deira. As Deira modernizes and becomes pricier, tenants migrate to Al Nahda." },
      { factor: "Liquidity", read: "High rental liquidity; apartments typically lease within 2-3 weeks of listing." }
    ],

    // 🟢 RENTAL PRICES ANALYSIS
    rentalAnalysisPoints: [
      "Apartments are massive—2BHKs often exceed 1,400 sq.ft, which is rare in New Dubai.",
      "Rents have increased ~10% YoY, but it remains one of the most affordable metro-linked areas.",
      "Many buildings offer 'chiller-free' options, significantly reducing utility bills for tenants."
    ],

    // 🟢 SALE PRICES ANALYSIS
    salesAnalysisPoints: [
      "N/A - This is a Leasehold area.",
      "There are very select freehold buildings in nearby 'Al Nahda 2' (bordering Al Qusais), but supply is negligible.",
      "Investors focus on commercial assets or building blocks rather than individual units."
    ],

    // 🟢 INVESTOR TIP
    investorTip: "This is a tenant's market. If you are an investor, look to Al Barsha South (Arjan) for similar price points but with Freehold ownership.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "6 km", mins: "10 mins" },
      school: { name: "Sheffield School", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Al Mamzar Beach", km: "4 km", mins: "8 mins" },
      metro: { name: "Stadium Metro", km: "2 km", mins: "5 mins" },
      mall: { name: "Sahara Centre", km: "1 km", mins: "3 mins" },
      business: { name: "DAFZA", km: "3 km", mins: "6 mins" },
      hospital: { name: "NMC Specialty", km: "0.5 km", mins: "2 mins" }
    },

    buyerPsychology: {
      trigger: "Space & Savings",
      archetype: "The Family Saver",
      motivation: "Tenants prioritize square footage and utility savings over luxury finishes. They want a safe, park-side community for their children without the high price tag."
    }
  },
// --- DUBAI: AL MIZHAR (The Local Family Sanctuary) ---
  {
    id: "al-mizhar",
    name: "Al Mizhar",
    emirate: "Dubai",
    category: "Villas / Local Family",
    
    // 🟢 REAL MARKET METRICS (Niche Sales)
    roi: "4.5%",
    avgPrice: "AED 3.8M (Villa)",
    imageColor: "bg-emerald-900", // Green/Suburban
    
    // 🟢 KEY FACTS
    masterDeveloper: "Dubai Municipality",
    location: "Near Mirdif / Dubai Intl Airport",
    totalArea: "Large Villa District",
    towers: "None (Villas only)",
    completion: "Fully Developed",
    privateBeach: "No ( Mushrif Park nearby)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "A quiet, affluent villa community dedicated primarily to UAE Nationals.",
      "Adjacent to Mushrif Park, one of Dubai's oldest and largest natural parks.",
      "Offers massive plot sizes often exceeding 10,000 sq.ft for custom homes.",
      "Excellent connectivity to Sharjah and DXB Airport without the noise."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Mushrif Park (Nature/cycling)", 
      "Arabian Center (Shopping)", 
      "Al Mizhar Mall (Retail)", 
      "Swimming Pool Complex (Sports)", 
      "Local Schools (Education)",
      "Aventura Parks (Adventure)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Restricted Supply",
      handedOver: "98%",
      underConstruction: "2% (Private Villas)",
      nextDelivery: "Private Custom Builds"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Rashidiya (Centrepoint)", mins: "10 mins Drive", status: "Nearest Hub" },
      roadAccess: ["Khawaneej Road", "Sheikh Mohammed Bin Zayed Rd"],
      walkability: "Moderate (In Parks)",
      cycling: "Excellent (Mushrif Tracks)"
    },

    aiVerdict: {
      title: "The Suburban Fortress",
      summary: "Al Mizhar is a stronghold for Emirati families. It is not an investment zone for expats, but it is a prime location for GCC nationals seeking long-term family stability and huge land plots."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 3.2M", 
      "2024": "AED 3.5M", 
      "2025": "AED 3.8M",
      "2026 (Proj)": "AED 4.1M" 
    },

    demandSignals: { 
      rentalDemand: "Moderate (Local)", 
      resaleLiquidity: "Low (Generational)", 
      tenantProfile: "UAE Nationals & GCC Families" 
    },
    ownership: { type: "Leasehold (Expats) / Freehold (GCC)", eligibleFor: ["GCC Nationals"], minDownPayment: "20%" },

    scores: { cashFlow: 4.0, appreciation: 7.5, liquidity: 3.5, risk: 2.0, lifestyle: 8.5 },
    overallScore: 7.6,

    // 🟢 UNIT ECONOMICS (Villa Rentals)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "N/A", rent: "N/A" } // Mostly 4+ Bed Villas
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Mushrif Park Expansion", status: "Ongoing" },
      { name: "New Community Roads", status: "Completed" }
    ],

    description: "Al Mizhar is a residential area located in the southern part of Dubai, bordering Sharjah. It is split into Al Mizhar 1 and 2. The area is characterized by large, independent villas and is a favorite among locals due to its privacy, large mosques, and proximity to the airport.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Almost exclusively UAE and GCC nationals." },
      { factor: "Rental Demand", read: "Steady demand for large family compounds, often rented by government entities for staff or senior expat management." },
      { factor: "Price Drivers", read: "Land value is the key driver. Plots here are significantly cheaper per sq.ft than Jumeirah but offer similar sizes." },
      { factor: "Liquidity", read: "Low. Properties are held for decades." }
    ],

    rentalAnalysisPoints: [
      "5-Bedroom independent villas rent for AED 180k - 250k, offering immense value for large families.",
      "Rental inventory is scarce as most properties are owner-occupied.",
      "Tenants stay for 5+ years on average due to the school district stability."
    ],

    salesAnalysisPoints: [
      "Sales are rare and usually involve land transactions between locals.",
      "Ready villas vary wildly in price based on the quality of the custom construction.",
      "No off-plan market exists here; it is a secondary market only."
    ],

    investorTip: "Not for expat investors. Perfect for GCC nationals looking to build a 'forever home' near Mirdif.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "10 km", mins: "12 mins" },
      school: { name: "GEMS Royal Dubai", km: "2 km", mins: "5 mins" },
      tourist: { name: "Mushrif Park", km: "1 km", mins: "2 mins" },
      metro: { name: "Centrepoint Metro", km: "8 km", mins: "10 mins" },
      mall: { name: "Arabian Center", km: "1 km", mins: "2 mins" },
      business: { name: "Airport Freezone", km: "8 km", mins: "12 mins" },
      hospital: { name: "Prime Medical Ctr", km: "2 km", mins: "4 mins" }
    },

    buyerPsychology: {
      trigger: "Family & Tradition",
      archetype: "The Traditionalist",
      motivation: "Buyers prioritize privacy, proximity to extended family in Mirdif/Khawaneej, and access to local amenities."
    }
  },

  // --- DUBAI: AL MURAQQABAT (Already Provided Above, Refined) ---
  {
    id: "al-muraqqabat",
    name: "Al Muraqqabat",
    emirate: "Dubai",
    category: "Commercial / Residential Hub",
    
    roi: "N/A (Leasehold)",
    avgPrice: "N/A (Rental Market)",
    imageColor: "bg-slate-800",
    
    masterDeveloper: "Private / Al Ghurair",
    location: "Deira Core",
    totalArea: "High Density",
    towers: "Mid-rise Mixed Use",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "The busiest commercial and dining street in Deira.",
      "Home to Al Ghurair Centre and Reef Mall.",
      "Iconic 'grid' layout with high walkability and night activity.",
      "Massive rental demand from professionals working in Old Dubai."
    ],

    amenities: [
      "Al Ghurair Centre (Mall)", "Reef Mall (Shopping)", "Swissotel (Hotel)", "Al Muraqqabat Rd (Dining)", "Union Metro (Transport)", "Salah Al Din Station (Metro)"
    ],

    supplyStats: { totalUnits: "Stable", handedOver: "100%", underConstruction: "2%", nextDelivery: "None" },

    transport: {
      metro: { name: "Union / Al Rigga", mins: "Walking", status: "Active" },
      roadAccess: ["Salah Al Din St"],
      walkability: "Very High",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Urban Pulse",
      summary: "A renter's paradise. For investors, opportunities are limited to commercial leases. It remains the most vibrant district in Old Dubai."
    },

    priceTrend: { "2023": "AED 60k (Rent)", "2024": "AED 70k (Rent)", "2025": "AED 80k (Rent)", "2026": "AED 85k (Rent)" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "N/A", tenantProfile: "Asian Families" },
    ownership: { type: "Leasehold", eligibleFor: ["Locals"], minDownPayment: "N/A" },
    scores: { cashFlow: 8.5, appreciation: 3.0, liquidity: 6.0, risk: 2.0, lifestyle: 8.0 },
    overallScore: 7.8,

    unitEconomics: { studio: { roi: "N/A", rent: "AED 40k" }, oneBed: { roi: "N/A", rent: "AED 65k" }, twoBed: { roi: "N/A", rent: "AED 85k" } },
    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 300", occupancy: "80%", tenantType: "Business" },
    
    futureUpgrades: [{ name: "Deira Enrichment", status: "Nearby" }],
    description: "Al Muraqqabat is the heart of Deira, known for its grid system, dining scene, and commercial vibrancy. It is a strictly leasehold area for expats.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A - Rental Market." },
      { factor: "Rental Demand", read: "Consistent and high due to Metro connectivity." },
      { factor: "Price Drivers", read: "Connectivity to Union Metro is the #1 value driver." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: [
      "Rents are up 15% YoY due to Deira's revitalization.",
      "2-Beds are the most popular unit type for families.",
      "Old buildings offer larger sizes; new builds offer amenities."
    ],
    salesAnalysisPoints: ["N/A"],
    investorTip: "Commercial retail spaces on Muraqqabat Road are goldmines.",
    
    connectivity: {
      airport: { name: "DXB T1", km: "4 km", mins: "8 mins" },
      school: { name: "Little Flower", km: "1 km", mins: "3 mins" },
      tourist: { name: "Clock Tower", km: "1 km", mins: "3 mins" },
      metro: { name: "Union", km: "0.5 km", mins: "5 mins" },
      mall: { name: "Al Ghurair", km: "0.2 km", mins: "2 mins" },
      business: { name: "Govt Offices", km: "1 km", mins: "3 mins" },
      hospital: { name: "Canadian Hosp", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Convenience", archetype: "The Commuter", motivation: "Living car-free in the city center." }
  },

  // --- DUBAI: AL QUOZ (1, 2, 3, 4 - Residential & Creative) ---
  {
    id: "al-quoz",
    name: "Al Quoz (Residential & Creative)",
    emirate: "Dubai",
    category: "Creative / Industrial Mix",
    
    roi: "6.0% (Villas)",
    avgPrice: "AED 3.2M (Villas)",
    imageColor: "bg-stone-600", // Industrial/Hip
    
    masterDeveloper: "Dubai Municipality / Private",
    location: "Between Sheikh Zayed & Al Khail Rd",
    totalArea: "Mixed Use",
    towers: "Warehouses & Villas",
    completion: "Developed / Gentrifying",
    privateBeach: "No (Kite Beach nearby)",

    highlights: [
      "Home to Al Quoz Creative Zone (Alserkal Avenue), the arts hub of the region.",
      "Residential zones (Al Quoz 1, 2, 4) offer affordable, large villas for locals and GCC nationals.",
      "Central location between Downtown and Marina.",
      "Rapidly gentrifying with trendy cafes and art galleries."
    ],

    amenities: [
      "Alserkal Avenue (Arts)", "Oasis Mall (Shopping)", "Al Quoz Pond Park (Leisure)", "Courtyard Playhouse (Theatre)", "Antique Museum (Retail)", "Tom & Serg (Dining)"
    ],

    supplyStats: { totalUnits: "Stable", handedOver: "95%", underConstruction: "5% (Commercial)", nextDelivery: "Creative Zone Exp" },

    transport: {
      metro: { name: "Onpassive / Equiti", mins: "Nearby", status: "Active (Red Line)" },
      roadAccess: ["Sheikh Zayed Rd", "Al Khail Rd"],
      walkability: "Low (High in Creative Zone)",
      cycling: "Developing"
    },

    aiVerdict: {
      title: "The Hipster Industrialist",
      summary: "Al Quoz is Dubai's 'Meatpacking District'. While residential ownership is restricted (GCC), the commercial and creative potential is massive. It is the coolest place to set up a business or visit for culture."
    },

    priceTrend: { "2023": "AED 2.5M", "2024": "AED 2.8M", "2025": "AED 3.2M", "2026 (Proj)": "AED 3.5M" },
    demandSignals: { rentalDemand: "High (Commercial)", resaleLiquidity: "Moderate", tenantProfile: "Creatives & Families" },
    ownership: { type: "Mixed (Leasehold Ind / GCC Res)", eligibleFor: ["GCC (Res) / All (Com)"], minDownPayment: "20%" },
    scores: { cashFlow: 7.0, appreciation: 8.0, liquidity: 6.0, risk: 4.5, lifestyle: 8.0 },
    overallScore: 7.9,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } }, // Mostly Villas/Warehouses
    shortTermScore: 5.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },

    futureUpgrades: [{ name: "Creative Zone Masterplan", status: "Active" }, { name: "Streetscaping", status: "Planned" }],
    
    description: "Al Quoz is a dichotomy: massive industrial warehouses on one side, and quiet, spacious residential villas on the other. Alserkal Avenue has transformed the industrial zone into a cultural landmark. The residential pockets are hidden gems for GCC families seeking central location and space.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "GCC Nationals for villas. Global entrepreneurs for commercial spaces." },
      { factor: "Rental Demand", read: "Sky-high for warehouses converted into gyms, cafes, or galleries." },
      { factor: "Price Drivers", read: "The government's 'Creative Economy' push is driving up land values." },
      { factor: "Liquidity", read: "Commercial assets are highly liquid." }
    ],

    rentalAnalysisPoints: ["Warehouses rent for AED 40-60/sq.ft depending on fit-out.", "Residential villas rent for AED 140k - 200k (4-bed), very affordable for the location."],
    salesAnalysisPoints: ["Commercial plots are the main investment vehicle here."],
    investorTip: "Invest in a warehouse and convert it into a padel court or coffee roastery. The ROI can exceed 15%.",

    connectivity: {
      airport: { name: "DXB Intl", km: "20 km", mins: "20 mins" },
      school: { name: "Clarion School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Kite Beach", km: "5 km", mins: "8 mins" },
      metro: { name: "Onpassive", km: "3 km", mins: "5 mins" },
      mall: { name: "Times Square", km: "2 km", mins: "4 mins" },
      business: { name: "Business Bay", km: "5 km", mins: "8 mins" },
      hospital: { name: "Medcare", km: "3 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Creativity", archetype: "The Entrepreneur", motivation: "Being part of the new cultural wave of Dubai." }
  },

  // --- DUBAI: AL QUSAIS (Residential & Industrial) ---
  {
    id: "al-qusais",
    name: "Al Qusais",
    emirate: "Dubai",
    category: "Affordable / Industrial",
    
    roi: "N/A (Leasehold)",
    avgPrice: "N/A",
    imageColor: "bg-gray-700",
    
    masterDeveloper: "Wasl / Private",
    location: "North of DXB Airport / Sharjah Border",
    totalArea: "Mixed Use",
    towers: "Low-rise Apts & Labour Camps",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "Key industrial and residential base bordering Sharjah.",
      "Excellent Metro connectivity (Green Line) with 5 stations serving the area.",
      "Highly affordable family housing with established schools and NMC Hospital.",
      "Home to DAFZA (Dubai Airport Freezone) employees."
    ],

    amenities: [
      "Al Bustan Centre (Shopping)", "Al Qusais Pond Park (Leisure)", "DAFZA (Business)", "NMC Specialty Hospital (Healthcare)", "Apple International School (Education)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "100%", underConstruction: "2%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Al Qusais / DAFZA", mins: "Direct", status: "Active" },
      roadAccess: ["Beirut St", "Sheikh Mohammed Bin Zayed Rd"],
      walkability: "Moderate",
      cycling: "Pond Park Only"
    },

    aiVerdict: {
      title: "The Workforce Engine",
      summary: "Al Qusais is the engine room of Dubai's older districts. It offers vital affordable housing and industrial logistics. Not a buying zone for expats, but a critical rental market."
    },

    priceTrend: { "2023": "AED 45k (Rent)", "2024": "AED 52k (Rent)", "2025": "AED 58k (Rent)", "2026": "AED 62k (Rent)" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "N/A", tenantProfile: "Blue/White Collar Mix" },
    ownership: { type: "Leasehold", eligibleFor: ["Locals"], minDownPayment: "N/A" },
    scores: { cashFlow: 8.0, appreciation: 2.0, liquidity: 7.0, risk: 2.0, lifestyle: 6.0 },
    overallScore: 7.2,

    unitEconomics: { studio: { roi: "N/A", rent: "AED 32k" }, oneBed: { roi: "N/A", rent: "AED 45k" }, twoBed: { roi: "N/A", rent: "AED 60k" } },
    shortTermScore: 3.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },
    
    futureUpgrades: [{ name: "Industrial Zone Modernization", status: "Ongoing" }],
    description: "Al Qusais is divided into residential (Al Qusais 1, 2, 3) and industrial zones. It is one of the most connected areas via the Green Line Metro. It is favored by families who want to save on rent while maintaining easy access to Deira and the Airport.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A - Rental Market." },
      { factor: "Rental Demand", read: "Consistent. It attracts spillover from Sharjah commuters tired of traffic." },
      { factor: "Price Drivers", read: "Affordability and Metro access." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: ["Rents are among the lowest in Dubai for metro-connected areas.", "2-Bedrooms average AED 55k-65k."],
    salesAnalysisPoints: ["N/A"],
    investorTip: "Look at DAFZA for commercial office investments.",

    connectivity: {
      airport: { name: "DXB T2", km: "2 km", mins: "5 mins" },
      school: { name: "Westminster School", km: "1 km", mins: "3 mins" },
      tourist: { name: "Al Mamzar", km: "6 km", mins: "10 mins" },
      metro: { name: "Al Qusais", km: "0.5 km", mins: "2 mins" },
      mall: { name: "Al Bustan", km: "1 km", mins: "3 mins" },
      business: { name: "DAFZA", km: "0 km", mins: "0 mins" },
      hospital: { name: "NMC", km: "1 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Utility", archetype: "The Saver", motivation: "Saving money on rent to send remittances home." }
  },

  // --- DUBAI: AL RASHIDIYA ---
  {
    id: "al-rashidiya",
    name: "Al Rashidiya",
    emirate: "Dubai",
    category: "Villas / Transport Hub",
    
    roi: "N/A (Leasehold)",
    avgPrice: "N/A",
    imageColor: "bg-teal-700",
    
    masterDeveloper: "Wasl / Government",
    location: "South of DXB Airport",
    totalArea: "Villa Community",
    towers: "None (Villas)",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "Home to 'Centrepoint' (formerly Rashidiya) Metro Station, the start of the Red Line.",
      "Directly opposite Dubai International Airport (DXB).",
      "Known for spacious, older government-granted villas and Wasl properties.",
      "Bin Sougat Centre is the community hub."
    ],

    amenities: [
      "Bin Sougat Centre (Shopping)", "Rashidiya Park (Leisure)", "Centrepoint Metro (Transport)", "Union Coop (Retail)", "Dubai Festival City (Nearby)"
    ],

    supplyStats: { totalUnits: "Stable", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Centrepoint", mins: "Hub", status: "Active" },
      roadAccess: ["Airport Rd", "Sheikh Mohammed Bin Zayed Rd"],
      walkability: "Low",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Gateway",
      summary: "Al Rashidiya is a functional district. It is crucial for transport but strictly a rental market for villas. It is quiet, conservative, and extremely close to the airport."
    },

    priceTrend: { "2023": "AED 120k (Rent)", "2024": "AED 135k (Rent)", "2025": "AED 150k (Rent)", "2026": "AED 160k (Rent)" },
    demandSignals: { rentalDemand: "High (Families)", resaleLiquidity: "N/A", tenantProfile: "Locals & Airport Staff" },
    ownership: { type: "Leasehold (Wasl)", eligibleFor: ["Locals"], minDownPayment: "N/A" },
    scores: { cashFlow: 6.0, appreciation: 2.0, liquidity: 5.0, risk: 1.0, lifestyle: 7.0 },
    overallScore: 6.8,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } }, // Villas
    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },
    
    futureUpgrades: [{ name: "Metro Depot Expansion", status: "Ongoing" }],
    description: "Al Rashidiya is a quiet, villa-only community. It feels like a throwback to 1990s Dubai with wide streets and large trees. It is heavily populated by Emirati families and long-term expat families renting direct from Wasl.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A" },
      { factor: "Rental Demand", read: "Steady demand for affordable 3+ bedroom villas." },
      { factor: "Price Drivers", read: "Proximity to Festival City and Airport." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: ["3-Bed villas rent for AED 120k-140k.", "4-Bed villas rent for AED 160k+.", "Properties are older but offer better privacy than new townhouse clusters."],
    salesAnalysisPoints: ["N/A"],
    investorTip: "Not an investment zone.",

    connectivity: {
      airport: { name: "DXB Intl", km: "1 km", mins: "3 mins" },
      school: { name: "Al Mawakeb", km: "2 km", mins: "5 mins" },
      tourist: { name: "Festival City", km: "3 km", mins: "5 mins" },
      metro: { name: "Centrepoint", km: "1 km", mins: "2 mins" },
      mall: { name: "Bin Sougat", km: "1 km", mins: "2 mins" },
      business: { name: "Airport Freezone", km: "4 km", mins: "8 mins" },
      hospital: { name: "Rashidiya Medical", km: "1 km", mins: "3 mins" }
    },
    buyerPsychology: { trigger: "Access", archetype: "The Airport Commuter", motivation: "Living next door to the terminal." }
  },

  // --- DUBAI: AL RAS (Heritage Deira) ---
  {
    id: "al-ras",
    name: "Al Ras (Deira)",
    emirate: "Dubai",
    category: "Heritage / Commercial",
    
    roi: "N/A",
    avgPrice: "AED 3,178/sqft (Commercial Plot)", // Very niche sales data
    imageColor: "bg-amber-900", // Gold/Spice
    
    masterDeveloper: "Old Dubai (Historic)",
    location: "Deira Waterfront / Creek",
    totalArea: "Dense Souk District",
    towers: "Low-rise Heritage",
    completion: "Historic",
    privateBeach: "No",

    highlights: [
      "The historic trading core of Dubai.",
      "Home to the world-famous Gold Souk and Spice Souk.",
      "Houses the Al Ras Public Library and Heritage House.",
      "A bustling wholesale and tourism hub."
    ],

    amenities: [
      "Gold Souk (Retail)", "Spice Souk (Culture)", "Heritage House (Museum)", "Al Ras Library (Culture)", "Dubai Creek (Transport)", "Wholesale Markets (Business)"
    ],

    supplyStats: { totalUnits: "Limited", handedOver: "100%", underConstruction: "0%", nextDelivery: "Restoration Only" },
    
    transport: {
      metro: { name: "Al Ras Station", mins: "Direct", status: "Active (Green Line)" },
      roadAccess: ["Baniyas Road"],
      walkability: "Very High (Pedestrian Zones)",
      cycling: "No"
    },

    aiVerdict: {
      title: "The Old Soul",
      summary: "Al Ras is where Dubai began. It is a commercial powerhouse for gold and spice trading. Real estate here is tightly held and rarely traded, making it a tourism/business destination rather than a residential investment zone."
    },

    priceTrend: { "2023": "N/A", "2024": "N/A", "2025": "N/A", "2026": "N/A" },
    demandSignals: { rentalDemand: "Very High (Commercial)", resaleLiquidity: "Low", tenantProfile: "Traders" },
    ownership: { type: "Leasehold / Restricted", eligibleFor: ["Locals"], minDownPayment: "N/A" },
    scores: { cashFlow: 9.0, appreciation: 5.0, liquidity: 4.0, risk: 2.0, lifestyle: 6.0 },
    overallScore: 7.0, // Commercial score

    unitEconomics: { studio: { roi: "N/A", rent: "AED 30k" }, oneBed: { roi: "N/A", rent: "AED 45k" }, twoBed: { roi: "N/A", rent: "N/A" } },
    shortTermScore: 4.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },
    
    futureUpgrades: [{ name: "Deira Waterfront Regeneration", status: "Ongoing" }],
    description: "Al Ras is the westernmost locality in Deira. It sits on the mouth of the Dubai Creek. It is the center of the gold and spice trade and retains the narrow, bustling streets of old Arabia. It is vital for heritage tourism.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Generational owners. Shops are passed down through families." },
      { factor: "Rental Demand", read: "Commercial shops have waiting lists. Residential is for workers in the souk." },
      { factor: "Price Drivers", read: "Gold price and tourism footfall." },
      { factor: "Liquidity", read: "Low volume, high value." }
    ],

    rentalAnalysisPoints: ["Residential rents are low-tier (labour/bachelor focus).", "Commercial rents are premium due to footfall."],
    salesAnalysisPoints: ["Very few open market transactions."],
    investorTip: "Visit for culture, invest elsewhere for housing.",

    connectivity: {
      airport: { name: "DXB Intl", km: "8 km", mins: "15 mins" },
      school: { name: "N/A", km: "--", mins: "--" },
      tourist: { name: "Gold Souk", km: "0 km", mins: "0 mins" },
      metro: { name: "Al Ras", km: "0 km", mins: "0 mins" },
      mall: { name: "Souks", km: "0 km", mins: "0 mins" },
      business: { name: "Trading Hub", km: "0 km", mins: "0 mins" },
      hospital: { name: "Al Kuwaiti", km: "1 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Heritage", archetype: "The Trader", motivation: "Proximity to the port and market." }
  },
  // --- DUBAI: AL RAFFA (Bur Dubai / Port District) ---
  {
    id: "al-raffa",
    name: "Al Raffa",
    emirate: "Dubai",
    category: "Heritage / Coastal",
    
    // 🟢 REAL MARKET METRICS (Rental Focus)
    roi: "N/A (Leasehold)",
    avgPrice: "N/A (Rental Market)",
    imageColor: "bg-cyan-900", // Maritime/Port
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private / Wasl",
    location: "Bur Dubai (Near Port Rashid)",
    totalArea: "Mixed Use District",
    towers: "Mid-rise (G+7)",
    completion: "Fully Developed",
    privateBeach: "No (Close to La Mer)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "A quiet, established residential pocket in bustling Bur Dubai.",
      "Walking distance to the historic Al Ghubaiba Bus Station and Metro.",
      "Adjacent to the transforming 'Mina Rashid' (Queen Elizabeth 2 Hotel).",
      "Known for its fabric souks, affordable electronics, and hidden culinary gems."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Khaleej Centre (Shopping)", 
      "Queen Elizabeth 2 Hotel (Leisure)", 
      "Al Raffa Park (Nature)", 
      "New Gold Souk Building (Retail)", 
      "Baquer Mohebi Supermarket (Retail)",
      "Aster Hospital (Healthcare)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Stable Supply",
      handedOver: "100%",
      underConstruction: "5% (Redevelopment)",
      nextDelivery: "Private Projects Only"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Al Ghubaiba", mins: "10 mins Walk", status: "Active (Green Line)" },
      roadAccess: ["Khalid Bin Al Waleed Rd", "Al Mina Rd"],
      walkability: "High (Grid Layout)",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Maritime Gateway",
      summary: "Al Raffa is a strategic rental choice for those working in the port, dry docks, or Jumeirah. It offers the connectivity of Bur Dubai without the extreme congestion of Meena Bazaar."
    },

    // 🟢 PRICE HISTORY (Rentals)
    priceTrend: { 
      "2023": "AED 55k (Rent - 2B)", 
      "2024": "AED 65k (Rent - 2B)", 
      "2025": "AED 72k (Rent - 2B)",
      "2026 (Proj)": "AED 78k (Rent - 2B)" 
    },

    demandSignals: { 
      rentalDemand: "High", 
      resaleLiquidity: "N/A", 
      tenantProfile: "Asian Families & Port Staff" 
    },
    ownership: { type: "Leasehold", eligibleFor: ["Locals / GCC"], minDownPayment: "N/A" },

    scores: { cashFlow: 7.5, appreciation: 2.0, liquidity: 6.0, risk: 2.0, lifestyle: 7.0 },
    overallScore: 7.0,

    // 🟢 UNIT ECONOMICS (Rents)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 40k" }, 
      oneBed: { roi: "N/A", rent: "AED 55k" }, 
      twoBed: { roi: "N/A", rent: "AED 75k" } 
    },

    shortTermScore: 4.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "65%", tenantType: "Budget Tourists" },

    futureUpgrades: [
      { name: "Mina Rashid Redevelopment", status: "Ongoing" },
      { name: "Shindagha Corridor", status: "Completed" }
    ],

    // 🟢 REAL ESTATE IN AL RAFFA
    description: "Al Raffa bridges the gap between the historic charm of the Creek and the modern luxury of Jumeirah. It is a highly practical neighborhood, offering spacious older apartments at competitive rates. The area is heavily influenced by the maritime industry due to its proximity to Port Rashid and the Dry Docks.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A - Primarily a rental market for expatriates." },
      { factor: "Rental Demand", read: "High retention rate. Tenants often stay for 10+ years due to rent control and community ties." },
      { factor: "Price Drivers", read: "Rents drift upwards based on the spillover from the gentrifying Mina Rashid area." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: [
      "2-Bedroom apartments average AED 70k-80k, offering 1,200+ sq.ft layouts.",
      "Newer buildings near Port Rashid command a 15% rental premium.",
      "Parking is the main challenge; buildings with dedicated slots rent faster."
    ],

    salesAnalysisPoints: ["N/A - Leasehold Zone"],
    investorTip: "Not an investment zone for expats. Ideal for tenants seeking a central, walkable lifestyle near the sea.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "12 km", mins: "18 mins" },
      school: { name: "New Academy School", km: "1 km", mins: "3 mins" },
      tourist: { name: "Queen Elizabeth 2", km: "2 km", mins: "5 mins" },
      metro: { name: "Al Ghubaiba", km: "1 km", mins: "12 mins" },
      mall: { name: "Al Khaleej Centre", km: "0.5 km", mins: "5 mins" },
      business: { name: "World Trade Ctr", km: "4 km", mins: "8 mins" },
      hospital: { name: "Aster Hospital", km: "0.5 km", mins: "2 mins" }
    },

    buyerPsychology: {
      trigger: "Stability & Space",
      archetype: "The Long-Term Resident",
      motivation: "Tenants prioritize square footage and established community feel over glitzy amenities."
    }
  },

  // --- DUBAI: AL RIGGA (Deira's Downtown) ---
  {
    id: "al-rigga",
    name: "Al Rigga",
    emirate: "Dubai",
    category: "Commercial / Nightlife",
    
    // 🟢 REAL MARKET METRICS (Rental Focus)
    roi: "N/A (Leasehold)",
    avgPrice: "N/A (Rental Market)",
    imageColor: "bg-purple-900", // Nightlife/Vibrant
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private / Al Ghurair",
    location: "Deira Core",
    totalArea: "High Density Grid",
    towers: "Mid-rise (G+4 to G+9)",
    completion: "Mature / Historic",
    privateBeach: "No",

    // 🟢 HIGHLIGHTS
    highlights: [
      "Famous for Al Rigga Road, one of Dubai's first 'fashion streets', now a 24/7 dining hub.",
      "Unmatched Metro connectivity with Al Rigga and Union stations servicing the area.",
      "Home to the first modern shopping mall in the region (Al Ghurair Centre).",
      "A tourist favorite for affordable hotels, street food, and souvenir shopping."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Ghurair Centre (Mall)", 
      "Al Rigga Night Market (Seasonal)", 
      "Juice World (Iconic Spot)", 
      "Claridge Hotel (Hospitality)", 
      "Union Metro Station (Transport Hub)",
      "Deira Clocktower (Landmark)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "No New Land",
      handedOver: "100%",
      underConstruction: "0% (Renovations Only)",
      nextDelivery: "None"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Al Rigga / Union", mins: "Doorstep", status: "Active (Red Line)" },
      roadAccess: ["Al Maktoum Road", "Al Rigga Road"],
      walkability: "Very High (Pedestrian Friendly)",
      cycling: "High Traffic (Not Recommended)"
    },

    aiVerdict: {
      title: "The City That Never Sleeps",
      summary: "Al Rigga is the liveliest part of Old Dubai. For businesses and budget-conscious tenants, it is unbeatable. It offers a 24-hour lifestyle that is rare even in New Dubai."
    },

    // 🟢 PRICE HISTORY (Rentals)
    priceTrend: { 
      "2023": "AED 60k (Rent - 2B)", 
      "2024": "AED 70k (Rent - 2B)", 
      "2025": "AED 80k (Rent - 2B)",
      "2026 (Proj)": "AED 85k (Rent - 2B)" 
    },

    demandSignals: { 
      rentalDemand: "Very High", 
      resaleLiquidity: "N/A", 
      tenantProfile: "Asian Families & Tourists" 
    },
    ownership: { type: "Leasehold", eligibleFor: ["Locals"], minDownPayment: "N/A" },

    scores: { cashFlow: 8.2, appreciation: 3.5, liquidity: 6.5, risk: 2.0, lifestyle: 8.8 },
    overallScore: 7.7,

    // 🟢 UNIT ECONOMICS (Rents)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 42k" }, 
      oneBed: { roi: "N/A", rent: "AED 60k" }, 
      twoBed: { roi: "N/A", rent: "AED 85k" } 
    },

    shortTermScore: 6.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 300", occupancy: "85%", tenantType: "Shopping Tourists" },

    futureUpgrades: [
      { name: "Union Metro Transit Oriented Dev", status: "Planned" },
      { name: "Al Rigga Streetscaping", status: "Ongoing" }
    ],

    // 🟢 REAL ESTATE IN AL RIGGA
    description: "Al Rigga is a nostalgic yet energetic district in Deira. It defines the 'Old Dubai' charm with its neon-lit streets, endless shawarma cafeterias, and bustling sidewalks. While residential buildings are older, they are spacious and incredibly well-connected. It serves as the primary accommodation zone for the workforce driving Dubai's trading and service sectors.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A - Tenants only. Owned by key local families and trading conglomerates." },
      { factor: "Rental Demand", read: "Extremely high. Vacancy is virtually non-existent due to the Red Line Metro access." },
      { factor: "Price Drivers", read: "Connectivity is king here. Being 10 minutes from the Airport and 15 mins from Burj Khalifa via Metro drives prices." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: [
      "Rents have surged 15% post-pandemic as tourism rebounded.",
      "Sharing accommodation is common, though regulations are strictly enforced.",
      "Hotel apartments offer a flexible mid-term housing solution for business travelers."
    ],

    salesAnalysisPoints: ["N/A - Leasehold Zone"],
    investorTip: "This area is best for hospitality or retail investments. A shop on Al Rigga road guarantees high footfall.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "4 km", mins: "8 mins" },
      school: { name: "Al Wuheida School", km: "3 km", mins: "10 mins" },
      tourist: { name: "Deira Clocktower", km: "1 km", mins: "3 mins" },
      metro: { name: "Al Rigga Station", km: "0.1 km", mins: "1 min" },
      mall: { name: "Al Ghurair Centre", km: "0.3 km", mins: "3 mins" },
      business: { name: "Deira Twin Towers", km: "1 km", mins: "4 mins" },
      hospital: { name: "NMC Deira", km: "2 km", mins: "5 mins" }
    },

    buyerPsychology: {
      trigger: "Action & Access",
      archetype: "The Urban Hustler",
      motivation: "Living here means you never need a car. Everything from food to fashion to flights is minutes away."
    }
  },// --- DUBAI: AL SAFA (1 & 2) ---
  {
    id: "al-safa",
    name: "Al Safa 1 & 2",
    emirate: "Dubai",
    category: "Ultra-Luxury / Parkside",
    
    // 🟢 REAL MARKET METRICS
    roi: "5.5%",
    avgPrice: "AED 18M (Villa) / AED 3.5M (Apt)",
    imageColor: "bg-emerald-600", // Safa Park Green
    
    // 🟢 KEY FACTS
    masterDeveloper: "Meraas / Damac (Safa One/Two)",
    location: "Bordering Sheikh Zayed Rd & Jumeirah",
    totalArea: "Prime Central District",
    towers: "High-end Luxury (Safa One) & Villas",
    completion: "Mature / New Towers Underway",
    privateBeach: "No (Canal Front)",

    highlights: [
      "Home to Safa Park and the Dubai Water Canal.",
      "One of the most prestigious addresses in Dubai, bridging Jumeirah and Downtown.",
      "Massive transformation with ultra-luxury towers like 'Safa One' by de GRISOGONO.",
      "Direct access to Sheikh Zayed Road and Jumeirah Beach Road."
    ],

    amenities: [
      "Safa Park (Nature)", "Dubai Water Canal (Leisure)", "Medcare Hospital (Healthcare)", "Jumeirah College (Education)", "Boxpark (Dining nearby)", "Safa British School (Education)"
    ],

    supplyStats: { totalUnits: "Limited Land", handedOver: "90%", underConstruction: "10% (Towers)", nextDelivery: "Q1 2027 (Safa Two)" },
    
    transport: {
      metro: { name: "Business Bay", mins: "5 mins Drive", status: "Red Line" },
      roadAccess: ["Sheikh Zayed Rd", "Al Wasl Rd"],
      walkability: "High (Around Canal/Park)",
      cycling: "Excellent (Canal Tracks)"
    },

    aiVerdict: {
      title: "The Billionaire's Corridor",
      summary: "Al Safa is transforming from a quiet villa district into a vertical luxury hub. The Water Canal frontage has created a new 'Gold Mile' for investors seeking trophy assets."
    },

    priceTrend: { "2023": "AED 12M (Villa)", "2024": "AED 15M", "2025": "AED 18M", "2026 (Proj)": "AED 20M" },
    demandSignals: { rentalDemand: "Very High (Luxury)", resaleLiquidity: "High (Safa One)", tenantProfile: "CEOs & Diplomats" },
    ownership: { type: "Mixed (Freehold Towers / Leasehold Villas)", eligibleFor: ["All (Towers)"], minDownPayment: "20%" },
    scores: { cashFlow: 5.5, appreciation: 9.5, liquidity: 7.0, risk: 3.0, lifestyle: 9.8 },
    overallScore: 8.9,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "5.8%", rent: "AED 180k" }, twoBed: { roi: "5.5%", rent: "AED 260k" } },
    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,200", occupancy: "75%", tenantType: "Luxury Travelers" },
    
    futureUpgrades: [{ name: "Safa Two Handover", status: "Construction" }, { name: "Canal Pedestrian Bridge", status: "Planned" }],
    
    description: "Al Safa is synonymous with affluence. Historically a villa community for the elite, the addition of the Dubai Water Canal has unlocked freehold potential for ultra-luxury apartments. It offers the best of both worlds: park life and skyline views.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Global HNWIs buying branded residences (Damac) and GCC nationals holding legacy villas." },
      { factor: "Rental Demand", read: "Premium. Tenants pay top dollar for Canal views and park access." },
      { factor: "Price Drivers", read: "Scarcity. There is no land left, so vertical expansion is the only way up." },
      { factor: "Liquidity", read: "High for branded apartments; low for legacy villas." }
    ],

    rentalAnalysisPoints: ["Canal-facing apartments rent for 30% more than non-view units.", "Older villas are being renovated to justify rents of AED 400k+.", "Branded amenities (artificial beaches, hanging gardens) drive demand."],
    salesAnalysisPoints: ["Safa One resale premiums are hitting 15-20%.", "Villas are often sold as 'plot value' for demolition and rebuild."],
    investorTip: "Buy Canal-facing high floors in the new freehold towers. The view is protected and iconic.",

    connectivity: {
      airport: { name: "DXB Intl", km: "15 km", mins: "15 mins" },
      school: { name: "Jumeirah College", km: "1 km", mins: "2 mins" },
      tourist: { name: "Safa Park", km: "0 km", mins: "0 mins" },
      metro: { name: "Business Bay", km: "2 km", mins: "5 mins" },
      mall: { name: "Dubai Mall", km: "4 km", mins: "8 mins" },
      business: { name: "Business Bay", km: "2 km", mins: "5 mins" },
      hospital: { name: "Medcare", km: "0.5 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Prestige", archetype: "The Trophy Hunter", motivation: "Owning a branded home overlooking the Canal and Safa Park." }
  },

  // --- DUBAI: AL SATWA ---
  {
    id: "al-satwa",
    name: "Al Satwa",
    emirate: "Dubai",
    category: "High Density / Strategic",
    
    roi: "N/A (Leasehold Focus)",
    avgPrice: "N/A",
    imageColor: "bg-slate-600", // Urban/Gritty
    
    masterDeveloper: "Dubai Municipality / Meraas",
    location: "Behind Sheikh Zayed Road (Trade Centre)",
    totalArea: "Dense Grid",
    towers: "Low-rise & New Freehold (Satwa Park)",
    completion: "Redeveloping",
    privateBeach: "No (La Mer nearby)",

    highlights: [
      "Strategic location sandwiched between Sheikh Zayed Road and Jumeirah.",
      "Known for its bustling streets, vibrant street life, and textile shops.",
      "Recently introduced freehold plots (Satwa Garden) sparking investor interest.",
      "High rental demand from workers servicing Downtown and DIFC."
    ],

    amenities: [
      "Al Satwa Park (Leisure)", "Iranian Hospital (Healthcare)", "2nd of December St (Dining)", "City Walk (Nearby Retail)", "Financial Centre Metro (Transport)"
    ],

    supplyStats: { totalUnits: "Dense", handedOver: "95%", underConstruction: "5% (New Plots)", nextDelivery: "Private Villas" },
    
    transport: {
      metro: { name: "Financial Centre", mins: "Walking/Bus", status: "Active" },
      roadAccess: ["Sheikh Zayed Rd", "Al Satwa Rd"],
      walkability: "High (Street Grid)",
      cycling: "City Walk Tracks"
    },

    aiVerdict: {
      title: "The Strategic Gentrifier",
      summary: "Al Satwa is in the middle of a slow gentrification. Its location is unbeatable. While historically a low-income area, new freehold plots are attracting investors building G+1 villas for high rental returns."
    },

    priceTrend: { "2023": "N/A", "2024": "AED 3.5M (Plot)", "2025": "AED 4.2M (Plot)", "2026": "AED 4.8M (Plot)" },
    demandSignals: { rentalDemand: "Extremely High", resaleLiquidity: "Moderate (Land)", tenantProfile: "Service Staff & Families" },
    ownership: { type: "Mixed (Freehold Plots / Leasehold Old)", eligibleFor: ["All (Plots)"], minDownPayment: "20%" },
    scores: { cashFlow: 8.5, appreciation: 7.0, liquidity: 6.0, risk: 4.0, lifestyle: 6.5 },
    overallScore: 7.5,

    unitEconomics: { studio: { roi: "N/A", rent: "AED 45k" }, oneBed: { roi: "N/A", rent: "AED 65k" }, twoBed: { roi: "N/A", rent: "AED 85k" } },
    shortTermScore: 5.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },
    
    futureUpgrades: [{ name: "Satwa Redevelopment", status: "Ongoing" }],
    description: "Al Satwa is a high-density district known for its grid of busy streets. It connects Jumeirah to the business district. It is famous for its vibrant street life, affordable tailoring, and hidden food gems. Recently, freehold villa plots have opened up, changing the landscape.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Smart investors buying land to build multi-unit villas for rental income." },
      { factor: "Rental Demand", read: "Insatiable. It is the closest affordable area to DIFC." },
      { factor: "Price Drivers", read: "Land scarcity near Sheikh Zayed Road." },
      { factor: "Liquidity", read: "Land sells fast; old buildings do not trade." }
    ],

    rentalAnalysisPoints: ["Shared accommodation is common (regulated).", "Newer G+1 villas rent for AED 180k+ to families wanting central access.", "Older apartments are budget-friendly but lack amenities."],
    salesAnalysisPoints: ["Freehold plots are the hottest commodity here.", "Prices have jumped 20% as developers realize the location's value."],
    investorTip: "Buy a freehold plot in Al Satwa, build a G+1 duplex, and rent it out. The yield is double-digit.",

    connectivity: {
      airport: { name: "DXB Intl", km: "10 km", mins: "12 mins" },
      school: { name: "Al Satwa School", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "City Walk", km: "1 km", mins: "3 mins" },
      metro: { name: "Financial Ctr", km: "1 km", mins: "10 mins" },
      mall: { name: "Dubai Mall", km: "3 km", mins: "5 mins" },
      business: { name: "DIFC", km: "1 km", mins: "5 mins" },
      hospital: { name: "Iranian Hosp", km: "0.5 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Location Value", archetype: "The Land Developer", motivation: "Building rental stock in a high-demand central zone." }
  },

  // --- DUBAI: AL SOUQ AL KABEER (Meena Bazaar) ---
  {
    id: "al-souq-al-kabeer",
    name: "Al Souq Al Kabeer",
    emirate: "Dubai",
    category: "Heritage / Trade",
    
    roi: "N/A (Leasehold)",
    avgPrice: "N/A",
    imageColor: "bg-amber-600", // History/Gold
    
    masterDeveloper: "Historic Dubai",
    location: "Bur Dubai Creek",
    totalArea: "Dense Souk",
    towers: "Heritage / Low-rise",
    completion: "Historic",
    privateBeach: "No (Creek Side)",

    highlights: [
      "The historic commercial center of Bur Dubai, locally known as Meena Bazaar.",
      "Home to the Dubai Museum (Al Fahidi Fort) and the Textile Souk.",
      "A bustling hub for textile, electronics, and jewelry trading.",
      "High tourism footfall due to Abra stations and heritage sites."
    ],

    amenities: [
      "Meena Bazaar (Shopping)", "Dubai Museum (Culture)", "Al Seef (Leisure - Nearby)", "Textile Souk (Trade)", "Grand Mosque (Culture)", "Al Fahidi Metro (Transport)"
    ],

    supplyStats: { totalUnits: "Capped", handedOver: "100%", underConstruction: "0%", nextDelivery: "N/A" },
    
    transport: {
      metro: { name: "Sharaf DG / Al Ghubaiba", mins: "Walking", status: "Active (Green Line)" },
      roadAccess: ["Ali Bin Abi Talib St"],
      walkability: "Very High (Crowded)",
      cycling: "No"
    },

    aiVerdict: {
      title: "The Traders' Den",
      summary: "This is purely a commercial and tourism zone. Residential space is limited to older apartments for workers in the bazaar. It represents the history of Dubai's trade."
    },

    priceTrend: { "2023": "N/A", "2024": "N/A", "2025": "N/A", "2026": "N/A" },
    demandSignals: { rentalDemand: "Very High (Staff)", resaleLiquidity: "N/A", tenantProfile: "Traders & Workers" },
    ownership: { type: "Leasehold", eligibleFor: ["Locals"], minDownPayment: "N/A" },
    scores: { cashFlow: 9.0, appreciation: 4.0, liquidity: 5.0, risk: 2.0, lifestyle: 6.5 },
    overallScore: 7.2,

    unitEconomics: { studio: { roi: "N/A", rent: "AED 35k" }, oneBed: { roi: "N/A", rent: "AED 50k" }, twoBed: { roi: "N/A", rent: "AED 70k" } },
    shortTermScore: 5.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },
    
    futureUpgrades: [{ name: "Creek Promenade Rehab", status: "Ongoing" }],
    description: "Al Souq Al Kabeer is the oldest part of Bur Dubai. It is a sensory overload of neon lights, fabric shops, and street food. Real estate here is tightly controlled and mostly commercial."
  },

  // --- DUBAI: AL SUFOUH (1 & 2) ---
  {
    id: "al-sufouh",
    name: "Al Sufouh 1 & 2",
    emirate: "Dubai",
    category: "Knowledge / Luxury Beach",
    
    roi: "6.8%",
    avgPrice: "AED 2.5M (Apartment)",
    imageColor: "bg-blue-500", // Sea/Tech
    
    masterDeveloper: "Tecom / Dubai Holding",
    location: "Coastline between Palm & Marina",
    totalArea: "Prime Waterfront",
    towers: "High-rise & Palaces",
    completion: "Developed / Infill",
    privateBeach: "Yes (Secret Beach / Palaces)",

    highlights: [
      "Home to Dubai Knowledge Park, Internet City, and Media City (Free Zones).",
      "Contains 'Madinat Jumeirah Living' (MJL), a prime freehold hotspot.",
      "The location of the Royal Palaces and 'Secret Beach' (Black Palace Beach).",
      "Excellent tram and monorail connectivity."
    ],

    amenities: [
      "Madinat Jumeirah (Dining)", "Secret Beach (Leisure)", "Dubai College (Education)", "Media City (Business)", "Palm Jumeirah Tram (Transport)", "Souk Madinat (Retail)"
    ],

    supplyStats: { totalUnits: "Growing (MJL)", handedOver: "85%", underConstruction: "15%", nextDelivery: "Q4 2025 (MJL Phases)" },
    
    transport: {
      metro: { name: "Internet City", mins: "Nearby", status: "Active" },
      roadAccess: ["King Salman Bin Abdulaziz St", "SZR"],
      walkability: "High (In Clusters)",
      cycling: "Tram Line Track"
    },

    aiVerdict: {
      title: "The Innovation Coast",
      summary: "Al Sufouh is a dual-market: Sufouh 1 is royal palaces (no go), Sufouh 2 is the tech hub. The investment goldmine here is 'Madinat Jumeirah Living' – rare freehold luxury opposite the Burj Al Arab."
    },

    priceTrend: { "2023": "AED 2.1M", "2024": "AED 2.3M", "2025": "AED 2.5M", "2026": "AED 2.8M" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High (MJL)", tenantProfile: "Media/Tech Execs" },
    ownership: { type: "Freehold (MJL) / Leasehold (Rest)", eligibleFor: ["All (MJL)"], minDownPayment: "20%" },
    scores: { cashFlow: 7.2, appreciation: 8.5, liquidity: 8.0, risk: 3.5, lifestyle: 9.5 },
    overallScore: 8.7,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "7.0%", rent: "AED 140k" }, twoBed: { roi: "6.5%", rent: "AED 220k" } },
    shortTermScore: 9.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,000", occupancy: "85%", tenantType: "Luxury Tourists" },
    
    futureUpgrades: [{ name: "New Media City Towers", status: "Planned" }],
    description: "Al Sufouh spans the coast from the Burj Al Arab to the Palm Jumeirah. It houses the city's brain power (Media/Internet City) and some of its most exclusive real estate (Madinat Living). It is quiet, green, and incredibly central.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "European and CIS investors targeting Madinat Jumeirah Living for holiday homes." },
      { factor: "Rental Demand", read: "High corporate demand from Media City and educational staff." },
      { factor: "Price Drivers", read: "Burj Al Arab views are the #1 premium driver." },
      { factor: "Liquidity", read: "High for freehold apartments." }
    ],

    rentalAnalysisPoints: ["1-Beds in MJL rent for AED 130k-150k.", "Short-term rentals perform exceptionally well due to Madinat proximity.", "Long-term tenants are sticky due to proximity to work hubs."],
    salesAnalysisPoints: ["MJL resales are trading at AED 2,500+ per sq.ft.", "Limited freehold supply ensures capital protection."],
    investorTip: "Madinat Jumeirah Living is the only freehold play here. Buy for the Airbnb potential.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "Dubai College", km: "1 km", mins: "2 mins" },
      tourist: { name: "Burj Al Arab", km: "2 km", mins: "5 mins" },
      metro: { name: "Internet City", km: "1 km", mins: "3 mins" },
      mall: { name: "Mall of Emirates", km: "3 km", mins: "5 mins" },
      business: { name: "Media City", km: "0 km", mins: "0 mins" },
      hospital: { name: "Saudi German", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Views & Work", archetype: "The Tech Executive", motivation: "Walking to work at Google/Microsoft and seeing the sea." }
  },

  // --- DUBAI: AL TWAR (1, 2, 3) ---
  {
    id: "al-twar",
    name: "Al Twar",
    emirate: "Dubai",
    category: "Villas / Local Heritage",
    
    roi: "N/A (Leasehold)",
    avgPrice: "AED 4.5M (Villa)",
    imageColor: "bg-teal-800", // Traditional
    
    masterDeveloper: "Dubai Government / Private",
    location: "Near DXB Airport / Qusais",
    totalArea: "Residential Villas",
    towers: "None",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "Known as the ' Beverly Hills of Old Dubai' for wealthy local families.",
      "Massive plot sizes and palatial custom-built villas.",
      "Home to the Dubai Police General HQ and major government offices.",
      "Quiet, safe, and family-oriented with wide streets."
    ],

    amenities: [
      "Al Twar Park (Leisure)", "Dubai Police HQ (Govt)", "Star International School (Education)", "Al Twar Centre (Govt Services)", "Airport Freezone (Business)"
    ],

    supplyStats: { totalUnits: "Fixed", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Al Nahda / Terminal 2", mins: "Nearby", status: "Active" },
      roadAccess: ["Al Nahda Rd", "Al Quds St"],
      walkability: "Moderate",
      cycling: "Jogging Tracks"
    },

    aiVerdict: {
      title: "The Local Elite",
      summary: "Al Twar is an exclusive enclave for UAE Nationals. It represents status and stability in Old Dubai. Not an area for expat investment, but a high-end rental market for diplomats and senior doctors."
    },

    priceTrend: { "2023": "AED 3.8M", "2024": "AED 4.2M", "2025": "AED 4.5M", "2026": "AED 4.8M" },
    demandSignals: { rentalDemand: "Stable", resaleLiquidity: "Low", tenantProfile: "Local Families" },
    ownership: { type: "Restricted (GCC/Local)", eligibleFor: ["Locals"], minDownPayment: "20%" },
    scores: { cashFlow: 5.0, appreciation: 6.0, liquidity: 4.0, risk: 2.0, lifestyle: 8.5 },
    overallScore: 7.5,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } },
    shortTermScore: 2.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },
    
    futureUpgrades: [{ name: "Infrastructure Maint.", status: "Ongoing" }],
    description: "Al Twar is divided into three sub-communities. It is famous for its large family homes and proximity to Terminal 2. It is a very private community with little commercial activity inside the residential blocks.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "UAE Nationals." },
      { factor: "Rental Demand", read: "High for individual villas." },
      { factor: "Price Drivers", read: "Plot size and proximity to government hubs." },
      { factor: "Liquidity", read: "Low" }
    ],

    rentalAnalysisPoints: ["Villas rent for AED 200k - 350k.", "Tenants are usually long-term (10+ years)."],
    salesAnalysisPoints: ["Sales restricted to locals."],
    investorTip: "N/A for expats.",

    connectivity: {
      airport: { name: "DXB T2", km: "2 km", mins: "5 mins" },
      school: { name: "Star Int School", km: "1 km", mins: "2 mins" },
      tourist: { name: "Mamzar Beach", km: "5 km", mins: "10 mins" },
      metro: { name: "Al Qusais", km: "1 km", mins: "3 mins" },
      mall: { name: "Al Ghurair", km: "4 km", mins: "10 mins" },
      business: { name: "DAFZA", km: "1 km", mins: "3 mins" },
      hospital: { name: "Al Kuwaiti", km: "3 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Status", archetype: "The Local Executive", motivation: "Living in a prestigious local neighborhood." }
  },

  // --- DUBAI: AL WARQA'A (1, 2, 3, 4, 5) ---
  {
    id: "al-warqa",
    name: "Al Warqa'a",
    emirate: "Dubai",
    category: "Affordable / Safari",
    
    roi: "7.5% (Apts)",
    avgPrice: "AED 850k (Apts)",
    imageColor: "bg-orange-600", // Desert/Sun
    
    masterDeveloper: "Dubai Municipality / Private",
    location: "East Dubai / Near Mirdif",
    totalArea: "Massive District",
    towers: "Mid-rise (Warqa 1) & Villas (2-4)",
    completion: "Developing / Mature",
    privateBeach: "No",

    highlights: [
      "Al Warqa'a 1 is a hotspot for affordable apartment rentals.",
      "Home to Dubai Safari Park (Warqa 5), a major eco-tourism destination.",
      "Excellent school district with Our Own English High School & others.",
      "Direct access to Sheikh Mohammed Bin Zayed Road (E311)."
    ],

    amenities: [
      "Dubai Safari Park (Leisure)", "Warqa Mall (Shopping)", "Mushrif Park (Nearby Nature)", "Aster Hospital (Healthcare)", "School Zone (Education)", "Q1 Mall (Retail)"
    ],

    supplyStats: { totalUnits: "High Density (Warqa 1)", handedOver: "90%", underConstruction: "10%", nextDelivery: "Private Buildings" },
    
    transport: {
      metro: { name: "Rashidiya", mins: "Bus Link", status: "Feeder Service" },
      roadAccess: ["Tripoli Street", "E311"],
      walkability: "Moderate (Warqa 1)",
      cycling: "Safari Tracks"
    },

    aiVerdict: {
      title: "The Budget Family Hub",
      summary: "Al Warqa'a offers the best value 2-bedroom apartments in Dubai. It is less congested than Sharjah and has better amenities than International City. A solid choice for mid-income families."
    },

    priceTrend: { "2023": "AED 750k", "2024": "AED 800k", "2025": "AED 850k", "2026": "AED 900k" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Moderate", tenantProfile: "Teachers & Families" },
    ownership: { type: "Mixed (Freehold in Select Spots / Leasehold)", eligibleFor: ["Mostly GCC / Select Expats"], minDownPayment: "20%" },
    scores: { cashFlow: 8.0, appreciation: 5.0, liquidity: 7.0, risk: 3.0, lifestyle: 7.5 },
    overallScore: 7.8,

    unitEconomics: { studio: { roi: "7.8%", rent: "AED 38k" }, oneBed: { roi: "7.5%", rent: "AED 52k" }, twoBed: { roi: "7.2%", rent: "AED 75k" } },
    shortTermScore: 4.0,
    shortTermRental: { allowed: false, avgDailyRate: "N/A", occupancy: "N/A", tenantType: "N/A" },
    
    futureUpgrades: [{ name: "Safari Park Expansion", status: "Ongoing" }],
    description: "Al Warqa'a has emerged as a self-sufficient community. Warqa 1 features dense apartment blocks with retail plinths, while Warqa 2, 3, and 4 are quiet villa precincts for locals. Warqa 5 is dedicated to the Safari Park.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Local investors for buildings. Expats are mostly tenants." },
      { factor: "Rental Demand", read: "High due to the concentration of schools in the area." },
      { factor: "Price Drivers", read: "Affordability relative to Mirdif." },
      { factor: "Liquidity", read: "Moderate" }
    ],

    rentalAnalysisPoints: ["2-Bedrooms rent for AED 70-80k, offering 1,200 sq.ft.", "Newer buildings offer gyms/pools, unlike older stock."],
    salesAnalysisPoints: ["Freehold availability is limited to specific projects.", "Building blocks trade at 8% net yields."],
    investorTip: "Look for building acquisition opportunities if you are an institutional investor.",

    connectivity: {
      airport: { name: "DXB Intl", km: "12 km", mins: "15 mins" },
      school: { name: "Our Own English", km: "1 km", mins: "2 mins" },
      tourist: { name: "Dubai Safari", km: "4 km", mins: "8 mins" },
      metro: { name: "Rashidiya", km: "6 km", mins: "10 mins" },
      mall: { name: "Warqa Mall", km: "1 km", mins: "3 mins" },
      business: { name: "Mirdif", km: "4 km", mins: "8 mins" },
      hospital: { name: "Aster", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Schools & Value", archetype: "The Family Man", motivation: "Living next to the kids' school to avoid traffic." }
  },

  // --- DUBAI: AL WASL ---
  {
    id: "al-wasl",
    name: "Al Wasl",
    emirate: "Dubai",
    category: "Boutique Luxury",
    
    roi: "5.2%",
    avgPrice: "AED 4.5M (City Walk Apt)",
    imageColor: "bg-rose-500", // Trendy/Chic
    
    masterDeveloper: "Meraas / Wasl",
    location: "Between Jumeirah & SZR",
    totalArea: "Prime Corridor",
    towers: "Low-rise Luxury (City Walk)",
    completion: "Developed / New Phases",
    privateBeach: "No (La Mer nearby)",

    highlights: [
      "Home to City Walk and Boxpark, the trendiest outdoor destinations in Dubai.",
      "Offers a mix of quiet residential villas (Al Wasl Road) and chic freehold apartments.",
      "Located directly behind Sheikh Zayed Road with views of Burj Khalifa.",
      "A boutique lifestyle hub with high-end clinics, cafes, and galleries."
    ],

    amenities: [
      "City Walk (Retail/Dining)", "Coca-Cola Arena (Events)", "Boxpark (Urban Retail)", "Galleria Mall (Shopping)", "Valiant Clinic (Healthcare)", "Green Planet (Leisure)"
    ],

    supplyStats: { totalUnits: "Limited Freehold", handedOver: "90%", underConstruction: "10%", nextDelivery: "City Walk Extensions" },
    
    transport: {
      metro: { name: "Burj Khalifa / Dubai Mall", mins: "Nearby", status: "Active" },
      roadAccess: ["Al Wasl Rd", "SZR"],
      walkability: "Very High (City Walk)",
      cycling: "Al Wasl Track"
    },

    aiVerdict: {
      title: "The Urban Chic",
      summary: "Al Wasl is the sophisticated sister of Jumeirah. The investment play here is strictly City Walk (Freehold). It commands some of the highest price-per-sq-ft in Dubai due to its low-rise, high-luxury nature."
    },

    priceTrend: { "2023": "AED 3.8M", "2024": "AED 4.2M", "2025": "AED 4.5M", "2026": "AED 4.9M" },
    demandSignals: { rentalDemand: "High (Affluent)", resaleLiquidity: "High (City Walk)", tenantProfile: "Western Expats & Creatives" },
    ownership: { type: "Mixed (Freehold City Walk / Leasehold Villas)", eligibleFor: ["All (City Walk)"], minDownPayment: "20%" },
    scores: { cashFlow: 5.5, appreciation: 8.8, liquidity: 7.5, risk: 3.5, lifestyle: 9.9 },
    overallScore: 8.8,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "5.8%", rent: "AED 160k" }, twoBed: { roi: "5.5%", rent: "AED 240k" } },
    shortTermScore: 9.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,100", occupancy: "80%", tenantType: "Luxury Tourists" },
    
    futureUpgrades: [{ name: "City Walk Central Park", status: "Handing Over" }],
    description: "Al Wasl runs parallel to Jumeirah Beach Road and Sheikh Zayed Road. It is a low-density district characterized by white-walled villas and the ultra-modern City Walk development. It attracts a trendy, affluent crowd who value aesthetics and central connectivity.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "European investors and GCC millennials who want an urban, walkable lifestyle." },
      { factor: "Rental Demand", read: "Very high for upgraded villas and City Walk apartments." },
      { factor: "Price Drivers", read: "The 'City Walk' brand premium and proximity to Downtown." },
      { factor: "Liquidity", read: "City Walk apartments are highly liquid assets." }
    ],

    rentalAnalysisPoints: ["City Walk 1-beds rent for AED 160k+, competing with Downtown.", "Villas rent for AED 300k - 600k depending on renovation status.", "Tenants pay a premium for the 'European' walkable street feel."],
    salesAnalysisPoints: ["City Walk trades at AED 2,200+ per sq.ft.", "Central Park at City Walk is seeing high resale demand."],
    investorTip: "Central Park at City Walk is the pick. Greenery + Downtown location = Unbeatable.",

    connectivity: {
      airport: { name: "DXB Intl", km: "12 km", mins: "15 mins" },
      school: { name: "JESS Jumeirah", km: "2 km", mins: "5 mins" },
      tourist: { name: "Green Planet", km: "0.2 km", mins: "1 min" },
      metro: { name: "Burj Khalifa", km: "1 km", mins: "3 mins" },
      mall: { name: "Galleria", km: "1 km", mins: "2 mins" },
      business: { name: "DIFC", km: "3 km", mins: "6 mins" },
      hospital: { name: "Valiant", km: "0.2 km", mins: "1 min" }
    },
    buyerPsychology: { trigger: "Lifestyle", archetype: "The Trendsetter", motivation: "Living in Dubai's most walkable, stylish open-air district." }
  },

  // --- DUBAI: AL YALAYIS (Emerging Budget Hub) ---
  {
    id: "al-yalayis",
    name: "Al Yalayis",
    emirate: "Dubai",
    category: "Emerging / Budget",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "6.8%",
    avgPrice: "AED 550k (Apt)",
    imageColor: "bg-stone-500", // Industrial/Emerging
    
    // 🟢 KEY FACTS
    masterDeveloper: "Dubai Investments / Private",
    location: "Jebel Ali / DIP Interface",
    totalArea: "Mixed Use (Logistics & Res)",
    towers: "Low-rise Affordable Housing",
    completion: "Developing",
    privateBeach: "No",

    // 🟢 HIGHLIGHTS
    highlights: [
      "A rapidly emerging district strategically located near Dubai Investment Park (DIP) and Expo City.",
      "Offers some of the lowest entry prices for freehold property in Dubai (Studios < AED 450k).",
      "High demand from the massive workforce in Jebel Ali Freezone and Al Maktoum Airport.",
      "Al Yalayis 1, 2 & 3 are evolving into self-sufficient residential pockets."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Yalayis Government Center (Services)", 
      "Community Parks (Leisure)", 
      "DIP Souq (Shopping - Nearby)", 
      "Expo City Dubai (Leisure - 10 mins)",
      "Local Mosques (Culture)",
      "Cycling Tracks (Fitness)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Growing Supply",
      handedOver: "40%",
      underConstruction: "60%",
      nextDelivery: "Q4 2026 (Affordable Projects)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "DIP Station", mins: "Bus Link", status: "Active (Route 2020)" },
      roadAccess: ["Yalayis Street (D57)", "E611"],
      walkability: "Low (Car Dependent)",
      cycling: "Developing Network"
    },

    aiVerdict: {
      title: "The Future Growth Zone",
      summary: "Al Yalayis is a long-term play. It is currently rough around the edges but sits on a critical logistics corridor. As DWC Airport expands, this area will become the primary affordable housing belt for the airport workforce."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 420k", 
      "2024": "AED 480k", 
      "2025": "AED 550k",
      "2026 (Proj)": "AED 620k" 
    },

    demandSignals: { 
      rentalDemand: "High (Workforce)", 
      resaleLiquidity: "Moderate", 
      tenantProfile: "Blue/White Collar Mix" 
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.5, appreciation: 8.5, liquidity: 5.0, risk: 4.0, lifestyle: 5.5 },
    overallScore: 7.2,

    // 🟢 UNIT ECONOMICS (Budget Focus)
    unitEconomics: { 
      studio: { roi: "7.8%", rent: "AED 32k" }, 
      oneBed: { roi: "7.2%", rent: "AED 48k" }, 
      twoBed: { roi: "6.8%", rent: "AED 65k" } 
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 200", occupancy: "60%", tenantType: "Budget Business" },

    futureUpgrades: [
      { name: "Yalayis Street Widening", status: "Completed" },
      { name: "New Retail Plazas", status: "Planned" }
    ],

    description: "Al Yalayis is a key node in Dubai's southern expansion. Historically an industrial and government services hub, it is transforming into a budget-friendly residential zone. Its proximity to the Expo 2020 site and the new Al Maktoum Airport makes it a strategic location for investors looking for capital appreciation over a 5-10 year horizon.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Budget investors priced out of Furjan and JVC." },
      { factor: "Rental Demand", read: "Driven by affordability. It competes directly with Dubai South." },
      { factor: "Price Drivers", read: "Infrastructure development and DWC Airport expansion." },
      { factor: "Liquidity", read: "Growing, as more off-plan projects launch." }
    ],

    rentalAnalysisPoints: [
      "Rents are 20-30% lower than DIP, attracting cost-conscious tenants.",
      "Bulk leasing to companies for staff accommodation is a common strategy.",
      "Studio yields can hit 8% due to low service charges."
    ],
    salesAnalysisPoints: [
      "Prices per sq.ft are under AED 800, a rarity in Freehold Dubai.",
      "Capital growth will follow the completion of surrounding infrastructure."
    ],
    investorTip: "Buy cheap, hold long. Wait for the DWC Airport expansion to drive massive workforce demand here.",
    
    connectivity: {
      airport: { name: "DWC Airport", km: "10 km", mins: "12 mins" },
      school: { name: "Dove Green", km: "5 km", mins: "8 mins" },
      tourist: { name: "Expo City", km: "8 km", mins: "10 mins" },
      metro: { name: "DIP Station", km: "4 km", mins: "6 mins" },
      mall: { name: "DIP Souq", km: "3 km", mins: "5 mins" },
      business: { name: "Jebel Ali Freezone", km: "8 km", mins: "12 mins" },
      hospital: { name: "NMC Royal", km: "4 km", mins: "6 mins" }
    },
    buyerPsychology: { trigger: "Affordability", archetype: "The Value Hunter", motivation: "Getting on the property ladder for under AED 500k." }
  },

  // --- DUBAI: ARABIAN RANCHES 1 (The Original Luxury) ---
  {
    id: "arabian-ranches-1",
    name: "Arabian Ranches 1",
    emirate: "Dubai",
    category: "Luxury / Golf Community",
    
    roi: "5.2%",
    avgPrice: "AED 6.5M (Villa)",
    imageColor: "bg-amber-600", // Desert/Golf
    
    masterDeveloper: "Emaar",
    location: "Sheikh Mohammed Bin Zayed Rd",
    totalArea: "Premium Golf District",
    towers: "None (Villas only)",
    completion: "Mature / Established",
    privateBeach: "No (Golf Course Views)",

    highlights: [
      "The original, most prestigious desert-themed villa community by Emaar.",
      "Home to the Arabian Ranches Golf Club and JESS (one of Dubai's top schools).",
      "Large plots and mature greenery make it a favorite for Western expats.",
      "Highly established resale market with strong capital retention."
    ],

    amenities: [
      "Arabian Ranches Golf Club (Sport)", "Ranches Souk (Retail)", "JESS Jumeirah (Education)", "Mediclinic (Healthcare)", "Equestrian Centre (Leisure)", "Community Lakes (Nature)"
    ],

    supplyStats: { totalUnits: "Capped Supply", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "No Metro", mins: "--", status: "Car Dependent" },
      roadAccess: ["Sheikh Mohammed Bin Zayed Rd", "Hessa St"],
      walkability: "High (Internal Paths)",
      cycling: "Community Tracks"
    },

    aiVerdict: {
      title: "The Gold Standard",
      summary: "Arabian Ranches 1 is the benchmark for villa living. It commands a premium over AR 2 & 3 due to larger plot sizes and the golf course. It is an 'end-user' market where capital preservation is excellent."
    },

    priceTrend: { "2023": "AED 5.2M", "2024": "AED 5.8M", "2025": "AED 6.5M", "2026": "AED 6.9M" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Western Families & CEOs" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 5.0, appreciation: 7.5, liquidity: 8.5, risk: 2.0, lifestyle: 9.8 },
    overallScore: 8.8,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "5.5%", rent: "AED 160k" } }, // 2-bed Villas (Palmeral)
    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,500", occupancy: "60%", tenantType: "Golf Tourists" },
    
    futureUpgrades: [{ name: "Souk Renovation", status: "Completed" }],
    description: "Arabian Ranches 1 set the standard for gated communities in Dubai. Launched in 2004, it features 4,000+ villas across distinct enclaves like Saheel, Savannah, and the ultra-exclusive Polo Homes. The mature landscaping and community feel are unmatched.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Wealthy families upgrading from apartments. High percentage of owner-occupiers." },
      { factor: "Rental Demand", read: "Always high. JESS school is a massive magnet; families move here just to secure a school seat." },
      { factor: "Price Drivers", read: "Golf course views and proximity to JESS." },
      { factor: "Liquidity", read: "Very high. Renovated units sell within weeks." }
    ],

    rentalAnalysisPoints: ["3-Bedroom villas (Saheel/Al Reem) rent for AED 220k-260k.", "Upgraded units with pools command a 20% rental premium.", "Tenants are sticky, often staying 5-10 years."],
    salesAnalysisPoints: ["Prices have risen 35% since 2023.", "Renovated villas trade at AED 1,800/sq.ft vs AED 1,400/sq.ft for original condition."],
    investorTip: "Buy an unrenovated unit in 'Al Reem' or 'Palmeral', modernize it, and flip for a 15% profit.",
    
    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "JESS Ranches", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Global Village", km: "5 km", mins: "8 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Ranches Souk", km: "1 km", mins: "3 mins" },
      business: { name: "Motor City", km: "3 km", mins: "5 mins" },
      hospital: { name: "Mediclinic", km: "1 km", mins: "3 mins" }
    },
    buyerPsychology: { trigger: "Prestige & Schools", archetype: "The Family Upgrader", motivation: "Securing a spot in JESS and living on a golf course." }
  },

  // --- DUBAI: ARABIAN RANCHES 2 (The Family Sequel) ---
  {
    id: "arabian-ranches-2",
    name: "Arabian Ranches 2",
    emirate: "Dubai",
    category: "Family / Villa Community",
    
    roi: "5.5%",
    avgPrice: "AED 5.2M (Villa)",
    imageColor: "bg-amber-700", // Community/Warm
    
    masterDeveloper: "Emaar",
    location: "Al Qudra Road",
    totalArea: "Gated Villa Clusters",
    towers: "None",
    completion: "Mature (2015-2018)",
    privateBeach: "No",

    highlights: [
      "Designed specifically for family living with pedestrian-friendly walkways ('The Sikka').",
      "Home to 'The Ranches Souk' (Carrefour, Virgin Megastore) and a leisure centre.",
      "Modern Spanish and Portuguese-themed architecture.",
      "Slightly more compact plots than Ranches 1 but newer build quality."
    ],

    amenities: [
      "The Ranches Souk (Mall)", "Fitness First (Gym)", "Ranches Primary School (Education)", "Football Pitches (Sport)", "Blossom Nursery (Education)", "Community Pools (Leisure)"
    ],

    supplyStats: { totalUnits: "1,700 Villas", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "N/A", mins: "--", status: "Car Dependent" },
      roadAccess: ["Al Qudra Rd", "Latifa Bint Hamdan St"],
      walkability: "Very High (Internal Sikka system)",
      cycling: "Dedicated Tracks"
    },

    aiVerdict: {
      title: "The Modern Family Choice",
      summary: "Ranches 2 fixes the aging issues of Ranches 1 with modern layouts and better community integration. It is the go-to for families who want a 'turn-key' villa experience without the need for immediate renovation."
    },

    priceTrend: { "2023": "AED 4.2M", "2024": "AED 4.8M", "2025": "AED 5.2M", "2026": "AED 5.5M" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "European/Expat Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 5.2, appreciation: 6.5, liquidity: 8.0, risk: 2.5, lifestyle: 9.5 },
    overallScore: 8.6,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } }, // Only 3+ Bed Villas
    shortTermScore: 4.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,200", occupancy: "50%", tenantType: "Families" },
    
    futureUpgrades: [{ name: "Road Expansion (Qudra)", status: "Ongoing" }],
    description: "Arabian Ranches 2 is a cohesive collection of villa enclaves (Casa, Lila, Palma, Yasmin, etc.). It focuses on 'walkability' with a network of sikkas (paths) connecting all homes to the central Souk and school. It feels more intimate and dense than Ranches 1.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "End-users dominate. Investors buy for stable 5% yields." },
      { factor: "Rental Demand", read: "Consistent. Vacancy rates are typically below 3%." },
      { factor: "Price Drivers", read: "Community facilities and newer build quality vs Ranches 1." },
      { factor: "Liquidity", read: "High. 'Casa' and 'Palma' units are the most liquid." }
    ],

    rentalAnalysisPoints: ["3-Bedroom villas (Casa) rent for AED 240k+.", "4-Bedroom units average AED 320k.", "Maintenance costs are lower than Ranches 1."],
    salesAnalysisPoints: ["Prices have stabilized, offering slow steady growth.", "Yasmin and Samara (Luxury clusters) trade at a premium."],
    investorTip: "Target 'Casa' type villas. They are the entry-level 3-beds and have the highest rental turnover and demand.",

    connectivity: {
      airport: { name: "DXB Intl", km: "28 km", mins: "28 mins" },
      school: { name: "Ranches Primary", km: "0.2 km", mins: "1 min" },
      tourist: { name: "Miracle Garden", km: "4 km", mins: "6 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Ranches Souk 2", km: "0.1 km", mins: "1 min" },
      business: { name: "Studio City", km: "3 km", mins: "5 mins" },
      hospital: { name: "Aster", km: "0.2 km", mins: "1 min" }
    },
    buyerPsychology: { trigger: "Safety & Walkability", archetype: "The Protective Parent", motivation: "Kids can walk to school and the pool safely without crossing roads." }
  },

  // --- DUBAI: ARABIAN RANCHES 3 (The New Generation) ---
  {
    id: "arabian-ranches-3",
    name: "Arabian Ranches 3",
    emirate: "Dubai",
    category: "Townhouse / Active Living",
    
    roi: "6.2%",
    avgPrice: "AED 2.8M (Townhouse)",
    imageColor: "bg-yellow-600", // Sunny/Active
    
    masterDeveloper: "Emaar",
    location: "Sheikh Zayed Bin Hamdan Al Nahyan St",
    totalArea: "Developing Master Plan",
    towers: "None (Townhouses & Villas)",
    completion: "Partial Handover / Construction",
    privateBeach: "No (Lazy River feature)",

    highlights: [
      "Focused on townhouses (Sun, Joy, Spring) rather than large independent villas.",
      "Features a 'Lazy River', central park, and extensive sports facilities.",
      "More affordable entry point than AR 1 or 2.",
      "Attracts first-time buyers and younger families."
    ],

    amenities: [
      "Lazy River (Leisure)", "Central Park (Nature)", "Spinneys (Retail)", "Sports Boulevard (Fitness)", "Clubhouse (Social)", "Skate Park (Leisure)"
    ],

    supplyStats: { totalUnits: "4,000+ Planned", handedOver: "40%", underConstruction: "60%", nextDelivery: "Q3 2026 (Elie Saab / Bliss)" },
    
    transport: {
      metro: { name: "Global Village (Planned)", mins: "Future", status: "Proposed" },
      roadAccess: ["Emirates Rd (E611)", "Sheikh Zayed Bin Hamdan"],
      walkability: "High (In clusters)",
      cycling: "Track Network"
    },

    aiVerdict: {
      title: "The Entry-Level Ranch",
      summary: "Arabian Ranches 3 is the volume play. It offers the 'Ranches' brand at a townhouse price point. While density is higher, the amenities (Lazy River) appeal to young families. Capital appreciation potential is higher here than mature Ranches 1 & 2 as the community finishes."
    },

    priceTrend: { "2023": "AED 2.1M", "2024": "AED 2.5M", "2025": "AED 2.8M", "2026": "AED 3.1M" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High (Flipping market)", tenantProfile: "Young Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.2, appreciation: 8.5, liquidity: 8.5, risk: 3.5, lifestyle: 8.0 },
    overallScore: 8.2,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } }, // Mostly 3/4 Bed Townhouses
    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "60%", tenantType: "Families" },
    
    futureUpgrades: [{ name: "Mall Access", status: "Planned" }, { name: "School Opening", status: "2026" }],
    description: "Arabian Ranches 3 is the latest installment in the trilogy. It marks a shift towards smaller, more affordable 3 & 4 bedroom townhouses. The community is designed around active living, with a central park, cricket pitch, and water features.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "First-time buyers and investors looking for capital growth during the construction phase." },
      { factor: "Rental Demand", read: "High demand for 3-bed townhouses as an alternative to apartments in Marina." },
      { factor: "Price Drivers", read: "Handover of amenities (Lazy River) spikes prices in surrounding clusters." },
      { factor: "Liquidity", read: "Very high volume of transactions." }
    ],

    rentalAnalysisPoints: ["3-Bed townhouses rent for AED 160k - 180k.", "4-Bed townhouses rent for AED 210k+.", "Yields are healthier than independent villas due to lower service charges and purchase price."],
    salesAnalysisPoints: ["Prices have appreciated 20% since off-plan launch.", "Premium clusters like 'Elie Saab' command AED 4M+."],
    investorTip: "Focus on 'Sun' or 'Joy' clusters for resale value, or 'Bliss' for unique whitewashed aesthetics.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "Ranches Primary", km: "5 km", mins: "10 mins" },
      tourist: { name: "Global Village", km: "2 km", mins: "5 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Cityland Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Silicon Oasis", km: "8 km", mins: "10 mins" },
      hospital: { name: "Fakeeh Univ", km: "8 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Affordability & Brand", archetype: "The Aspiring Family", motivation: "Buying into the Emaar 'Ranches' lifestyle at an entry-level price." }
  },

  // --- DUBAI: ARJAN (The Yield Hotspot) ---
  {
    id: "arjan",
    name: "Arjan",
    emirate: "Dubai",
    category: "High Yield / Emerging",
    
    roi: "8.2%",
    avgPrice: "AED 850k (Apt)",
    imageColor: "bg-pink-600", // Floral/Vibrant
    
    masterDeveloper: "Dubai Properties",
    location: "Al Barsha South / Umm Suqeim Rd",
    totalArea: "Mid-rise District",
    towers: "G+10 to G+30 Residential",
    completion: "Developing Rapidly",
    privateBeach: "No",

    highlights: [
      "Dubai's top hotspot for rental yields (studios often exceeding 8.5%).",
      "Home to the Dubai Miracle Garden and Butterfly Garden.",
      "Extremely popular with mid-income expats due to affordability and new building quality.",
      "Direct connectivity to Sheikh Mohammed Bin Zayed Road."
    ],

    amenities: [
      "Miracle Garden (Tourist)", "Butterfly Garden (Nature)", "Parkview Mediclinic (Healthcare)", "Safa Community School (Education)", "Nord Anglia School (Education)", "My City Centre (Mall)"
    ],

    supplyStats: { totalUnits: "High Growth", handedOver: "60%", underConstruction: "40%", nextDelivery: "Q2 2026 (Binghatti/Danube)" },
    
    transport: {
      metro: { name: "Blue Line (Planned)", mins: "Future", status: "Approved" },
      roadAccess: ["Umm Suqeim St", "E311"],
      walkability: "Moderate",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Cash Flow Engine",
      summary: "Arjan is unbeatable for investors seeking pure ROI. Entry prices are low (< AED 600k for studios), rents are rising, and the future Blue Line Metro will trigger a capital appreciation boom."
    },

    priceTrend: { "2023": "AED 550k", "2024": "AED 680k", "2025": "AED 850k", "2026": "AED 950k" },
    demandSignals: { rentalDemand: "Explosive", resaleLiquidity: "High", tenantProfile: "Teachers & Healthcare Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 9.5, appreciation: 8.0, liquidity: 8.5, risk: 4.5, lifestyle: 7.0 },
    overallScore: 8.9,

    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 50k" }, 
      oneBed: { roi: "7.8%", rent: "AED 75k" }, 
      twoBed: { roi: "7.2%", rent: "AED 105k" } 
    },
    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "78%", tenantType: "Budget Tourists" },
    
    futureUpgrades: [{ name: "Metro Blue Line Station", status: "Approved" }, { name: "New Regional Mall", status: "Planned" }],
    description: "Arjan is a freehold mixed-use community located in Dubailand. Once a quiet area, it has exploded in popularity due to its prime location near schools and hospitals. It offers modern apartments with resort-style pools at a fraction of the cost of Marina or Downtown.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Investors (80%) focused on buy-to-let. End-users (20%) are young couples." },
      { factor: "Rental Demand", read: "Driven by teachers from the 5 nearby schools and nurses from Parkview Hospital." },
      { factor: "Price Drivers", read: "The Metro announcement has caused a spike in off-plan sales." },
      { factor: "Liquidity", read: "High. Units under AED 1M are the fastest moving assets in Dubai." }
    ],

    rentalAnalysisPoints: ["Studios rent for AED 48k-55k.", "1-Beds rent for AED 70k-85k.", "Holiday homes (Airbnb) are viable here due to Miracle Garden visitors."],
    salesAnalysisPoints: ["Off-plan projects sell out in days.", "Secondary market prices are rising as completed stock dries up."],
    investorTip: "Buy a studio or 1-bed near the proposed Metro station site. Hold for 5 years for maximum appreciation.",

    connectivity: {
      airport: { name: "DXB Intl", km: "28 km", mins: "25 mins" },
      school: { name: "Safa Community", km: "1 km", mins: "2 mins" },
      tourist: { name: "Miracle Garden", km: "0.2 km", mins: "1 min" },
      metro: { name: "MOE (Current)", km: "10 km", mins: "12 mins" },
      mall: { name: "My City Centre", km: "0.5 km", mins: "2 mins" },
      business: { name: "Science Park", km: "2 km", mins: "4 mins" },
      hospital: { name: "Mediclinic", km: "0.5 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "High Yields", archetype: "The Smart Investor", motivation: "Getting 8% net ROI while waiting for the Metro to increase property value." }
  },

  // --- DUBAI: AZIZI RIVIERA (Meydan / French Mediterranean) ---
  {
    id: "azizi-riviera",
    name: "Azizi Riviera (Meydan)",
    emirate: "Dubai",
    category: "Waterfront / Lifestyle",
    
    roi: "7.0% - 9.0%",
    avgPrice: "AED 1.1M (1-Bed)",
    imageColor: "bg-cyan-600", // French Riviera Blue
    
    masterDeveloper: "Azizi Developments",
    location: "Meydan One (MBR City)",
    totalArea: "Waterfront Lagoon Community",
    towers: "Mid-rise (G+7 to G+10)",
    completion: "Partial Handover / Construction",
    privateBeach: "Yes (Crystal Lagoon)",

    highlights: [
      "Inspired by the French Riviera, featuring a 2km crystal lagoon and boulevard.",
      "Located in Meydan, minutes from Downtown Dubai and the Racecourse.",
      "Massive rental yields (up to 9% for studios) due to central location.",
      "Eligible for 10-Year Golden Visa (on units > AED 2M)."
    ],

    amenities: [
      "Crystal Lagoon (Leisure)", "French Boulevard (Retail)", "Meydan Racecourse (Sport)", "Meydan One Mall (Planned)", "Community Cinemas (Leisure)", "Zen Gardens (Nature)"
    ],

    supplyStats: { totalUnits: "16,000+ Units", handedOver: "50%", underConstruction: "50%", nextDelivery: "Q4 2025 (Phase 3/4)" },
    
    transport: {
      metro: { name: "Planned (Purple Line)", mins: "Future", status: "Proposed" },
      roadAccess: ["Al Khail Rd", "Meydan Rd"],
      walkability: "High (Boulevard)",
      cycling: "Meydan Tracks"
    },

    aiVerdict: {
      title: "The Downtown Alternative",
      summary: "Azizi Riviera offers the 'Downtown lifestyle' at half the price. With the Crystal Lagoon now active, rental demand has surged. It is a prime pick for short-term rental investors targeting tourists."
    },

    priceTrend: { "2023": "AED 850k", "2024": "AED 950k", "2025": "AED 1.1M", "2026": "AED 1.25M" },
    demandSignals: { rentalDemand: "Very High (Holiday)", resaleLiquidity: "Moderate", tenantProfile: "Young Pros & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 8.8, appreciation: 7.5, liquidity: 7.0, risk: 4.5, lifestyle: 9.0 },
    overallScore: 8.6,

    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 60k" }, 
      oneBed: { roi: "7.5%", rent: "AED 90k" }, 
      twoBed: { roi: "7.0%", rent: "AED 130k" } 
    },
    shortTermScore: 9.2,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "85%", tenantType: "Meydan Event Goers" },
    
    futureUpgrades: [{ name: "Meydan One Mall", status: "On Hold/Redesign" }, { name: "Lagoon Completion", status: "Active" }],
    description: "Azizi Riviera is a massive waterfront community in Meydan. It comprises 71 mid-rise buildings designed with a French Mediterranean aesthetic. The centerpiece is a swimmable crystal lagoon and a retail boulevard. It attracts young professionals who want to be 10 minutes from Dubai Mall but pay Business Bay rents.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Heavy international investor presence (CIS, Europe, Asia) focusing on holiday homes." },
      { factor: "Rental Demand", read: "Strong year-round, peaking during the Horse Racing World Cup season." },
      { factor: "Price Drivers", read: "Lagoon views and proximity to Downtown." },
      { factor: "Liquidity", read: "Improving as more phases hand over and the community comes to life." }
    ],

    rentalAnalysisPoints: ["Studios rent for AED 55k-65k.", "Lagoon-view units fetch a 15% rental premium.", "Holiday home operators report 85%+ occupancy."],
    salesAnalysisPoints: ["Resale market is active for Phase 1 & 2 units.", "Prices are still 30-40% lower than Downtown Dubai."],
    investorTip: "Buy a Lagoon-facing unit. The premium you pay upfront is recovered through significantly higher Airbnb nightly rates.",

    connectivity: {
      airport: { name: "DXB Intl", km: "15 km", mins: "15 mins" },
      school: { name: "Hartland Intl", km: "3 km", mins: "5 mins" },
      tourist: { name: "Burj Khalifa", km: "8 km", mins: "10 mins" },
      metro: { name: "Business Bay", km: "6 km", mins: "10 mins" },
      mall: { name: "Dubai Mall", km: "8 km", mins: "10 mins" },
      business: { name: "DIFC", km: "8 km", mins: "12 mins" },
      hospital: { name: "Clemenceau", km: "5 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Lifestyle & Value", archetype: "The Lifestyle Investor", motivation: "Living the 'Riviera' life with beach access, just minutes from the city center." }
  },
  // --- DUBAI: BADRAH (Dubai Waterfront) ---
  {
    id: "badrah",
    name: "Badrah (Dubai Waterfront)",
    emirate: "Dubai",
    category: "Affordable / Emerging Waterfront",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "6.8%",
    avgPrice: "AED 1.7M (Townhouse)",
    imageColor: "bg-teal-700", // Waterfront/Budget
    
    // 🟢 KEY FACTS
    masterDeveloper: "Nakheel",
    location: "Jebel Ali / Dubai Waterfront",
    totalArea: "Master Planned District",
    towers: "Low-rise & Townhouses",
    completion: "Partially Developed",
    privateBeach: "No (Canal Access nearby)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "The most affordable townhouse community with waterfront potential in Dubai.",
      "Located in the Jebel Ali/Dubai Waterfront zone, adjacent to the Palm Jebel Ali.",
      "Offers spacious townhouses at apartment prices (3-beds under AED 2M).",
      "Strategic location for logistics and port professionals."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Badrah Pavilion (Retail)", 
      "Community Mosques (Culture)", 
      "Jebel Ali Resort (Leisure - Nearby)", 
      "Motiongate Dubai (Theme Park - 15 mins)", 
      "Sports Courts (Fitness)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "1,000+ Units",
      handedOver: "100% (Phase 1)",
      underConstruction: "0% (Future Phases On Hold)",
      nextDelivery: "N/A"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "UAE Exchange", mins: "10 mins Drive", status: "Nearest Hub" },
      roadAccess: ["Sheikh Zayed Rd (E11)", "Hessa Street Extension"],
      walkability: "Moderate (Within clusters)",
      cycling: "Quiet internal roads"
    },

    aiVerdict: {
      title: "The Sleeping Giant",
      summary: "Badrah is undervalued. Sitting next to the revived Palm Jebel Ali, it is poised for massive spillover appreciation. It is currently an entry-level market for those priced out of Dubai South."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 1.4M", 
      "2024": "AED 1.55M", 
      "2025": "AED 1.7M",
      "2026 (Proj)": "AED 1.9M" 
    },

    demandSignals: { 
      rentalDemand: "High (Affordability)", 
      resaleLiquidity: "Moderate", 
      tenantProfile: "Jebel Ali/Port Employees" 
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.2, appreciation: 8.0, liquidity: 5.5, risk: 4.5, lifestyle: 5.0 },
    overallScore: 7.0,

    // 🟢 UNIT ECONOMICS
    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 38k" }, 
      oneBed: { roi: "7.0%", rent: "AED 55k" }, 
      twoBed: { roi: "6.8%", rent: "AED 75k" } 
    },

    shortTermScore: 3.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "55%", tenantType: "Budget Business" },

    futureUpgrades: [
      { name: "Palm Jebel Ali Impact", status: "Long Term" },
      { name: "Metro Extension", status: "Proposed" }
    ],

    description: "Badrah is a Nakheel community designed for budget-conscious families. It features low-rise buildings and townhouses. While it lacks the glitz of Marina, its location next to the massive Dubai Waterfront and Palm Jebel Ali projects makes it a strategic long-term hold for investors betting on the southern expansion of Dubai.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Value investors and end-users working in Jebel Ali." },
      { factor: "Rental Demand", read: "Steady demand from families who need space (3-bed townhouses) for under AED 90k rent." },
      { factor: "Price Drivers", read: "The revival of Palm Jebel Ali is the single biggest catalyst." },
      { factor: "Liquidity", read: "Moderate; buyers are specific to the location." }
    ],

    rentalAnalysisPoints: ["3-Bedroom townhouses rent for AED 85k-95k, offering unbeatable value.", "Apartments are basic but functional, attracting long-term tenants.", "Service charges are relatively low."],
    salesAnalysisPoints: ["Prices per sq.ft are ~AED 600-700, extremely low for Dubai.", "Capital growth will be slow but steady until the surrounding waterfront develops."],
    investorTip: "Buy a townhouse here as a long-term bet. When the Metro extends to the Waterfront, prices will double.",
    
    connectivity: {
      airport: { name: "DWC Airport", km: "15 km", mins: "15 mins" },
      school: { name: "Dove Green", km: "10 km", mins: "12 mins" },
      tourist: { name: "Legoland Dubai", km: "12 km", mins: "15 mins" },
      metro: { name: "UAE Exchange", km: "8 km", mins: "10 mins" },
      mall: { name: "Ibn Battuta", km: "12 km", mins: "15 mins" },
      business: { name: "JAFZA", km: "5 km", mins: "8 mins" },
      hospital: { name: "NMC Royal", km: "10 km", mins: "12 mins" }
    },
    buyerPsychology: { trigger: "Price per Sq.Ft", archetype: "The Value Contrarian", motivation: "Buying near a future mega-project (Palm Jebel Ali) at rock-bottom prices." }
  },

  // --- DUBAI: BARSHA HEIGHTS (TECOM) ---
  {
    id: "barsha-heights",
    name: "Barsha Heights (Tecom)",
    emirate: "Dubai",
    category: "Business / High Density",
    
    roi: "7.0%",
    avgPrice: "AED 950k (1-Bed)",
    imageColor: "bg-indigo-600", // Corporate
    
    masterDeveloper: "Tecom Group",
    location: "Sheikh Zayed Road (Opposite Media City)",
    totalArea: "High-rise Cluster",
    towers: "High-rise Residential/Office",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "A high-density mixed-use district catering to Media City and Internet City workers.",
      "Excellent connectivity via the Dubai Internet City Metro Station.",
      "Home to many hotels (Tryp, Atana) and serviced apartments.",
      "Walking distance to The Greens and Saudi German Hospital."
    ],

    amenities: [
      "Saudi German Hospital (Healthcare)", "GEMS Dubai American Academy (Education)", "West Zone Fresh (Retail)", "Belgian Beer Cafe (Nightlife)", "Community Park (Leisure)", "Hotel Chains (Hospitality)"
    ],

    supplyStats: { totalUnits: "Stable", handedOver: "98%", underConstruction: "2%", nextDelivery: "Limited Infill" },
    
    transport: {
      metro: { name: "Dubai Internet City", mins: "Walking", status: "Active (Red Line)" },
      roadAccess: ["Sheikh Zayed Rd (E11)", "Hessa St"],
      walkability: "High (Pavements everywhere)",
      cycling: "Moderate"
    },

    aiVerdict: {
      title: "The Corporate Dormitory",
      summary: "Barsha Heights is the default choice for young professionals working in the nearby tech and media hubs. It offers solid 7% yields due to consistent demand, though capital growth is capped by the age of the buildings."
    },

    priceTrend: { "2023": "AED 800k", "2024": "AED 880k", "2025": "AED 950k", "2026": "AED 980k" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Young Professionals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 8.5, appreciation: 5.0, liquidity: 8.5, risk: 3.5, lifestyle: 7.5 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 55k" }, 
      oneBed: { roi: "7.0%", rent: "AED 80k" }, 
      twoBed: { roi: "6.5%", rent: "AED 110k" } 
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 400", occupancy: "80%", tenantType: "Business Travelers" },
    
    futureUpgrades: [{ name: "Streetscaping", status: "Ongoing" }],
    description: "Formerly known as Tecom, Barsha Heights is a collection of high-rise towers. It is less 'polished' than Dubai Marina but offers larger apartments for lower rents. It is a strictly functional, high-energy district with 24/7 supermarkets and pharmacies.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Investors seeking consistent rental income. Few owner-occupiers due to the transient nature of the area." },
      { factor: "Rental Demand", read: "Driven by the Metro. Buildings closer to the station command 15% higher rents." },
      { factor: "Price Drivers", read: "Yield. Investors buy here for the 7-8% net return." },
      { factor: "Liquidity", read: "High. Units are easy to sell due to the established location." }
    ],

    rentalAnalysisPoints: ["Rents are up 10% YoY.", "Chiller-free buildings are in highest demand.", "2-Bedroom units are popular for sharing among colleagues."],
    salesAnalysisPoints: ["Older towers (10+ years) trade at a discount, offering higher yields but higher maintenance risks.", "Renovated units sell fastest."],
    investorTip: "Buy in a 'Chiller-Free' building near the Metro. Avoid towers with high service charges.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "GEMS DAA", km: "1 km", mins: "3 mins" },
      tourist: { name: "Palm Jumeirah", km: "4 km", mins: "8 mins" },
      metro: { name: "Internet City", km: "0.2 km", mins: "5 mins" },
      mall: { name: "Mall of Emirates", km: "3 km", mins: "5 mins" },
      business: { name: "Media City", km: "1 km", mins: "2 mins" },
      hospital: { name: "Saudi German", km: "1 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Convenience", archetype: "The ROI Hunter", motivation: "A plug-and-play rental asset with zero vacancy risk." }
  },

  // --- DUBAI: BAY SQUARE (Business Bay Sub-community) ---
  {
    id: "bay-square",
    name: "Bay Square",
    emirate: "Dubai",
    category: "Mixed-Use / Low-rise",
    
    roi: "7.2%",
    avgPrice: "AED 1.4M (1-Bed)",
    imageColor: "bg-slate-700", // Corporate/Chic
    
    masterDeveloper: "Dubai Properties",
    location: "Business Bay / Downtown Edge",
    totalArea: "Pedestrian District",
    towers: "Low-rise (G+12) Cluster",
    completion: "Fully Developed",
    privateBeach: "No (Canal nearby)",

    highlights: [
      "A unique low-rise pedestrian-only district within the high-rise Business Bay.",
      "Home to the DoubleTree by Hilton and diverse F&B outlets.",
      "Known for its loft-style apartments and corporate offices.",
      "Easy access to Al Khail Road and Downtown Dubai."
    ],

    amenities: [
      "DoubleTree by Hilton (Hotel)", "Bay Square Plaza (Dining)", "UFC Gym (Fitness)", "Choithrams (Retail)", "Dubai Canal (Leisure)", "South Ridge Park (Nearby)"
    ],

    supplyStats: { totalUnits: "Limited (13 Buildings)", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Business Bay", mins: "Bus Link (F14)", status: "Active" },
      roadAccess: ["Al Asayel St", "Al Khail Rd"],
      walkability: "Very High (Car-free zone)",
      cycling: "Canal Tracks"
    },

    aiVerdict: {
      title: "The Urban Village",
      summary: "Bay Square is a hidden gem for those who hate elevators. Its low-rise nature creates a community feel rare in Business Bay. It attracts creative professionals and offers stable rental yields."
    },

    priceTrend: { "2023": "AED 1.2M", "2024": "AED 1.3M", "2025": "AED 1.4M", "2026": "AED 1.5M" },
    demandSignals: { rentalDemand: "High (Niche)", resaleLiquidity: "Moderate", tenantProfile: "Creatives & Executives" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.5, appreciation: 6.0, liquidity: 6.5, risk: 3.0, lifestyle: 8.5 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 75k" }, 
      oneBed: { roi: "7.2%", rent: "AED 105k" }, 
      twoBed: { roi: "6.5%", rent: "AED 150k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "70%", tenantType: "Business travelers" },
    
    futureUpgrades: [{ name: "Canal Promenade Link", status: "Ongoing" }],
    description: "Bay Square consists of 13 mid-rise buildings surrounding a central plaza. It feels like a European square, with cafes and water features. The residential units are often loft-style or have large terraces, distinct from the glass boxes of typical Business Bay towers.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "End-users who want Downtown proximity without the density. Investors targeting short-term rentals." },
      { factor: "Rental Demand", read: "High from professionals working in the same cluster (Bay Square offices)." },
      { factor: "Price Drivers", read: "Unique low-rise format and scarcity of such layouts in the area." },
      { factor: "Liquidity", read: "Moderate. It is a niche product." }
    ],

    rentalAnalysisPoints: ["Rents are stable due to the captive audience of office workers.", "Loft units command a 15% premium.", "Retail on ground floor adds massive convenience value."],
    salesAnalysisPoints: ["Prices are more stable than high-rise towers.", "Service charges are reasonable for the area."],
    investorTip: "Look for units facing the inner plaza; they are quieter and rent faster.",

    connectivity: {
      airport: { name: "DXB Intl", km: "15 km", mins: "15 mins" },
      school: { name: "South View", km: "5 km", mins: "10 mins" },
      tourist: { name: "Dubai Mall", km: "1.5 km", mins: "5 mins" },
      metro: { name: "Business Bay", km: "2 km", mins: "5 mins" },
      mall: { name: "Dubai Mall", km: "1.5 km", mins: "5 mins" },
      business: { name: "Bay Square Offices", km: "0 km", mins: "0 mins" },
      hospital: { name: "Emirates Hosp", km: "1 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Lifestyle", archetype: "The Creative Professional", motivation: "Living in a walkable, human-scale community in the heart of the city." }
  },

  // --- DUBAI: BLUEWATERS ISLAND (Ultra-Luxury) ---
  {
    id: "bluewaters-island",
    name: "Bluewaters Island",
    emirate: "Dubai",
    category: "Island Luxury / Tourism",
    
    roi: "6.2%",
    avgPrice: "AED 3.8M (1-Bed)",
    imageColor: "bg-blue-400", // Sea/Luxury
    
    masterDeveloper: "Meraas (Dubai Holding)",
    location: "Off JBR Coast",
    totalArea: "Exclusive Island",
    towers: "Low-rise Luxury",
    completion: "Mature / Exclusive",
    privateBeach: "Yes (Caesars / Cove)",

    highlights: [
      "Home to Ain Dubai (The World's Largest Observation Wheel).",
      "Features the world-famous Caesars Palace and Banyan Tree hotels.",
      "Pedestrian bridge connecting directly to JBR The Beach.",
      "Ultra-modern, Scandinavian-inspired low-rise architecture."
    ],

    amenities: [
      "Ain Dubai (Landmark)", "Cove Beach (Club)", "Banyan Tree Dubai (Hospitality)", "Madame Tussauds (Attraction)", "The Wharf (Retail)", "Podium Gardens (Nature)"
    ],

    supplyStats: { totalUnits: "Limited (10 Buildings)", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "DMCC / Sobha", mins: "Via Tram/Walk", status: "Connected via GRT" },
      roadAccess: ["Direct SZR Link"],
      walkability: "Perfect (Car-free podiums)",
      cycling: "Island Tracks"
    },

    aiVerdict: {
      title: "The Trophy Asset",
      summary: "Bluewaters is a collector's item. Prices are high (AED 3,500+ psf), but so is the prestige. It commands the highest short-term rental rates in Dubai due to its exclusivity and island vibe."
    },

    priceTrend: { "2023": "AED 3.2M", "2024": "AED 3.5M", "2025": "AED 3.8M", "2026": "AED 4.2M" },
    demandSignals: { rentalDemand: "Very High (Holiday)", resaleLiquidity: "High (Luxury)", tenantProfile: "HNWIs & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.5, appreciation: 8.5, liquidity: 7.5, risk: 2.5, lifestyle: 10.0 },
    overallScore: 9.0,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.2%", rent: "AED 220k" }, 
      twoBed: { roi: "5.8%", rent: "AED 350k" } 
    },

    shortTermScore: 9.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,500", occupancy: "85%", tenantType: "Luxury Vacationers" },
    
    futureUpgrades: [{ name: "Ain Dubai Relaunch", status: "Upcoming" }],
    description: "Bluewaters Island is an engineering marvel. It is an exclusive lifestyle destination that blends urban buzz with island calm. The residences are finished to the highest standards in Dubai, featuring floor-to-ceiling glass, wood flooring, and smart home systems.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Crypto wealth, Russian/European HNWIs, and holiday home investors." },
      { factor: "Rental Demand", read: "Seasonal. Winter rents are astronomical. Summer rents are steady." },
      { factor: "Price Drivers", read: "Exclusivity. There is no more supply coming on the island." },
      { factor: "Liquidity", read: "High demand for sea-facing units." }
    ],

    rentalAnalysisPoints: ["Short-term rentals can yield 8-9% net if managed well.", "Long-term rents for 3-beds hit AED 500k+.", "Tenants pay for the privacy and the bridge to JBR."],
    salesAnalysisPoints: ["Prices have appreciated 40% since handover.", "Resale units often sell fully furnished."],
    investorTip: "The best ROI is in short-term rentals. Furnish it to 5-star standards and target the winter crowd.",

    connectivity: {
      airport: { name: "DXB Intl", km: "30 km", mins: "25 mins" },
      school: { name: "Emirates Intl", km: "5 km", mins: "10 mins" },
      tourist: { name: "JBR Beach", km: "0.5 km", mins: "5 mins Walk" },
      metro: { name: "Sobha Realty", km: "2 km", mins: "10 mins" },
      mall: { name: "Marina Mall", km: "2 km", mins: "8 mins" },
      business: { name: "Media City", km: "4 km", mins: "10 mins" },
      hospital: { name: "Emirates Hosp", km: "5 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Exclusivity", archetype: "The Elite", motivation: "Living on a private island with the best views in the city." }
  },

  // --- DUBAI: BUR DUBAI (Historic Heart) ---
  {
    id: "bur-dubai",
    name: "Bur Dubai",
    emirate: "Dubai",
    category: "Heritage / Affordable",
    
    roi: "N/A (Leasehold)",
    avgPrice: "N/A",
    imageColor: "bg-stone-700", // Historic
    
    masterDeveloper: "Private Landlords",
    location: "Dubai Creek (South Side)",
    totalArea: "Massive District",
    towers: "Mid-rise (Mankhool/Spinneys)",
    completion: "Historic",
    privateBeach: "No",

    highlights: [
      "The historic soul of the city, home to the Ruler's Court and Al Seef.",
      "A melting pot of cultures with affordable dining and shopping.",
      "Home to the diplomatic enclave (Consulates area).",
      "Excellent Metro connectivity (Red & Green lines)."
    ],

    amenities: [
      "BurJuman Mall (Shopping)", "Al Seef (Leisure)", "Dubai Frame (Tourist)", "Zabeel Park (Nature)", "Meena Bazaar (Shopping)", "Al Fahidi District (Culture)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "100%", underConstruction: "2%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "BurJuman (Hub)", mins: "Direct", status: "Active" },
      roadAccess: ["Khalid Bin Al Waleed", "Sheikh Khalifa Bin Zayed"],
      walkability: "High (Grid)",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Cultural Anchor",
      summary: "Bur Dubai is the 'real' Dubai for many. It is a rental market dominated by South Asian families and long-term residents. It offers the best connectivity-to-price ratio in the city."
    },

    priceTrend: { "2023": "AED 60k (Rent)", "2024": "AED 70k (Rent)", "2025": "AED 78k (Rent)", "2026": "AED 85k (Rent)" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "N/A", tenantProfile: "Families & Traders" },
    ownership: { type: "Leasehold (99%) / Rare Freehold (Al Jaddaf edge)", eligibleFor: ["Locals"], minDownPayment: "N/A" },
    scores: { cashFlow: 8.0, appreciation: 3.0, liquidity: 6.0, risk: 2.0, lifestyle: 7.5 },
    overallScore: 7.6,

    unitEconomics: { studio: { roi: "N/A", rent: "AED 40k" }, oneBed: { roi: "N/A", rent: "AED 60k" }, twoBed: { roi: "N/A", rent: "AED 85k" } },
    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "70%", tenantType: "Budget Tourists" },
    
    futureUpgrades: [{ name: "Al Seef Expansion", status: "Active" }],
    description: "Bur Dubai spans from Al Shindagha to Al Kifaf. It includes the busy residential hubs of Mankhool and Spinneys/Karama. It is characterized by older, spacious buildings and a walkable street life that newer districts lack.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A" },
      { factor: "Rental Demand", read: "High due to BurJuman Metro interchange." },
      { factor: "Price Drivers", read: "Proximity to Zabeel Park and Metro." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: ["Mankhool commands the highest rents (AED 90k for 2-beds).", "Older buildings in Raffa offer better value.", "Chiller fees are often included in older lease contracts."],
    salesAnalysisPoints: ["N/A"],
    investorTip: "Not for buying. For renting, Mankhool is the premium choice for families.",

    connectivity: {
      airport: { name: "DXB Intl", km: "8 km", mins: "12 mins" },
      school: { name: "St Marys", km: "2 km", mins: "5 mins" },
      tourist: { name: "Dubai Frame", km: "1 km", mins: "3 mins" },
      metro: { name: "BurJuman", km: "0.2 km", mins: "2 mins" },
      mall: { name: "BurJuman", km: "0.1 km", mins: "1 min" },
      business: { name: "Trade Centre", km: "3 km", mins: "5 mins" },
      hospital: { name: "Aster Mankhool", km: "0.5 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Centrality", archetype: "The City Dweller", motivation: "Being in the exact geographic center of the city." }
  },

  // --- DUBAI: BUSINESS BAY (The Corporate Capital) ---
  {
    id: "business-bay",
    name: "Business Bay",
    emirate: "Dubai",
    category: "Corporate / Luxury Canal",
    
    roi: "6.8%",
    avgPrice: "AED 1.9M (1-Bed)",
    imageColor: "bg-blue-800", // Corporate
    
    masterDeveloper: "Dubai Properties",
    location: "Next to Downtown Dubai",
    totalArea: "High-rise Metropolis",
    towers: "High-rise (Volante, Dorchester, Binghatti)",
    completion: "Developed / New Supertowers",
    privateBeach: "No (Canal Front)",

    highlights: [
      "The central business district of Dubai, rivaling Manhattan.",
      "Home to the Dubai Water Canal and Marasi Promenade.",
      "Features some of the world's most luxurious branded residences (Bugatti, Pagani).",
      "Excellent Metro connectivity and proximity to Burj Khalifa."
    ],

    amenities: [
      "Dubai Water Canal (Leisure)", "Bay Avenue (Retail)", "The Opus by Zaha Hadid (Landmark)", "JW Marriott Marquis (Hotel)", "Executive Towers (Community)", "Bay Square (Dining)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "75%", underConstruction: "25%", nextDelivery: "Q4 2026 (Peninsula)" },
    
    transport: {
      metro: { name: "Business Bay", mins: "Active", status: "Red Line" },
      roadAccess: ["Sheikh Zayed Rd", "Al Khail Rd"],
      walkability: "Moderate (Improving along Canal)",
      cycling: "Canal Tracks"
    },

    aiVerdict: {
      title: "The Yield & Growth Hybrid",
      summary: "Business Bay is the most liquid market in Dubai. It offers high rental yields for standard units (Executive Towers) and massive capital appreciation for ultra-luxury canal-front projects (Dorchester/Peninsula)."
    },

    priceTrend: { "2023": "AED 1.4M", "2024": "AED 1.65M", "2025": "AED 1.9M", "2026": "AED 2.2M" },
    demandSignals: { rentalDemand: "Extremely High", resaleLiquidity: "Very High", tenantProfile: "Young Professionals & Corps" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.5, appreciation: 8.8, liquidity: 9.5, risk: 3.5, lifestyle: 9.0 },
    overallScore: 8.9,

    unitEconomics: { 
      studio: { roi: "7.8%", rent: "AED 85k" }, 
      oneBed: { roi: "7.0%", rent: "AED 115k" }, 
      twoBed: { roi: "6.5%", rent: "AED 160k" } 
    },

    shortTermScore: 8.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 650", occupancy: "85%", tenantType: "Business/Tourist" },
    
    futureUpgrades: [{ name: "Peninsula District", status: "Handing Over" }, { name: "Canal Flying Taxi", status: "Proposed" }],
    description: "Business Bay is Dubai's vision of a cosmopolitan metropolis. It is a forest of skyscrapers along the extension of the Creek. It has evolved from a pure office district into a vibrant residential hub with 5-star hotels, yacht berths, and fine dining.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Diverse. Corporate investors buy offices; HNWIs buy canal penthouses." },
      { factor: "Rental Demand", read: "Highest in Dubai alongside Marina. It is the preferred address for white-collar expats." },
      { factor: "Price Drivers", read: "Views of Burj Khalifa and the Canal command a 25-40% premium." },
      { factor: "Liquidity", read: "Exceptional. Properties here are as liquid as cash." }
    ],

    rentalAnalysisPoints: ["Executive Towers offer the best value/space ratio for families.", "Newer builds (sls, Paramount) attract younger tenants willing to pay for amenities.", "Holiday homes outperform long-term leases by 15%."],
    salesAnalysisPoints: ["Off-plan ultra-luxury segment (AED 4,000/sqft) is booming.", "Standard resale units trade at AED 1,800/sqft, offering value gaps."],
    investorTip: "Buy 'Peninsula' or 'Jumeirah Living' for long-term appreciation. Buy 'Executive Towers' for immediate high rental yield.",

    connectivity: {
      airport: { name: "DXB Intl", km: "15 km", mins: "15 mins" },
      school: { name: "Hartland Intl", km: "5 km", mins: "10 mins" },
      tourist: { name: "Burj Khalifa", km: "2 km", mins: "5 mins" },
      metro: { name: "Business Bay", km: "0.5 km", mins: "2 mins" },
      mall: { name: "Dubai Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Main Hub", km: "0 km", mins: "0 mins" },
      hospital: { name: "Emirates Hosp", km: "3 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Ambition", archetype: "The Corporate Climber", motivation: "Living in the skyline, next to the office and the best nightlife." }
  },
  // --- DUBAI: CHERRYWOODS (Family Townhouses) ---
  {
    id: "cherrywoods",
    name: "Cherrywoods",
    emirate: "Dubai",
    category: "Gated Community / Townhouses",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "5.4%",
    avgPrice: "AED 3.3M",
    imageColor: "bg-rose-900", // Warm/Family
    
    masterDeveloper: "Meraas",
    location: "Al Qudra Road (Near Arabian Ranches)",
    totalArea: "Exclusive Gated Community",
    towers: "None (Townhouses only)",
    completion: "Ready / Mature",
    privateBeach: "No",

    highlights: [
      "A boutique townhouse community by Meraas, known for premium finishing.",
      "Located on Al Qudra Road, ensuring easy access to Town Square and Ranches.",
      "Famous for its central park and cherry blossom-themed landscaping.",
      "Offers larger-than-average 3 and 4 bedroom layouts compared to competitors."
    ],

    amenities: [
      "Central Park (Leisure)", "Squash & Tennis Courts (Sport)", "Community Pools (Leisure)", "Cherrywoods Souk (Retail)", "Cycling Track (Fitness)", "Lake Feature (Nature)"
    ],

    supplyStats: { totalUnits: "Limited Supply", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "No Metro", mins: "--", status: "Car Dependent" },
      roadAccess: ["Al Qudra Rd", "Emirates Rd (E611)"],
      walkability: "High (Internal)",
      cycling: "Connected to Al Qudra Track"
    },

    aiVerdict: {
      title: "The Boutique Alternative",
      summary: "Cherrywoods is the 'premium' alternative to Town Square. It offers Meraas quality (higher specs) at a price point slightly above the mass market. Excellent for end-users seeking a quiet, uncrowded enclave."
    },

    priceTrend: { "2023": "AED 2.5M", "2024": "AED 2.9M", "2025": "AED 3.3M", "2026 (Proj)": "AED 3.6M" },
    demandSignals: { rentalDemand: "High (Families)", resaleLiquidity: "Moderate", tenantProfile: "Western & Arab Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 5.5, appreciation: 7.0, liquidity: 6.5, risk: 2.5, lifestyle: 8.5 },
    overallScore: 7.8,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } }, // Townhouses only
    shortTermScore: 3.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "50%", tenantType: "Long-stay Families" },
    
    futureUpgrades: [{ name: "New Community Retail", status: "Opening Soon" }],
    description: "Cherrywoods is a master-planned community by Meraas, featuring spacious 3 and 4-bedroom townhouses. It stands out for its contemporary architecture and high-end interiors, which are a step up from typical off-plan townhouses. The community vibe is active and family-centric.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "End-users upgrading from apartments in Motor City/Sports City." },
      { factor: "Rental Demand", read: "Strong demand for 3-beds due to the lack of supply in neighboring communities." },
      { factor: "Price Drivers", read: "Quality of finish and Meraas brand reputation." },
      { factor: "Liquidity", read: "Lower turnover than Ranches, as families tend to stay put." }
    ],

    rentalAnalysisPoints: ["3-Bed Townhouses rent for AED 175k - 190k.", "4-Bed Townhouses rent for AED 220k+.", "Properties backing the park command a 10% premium."],
    salesAnalysisPoints: ["Prices have risen 30% since handover.", "3-Bed units average AED 3.1M - 3.4M."],
    investorTip: "Ideally an end-user purchase. For investors, the yield is modest (5.4%), but capital preservation is high.",

    connectivity: {
      airport: { name: "DXB Intl", km: "30 km", mins: "30 mins" },
      school: { name: "Fairgreen Intl", km: "5 km", mins: "8 mins" },
      tourist: { name: "Global Village", km: "8 km", mins: "10 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Town Sq Centre", km: "3 km", mins: "5 mins" },
      business: { name: "Studio City", km: "5 km", mins: "8 mins" },
      hospital: { name: "Aster", km: "5 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Quality & Space", archetype: "The Quality Seeker", motivation: "Wants a townhouse that doesn't feel 'cheap'. Values modern aesthetics." }
  },

  // --- DUBAI: CITY WALK (Urban Luxury) ---
  {
    id: "city-walk",
    name: "City Walk",
    emirate: "Dubai",
    category: "Ultra-Urban / Boutique",
    
    roi: "4.8%",
    avgPrice: "AED 4.2M (Apt)",
    imageColor: "bg-slate-800", // Chic/Urban
    
    masterDeveloper: "Meraas",
    location: "Al Wasl Road / Jumeirah",
    totalArea: "Mixed-Use Low Rise",
    towers: "G+6 Luxury Blocks",
    completion: "Developed / New Phases",
    privateBeach: "No (La Mer nearby)",

    highlights: [
      "Dubai's most walkable, European-style lifestyle district.",
      "Low-rise luxury apartments with floor-to-ceiling glass and sleek finishes.",
      "Home to Central Park at City Walk, a green oasis in the city center.",
      "Immediate proximity to Coca-Cola Arena and Downtown Dubai."
    ],

    amenities: [
      "Central Park (Nature)", "Coca-Cola Arena (Events)", "Canadian University (Education)", "Valiant Clinic (Healthcare)", "Roxy Cinemas (Leisure)", "High-End Retail (Shopping)"
    ],

    supplyStats: { totalUnits: "Exclusive", handedOver: "85%", underConstruction: "15% (Central Park)", nextDelivery: "Q4 2025" },
    
    transport: {
      metro: { name: "Burj Khalifa / Dubai Mall", mins: "5 mins Drive", status: "Active" },
      roadAccess: ["Sheikh Zayed Rd", "Al Wasl Rd"],
      walkability: "Perfect (10/10)",
      cycling: "Internal Tracks"
    },

    aiVerdict: {
      title: "The Urban Trophy",
      summary: "City Walk is for the investor who values prestige and aesthetics over raw yield. It attracts the highest caliber of tenant (CEOs, Designers). Capital appreciation is driven by the scarcity of freehold low-rise land in Jumeirah."
    },

    priceTrend: { "2023": "AED 3.5M", "2024": "AED 3.9M", "2025": "AED 4.2M", "2026": "AED 4.6M" },
    demandSignals: { rentalDemand: "High (Niche)", resaleLiquidity: "High", tenantProfile: "Western Expats & Creatives" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 5.0, appreciation: 8.8, liquidity: 7.5, risk: 3.0, lifestyle: 10.0 },
    overallScore: 8.6,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "5.2%", rent: "AED 170k" }, 
      twoBed: { roi: "4.8%", rent: "AED 250k" } 
    },
    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,300", occupancy: "82%", tenantType: "Luxury Travelers" },
    
    futureUpgrades: [{ name: "Central Park Completion", status: "Active" }],
    description: "City Walk creates a lifestyle unseen elsewhere in Dubai: open-air boulevards, street art, and luxury low-rise living. It avoids the congestion of Downtown while offering the same connectivity. The new 'Central Park' phase has added a massive green lung, further boosting residential appeal.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Sophisticated investors and holiday home operators." },
      { factor: "Rental Demand", read: "Tenants are willing to pay 30% above market rates for the City Walk address." },
      { factor: "Price Drivers", read: "Walkability and design. It is the only freehold low-rise zone in Jumeirah." },
      { factor: "Liquidity", read: "High. There is always a buyer for a City Walk unit." }
    ],

    rentalAnalysisPoints: ["1-Bedroom rents range from AED 160k to 190k.", "Large 3-bed apartments rent for AED 350k+.", "Holiday homes here outperform 5-star hotels."],
    salesAnalysisPoints: ["Average price per sq.ft is AED 2,200+.", "Central Park units are trading at a premium due to park views."],
    investorTip: "Focus on the 'Central Park' phase. Green views in the city center are a recession-proof asset.",

    connectivity: {
      airport: { name: "DXB Intl", km: "12 km", mins: "15 mins" },
      school: { name: "Jumeirah College", km: "3 km", mins: "5 mins" },
      tourist: { name: "Burj Khalifa", km: "2 km", mins: "5 mins" },
      metro: { name: "Burj Khalifa", km: "2 km", mins: "5 mins" },
      mall: { name: "Dubai Mall", km: "2 km", mins: "5 mins" },
      business: { name: "DIFC", km: "4 km", mins: "8 mins" },
      hospital: { name: "Valiant", km: "0 km", mins: "1 min" }
    },
    buyerPsychology: { trigger: "Lifestyle", archetype: "The Esthete", motivation: "Living in a place that feels like London or Beverly Hills." }
  },

  // --- DUBAI: CREEK BEACH (Creek Harbour) ---
  {
    id: "creek-beach",
    name: "Creek Beach",
    emirate: "Dubai",
    category: "Waterfront / Resort Living",
    
    roi: "6.5%",
    avgPrice: "AED 2.1M",
    imageColor: "bg-cyan-500", // Beach/Blue
    
    masterDeveloper: "Emaar",
    location: "Dubai Creek Harbour",
    totalArea: "Waterfront District",
    towers: "Low-to-Mid Rise (G+8 to G+15)",
    completion: "Handing Over / Developing",
    privateBeach: "Yes (Man-made Creek Beach)",

    highlights: [
      "A unique 'beach-in-the-city' concept with 700m of man-made white sands.",
      "Low-rise village feel compared to the skyscrapers of Creek Island.",
      "Directly next to the Vida Hotel and Address Grand.",
      "Pedestrian-friendly district with sunset views of the Creek."
    ],

    amenities: [
      "Creek Beach (Leisure)", "Vida Creek Beach (Hotel)", "Central Plaza (Dining)", "Metro Station (Future)", "Viewing Point (Tourism)", "Community Pools (Leisure)"
    ],

    supplyStats: { totalUnits: "High Volume", handedOver: "40%", underConstruction: "60%", nextDelivery: "Q3 2025 (Orchid/Lotus)" },
    
    transport: {
      metro: { name: "Creek Station (Green)", mins: "Nearby", status: "Active (Future Blue Line)" },
      roadAccess: ["Ras Al Khor Rd"],
      walkability: "High (Beach Promenade)",
      cycling: "Harbour Loop"
    },

    aiVerdict: {
      title: "The Resort Investor's Pick",
      summary: "Creek Beach offers a holiday lifestyle. It is perfect for short-term rentals (Airbnb) given the beach asset. Long-term capital growth will be unlocked when the bridge to Creek Island and the Metro extension are fully active."
    },

    priceTrend: { "2023": "AED 1.6M", "2024": "AED 1.85M", "2025": "AED 2.1M", "2026": "AED 2.3M" },
    demandSignals: { rentalDemand: "High (Holiday)", resaleLiquidity: "Moderate", tenantProfile: "Young Couples & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.0, appreciation: 8.5, liquidity: 7.0, risk: 3.5, lifestyle: 9.0 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.8%", rent: "AED 105k" }, 
      twoBed: { roi: "6.2%", rent: "AED 155k" } 
    },
    shortTermScore: 9.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 750", occupancy: "80%", tenantType: "Beach Lovers" },
    
    futureUpgrades: [{ name: "Creek Tower (Redesign)", status: "Pending" }, { name: "Blue Line Metro", status: "Approved" }],
    description: "Creek Beach is a sub-community within Dubai Creek Harbour designed to mimic a Mediterranean resort. It features low-rise buildings (Breeze, Sunset, Bayshore) clustered around a private swimmable beach. It is distinct from the high-rise 'Island District'.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Holiday home investors and young families wanting waterfront living." },
      { factor: "Rental Demand", read: "High seasonal demand. Summer months see slightly lower occupancy than winter." },
      { factor: "Price Drivers", read: "The unique beach amenity is the USP. No other central district has this." },
      { factor: "Liquidity", read: "Moderate. Resale is picking up as the beach officially opens." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 100k-115k.", "2-Beds with beach views command AED 160k+.", "Short-term yields can hit 9% gross."],
    salesAnalysisPoints: ["Prices hover around AED 2,000-2,300 per sq.ft.", "Significant premium for units facing the beach vs the road."],
    investorTip: "Prioritize 'Sunset' or 'Breeze' buildings as they are closest to the water.",

    connectivity: {
      airport: { name: "DXB Intl", km: "10 km", mins: "12 mins" },
      school: { name: "Swiss Scientific", km: "5 km", mins: "10 mins" },
      tourist: { name: "Creek Harbour", km: "1 km", mins: "3 mins" },
      metro: { name: "Creek Station", km: "3 km", mins: "5 mins" },
      mall: { name: "Dubai Festival City", km: "5 km", mins: "8 mins" },
      business: { name: "Festival City", km: "5 km", mins: "8 mins" },
      hospital: { name: "Mediclinic", km: "6 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Vacation Vibes", archetype: "The Lifestyle Buyer", motivation: "Living in a hotel-style resort every day." }
  },

  // --- DUBAI: CREEK ISLAND (The Skyline District) ---
  {
    id: "creek-island",
    name: "Creek Island (Dubai Creek Harbour)",
    emirate: "Dubai",
    category: "Skyline Views / Luxury",
    
    roi: "6.0%",
    avgPrice: "AED 2.6M",
    imageColor: "bg-blue-800", // Skyline/Water
    
    masterDeveloper: "Emaar",
    location: "Dubai Creek Harbour",
    totalArea: "High Density Island",
    towers: "High-rise Luxury (Address, Palace)",
    completion: "Developed",
    privateBeach: "No (Promenade)",

    highlights: [
      "The premium 'island' core of Dubai Creek Harbour.",
      "Features the best skyline views in Dubai (Burj Khalifa + Creek).",
      "Home to branded residences: Address, Palace, and Vida.",
      "Walkable marina promenade with yacht club and fine dining."
    ],

    amenities: [
      "Creek Marina (Leisure)", "Creek Park (Nature)", "Address Grand (Hotel)", "Spinneys/Geant (Retail)", "Central Park (Leisure)", "Viewing Deck (Tourism)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "90%", underConstruction: "10%", nextDelivery: "The Grand / Address" },
    
    transport: {
      metro: { name: "Creek Station", mins: "Bus Link", status: "Active" },
      roadAccess: ["Ras Al Khor Rd"],
      walkability: "Very High (Promenade)",
      cycling: "Track Loop"
    },

    aiVerdict: {
      title: "The New Downtown",
      summary: "Creek Island is the 'Manhattan' of the development. It attracts high-net-worth tenants who want the glamour of Downtown without the traffic. It holds value incredibly well due to the iconic view corridors."
    },

    priceTrend: { "2023": "AED 2.2M", "2024": "AED 2.4M", "2025": "AED 2.6M", "2026": "AED 2.9M" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Executives & Expats" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.0, appreciation: 9.0, liquidity: 8.5, risk: 2.5, lifestyle: 9.5 },
    overallScore: 8.9,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.2%", rent: "AED 130k" }, 
      twoBed: { roi: "5.8%", rent: "AED 190k" } 
    },
    shortTermScore: 9.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "85%", tenantType: "City Tourists" },
    
    futureUpgrades: [{ name: "Pedestrian Bridge to Creek Beach", status: "Planned" }],
    description: "Creek Island is the dense, high-rise cluster featuring the Address Harbour Point, The Grand, and Creekside 18. It offers a cosmopolitan waterfront lifestyle with a marina, yacht club, and a central park. It is widely considered the 'finished' product of the master plan.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Luxury investors and end-users migrating from Downtown." },
      { factor: "Rental Demand", read: "High corporate demand. It is quieter than Marina but equally premium." },
      { factor: "Price Drivers", read: "The View. Units with full Burj Khalifa views trade at a 30% premium." },
      { factor: "Liquidity", read: "High. It is a blue-chip asset class." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 120k-145k.", "3-Beds are scarce and rent for AED 280k+.", "Address branded units achieve top-tier rents."],
    salesAnalysisPoints: ["Average price is AED 2,450/sq.ft.", "Premium towers (Address) trade at AED 3,500/sq.ft."],
    investorTip: "Buy a high floor unit facing the sunset (Downtown view). It is recession-proof.",

    connectivity: {
      airport: { name: "DXB Intl", km: "10 km", mins: "12 mins" },
      school: { name: "Swiss Scientific", km: "5 km", mins: "10 mins" },
      tourist: { name: "Creek Marina", km: "0 km", mins: "0 mins" },
      metro: { name: "Creek Station", km: "4 km", mins: "8 mins" },
      mall: { name: "Dubai Mall", km: "8 km", mins: "12 mins" },
      business: { name: "DIFC", km: "8 km", mins: "12 mins" },
      hospital: { name: "Mediclinic", km: "6 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Views", archetype: "The Visionary", motivation: "Waking up to the most photographed skyline in the world." }
  },

  // --- DUBAI: CREEK RISE (Sub-Community) ---
  {
    id: "creek-rise",
    name: "Creek Rise",
    emirate: "Dubai",
    category: "Luxury Towers / Family",
    
    roi: "6.2%",
    avgPrice: "AED 2.3M",
    imageColor: "bg-blue-600", // Tower/Sky
    
    masterDeveloper: "Emaar",
    location: "Creek Island (North Tip)",
    totalArea: "Twin Tower Complex",
    towers: "High-rise",
    completion: "Ready",
    privateBeach: "No (Park Access)",

    highlights: [
      "A premium twin-tower development by Emaar located on the northern tip of Creek Island.",
      "Offers direct access to the island's circular boulevard and central park.",
      "Known for spacious layouts and panoramic views of the Creek Tower plot.",
      "Quiet residential feel compared to the busy Marina promenade."
    ],

    amenities: [
      "Podium Pool (Leisure)", "Gym & Health Club (Fitness)", "Central Park (Nature)", "Kids Play Area (Family)", "Retail Promenade (Shopping)", "Tennis Courts (Sport)"
    ],

    supplyStats: { totalUnits: "2 Towers", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Creek Station", mins: "Bus Link", status: "Active" },
      roadAccess: ["Ras Al Khor Rd"],
      walkability: "High",
      cycling: "Island Loop"
    },

    aiVerdict: {
      title: "The Family High-Rise",
      summary: "Creek Rise offers slightly larger floor plans than other Island towers, making it popular with families. It sits in a quieter pocket, offering a balance of luxury and calm."
    },

    priceTrend: { "2023": "AED 2.0M", "2024": "AED 2.2M", "2025": "AED 2.3M", "2026": "AED 2.5M" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Moderate", tenantProfile: "Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.2, appreciation: 8.0, liquidity: 7.5, risk: 3.0, lifestyle: 8.8 },
    overallScore: 8.3,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.5%", rent: "AED 125k" }, 
      twoBed: { roi: "6.0%", rent: "AED 180k" } 
    },
    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 800", occupancy: "75%", tenantType: "Families" },
    
    futureUpgrades: [{ name: "Creek Tower Connectivity", status: "Planned" }],
    description: "Creek Rise comprises two beautifully designed residential towers. It is positioned to offer views of the park and the future Creek Tower. The interiors are modern with a focus on neutral palettes and wood finishes.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "End-user families." },
      { factor: "Rental Demand", read: "Strong for 2 and 3 bedroom units." },
      { factor: "Price Drivers", read: "Layout size. These are some of the larger units on the island." },
      { factor: "Liquidity", read: "Good." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 120k-130k.", "2-Beds are spacious and rent for AED 170k-190k.", "Tenants value the direct park access."],
    salesAnalysisPoints: ["Trades at a slight discount to Address/Palace units.", "Solid appreciation history."],
    investorTip: "A great pick for stable long-term rental income from family tenants.",

    connectivity: {
      airport: { name: "DXB Intl", km: "10 km", mins: "12 mins" },
      school: { name: "Swiss Scientific", km: "5 km", mins: "10 mins" },
      tourist: { name: "Creek Marina", km: "0.5 km", mins: "5 mins" },
      metro: { name: "Creek Station", km: "4 km", mins: "8 mins" },
      mall: { name: "Dubai Festival City", km: "6 km", mins: "10 mins" },
      business: { name: "DIFC", km: "8 km", mins: "12 mins" },
      hospital: { name: "Mediclinic", km: "6 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Space & Calm", archetype: "The Modern Parent", motivation: "Apartment living that doesn't feel cramped, with a park downstairs." }
  },

  // --- DUBAI: CULTURE VILLAGE (Al Jaddaf Waterfront) ---
  {
    id: "culture-village",
    name: "Culture Village",
    emirate: "Dubai",
    category: "Heritage / Luxury Waterfront",
    
    roi: "6.5%",
    avgPrice: "AED 1.8M",
    imageColor: "bg-indigo-700", // Artistic/Royal
    
    masterDeveloper: "Dubai Properties",
    location: "Al Jaddaf / Creek",
    totalArea: "Waterfront District",
    towers: "Mid-rise Luxury (Palazzo Versace/D1)",
    completion: "Developed / Infill",
    privateBeach: "No (Creek Promenade)",

    highlights: [
      "Home to the iconic Palazzo Versace Hotel and D1 Tower.",
      "Designed with traditional wind-tower architecture and cobblestone streets.",
      "Features the Jameel Arts Centre and a sculpture park.",
      "Direct Metro Access (Al Jadaf Station)."
    ],

    amenities: [
      "Palazzo Versace (Dining)", "D1 Tower (Residence)", "Jameel Arts Centre (Culture)", "Dubai Wharf (Retail)", "Marina Promenade (Leisure)", "Sculpture Park (Nature)"
    ],

    supplyStats: { totalUnits: "Niche Supply", handedOver: "85%", underConstruction: "15%", nextDelivery: "Kempinski Residences" },
    
    transport: {
      metro: { name: "Al Jadaf", mins: "Walking", status: "Active (Green Line)" },
      roadAccess: ["Al Khail Rd", "Oud Metha Rd"],
      walkability: "High (Promenade)",
      cycling: "Waterfront Path"
    },

    aiVerdict: {
      title: "The Artsy Enclave",
      summary: "Culture Village is a hidden luxury pocket. It offers freehold waterfront living at a 30% discount to Business Bay. It appeals to buyers who value aesthetics, quiet, and cultural proximity."
    },

    priceTrend: { "2023": "AED 1.5M", "2024": "AED 1.65M", "2025": "AED 1.8M", "2026": "AED 2.0M" },
    demandSignals: { rentalDemand: "Moderate-High", resaleLiquidity: "Moderate", tenantProfile: "Artists & Execs" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.8, appreciation: 7.5, liquidity: 6.0, risk: 4.0, lifestyle: 8.5 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 70k" }, 
      oneBed: { roi: "6.5%", rent: "AED 105k" }, 
      twoBed: { roi: "6.0%", rent: "AED 150k" } 
    },
    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "70%", tenantType: "Cultural Tourists" },
    
    futureUpgrades: [{ name: "Water Taxi Station", status: "Active" }],
    description: "Culture Village is located along the shoreline of Dubai Creek. It blends old-world charm with modern luxury. The district is anchored by the Palazzo Versace and D1 Tower, offering a sophisticated, quiet lifestyle just minutes from the airport and Downtown.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Art lovers and investors seeking value near Downtown." },
      { factor: "Rental Demand", read: "Driven by proximity to Festival City and DIFC." },
      { factor: "Price Drivers", read: "Creek views and brand associations (Versace)." },
      { factor: "Liquidity", read: "Moderate. Niche market." }
    ],

    rentalAnalysisPoints: ["1-Beds in Dubai Wharf rent for AED 90k-100k.", "D1 Tower units command a premium (AED 130k+ for 1-bed).", "Quiet, traffic-free environment attracts long-term tenants."],
    salesAnalysisPoints: ["Prices are stable and offer good entry points for luxury.", "Manazel Al Khor and Dubai Wharf offer lower entry prices."],
    investorTip: "Buy in D1 Tower for the prestige and views, or Dubai Wharf for the yield.",

    connectivity: {
      airport: { name: "DXB Intl", km: "6 km", mins: "10 mins" },
      school: { name: "Swiss Scientific", km: "3 km", mins: "5 mins" },
      tourist: { name: "Jameel Arts", km: "0.2 km", mins: "2 mins" },
      metro: { name: "Al Jadaf", km: "0.5 km", mins: "5 mins" },
      mall: { name: "Festival City", km: "2 km", mins: "5 mins" },
      business: { name: "Healthcare City", km: "2 km", mins: "5 mins" },
      hospital: { name: "Latifa Hosp", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Culture", archetype: "The Sophisticate", motivation: "Living in a place with soul and art, away from the concrete jungle." }
  },

  // --- DUBAI: DAMAC HILLS (1) ---
  {
    id: "damac-hills",
    name: "DAMAC Hills",
    emirate: "Dubai",
    category: "Golf / Luxury Community",
    
    roi: "6.8%",
    avgPrice: "AED 3.8M (Villa)",
    imageColor: "bg-green-700", // Golf/Green
    
    masterDeveloper: "DAMAC Properties",
    location: "Al Qudra Road / Hessa St",
    totalArea: "42 Million sq. ft.",
    towers: "Golf-view Apartments & Villas",
    completion: "Mature / Established",
    privateBeach: "No (Malibu Bay Wave Pool)",

    highlights: [
      "Built around the Trump International Golf Club Dubai.",
      "Features 'Malibu Bay', a massive wave pool and man-made beach area.",
      "Offers a wide mix of properties: from studios to Trump Estates mansions.",
      "Highly established with mature greenery and full amenities."
    ],

    amenities: [
      "Trump Golf Club (Sport)", "Malibu Bay (Leisure)", "Spinneys/Viva (Retail)", "Jebel Ali School (Education)", "Skate Park (Leisure)", "Stables (Nature)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "95%", underConstruction: "5%", nextDelivery: "Gems Estates" },
    
    transport: {
      metro: { name: "No Metro", mins: "--", status: "Bus Link (J03)" },
      roadAccess: ["Hessa St", "Emirates Rd"],
      walkability: "High (Parks)",
      cycling: "Community Tracks"
    },

    aiVerdict: {
      title: "The Lifestyle Heavyweight",
      summary: "DAMAC Hills is a complete ecosystem. It competes directly with Arabian Ranches but offers more diverse inventory (apartments + villas). It is a top choice for families wanting resort-style amenities."
    },

    priceTrend: { "2023": "AED 3.2M", "2024": "AED 3.5M", "2025": "AED 3.8M", "2026": "AED 4.1M" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "Families & Golfers" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.8, appreciation: 7.0, liquidity: 8.5, risk: 3.5, lifestyle: 9.2 },
    overallScore: 8.5,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 50k" }, 
      oneBed: { roi: "7.0%", rent: "AED 75k" }, 
      twoBed: { roi: "6.5%", rent: "AED 120k" } 
    },
    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 800", occupancy: "65%", tenantType: "Families/Golfers" },
    
    futureUpgrades: [{ name: "Mall Expansion", status: "Planned" }],
    description: "DAMAC Hills (formerly Akoya) is a prestigious golf community. It creates a Beverly Hills vibe with its gated clusters and Trump-branded clubhouse. It is one of the few places in Dubai offering both affordable golf-view apartments and ultra-luxury mansions.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Diverse. Investors buy golf apartments; End-users buy villas." },
      { factor: "Rental Demand", read: "Strong. Families love the school and Malibu Bay." },
      { factor: "Price Drivers", read: "Golf course frontage and proximity to the clubhouse." },
      { factor: "Liquidity", read: "High volume market." }
    ],

    rentalAnalysisPoints: ["3-Bed Townhouses rent for AED 200k-230k.", "Golf apartments offer 7%+ net yields.", "High occupancy due to Jebel Ali School inside the community."],
    salesAnalysisPoints: ["Prices have stabilized, offering steady growth.", "Trump Estates command a 40% price premium."],
    investorTip: "Golf Horizon/Vista apartments offer the best yield-to-price ratio.",

    connectivity: {
      airport: { name: "DXB Intl", km: "30 km", mins: "30 mins" },
      school: { name: "Jebel Ali School", km: "0.5 km", mins: "2 mins" },
      tourist: { name: "Global Village", km: "10 km", mins: "12 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Ventura Mall", km: "1 km", mins: "3 mins" },
      business: { name: "Studio City", km: "3 km", mins: "5 mins" },
      hospital: { name: "Mediclinic", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Amenities", archetype: "The Resort Family", motivation: "Living in a community with a beach pool and a golf course." }
  },

  // --- DUBAI: DAMAC HILLS 2 (Affordable Green Living) ---
  {
    id: "damac-hills-2",
    name: "DAMAC Hills 2",
    emirate: "Dubai",
    category: "Affordable / Eco-Community",
    
    roi: "7.0%",
    avgPrice: "AED 1.4M (Townhouse)",
    imageColor: "bg-green-600", // Nature/Value
    
    masterDeveloper: "DAMAC Properties",
    location: "Al Qudra Road (Beyond DH1)",
    totalArea: "55 Million sq. ft.",
    towers: "Low-rise (Navitas/Verde) & Villas",
    completion: "Developing / Active",
    privateBeach: "No (Water Town Features)",

    highlights: [
      "The most affordable master community for villas in Dubai.",
      "Features 5 'Towns': Water, Sport, Down, Equestrian, and Motor Town.",
      "Massive green spaces and a laid-back, countryside vibe.",
      "Rapidly improving infrastructure (Al Qudra Road expansion)."
    ],

    amenities: [
      "Water Town (Lazy River)", "Sports Town (Fields)", "Carrefour (Retail)", "Community Centre (Leisure)", "Paintball Park (Activity)", "Boating Lake (Nature)"
    ],

    supplyStats: { totalUnits: "Massive Supply", handedOver: "60%", underConstruction: "40%", nextDelivery: "Q2 2026 (Camelia/Verona)" },
    
    transport: {
      metro: { name: "N/A", mins: "--", status: "Car Dependent" },
      roadAccess: ["Al Qudra Rd (D63)", "Dubai-Al Ain Rd"],
      walkability: "High (Within clusters)",
      cycling: "Extensive Tracks"
    },

    aiVerdict: {
      title: "The First-Time Buyer's Heaven",
      summary: "DAMAC Hills 2 (formerly Akoya Oxygen) is unbeatable for value. You can buy a 3-bedroom villa here for the price of a 1-bedroom apartment in Downtown. It is the top choice for young families entering the property ladder."
    },

    priceTrend: { "2023": "AED 1.1M", "2024": "AED 1.25M", "2025": "AED 1.4M", "2026": "AED 1.55M" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High (Volume)", tenantProfile: "Budget Conscious Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.0, appreciation: 8.5, liquidity: 7.5, risk: 4.0, lifestyle: 8.0 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "N/A", rent: "N/A" }, 
      twoBed: { roi: "N/A", rent: "N/A" } // Mostly Townhouses
    },
    // Townhouse Economics
    // 3-Bed TH: ROI 6.8%, Rent AED 90k

    shortTermScore: 4.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "60%", tenantType: "Staycationers" },
    
    futureUpgrades: [{ name: "Road Widening", status: "Completed" }, { name: "New Schools", status: "Planned" }],
    description: "DAMAC Hills 2 is a self-contained city in the desert. It is defined by its distinct activity clusters. While the commute is longer (35 mins to Marina), residents trade drive time for massive space and resort-like amenities at a budget price.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "First-time buyers and investors seeking capital appreciation from the low base." },
      { factor: "Rental Demand", read: "High. Tenants move here to escape apartment living." },
      { factor: "Price Drivers", read: "Infrastructure. Every new road link boosts prices." },
      { factor: "Liquidity", read: "High volume. It is a very active market." }
    ],

    rentalAnalysisPoints: ["3-Bed Townhouses rent for AED 85k-100k.", "4-Beds rent for AED 120k.", "Yields are consistent as purchase prices remain low."],
    salesAnalysisPoints: ["Prices have risen 25% in 2 years but remain under AED 1,000/sq.ft.", "New clusters (Verona/Violet) sell out instantly."],
    investorTip: "Buy a 3-bed townhouse. It is the most liquid asset in the community.",

    connectivity: {
      airport: { name: "DWC Airport", km: "30 km", mins: "25 mins" },
      school: { name: "Fairgreen", km: "15 km", mins: "18 mins" },
      tourist: { name: "Sevens Stadium", km: "10 km", mins: "10 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Dubai Outlet Mall", km: "15 km", mins: "15 mins" },
      business: { name: "Silicon Oasis", km: "20 km", mins: "20 mins" },
      hospital: { name: "Fakeeh Univ", km: "20 km", mins: "20 mins" }
    },
    buyerPsychology: { trigger: "Space & Price", archetype: "The Value Seeker", motivation: "Getting a villa with a garden for AED 1.4M." }
  },

  // --- DUBAI: DAMAC LAGOONS (Waterfront Mediterranean) ---
  {
    id: "damac-lagoons",
    name: "DAMAC Lagoons",
    emirate: "Dubai",
    category: "Waterfront / Themed Living",
    
    roi: "10.5% (Proj)",
    avgPrice: "AED 2.8M (Townhouse)",
    imageColor: "bg-cyan-400", // Water/Lagoon
    
    masterDeveloper: "DAMAC Properties",
    location: "Hessa Street (Opposite DH1)",
    totalArea: "45 Million sq. ft.",
    towers: "None (Villas/Townhouses)",
    completion: "Under Construction (Handover 2025+)",
    privateBeach: "Yes (Crystal Lagoons)",

    highlights: [
      "A revolutionary community built around massive crystal lagoons.",
      "8 Themed Clusters: Santorini, Costa Brava, Nice, Portofino, Malta, Venice, Morocco, Monte Carlo.",
      "Offers a holiday lifestyle with waterside cafes, gondola rides, and snorkeling.",
      "Located on Hessa Street, ensuring better connectivity than DH2."
    ],

    amenities: [
      "Crystal Lagoon (Leisure)", "Floating Cinema (Entertainment)", "Aqua Library (Culture)", "Ladies Hub (Wellness)", "Waterside Cafes (Dining)", "Interactional Mall (Planned)"
    ],

    supplyStats: { totalUnits: "High Volume", handedOver: "10%", underConstruction: "90%", nextDelivery: "Q4 2025 (Santorini/Costa Brava)" },
    
    transport: {
      metro: { name: "N/A", mins: "--", status: "Car Dependent" },
      roadAccess: ["Hessa St", "Emirates Rd"],
      walkability: "High (Lagoon Boardwalks)",
      cycling: "Connecting Paths"
    },

    aiVerdict: {
      title: "The Next Big Thing",
      summary: "DAMAC Lagoons is the most hyped master community in Dubai. It offers a unique 'waterfront' lifestyle inland. Capital appreciation potential is massive (estimated 10%+) as the first clusters hand over and the concept becomes reality."
    },

    priceTrend: { "2023": "AED 2.2M", "2024": "AED 2.6M", "2025": "AED 2.8M", "2026": "AED 3.2M" },
    demandSignals: { rentalDemand: "Projected High", resaleLiquidity: "High (Off-plan flipping)", tenantProfile: "Families & Holiday Makers" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.0, appreciation: 9.8, liquidity: 8.0, risk: 4.0, lifestyle: 10.0 },
    overallScore: 9.1,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } },
    // Projected Townhouse Yields ~7-8%

    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,200", occupancy: "Proj 80%", tenantType: "Tourists" },
    
    futureUpgrades: [{ name: "Lagoon Activation", status: "2025" }, { name: "Hessa St Upgrade", status: "Ongoing" }],
    description: "DAMAC Lagoons is not just a home; it's a vacation destination. Each cluster is designed to mimic a Mediterranean city. The crystal lagoons are swimmable, bringing the beach to your doorstep. It is positioned as a premium upgrade to DAMAC Hills 1.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Heavy investor activity flipping off-plan contracts. End-users waiting for handover." },
      { factor: "Rental Demand", read: "Expected to be extremely high for families wanting a resort lifestyle." },
      { factor: "Price Drivers", read: "The Lagoon. It is a unique selling point that justifies a premium over dry communities." },
      { factor: "Liquidity", read: "High. Premiums on original price are already 20-30%." }
    ],

    rentalAnalysisPoints: ["Projected rents for 4-beds: AED 250k+.", "Short-term rental potential is massive due to the theme park vibe.", "Will compete directly with Tilal Al Ghaf."],
    salesAnalysisPoints: ["Prices have jumped from AED 1.7M at launch to AED 2.8M+.", "Monte Carlo and Morocco clusters command the highest premiums."],
    investorTip: "Hold until handover. The real value spike happens when people see the water.",

    connectivity: {
      airport: { name: "DXB Intl", km: "30 km", mins: "28 mins" },
      school: { name: "Jebel Ali School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Miracle Garden", km: "8 km", mins: "10 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "First Avenue", km: "5 km", mins: "8 mins" },
      business: { name: "Studio City", km: "5 km", mins: "8 mins" },
      hospital: { name: "Mediclinic", km: "4 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Concept & Hype", archetype: "The Dreamer", motivation: "Living in Santorini or Venice without leaving Dubai." }
  },
  // --- DUBAI: DEIRA (The Historic Trading Hub) ---
  {
    id: "deira",
    name: "Deira",
    emirate: "Dubai",
    category: "Heritage / Commercial",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "N/A (Leasehold)", 
    avgPrice: "N/A (Rental Market)",
    imageColor: "bg-amber-900", // Heritage/Souq
    
    // 🟢 KEY FACTS
    masterDeveloper: "Private / Deira Enrichment Project",
    location: "Eastern side of Dubai Creek",
    totalArea: "High Density Mixed-Use",
    towers: "Low-to-Mid Rise (Old & New)",
    completion: "Historic / Regenerating",
    privateBeach: "No (Mamzar Beach nearby)",

    highlights: [
      "The historic commercial center of Dubai, famous for the Gold and Spice Souks.",
      "Undergoing massive modernization via the 'Deira Enrichment Project'.",
      "Home to some of the most affordable waterfront rentals in the city.",
      "Unmatched connectivity with multiple Metro stations and bus depots."
    ],

    amenities: [
      "City Centre Deira (Shopping)", "Gold Souk (Tourism)", "Deira Waterfront Market (Dining)", "Dubai Creek Golf Club (Leisure)", "Hyatt Regency (Hospitality)", "Union Metro Hub (Transport)"
    ],

    supplyStats: { totalUnits: "Stable", handedOver: "95%", underConstruction: "5% (Waterfront)", nextDelivery: "Deira Islands (Nakheel)" },
    
    transport: {
      metro: { name: "Union / City Centre", mins: "Doorstep", status: "Active (Red/Green)" },
      roadAccess: ["Al Ittihad Rd", "Baniyas Rd"],
      walkability: "High (Bustling Streets)",
      cycling: "Creek Corniche"
    },

    aiVerdict: {
      title: "The Trading Engine",
      summary: "Deira is the definition of 'Old Dubai'. While ownership is restricted for expats (Leasehold), it is a thriving rental market. The new Deira Enrichment Project is attracting a younger demographic back to the creek."
    },

    priceTrend: { "2023": "AED 50k (Rent)", "2024": "AED 60k (Rent)", "2025": "AED 72k (Rent)", "2026": "AED 78k (Rent)" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "N/A", tenantProfile: "Traders & Families" },
    ownership: { type: "Leasehold (99%)", eligibleFor: ["Locals / GCC"], minDownPayment: "N/A" },
    scores: { cashFlow: 8.5, appreciation: 3.0, liquidity: 6.0, risk: 2.0, lifestyle: 7.0 },
    overallScore: 7.3,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 34k" }, 
      oneBed: { roi: "N/A", rent: "AED 58k" }, 
      twoBed: { roi: "N/A", rent: "AED 85k" } 
    },

    shortTermScore: 5.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 300", occupancy: "75%", tenantType: "Budget Tourists" },

    futureUpgrades: [
      { name: "Deira Islands Bridge", status: "Active" },
      { name: "Souq Modernization", status: "Ongoing" }
    ],

    description: "Deira is a sensory overload of spices, gold, and commerce. It is one of the oldest districts in Dubai but is currently seeing a renaissance. New modern apartment blocks along the Creek offering panoramic views are competing with older stock, driving a 'flight to quality' within the area.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A - Rental Market." },
      { factor: "Rental Demand", read: "Driven by affordability and the need to be close to wholesale markets." },
      { factor: "Price Drivers", read: "Proximity to the Creek and City Centre Deira." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: ["New buildings in 'Deira Enrichment' rent for AED 90k+ (2-bed).", "Older buildings near Naif are the cheapest in the city.", "Chiller fees are a major factor in tenant decisions here."],
    salesAnalysisPoints: ["N/A"],
    investorTip: "Not for property buying. Look at commercial trading licenses or retail shops.",

    connectivity: {
      airport: { name: "DXB Intl", km: "3 km", mins: "5 mins" },
      school: { name: "Deira Intl School", km: "4 km", mins: "10 mins" },
      tourist: { name: "Gold Souk", km: "1 km", mins: "5 mins" },
      metro: { name: "Union", km: "0.5 km", mins: "5 mins" },
      mall: { name: "City Centre", km: "0.2 km", mins: "2 mins" },
      business: { name: "Port Saeed", km: "1 km", mins: "3 mins" },
      hospital: { name: "City Centre Clinic", km: "0.2 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Hustle", archetype: "The Trader", motivation: "Being at the center of the import/export world." }
  },

  // --- DUBAI: DIFC (The Financial Capital) ---
  {
    id: "difc",
    name: "DIFC (Dubai International Financial Centre)",
    emirate: "Dubai",
    category: "Corporate Luxury / Urban",
    
    roi: "5.8%",
    avgPrice: "AED 3.2M (Apt)",
    imageColor: "bg-slate-900", // Corporate/Premium
    
    masterDeveloper: "DIFC Authority",
    location: "Sheikh Zayed Road (Financial District)",
    totalArea: "Prime Free Zone",
    towers: "Iconic High-rise (Index, Limestone)",
    completion: "Developed / DIFC 2.0",
    privateBeach: "No",

    highlights: [
      "The leading financial hub of the MEASA region with its own legal system.",
      "Home to Dubai's best fine dining scene (Zuma, LPM, Cipriani).",
      "Offers ultra-luxury apartments connected to offices via air-conditioned walkways.",
      "High tenant retention due to the convenience for bankers and lawyers."
    ],

    amenities: [
      "Gate Avenue (Retail/Art)", "The Arts Club (Social)", "Ritz Carlton (Hospitality)", "ICD Brookfield Place (Business)", "Museum of the Future (Nearby)", "Spinneys (Retail)"
    ],

    supplyStats: { totalUnits: "Limited Supply", handedOver: "90%", underConstruction: "10% (DIFC Living)", nextDelivery: "2026 (DIFC Living)" },
    
    transport: {
      metro: { name: "Financial Centre", mins: "Direct Access", status: "Active" },
      roadAccess: ["Sheikh Zayed Rd", "Al Sa'ada St"],
      walkability: "Perfect (AC Bridges)",
      cycling: "DIFC Loop"
    },

    aiVerdict: {
      title: "The Banker's Choice",
      summary: "DIFC is a blue-chip asset class. It offers lower yields (5-6%) compared to suburban areas, but the capital preservation and tenant quality (AAA corporate tenants) are unmatched."
    },

    priceTrend: { "2023": "AED 2.5M", "2024": "AED 2.8M", "2025": "AED 3.2M", "2026": "AED 3.5M" },
    demandSignals: { rentalDemand: "High (Corporate)", resaleLiquidity: "High (Luxury)", tenantProfile: "Bankers, Lawyers, Consultants" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 5.8, appreciation: 7.5, liquidity: 8.5, risk: 2.0, lifestyle: 10.0 },
    overallScore: 8.8,

    unitEconomics: { 
      studio: { roi: "6.2%", rent: "AED 110k" }, 
      oneBed: { roi: "5.8%", rent: "AED 165k" }, 
      twoBed: { roi: "5.2%", rent: "AED 240k" } 
    },
    shortTermScore: 8.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 900", occupancy: "80%", tenantType: "Business Executives" },
    
    futureUpgrades: [{ name: "DIFC 2.0 Expansion", status: "Construction" }],
    description: "DIFC is an independent jurisdiction and the definition of 'Work-Live-Play'. It is a vertical city where you can live in 'The Index' or 'Limestone House', work in 'The Gate', and dine in Michelin-star restaurants without ever stepping outside. It commands the highest price-per-sq-ft for non-waterfront property.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Institutional investors and senior executives working within the district." },
      { factor: "Rental Demand", read: "Consistent corporate demand. December bonus season often triggers sales activity." },
      { factor: "Price Drivers", read: "Walkability to offices. 'The Gate' proximity is the main premium factor." },
      { factor: "Liquidity", read: "High for 1-beds; Slower for penthouses." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 160k+, competing with Downtown.", "Furnished units command a 20% premium due to transient executive demand.", "Service charges are high (AED 25-35/sq.ft) but justify the upkeep."],
    salesAnalysisPoints: ["Prices have crossed AED 2,500/sq.ft on average.", "DIFC Living (Off-plan) sold out at record rates."],
    investorTip: "Buy a 1-bed in 'Central Park Towers' or 'Sky Gardens'. They are timeless assets with zero vacancy risk.",

    connectivity: {
      airport: { name: "DXB Intl", km: "10 km", mins: "12 mins" },
      school: { name: "Hartland Intl", km: "5 km", mins: "10 mins" },
      tourist: { name: "Museum of Future", km: "1 km", mins: "3 mins" },
      metro: { name: "Financial Ctr", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Dubai Mall", km: "2 km", mins: "5 mins" },
      business: { name: "The Gate", km: "0 km", mins: "0 mins" },
      hospital: { name: "DIFC Clinic", km: "0 km", mins: "1 min" }
    },
    buyerPsychology: { trigger: "Status & Career", archetype: "The Power Player", motivation: "Living in the 'Wall Street' of the Middle East." }
  },

  // --- DUBAI: DISCOVERY GARDENS (The Budget King) ---
  {
    id: "discovery-gardens",
    name: "Discovery Gardens",
    emirate: "Dubai",
    category: "Budget / High Yield",
    
    roi: "9.2%",
    avgPrice: "AED 550k (Studio)",
    imageColor: "bg-green-600", // Garden/Suburban
    
    masterDeveloper: "Nakheel",
    location: "Jebel Ali / Near Ibn Battuta",
    totalArea: "Low-rise Clusters",
    towers: "G+4 Residential",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "Consistently ranks in the top 3 for highest rental yields in Dubai (9%+).",
      "Now fully connected via the Route 2020 Metro extension (Discovery Gardens Station).",
      "Features 6 themed clusters (Zen, Mediterranean, Cactus, etc.) with massive pools.",
      "Extremely affordable service charges compared to high-rise towers."
    ],

    amenities: [
      "Ibn Battuta Mall (Shopping)", "Community Pools (Leisure)", "Basketball/Tennis Courts (Sport)", "Discovery Pavilion (Retail)", "Metro Station (Transport)", "Carrefour (Grocery)"
    ],

    supplyStats: { totalUnits: "26,000 Units", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Discovery Gardens", mins: "Walking", status: "Active (Route 2020)" },
      roadAccess: ["Sheikh Zayed Rd", "Yalayis St"],
      walkability: "High (Internal Paths)",
      cycling: "Connecting to Furjan"
    },

    aiVerdict: {
      title: "The ROI Heavyweight",
      summary: "Discovery Gardens is a no-brainer for yield-focused investors. The Metro arrival transformed it from a 'traffic jam' area to a 'connected hub'. Capital appreciation is capped by age, but cash flow is phenomenal."
    },

    priceTrend: { "2023": "AED 380k", "2024": "AED 450k", "2025": "AED 550k", "2026": "AED 600k" },
    demandSignals: { rentalDemand: "Massive", resaleLiquidity: "High (Volume)", tenantProfile: "Single Professionals & Couples" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 9.8, appreciation: 5.0, liquidity: 9.0, risk: 2.0, lifestyle: 6.0 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 52k" }, 
      oneBed: { roi: "8.8%", rent: "AED 75k" }, 
      twoBed: { roi: "8.2%", rent: "AED 95k" } 
    },
    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "70%", tenantType: "Budget Travelers" },
    
    futureUpgrades: [{ name: "Building Facade Reno", status: "Planned" }],
    description: "Discovery Gardens is a massive residential community known for its affordability and green spaces. It consists of nearly 300 low-rise buildings. The recent addition of the Metro station has made it a prime target for commuters working in JLT, Marina, and Expo City.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "First-time investors and budget-conscious end-users." },
      { factor: "Rental Demand", read: "Driven by price. It is the cheapest freehold area with Metro access." },
      { factor: "Price Drivers", read: "Metro connectivity was the game changer. Rents jumped 20% post-metro opening." },
      { factor: "Liquidity", read: "Very High. Studios here are 'liquid gold'." }
    ],

    rentalAnalysisPoints: ["Studios rent for AED 48k-55k.", "1-Beds rent for AED 70k-80k.", "Low service charges (AED 12-14/sq.ft) keep net yields high."],
    salesAnalysisPoints: ["Studios have appreciated from AED 280k in 2021 to AED 550k in 2026.", "Street-facing units trade at a discount to pool-facing units."],
    investorTip: "Buy a 'Mediterranean' or 'Mogul' cluster unit near the Metro station. The walkability adds AED 5k to annual rent.",

    connectivity: {
      airport: { name: "DWC Airport", km: "20 km", mins: "20 mins" },
      school: { name: "The Arbor School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Marina Beach", km: "4 km", mins: "8 mins" },
      metro: { name: "Discovery Gardens", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Ibn Battuta", km: "1 km", mins: "3 mins" },
      business: { name: "Jebel Ali Freezone", km: "5 km", mins: "6 mins" },
      hospital: { name: "Aster", km: "1 km", mins: "3 mins" }
    },
    buyerPsychology: { trigger: "Value", archetype: "The Cash Flow King", motivation: "Maximizing monthly rental income with low overheads." }
  },

  // --- DUBAI: DOWNTOWN DUBAI (The Centre of Now) ---
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    emirate: "Dubai",
    category: "Prime / Luxury",
    
    roi: "5.8%",
    avgPrice: "AED 3.8M (Apt)",
    imageColor: "bg-indigo-900", // Night/Luxury
    
    masterDeveloper: "Emaar",
    location: "Centre of Dubai",
    totalArea: "Prime Square Mile",
    towers: "Iconic Skyscrapers",
    completion: "Developed / Infill",
    privateBeach: "No (Fountains)",

    highlights: [
      "The world's most visited lifestyle destination, home to Burj Khalifa and Dubai Mall.",
      "The most liquid luxury market in Dubai.",
      "Unrivaled capital appreciation potential for units with 'Fountain Views'.",
      "The address for global HNWIs and tourists."
    ],

    amenities: [
      "Burj Khalifa (Icon)", "Dubai Mall (Shopping)", "Dubai Opera (Culture)", "Souk Al Bahar (Dining)", "Burj Park (Nature)", "Boulevard (Leisure)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "90%", underConstruction: "10% (Opera District)", nextDelivery: "Il Primo / Grande" },
    
    transport: {
      metro: { name: "Burj Khalifa / Dubai Mall", mins: "Direct Link", status: "Active" },
      roadAccess: ["Sheikh Zayed Rd", "Financial Centre Rd"],
      walkability: "High (Boulevard)",
      cycling: "Restricted"
    },

    aiVerdict: {
      title: "The Crown Jewel",
      summary: "Downtown is the blue-chip stock of Dubai Real Estate. It offers safety, prestige, and high liquidity. While yields (5-6%) are lower than suburbs, the capital preservation and demand are unmatched globally."
    },

    priceTrend: { "2023": "AED 2.8M", "2024": "AED 3.2M", "2025": "AED 3.6M", "2026": "AED 3.9M" },
    demandSignals: { rentalDemand: "Very High (Premium)", resaleLiquidity: "Very High", tenantProfile: "CEOs & Tourists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 5.5, appreciation: 9.0, liquidity: 9.5, risk: 2.0, lifestyle: 10.0 },
    overallScore: 9.2,

    unitEconomics: { 
      studio: { roi: "6.0%", rent: "AED 110k" }, 
      oneBed: { roi: "5.8%", rent: "AED 165k" }, 
      twoBed: { roi: "5.2%", rent: "AED 260k" } 
    },
    shortTermScore: 9.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,200", occupancy: "88%", tenantType: "Luxury Tourists" },
    
    futureUpgrades: [{ name: "Opera District Finalization", status: "Active" }],
    description: "Downtown Dubai is the flagship mega-development by Emaar. It creates a new heart for the city, anchored by the tallest building and largest mall in the world. It attracts those who want to be at the 'Centre of Now'.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Global elite. 60% of buyers are international cash buyers." },
      { factor: "Rental Demand", read: "Short-term rentals (Airbnb) often generate 20-30% more revenue than long-term leases here." },
      { factor: "Price Drivers", read: "View corridors. A full Burj view can double the price of a unit." },
      { factor: "Liquidity", read: "Highest in the market. A prime unit priced correctly sells in days." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 150k - 180k.", "Burj View units are immune to market downturns.", "Address Residences offer the highest premiums."],
    salesAnalysisPoints: ["Average PSF is AED 2,500 - 4,500.", "New launches (St. Regis / Opera Grand) are resetting the luxury benchmark."],
    investorTip: "Buy the 'View'. In a downturn, non-view units suffer, but Burj Khalifa views always hold value.",

    connectivity: {
      airport: { name: "DXB Intl", km: "12 km", mins: "15 mins" },
      school: { name: "Hartland", km: "5 km", mins: "10 mins" },
      tourist: { name: "Burj Khalifa", km: "0 km", mins: "0 mins" },
      metro: { name: "Burj Khalifa", km: "0.5 km", mins: "5 mins" },
      mall: { name: "Dubai Mall", km: "0.2 km", mins: "2 mins" },
      business: { name: "Emaar Square", km: "1 km", mins: "3 mins" },
      hospital: { name: "Mediclinic", km: "0.5 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Iconic Status", archetype: "The Global Investor", motivation: "Owning a piece of the world's most famous skyline." }
  },

  // --- DUBAI: DUBAI CREEK HARBOUR (The Future) ---
  {
    id: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    emirate: "Dubai",
    category: "Future Prime / Waterfront",
    
    roi: "6.2%",
    avgPrice: "AED 2.2M (Apt)",
    imageColor: "bg-teal-600", // Water/Future
    
    masterDeveloper: "Emaar",
    location: "Ras Al Khor / Creek",
    totalArea: "6 Sq. Km (2x Downtown)",
    towers: "High-rise Clusters",
    completion: "Developing (20% Complete)",
    privateBeach: "Yes (Creek Beach)",

    highlights: [
      "The 'Next Downtown', set to be twice the size of Downtown Dubai.",
      "Home to the future Creek Tower (Redesign Phase).",
      "Stunning skyline views of Downtown from the Harbour Promenade.",
      "A sanctuary for eco-living next to the Ras Al Khor Wildlife Sanctuary (Flamingos)."
    ],

    amenities: [
      "Creek Marina (Yachting)", "Central Park (Nature)", "Harbour Promenade (Dining)", "Creek Beach (Leisure)", "Viewing Point (Tourist)", "Vida Hotel (Hospitality)"
    ],

    supplyStats: { totalUnits: "Massive Pipeline", handedOver: "25%", underConstruction: "75%", nextDelivery: "Q3 2026 (Creek Waters)" },
    
    transport: {
      metro: { name: "Creek Station", mins: "Active", status: "Green/Blue Line" },
      roadAccess: ["Ras Al Khor Rd", "Nad Al Hamar Rd"],
      walkability: "High (Promenade)",
      cycling: "Island Loop"
    },

    aiVerdict: {
      title: "The Growth Play",
      summary: "Dubai Creek Harbour is the best bet for capital appreciation in 2026. As infrastructure (bridges/metro) connects, prices will converge with Downtown. It is currently undervalued by 20-30% compared to Business Bay."
    },

    priceTrend: { "2023": "AED 1.7M", "2024": "AED 1.95M", "2025": "AED 2.2M", "2026": "AED 2.5M" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "Young Families & Execs" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.2, appreciation: 9.5, liquidity: 8.0, risk: 3.5, lifestyle: 9.0 },
    overallScore: 8.8,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.5%", rent: "AED 115k" }, 
      twoBed: { roi: "6.0%", rent: "AED 165k" } 
    },
    shortTermScore: 8.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 750", occupancy: "80%", tenantType: "Sunset Chasers" },
    
    futureUpgrades: [{ name: "Blue Line Metro", status: "Approved" }, { name: "New Bridge to Bur Dubai", status: "Planned" }],
    description: "Dubai Creek Harbour is an eco-friendly waterfront mega-city. It combines the glamour of a marina lifestyle with the tranquility of a nature reserve. The master plan includes retail districts larger than Dubai Mall (Dubai Square) and a walkable urban environment.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Visionary investors betting on the 10-year master plan." },
      { factor: "Rental Demand", read: "Rapidly growing as access improves. Tenants love the 'newness' and park amenities." },
      { factor: "Price Drivers", read: "Infrastructure announcements (Blue Line) and the Creek Tower progress." },
      { factor: "Liquidity", read: "High for 1-beds and Marina-facing units." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 110k-125k.", "2-Beds are popular with families due to parks and car-free zones.", "Views of the Flamingo sanctuary command a niche premium."],
    salesAnalysisPoints: ["Price per sq.ft is ~AED 2,100, compared to AED 2,800 in Downtown.", "Massive upside potential as the district matures."],
    investorTip: "Buy in 'Island District' for immediate rental or 'Creek Beach' for holiday home potential.",

    connectivity: {
      airport: { name: "DXB Intl", km: "10 km", mins: "12 mins" },
      school: { name: "Swiss Scientific", km: "4 km", mins: "8 mins" },
      tourist: { name: "Flamingo Sanctuary", km: "1 km", mins: "3 mins" },
      metro: { name: "Creek Station", km: "3 km", mins: "5 mins" },
      mall: { name: "Dubai Square", km: "0 km", mins: "Future" },
      business: { name: "DIFC", km: "8 km", mins: "10 mins" },
      hospital: { name: "Mediclinic", km: "6 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Future Value", archetype: "The Visionary", motivation: "Buying into the 'next Downtown' before prices peak." }
  },

  // --- DUBAI: DUBAI DESIGN DISTRICT (d3) ---
  {
    id: "dubai-design-district",
    name: "Dubai Design District (d3)",
    emirate: "Dubai",
    category: "Creative / Boutique",
    
    roi: "6.0% (Proj)",
    avgPrice: "AED 2.2M (Apt)",
    imageColor: "bg-zinc-800", // Artistic/Minimal
    
    masterDeveloper: "Tecom / Meraas",
    location: "Near Business Bay / Ras Al Khor",
    totalArea: "Creative Free Zone",
    towers: "Mid-rise Design Blocks",
    completion: "Developing (Residential Phase)",
    privateBeach: "No (Canal Front)",

    highlights: [
      "The region's primary hub for art, design, and fashion.",
      "New residential phase 'Design Quarter at d3' offers first-ever living in the district.",
      "Trendy, hipster vibe with art installations, pop-ups, and Dubai Design Week.",
      "Directly connected to the Dubai Water Canal."
    ],

    amenities: [
      "Design Quarter (Living)", "The Block (Leisure)", "d3 Waterfront (Dining)", "Dubai Institute of Design (Education)", "Concept Stores (Retail)", "Workshops (Creative)"
    ],

    supplyStats: { totalUnits: "Very Limited", handedOver: "10% (Res)", underConstruction: "90% (Res)", nextDelivery: "2027 (Design Quarter)" },
    
    transport: {
      metro: { name: "Dubai Mall", mins: "Bus Link", status: "Active" },
      roadAccess: ["Al Khail Rd", "Ras Al Khor Rd"],
      walkability: "High (Within District)",
      cycling: "Design Tracks"
    },

    aiVerdict: {
      title: "The Creative's Canvas",
      summary: "d3 is a niche market. Residential supply is brand new and limited (Design Quarter). It appeals to a specific demographic of creatives and designers who want to live inside their ecosystem. High exclusivity potential."
    },

    priceTrend: { "2023": "N/A", "2024": "AED 1.9M (Off-plan)", "2025": "AED 2.1M", "2026": "AED 2.3M" },
    demandSignals: { rentalDemand: "High (Corporate)", resaleLiquidity: "N/A (New)", tenantProfile: "Designers & Fashion Industry" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.0, appreciation: 8.0, liquidity: 6.0, risk: 4.0, lifestyle: 9.5 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.0%", rent: "AED 130k (Proj)" }, 
      twoBed: { roi: "5.5%", rent: "AED 190k (Proj)" } 
    },
    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 800", occupancy: "70%", tenantType: "Event Business" },
    
    futureUpgrades: [{ name: "Design Quarter Handover", status: "2027" }],
    description: "d3 is Dubai's answer to Shoreditch or Meatpacking District. It has been a commercial success for years and is now opening up to residential living. The new apartments promise 'creative living' with lofts, open plans, and stunning canal views.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Creative professionals and investors banking on the scarcity of supply in d3." },
      { factor: "Rental Demand", read: "Pent-up demand from the thousands of people who work in d3 but commute from Business Bay." },
      { factor: "Price Drivers", read: "Exclusivity. It is the only place to live 'inside' the design hub." },
      { factor: "Liquidity", read: "Un-tested but expected to be high due to limited stock." }
    ],

    rentalAnalysisPoints: ["Projected rents are high due to the 'walk-to-work' convenience for high-paid creatives.", "Short-term rentals will boom during Design Week and Fashion Week events."],
    salesAnalysisPoints: ["Launch prices were premium (AED 1,900/sq.ft).", "Resale premiums are expected near handover."],
    investorTip: "Buy for the niche. This is not a mass-market product; it's for tenants who value aesthetics over square footage.",

    connectivity: {
      airport: { name: "DXB Intl", km: "12 km", mins: "15 mins" },
      school: { name: "Hartland", km: "3 km", mins: "5 mins" },
      tourist: { name: "Dubai Mall", km: "3 km", mins: "6 mins" },
      metro: { name: "Financial Ctr", km: "4 km", mins: "8 mins" },
      mall: { name: "Dubai Mall", km: "3 km", mins: "6 mins" },
      business: { name: "d3 Offices", km: "0 km", mins: "0 mins" },
      hospital: { name: "Mediclinic", km: "5 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Identity", archetype: "The Artist", motivation: "Living in a space that reflects their creative identity." }
  },

  // --- DUBAI: DUBAI FESTIVAL CITY (Family Waterfront) ---
  {
    id: "dubai-festival-city",
    name: "Dubai Festival City",
    emirate: "Dubai",
    category: "Family / Retail / Creek",
    
    roi: "6.0%",
    avgPrice: "AED 2.5M (Al Badia)",
    imageColor: "bg-purple-700", // Events/Retail
    
    masterDeveloper: "Al Futtaim Group",
    location: "Dubai Creek (East Bank)",
    totalArea: "Self-contained City",
    towers: "Mid-rise (Marsa) & Villas (Al Badia)",
    completion: "Mature",
    privateBeach: "No (Creek Front)",

    highlights: [
      "A fully integrated mega-community anchored by the massive Festival City Mall.",
      "Features 'IMAGINE', a record-breaking laser and water show.",
      "Home to IKEA and renowned international schools (Universal American/Deira Intl).",
      "Quiet, traffic-free residential enclaves (Al Badia / Marsa Plaza)."
    ],

    amenities: [
      "Festival City Mall (Shopping)", "IKEA (Retail)", "InterContinental (Hotel)", "Al Badia Golf (Greenery)", "Universal American School (Education)", "Festival Bay (Leisure)"
    ],

    supplyStats: { totalUnits: "Stable", handedOver: "95%", underConstruction: "5%", nextDelivery: "Al Badia Terraces" },
    
    transport: {
      metro: { name: "Creek Station", mins: "Water Taxi / Car", status: "Nearby" },
      roadAccess: ["Rebat St", "Nad Al Hamar Rd"],
      walkability: "High (Mall/Promenade)",
      cycling: "Dedicated Tracks"
    },

    aiVerdict: {
      title: "The Self-Sufficient City",
      summary: "Festival City is a 'bubble' of calm. It is a favorite for families who want to be near schools and the airport without the chaos of city traffic. It holds value well due to the Al Futtaim management quality."
    },

    priceTrend: { "2023": "AED 2.1M", "2024": "AED 2.3M", "2025": "AED 2.5M", "2026": "AED 2.7M" },
    demandSignals: { rentalDemand: "High (Stable)", resaleLiquidity: "Moderate", tenantProfile: "Expat Families & Pilots" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.0, appreciation: 5.5, liquidity: 6.5, risk: 2.5, lifestyle: 9.0 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.5%", rent: "AED 95k" }, 
      twoBed: { roi: "6.0%", rent: "AED 140k" } 
    },
    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "70%", tenantType: "Shopping Tourists" },
    
    futureUpgrades: [{ name: "Mall Expansion", status: "Ongoing" }],
    description: "Dubai Festival City is a landmark destination. It sits on the historic Creek but offers modern luxury. The residential district is separated from the mall by lush greenery and the Al Badia Hill. It is famous for its 'resort-at-home' feeling.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Families prioritizing proximity to top schools like UAS and DIS." },
      { factor: "Rental Demand", read: "Very stable. Tenants often stay for 5-8 years until kids graduate." },
      { factor: "Price Drivers", read: "Community management. The area is impeccably maintained by Al Futtaim." },
      { factor: "Liquidity", read: "Steady. Not a speculative market." }
    ],

    rentalAnalysisPoints: ["Marsa Plaza apartments offer hotel-like living and rent for AED 130k+ (2-bed).", "Al Badia Hillside village offers unique Mediterranean architecture.", "Rents are premium but include access to world-class facilities."],
    salesAnalysisPoints: ["Prices are stable with slow appreciation.", "A safe haven asset rather than a high-growth crypto-coin style investment."],
    investorTip: "Buy a 3-bed in Al Badia. It is the perfect family product with zero competition in the area.",

    connectivity: {
      airport: { name: "DXB Intl", km: "3 km", mins: "5 mins" },
      school: { name: "Universal American", km: "1 km", mins: "2 mins" },
      tourist: { name: "IMAGINE Show", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Creek", km: "4 km", mins: "10 mins" },
      mall: { name: "Festival City Mall", km: "0.2 km", mins: "2 mins" },
      business: { name: "Festival Tower", km: "0.5 km", mins: "2 mins" },
      hospital: { name: "Mediclinic", km: "4 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Convenience & Schools", archetype: "The Stable Family", motivation: "Walking the kids to school and the mall." }
  },
  // --- DUBAI: DUBAI HILLS ESTATE (The Green Heart) ---
  {
    id: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    emirate: "Dubai",
    category: "Luxury / Golf / Family",
    
    roi: "6.8%",
    avgPrice: "AED 2.4M (Apt) / AED 7.5M (Villa)",
    imageColor: "bg-emerald-700", // Green/Golf
    
    masterDeveloper: "Emaar / Meraas",
    location: "Al Khail Road / Umm Suqeim",
    totalArea: "11 Million sq. m",
    towers: "Mid-rise Parkside & Villas",
    completion: "Developed / New Launches",
    privateBeach: "No (Crystal Lagoon Planned nearby)",

    highlights: [
      "Known as the 'Green Heart of Dubai', featuring a massive central park and championship golf course.",
      "Home to Dubai Hills Mall, one of the city's most visited retail destinations.",
      "A master-planned community with King's College Hospital and top-tier schools.",
      "Highly liquid market for both investors (Park Heights) and end-users (Sidra/Maple)."
    ],

    amenities: [
      "Dubai Hills Mall (Retail)", "Dubai Hills Park (Nature)", "Championship Golf Course (Sport)", "King's College Hospital (Healthcare)", "GEMS Wellington (Education)", "Indoor Roller Coaster (Leisure)"
    ],

    supplyStats: { totalUnits: "High Volume", handedOver: "85%", underConstruction: "15%", nextDelivery: "Q1 2026 (Park Horizon)" },
    
    transport: {
      metro: { name: "Dubai Hills Mall", mins: "Future Link", status: "Planned (Pink Line)" },
      roadAccess: ["Al Khail Rd", "Umm Suqeim St"],
      walkability: "Very High (Park & Mall)",
      cycling: "54km Track"
    },

    aiVerdict: {
      title: "The All-Rounder",
      summary: "Dubai Hills is the gold standard for master communities. It offers consistent capital growth (8-10% annually) and stable rental yields. It is the default choice for families moving to Dubai."
    },

    priceTrend: { "2023": "AED 1.8M", "2024": "AED 2.1M", "2025": "AED 2.4M", "2026": "AED 2.7M" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Very High", tenantProfile: "Western & Arab Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.2, appreciation: 8.8, liquidity: 9.2, risk: 2.5, lifestyle: 9.8 },
    overallScore: 8.9,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.8%", rent: "AED 110k" }, 
      twoBed: { roi: "6.4%", rent: "AED 165k" } 
    },
    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 700", occupancy: "75%", tenantType: "Families" },
    
    futureUpgrades: [{ name: "Metro Extension", status: "Proposed" }, { name: "New Business Park", status: "Active" }],
    description: "Dubai Hills Estate is a city within a city. Centered around an 18-hole golf course and a park larger than Zabeel Park, it attracts affluent families. The mix of luxury villas (Sidra, Maple) and park-facing apartments (Park Heights, Park Ridge) creates a vibrant, diversified ecosystem.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "End-users dominate the villa market. Investors target the 'Park' apartments." },
      { factor: "Rental Demand", read: "Consistent. Tenants often renew leases for 3+ years." },
      { factor: "Price Drivers", read: "Mall proximity and Park views. Units facing the park trade at a 15% premium." },
      { factor: "Liquidity", read: "High. One of the most traded communities in DLD records." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 100k-120k.", "3-Bed Villas (Maple) rent for AED 280k+.", "High demand for 'Park Point' and 'Collective' due to co-living vibe."],
    salesAnalysisPoints: ["Apartments trade at AED 1,900 - 2,300 psf.", "Villas have appreciated 40% since 2021."],
    investorTip: "Buy a 1-bed in 'Park Heights' facing the pool. It's the most liquid asset in the community.",

    connectivity: {
      airport: { name: "DXB Intl", km: "20 km", mins: "20 mins" },
      school: { name: "GEMS Wellington", km: "1 km", mins: "3 mins" },
      tourist: { name: "Dubai Hills Park", km: "0 km", mins: "0 mins" },
      metro: { name: "Mall of Emirates", km: "5 km", mins: "10 mins" },
      mall: { name: "Dubai Hills Mall", km: "0.5 km", mins: "2 mins" },
      business: { name: "Business Park", km: "1 km", mins: "3 mins" },
      hospital: { name: "King's College", km: "0.5 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Lifestyle", archetype: "The Modern Family", motivation: "Living in a green, safe, self-contained bubble." }
  },

  // --- DUBAI: DUBAI INTERNET CITY (DIC) ---
  {
    id: "dubai-internet-city",
    name: "Dubai Internet City",
    emirate: "Dubai",
    category: "Commercial / Tech Hub",
    
    roi: "7.0%",
    avgPrice: "AED 3.5M (Luxury Apt)",
    imageColor: "bg-blue-600", // Tech/Corporate
    
    masterDeveloper: "Tecom Group",
    location: "Sheikh Zayed Road (Sea Side)",
    totalArea: "Free Zone Tech Park",
    towers: "High-rise Office & Luxury Res",
    completion: "Developed / New Towers",
    privateBeach: "No (Sufouh Beach nearby)",

    highlights: [
      "The Silicon Valley of the Middle East, home to Microsoft, Google, and Oracle.",
      "Newly launched ultra-luxury residential towers like 'The S Tower' by Sobha.",
      "High rental demand from high-income tech executives working in the zone.",
      "Direct access to Sheikh Zayed Road and Tram."
    ],

    amenities: [
      "Dubai Internet City Amphitheatre (Events)", "Office Park (Business)", "Sufouh Beach (Leisure)", "American University (Education)", "Westin Mina Seyahi (Hospitality)", "Tram Station (Transport)"
    ],

    supplyStats: { totalUnits: "Very Limited", handedOver: "90%", underConstruction: "10% (Luxury)", nextDelivery: "2026 (The S Tower)" },
    
    transport: {
      metro: { name: "Dubai Internet City", mins: "Walking", status: "Active" },
      roadAccess: ["Sheikh Zayed Rd"],
      walkability: "High (Office Campus)",
      cycling: "Tram Track"
    },

    aiVerdict: {
      title: "The Tech Executive's Home",
      summary: "Residential supply in DIC is scarce but premium. 'The S Tower' and 'Dubai Jewel' offer luxury living for C-suite tech executives. Rents are high, and vacancies are low due to the massive workforce next door."
    },

    priceTrend: { "2023": "N/A", "2024": "AED 2.8M (Res)", "2025": "AED 3.2M", "2026": "AED 3.6M" },
    demandSignals: { rentalDemand: "High (Corporate)", resaleLiquidity: "Moderate (Luxury)", tenantProfile: "Tech CEOs & Directors" },
    ownership: { type: "Freehold (Specific Towers)", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.0, appreciation: 7.5, liquidity: 6.0, risk: 3.0, lifestyle: 8.5 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 75k" }, 
      oneBed: { roi: "6.8%", rent: "AED 140k" }, 
      twoBed: { roi: "6.2%", rent: "AED 220k" } 
    },
    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 800", occupancy: "75%", tenantType: "Business Travelers" },
    
    futureUpgrades: [{ name: "Innovation Hub Expansion", status: "Active" }],
    description: "Dubai Internet City is primarily a commercial free zone, but it hosts select high-end residential towers. It attracts a niche, wealthy demographic of tech leaders who want a 5-minute commute to their regional HQs.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Corporate investors and tech founders." },
      { factor: "Rental Demand", read: "Driven by the 25,000+ professionals working in the zone." },
      { factor: "Price Drivers", read: "Sea views and proximity to the Metro." },
      { factor: "Liquidity", read: "Lower volume, higher value." }
    ],

    rentalAnalysisPoints: ["Rents are premium; a 2-bed can easily fetch AED 200k+.", "Corporate leases are common.", "Tenants value the sea views over the Palm Jumeirah."],
    salesAnalysisPoints: ["'The S Tower' is trading at AED 3,500+ psf.", "Limited supply protects capital values."],
    investorTip: "Buy in 'Dubai Jewel Tower' for value or 'The S Tower' for trophy status.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "Choueifat", km: "3 km", mins: "5 mins" },
      tourist: { name: "Palm Jumeirah", km: "2 km", mins: "5 mins" },
      metro: { name: "DIC Metro", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Marina Mall", km: "3 km", mins: "5 mins" },
      business: { name: "DIC Offices", km: "0 km", mins: "0 mins" },
      hospital: { name: "Saudi German", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Efficiency", archetype: "The Tech Tycoon", motivation: "Zero commute, maximum luxury." }
  },

  // --- DUBAI: DUBAI KNOWLEDGE PARK ---
  {
    id: "dubai-knowledge-park",
    name: "Dubai Knowledge Park",
    emirate: "Dubai",
    category: "Education / Campus",
    
    roi: "7.2%",
    avgPrice: "AED 1.8M (Nearby)",
    imageColor: "bg-teal-500", // Academic
    
    masterDeveloper: "Tecom Group",
    location: "Al Sufouh / Near Palm",
    totalArea: "Education Free Zone",
    towers: "Mid-rise (Commercial/Res)",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "The region's only Human Resource Management specialized free zone.",
      "Home to huge university campuses (Wollongong, Middlesex, Birmingham).",
      "Residential demand spills over from students and faculty.",
      "Excellent Tram connectivity linking to Marina and Palm."
    ],

    amenities: [
      "Food Court (Dining)", "University Campuses (Education)", "Conference Centre (Events)", "Tram Station (Transport)", "Holiday Inn (Hospitality)", "Sufouh Beach (Nearby)"
    ],

    supplyStats: { totalUnits: "Low (Res)", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Internet City", mins: "Tram Link", status: "Active" },
      roadAccess: ["Al Sufouh Rd"],
      walkability: "High (Campus)",
      cycling: "Tram Tracks"
    },

    aiVerdict: {
      title: "The Academic Anchor",
      summary: "Knowledge Park itself has limited residential stock (mostly student housing/hotels), but investing in adjacent 'Sufouh' or 'Media City' units yields high returns from the massive student and faculty population."
    },

    priceTrend: { "2023": "AED 1.5M", "2024": "AED 1.65M", "2025": "AED 1.8M", "2026": "AED 1.95M" },
    demandSignals: { rentalDemand: "High (Seasonal)", resaleLiquidity: "Moderate", tenantProfile: "Students & Professors" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.5, appreciation: 6.0, liquidity: 7.0, risk: 3.0, lifestyle: 8.0 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "7.8%", rent: "AED 65k" }, 
      oneBed: { roi: "7.2%", rent: "AED 95k" }, 
      twoBed: { roi: "6.5%", rent: "AED 140k" } 
    },
    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "65%", tenantType: "Academic Visitors" },
    
    futureUpgrades: [{ name: "New Campus Blocks", status: "Ongoing" }],
    description: "Dubai Knowledge Park is a vibrant community of universities and HR firms. While residential options inside the park are limited, the immediate vicinity creates a 'student housing' micro-market with high demand for studios and shared apartments.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Investors targeting the student rental yield." },
      { factor: "Rental Demand", read: "Peaks in Aug/Sept and Jan (Semester starts)." },
      { factor: "Price Drivers", read: "Tram proximity and ease of access to universities." },
      { factor: "Liquidity", read: "Moderate." }
    ],

    rentalAnalysisPoints: ["Studios are the most lucrative asset class here.", "Furnished units rent 20% faster to students.", "Professors prefer 2-beds in nearby Barsha Heights."],
    salesAnalysisPoints: ["Prices track the Al Sufouh average.", "Stable asset class due to education sector resilience."],
    investorTip: "Buy a studio in 'Cordoba Residence' or 'Media City' towers. You will never lack a tenant.",

    connectivity: {
      airport: { name: "DXB Intl", km: "28 km", mins: "25 mins" },
      school: { name: "Choueifat", km: "1 km", mins: "2 mins" },
      tourist: { name: "Palm Jumeirah", km: "1 km", mins: "2 mins" },
      metro: { name: "DIC Metro", km: "1 km", mins: "5 mins" },
      mall: { name: "Marina Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Knowledge Park", km: "0 km", mins: "0 mins" },
      hospital: { name: "Mediclinic", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Stability", archetype: "The Academic Investor", motivation: "Renting to students/faculty guarantees 9-month minimum leases." }
  },

  // --- DUBAI: DUBAI LAND RESIDENCE COMPLEX (DLRC) ---
  {
    id: "dlrc",
    name: "Dubai Land Residence Complex",
    emirate: "Dubai",
    category: "Budget / High Yield",
    
    roi: "8.5%",
    avgPrice: "AED 750k (1-Bed)",
    imageColor: "bg-orange-500", // Emerging/Sand
    
    masterDeveloper: "Dubai Properties",
    location: "Al Ain Road / Emirates Road",
    totalArea: "Master Planned Suburb",
    towers: "Mid-rise (G+10)",
    completion: "Developing / Active",
    privateBeach: "No",

    highlights: [
      "One of the fastest-growing affordable freehold communities in 2025.",
      "Strategically located near Dubai Outlet Mall and Silicon Oasis.",
      "Massive new supply of modern, affordable apartments.",
      "Expected to benefit heavily from the new Blue Line Metro expansion."
    ],

    amenities: [
      "Dubai Outlet Mall (Shopping)", "Al Habtoor Polo Resort (Leisure)", "GEMS Winchester School (Education)", "The Villa (Neighbor)", "Community Parks (Nature)", "Skycourts (Retail)"
    ],

    supplyStats: { totalUnits: "High Growth", handedOver: "50%", underConstruction: "50%", nextDelivery: "Q3 2026 (Samana/London Gate)" },
    
    transport: {
      metro: { name: "Blue Line (Planned)", mins: "Future", status: "Approved" },
      roadAccess: ["Dubai-Al Ain Rd", "Emirates Rd"],
      walkability: "Moderate (Improving)",
      cycling: "Desert Tracks"
    },

    aiVerdict: {
      title: "The Next Silicon Oasis",
      summary: "DLRC is following the trajectory of Silicon Oasis. Prices are currently low (AED 800/sq.ft), but with the Metro Blue Line confirmed, capital appreciation is inevitable. It is a top pick for sub-1M AED investors."
    },

    priceTrend: { "2023": "AED 550k", "2024": "AED 650k", "2025": "AED 750k", "2026": "AED 850k" },
    demandSignals: { rentalDemand: "High (Value)", resaleLiquidity: "High (Volume)", tenantProfile: "New Residents & Teachers" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 8.5, appreciation: 8.5, liquidity: 7.5, risk: 4.5, lifestyle: 6.0 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 42k" }, 
      oneBed: { roi: "8.5%", rent: "AED 60k" }, 
      twoBed: { roi: "8.0%", rent: "AED 85k" } 
    },
    shortTermScore: 4.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "60%", tenantType: "Budget" },
    
    futureUpgrades: [{ name: "Metro Blue Line", status: "Approved" }, { name: "New Schools", status: "Construction" }],
    description: "DLRC (Dubai Land Residence Complex) is designed as a self-contained community. It sits adjacent to 'The Villa' and 'Silicon Oasis'. The area is seeing a construction boom with developers like Samana, London Gate, and Taraf launching modern, amenity-rich buildings.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "First-time buyers and yield-hungry investors." },
      { factor: "Rental Demand", read: "Surging as tenants are priced out of inner city areas." },
      { factor: "Price Drivers", read: "The Metro announcement is the #1 catalyst." },
      { factor: "Liquidity", read: "High for off-plan; Moderate for resale." }
    ],

    rentalAnalysisPoints: ["Studios rent for AED 38k-45k.", "1-Beds offer great value at AED 55k-65k.", "New buildings with pools/gyms rent 15% higher than older Skycourts units."],
    salesAnalysisPoints: ["Price per sq.ft is still under AED 900.", "Early investors have seen 20% gains in the last 18 months."],
    investorTip: "Buy in a new launch near the Al Ain Road entrance. Accessibility will drive future resale value.",

    connectivity: {
      airport: { name: "DXB Intl", km: "20 km", mins: "20 mins" },
      school: { name: "GEMS Winchester", km: "1 km", mins: "3 mins" },
      tourist: { name: "Global Village", km: "8 km", mins: "10 mins" },
      metro: { name: "DSO (Current)", km: "5 km", mins: "8 mins" },
      mall: { name: "Outlet Mall", km: "2 km", mins: "5 mins" },
      business: { name: "DSO HQ", km: "5 km", mins: "8 mins" },
      hospital: { name: "Fakeeh Univ", km: "3 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Future Growth", archetype: "The Speculator", motivation: "Buying low before the Metro arrives." }
  },

  // --- DUBAI: DUBAI MARINA (The Waterfront Icon) ---
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    emirate: "Dubai",
    category: "Waterfront / Prime",
    
    roi: "6.5%",
    avgPrice: "AED 2.2M (1-Bed)",
    imageColor: "bg-blue-500", // Water/Sky
    
    masterDeveloper: "Emaar",
    location: "Coastline / Sheikh Zayed Rd",
    totalArea: "Largest Man-made Marina",
    towers: "High-rise Skyscrapers",
    completion: "Developed / Renovating",
    privateBeach: "No (JBR Beach Walking)",

    highlights: [
      "The world's largest man-made marina and Dubai's most popular expat community.",
      "Unmatched lifestyle with 7km of marina promenade and direct beach access.",
      "Highest volume of transactions in the luxury apartment segment.",
      "Home to iconic towers like Cayan (Twist) and Princess Tower."
    ],

    amenities: [
      "Marina Mall (Shopping)", "Pier 7 (Dining)", "JBR Beach (Leisure)", "Skydive Dubai (Adventure)", "Yacht Club (Leisure)", "Metro & Tram (Transport)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "98%", underConstruction: "2% (Infill)", nextDelivery: "Marina Shores (Emaar)" },
    
    transport: {
      metro: { name: "Sobha / DMCC", mins: "Direct", status: "Active" },
      roadAccess: ["Sheikh Zayed Rd"],
      walkability: "High (Promenade)",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Liquid Asset",
      summary: "Dubai Marina is the most liquid real estate market in the Middle East. It is the first place new expats look to rent. While buildings vary in age, the location ensures perpetual demand."
    },

    priceTrend: { "2023": "AED 1.5M", "2024": "AED 1.8M", "2025": "AED 2.1M", "2026": "AED 2.4M" },
    demandSignals: { rentalDemand: "Massive", resaleLiquidity: "Very High", tenantProfile: "Western Expats & Singles" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.5, appreciation: 7.0, liquidity: 10.0, risk: 2.0, lifestyle: 9.8 },
    overallScore: 8.8,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 90k" }, 
      oneBed: { roi: "6.5%", rent: "AED 135k" }, 
      twoBed: { roi: "6.0%", rent: "AED 210k" } 
    },
    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 850", occupancy: "90%", tenantType: "Tourists" },
    
    futureUpgrades: [{ name: "Marina Mall Renovation", status: "Planned" }],
    description: "Dubai Marina is a canal city carved along a 3km stretch of Persian Gulf shoreline. It creates a riviera-style community with towering skyscrapers, luxury yachts, and al fresco dining. It is the heartbeat of 'New Dubai'.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Global investors. It is the default 'first investment' for international buyers." },
      { factor: "Rental Demand", read: "Never stops. Vacancy is purely frictional." },
      { factor: "Price Drivers", read: "Marina views vs Sea views. Emaar buildings command a 20% premium." },
      { factor: "Liquidity", read: "Highest in Dubai. You can cash out in weeks." }
    ],

    rentalAnalysisPoints: ["Rents have surged 20% post-2023.", "Short-term rentals (Airbnb) are extremely lucrative here.", "Renovated units in older towers (e.g., Marina Diamonds) offer high ROI potential."],
    salesAnalysisPoints: ["Prices vary wildly from AED 1,200 psf (older) to AED 4,000 psf (branded).", "Emaar 6 Towers (Original 6) remain the gold standard for quality."],
    investorTip: "Buy a renovated unit in a 'B-grade' tower for yield, or an Emaar unit for capital preservation.",

    connectivity: {
      airport: { name: "DXB Intl", km: "30 km", mins: "25 mins" },
      school: { name: "Emirates Intl", km: "5 km", mins: "10 mins" },
      tourist: { name: "JBR Beach", km: "0.5 km", mins: "5 mins" },
      metro: { name: "Sobha Realty", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Marina Mall", km: "0 km", mins: "0 mins" },
      business: { name: "Media City", km: "2 km", mins: "5 mins" },
      hospital: { name: "Marina Medical", km: "0 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Lifestyle", archetype: "The Socialite", motivation: "Living where the action is. View of yachts and skyscrapers." }
  },

  // --- DUBAI: DUBAI MEDIA CITY (Creative Hub) ---
  {
    id: "dubai-media-city",
    name: "Dubai Media City",
    emirate: "Dubai",
    category: "Commercial / Creative",
    
    roi: "6.5%",
    avgPrice: "AED 2.1M (Apt)",
    imageColor: "bg-cyan-800", // Media/Tech
    
    masterDeveloper: "Tecom Group",
    location: "Al Sufouh / Marina Edge",
    totalArea: "Free Zone Media Hub",
    towers: "High-rise Office & Residential",
    completion: "Mature",
    privateBeach: "No (Barasti nearby)",

    highlights: [
      "The regional headquarters for global media giants (CNN, BBC, MBC).",
      "Famous for its Amphitheatre concerts and vibrant nightlife (Media One Hotel).",
      "Limited but high-demand residential stock (e.g., Cordoba Residence).",
      "Excellent Tram connectivity."
    ],

    amenities: [
      "Media One Hotel (Nightlife)", "Radisson Blu (Hospitality)", "Amphitheatre (Events)", "Palm Jumeirah Tram (Transport)", "Costigan's (Dining)", "American University (Education)"
    ],

    supplyStats: { totalUnits: "Very Limited", handedOver: "95%", underConstruction: "5%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Nakheel / DIC", mins: "Tram Link", status: "Active" },
      roadAccess: ["Sheikh Zayed Rd", "King Salman St"],
      walkability: "High (Campus)",
      cycling: "Tram Tracks"
    },

    aiVerdict: {
      title: "The Media Mogul",
      summary: "Media City is primarily a workspace, but residential units here are 'gold dust' for landlords. Tenants are typically long-term media professionals who want to walk to work."
    },

    priceTrend: { "2023": "AED 1.8M", "2024": "AED 1.95M", "2025": "AED 2.1M", "2026": "AED 2.25M" },
    demandSignals: { rentalDemand: "High (Steady)", resaleLiquidity: "Moderate", tenantProfile: "Media Execs & Students" },
    ownership: { type: "Freehold (Select)", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.5, appreciation: 5.0, liquidity: 6.0, risk: 3.0, lifestyle: 8.5 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 80k" }, 
      oneBed: { roi: "6.5%", rent: "AED 120k" }, 
      twoBed: { roi: "6.0%", rent: "AED 170k" } 
    },
    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "75%", tenantType: "Business" },
    
    futureUpgrades: [{ name: "Innovation Hub", status: "Active" }],
    description: "Dubai Media City is the creative heart of the city. While mostly commercial, the residential pockets offer a unique 'campus' lifestyle. It is greener and quieter than Marina but just as connected.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Investors seeking corporate tenants." },
      { factor: "Rental Demand", read: "Driven by AUD students and Media City staff." },
      { factor: "Price Drivers", read: "Scarcity. Very few residential towers exist here." },
      { factor: "Liquidity", read: "Moderate." }
    ],

    rentalAnalysisPoints: ["Rents are stable.", "Demand peaks in September (University intake).", "Tenants stay for job duration (3-5 years)."],
    salesAnalysisPoints: ["Price per sq.ft is reasonable compared to Marina.", "Older buildings offer larger layouts."],
    investorTip: "Target units in 'Cordoba Residence' if available. They are perpetually full.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "Choueifat", km: "2 km", mins: "5 mins" },
      tourist: { name: "Marina Walk", km: "1 km", mins: "2 mins" },
      metro: { name: "Nakheel", km: "1 km", mins: "3 mins" },
      mall: { name: "Marina Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Media City", km: "0 km", mins: "0 mins" },
      hospital: { name: "Saudi German", km: "3 km", mins: "6 mins" }
    },
    buyerPsychology: { trigger: "Work-Life Balance", archetype: "The Professional", motivation: "Rolling out of bed and into the office." }
  },

  // --- DUBAI: DUBAI PEARL (The Future Landmark) ---
  {
    id: "dubai-pearl",
    name: "Dubai Pearl (Moon Resort Site)",
    emirate: "Dubai",
    category: "Speculative / Mega Project",
    
    roi: "N/A (Project Stage)",
    avgPrice: "N/A",
    imageColor: "bg-gray-800", // Futuristic/Moon
    
    masterDeveloper: "Moon World Resorts (Proposed)",
    location: "Al Sufouh (Entrance to Palm)",
    totalArea: "Prime Plot",
    towers: "Proposed Moon Sphere",
    completion: "Demolished / Planning",
    privateBeach: "N/A",

    highlights: [
      "Former site of the Dubai Pearl (Demolished in 2023).",
      "Proposed location for the $5 Billion 'Moon Resort' mega-project.",
      "The most prime undeveloped plot of land in 'New Dubai'.",
      "Located at the gateway to Palm Jumeirah."
    ],

    amenities: [
      "Moon Surface Simulation (Planned)", "Space Tourism Experience (Planned)", "Sky Villas (Planned)", "Casino (Rumored)", "0-Gravity Chambers (Planned)", "Lunar Colony (Planned)"
    ],

    supplyStats: { totalUnits: "Planned 4,000 Suites", handedOver: "0%", underConstruction: "0% (Concept)", nextDelivery: "2030+" },
    
    transport: {
      metro: { name: "Internet City", mins: "Nearby", status: "Active" },
      roadAccess: ["Al Sufouh Rd", "SZR"],
      walkability: "Future Link to Palm",
      cycling: "Planned"
    },

    aiVerdict: {
      title: "The Moonshot",
      summary: "This is a watchlist item. The Dubai Pearl site is currently a prime plot of sand. If the 'Moon Resort' goes ahead, it will redefine Dubai tourism and skyrocket values in adjacent Al Sufouh and Media City towers."
    },

    priceTrend: { "2023": "Demolition", "2024": "Planning", "2025": "Proposal", "2026": "Launch?" },
    demandSignals: { rentalDemand: "N/A", resaleLiquidity: "N/A", tenantProfile: "Future Tourists" },
    ownership: { type: "Freehold (Projected)", eligibleFor: ["Global Investors"], minDownPayment: "N/A" },
    scores: { cashFlow: 0, appreciation: 10.0, liquidity: 0, risk: 9.0, lifestyle: 10.0 }, // Speculative
    overallScore: 6.0,

    unitEconomics: { studio: { roi: "N/A", rent: "N/A" }, oneBed: { roi: "N/A", rent: "N/A" }, twoBed: { roi: "N/A", rent: "N/A" } },
    shortTermScore: 10.0, // Future Potential
    shortTermRental: { allowed: true, avgDailyRate: "AED 3,000+ (Proj)", occupancy: "N/A", tenantType: "Space Tourists" },
    
    futureUpgrades: [{ name: "Moon Resort Launch", status: "Pending Approval" }],
    description: "The Dubai Pearl site is legendary for its stalled past, but its future is intergalactic. The proposed 'Moon Resort' aims to build a 224-meter sphere offering lunar surface simulations. It is the most anticipated 'megastructure' since the Burj Khalifa.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "N/A" },
      { factor: "Rental Demand", read: "N/A" },
      { factor: "Price Drivers", read: "Speculation on the project launch." },
      { factor: "Liquidity", read: "N/A" }
    ],

    rentalAnalysisPoints: ["N/A"],
    salesAnalysisPoints: ["If launched, 'Sky Villas' inside the Moon will likely trade at AED 10,000+ psf."],
    investorTip: "Watch this space. When sales launch, get in early. It will be a global sell-out event.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "N/A", km: "--", mins: "--" },
      tourist: { name: "Palm Jumeirah", km: "1 km", mins: "2 mins" },
      metro: { name: "DIC", km: "1 km", mins: "5 mins" },
      mall: { name: "Nakheel Mall", km: "2 km", mins: "5 mins" },
      business: { name: "Media City", km: "0.5 km", mins: "2 mins" },
      hospital: { name: "Saudi German", km: "3 km", mins: "6 mins" }
    },
    buyerPsychology: { trigger: "Hype", archetype: "The Futurist", motivation: "Owning a property inside a replica of the Moon." }
  },

  // --- DUBAI: DUBAI PRODUCTION CITY (IMPZ) ---
  {
    id: "dubai-production-city",
    name: "Dubai Production City (IMPZ)",
    emirate: "Dubai",
    category: "Budget / High Yield",
    
    roi: "8.8%",
    avgPrice: "AED 480k (Studio)",
    imageColor: "bg-zinc-600", // Industrial/Media
    
    masterDeveloper: "Tecom Group",
    location: "Sheikh Mohammed Bin Zayed Rd",
    totalArea: "Media Production Zone",
    towers: "Mid-rise Affordable (Lakeside/Midtown)",
    completion: "Developed / Active",
    privateBeach: "No",

    highlights: [
      "A top-tier affordable housing district offering high rental yields.",
      "Home to City Centre Me'aisem and major media production studios.",
      "Popular with mid-income professionals working in Media City and Jebel Ali.",
      "New quality supply from Deyaar (Midtown) has revitalized the area."
    ],

    amenities: [
      "City Centre Me'aisem (Shopping)", "Midtown Central Park (Leisure)", "Cricket Stadium (Sport - Nearby)", "Carrefour (Retail)", "Aloft Me'aisem (Hotel)", "Kids Zone (Family)"
    ],

    supplyStats: { totalUnits: "Growing", handedOver: "80%", underConstruction: "20%", nextDelivery: "Q4 2025 (Deyaar Projects)" },
    
    transport: {
      metro: { name: "JGE (Planned)", mins: "Bus Link", status: "Bus F34/F38" },
      roadAccess: ["E311", "Al Fay Rd"],
      walkability: "Moderate (Within Midtown)",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Yield Warrior",
      summary: "IMPZ is a recession-proof market. It offers essential housing at unbeatable prices (AED 35k rent). Investors love it for the 8-9% yields and high occupancy from the workforce."
    },

    priceTrend: { "2023": "AED 350k", "2024": "AED 420k", "2025": "AED 480k", "2026": "AED 530k" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High (Volume)", tenantProfile: "Media Tech & Services" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 9.0, appreciation: 6.0, liquidity: 7.5, risk: 3.5, lifestyle: 6.0 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 38k" }, 
      oneBed: { roi: "8.5%", rent: "AED 55k" }, 
      twoBed: { roi: "8.0%", rent: "AED 75k" } 
    },
    shortTermScore: 3.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 200", occupancy: "60%", tenantType: "Budget" },
    
    futureUpgrades: [{ name: "Midtown Expansion", status: "Active" }],
    description: "Dubai Production City (formerly IMPZ) is a mixed-use freehold community. It is known for the 'Midtown' development by Deyaar, which brought a family-friendly, gated feel to the area. It is highly accessible via E311, avoiding much of the Hessa Street traffic.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Value investors and first-time homeowners." },
      { factor: "Rental Demand", read: "Driven by affordability. It is cheaper than Sports City and JVC." },
      { factor: "Price Drivers", read: "New retail and community amenities in Midtown." },
      { factor: "Liquidity", read: "Good for units under AED 800k." }
    ],

    rentalAnalysisPoints: ["Studios are the volume driver, renting instantly.", "1-Beds in Midtown command AED 55k-60k.", "Older towers (Lakeside) offer cheaper entry but higher maintenance."],
    salesAnalysisPoints: ["Capital appreciation is steady (5-7% annually).", "Midtown resales are trading at a premium to launch price."],
    investorTip: "Stick to 'Midtown' (Deyaar). The build quality and community feel ensure better tenant retention than older standalone towers.",

    connectivity: {
      airport: { name: "DWC Airport", km: "20 km", mins: "20 mins" },
      school: { name: "Sunmarke", km: "5 km", mins: "8 mins" },
      tourist: { name: "Global Village", km: "10 km", mins: "12 mins" },
      metro: { name: "Furjan", km: "8 km", mins: "15 mins" },
      mall: { name: "Me'aisem", km: "0.5 km", mins: "2 mins" },
      business: { name: "Media Prod.", km: "0 km", mins: "0 mins" },
      hospital: { name: "Mediclinic", km: "5 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Security", archetype: "The Risk-Averse", motivation: "Low entry price, high rental coverage." }
  },

  // --- DUBAI: DUBAI SCIENCE PARK (DSP) ---
  {
    id: "dubai-science-park",
    name: "Dubai Science Park",
    emirate: "Dubai",
    category: "Science / Residential Hub",
    
    roi: "7.8%",
    avgPrice: "AED 950k (1-Bed)",
    imageColor: "bg-teal-600", // Science/Innovation
    
    masterDeveloper: "Tecom Group",
    location: "Al Barsha South / Umm Suqeim",
    totalArea: "Science Free Zone",
    towers: "High-rise (Binghatti/Bella Rose)",
    completion: "Developing Rapidly",
    privateBeach: "No",

    highlights: [
      "A dedicated science and healthcare free zone, now a residential hotspot.",
      "Home to Neuro Spinal Hospital and Genesis Healthcare.",
      "Exploding with new off-plan launches from Binghatti and Empire.",
      "Located directly on Umm Suqeim Road for easy access."
    ],

    amenities: [
      "Neuro Spinal Hospital (Healthcare)", "My City Centre (Retail)", "Safa Community School (Education)", "Holiday Inn (Hospitality)", "Butterfly Garden (Nearby)", "Science Labs (Business)"
    ],

    supplyStats: { totalUnits: "Booming", handedOver: "60%", underConstruction: "40%", nextDelivery: "Q2 2026 (Binghatti Hills)" },
    
    transport: {
      metro: { name: "Blue Line (Approved)", mins: "Future Station", status: "Planned" },
      roadAccess: ["Umm Suqeim St", "Al Khail Rd"],
      walkability: "Moderate",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Smart Choice",
      summary: "DSP is the 'smarter' neighbor to Arjan. It shares the same location benefits (Metro Blue Line potential) but has a captive audience of high-paid doctors and scientists working in the free zone."
    },

    priceTrend: { "2023": "AED 750k", "2024": "AED 850k", "2025": "AED 950k", "2026": "AED 1.1M" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High", tenantProfile: "Doctors & Scientists" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 8.0, appreciation: 8.2, liquidity: 7.8, risk: 4.0, lifestyle: 7.0 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "8.2%", rent: "AED 55k" }, 
      oneBed: { roi: "7.8%", rent: "AED 80k" }, 
      twoBed: { roi: "7.2%", rent: "AED 110k" } 
    },
    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "70%", tenantType: "Medical Tourism" },
    
    futureUpgrades: [{ name: "Metro Station", status: "Approved" }, { name: "New Lab Complex", status: "Construction" }],
    description: "Dubai Science Park is bridging the gap between work and life. It hosts major pharma companies and hospitals. The residential towers here (like Bella Rose, Mont Rose) are modern and affordable, attracting the educated workforce of the park.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Investors targeting the medical workforce." },
      { factor: "Rental Demand", read: "High stability. Medical staff are reliable, long-term tenants." },
      { factor: "Price Drivers", read: "Metro Blue Line announcement." },
      { factor: "Liquidity", read: "High." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 75k-85k.", "Demand is driven by the 'walk-to-lab' convenience.", "New Binghatti towers will set a new rental benchmark."],
    salesAnalysisPoints: ["Prices have risen 15% in 2025.", "Binghatti Hills is the volume driver for sales."],
    investorTip: "Buy near the hospital cluster. Doctors value proximity and pay on time.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "22 mins" },
      school: { name: "Safa Community", km: "1 km", mins: "3 mins" },
      tourist: { name: "Miracle Garden", km: "1 km", mins: "3 mins" },
      metro: { name: "MOE", km: "10 km", mins: "12 mins" },
      mall: { name: "My City Centre", km: "0.5 km", mins: "2 mins" },
      business: { name: "Science HQ", km: "0 km", mins: "0 mins" },
      hospital: { name: "Neuro Spinal", km: "0 km", mins: "1 min" }
    },
    buyerPsychology: { trigger: "Logic", archetype: "The Analyst", motivation: "Investing in a sector (Healthcare/Science) that is recession-resistant." }
  },

  // --- DUBAI: DUBAI SILICON OASIS (DSO) ---
  {
    id: "dubai-silicon-oasis",
    name: "Dubai Silicon Oasis (DSO)",
    emirate: "Dubai",
    category: "Tech / Affordable / Family",
    
    roi: "8.5%",
    avgPrice: "AED 650k (1-Bed)",
    imageColor: "bg-blue-500", // Tech/Silicon
    
    masterDeveloper: "DSOA (Govt)",
    location: "Dubai-Al Ain Road / E311",
    totalArea: "Tech City",
    towers: "Mid-to-High Rise",
    completion: "Mature / Expansion",
    privateBeach: "No (North Park Lake)",

    highlights: [
      "A government-owned technology free zone and residential community.",
      "Home to the Dubai Digital Park and Rochester Institute of Technology (RIT).",
      "One of the most affordable freehold areas with high occupancy.",
      "Massive beneficiary of the upcoming Blue Line Metro."
    ],

    amenities: [
      "Silicon Central Mall (Shopping)", "North Park (Leisure)", "RIT Dubai (Education)", "Dubai Digital Park (Business)", "Fakeeh University Hospital (Healthcare)", "Tennis/Football Hubs (Sport)"
    ],

    supplyStats: { totalUnits: "High Volume", handedOver: "90%", underConstruction: "10%", nextDelivery: "Tameer Projects" },
    
    transport: {
      metro: { name: "Blue Line (Approved)", mins: "Future Hub", status: "Planned" },
      roadAccess: ["Al Ain Rd", "E311"],
      walkability: "High (Digital Park)",
      cycling: "Dedicated Lanes"
    },

    aiVerdict: {
      title: "The Smart City",
      summary: "DSO is the 'Silicon Valley' of Dubai. It is a complete city with its own mall, university, and hospital. The Metro Blue Line will connect it directly to Downtown, likely causing a 20-30% price surge by 2029."
    },

    priceTrend: { "2023": "AED 450k", "2024": "AED 520k", "2025": "AED 650k", "2026": "AED 750k" },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Techies & Students" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 9.0, appreciation: 8.5, liquidity: 8.0, risk: 3.0, lifestyle: 7.5 },
    overallScore: 8.4,

    unitEconomics: { 
      studio: { roi: "9.0%", rent: "AED 45k" }, 
      oneBed: { roi: "8.5%", rent: "AED 65k" }, 
      twoBed: { roi: "8.0%", rent: "AED 90k" } 
    },
    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 300", occupancy: "70%", tenantType: "Students/Tech" },
    
    futureUpgrades: [{ name: "Metro Station", status: "Approved" }, { name: "Smart City Upgrades", status: "Ongoing" }],
    description: "Dubai Silicon Oasis is a futuristic community. It is fully integrated with smart city technologies. The area is popular with students from Academic City and tech professionals. It offers a suburban lifestyle with urban amenities at a budget price.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Value investors betting on the Metro upgrade." },
      { factor: "Rental Demand", read: "Consistent. Students and young families keep vacancy low." },
      { factor: "Price Drivers", read: "The Metro Blue Line is the single biggest factor." },
      { factor: "Liquidity", read: "High for units under AED 800k." }
    ],

    rentalAnalysisPoints: ["Rents have increased 15% due to the influx of new tech companies.", "Silicon Central Mall has boosted the area's lifestyle appeal.", "1-Beds are the sweet spot for rental yield."],
    salesAnalysisPoints: ["Prices are still below the Dubai average, offering room for growth.", "Binghatti and Tameer towers are popular resale assets."],
    investorTip: "Buy now. DSO is currently undervalued relative to the confirmed infrastructure upgrades coming in 2029.",

    connectivity: {
      airport: { name: "DXB Intl", km: "15 km", mins: "15 mins" },
      school: { name: "GEMS Wellington", km: "1 km", mins: "3 mins" },
      tourist: { name: "Global Village", km: "10 km", mins: "12 mins" },
      metro: { name: "Rashidiya", km: "10 km", mins: "15 mins" },
      mall: { name: "Silicon Central", km: "1 km", mins: "2 mins" },
      business: { name: "DDP", km: "0 km", mins: "0 mins" },
      hospital: { name: "Fakeeh", km: "0.5 km", mins: "1 min" }
    },
    buyerPsychology: { trigger: "Potential", archetype: "The Strategic Planner", motivation: "Buying infrastructure-linked growth at a discount." }
  },

  // --- DUBAI: DUBAI SOUTH (The Aviation Capital) ---
  {
    id: "dubai-south",
    name: "Dubai South (Emaar South / Residential)",
    emirate: "Dubai",
    category: "Future City / Aviation",
    
    roi: "6.5%",
    avgPrice: "AED 1.2M (Townhouse)",
    imageColor: "bg-sky-700", // Aviation/Future
    
    masterDeveloper: "Dubai South / Emaar",
    location: "Next to Al Maktoum Airport (DWC)",
    totalArea: "145 Sq. Km (City Size)",
    towers: "Low-rise & Villas",
    completion: "Developing",
    privateBeach: "No (Crystal Lagoon in South Bay)",

    highlights: [
      "The home of Al Maktoum International Airport (DWC), set to be the world's largest.",
      "Site of Expo City Dubai.",
      "Offers the most affordable golf course villas in Dubai (Emaar South).",
      "Massive government focus for Dubai 2040 Urban Plan."
    ],

    amenities: [
      "Al Maktoum Airport (Transport)", "Expo City (Leisure)", "Emaar South Golf (Sport)", "South Bay Lagoon (Leisure)", "Logistics District (Business)", "Motiongate (Theme Park)"
    ],

    supplyStats: { totalUnits: "Massive Pipeline", handedOver: "30%", underConstruction: "70%", nextDelivery: "Q3 2025 (South Bay)" },
    
    transport: {
      metro: { name: "Expo 2020", mins: "10 mins Drive", status: "Active" },
      roadAccess: ["Emirates Rd", "Expo Rd"],
      walkability: "High (Within Emaar South)",
      cycling: "Airport Loop"
    },

    aiVerdict: {
      title: "The 2040 Bet",
      summary: "Dubai South is the long game. As DWC Airport expands to handle 260 million passengers, this area will become the new center of gravity. Prices are currently entry-level but have 10-year 2x potential."
    },

    priceTrend: { "2023": "AED 1.0M", "2024": "AED 1.15M", "2025": "AED 1.25M", "2026": "AED 1.4M" },
    demandSignals: { rentalDemand: "Moderate (Growing)", resaleLiquidity: "Moderate", tenantProfile: "Airport Staff & Logistics" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.5, appreciation: 9.5, liquidity: 6.0, risk: 4.0, lifestyle: 6.5 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 35k" }, 
      oneBed: { roi: "6.5%", rent: "AED 50k" }, 
      twoBed: { roi: "6.0%", rent: "AED 75k" } 
    },
    shortTermScore: 3.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 250", occupancy: "55%", tenantType: "Airport Transit" },
    
    futureUpgrades: [{ name: "DWC Expansion Phase 2", status: "Approved" }, { name: "Purple Line Metro", status: "Proposed" }],
    description: "Dubai South is a purpose-built aerotropolis. It is divided into residential (The Pulse, Emaar South) and commercial zones. Emaar South offers golf-course living at a fraction of the price of Dubai Hills. South Bay adds a lagoon element to the mix.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Long-term investors and aviation professionals." },
      { factor: "Rental Demand", read: "Growing as Expo City businesses activate." },
      { factor: "Price Drivers", read: "Airport passenger capacity announcements." },
      { factor: "Liquidity", read: "Moderate, but accelerating." }
    ],

    rentalAnalysisPoints: ["2-Bed apartments in The Pulse rent for AED 60k-70k.", "3-Bed Villas in Emaar South rent for AED 100k-120k.", "Rents will spike when DWC passenger operations scale up."],
    salesAnalysisPoints: ["Prices per sq.ft are ~AED 900-1,000.", "South Bay mansions are setting new luxury records for the area."],
    investorTip: "Emaar South villas are the safest bet. Brand + Golf + Airport = Growth.",

    connectivity: {
      airport: { name: "DWC Airport", km: "5 km", mins: "5 mins" },
      school: { name: "Dove Green", km: "15 km", mins: "15 mins" },
      tourist: { name: "Expo City", km: "8 km", mins: "10 mins" },
      metro: { name: "Expo 2020", km: "8 km", mins: "10 mins" },
      mall: { name: "Ibn Battuta", km: "20 km", mins: "20 mins" },
      business: { name: "Logistics City", km: "2 km", mins: "3 mins" },
      hospital: { name: "NMC Royal", km: "15 km", mins: "15 mins" }
    },
    buyerPsychology: { trigger: "Vision", archetype: "The Long-Termist", motivation: "Buying land next to the world's biggest airport before it's built." }
  },

  // --- DUBAI: DUBAI SPORTS CITY (The Active Community) ---
  {
    id: "dubai-sports-city",
    name: "Dubai Sports City",
    emirate: "Dubai",
    category: "Affordable / Active",
    
    roi: "8.2%",
    avgPrice: "AED 600k (1-Bed)",
    imageColor: "bg-green-500", // Sport/Field
    
    masterDeveloper: "Private / DSC",
    location: "Hessa Street / E311",
    totalArea: "Sports Complex",
    towers: "Mid-rise (Elite, Canal Res)",
    completion: "Mature",
    privateBeach: "No",

    highlights: [
      "Home to the Dubai International Cricket Stadium and The Els Club (Golf).",
      "One of the most affordable freehold areas with high rental returns.",
      "Popular with singles and young couples due to gym/sport facilities.",
      "Easy access to Hessa Street (though traffic can be heavy)."
    ],

    amenities: [
      "Intl Cricket Stadium (Sport)", "The Els Club (Golf)", "FitRepublik (Gym)", "Canal Promenade (Leisure)", "Waitrose (Retail)", "Kick School (Football)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "90%", underConstruction: "10%", nextDelivery: "North Point" },
    
    transport: {
      metro: { name: "No Metro", mins: "--", status: "Bus F29" },
      roadAccess: ["Hessa St", "E311"],
      walkability: "Moderate (Canal)",
      cycling: "Sports Tracks"
    },

    aiVerdict: {
      title: "The Active Yield",
      summary: "Sports City is a reliable performer. It isn't the most luxurious, but it delivers consistent 8% yields. The Els Club villas offer a premium pocket within a generally budget-friendly district."
    },

    priceTrend: { "2023": "AED 450k", "2024": "AED 520k", "2025": "AED 600k", "2026": "AED 680k" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "High (Apartments)", tenantProfile: "Young Expats" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 9.0, appreciation: 5.5, liquidity: 8.0, risk: 3.5, lifestyle: 7.5 },
    overallScore: 8.1,

    unitEconomics: { 
      studio: { roi: "8.5%", rent: "AED 40k" }, 
      oneBed: { roi: "8.2%", rent: "AED 58k" }, 
      twoBed: { roi: "7.8%", rent: "AED 80k" } 
    },
    shortTermScore: 5.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 300", occupancy: "65%", tenantType: "Sports Tourists" },
    
    futureUpgrades: [{ name: "North Point Mall", status: "Stalled/Planned" }],
    description: "Dubai Sports City is built for the active. It features stadiums, academies, and gyms integrated into residential clusters. 'Canal Residence West' offers a promenade lifestyle, while 'Victory Heights' offers luxury villa living on the golf course.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Yield investors and budget end-users." },
      { factor: "Rental Demand", read: "Steady. It is a spillover market for those priced out of JVC/Motor City." },
      { factor: "Price Drivers", read: "Affordability. It is one of the cheapest places to buy on Hessa St." },
      { factor: "Liquidity", read: "High." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 55k-60k.", "Golf-view villas rent for AED 250k+.", "Furnished studios are popular with coaches and trainers."],
    salesAnalysisPoints: ["Prices are stable, tracking JVC trends.", "Victory Heights villas have appreciated 25% since 2023."],
    investorTip: "Elite Sports Residence towers offer fully furnished units with proven 8% yields.",

    connectivity: {
      airport: { name: "DXB Intl", km: "25 km", mins: "25 mins" },
      school: { name: "Victory Heights", km: "1 km", mins: "2 mins" },
      tourist: { name: "Cricket Stadium", km: "0 km", mins: "0 mins" },
      metro: { name: "N/A", km: "--", mins: "--" },
      mall: { name: "Me'aisem", km: "3 km", mins: "5 mins" },
      business: { name: "Motor City", km: "2 km", mins: "3 mins" },
      hospital: { name: "Mediclinic", km: "3 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Activity", archetype: "The Sports Fan", motivation: "Living next to the gym and the golf course at a discount." }
  },

  // --- DUBAI: DUBAI WHARF (Culture Village) ---
  {
    id: "dubai-wharf",
    name: "Dubai Wharf",
    emirate: "Dubai",
    category: "Waterfront / Heritage",
    
    roi: "6.8%",
    avgPrice: "AED 1.6M (2-Bed)",
    imageColor: "bg-stone-600", // Modern Heritage
    
    masterDeveloper: "Dubai Properties",
    location: "Culture Village / Creek",
    totalArea: "Mixed-Use Waterfront",
    towers: "Mid-rise (4 Towers)",
    completion: "Ready",
    privateBeach: "No (Creek Promenade)",

    highlights: [
      "A contemporary Arabesque district located on the Dubai Creek bank.",
      "Offers affordable freehold waterfront living compared to Creek Harbour.",
      "Direct access to the Al Jadaf Metro station and Festival City.",
      "Quiet, pedestrian-friendly promenade with retail potential."
    ],

    amenities: [
      "Creek Promenade (Leisure)", "Jameel Arts Centre (Culture)", "Versace Hotel (Dining)", "Metro Station (Transport)", "Community Gyms (Fitness)", "Library (Culture)"
    ],

    supplyStats: { totalUnits: "4 Towers", handedOver: "100%", underConstruction: "0%", nextDelivery: "None" },
    
    transport: {
      metro: { name: "Al Jadaf", mins: "5 mins Walk", status: "Active" },
      roadAccess: ["Al Khail Rd"],
      walkability: "High (Promenade)",
      cycling: "Creek Track"
    },

    aiVerdict: {
      title: "The Undervalued Creek",
      summary: "Dubai Wharf trades at a discount to its neighbor, Dubai Creek Harbour, despite having better Metro access. It is a solid value pick for investors who want freehold waterfront property with ready infrastructure."
    },

    priceTrend: { "2023": "AED 1.3M", "2024": "AED 1.45M", "2025": "AED 1.6M", "2026": "AED 1.75M" },
    demandSignals: { rentalDemand: "Moderate", resaleLiquidity: "Moderate", tenantProfile: "Singles & Artsy Couples" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.8, appreciation: 6.5, liquidity: 6.0, risk: 3.0, lifestyle: 7.5 },
    overallScore: 7.8,

    unitEconomics: { 
      studio: { roi: "7.2%", rent: "AED 60k" }, 
      oneBed: { roi: "6.8%", rent: "AED 90k" }, 
      twoBed: { roi: "6.5%", rent: "AED 130k" } 
    },
    shortTermScore: 6.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "65%", tenantType: "Solo Travelers" },
    
    futureUpgrades: [{ name: "Retail Activation", status: "Ongoing" }],
    description: "Dubai Wharf is a mixed-use development stretching along the banks of the Dubai Creek. It combines modern architecture with traditional wind tower elements. It serves as the residential anchor for Culture Village, offering a calm alternative to the city center.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Value investors and end-users working in Healthcare City/DIFC." },
      { factor: "Rental Demand", read: "Driven by metro convenience and lower rents than Downtown." },
      { factor: "Price Drivers", read: "Waterfront views and future retail activation." },
      { factor: "Liquidity", read: "Moderate." }
    ],

    rentalAnalysisPoints: ["Studios rent for AED 55k-65k.", "2-Beds offer creek views for AED 120k-140k.", "Tenants appreciate the lack of traffic congestion."],
    salesAnalysisPoints: ["Prices are ~AED 1,100 psf, highly competitive for waterfront.", "Potential for growth if the retail promenade fully activates."],
    investorTip: "A safe freehold bet with Metro access. Hard to go wrong at this price point.",

    connectivity: {
      airport: { name: "DXB Intl", km: "6 km", mins: "10 mins" },
      school: { name: "Swiss Scientific", km: "3 km", mins: "5 mins" },
      tourist: { name: "Jameel Arts", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Al Jadaf", km: "0.5 km", mins: "5 mins Walk" },
      mall: { name: "Festival City", km: "2 km", mins: "5 mins" },
      business: { name: "Healthcare City", km: "2 km", mins: "5 mins" },
      hospital: { name: "Latifa", km: "2 km", mins: "5 mins" }
    },
    buyerPsychology: { trigger: "Value & View", archetype: "The Value Investor", motivation: "Freehold creek-front property at a bargain price." }
  },
  // --- DUBAI: EXPO CITY DUBAI (The Future City) ---
  {
    id: "expo-city-dubai",
    name: "Expo City Dubai",
    emirate: "Dubai",
    category: "Future City / Eco-Living",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "6.5% (Projected)",
    avgPrice: "AED 1.9M (Apartment)",
    imageColor: "bg-teal-700", // Sustainability
    
    // 🟢 KEY FACTS
    masterDeveloper: "Expo City Dubai",
    location: "Dubai South / District 2020",
    totalArea: "438 Hectares",
    towers: "Mid-rise (Mangroves / Sky Residences)",
    completion: "Developing (Expo Valley Handover 2026)",
    privateBeach: "No (Surreal Water Feature)",

    // 🟢 HIGHLIGHTS
    highlights: [
      "The legacy site of Expo 2020, repurposed into a '15-minute city' of the future.",
      "Home to the global headquarters of Siemens, Terminus, and DP World.",
      "Features 'Expo Valley', a unique topography with lakes, wadis, and car-free lanes.",
      "Direct Metro access (Red Line) and adjacency to Al Maktoum Airport (DWC)."
    ],

    // 🟢 LIFESTYLE & ATTRACTIONS
    amenities: [
      "Al Wasl Plaza (Iconic Dome)", "Surreal Water Feature (Leisure)", "Expo Mall (Retail - Planned)", "Terra - The Sustainability Pavilion (Culture)", "Rove Expo Hotel (Hospitality)", "Cycling Tracks (Fitness)"
    ],

    // 🟢 SUPPLY PIPELINE
    supplyStats: {
      totalUnits: "Controlled Release",
      handedOver: "20%",
      underConstruction: "80%",
      nextDelivery: "Q1 2026 (Expo Valley)"
    },

    // 🟢 TRANSPORT & CONNECTIVITY
    transport: {
      metro: { name: "Expo 2020", mins: "Direct Access", status: "Active" },
      roadAccess: ["Expo Road", "Sheikh Mohammed Bin Zayed Rd"],
      walkability: "Perfect (100% Pedestrian Friendly)",
      cycling: "City-wide Network"
    },

    aiVerdict: {
      title: "The Visionary's Bet",
      summary: "Expo City is for the long-term investor. It is the anchor of the Dubai 2040 Master Plan. While current yields are modest, capital appreciation will be significant as DWC Airport expands to become the world's largest."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 1.5M", 
      "2024": "AED 1.7M", 
      "2025": "AED 1.9M",
      "2026 (Proj)": "AED 2.1M" 
    },

    demandSignals: { 
      rentalDemand: "Growing (Corporate)", 
      resaleLiquidity: "Moderate", 
      tenantProfile: "Tech & Sustainability Professionals" 
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.0, appreciation: 9.5, liquidity: 6.5, risk: 3.0, lifestyle: 9.5 },
    overallScore: 8.5,

    // 🟢 UNIT ECONOMICS
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.5%", rent: "AED 95k" }, 
      twoBed: { roi: "6.0%", rent: "AED 140k" } 
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "65%", tenantType: "Business Events" },
    
    futureUpgrades: [{ name: "DWC Airport Expansion", status: "Approved" }, { name: "Expo Mall", status: "Planning" }],
    description: "Expo City Dubai is a human-centric smart city. It retains 80% of the Expo 2020 infrastructure. The residential zones (Expo Valley and Mangroves) offer a distinct 'eco-luxury' lifestyle different from anything else in Dubai, focusing on wellness and sustainability.",
    
    // 🟢 PROPERTY MARKET OVERVIEW
    marketReadData: [
      { factor: "Buyer Mix", read: "Eco-conscious end-users and strategic investors betting on the Airport expansion." },
      { factor: "Rental Demand", read: "Driven by the commercial tenants (Siemens, etc.) moving huge workforces to the district." },
      { factor: "Price Drivers", read: "Green credentials (LEED Platinum) and the '15-minute city' concept." },
      { factor: "Liquidity", read: "Off-plan sales are brisk; secondary market is still forming." }
    ],

    rentalAnalysisPoints: [
      "Apartments will command a 'green premium' for lower utility bills.",
      "Short-term rentals will spike during major events at the Exhibition Centre.",
      "Villas in Expo Valley are expected to rent for AED 250k+."
    ],
    salesAnalysisPoints: [
      "Launch prices were AED 1,800/sq.ft, considered fair for the quality.",
      "Capital growth is linked to the 10-year DWC airport timeline."
    ],
    investorTip: "Buy a townhouse in Expo Valley. The scarcity of 'nature-integrated' homes in Dubai makes this a unique asset.",

    connectivity: {
      airport: { name: "DWC Airport", km: "5 km", mins: "8 mins" },
      school: { name: "Dove Green", km: "8 km", mins: "10 mins" },
      tourist: { name: "Al Wasl Plaza", km: "0 km", mins: "0 mins" },
      metro: { name: "Expo 2020", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Expo Mall", km: "0.5 km", mins: "5 mins" },
      business: { name: "Siemens HQ", km: "0.5 km", mins: "5 mins" },
      hospital: { name: "NMC Royal", km: "8 km", mins: "10 mins" }
    },
    buyerPsychology: { trigger: "Future", archetype: "The Eco-Investor", motivation: "Investing in a car-free, sustainable future." }
  },

  // --- DUBAI: DUBAI FESTIVAL CITY (The Integrated Waterfront) ---
  {
    id: "dubai-festival-city",
    name: "Dubai Festival City",
    emirate: "Dubai",
    category: "Family / Retail / Creek",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "6.0%",
    avgPrice: "AED 2.4M",
    imageColor: "bg-indigo-600", // Retail/Night
    
    // 🟢 KEY FACTS
    masterDeveloper: "Al Futtaim Group",
    location: "Dubai Creek (East Bank)",
    totalArea: "Mixed Use Mega-Project",
    towers: "Mid-rise (Marsa) & Low-rise (Al Badia)",
    completion: "Mature / Expanding (Al Badia Terraces)",
    privateBeach: "No (Creek Promenade)",

    highlights: [
      "A fully integrated mega-community anchored by the massive Festival City Mall.",
      "Home to IKEA, ACE, and renowned international schools (Universal American/Deira Intl).",
      "Features 'IMAGINE', a record-breaking laser and water show.",
      "Quiet, traffic-free residential enclaves like Al Badia and Marsa Plaza."
    ],

    amenities: [
      "Festival City Mall (Shopping)", "IKEA (Retail)", "InterContinental (Hotel)", "Al Badia Golf (Greenery)", "Universal American School (Education)", "Festival Bay (Leisure)"
    ],

    supplyStats: { totalUnits: "Stable", handedOver: "95%", underConstruction: "5%", nextDelivery: "Al Badia Terraces" },
    
    transport: {
      metro: { name: "Creek Station", mins: "Water Taxi / Car", status: "Nearby" },
      roadAccess: ["Rebat St", "Nad Al Hamar Rd"],
      walkability: "High (Mall/Promenade)",
      cycling: "Dedicated Tracks"
    },

    aiVerdict: {
      title: "The Self-Sufficient City",
      summary: "Festival City is a 'bubble' of calm. It is a favorite for families who want to be near schools and the airport without the chaos of city traffic. It holds value well due to the Al Futtaim management quality."
    },

    priceTrend: { "2023": "AED 2.1M", "2024": "AED 2.3M", "2025": "AED 2.5M", "2026": "AED 2.7M" },
    demandSignals: { rentalDemand: "High (Stable)", resaleLiquidity: "Moderate", tenantProfile: "Expat Families & Pilots" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 6.0, appreciation: 5.5, liquidity: 6.5, risk: 2.5, lifestyle: 9.0 },
    overallScore: 8.2,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.5%", rent: "AED 95k" }, 
      twoBed: { roi: "6.0%", rent: "AED 140k" } 
    },
    shortTermScore: 6.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "70%", tenantType: "Shopping Tourists" },
    
    futureUpgrades: [{ name: "Mall Expansion", status: "Ongoing" }],
    description: "Dubai Festival City is a landmark destination. It sits on the historic Creek but offers modern luxury. The residential district is separated from the mall by lush greenery and the Al Badia Hill. It is famous for its 'resort-at-home' feeling.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Families prioritizing proximity to top schools like UAS and DIS." },
      { factor: "Rental Demand", read: "Very stable. Tenants often stay for 5-8 years until kids graduate." },
      { factor: "Price Drivers", read: "Community management. The area is impeccably maintained by Al Futtaim." },
      { factor: "Liquidity", read: "Steady. Not a speculative market." }
    ],

    rentalAnalysisPoints: ["Marsa Plaza apartments offer hotel-like living and rent for AED 130k+ (2-bed).", "Al Badia Hillside village offers unique Mediterranean architecture.", "Rents are premium but include access to world-class facilities."],
    salesAnalysisPoints: ["Prices are stable with slow appreciation.", "A safe haven asset rather than a high-growth speculative investment."],
    investorTip: "Buy a 3-bed in Al Badia. It is the perfect family product with zero competition in the area.",

    connectivity: {
      airport: { name: "DXB Intl", km: "3 km", mins: "5 mins" },
      school: { name: "Universal American", km: "1 km", mins: "2 mins" },
      tourist: { name: "IMAGINE Show", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Creek", km: "4 km", mins: "10 mins" },
      mall: { name: "Festival City Mall", km: "0.2 km", mins: "2 mins" },
      business: { name: "Festival Tower", km: "0.5 km", mins: "2 mins" },
      hospital: { name: "Mediclinic", km: "4 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Convenience & Schools", archetype: "The Stable Family", motivation: "Walking the kids to school and the mall." }
  },

  // --- DUBAI: INTERNATIONAL CITY (The Yield Giant) ---
  {
    id: "international-city",
    name: "International City",
    emirate: "Dubai",
    category: "Budget / High Yield",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "9.2%",
    avgPrice: "AED 350k (Studio)",
    imageColor: "bg-red-700", // Dragon Mart/Trade
    
    // 🟢 KEY FACTS
    masterDeveloper: "Nakheel",
    location: "Al Warsan / Mohammed Bin Zayed Rd",
    totalArea: "Massive Themed Clusters",
    towers: "Low-rise (G+3/4) Clusters",
    completion: "Mature / Phase 2 Developing",
    privateBeach: "No",

    highlights: [
      "The undisputed king of rental yields in Dubai (Gross ROI often 9-10%).",
      "Home to Dragon Mart 1 & 2, the largest hub for Chinese products outside China.",
      "Features country-themed clusters (China, England, France, Russia, etc.).",
      "Extremely affordable entry point (Studios from AED 320k)."
    ],

    amenities: [
      "Dragon Mart (Retail)", "Warsan Souk (Shopping)", "Lake District (Nature)", "Pavilion (Retail)", "Union Coop (Grocery)", "Chinese Dining Hub (Food)"
    ],

    supplyStats: { totalUnits: "High Density", handedOver: "95% (Phase 1)", underConstruction: "5% (Warsan)", nextDelivery: "Warsan 4" },
    
    transport: {
      metro: { name: "Blue Line (Planned)", mins: "Future", status: "Approved" },
      roadAccess: ["Ras Al Khor Rd", "E311"],
      walkability: "Moderate (Within Clusters)",
      cycling: "Limited"
    },

    aiVerdict: {
      title: "The Cash Cow",
      summary: "International City is not for luxury seekers; it is a pure financial instrument. It delivers the highest net cash flow in the market. The upcoming Metro Blue Line will likely boost capital values by 20% by 2029."
    },

    priceTrend: { "2023": "AED 280k", "2024": "AED 320k", "2025": "AED 350k", "2026": "AED 380k" },
    demandSignals: { rentalDemand: "Massive", resaleLiquidity: "Very High", tenantProfile: "Single Professionals & Traders" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 9.8, appreciation: 6.0, liquidity: 9.5, risk: 3.5, lifestyle: 5.0 },
    overallScore: 8.0,

    unitEconomics: { 
      studio: { roi: "9.5%", rent: "AED 32k" }, 
      oneBed: { roi: "8.8%", rent: "AED 48k" }, 
      twoBed: { roi: "8.2%", rent: "AED 65k" } 
    },
    shortTermScore: 4.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 180", occupancy: "65%", tenantType: "Traders" },
    
    futureUpgrades: [{ name: "Metro Blue Line Station", status: "Approved" }, { name: "Warsan Masterplan", status: "Active" }],
    description: "International City is a unique, affordable residential district. It is famous for its themed architecture and the Dragon Mart retail complex. While it lacks the polish of New Dubai, it makes up for it with unbeatable affordability and high occupancy rates from the workforce.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Cash investors looking for 9% net returns." },
      { factor: "Rental Demand", read: "Inelastic. It is the cheapest freehold area in the city." },
      { factor: "Price Drivers", read: "The Metro announcement is driving speculative buying in Phase 1." },
      { factor: "Liquidity", read: "Extremely high. Units sell in days." }
    ],

    rentalAnalysisPoints: ["Studios rent for AED 30k-36k.", "1-Beds rent for AED 45k-50k.", "Tenants are price-sensitive but long-term."],
    salesAnalysisPoints: ["Prices are rising from a low base.", "China Cluster units trade at a premium due to proximity to Dragon Mart."],
    investorTip: "Buy a studio in the 'France' or 'Spain' cluster. They are better maintained and command slightly higher rents.",

    connectivity: {
      airport: { name: "DXB Intl", km: "15 km", mins: "15 mins" },
      school: { name: "Kings School", km: "6 km", mins: "10 mins" },
      tourist: { name: "Dragon Mart", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Rashidiya", km: "10 km", mins: "15 mins" },
      mall: { name: "Dragon Mart 2", km: "0.5 km", mins: "2 mins" },
      business: { name: "Warsan", km: "0 km", mins: "0 mins" },
      hospital: { name: "Aster", km: "5 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "ROI", archetype: "The Yield Hunter", motivation: "Maximizing passive income with minimal capital outlay." }
  },

  // --- DUBAI: JEBEL ALI (Downtown & Village) ---
  {
    id: "jebel-ali",
    name: "Jebel Ali (Downtown & Village)",
    emirate: "Dubai",
    category: "Emerging / Connected",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "7.0%",
    avgPrice: "AED 980k (Apt)",
    imageColor: "bg-orange-800", // Industrial/Growth
    
    // 🟢 KEY FACTS
    masterDeveloper: "Nakheel / Azizi / Sub-developers",
    location: "Sheikh Zayed Road (South)",
    totalArea: "Strategic Corridor",
    towers: "High-rise (Downtown) & Villas (Village)",
    completion: "Regenerating",
    privateBeach: "No (JA Resort nearby)",

    highlights: [
      "Downtown Jebel Ali is rapidly developing into a freehold residential hub.",
      "Nakheel's 'Jebel Ali Village' redevelopment has created a luxury villa enclave.",
      "Exceptional connectivity via Sheikh Zayed Road and the Metro (Red Line).",
      "Proximity to the massive JAFZA workplace and Palm Jebel Ali."
    ],

    amenities: [
      "Jebel Ali Recreation Club (Leisure)", "Ibn Battuta Mall (Shopping)", "Festival Plaza (Retail)", "JAFZA (Business)", "Metro Stations (Transport)", "Community Parks (Nature)"
    ],

    supplyStats: { totalUnits: "Growing", handedOver: "40%", underConstruction: "60%", nextDelivery: "Q4 2025 (Azizi Projects)" },
    
    transport: {
      metro: { name: "UAE Exchange / Danube", mins: "Direct Access", status: "Active (Red Line)" },
      roadAccess: ["Sheikh Zayed Rd (E11)"],
      walkability: "Moderate (Improving)",
      cycling: "Planned"
    },

    aiVerdict: {
      title: "The Strategic Pivot",
      summary: "Jebel Ali is transforming from an industrial zone to a residential hotspot. With Palm Jebel Ali reviving the south, property in Downtown Jebel Ali is undervalued. It offers solid 7% yields today with massive growth potential."
    },

    priceTrend: { "2023": "AED 800k", "2024": "AED 900k", "2025": "AED 980k", "2026": "AED 1.1M" },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Moderate", tenantProfile: "JAFZA Execs & Commuters" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },
    scores: { cashFlow: 7.5, appreciation: 8.0, liquidity: 6.5, risk: 4.0, lifestyle: 6.5 },
    overallScore: 7.9,

    unitEconomics: { 
      studio: { roi: "7.5%", rent: "AED 50k" }, 
      oneBed: { roi: "7.0%", rent: "AED 75k" }, 
      twoBed: { roi: "6.5%", rent: "AED 105k" } 
    },
    shortTermScore: 4.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 300", occupancy: "60%", tenantType: "Business" },
    
    futureUpgrades: [{ name: "Palm Jebel Ali Bridge", status: "Planning" }, { name: "Downtown JA Infrastructure", status: "Ongoing" }],
    description: "Jebel Ali is best known for its port, but its residential zones are booming. 'Downtown Jebel Ali' stretches along Sheikh Zayed Road, offering affordable high-rise living. 'Jebel Ali Village' is a revived luxury villa community by Nakheel, offering spacious homes in a historic location.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Investors predicting the 'Palm Jebel Ali Effect'." },
      { factor: "Rental Demand", read: "Driven by the 150,000+ people working in JAFZA and Dubai South." },
      { factor: "Price Drivers", read: "Palm Jebel Ali progress and Metro connectivity." },
      { factor: "Liquidity", read: "Apartments are liquid; Villas are high-demand." }
    ],

    rentalAnalysisPoints: ["1-Beds rent for AED 70k-80k, cheaper than Marina but just 10 mins away.", "Jebel Ali Village villas rent for AED 250k+ (4-bed).", "Sub-letting is common for port staff."],
    salesAnalysisPoints: ["Downtown Jebel Ali apartments are priced at ~AED 900-1,000 psf.", "A massive discount compared to nearby Furjan or Marina."],
    investorTip: "Buy in Downtown Jebel Ali (Azizi/Sub-developers) for appreciation. The Palm Jebel Ali will lift this entire corridor.",

    connectivity: {
      airport: { name: "DWC Airport", km: "15 km", mins: "15 mins" },
      school: { name: "Winchester", km: "3 km", mins: "5 mins" },
      tourist: { name: "Legoland", km: "10 km", mins: "12 mins" },
      metro: { name: "UAE Exchange", km: "0.2 km", mins: "2 mins" },
      mall: { name: "Ibn Battuta", km: "3 km", mins: "5 mins" },
      business: { name: "JAFZA", km: "0 km", mins: "0 mins" },
      hospital: { name: "NMC Royal", km: "5 km", mins: "8 mins" }
    },
    buyerPsychology: { trigger: "Growth", archetype: "The South Investor", motivation: "Positioning for the Dubai South / Palm Jebel Ali boom." }
  },

  // --- DUBAI: JUMEIRAH (1, 2, 3) ---
  {
    id: "jumeirah",
    name: "Jumeirah (1, 2, 3)",
    emirate: "Dubai",
    category: "Ultra-Prime / Beachfront",
    
    // 🟢 REAL MARKET METRICS (2025/26 Data)
    roi: "3.5% (Villas) / 6.0% (Freehold Apts)",
    avgPrice: "AED 15M+ (Villa)",
    imageColor: "bg-blue-400", // Ocean/Luxury
    
    // 🟢 KEY FACTS
    masterDeveloper: "Wasl / Meraas / Private",
    location: "Coastline (North of Marina)",
    totalArea: "Prime Coast",
    towers: "Low-rise (La Mer/MJL) & Villas",
    completion: "Historic / Freehold Pockets",
    privateBeach: "Yes (Public & Private)",

    highlights: [
      "The Beverly Hills of Dubai. The most prestigious address for locals and expats.",
      "Predominantly Leasehold villas (GCC ownership), but contains Freehold jewels like La Mer (Port de La Mer) and Madinat Jumeirah Living (MJL).",
      "Home to the Burj Al Arab, Kite Beach, and Four Seasons.",
      "Low-density, walkable, and beach-focused lifestyle."
    ],

    amenities: [
      "Kite Beach (Leisure)", "Burj Al Arab (Icon)", "Madinat Jumeirah (Dining)", "Four Seasons (Hotel)", "Galleria Mall (Retail)", "La Mer (Leisure)"
    ],

    supplyStats: { totalUnits: "Scarce", handedOver: "90%", underConstruction: "10% (Freehold Enclaves)", nextDelivery: "MJL Phases" },
    
    transport: {
      metro: { name: "No Metro", mins: "--", status: "Car/Bus Dependent" },
      roadAccess: ["Jumeirah Beach Rd", "Al Wasl Rd"],
      walkability: "High (Beach Track)",
      cycling: "Jumeirah Cycle Path"
    },

    aiVerdict: {
      title: "The Forever Address",
      summary: "Jumeirah is the ultimate lifestyle destination. For investment, focus ONLY on the freehold pockets (Port de La Mer / MJL). These offer the Jumeirah address with ownership rights, commanding massive premiums."
    },

    // 🟢 PRICE HISTORY
    priceTrend: { 
      "2023": "AED 12M (Villa)", 
      "2024": "AED 14M (Villa)", 
      "2025": "AED 16M (Villa)",
      "2026 (Proj)": "AED 18M (Villa)" 
    },

    demandSignals: { 
      rentalDemand: "Very High (Luxury)", 
      resaleLiquidity: "High (Freehold)", 
      tenantProfile: "CEOs, Diplomats, Founders" 
    },
    ownership: { type: "Mixed (Leasehold General / Freehold Pockets)", eligibleFor: ["All (MJL/La Mer)"], minDownPayment: "20%" },
    scores: { cashFlow: 4.5, appreciation: 9.0, liquidity: 7.0, risk: 2.0, lifestyle: 10.0 },
    overallScore: 8.9,

    // 🟢 UNIT ECONOMICS (Freehold Apartments - MJL/La Mer)
    unitEconomics: { 
      studio: { roi: "N/A", rent: "N/A" }, 
      oneBed: { roi: "6.0%", rent: "AED 150k" }, 
      twoBed: { roi: "5.5%", rent: "AED 230k" } 
    },

    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 1,200", occupancy: "85%", tenantType: "Beach Luxury" },
    
    futureUpgrades: [{ name: "Jumeirah Beach Revamp", status: "Ongoing" }, { name: "Marsa Al Arab", status: "Opening" }],
    description: "Jumeirah 1, 2, and 3 form the coastal stretch of Dubai. It is characterized by low-rise mansions, quiet streets, and the best beaches in the city. While mostly reserved for GCC nationals, the introduction of freehold enclaves has opened this exclusive zip code to global investors.",
    
    marketReadData: [
      { factor: "Buyer Mix", read: "Ultra-HNWIs buying forever homes. European investors buying holiday apartments." },
      { factor: "Rental Demand", read: "Renters pay a premium for the 'Jumeirah' zip code and beach access." },
      { factor: "Price Drivers", read: "Scarcity. There is no more land to build on." },
      { factor: "Liquidity", read: "Freehold units are highly liquid assets." }
    ],

    rentalAnalysisPoints: [
      "Villas rent for AED 400k (Old) to AED 1M+ (Modern).",
      "MJL 1-beds rent for AED 140k-160k, offering resort living.",
      "Short-term rentals here outperform almost any other district due to beach proximity."
    ],
    salesAnalysisPoints: [
      "Port de La Mer trades at AED 2,200+ psf.",
      "Jumeirah Bay Island (Bulgari) trades at AED 10,000+ psf (The highest in Dubai).",
      "MJL resales have seen 40% appreciation since launch."
    ],
    investorTip: "Buy in 'Madinat Jumeirah Living'. It is the only freehold freehold apartment complex opposite the Burj Al Arab.",

    connectivity: {
      airport: { name: "DXB Intl", km: "15 km", mins: "20 mins" },
      school: { name: "JESS Jumeirah", km: "2 km", mins: "5 mins" },
      tourist: { name: "Burj Al Arab", km: "1 km", mins: "2 mins" },
      metro: { name: "Business Bay", km: "5 km", mins: "10 mins" },
      mall: { name: "Mercato Mall", km: "2 km", mins: "5 mins" },
      business: { name: "DIFC", km: "5 km", mins: "10 mins" },
      hospital: { name: "Emirates Hospital", km: "1 km", mins: "2 mins" }
    },
    buyerPsychology: { trigger: "Prestige", archetype: "The Elite", motivation: "Living in the most famous, established, and affluent coastline in the region." }
  },

  {
  id: "jebel-ali-village",
  name: "Jebel Ali Village",
  emirate: "Dubai",
  category: "Luxury Villas / Redevelopment",

  roi: "5.8%",
  avgPrice: "AED 5.2M (Villa)",
  imageColor: "bg-green-700",

  masterDeveloper: "Nakheel",
  location: "Between Sheikh Zayed Road & JAFZA",
  totalArea: "Villa Master Community",
  towers: "Luxury Villas",
  completion: "Redeveloped 2024+",
  privateBeach: "No",

  highlights: [
    "Historic expat community fully redeveloped by Nakheel.",
    "Family-centric villa enclave with premium infrastructure.",
    "Strong demand from executives working in JAFZA and Dubai South."
  ],

  amenities: [
    "Community Clubhouse",
    "Cycling Tracks",
    "Parks & Playgrounds",
    "Retail Pavilion",
    "Nearby International Schools"
  ],

  supplyStats: {
    totalUnits: "800+ Villas",
    handedOver: "70%",
    underConstruction: "30%",
    nextDelivery: "2026"
  },

  transport: {
    metro: { name: "UAE Exchange", mins: "7 mins", status: "Active (Red Line)" },
    roadAccess: ["Sheikh Zayed Road", "E311"],
    walkability: "Moderate",
    cycling: "Good"
  },

  aiVerdict: {
    title: "Premium South Family Hub",
    summary: "Jebel Ali Village offers luxury suburban villas with appreciation driven by Palm Jebel Ali and JAFZA growth."
  },

  priceTrend: {
    "2023": "AED 3.8M",
    "2024": "AED 4.6M",
    "2025": "AED 5.2M",
    "2026": "AED 5.8M"
  },

  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "Moderate",
    tenantProfile: "Families & Senior Executives"
  },

  ownership: {
    type: "Freehold",
    eligibleFor: ["All Nationalities"],
    minDownPayment: "20%"
  },

  scores: { cashFlow: 6.0, appreciation: 8.0, liquidity: 6.5, risk: 3.0, lifestyle: 8.5 },
  overallScore: 7.9,

  unitEconomics: {
    fourBed: { roi: "5.8%", rent: "AED 300k" },
    fiveBed: { roi: "5.5%", rent: "AED 350k" }
  },

  shortTermScore: 3.5,
  shortTermRental: { allowed: false },

  futureUpgrades: [
    { name: "Palm Jebel Ali Expansion", status: "Ongoing" },
    { name: "Dubai South Logistics Expansion", status: "Ongoing" }
  ],

  description: "Jebel Ali Village is a premium Nakheel villa redevelopment offering family-focused suburban luxury close to Dubai South and Palm Jebel Ali growth corridor.",

  marketReadData: [
    { factor: "Buyer Mix", read: "End-users and executive relocations." },
    { factor: "Rental Demand", read: "Driven by JAFZA workforce expansion." },
    { factor: "Price Drivers", read: "Palm Jebel Ali & infrastructure upgrades." },
    { factor: "Liquidity", read: "Stable but villa transactions take longer." }
  ],

  rentalAnalysisPoints: [
    "4-bed villas rent between AED 280k – 320k.",
    "5-bed villas rent above AED 350k.",
    "Tenants are mostly corporate executives."
  ],

  salesAnalysisPoints: [
    "Modern villas priced AED 1,000–1,200 psf.",
    "Prices rising due to Palm Jebel Ali influence."
  ],

  investorTip: "Target early resale villas before Palm Jebel Ali infrastructure completes.",

  connectivity: {
    airport: { name: "DWC Airport", km: "18 km", mins: "20 mins" },
    school: { name: "The Winchester School", km: "3 km", mins: "5 mins" },
    tourist: { name: "Legoland", km: "12 km", mins: "15 mins" },
    metro: { name: "UAE Exchange", km: "3 km", mins: "7 mins" },
    mall: { name: "Ibn Battuta Mall", km: "5 km", mins: "8 mins" },
    business: { name: "JAFZA", km: "2 km", mins: "3 mins" },
    hospital: { name: "NMC Royal", km: "6 km", mins: "10 mins" }
  },

  buyerPsychology: {
    trigger: "Family Stability",
    archetype: "The Executive Family Investor",
    motivation: "Luxury villa living near business hubs."
  }
},

{
  id: "jumeirah-bay-island",
  name: "Jumeirah Bay Island",
  emirate: "Dubai",
  category: "Ultra Prime Island",

  roi: "3.5%",
  avgPrice: "AED 25M+",
  imageColor: "bg-indigo-400",

  masterDeveloper: "Meraas",
  location: "Jumeirah Coastline",
  totalArea: "Private Island",
  towers: "Luxury Villas & Mansions",
  completion: "Completed",
  privateBeach: "Yes",

  highlights: [
    "Home to Bulgari Resort and Marina.",
    "Ultra exclusive billionaire enclave.",
    "One of Dubai's highest psf price zones."
  ],

  amenities: [
    "Private Marina",
    "Luxury Beach Club",
    "Bulgari Resort",
    "Fine Dining",
    "Yacht Facilities"
  ],

  supplyStats: {
    totalUnits: "Extremely Limited",
    handedOver: "95%",
    underConstruction: "5%",
    nextDelivery: "Rare"
  },

  transport: {
    metro: { name: "Business Bay", mins: "15 mins", status: "Car Only" },
    roadAccess: ["Jumeirah Beach Road"],
    walkability: "High",
    cycling: "Limited"
  },

  aiVerdict: {
    title: "Dubai’s Ultimate Prestige Asset",
    summary: "Investment driven by scarcity and global UHNW demand rather than rental yield."
  },

  priceTrend: {
    "2023": "AED 20M",
    "2024": "AED 23M",
    "2025": "AED 25M",
    "2026": "AED 28M"
  },

  demandSignals: {
    rentalDemand: "Luxury Only",
    resaleLiquidity: "High",
    tenantProfile: "UHNW Individuals"
  },

  ownership: {
    type: "Freehold",
    eligibleFor: ["All Nationalities"],
    minDownPayment: "25%"
  },

  scores: { cashFlow: 3.0, appreciation: 9.5, liquidity: 8.0, risk: 2.0, lifestyle: 10.0 },
  overallScore: 8.8,

  shortTermScore: 9.0,
  shortTermRental: {
    allowed: true,
    avgDailyRate: "AED 8,000+",
    occupancy: "70%",
    tenantType: "Ultra Luxury Tourists"
  },

  futureUpgrades: [{ name: "Luxury Marina Expansion", status: "Planning" }],

  description: "Jumeirah Bay Island is Dubai's most elite residential island, hosting the Bulgari Resort and luxury mansions.",

  marketReadData: [
    { factor: "Buyer Mix", read: "Global billionaires and sovereign wealth investors." },
    { factor: "Rental Demand", read: "Extremely high for ultra luxury seasonal stays." },
    { factor: "Price Drivers", read: "Scarcity and brand luxury." },
    { factor: "Liquidity", read: "Strong in ultra luxury segment." }
  ],

  rentalAnalysisPoints: [
    "Luxury villas command daily rates exceeding AED 8,000.",
    "Seasonal high-net-worth stays dominate rentals."
  ],

  salesAnalysisPoints: [
    "Plots and villas exceed AED 10,000 psf.",
    "Limited supply drives aggressive capital growth."
  ],

  investorTip: "Buy only for long-term prestige capital preservation.",

  connectivity: {
    airport: { name: "DXB Intl", km: "16 km", mins: "20 mins" },
    school: { name: "Jumeirah College", km: "4 km", mins: "8 mins" },
    tourist: { name: "Burj Al Arab", km: "6 km", mins: "10 mins" },
    metro: { name: "Business Bay", km: "7 km", mins: "15 mins" },
    mall: { name: "City Walk", km: "5 km", mins: "10 mins" },
    business: { name: "DIFC", km: "6 km", mins: "12 mins" },
    hospital: { name: "Emirates Hospital", km: "5 km", mins: "10 mins" }
  },

  buyerPsychology: {
    trigger: "Prestige",
    archetype: "The Billionaire Collector",
    motivation: "Owning Dubai’s rarest real estate asset."
  }
},

{
  id: "jbr",
  name: "Jumeirah Beach Residence (JBR)",
  emirate: "Dubai",
  category: "Beachfront Lifestyle / Tourism Hub",

  roi: "6.8%",
  avgPrice: "AED 2.2M (Apt)",
  imageColor: "bg-yellow-400",

  masterDeveloper: "Dubai Properties",
  location: "Dubai Marina Coastline",
  totalArea: "Waterfront Strip",
  towers: "High-Rise Towers",
  completion: "Completed",
  privateBeach: "Public Beach Access",

  highlights: [
    "Dubai’s most famous beachfront promenade lifestyle.",
    "Extremely strong holiday rental demand.",
    "Walkable tourism and dining destination."
  ],

  amenities: [
    "The Beach Mall",
    "Bluewaters Island",
    "Beach Clubs",
    "Restaurants",
    "Cinema"
  ],

  supplyStats: {
    totalUnits: "6,900+",
    handedOver: "100%",
    underConstruction: "0%",
    nextDelivery: "N/A"
  },

  transport: {
    metro: { name: "DMCC / Sobha Realty", mins: "10 mins", status: "Active" },
    roadAccess: ["Al Marsa Street"],
    walkability: "Very High",
    cycling: "Good"
  },

  aiVerdict: {
    title: "Tourism Rental Powerhouse",
    summary: "JBR delivers consistent Airbnb performance and remains one of Dubai’s most liquid beachfront apartment markets."
  },

  priceTrend: {
    "2023": "AED 1.8M",
    "2024": "AED 2.0M",
    "2025": "AED 2.2M",
    "2026": "AED 2.4M"
  },

  demandSignals: {
    rentalDemand: "Very High",
    resaleLiquidity: "High",
    tenantProfile: "Tourists & Young Professionals"
  },

  ownership: {
    type: "Freehold",
    eligibleFor: ["All Nationalities"],
    minDownPayment: "20%"
  },

  scores: { cashFlow: 7.5, appreciation: 6.5, liquidity: 8.5, risk: 3.5, lifestyle: 9.0 },
  overallScore: 8.2,

  unitEconomics: {
    studio: { roi: "7.0%", rent: "AED 80k" },
    oneBed: { roi: "6.8%", rent: "AED 115k" },
    twoBed: { roi: "6.2%", rent: "AED 170k" }
  },

  shortTermScore: 9.2,
  shortTermRental: {
    allowed: true,
    avgDailyRate: "AED 650",
    occupancy: "80%",
    tenantType: "Tourists"
  },

  futureUpgrades: [{ name: "Bluewaters Expansion", status: "Ongoing" }],

  description: "JBR is Dubai’s iconic beachfront residential strip offering vibrant lifestyle, strong rental demand, and premium tourism appeal.",

  marketReadData: [
    { factor: "Buyer Mix", read: "Short-term rental investors dominate." },
    { factor: "Rental Demand", read: "Tourism-driven year-round occupancy." },
    { factor: "Price Drivers", read: "Beachfront scarcity and tourism growth." },
    { factor: "Liquidity", read: "Highly liquid resale market." }
  ],

  rentalAnalysisPoints: [
    "1-beds rent AED 110k–125k long-term.",
    "Holiday rentals outperform long-term leasing.",
    "Sea-view units command strong premiums."
  ],

  salesAnalysisPoints: [
    "Prime sea view units trade above AED 2,000 psf.",
    "Strong resale volume due to investor turnover."
  ],

  investorTip: "Target sea-view units for maximum short-term rental ROI.",

  connectivity: {
    airport: { name: "DXB", km: "30 km", mins: "30 mins" },
    school: { name: "Dubai British School", km: "8 km", mins: "15 mins" },
    tourist: { name: "Bluewaters Island", km: "1 km", mins: "2 mins" },
    metro: { name: "DMCC", km: "1 km", mins: "10 mins" },
    mall: { name: "Dubai Marina Mall", km: "2 km", mins: "5 mins" },
    business: { name: "Dubai Marina", km: "0 km", mins: "0 mins" },
    hospital: { name: "Emirates Hospital Marina", km: "3 km", mins: "6 mins" }
  },

  buyerPsychology: {
    trigger: "Lifestyle + Rental Income",
    archetype: "The Airbnb Investor",
    motivation: "Owning beachfront property with tourism yield."
  }
},

{
  id: "jumeirah-golf-estates",
  name: "Jumeirah Golf Estates",
  emirate: "Dubai",
  category: "Luxury Golf Villas",

  roi: "5.5%",
  avgPrice: "AED 7M",
  imageColor: "bg-green-900",

  masterDeveloper: "Wasl",
  location: "Near Sports City",
  totalArea: "Golf Estate",
  towers: "Luxury Villas & Townhouses",
  completion: "Expanding",
  privateBeach: "No",

  highlights: [
    "Host of DP World Tour Championship.",
    "Premium golf course lifestyle community.",
    "High European expat ownership."
  ],

  amenities: [
    "Earth & Fire Golf Courses",
    "Country Club",
    "Fitness Centers",
    "Parks",
    "Schools"
  ],

  supplyStats: {
    totalUnits: "3,000+",
    handedOver: "75%",
    underConstruction: "25%",
    nextDelivery: "2026"
  },

  transport: {
    metro: { name: "Jumeirah Golf Estates Metro", mins: "Direct Access", status: "Route 2020 Line" },
    roadAccess: ["E311", "Al Khail Road"],
    walkability: "Moderate",
    cycling: "Good"
  },

  aiVerdict: {
    title: "Dubai’s Premier Golf Lifestyle Investment",
    summary: "Combines luxury family living with strong long-term appreciation driven by exclusivity and golf branding."
  },

  priceTrend: {
    "2023": "AED 5.5M",
    "2024": "AED 6.3M",
    "2025": "AED 7M",
    "2026": "AED 7.8M"
  },

  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "Moderate",
    tenantProfile: "European Families & Executives"
  },

  ownership: {
    type: "Freehold",
    eligibleFor: ["All Nationalities"],
    minDownPayment: "20%"
  },

  scores: { cashFlow: 5.5, appreciation: 8.5, liquidity: 6.5, risk: 3.0, lifestyle: 9.5 },
  overallScore: 8.3,

  unitEconomics: {
    fourBed: { roi: "5.5%", rent: "AED 320k" },
    fiveBed: { roi: "5.2%", rent: "AED 400k" }
  },

  shortTermScore: 5.5,
  shortTermRental: { allowed: true, avgDailyRate: "AED 1,500", occupancy: "60%" },

  futureUpgrades: [{ name: "Wasl Master Expansion", status: "Ongoing" }],

  description: "Jumeirah Golf Estates is a premium villa community centered around championship golf courses and luxury family living.",

  buyerPsychology: {
    trigger: "Luxury Lifestyle",
    archetype: "The Golf Elite",
    motivation: "Owning property in golf-branded luxury community."
  }
},


];

