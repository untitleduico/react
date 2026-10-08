/** A commodity trade, modelled on the "Commodity" dataset of the MUI X Data Grid demos. */
export interface CommodityRow {
    id: number;
    desk: string;
    commodity: string;
    tags: string[];
    traderName: string;
    traderEmail: string;
    quantity: number;
    /** The filled part of the quantity, from 0 to 1. */
    filledQuantity: number;
    isFilled: boolean;
    status: string;
    unitPrice: number;
    unitPriceCurrency: string;
    feeRate: number;
    incoTerm: string;
    pnl: number;
    maturityDate: Date;
    tradeDate: Date;
    brokerId: string;
    brokerName: string;
    counterPartyName: string;
    /** The ISO code of the country. */
    counterPartyCountry: string;
    counterPartyCurrency: string;
    counterPartyAddress: string;
    counterPartyCity: string;
    taxCode: string;
    contractType: string;
    rateType: string;
    lastUpdated: Date;
    dateCreated: Date;
    certifications: string[];
}

/** Options */

export const commodityOptions = [
    "Adzuki bean",
    "Cocoa",
    "Coffee C",
    "Corn",
    "Cotton No.2",
    "Frozen Concentrated Orange Juice",
    "Milk",
    "Oats",
    "Rapeseed",
    "Robusta coffee",
    "Rough Rice",
    "Soybean Meal",
    "Soybean Oil",
    "Soybeans",
    "Sugar No.11",
    "Sugar No.14",
    "Wheat",
];

export const statusOptions = ["Open", "Partially Filled", "Filled", "Rejected"];

export const currencyOptions = ["USD", "GBP", "JPY", "EUR", "BRL", "MXN", "AUD", "CAD", "NZD", "ARS", "CHF", "THB", "HKD", "TRY"];

export const incotermOptions = [
    "EXW (Ex Works)",
    "FAS (Free Alongside Ship)",
    "FCA (Free Carrier)",
    "CPT (Carriage Paid To)",
    "DAP (Delivered at Place)",
    "DPU (Delivered at Place Unloaded)",
    "DDP (Delivered Duty Paid)",
];

export const taxCodeOptions = ["BR", "1250L", "20G", "BC45", "IGN179"];

export const contractTypeOptions = ["FP", "TM", "CR"];

export const rateTypeOptions = ["Fixed", "Floating"];

export const tradeTagOptions = [
    "Hedge",
    "Speculative",
    "Arbitrage",
    "Spot",
    "Forward",
    "Option",
    "Swap",
    "Futures",
    "Derivative",
    "Leveraged",
    "Short",
    "Long",
    "Day Trade",
    "Swing",
    "Algorithmic",
    "OTC",
    "Exchange",
    "Institutional",
];

export const certificationOptions = ["Fair Trade", "Organic", "Rainforest Alliance", "UTZ", "Non-GMO"];

