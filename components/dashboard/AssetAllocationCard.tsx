"use client";

import { DonutChart } from "@tremor/react";
import { mockAllocation } from "@/data/mocks";
import { formatCurrency } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AssetAllocationCard() {
  const chartData = mockAllocation.map((item) => ({
    name: item.symbol,
    value: item.percentage,
  }));

  return (
    <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
      <SectionHeader title="Asset Allocation" subtitle="Portfolio distribution" />
      <DonutChart
        className="h-44 mt-2"
        data={chartData}
        category="value"
        index="name"
        colors={["amber", "indigo", "violet", "yellow", "slate"]}
        showLabel={false}
        valueFormatter={(v) => `${v}%`}
      />
      <div className="mt-4 space-y-2">
        {mockAllocation.map((item) => (
          <div key={item.symbol} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-400">{item.asset}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-xs">{item.percentage}%</span>
              <span className="text-white font-medium">{formatCurrency(item.value, 0)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
