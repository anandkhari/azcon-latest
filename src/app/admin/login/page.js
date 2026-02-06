"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Lock, User, ShieldCheck, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err) {
      setError("Authentication Failed. Invalid Credentials.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A192F] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#26C6DA] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#26C6DA] rounded-full blur-[120px]" />
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="relative w-full max-w-md p-1 px-1 bg-gradient-to-b from-[#26C6DA] to-transparent shadow-2xl">
        <div className="bg-[#0A192F] p-10 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#26C6DA]/10 mb-4">
              <ShieldCheck className="text-[#26C6DA] w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic">
              Azcon <span className="text-[#26C6DA] not-italic">Control</span>
            </h1>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">
              Authorized Personnel Only
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#26C6DA] uppercase tracking-widest ml-1">Access ID</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#26C6DA] transition-colors" />
                <input
                  type="email"
                  required
                  className="w-full bg-[#0D213F] border border-gray-800 text-white p-4 pl-12 outline-none focus:border-[#26C6DA] transition-all font-medium text-sm"
                  placeholder="admin@azcon.com"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#26C6DA] uppercase tracking-widest ml-1">Security Key</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#26C6DA] transition-colors" />
                <input
                  type="password"
                  required
                  className="w-full bg-[#0D213F] border border-gray-800 text-white p-4 pl-12 outline-none focus:border-[#26C6DA] transition-all font-medium text-sm"
                  placeholder="••••••••"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border-l-4 border-red-500 p-3">
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              disabled={isLoading}
              className="w-full bg-[#26C6DA] text-[#0A192F] py-4 font-black uppercase tracking-[0.4em] text-xs hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(38,198,218,0.3)] hover:shadow-[0_0_30px_rgba(38,198,218,0.5)]"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Initialize Session
                </>
              )}
            </button>
          </form>

          {/* Footer Metadata */}
          <div className="pt-6 border-t border-gray-900 flex justify-between items-center text-[8px] font-mono text-gray-600 uppercase tracking-widest">
            <span>Encrypted: AES-256</span>
            <span>V 4.0.2</span>
          </div>
        </div>
      </div>
    </div>
  );
}