export const countryOptions = [
    { value: "AR", label: "Argentina" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "BE", label: "Belgium" },
    { value: "BR", label: "Brazil" },
    { value: "CA", label: "Canada" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CO", label: "Colombia" },
    { value: "DK", label: "Denmark" },
    { value: "EG", label: "Egypt" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
    { value: "GR", label: "Greece" },
    { value: "HK", label: "Hong Kong" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JP", label: "Japan" },
    { value: "KE", label: "Kenya" },
    { value: "MY", label: "Malaysia" },
    { value: "MX", label: "Mexico" },
    { value: "NL", label: "Netherlands" },
    { value: "NZ", label: "New Zealand" },
    { value: "NG", label: "Nigeria" },
    { value: "NO", label: "Norway" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SG", label: "Singapore" },
    { value: "ZA", label: "South Africa" },
    { value: "KR", label: "South Korea" },
    { value: "ES", label: "Spain" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "TH", label: "Thailand" },
    { value: "TR", label: "Turkey" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "VN", label: "Vietnam" },
];

const firstNames = [
    "Olivia",
    "Phoenix",
    "Lana",
    "Demi",
    "Candice",
    "Natali",
    "Drew",
    "Orlando",
    "Andi",
    "Kate",
    "Ava",
    "Koray",
    "Zahir",
    "Mollie",
    "Alec",
    "Amélie",
    "Sienna",
    "Ammar",
    "Mathilde",
    "Caitlyn",
    "Lily-Rose",
    "Olly",
    "Fleur",
    "Julius",
    "Eduard",
    "Nikolas",
    "Noah",
    "Aliah",
    "Lucy",
    "Florence",
];

const lastNames = [
    "Rhye",
    "Baker",
    "Steiner",
    "Wilkinson",
    "Wu",
    "Craig",
    "Cano",
    "Diggs",
    "Lane",
    "Morrison",
    "Wright",
    "Okumus",
    "Ali",
    "Hall",
    "Whitten",
    "Laurent",
    "Hewitt",
    "Foley",
    "Lewis",
    "King",
    "Chedjou",
    "Schroeder",
    "Cook",
    "Vaughan",
    "Franz",
    "Gibbons",
    "Pierce",
    "Lane",
    "Bond",
    "Shaw",
];

const companyNames = [
    "Acme Commodities",
    "Blue Harbor Trading",
    "Granite Peak Capital",
    "Northwind Markets",
    "Silverline Brokers",
    "Evergreen Agri",
    "Summit Grain Co.",
    "Atlas Futures",
    "Meridian Partners",
    "Harvest Moon Holdings",
    "Ironwood Securities",
    "Coastal Exchange",
    "Golden Field Group",
    "Riverbend Logistics",
    "Pioneer Agrisolutions",
    "Starboard Capital",
    "Cedar & Stone",
    "Horizon Trade House",
    "Oakmont Brokerage",
    "Prairie Wind Corp",
];

const cities = [
    "Amsterdam",
    "Austin",
    "Buenos Aires",
    "Chicago",
    "Geneva",
    "Hong Kong",
    "Houston",
    "Kansas City",
    "London",
    "Melbourne",
    "Mumbai",
    "Rotterdam",
    "São Paulo",
    "Singapore",
    "Sydney",
    "Tokyo",
    "Toronto",
    "Winnipeg",
    "Zurich",
];

const streets = ["Market Street", "Harbor Road", "King Street", "Grain Exchange Way", "Riverside Drive", "Station Road", "Commerce Avenue", "Mill Lane"];

/** Generator */

// A seeded random number generator (mulberry32), so the server and the client generate the same rows.
const createRandom = (seed: number) => {
    let state = seed;
    return () => {
        state = (state + 0x6d2b79f5) | 0;
        let value = Math.imul(state ^ (state >>> 15), 1 | state);
        value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
};

// All dates are relative to a fixed day, so the rows don't change between renders.
const REFERENCE_TIME = Date.UTC(2025, 5, 16, 12);
const DAY = 24 * 60 * 60 * 1000;

export const generateCommodityRows = (count: number, seed = 1): CommodityRow[] => {
    const random = createRandom(seed);
    const between = (min: number, max: number) => min + random() * (max - min);
    const integer = (min: number, max: number) => Math.floor(between(min, max + 1));
    const pick = <T>(items: T[]): T => items[integer(0, items.length - 1)] as T;
    // A Fisher-Yates shuffle draws a fixed number of random values. Shuffling with `sort` doesn't: the number of comparisons
    // varies, which would make the rows differ between runs.
    const pickSome = <T>(items: T[], min: number, max: number) => {
        const shuffled = [...items];
        for (let index = shuffled.length - 1; index > 0; index--) {
            const other = integer(0, index);
            [shuffled[index], shuffled[other]] = [shuffled[other] as T, shuffled[index] as T];
        }
        return shuffled.slice(0, integer(min, max));
    };
    const hex = (length: number) => Array.from({ length }, () => integer(0, 15).toString(16)).join("");

    return Array.from({ length: count }, (_, index) => {
        const firstName = pick(firstNames);
        const lastName = pick(lastNames);
        const quantity = integer(1_000, 100_000);
        const filledQuantity = Math.round(quantity * random()) / quantity;

        return {
            id: index + 1,
            desk: `D-${integer(0, 10_000)}`,
            commodity: pick(commodityOptions),
            tags: pickSome(tradeTagOptions, 1, 4),
            traderName: `${firstName} ${lastName}`,
            traderEmail: `${firstName}.${lastName}@untitledui.com`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""),
            quantity,
            filledQuantity,
            isFilled: filledQuantity === 1,
            status: pick(statusOptions),
            unitPrice: Math.round(between(1, 100) * 100) / 100,
            unitPriceCurrency: pick(currencyOptions),
            feeRate: Math.round(between(0.1, 0.4) * 1000) / 1000,
            incoTerm: pick(incotermOptions),
            pnl: Math.round(between(-100_000_000, 100_000_000) * 100) / 100,
            maturityDate: new Date(REFERENCE_TIME + integer(1, 365) * DAY),
            tradeDate: new Date(REFERENCE_TIME - integer(0, 30) * DAY),
            brokerId: `${hex(8)}-${hex(4)}-${hex(4)}-${hex(4)}-${hex(12)}`,
            brokerName: pick(companyNames),
            counterPartyName: pick(companyNames),
            counterPartyCountry: pick(countryOptions).value,
            counterPartyCurrency: pick(currencyOptions),
            counterPartyAddress: `${integer(1, 999)} ${pick(streets)}`,
            counterPartyCity: pick(cities),
            taxCode: pick(taxCodeOptions),
            contractType: pick(contractTypeOptions),
            rateType: pick(rateTypeOptions),
            lastUpdated: new Date(REFERENCE_TIME - integer(1, 48 * 60) * 60 * 1000),
            dateCreated: new Date(REFERENCE_TIME - integer(1, 365) * DAY),
            certifications: pickSome(certificationOptions, 0, 3),
        };
    });
};
