"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function SidebarItem({ label, href, icon: Icon, active }: Readonly<SidebarItemProps>) {
  return (
    <Link
      href={href}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
        active
          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
      }`}
    >
      <Icon size={18} />
      {label}
    </Link>
  );
}
