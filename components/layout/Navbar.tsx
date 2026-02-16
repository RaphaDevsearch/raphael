"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: [string, string][] = [
    ["/", "Home"],
    ["/studyhub", "StudyHub"],
    ["/projects", "Projects"],
    ["/demos", "Demos"],
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/60 backdrop-blur-sm transition ${
        scrolled ? "bg-white/95 shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <Link href="/" aria-label="Home" className="inline-flex items-center">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center font-extrabold text-blue-600 bg-gradient-to-b from-white to-blue-50 shadow-sm">
              PX
            </div>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary"
          >
            {navLinks.map(([href, label]) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative group text-sm font-semibold transition-colors ${
                    active
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-300 transition-all ${
                      active ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
              else setContactOpen(true);
            }}
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-b from-blue-600 to-blue-500 text-white font-semibold shadow-md transform transition-transform duration-150 hover:-translate-y-1"
          >
            ✉ Contact
          </button>

          <div className="flex items-center gap-2 ml-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-50 text-blue-600 font-bold">
              JR
            </div>
            <span className="hidden md:inline text-sm font-medium text-gray-700">
              Profile
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen((s) => !s)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col px-4 py-3 border-t border-gray-100 bg-white">
          {navLinks.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="py-3 text-gray-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
              else setContactOpen(true);
              setMobileMenuOpen(false);
            }}
            className="mt-2 px-3 py-2 rounded-md bg-gradient-to-b from-blue-600 to-blue-500 text-white font-semibold shadow-md"
          >
            ✉ Contact
          </button>
        </div>
      </div>

      {/* Contact modal fallback */}
      {contactOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 sm:w-96 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">
              You can reach me at{" "}
              <a
                className="text-blue-600 underline"
                href="mailto:hello@example.com"
              >
                hello@example.com
              </a>
            </p>
            <div className="mt-4 text-right">
              <button
                className="px-3 py-1.5 text-sm font-semibold text-gray-700"
                onClick={() => setContactOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
