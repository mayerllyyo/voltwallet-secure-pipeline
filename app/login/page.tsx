"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Shield, Lock, CheckCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 sm:p-8 bg-slate-950">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex w-full max-w-[480px] flex-col gap-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <Logo />
          <div className="text-center space-y-2">
            <h1 className="text-white text-4xl font-bold leading-tight">Welcome Back</h1>
            <p className="text-slate-400 text-base font-medium">
              Securely access your digital assets and history
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="flex flex-col gap-5 w-full bg-slate-800/20 p-6 sm:p-8 rounded-3xl border border-slate-700/50 backdrop-blur-md">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-semibold px-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/50 py-4 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-slate-300 text-sm font-semibold">Password</label>
              <a href="#" className="text-blue-400 text-sm font-bold hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/50 py-4 px-4 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 py-4 text-base font-bold text-white transition"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="relative my-2 flex items-center">
            <div className="flex-grow border-t border-slate-700" />
            <span className="mx-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Or continue with
            </span>
            <div className="flex-grow border-t border-slate-700" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900/50 py-3 text-sm font-bold text-white hover:bg-slate-800 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900/50 py-3 text-sm font-bold text-white hover:bg-slate-800 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.4.75 3.22.8 1.22-.24 2.39-.93 3.7-.84 1.58.12 2.76.72 3.53 1.9-3.21 1.96-2.67 5.9.48 7.22-.57 1.5-1.3 2.99-2.93 3.8zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Apple
            </button>
          </div>
        </div>

        {/* Create Account */}
        <p className="text-center text-sm font-medium text-slate-400">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-400 font-bold hover:underline">
            Create Account
          </a>
        </p>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Shield size={14} className="text-blue-400" />
            <span>256-bit SSL</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Lock size={14} className="text-blue-400" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CheckCircle size={14} className="text-blue-400" />
            <span>SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
