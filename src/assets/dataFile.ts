export const auctions:string[] = [
    "ARAI OYAMA",
    "ISUZU KYUSHU",
    "JU AICHI",
    "JU FUKUSHIMA",
    "JU GUNMA",
    "KCAA FUKUOKA",
    "MIRIVE OSAKA",
    "ZIP OSAKA",
    "KCAA YAMAGUCHI",
    "MIRIVE AICHI",
    "MOTA",
    "USS NAGOYA",
    "USS OSAKA",
    "USS SAITAMA",
    "ZERO CHIBA",
]

export const vessels: string[] = [
  "-- Any Vessel --",
  "[9999-11-11] ready to book",
  "[2025-08-10] Freeport",
  "[2025-06-30] Carmen",
  "[2025-06-23] Navios Tempo",
  "[2025-06-22] Hoegh Moonlight",
  "[2025-06-20] Hoegh Copenhagen",
  "[2025-06-19] Virgo",
  "[2025-06-16] Maersk Virginia",
  "[2025-06-15] Glovis Corona",
  "[2025-06-12] Aniara",
  "[2025-06-12] Dream Diamond",
  "[2025-06-12] Navios Tempo",
  "[2025-06-12] NYK Vega",
  "[2025-06-12] Wan Hai 277",
  "[2025-06-11] BF Giant",
  "[2025-06-10] Hoegh Sunrise",
  "[2025-06-09] Trans Harmony 1",
  "[2025-06-09] Virgo",
  "[2025-06-09] Wan Hai 171",
  "[2025-06-07] Asian Dynasty",
  "[2025-06-07] Hoegh Tokyo",
  "[2025-06-06] Pulang Tala",
  "[2025-06-05] Maersk Virginia",
  "[2025-06-05] NYK Oceanus",
  "[2025-06-05] Wan Hai 272",
  "[2025-06-04] Wan Hai 177",
  "[2025-06-02] Navios Tempo",
  "[2025-06-02] Themis",
  "[2025-05-30] Yenisey",
  "[2025-05-29] NYK Virgo",
  "[2025-05-29] Virgo",
  "[2025-05-29] Wan Hai 176",
  "[2025-05-29] Yenisey",
  "[2025-05-26] Hoegh Sunlight"
];

export const regions: string[] = [
  "-- Any Region --",
  "Africa",
  "Asia",
  "Australia",
  "Canada",
  "Caribbean",
  "Dubai",
  "Europe",
  "Georgia",
  "Japan",
  "Middle East",
  "Mongolia",
  "Myanmar",
  "New Zealand",
  "North America",
  "North Cyprus",
  "Russia",
  "South America",
  "test"
];

export const colors:string[] = [
    "black",
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "gray",
    "brown",
    "pink",
    "purple",
]

export const auctionGrades:string[] = [
    "99",
    "5",
    "4.5",
    "4",
    "3.5",
    "0",
    "RA",
    "R"
]

export const vehicleGrades:string[] = [
    "ﾍﾞ-ｼｯｸ",
    "HOME",
    "ﾎ-ﾑ",
    "ﾈｽ",
    "RYUKS",
    "e:HEV Z",
    "e:HEV Z PLaY Package",
    "Z",
    "S"
]

export const status:string[] = [
    "Sold",
    "Not Sold",
    "Removed",
    "Sold By Nego",
    "Cancelled",
]

// carStatus
export const carStatus: string[] = [
  "Arrived",
  "In Japan",
  "Transit",
  "Clearance UK",
];
export const getRandomCarStatus = () => {
  return carStatus[Math.floor(Math.random() * carStatus.length)];
};

// carNames
export const carNames: string[] = [
  "A3 Sportback",
  "TT Coupe",
  "Ranger",
  "Fit",
  "CR-V",
];
export const getRandomCarNames = () => {
  return carNames[Math.floor(Math.random() * carNames.length)];
};

