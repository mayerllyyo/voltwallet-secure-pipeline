export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="/logo.png" 
        alt="VoltWallet Logo"
        width={40} 
        height={40} 
        className="size-10"
      />
      <h2 className="text-white text-3xl font-extrabold leading-tight tracking-tight">
        Volt<span className="text-blue-400">Wallet</span>
      </h2>
    </div>
  );
}
