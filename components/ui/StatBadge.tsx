interface StatBadgeProps {
  label: string;
  value: string;
  positive?: boolean;
  neutral?: boolean;
}

export default function StatBadge({ label, value, positive, neutral }: Readonly<StatBadgeProps>) {
  const colorClass = neutral
    ? "text-slate-400 bg-slate-800/50 border-slate-700/50"
    : positive
    ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    : "text-red-400 bg-red-500/10 border-red-500/20";

  return (
    <div className={`flex flex-col gap-0.5 px-3 py-2 rounded-xl border ${colorClass}`}>
      <span className="text-xs font-medium opacity-70">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}
