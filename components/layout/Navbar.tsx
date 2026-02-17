"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  FolderKanban,
  FlaskConical,
  Mail,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  icon: LucideIcon;
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { href: "/lab", icon: FlaskConical },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm transition ${
        scrolled ? "bg-white shadow-md" : "bg-white/70"
      }`}
    >
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        {/* LEFT LOGO */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
            PX
          </div>
        </Link>

        {/* CENTER ICON NAVIGATION */}
        <nav className="hidden md:flex items-center gap-20">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative p-2 rounded-lg transition ${
                  active
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Icon size={40} strokeWidth={2} />
                {active && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          {/* Contact Icon */}
          <button
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
          >
            <Mail size={36} />
          </button>

          {/* Profile Image */}
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
            <Image
              src="/raphael-profile.png" // place image inside /public
              alt="Profile"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen((s) => !s)}
            className="md:hidden p-2"
          >
            <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="flex flex-col items-center py-4 gap-6">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700"
                >
                  <Icon size={26} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