// carTypes
export const carTypes: string[] = [
  "Sedan",
  "Hatchback",
  "SUV",
  "Convertible",
  "MiniVan",
];
export const getRandomCarTypes = () => {
  return carTypes[Math.floor(Math.random() * carTypes.length)];
};

//carEngines
export const carEngines: string[] = [
  "1.4 TSLI",
  "V6",
  "flat-6",
  "Rx-7",
  "EV engine",
];
export const getRandomCarEngines = () => {
  return carEngines[Math.floor(Math.random() * carEngines.length)];
};

// yardArea
export const yardArea: string[] = ["Kasai-K", "Tokyo-T", "KyuShu-Q" , "Nagoya-N"];
export const getRandomYardArea = () => {
  return yardArea[Math.floor(Math.random() * yardArea.length)];
};

export const distanceUnit = ["km", "miles", "meters", "feet", "yards"];

// imagelinks
export const imageLink: string[] = [
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_83677_5c2b6269-1017-40b2-b5a4-c9eb947626fb.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_83708_7a3fe97a-2f9c-4c3c-a1ef-b182d1010949.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_84061_21956c7c-7de6-4a3a-af8b-04c35cf03157.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_84143_e8bc7ee7-7451-473e-b649-25d60982678d.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_84249_cea41aac-2b97-4606-808e-397e288333eb.jpg?preset=bigimage",
];
export const getRandomImageLink = () => {
  return imageLink[Math.floor(Math.random() * imageLink.length)];
};

export const equipments:string[] =[
  "AC",
  "Ab",
  "5-seater",
  "PS",
  "2ab",
  "7-seater",
  "Pw",
  "Remote Key Entry",
  "8-seater",
  "Alloys",
  "SR",
  "Nav",
  "Abs",
  "LEATHER"
]

// highlightstatus
export const highlightStatus: string[] = [
  "Welcab",
  "Sold",
  "On Hold",
  "E-power",
  "Coming soon",  
  "Hybrid",
  "Reduced",
  "New",
];
export const getRandomHighlightStatus = () => {
  return highlightStatus[Math.floor(Math.random() * highlightStatus.length)];
};

//tasks
export const tasks: string[] = [
  "Yard Base",
  "CJP Extra",
  "Yard Extra",
];
export const getRandomTask = () => {
  return tasks[Math.floor(Math.random() * tasks.length)];
};


export const milleageOption:string[] =[
  "Changed odometer",
  "Unknown Mileage"
]

// exteriorColor
export const exteriorColor: string[] = [
  "black#000000",
  "blue#0000ff",
  "brown#a52a2a",
  "beige#f5f5dc",
  "gray#808080",
  "green#008000",
];
export const color: string[] = [
  "Beige",
  "Black",
  "Blue",
  "Bronze",
  "Brown",
  "Burgundy",
  "Champagne",
  "Charcoal",
  "Cream",
  "Dark Blue",
  "Gold",
  "Gray",
  "Green",
  "Maroon",
  "Off White",
  "Orange",
  "Other",
  "Pearl",
  "Pewter",
  "Pink",
  "Purple",
  "Red",
  "Silver",
  "Tan",
  "Teal",
  "Titanium",
  "Turquoise",
  "White",
  "Yellow"
];

export const getRandomExteriorColors = () => {
  return exteriorColor[Math.floor(Math.random() * exteriorColor.length)];
};

// Yards
export const yards: string[] = [
  "Anowar",
  "JAL Kisarazu",
  "JAL Kobe",
  "Kirin",
  "NR Japan Nogoya",
  "KLC Co.Ltd",
  "Miky Frontier",
  "M3LOGI Hakata",
  "Kamigomi Nagoya",
  "From-J Kobe",
];
export const getRandomYard = () => {
  return yards[Math.floor(Math.random() * yards.length)];
};

// fuelType
export const fuelType: string[] = ["Petrol", "Gas", "Electric"];

