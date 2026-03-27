"use client";

import { Bell, Search } from "lucide-react";
import { mockUser } from "@/data/mocks";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/5 px-8 py-4 bg-slate-950/60 backdrop-blur-sm shrink-0">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-extrabold text-white">Dashboard Overview</h1>
        <span className="text-xs text-slate-500 font-medium">Last updated: Just now</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search assets..."
            className="bg-slate-900/50 border border-slate-700/50 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/40 w-48"
          />
        </div>
        <button className="relative p-2 rounded-xl bg-slate-900/50 border border-slate-700/50 text-slate-400 hover:text-white transition">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-400 rounded-full" />
        </button>
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400">
            {mockUser.avatar}
          </div>
          <span className="text-sm font-semibold text-slate-300 hidden sm:block">{mockUser.name}</span>
        </div>
      </div>
    </header>
  );
}
