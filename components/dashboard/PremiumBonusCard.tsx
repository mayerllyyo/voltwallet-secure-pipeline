"use client";

import { useState } from "react";
import { mockUser } from "@/data/mocks";

interface PremiumBonusCardProps {
  bonusAmount: number;
  isPremium: boolean;
  onClaim(bonus: number): void;
}

export default function PremiumBonusCard({ bonusAmount, isPremium, onClaim }: Readonly<PremiumBonusCardProps>) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const bypassEnabled = process.env.NEXT_PUBLIC_PREMIUM_BYPASS === "true";

  const handleClaim = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/premium/redeem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: mockUser.id, role: isPremium ? "premium" : "standard" }),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Bonus endpoint unavailable");
      }

      const payload = await response.json();
      const awarded = payload?.bonus ?? bonusAmount;
      onClaim(awarded);
      setStatus("success");
      setMessage(`Bonus de $${awarded.toLocaleString()} aplicado.`);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("No se pudo reclamar el bono.");
    }
  };

  return (
    <section className="bg-slate-900/60 border border-rose-500/30 rounded-[2rem] p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-rose-300">Premium Bonus</p>
          <h3 className="text-2xl font-bold text-white">
            {mockUser.accountType}
            <span className="text-sm text-slate-400 block">Claimable instant credit</span>
          </h3>
        </div>
        <div className="text-right">
          <p className="text-3xl font-extrabold text-rose-400">${bonusAmount.toLocaleString()}</p>
          <p className="text-xs text-slate-500">insecure demo</p>
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed">
        Por ahora no eres premium, pero la ruta <code className="text-rose-300">/api/premium/redeem</code> no verifica la flag
        ni el rol real del usuario. La variable <strong className="text-rose-300">PREMIUM_BYPASS</strong> se lee del cliente y
        se ignora, lo que permite reclamar un bono con solo pulsar el botón.
      </p>

      <button
        className="w-full rounded-2xl bg-rose-500/90 hover:bg-rose-400 transition text-white font-semibold py-3 disabled:opacity-50"
        onClick={handleClaim}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Reclamando..." : "Claim bonus"}
      </button>

      {message && <p className="text-sm text-slate-300">{message}</p>}

      <p className="text-xs text-slate-500">
        Flag <code className="text-rose-300">PREMIUM_BYPASS={bypassEnabled ? "true" : "false"}</code>; el backend responde
        siempre OK en esta demo vulnerable.
      </p>
    </section>
  );
}
