"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import HeroBalanceCard from "@/components/dashboard/HeroBalanceCard";
import ProfileSummaryCard from "@/components/dashboard/ProfileSummaryCard";
import SecurityStatusCard from "@/components/dashboard/SecurityStatusCard";
import MarketOverview from "@/components/dashboard/MarketOverview";
import AssetAllocationCard from "@/components/dashboard/AssetAllocationCard";
import WeeklyFlowCard from "@/components/dashboard/WeeklyFlowCard";
import ActivityHistoryCard from "@/components/dashboard/ActivityHistoryCard";
import PremiumBonusCard from "@/components/dashboard/PremiumBonusCard";
import { mockPremiumBonus } from "@/data/mocks";

export default function DashboardPage() {
  const [pendingBonus, setPendingBonus] = useState(0);

  const handleBonusClaim = (bonus: number) => {
    setPendingBonus((prev) => prev + bonus);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Top grid: hero + profile + security */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <HeroBalanceCard extraBonus={pendingBonus} />
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <ProfileSummaryCard />
              <SecurityStatusCard />
            </div>
          </div>

          {/* Premium bonus call-to-action */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <PremiumBonusCard
                bonusAmount={mockPremiumBonus.amount}
                isPremium={false}
                onClaim={handleBonusClaim}
              />
            </div>
          </div>

          {/* Middle grid: market + allocation + weekly flow */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <MarketOverview />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <AssetAllocationCard />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <WeeklyFlowCard />
            </div>
          </div>

          {/* Bottom: activity */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <ActivityHistoryCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
