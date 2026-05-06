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
  ChevronRight
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

  if (loading && !isLoginRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6FBF8]">
        <div className="w-10 h-10 border-4 border-[#2BB673]/20 border-t-[#2BB673] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isLoginRoute) return <>{children}</>;

  return (
    <div className="flex h-screen bg-[#F6FBF8] text-gray-800">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">

        {/* Logo / Branding */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#2BB673]">
            Prosper Haven
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Admin Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">

          <NavLink
            href="/admin"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active={pathname === "/admin"}
          />

          <NavLink
            href="/admin/gallery"
            icon={<ImageIcon size={18} />}
            label="Gallery"
            active={pathname === "/admin/gallery"}
          />

          <NavLink
            href="/admin/blogs"
            icon={<FileText size={18} />}
            label="Blog Articles"
            active={pathname === "/admin/blogs"}
          />

        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">

          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-colors w-full"
          >
            <LogOut size={16} />
            <span className="text-sm font-medium">
              Sign Out
            </span>
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-auto p-10">

        {children}

      </main>

    </div>
  );
}


function NavLink({ href, icon, label, active }) {

  return (
    <Link
      href={href}
      className={`flex items-center justify-between p-3 rounded-md transition
      ${
        active
          ? "bg-[#2BB673] text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >

      <div className="flex items-center gap-3">

        <span>{icon}</span>

        <span className="text-sm font-medium">
          {label}
        </span>

      </div>

      {active && <ChevronRight size={14} />}

    </Link>
  );
}