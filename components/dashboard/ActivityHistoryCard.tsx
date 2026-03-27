import { mockActivityHistory } from "@/data/mocks";
import { formatCurrency, formatDate } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowDownLeft, ArrowUpRight, RefreshCw, ShoppingCart } from "lucide-react";
import type { ActivityItem } from "@/types";

const typeConfig = {
  receive: { icon: ArrowDownLeft, color: "text-emerald-400", bg: "bg-emerald-500/10", label: "Received" },
  send: { icon: ArrowUpRight, color: "text-red-400", bg: "bg-red-500/10", label: "Sent" },
  swap: { icon: RefreshCw, color: "text-blue-400", bg: "bg-blue-500/10", label: "Swapped" },
  buy: { icon: ShoppingCart, color: "text-violet-400", bg: "bg-violet-500/10", label: "Bought" },
};

const statusColors = {
  completed: "text-emerald-400 bg-emerald-500/10",
  pending: "text-yellow-400 bg-yellow-500/10",
  failed: "text-red-400 bg-red-500/10",
};

function ActivityRow({ item }: Readonly<{ item: ActivityItem }>) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
      <div className={`size-9 rounded-xl flex items-center justify-center ${config.bg}`}>
        <Icon size={16} className={config.color} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white">{config.label} {item.asset}</p>
        <p className="text-xs text-slate-500">{formatDate(item.timestamp)}</p>
      </div>
      <div className="text-right">
        <p className={`text-sm font-semibold ${item.type === "send" ? "text-red-400" : "text-emerald-400"}`}>
          {item.type === "send" ? "-" : "+"}{formatCurrency(item.usdValue)}
        </p>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[item.status]}`}>
          {item.status}
        </span>
      </div>
    </div>
  );
}

export default function ActivityHistoryCard() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
      <SectionHeader
        title="Activity History"
        subtitle="Recent transactions"
        action={
          <button className="text-xs text-blue-400 hover:underline font-semibold">View All</button>
        }
      />
      <div>
        {mockActivityHistory.map((item) => (
          <ActivityRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
