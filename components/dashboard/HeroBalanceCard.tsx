"use client";

import { AreaChart } from "@tremor/react";
import { ArrowUpRight } from "lucide-react";
import { mockPortfolio } from "@/data/mocks";
import { formatCurrency, formatPercent } from "@/lib/utils";
import StatBadge from "@/components/ui/StatBadge";

const chartData = [
  { date: "Mar 9", value: 38200 },
  { date: "Mar 10", value: 39100 },
  { date: "Mar 11", value: 38600 },
  { date: "Mar 12", value: 40200 },
  { date: "Mar 13", value: 39800 },
  { date: "Mar 14", value: 41500 },
  { date: "Mar 15", value: 42850 },
];

export default function HeroBalanceCard() {
  return (
    <section className="bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent rounded-[2.5rem] p-8 border border-blue-500/20">
      <p className="text-slate-400 text-xs font-medium mb-2 uppercase tracking-widest">
        Total Portfolio Value
      </p>
      <h2 className="text-white text-5xl font-extrabold tracking-tight mb-1">
        {formatCurrency(mockPortfolio.totalValue)}
      </h2>
      <div className="flex items-center gap-2 mt-2 mb-6">
        <ArrowUpRight size={16} className="text-emerald-400" />
        <span className="text-emerald-400 text-sm font-semibold">
          {formatCurrency(mockPortfolio.change24h)} ({formatPercent(mockPortfolio.changePercent24h)})
        </span>
        <span className="text-slate-500 text-xs">24h</span>
      </div>

      <AreaChart
        className="
          h-40
          [&_.recharts-area-area]:fill-[#136dec]/20
          [&_.recharts-area-curve]:stroke-[#136dec]
          [&_.recharts-cartesian-axis-tick-value]:fill-slate-400
        "
        data={chartData}
        index="date"
        categories={["value"]}
        colors={["blue"]}
        showLegend={false}
        showGridLines={false}
        showXAxis={true}
        showYAxis={false}
        curveType="natural"
        valueFormatter={(v) => formatCurrency(v, 0)}
      />

      <div className="flex gap-3 mt-4 flex-wrap">
        <StatBadge
          label="7d Change"
          value={formatPercent(mockPortfolio.changePercentWeekly)}
          positive={mockPortfolio.changeWeekly >= 0}
        />
        <StatBadge
          label="24h Volume"
          value="$28.4B"
          neutral
        />
        <StatBadge
          label="Portfolio Rank"
          value="Top 12%"
          positive
        />
      </div>
    </section>
  );
}
