import { mockUser } from "@/data/mocks";
import { BadgeCheck, Calendar } from "lucide-react";

export default function ProfileSummaryCard() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="size-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-lg font-bold text-blue-400">
          {mockUser.avatar}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white leading-tight">{mockUser.name}</h3>
          <p className="text-slate-500 text-xs font-mono">ID: {mockUser.id}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <BadgeCheck size={14} className="text-blue-400" />
          <span>{mockUser.verificationLevel}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Calendar size={14} className="text-slate-500" />
          <span>Member since {mockUser.memberSince}</span>
        </div>
      </div>
      <div className="mt-4 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg inline-block">
        <span className="text-blue-400 text-xs font-bold">{mockUser.accountType}</span>
      </div>
    </section>
  );
}
