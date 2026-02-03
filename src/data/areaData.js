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

];

