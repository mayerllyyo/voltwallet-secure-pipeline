import { mockMarketAssets } from "@/data/mocks";
import { formatCurrency, formatPercent } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function MarketOverview() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
      <SectionHeader title="Market Overview" subtitle="Live prices" />
      <div className="space-y-3">
        {mockMarketAssets.map((asset) => {
          const isPositive = asset.changePercent24h >= 0;
          return (
            <div
              key={asset.id}
              className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                  {asset.symbol.slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{asset.name}</p>
                  <p className="text-xs text-slate-500">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-white">{formatCurrency(asset.price)}</p>
                <div className={`flex items-center gap-1 justify-end text-xs font-medium ${isPositive ? "text-emerald-400" : "text-red-400"}`}>
                  {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {formatPercent(asset.changePercent24h)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