export const promotionText: string[] = [
  "Stock Offer",
  "Offer For You",
  "Special Offer!",
  "New Stock",
  "Stock Exclusive",
  "Special Price",
];
export const getFuelType = () => {
  return fuelType[Math.floor(Math.random() * fuelType.length)];
};

export const currency:string[] = [
  "JPY",
  "EUR",
  "GBP",
  "KS",
  "RUR",
  "THB",
  "USD"
]

export const FOB:string[] = [
  "FOB",
  "CF",
  "CIF",
  "Local",
  "Shipping Only"
]

export const vehicleType:string[] = [
  "Tow Truck",
  "Fudo Not Rolling",
  "Fudo Rolling",
  "JFA NZ TRS",
  "Jiso(Standard size)",
  "Loader",
  "Standard",
  "Truck ~3t",
  "Truck large"
]

export const driveType:string[] = [
  "2wd",
  "4wd",
  "All wheel drive",
]

export const doors:string[] = [
  "2",
  "3",
  "4",
  "5"
]

export const bodyStyle:string[] =[
  "Bus",
  "Convertible",
  "Couple",
  "Hatchback",
  "Machinery",
  "Mini Vehicle",
  "Sedan",
  "SUV",
  "Truck",
  "Unspecified",
  "Van/Minivan",
  "Wagon",
]

export const models:string[] = [
    "ABARTH ABARTH OTHERS",
    "ABT ABT Others",
    "AC Cobra AC Cobra Others",
    "AC Schnitzer AC Schnitzer Others",
    "Acura Acura Others",
    "Acura CL",
    "Acura CSX",
    "Acura EL",
    "Acura Integra",
]

export const steering:string[] = [
  "Center","Left","Right","Unspecified",
]

export const currentLoaction:string[] = [
  "-","In UK","New Castle","Southampton"
]

export const types = ["Service", "Parts", "Labor", "Accessories", "Inspection"];
export const extraCost = ["Car Cost", "Claims", "Iternal", "YT - Car Cost", "YT - Internal"];

export const descriptions = [
  "Oil change",
  "Brake pad replacement",
  "Tire alignment",
  "Car mats",
  "Engine inspection",
];

export const visibility = ["Public", "Private"];
export const published = ["Publish","Published", "Draft"];

export const getRandomMileage = () => {
  return Math.floor(Math.random() * 10000000);
};
export const getRandomPrice = () => {
  return Math.round(Math.random() * (999999 - 100000 + 1) + 100000);
};
export const getRandomVim = () => {
  return `THZPT${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`;
};
export const getRandomCarId = () => {
  return `#E${Math.floor(Math.random() * 1000000)}`;
};
export const getTrueOrFalse = () => {
  return Math.floor(Math.random() * 10) / 2 === 0 ? true : false;
};
export const getRandomRating = () => {
  return `${Math.ceil(Math.floor(Math.random() * 5) * 2) / 2}`;
};
export const getDiscount = (newHighlightStatus: string) => {
  return newHighlightStatus === "Reduced"
    ? Math.round(Math.random() * (1000 - 50000 + 1) + 50000)
    : 0;
};
export const getEnginePower = () => {
  return Math.round(Math.random() * (1000 - 50000 + 1) + 50000);
};
export const getMarketType = () => {
  return Math.random() < 0.3;
};
export const getRandomPackage = () => {
  return `${Math.round(Math.random() * 10)}L Touring Package`;
};

export const getRandomDate = () => {
  const startDate = new Date(2014, 0, 1);
  const endDate = new Date(2024, 11, 31);

  const randomTimestamp =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTimestamp);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return randomDate.toLocaleDateString("en-GB", options);
};

export const getRandomSize = () => {
  return Math.round(Math.random() * (100 - 400 + 1) + 400);
};

