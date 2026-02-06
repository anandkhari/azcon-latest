"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  FileText, 
  LogOut, 
  ChevronRight, 
  Terminal 
} from "lucide-react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const isLoginRoute = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginRoute) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/admin/login");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [isLoginRoute, router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  // 🛡️ AUTH LOADING STATE (Industrial Loader)
  if (loading && !isLoginRoute) {
    return (
      <div className="min-h-screen bg-[#0A192F] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-[#26C6DA]/20 border-t-[#26C6DA] rounded-full animate-spin mb-4" />
        <span className="text-[10px] font-black text-[#26C6DA] uppercase tracking-[0.5em] animate-pulse">
          Authenticating_Session
        </span>
      </div>
    );
  }

  // 🎯 LOGIN ROUTE (Minimalist dark focus)
  if (isLoginRoute) return <>{children}</>;

  return (
    <div className="flex h-screen  text-white overflow-hidden">
      
      {/* --- SIDEBAR: THE COMMAND COLUMN --- */}
      <aside className="w-72 border-r border-white/5 flex flex-col relative z-20 bg-[#0A192F]">
        {/* Branding Header */}
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-6 bg-[#26C6DA]" />
            <h2 className=" text-2xl text-[#26C6DA] tracking-tighter uppercase italic">
              Azcon
            </h2>
          </div>
          
        </div>

        {/* Navigation Interface */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          <NavLink 
            href="/admin/gallery" 
            icon={<ImageIcon size={18} />} 
            label="Visual Assets" 
            active={pathname === "/admin/gallery"} 
          />
          <NavLink 
            href="/admin/blog" 
            icon={<FileText size={18} />} 
            label="Intel / Blog" 
            active={pathname === "/admin/blog"} 
          />
        </nav>

        {/* System Footer & Sign Out */}
        <div className="p-6 border-t border-white/5 bg-[#0D213F]/50">
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-3 text-gray-500 hover:text-red-400 transition-colors w-full group"
          >
            <div className="p-2 rounded bg-white/5 group-hover:bg-red-500/10 transition-colors">
              <LogOut size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Terminate Session</span>
          </button>
          
          <div className="mt-6 flex items-center justify-between opacity-30">
            <span className="text-[8px] font-mono">v1.0.48-STABLE</span>
            <Terminal size={12} />
          </div>
        </div>
      </aside>

      {/* --- MAIN INTERFACE AREA --- */}
      <main className="flex-1 flex bg-gray-50 flex-col relative overflow-hidden ">
     

        {/* Viewport Content */}
        <div className="flex-1 overflow-auto p-10 custom-scrollbar">
          {children}
        </div>
      </main>

     
    </div>
  );
}

// 🛠️ Sub-Component for Clean Nav Logic
function NavLink({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`
        group flex items-center justify-between p-4 transition-all duration-300 relative overflow-hidden
        ${active ? 'bg-[#26C6DA] text-[#0A192F]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
      `}
    >
      <div className="flex items-center gap-4 relative z-10">
        <span className={`${active ? 'text-[#0A192F]' : 'text-[#26C6DA]'} transition-colors`}>
          {icon}
        </span>
        <span className="text-[11px] font-black uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>
      {active && <ChevronRight size={14} className="relative z-10" />}
      
      {/* Industrial Hover Effect */}
      {!active && (
        <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#26C6DA] group-hover:w-full transition-all duration-500" />
      )}
    </Link>
  );
}