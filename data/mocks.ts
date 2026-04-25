import type {
  User,
  PortfolioSummary,
  MarketAsset,
  ActivityItem,
  AllocationItem,
  WeeklyFlowItem,
  SecurityStatus,
} from "@/types";

export const mockUser: User = {
  id: "8829-XL-04",
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  avatar: "AJ",
  accountType: "Standard Account",
  memberSince: "Jan 2022",
  verificationLevel: "Verified User",
};

export const mockPremiumBonus = {
  amount: 500,
  description: "Instant premium credit",
  smallPrint: "Demo only: no guard enforced",
};

export const mockPortfolio: PortfolioSummary = {
  totalValue: 42850.32,
  change24h: 1243.5,
  changePercent24h: 2.98,
  changeWeekly: 3120.8,
  changePercentWeekly: 7.86,
};

export const mockMarketAssets: MarketAsset[] = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    price: 67420.5,
    change24h: 1245.3,
    changePercent24h: 1.88,
    volume: "$28.4B",
    marketCap: "$1.32T",
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    price: 3540.2,
    change24h: -45.8,
    changePercent24h: -1.28,
    volume: "$12.1B",
    marketCap: "$425B",
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    price: 178.9,
    change24h: 8.4,
    changePercent24h: 4.93,
    volume: "$3.2B",
    marketCap: "$78B",
  },
  {
    id: "bnb",
    name: "BNB",
    symbol: "BNB",
    price: 598.3,
    change24h: -12.1,
    changePercent24h: -1.98,
    volume: "$1.8B",
    marketCap: "$92B",
  },
  {
    id: "ada",
    name: "Cardano",
    symbol: "ADA",
    price: 0.62,
    change24h: 0.03,
    changePercent24h: 5.08,
    volume: "$680M",
    marketCap: "$21B",
  },
];

export const mockActivityHistory: ActivityItem[] = [
  {
    id: "act-001",
    type: "receive",
    asset: "Bitcoin",
    amount: 0.025,
    usdValue: 1685.51,
    timestamp: "2024-03-15T14:32:00Z",
    status: "completed",
    counterparty: "0x1a2b...3c4d",
  },
  {
    id: "act-002",
    type: "send",
    asset: "Ethereum",
    amount: 0.5,
    usdValue: 1770.1,
    timestamp: "2024-03-14T09:15:00Z",
    status: "completed",
    counterparty: "0x5e6f...7g8h",
  },
  {
    id: "act-003",
    type: "swap",
    asset: "SOL → ETH",
    amount: 10,
    usdValue: 1789.0,
    timestamp: "2024-03-13T18:45:00Z",
    status: "completed",
  },
  {
    id: "act-004",
    type: "buy",
    asset: "Solana",
    amount: 5,
    usdValue: 894.5,
    timestamp: "2024-03-12T11:22:00Z",
    status: "completed",
  },
  {
    id: "act-005",
    type: "receive",
    asset: "BNB",
    amount: 2.1,
    usdValue: 1256.43,
    timestamp: "2024-03-11T16:00:00Z",
    status: "pending",
    counterparty: "0x9i0j...k1l2",
  },
];

export const mockAllocation: AllocationItem[] = [
  { asset: "Bitcoin", symbol: "BTC", percentage: 45, value: 19282.64, color: "#F59E0B" },
  { asset: "Ethereum", symbol: "ETH", percentage: 28, value: 11998.09, color: "#6366F1" },
  { asset: "Solana", symbol: "SOL", percentage: 15, value: 6427.55, color: "#8B5CF6" },
  { asset: "BNB", symbol: "BNB", percentage: 8, value: 3428.03, color: "#EAB308" },
  { asset: "Other", symbol: "OTHER", percentage: 4, value: 1714.01, color: "#64748B" },
];

export const mockWeeklyFlow: WeeklyFlowItem[] = [
  { day: "Mon", inflow: 3200, outflow: 1800 },
  { day: "Tue", inflow: 2800, outflow: 2200 },
  { day: "Wed", inflow: 4500, outflow: 1200 },
  { day: "Thu", inflow: 1900, outflow: 3100 },
  { day: "Fri", inflow: 5200, outflow: 2400 },
  { day: "Sat", inflow: 3800, outflow: 1600 },
  { day: "Sun", inflow: 2600, outflow: 900 },
];

export const mockSecurityStatus: SecurityStatus = {
  twoFA: true,
  biometric: true,
  backupCode: false,
  kycVerified: true,
  score: 85,
};
