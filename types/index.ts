export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  accountType: string;
  memberSince: string;
  verificationLevel: string;
}

export interface PortfolioSummary {
  totalValue: number;
  change24h: number;
  changePercent24h: number;
  changeWeekly: number;
  changePercentWeekly: number;
}

export interface MarketAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  volume: string;
  marketCap: string;
}

export interface ActivityItem {
  id: string;
  type: "send" | "receive" | "swap" | "buy";
  asset: string;
  amount: number;
  usdValue: number;
  timestamp: string;
  status: "completed" | "pending" | "failed";
  counterparty?: string;
}

export interface AllocationItem {
  asset: string;
  symbol: string;
  percentage: number;
  value: number;
  color: string;
}

export interface WeeklyFlowItem {
  day: string;
  inflow: number;
  outflow: number;
}

export interface SecurityStatus {
  twoFA: boolean;
  biometric: boolean;
  backupCode: boolean;
  kycVerified: boolean;
  score: number;
}
