import { mockSecurityStatus } from "@/data/mocks";
import { Shield, CheckCircle, XCircle } from "lucide-react";

interface SecurityItemProps {
  label: string;
  enabled: boolean;
}

function SecurityItem({ label, enabled }: Readonly<SecurityItemProps>) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-sm text-slate-400">{label}</span>
      {enabled ? (
        <CheckCircle size={16} className="text-emerald-400" />
      ) : (
        <XCircle size={16} className="text-red-400" />
      )}
    </div>
  );
}

export default function SecurityStatusCard() {
  const { twoFA, biometric, backupCode, kycVerified, score } = mockSecurityStatus;

  return (
    <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-blue-400" />
          <h3 className="text-white font-bold">Security Status</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <span className="text-emerald-400 text-xs font-bold">{score}</span>
          </div>
          <span className="text-xs text-slate-500">/100</span>
        </div>
      </div>
      <SecurityItem label="Two-Factor Auth" enabled={twoFA} />
      <SecurityItem label="Biometric Login" enabled={biometric} />
      <SecurityItem label="Backup Code" enabled={backupCode} />
      <SecurityItem label="KYC Verified" enabled={kycVerified} />
    </section>
  );
}
