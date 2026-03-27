interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({ title, subtitle, action }: Readonly<SectionHeaderProps>) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        {subtitle && <p className="text-slate-500 text-xs mt-0.5">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
