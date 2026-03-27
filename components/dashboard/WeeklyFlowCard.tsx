"use client";

import { BarChart } from "@tremor/react";
import { mockWeeklyFlow } from "@/data/mocks";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WeeklyFlowCard() {
  const chartData = mockWeeklyFlow.map((item) => ({
    day: item.day,
    Inflow: item.inflow,
    Outflow: item.outflow,
  }));

  return (
    <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
      <SectionHeader title="Weekly Flow" subtitle="Inflow vs Outflow" />
      <BarChart
        className="h-44 mt-2"
        data={chartData}
        index="day"
        categories={["Inflow", "Outflow"]}
        colors={["blue", "slate"]}
        showLegend={true}
        showGridLines={false}
        valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
      />
    </section>
  );
}
