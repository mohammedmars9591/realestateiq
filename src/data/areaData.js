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

  // --- 6. DUBAI MARINA ---
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    emirate: "Dubai",
    category: "Luxury / Waterfront",
    roi: "6.8%",
    avgPrice: "AED 1.8M",
    imageColor: "bg-blue-600",
    amenities: ["Marina Walk", "Yacht Club", "JBR Beach"],

    investorTags: ["Waterfront", "Expat Favorite", "Resale Value"],
    aiVerdict: {
      title: "The Expat Favorite",
      summary: "Perennially popular with Western expats. High occupancy rates and strong resale demand for sea-view units."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "Very High", tenantProfile: "Western Expats & Couples" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.5, appreciation: 8.8, liquidity: 9.5, risk: 5.5, lifestyle: 9.8 },
    overallScore: 9.2,

    unitEconomics: { 
      studio: { roi: "7.0%", rent: "AED 90k" }, 
      oneBed: { roi: "6.5%", rent: "AED 130k" }, 
      twoBed: { roi: "5.8%", rent: "AED 190k" } 
    },

    shortTermScore: 9.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 850", occupancy: "88%", tenantType: "Beach Tourists" },

    futureUpgrades: [
      { name: "Dubai Harbour Cruise Terminal", status: "Operational" },
      { name: "Blue Waters Connection", status: "Complete" }
    ],

    priceTrend: { "2022": "AED 1.4M", "2023": "AED 1.6M", "2024": "AED 1.7M", "2025": "AED 1.8M" },

    description: "The world's largest man-made marina, offering premium waterfront living and high liquidity.",
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

  // --- 7. DUBAI CREEK HARBOUR ---
  {
    id: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    emirate: "Dubai",
    category: "Future Prime",
    roi: "6.2%",
    avgPrice: "AED 1.9M",
    imageColor: "bg-cyan-600",
    amenities: ["Creek Tower", "Island Park", "Marina"],

    investorTags: ["Long-Term Growth", "Master Plan", "New Downtown"],
    aiVerdict: {
      title: "The Next Downtown",
      summary: "Massive appreciation potential as the master plan matures. Ideal for investors with a 5-10 year horizon."
    },
    demandSignals: { rentalDemand: "Growing", resaleLiquidity: "Medium", tenantProfile: "Modern Families" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.8, appreciation: 9.5, liquidity: 8.5, risk: 5.8, lifestyle: 9.2 },
    overallScore: 9.1,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 80k" }, 
      oneBed: { roi: "6.5%", rent: "AED 110k" }, 
      twoBed: { roi: "6.0%", rent: "AED 165k" } 
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 550", occupancy: "70%", tenantType: "Lifestyle Tourists" },

    futureUpgrades: [
      { name: "The Creek Tower", status: "Redesigned" },
      { name: "Creek Square Mall", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.5M", "2023": "AED 1.7M", "2024": "AED 1.8M", "2025": "AED 1.9M" },

    description: "The 'New Downtown' of Dubai, promising massive capital growth as the master plan completes.",
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

  // --- 8. DUBAI HILLS ESTATE ---
  {
    id: "dubai-hills",
    name: "Dubai Hills Estate",
    emirate: "Dubai",
    category: "Premium Family",
    roi: "6.9%",
    avgPrice: "AED 1.7M",
    imageColor: "bg-green-700",
    amenities: ["Dubai Hills Mall", "Central Park", "Golf Club"],

    investorTags: ["Family Centric", "Green Living", "Premium Yields"],
    aiVerdict: {
      title: "Top Choice for Families",
      summary: "Emaar's most successful family community. High demand from wealthy families ensures very low vacancy rates."
    },
    demandSignals: { rentalDemand: "Very High", resaleLiquidity: "High", tenantProfile: "Wealthy Families & Expats" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 9.2, liquidity: 9.0, risk: 4.8, lifestyle: 9.5 },
    overallScore: 9.3,

    unitEconomics: { 
      studio: { roi: "N/A", rent: "AED 75k" }, 
      oneBed: { roi: "7.1%", rent: "AED 100k" }, 
      twoBed: { roi: "6.5%", rent: "AED 150k" } 
    },

    shortTermScore: 7.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "75%", tenantType: "Family Holidays" },

    futureUpgrades: [
      { name: "Metro Link (Pink Line)", status: "Proposed" },
      { name: "Business Park Expansion", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 1.3M", "2023": "AED 1.5M", "2024": "AED 1.6M", "2025": "AED 1.7M" },

    description: "Dubai's 'Green Heart', offering a premium lifestyle that attracts high-net-worth families.",
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

  // --- 9. AL FURJAN ---
  {
    id: "al-furjan",
    name: "Al Furjan",
    emirate: "Dubai",
    category: "Connectivity / Yield",
    roi: "7.6%",
    avgPrice: "AED 900k",
    imageColor: "bg-amber-600",
    amenities: ["Metro Access", "Ibn Battuta Mall", "Community Club"],

    investorTags: ["Metro Access", "Growth Corridor", "Value Buy"],
    aiVerdict: {
      title: "Strategic Growth Zone",
      summary: "Benefiting from the Metro extension and proximity to Expo City. Excellent value for money with strong rental yields."
    },
    demandSignals: { rentalDemand: "High", resaleLiquidity: "Medium", tenantProfile: "Commuters & Airport Staff" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 8.8, appreciation: 7.0, liquidity: 8.2, risk: 5.8, lifestyle: 7.5 },
    overallScore: 8.1,

    unitEconomics: { 
      studio: { roi: "8.0%", rent: "AED 52k" }, 
      oneBed: { roi: "7.5%", rent: "AED 78k" }, 
      twoBed: { roi: "6.8%", rent: "AED 110k" } 
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 350", occupancy: "65%", tenantType: "Budget Tourists" },

    futureUpgrades: [
      { name: "Al Maktoum Airport Expansion", status: "Approved" },
      { name: "Expo City Growth", status: "Ongoing" }
    ],

    priceTrend: { "2022": "AED 700k", "2023": "AED 800k", "2024": "AED 850k", "2025": "AED 900k" },

    description: "Strategically located near Expo City and the Metro, offering excellent value and connectivity.",
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

  // --- 10. MEYDAN (MBR CITY) ---
  {
    id: "meydan",
    name: "Meydan (MBR City)",
    emirate: "Dubai",
    category: "Luxury / Growth",
    roi: "6.4%",
    avgPrice: "AED 1.4M",
    imageColor: "bg-purple-800",
    amenities: ["Racecourse", "Golf Course", "Lagoons"],

    investorTags: ["Luxury Living", "High Appreciation", "Gated Communities"],
    aiVerdict: {
      title: "Upscale Future Living",
      summary: "Home to crystal lagoons and mansions. Positioned as a luxury alternative to Downtown with significant upside potential."
    },
    demandSignals: { rentalDemand: "Growing", resaleLiquidity: "Medium", tenantProfile: "High Net Worth Individuals" },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.5, appreciation: 9.0, liquidity: 7.8, risk: 5.5, lifestyle: 9.0 },
    overallScore: 8.8,

    unitEconomics: { 
      studio: { roi: "6.8%", rent: "AED 70k" }, 
      oneBed: { roi: "6.2%", rent: "AED 95k" }, 
      twoBed: { roi: "5.8%", rent: "AED 140k" } 
    },

    shortTermScore: 8.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 600", occupancy: "70%", tenantType: "Event Tourists" },

    futureUpgrades: [
      { name: "Meydan One Mall", status: "Under Construction" },
      { name: "Metro Connection", status: "Proposed" }
    ],

    priceTrend: { "2022": "AED 1.1M", "2023": "AED 1.25M", "2024": "AED 1.35M", "2025": "AED 1.4M" },

    description: "A premium lifestyle destination featuring crystal lagoons and proximity to Downtown Dubai.",
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


  // ==========================================================
  // DUBAI ACADEMIC CITY
  // ==========================================================
  {
    id: "academic-city",
    name: "Dubai Academic City",
    emirate: "Dubai",
    category: "High Yield",

    roi: "8.2%",
    avgPrice: "AED 720k",
    imageColor: "bg-indigo-600",
    amenities: ["Universities", "Student Housing", "Retail Centers"],

    investorTags: ["Student Rentals", "High Yield", "Low Entry Price", "Stable Demand"],
    aiVerdict: {
      title: "Student Rental King",
      summary: "A high-occupancy rental market driven by year-round student demand and predictable cash flow."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "Medium",
      tenantProfile: "Students & academic staff"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 9.3, appreciation: 7.2, liquidity: 6.8, risk: 6.5, lifestyle: 6.0 },
    overallScore: 8.1,

    unitEconomics: {
      studio: { roi: "9.1%", rent: "AED 48k" },
      oneBed: { roi: "8.2%", rent: "AED 65k" },
      twoBed: { roi: "6.1%", rent: "AED 82k" }
    },

    shortTermScore: 6.9,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "New University Campuses", status: "Under Construction" },
      { name: "Road Connectivity Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 580k", "2023": "AED 640k", "2024": "AED 690k", "2025": "AED 720k" },

    description: "A purpose-built education hub offering student-focused housing, predictable rental income, and strong cash flow, supported by year-round academic demand and relatively affordable entry prices for investors.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "22 km", mins: "20 mins" },
      school: { name: "University of Dubai", km: "0.8 km", mins: "3 mins" },
      tourist: { name: "Global Village", km: "9 km", mins: "12 mins" },
      metro: { name: "Rashidiya Metro", km: "18 km", mins: "18 mins" },
      mall: { name: "Dragon Mart", km: "6 km", mins: "8 mins" },
      business: { name: "Silicon Oasis", km: "7 km", mins: "10 mins" },
      hospital: { name: "Mediclinic Parkview", km: "12 km", mins: "14 mins" }
    }
  },

  // ==========================================================
  // AL BARARI
  // ==========================================================
  {
    id: "al-barari",
    name: "Al Barari",
    emirate: "Dubai",
    category: "Ultra Luxury",

    roi: "5.2%",
    avgPrice: "AED 4.8M",
    imageColor: "bg-green-800",
    amenities: ["Botanical Gardens", "Wellness Centers", "Luxury Dining"],

    investorTags: ["Luxury Villas", "Capital Appreciation", "End-User Focused"],
    aiVerdict: {
      title: "Elite Green Luxury",
      summary: "A rare, low-density luxury community designed for wellness-driven end users."
    },
    demandSignals: {
      rentalDemand: "Medium",
      resaleLiquidity: "High",
      tenantProfile: "High-net-worth families"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

    scores: { cashFlow: 6.1, appreciation: 9.2, liquidity: 8.4, risk: 5.5, lifestyle: 9.5 },
    overallScore: 8.0,

    unitEconomics: {
      villa: { roi: "5.2%", rent: "AED 250k+" }
    },

    shortTermScore: 5.8,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Luxury Retail Pavilion", status: "Approved" },
      { name: "Green Community Expansion", status: "Under Development" }
    ],

    priceTrend: { "2022": "AED 3.9M", "2023": "AED 4.3M", "2024": "AED 4.6M", "2025": "AED 4.8M" },

    description: "An ultra-luxury, low-density green community designed for privacy and wellness, attracting high-net-worth end users and long-term tenants while delivering limited-supply driven capital appreciation.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "24 km", mins: "22 mins" },
      school: { name: "Dunecrest American School", km: "3 km", mins: "6 mins" },
      tourist: { name: "Global Village", km: "10 km", mins: "12 mins" },
      metro: { name: "Business Bay Metro", km: "20 km", mins: "25 mins" },
      mall: { name: "Cityland Mall", km: "6 km", mins: "8 mins" },
      business: { name: "Downtown Dubai", km: "18 km", mins: "22 mins" },
      hospital: { name: "Mediclinic Parkview", km: "7 km", mins: "10 mins" }
    }
  },

  // ==========================================================
  // AL BARSHA (1, 2, 3)
  // ==========================================================
  {
    id: "al-barsha",
    name: "Al Barsha (1, 2, 3)",
    emirate: "Dubai",
    category: "Balanced Investment",

    roi: "6.9%",
    avgPrice: "AED 1.25M",
    imageColor: "bg-sky-700",
    amenities: ["Mall of the Emirates", "Metro Access", "Hospitals"],

    investorTags: ["Family Rentals", "Central Location", "High Liquidity"],
    aiVerdict: {
      title: "Central Living Hub",
      summary: "A dependable district combining location strength with consistent rental demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "Very High",
      tenantProfile: "Families & professionals"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.4, appreciation: 8.0, liquidity: 9.1, risk: 6.0, lifestyle: 8.5 },
    overallScore: 8.3,

    unitEconomics: {
      oneBed: { roi: "7.2%", rent: "AED 85k" },
      twoBed: { roi: "6.5%", rent: "AED 115k" },
      threeBed: { roi: "5.9%", rent: "AED 145k" }
    },

    shortTermScore: 7.5,
    shortTermRental: { allowed: true, avgDailyRate: "AED 480", occupancy: "64%", tenantType: "Business Travelers" },

    futureUpgrades: [
      { name: "Traffic Flow Improvements", status: "Approved" },
      { name: "Retail Redevelopment Projects", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 1.05M", "2023": "AED 1.12M", "2024": "AED 1.20M", "2025": "AED 1.25M" },

    description: "A centrally located, mature residential district combining metro connectivity, family-friendly living, strong rental demand, and exceptional resale liquidity, making it one of Dubai’s most dependable investment zones.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "26 km", mins: "25 mins" },
      school: { name: "Dubai American Academy", km: "2 km", mins: "5 mins" },
      tourist: { name: "Ski Dubai", km: "1 km", mins: "3 mins" },
      metro: { name: "Mall of Emirates", km: "0.8 km", mins: "2 mins" },
      mall: { name: "Mall of the Emirates", km: "0.7 km", mins: "2 mins" },
      business: { name: "Internet City", km: "8 km", mins: "10 mins" },
      hospital: { name: "Saudi German Hospital", km: "1.5 km", mins: "4 mins" }
    }
  },

  // ==========================================================
  // AL BARSHA SOUTH
  // ==========================================================
  {
    id: "al-barsha-south",
    name: "Al Barsha South",
    emirate: "Dubai",
    category: "Growth Corridor",

    roi: "7.4%",
    avgPrice: "AED 980k",
    imageColor: "bg-teal-700",
    amenities: ["Dubai Hills", "Parks", "New Schools"],

    investorTags: ["Emerging Area", "Family Living", "Future Appreciation"],
    aiVerdict: {
      title: "Growth Corridor Play",
      summary: "A developing district positioned for mid-term price and rent growth."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "Medium",
      tenantProfile: "Families & executives"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 8.3, liquidity: 7.2, risk: 6.4, lifestyle: 7.9 },
    overallScore: 8.0,

    unitEconomics: {
      oneBed: { roi: "7.6%", rent: "AED 78k" },
      twoBed: { roi: "6.8%", rent: "AED 108k" }
    },

    shortTermScore: 7.0,
    shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "60%", tenantType: "Medical Tourists" },

    futureUpgrades: [
      { name: "Dubai Hills Expansion", status: "Under Development" },
      { name: "New Educational Facilities", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 820k", "2023": "AED 880k", "2024": "AED 940k", "2025": "AED 980k" },

    description: "A rapidly developing residential corridor near Dubai Hills, offering modern housing, growing family demand, and attractive medium-term appreciation potential as infrastructure, schools, and amenities continue expanding.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "27 km", mins: "26 mins" },
      school: { name: "GEMS World Academy", km: "2.5 km", mins: "6 mins" },
      tourist: { name: "Dubai Hills Park", km: "3 km", mins: "6 mins" },
      metro: { name: "Mall of Emirates", km: "9 km", mins: "12 mins" },
      mall: { name: "Dubai Hills Mall", km: "4 km", mins: "7 mins" },
      business: { name: "Business Bay", km: "16 km", mins: "18 mins" },
      hospital: { name: "King’s College Hospital", km: "4 km", mins: "7 mins" }
    }
  },

  // ==========================================================
  // AL GARHOUD
  // ==========================================================
  {
    id: "al-garhoud",
    name: "Al Garhoud",
    emirate: "Dubai",
    category: "Core City",

    roi: "6.5%",
    avgPrice: "AED 1.1M",
    imageColor: "bg-amber-700",
    amenities: ["Metro Stations", "Hotels", "Parks"],

    investorTags: ["Airport Proximity", "Stable Rentals", "Corporate Tenants"],
    aiVerdict: {
      title: "Airport Stability Zone",
      summary: "A low-volatility rental market supported by airport and corporate demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "High",
      tenantProfile: "Airline staff & corporate tenants"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.0, appreciation: 7.4, liquidity: 8.2, risk: 6.1, lifestyle: 7.3 },
    overallScore: 7.8,

    unitEconomics: {
      oneBed: { roi: "6.8%", rent: "AED 82k" },
      twoBed: { roi: "6.1%", rent: "AED 110k" }
    },

    shortTermScore: 7.9,
    shortTermRental: { allowed: true, avgDailyRate: "AED 520", occupancy: "70%", tenantType: "Transit Travelers" },

    futureUpgrades: [
      { name: "Airport Road Enhancements", status: "Approved" },
      { name: "Hotel Redevelopment Projects", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 950k", "2023": "AED 1.02M", "2024": "AED 1.08M", "2025": "AED 1.1M" },

    description: "A well-established, airport-adjacent neighborhood delivering stable corporate rentals, consistent occupancy, and balanced investment performance, supported by excellent connectivity to business districts, metro stations, and key city infrastructure.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "4 km", mins: "6 mins" },
      school: { name: "Dubai English Speaking School", km: "1.8 km", mins: "5 mins" },
      tourist: { name: "Dubai Creek", km: "5 km", mins: "8 mins" },
      metro: { name: "GGICO Metro", km: "1 km", mins: "3 mins" },
      mall: { name: "City Centre Deira", km: "6 km", mins: "10 mins" },
      business: { name: "Deira CBD", km: "5 km", mins: "8 mins" },
      hospital: { name: "Thumbay Hospital", km: "4 km", mins: "7 mins" }
    }
  },

  // ==========================================================
  // AL JADDAF
  // ==========================================================
  {
    id: "al-jaddaf",
    name: "Al Jaddaf",
    emirate: "Dubai",
    category: "Urban Growth",

    roi: "7.3%",
    avgPrice: "AED 980k",
    imageColor: "bg-purple-700",
    amenities: ["Waterfront", "Hotels", "Healthcare City"],

    investorTags: ["Waterfront Living", "Healthcare Tenants", "Mid-Term Growth"],
    aiVerdict: {
      title: "Creekside Growth Zone",
      summary: "An emerging waterfront district supported by medical and hospitality demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "High",
      tenantProfile: "Medical professionals & executives"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.6, appreciation: 8.2, liquidity: 8.0, risk: 6.3, lifestyle: 7.8 },
    overallScore: 8.1,

    unitEconomics: {
      studio: { roi: "7.8%", rent: "AED 58k" },
      oneBed: { roi: "7.2%", rent: "AED 78k" },
      twoBed: { roi: "6.3%", rent: "AED 105k" }
    },

    shortTermScore: 7.8,
    shortTermRental: { allowed: true, avgDailyRate: "AED 500", occupancy: "66%", tenantType: "Medical & Leisure Visitors" },

    futureUpgrades: [
      { name: "Creekside Promenade", status: "Under Development" },
      { name: "Healthcare City Expansion", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 820k", "2023": "AED 890k", "2024": "AED 940k", "2025": "AED 980k" },

    description: "A fast-evolving waterfront neighborhood near Healthcare City, offering strong rental demand, improving lifestyle appeal, and attractive growth potential driven by medical, hotel, and business-related tenant activity.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "9 km", mins: "12 mins" },
      school: { name: "Swiss International School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Dubai Creek", km: "3 km", mins: "6 mins" },
      metro: { name: "Al Jaddaf Metro", km: "1 km", mins: "3 mins" },
      mall: { name: "Festival City Mall", km: "4 km", mins: "8 mins" },
      business: { name: "Business Bay", km: "10 km", mins: "14 mins" },
      hospital: { name: "Dubai Healthcare City", km: "1.5 km", mins: "4 mins" }
    }
  },

  // ==========================================================
  // AL KHAIL GATE
  // ==========================================================
  {
    id: "al-khail-gate",
    name: "Al Khail Gate",
    emirate: "Dubai",
    category: "Affordable Housing",

    roi: "8.6%",
    avgPrice: "AED 620k",
    imageColor: "bg-rose-700",
    amenities: ["Community Retail", "Parks", "Schools"],

    investorTags: ["Affordable Rentals", "High Yield", "Blue-Collar Demand"],
    aiVerdict: {
      title: "Cash Flow Focus",
      summary: "A budget-friendly rental zone delivering strong yields through workforce housing demand."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "Medium",
      tenantProfile: "Workforce & service professionals"
    },
    ownership: { type: "Leasehold", eligibleFor: ["UAE Nationals & GCC"], minDownPayment: "25%" },

    scores: { cashFlow: 9.0, appreciation: 6.4, liquidity: 6.2, risk: 6.8, lifestyle: 5.8 },
    overallScore: 7.7,

    unitEconomics: {
      studio: { roi: "9.2%", rent: "AED 42k" },
      oneBed: { roi: "8.4%", rent: "AED 55k" }
    },

    shortTermScore: 5.5,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Community Retail Expansion", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 520k", "2023": "AED 570k", "2024": "AED 600k", "2025": "AED 620k" },

    description: "An affordable residential cluster focused on workforce housing, delivering very high rental yields and stable occupancy, though primarily suited for cash-flow-driven investors rather than lifestyle-focused end users.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "20 km", mins: "22 mins" },
      school: { name: "GEMS Wellington", km: "3 km", mins: "7 mins" },
      tourist: { name: "Meydan Racecourse", km: "6 km", mins: "10 mins" },
      metro: { name: "Business Bay Metro", km: "9 km", mins: "14 mins" },
      mall: { name: "Oasis Mall", km: "8 km", mins: "12 mins" },
      business: { name: "Business Bay", km: "7 km", mins: "10 mins" },
      hospital: { name: "Mediclinic Parkview", km: "10 km", mins: "15 mins" }
    }
  },

  // ==========================================================
  // AL KHAWANEEJ (1 & 2)
  // ==========================================================
  {
    id: "al-khawaneej",
    name: "Al Khawaneej (1 & 2)",
    emirate: "Dubai",
    category: "Villa Living",

    roi: "5.9%",
    avgPrice: "AED 2.6M",
    imageColor: "bg-lime-700",
    amenities: ["Last Exit", "Parks", "Private Farms"],

    investorTags: ["Villa Community", "End-User Focused", "Low Density"],
    aiVerdict: {
      title: "Suburban Family Haven",
      summary: "A quiet villa-focused district designed for long-term family living."
    },
    demandSignals: {
      rentalDemand: "Medium",
      resaleLiquidity: "Medium",
      tenantProfile: "Local families & executives"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

    scores: { cashFlow: 6.0, appreciation: 7.8, liquidity: 6.9, risk: 6.0, lifestyle: 8.6 },
    overallScore: 7.6,

    unitEconomics: {
      villa: { roi: "5.9%", rent: "AED 150k+" }
    },

    shortTermScore: 4.9,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Road Infrastructure Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 2.1M", "2023": "AED 2.3M", "2024": "AED 2.5M", "2025": "AED 2.6M" },

    description: "A low-density villa community offering spacious homes, privacy, and suburban living, appealing primarily to end users and long-term tenants seeking calm environments over short-term rental returns.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "16 km", mins: "18 mins" },
      school: { name: "Mirdif American School", km: "4 km", mins: "8 mins" },
      tourist: { name: "Last Exit Khawaneej", km: "2 km", mins: "4 mins" },
      metro: { name: "Centrepoint Metro", km: "12 km", mins: "15 mins" },
      mall: { name: "City Centre Mirdif", km: "6 km", mins: "10 mins" },
      business: { name: "Dubai Airport Freezone", km: "14 km", mins: "18 mins" },
      hospital: { name: "Mediclinic Mirdif", km: "6 km", mins: "10 mins" }
    }
  },

  // ==========================================================
  // AL LISAili
  // ==========================================================
  {
    id: "al-lisaili",
    name: "Al Lisaili",
    emirate: "Dubai",
    category: "Rural Growth",

    roi: "6.8%",
    avgPrice: "AED 540k",
    imageColor: "bg-stone-700",
    amenities: ["Open Land", "Warehouses", "Truck Routes"],

    investorTags: ["Land Investment", "Industrial Use", "Long-Term Hold"],
    aiVerdict: {
      title: "Land Banking Zone",
      summary: "A low-density area suited for long-term land appreciation strategies."
    },
    demandSignals: {
      rentalDemand: "Low",
      resaleLiquidity: "Low",
      tenantProfile: "Logistics & agricultural users"
    },
    ownership: { type: "Freehold", eligibleFor: ["UAE Nationals & GCC"], minDownPayment: "30%" },

    scores: { cashFlow: 5.5, appreciation: 7.0, liquidity: 5.8, risk: 7.2, lifestyle: 4.5 },
    overallScore: 6.6,

    unitEconomics: {
      land: { roi: "6.8%", rent: "N/A" }
    },

    shortTermScore: 3.5,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Logistics Corridor Expansion", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 430k", "2023": "AED 470k", "2024": "AED 510k", "2025": "AED 540k" },

    description: "A sparsely populated outskirts area primarily suited for land banking and industrial use, offering speculative long-term appreciation rather than immediate rental income or lifestyle-driven residential demand.",

    connectivity: {
      airport: { name: "Al Maktoum Airport", km: "35 km", mins: "30 mins" },
      school: { name: "GEMS Education", km: "18 km", mins: "20 mins" },
      tourist: { name: "Al Qudra Lakes", km: "12 km", mins: "15 mins" },
      metro: { name: "Expo City Metro", km: "28 km", mins: "25 mins" },
      mall: { name: "Cityland Mall", km: "20 km", mins: "22 mins" },
      business: { name: "Dubai South", km: "30 km", mins: "28 mins" },
      hospital: { name: "NMC Royal Hospital", km: "22 km", mins: "24 mins" }
    }
  },

  // ==========================================================
  // AL MAMZAR
  // ==========================================================
  {
    id: "al-mamzar",
    name: "Al Mamzar",
    emirate: "Dubai",
    category: "Beachside Living",

    roi: "6.7%",
    avgPrice: "AED 1.4M",
    imageColor: "bg-cyan-700",
    amenities: ["Beach Park", "Corniche", "Waterfront"],

    investorTags: ["Beach Proximity", "Family Living", "Lifestyle Appeal"],
    aiVerdict: {
      title: "Affordable Beachside",
      summary: "A rare coastal residential area combining lifestyle appeal with steady rental demand."
    },
    demandSignals: {
      rentalDemand: "High",
      resaleLiquidity: "High",
      tenantProfile: "Families & professionals"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 6.9, appreciation: 7.6, liquidity: 8.3, risk: 6.0, lifestyle: 8.8 },
    overallScore: 8.0,

    unitEconomics: {
      oneBed: { roi: "6.9%", rent: "AED 78k" },
      twoBed: { roi: "6.3%", rent: "AED 105k" }
    },

    shortTermScore: 7.2,
    shortTermRental: { allowed: true, avgDailyRate: "AED 480", occupancy: "62%", tenantType: "Leisure Travelers" },

    futureUpgrades: [
      { name: "Beachfront Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 1.2M", "2023": "AED 1.28M", "2024": "AED 1.35M", "2025": "AED 1.4M" },

    description: "A well-established beachfront community offering relaxed coastal living, consistent rental demand, and strong lifestyle appeal, supported by parks, open beaches, and proximity to Sharjah and Deira.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "10 km", mins: "14 mins" },
      school: { name: "The Millennium School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Al Mamzar Beach Park", km: "0.5 km", mins: "2 mins" },
      metro: { name: "Al Qiyadah Metro", km: "4 km", mins: "8 mins" },
      mall: { name: "Century Mall", km: "3 km", mins: "6 mins" },
      business: { name: "Deira CBD", km: "6 km", mins: "10 mins" },
      hospital: { name: "Prime Hospital", km: "3 km", mins: "6 mins" }
    }
  },

  // ==========================================================
  // AL MIZHAR (1 & 2)
  // ==========================================================
  {
    id: "al-mizhar",
    name: "Al Mizhar (1 & 2)",
    emirate: "Dubai",
    category: "Family Villas",

    roi: "5.8%",
    avgPrice: "AED 2.3M",
    imageColor: "bg-emerald-800",
    amenities: ["Parks", "Schools", "Community Centers"],

    investorTags: ["Villa Community", "Family End Users", "Low Turnover"],
    aiVerdict: {
      title: "Quiet Family Zone",
      summary: "A low-density villa district designed for long-term family residency."
    },
    demandSignals: {
      rentalDemand: "Medium",
      resaleLiquidity: "Medium",
      tenantProfile: "Local families"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

    scores: { cashFlow: 5.9, appreciation: 7.5, liquidity: 6.8, risk: 6.0, lifestyle: 8.2 },
    overallScore: 7.4,

    unitEconomics: {
      villa: { roi: "5.8%", rent: "AED 140k+" }
    },

    shortTermScore: 4.7,
    shortTermRental: { allowed: false, avgDailyRate: "-", occupancy: "-", tenantType: "N/A" },

    futureUpgrades: [
      { name: "Community Park Enhancements", status: "Approved" }
    ],

    priceTrend: { "2022": "AED 1.9M", "2023": "AED 2.05M", "2024": "AED 2.2M", "2025": "AED 2.3M" },

    description: "A calm, villa-focused residential neighborhood favored by families, offering spacious homes, community parks, and stable long-term occupancy, though better suited for end users than yield-focused investors.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "14 km", mins: "16 mins" },
      school: { name: "Uptown International School", km: "2 km", mins: "5 mins" },
      tourist: { name: "Mushrif Park", km: "4 km", mins: "7 mins" },
      metro: { name: "Centrepoint Metro", km: "10 km", mins: "14 mins" },
      mall: { name: "City Centre Mirdif", km: "5 km", mins: "9 mins" },
      business: { name: "Airport Freezone", km: "12 km", mins: "15 mins" },
      hospital: { name: "Mediclinic Mirdif", km: "5 km", mins: "9 mins" }
    }
  },

  // ==========================================================
  // AL MURAQQABAT
  // ==========================================================
  {
    id: "al-muraqqabat",
    name: "Al Muraqqabat",
    emirate: "Dubai",
    category: "Urban Core",

    roi: "7.1%",
    avgPrice: "AED 880k",
    imageColor: "bg-red-700",
    amenities: ["Retail Streets", "Metro Access", "Hotels"],

    investorTags: ["City Core", "High Occupancy", "Transit Demand"],
    aiVerdict: {
      title: "Inner-City Performer",
      summary: "A dense urban district delivering reliable rental demand."
    },
    demandSignals: {
      rentalDemand: "Very High",
      resaleLiquidity: "High",
      tenantProfile: "Urban professionals & service workers"
    },
    ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

    scores: { cashFlow: 7.8, appreciation: 7.0, liquidity: 8.5, risk: 6.4, lifestyle: 6.9 },
    overallScore: 7.9,

    unitEconomics: {
      studio: { roi: "7.6%", rent: "AED 52k" },
      oneBed: { roi: "7.1%", rent: "AED 70k" }
    },

    shortTermScore: 7.6,
    shortTermRental: { allowed: true, avgDailyRate: "AED 460", occupancy: "69%", tenantType: "City Travelers" },

    futureUpgrades: [
      { name: "Streetscape Revitalization", status: "Planned" }
    ],

    priceTrend: { "2022": "AED 760k", "2023": "AED 810k", "2024": "AED 850k", "2025": "AED 880k" },

    description: "A busy inner-city neighborhood offering excellent metro connectivity, constant rental demand, and strong occupancy levels, making it a reliable option for investors focused on steady income over lifestyle.",

    connectivity: {
      airport: { name: "DXB Intl Airport", km: "6 km", mins: "10 mins" },
      school: { name: "Little Flower English School", km: "1.5 km", mins: "4 mins" },
      tourist: { name: "Al Ghurair Centre", km: "1 km", mins: "3 mins" },
      metro: { name: "Al Rigga Metro", km: "0.4 km", mins: "2 mins" },
      mall: { name: "Al Ghurair Centre", km: "1 km", mins: "3 mins" },
      business: { name: "Deira CBD", km: "2 km", mins: "5 mins" },
      hospital: { name: "NMC Specialty Hospital", km: "2 km", mins: "5 mins" }
    }
  },

  {
  id: "al-nahada-dubai",
  name: "Al Nahada Dubai",
  emirate: "Dubai",
  category: "High Yield",

  roi: "7.6%",
  avgPrice: "AED 760k",
  imageColor: "bg-indigo-500",
  amenities: ["Metro Access", "Retail Strips", "Parks"],

  investorTags: ["High Rental Demand", "Affordability", "Sharjah Commute"],
  aiVerdict: {
    title: "Sharjah & Dubai Commuter Magnet",
    summary: "Consistent rental demand driven by affordability and proximity to Sharjah and Dubai, delivering dependable yields."
  },
  demandSignals: {
    rentalDemand: "Very High",
    resaleLiquidity: "High",
    tenantProfile: "Professionals & Families"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 8.7, appreciation: 6.9, liquidity: 8.3, risk: 6.2, lifestyle: 6.4 },
  overallScore: 8.1,

  unitEconomics: {
    studio: { roi: "8.4%", rent: "AED 50k" },
    oneBed: { roi: "7.8%", rent: "AED 68k" },
    twoBed: { roi: "7.0%", rent: "AED 92k" }
  },

  shortTermScore: 7.0,
  shortTermRental: { allowed: true, avgDailyRate: "AED 400", occupancy: "62%", tenantType: "Commuter & Budget Tourists" },

  futureUpgrades: [
    { name: "Community Park Enhancements", status: "Planned" },
    { name: "Retail Node Expansion", status: "Approved" }
  ],

  priceTrend: { "2022": "AED 650k", "2023": "AED 700k", "2024": "AED 730k", "2025": "AED 760k" },

  description: "A high-yield residential hub favored by Sharjah commuters and mid-income families, combining affordability, strong rental demand and metro access to deliver consistent cash flow.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "16 km", mins: "18 mins" },
    school: { name: "GEMS Winchester School", km: "2 km", mins: "5 mins" },
    tourist: { name: "Expo City Park", km: "8 km", mins: "12 mins" },
    metro: { name: "Etisalat Metro", km: "3 km", mins: "6 mins" },
    mall: { name: "Dubai Festival City Mall", km: "7 km", mins: "10 mins" },
    business: { name: "Deira CBD", km: "10 km", mins: "14 mins" },
    hospital: { name: "Al Qusais Health Centre", km: "4 km", mins: "8 mins" }
  }
},
{
  id: "al-quoz",
  name: "Al Quoz (1,2,3,4 & Industrial)",
  emirate: "Dubai",
  category: "Mixed Use",

  roi: "7.1%",
  avgPrice: "AED 1.02M",
  imageColor: "bg-gray-700",
  amenities: ["Art District", "Warehouses", "Retail & Studios"],

  investorTags: ["Industrial to Creative", "Long-Term Upside", "Mixed Use Demand"],
  aiVerdict: {
    title: "Creative & Industrial Blend",
    summary: "A unique mixed-use district balancing industrial, creative and residential dynamics for diversified investment exposure."
  },
  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "Medium",
    tenantProfile: "Artists, SMEs & Industrial Tenants"
  },
  ownership: { type: "Freehold (Project Specific)", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

  scores: { cashFlow: 7.3, appreciation: 8.0, liquidity: 7.0, risk: 6.6, lifestyle: 7.4 },
  overallScore: 7.7,

  unitEconomics: {
    studio: { roi: "7.4%", rent: "AED 54k" },
    oneBed: { roi: "7.0%", rent: "AED 70k" },
    twoBed: { roi: "6.5%", rent: "AED 95k" }
  },

  shortTermScore: 6.8,
  shortTermRental: { allowed: true, avgDailyRate: "AED 450", occupancy: "60%", tenantType: "Artists & Visitors" },

  futureUpgrades: [
    { name: "Alserkal Avenue Expansion", status: "Planned" },
    { name: "Industrial Retrofits", status: "Approved" }
  ],

  priceTrend: { "2022": "AED 900k", "2023": "AED 950k", "2024": "AED 990k", "2025": "AED 1.02M" },

  description: "A transforming mixed-use district combining industrial, creative and residential elements, offering investors diversified rental demand and long-term appreciation potential from regeneration trends.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "15 km", mins: "16 mins" },
    school: { name: "Dubai British School", km: "4 km", mins: "8 mins" },
    tourist: { name: "Alserkal Avenue", km: "1 km", mins: "3 mins" },
    metro: { name: "First Al Khail Metro", km: "2 km", mins: "5 mins" },
    mall: { name: "Mall of the Emirates", km: "10 km", mins: "12 mins" },
    business: { name: "Business Bay", km: "12 km", mins: "14 mins" },
    hospital: { name: "Mediclinic Meadows", km: "7 km", mins: "10 mins" }
  }
},
{
  id: "al-qusais",
  name: "Al Qusais",
  emirate: "Dubai",
  category: "Family Residential",

  roi: "7.2%",
  avgPrice: "AED 820k",
  imageColor: "bg-sky-600",
  amenities: ["Metro Access", "Parks", "Schools"],

  investorTags: ["Stable Rents", "Family Focused", "Metro Connectivity"],
  aiVerdict: {
    title: "Reliable Mid-Market",
    summary: "A stable residential district with balanced rental demand and family-oriented tenancy."
  },
  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "High",
    tenantProfile: "Families & professionals"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 8.2, appreciation: 7.0, liquidity: 8.1, risk: 6.1, lifestyle: 7.0 },
  overallScore: 8.1,

  unitEconomics: {
    studio: { roi: "8.0%", rent: "AED 48k" },
    oneBed: { roi: "7.3%", rent: "AED 68k" },
    twoBed: { roi: "6.7%", rent: "AED 92k" }
  },

  shortTermScore: 7.2,
  shortTermRental: { allowed: true, avgDailyRate: "AED 420", occupancy: "58%", tenantType: "Family Tourists" },

  futureUpgrades: [
    { name: "Community Retail Growth", status: "Under Construction" }
  ],

  priceTrend: { "2022": "AED 720k", "2023": "AED 760k", "2024": "AED 795k", "2025": "AED 820k" },

  description: "A balanced residential neighborhood with metro connections and family demand, delivering stable rents, predictable occupancy, and strong mid-market investment performance.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "14 km", mins: "16 mins" },
    school: { name: "Al Salam School", km: "2.5 km", mins: "6 mins" },
    tourist: { name: "Mushrif Park", km: "6 km", mins: "10 mins" },
    metro: { name: "Al Qusais Metro", km: "1 km", mins: "3 mins" },
    mall: { name: "Qusais Plaza", km: "2 km", mins: "5 mins" },
    business: { name: "Deira CBD", km: "9 km", mins: "12 mins" },
    hospital: { name: "NMC Specialty Hospital", km: "3 km", mins: "8 mins" }
  }
},
{
  id: "al-rashidiya",
  name: "Al Rashidiya",
  emirate: "Dubai",
  category: "Low Density",

  roi: "6.7%",
  avgPrice: "AED 900k",
  imageColor: "bg-green-700",
  amenities: ["Parks", "Metro", "Villas"],

  investorTags: ["Stable Rentals", "Low Turnover", "Family Focus"],
  aiVerdict: {
    title: "Calm Residential Node",
    summary: "A laid-back residential neighborhood with stable occupancy and limited volatility."
  },
  demandSignals: {
    rentalDemand: "Medium-High",
    resaleLiquidity: "Medium",
    tenantProfile: "Families & professionals"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 7.0, appreciation: 6.8, liquidity: 7.0, risk: 5.8, lifestyle: 7.4 },
  overallScore: 7.2,

  unitEconomics: {
    oneBed: { roi: "6.8%", rent: "AED 74k" },
    twoBed: { roi: "6.3%", rent: "AED 95k" }
  },

  shortTermScore: 6.0,
  shortTermRental: { allowed: true, avgDailyRate: "AED 380", occupancy: "55%", tenantType: "Family Tourists" },

  futureUpgrades: [
    { name: "Metro Corridor Enhancements", status: "Planned" }
  ],

  priceTrend: { "2022": "AED 820k", "2023": "AED 860k", "2024": "AED 885k", "2025": "AED 900k" },

  description: "A peaceful, low-density residential neighborhood near the airport offering steady rental demand, calm lifestyle appeal, and dependable mid-market investment performance.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "6 km", mins: "8 mins" },
    school: { name: "Rashidiya English School", km: "3 km", mins: "7 mins" },
    tourist: { name: "Dubai Dolphinarium", km: "5 km", mins: "10 mins" },
    metro: { name: "Rashidiya Metro", km: "1.5 km", mins: "3 mins" },
    mall: { name: "City Centre Deira", km: "7 km", mins: "10 mins" },
    business: { name: "Deira CBD", km: "8 km", mins: "12 mins" },
    hospital: { name: "NMC Hospital", km: "4 km", mins: "8 mins" }
  }
},
{
  id: "al-ras",
  name: "Al Ras",
  emirate: "Dubai",
  category: "Historic Commercial",

  roi: "7.3%",
  avgPrice: "AED 720k",
  imageColor: "bg-amber-700",
  amenities: ["Gold & Spice Souks", "Abra Dock", "Heritage Sites"],

  investorTags: ["Tourism Rentals", "High Footfall", "Commercial Demand"],
  aiVerdict: {
    title: "Old Dubai Income Core",
    summary: "Historic adult demand combines tourism and commerce for stable rental cash flow."
  },
  demandSignals: {
    rentalDemand: "High",
    resaleLiquidity: "Medium",
    tenantProfile: "Retailers, tourists & service staff"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "25%" },

  scores: { cashFlow: 8.4, appreciation: 6.2, liquidity: 7.1, risk: 6.7, lifestyle: 5.8 },
  overallScore: 7.2,

  unitEconomics: {
    studio: { roi: "8.1%", rent: "AED 50k" },
    oneBed: { roi: "7.5%", rent: "AED 66k" }
  },

  shortTermScore: 7.5,
  shortTermRental: { allowed: true, avgDailyRate: "AED 420", occupancy: "63%", tenantType: "Tourists & Traders" },

  futureUpgrades: [
    { name: "Heritage Corridor Revamp", status: "Planned" }
  ],

  priceTrend: { "2022": "AED 650k", "2023": "AED 690k", "2024": "AED 710k", "2025": "AED 720k" },

  description: "A historic commercial core blending traditional markets, tourism, and retail demand, offering steady rental occupancy and consistent footfall-driven investment returns.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "8 km", mins: "12 mins" },
    school: { name: "Al Ittihad School", km: "1.8 km", mins: "5 mins" },
    tourist: { name: "Gold & Spice Souk", km: "0.2 km", mins: "1 min" },
    metro: { name: "Al Ghubaiba Metro", km: "1 km", mins: "3 mins" },
    mall: { name: "Naif Centre", km: "1.2 km", mins: "3 mins" },
    business: { name: "Deira CBD", km: "4 km", mins: "8 mins" },
    hospital: { name: "Al Baraha Hospital", km: "3 km", mins: "7 mins" }
  }
},
{
  id: "al-rigga",
  name: "Al Rigga",
  emirate: "Dubai",
  category: "Urban Core",

  roi: "7.7%",
  avgPrice: "AED 780k",
  imageColor: "bg-red-700",
  amenities: ["Metro", "Hotels", "Retail Corridors"],

  investorTags: ["High Occupancy", "Short Term Demand", "Urban Rentals"],
  aiVerdict: {
    title: "Metro-Linked Yield Center",
    summary: "Strong rental demand driven by hospitality, commuters, and urban living."
  },
  demandSignals: {
    rentalDemand: "Very High",
    resaleLiquidity: "High",
    tenantProfile: "Tourists, professionals & urban residents"
  },
  ownership: { type: "Freehold", eligibleFor: ["All Nationalities"], minDownPayment: "20%" },

  scores: { cashFlow: 8.8, appreciation: 6.5, liquidity: 8.5, risk: 6.8, lifestyle: 7.0 },
  overallScore: 8.3,

  unitEconomics: {
    studio: { roi: "8.3%", rent: "AED 50k" },
    oneBed: { roi: "7.9%", rent: "AED 68k" }
  },

  shortTermScore: 8.0,
  shortTermRental: { allowed: true, avgDailyRate: "AED 460", occupancy: "68%", tenantType: "Short-Term Tourists" },

  futureUpgrades: [
    { name: "Streetscape Revitalization", status: "Planned" }
  ],

  priceTrend: { "2022": "AED 690k", "2023": "AED 730k", "2024": "AED 760k", "2025": "AED 780k" },

  description: "A high-density urban district with excellent metro access, strong short-term and long-term rental demand, and vibrant lifestyle choices that drive dependable cash-flow returns.",

  connectivity: {
    airport: { name: "DXB Intl Airport", km: "6 km", mins: "10 mins" },
    school: { name: "GEMS FirstPoint School", km: "1.5 km", mins: "4 mins" },
    tourist: { name: "Al Ghurair Centre", km: "1.2 km", mins: "3 mins" },
    metro: { name: "Al Rigga Metro", km: "0.5 km", mins: "2 mins" },
    mall: { name: "Al Ghurair Centre", km: "1.2 km", mins: "3 mins" },
    business: { name: "Deira CBD", km: "2.5 km", mins: "6 mins" },
    hospital: { name: "NMC Specialty Hospital", km: "2 km", mins: "5 mins" }
  }
}


];