// Array of vehicle features
export const vehicleParts = [
  "AC",
  "PAS",
  "PW",
  "ABS",
  "AB",
  "R Key",
  "5-seater",
];

//Function to get true or false with 5% chance of true
export const getTrueOrFalseTenPercent = () => {
  return Math.random() < 0.1;
};

export const transmissions = ["Automatic", "Manual", "Special"];
export const getTransmission = () => {
  return transmissions[Math.floor(Math.random() * transmissions.length)];
};

export const yardname = [
  "Akebono",
  "Apex Logistics Nagoya",
  "ECL Kawasaki-Kisarazu",
  "Eddy Pandas Auto Parts Co",
  "Fujiwara Sukematsu",
  "J Trading Kawasaki",
  "MK International Hakata",
  "Real International Yokohama",
  "Sync Logistics Osaka",
  "THK",
];
export const getRandomYardName = () => {
  return yardname[Math.floor(Math.random() * yardname.length)];
};

// Sort Options
export const sortOptions = [
  "Date Latest to Oldest",
  "Date Oldest to Latest",
  "Price Low to High",
  "Price High to Low",
  "Mileage Low to High",
  "Mileage High to Low",
];

export const series =[
  'K',
  'J',
  'T',
  'E',
  'A',
  'D',
  'C',
  'M'
]

export const customers: string[] = [
  "Aung Myat Chit",
  "Autoview",
  "Brent Auto Sales",
  "Cancelled",
  "Charitos Charitou Motors Limited",
  "Cosmo Parts Ltd.",
  "D.R Autos Car Sales Ltd",
  "Evra Motors",
  "Jap Trade Direct Ltd",
  "Ko Aye Min Win",
  "Motoistic Autos",
  "RMA Car Sales",
  "Sussex Campervans",
  "Torque GT",
  "Valley Cars and Classics Ltd",
  "Woodland Motor Co"
];

export const carMakes: string[] = [
  "Toyota",
  "Honda",
  "Nissan",
  "Suzuki",
  "Mazda",
  "Mitsubishi",
  "Subaru",
  "Isuzu",
  "Daihatsu",
  "Lexus",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Ford",
  "Chevrolet",
  "Hyundai",
  "Kia",
  "Peugeot",
  "Fiat"
];

export const carModels: string[] = [
  "Corolla",
  "Civic",
  "Skyline",
  "Swift",
  "Axela",
  "Outlander",
  "Impreza",
  "Elf",
  "Tanto",
  "RX 350",
  "3 Series",
  "C-Class",
  "A4",
  "Golf",
  "Focus",
  "Cruze",
  "Elantra",
  "Sportage",
  "208",
  "Punto"
];

export const chassisNumbers: string[] = [
  // Japanese / Asian style
  "ZC72S-208605",
  "GR1-1111736",
  "DBA-GRS180-0034567",
  "NHW20-3359110",
  "ABA-ZRT260-0012345",
  "CBA-KDH205V-1234567",
  "DAA-ZVW30-0032134",
  "E-NCP10-123456",
  "UA-RA3-123456",
  "KL3SA86MJ1K123456", // Korean/Daewoo-style

  // European style (17-char VINs)
  "WVWZZZ1KZAW123456", // Volkswagen
  "VF1RFB00452123456", // Renault
  "WDB2030041A123456", // Mercedes-Benz
  "WAUZZZ8V3JA123456", // Audi
  "VF7UARHJ8CJ123456", // Citroën
  "TMBJN9NP3G7012345", // Skoda
  "ZFA19900004123456", // Fiat
  "YS3DD58N6X2123456", // Saab
  "VSSZZZ6JZ9R123456", // SEAT
  "W0L0XCE7571123456"  // Opel/Vauxhall
];

export const faxLabels = [
  "",
  "抹",
  "検",
  "輸出予定",
  "仮抹消",
  "一時抹消",
  "登録",
  "輸出抹消",
  "転送済み",
  "書類なし",
];