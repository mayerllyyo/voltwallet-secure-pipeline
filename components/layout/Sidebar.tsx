"use client";

import { usePathname } from "next/navigation";
import { LayoutDashboard, ArrowLeftRight, PieChart, History, Settings } from "lucide-react";
import SidebarItem from "./SidebarItem";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Exchange", href: "/exchange", icon: ArrowLeftRight },
  { label: "Portfolio", href: "/portfolio", icon: PieChart },
  { label: "History", href: "/history", icon: History },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/5 bg-slate-950 flex flex-col z-50 shrink-0">
      <div className="p-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="size-9 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
            <img 
              src="/logo.png" 
              alt="VoltWallet Logo"
              width={40} 
              height={40} 
              className="size-10"
            />
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight">
            Volt<span className="text-blue-400">Wallet</span>
          </h2>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <SidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
            active={pathname === item.href}
          />
        ))}
      </nav>
      <div className="p-4 border-t border-white/5">
        <p className="text-xs text-slate-600 text-center">VoltWallet v1.0</p>
      </div>
    </aside>
  );
}
