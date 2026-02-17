"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  FolderKanban,
  Cpu  ,
  Mail,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  icon: LucideIcon;
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: NavItem[] = [
    { href: "/", icon: Home },
    { href: "/studyhub", icon: BookOpen },
    { href: "/projects", icon: FolderKanban },
    { href: "/lab", icon: Cpu    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/70"
      }`}
    >
      <div className="mx-auto  px-4 h-16 flex items-center justify-between">
        
        {/* LEFT LOGO */}
        <Link href="/" className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-semibold text-sm flex items-center justify-center">
            PX
          </div>
        </Link>

        {/* CENTER ICON NAVIGATION (DESKTOP ONLY) */}
        <nav className="hidden md:flex items-center gap-16">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center justify-center p-2 group"
              >
                <Icon
                  size={24}
                  strokeWidth={2}
                  className={`transition-colors ${
                    active
                      ? "text-blue-600"
                      : "text-gray-600 group-hover:text-blue-600"
                  }`}
                />
                {active && (
                  <span className="absolute -bottom-2 w-6 h-1 bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* GRID ICON (Mobile App Style) */}
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition">
            <LayoutGrid size={22} />
          </button>

          {/* CONTACT ICON */}
          <button
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Mail size={22} />
          </button>

          {/* PROFILE IMAGE */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 hover:opacity-90 transition cursor-pointer">
            <Image
              src="/raphael-profile.png"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
