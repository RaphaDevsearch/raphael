"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.logo}>RAPHAEL</div>

          {!isMobile && (
            <nav style={styles.nav}>
              <Link href="/" style={styles.link}>Home</Link>
              <Link href="/about" style={styles.link}>About</Link>
              <Link href="/projects" style={styles.link}>Projects</Link>
              <Link href="/contact" style={styles.link}>Contact</Link>
            </nav>
          )}
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          {!isMobile && (
            <input
              type="text"
              placeholder="Search"
              style={styles.search}
            />
          )}

          <button style={styles.iconBtn}>🔔</button>
          <button style={styles.iconBtn}>💬</button>

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={styles.iconBtn}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <Link href="/" style={styles.mobileLink}>Home</Link>
          <Link href="/about" style={styles.mobileLink}>About</Link>
          <Link href="/projects" style={styles.mobileLink}>Projects</Link>
          <Link href="/contact" style={styles.mobileLink}>Contact</Link>
        </div>
      )}
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "white",
    borderBottom: "1px solid #e4e6eb",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },

  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 16px",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 32,
  },

  logo: {
    fontSize: 20,
    fontWeight: 800,
    color: "#0a66c2",
  },

  nav: {
    display: "flex",
    gap: 20,
  },

  link: {
    fontSize: 14,
    fontWeight: 500,
    color: "#65676b",
    textDecoration: "none",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  search: {
    padding: "6px 12px",
    borderRadius: 20,
    border: "1px solid #e4e6eb",
    fontSize: 13,
    outline: "none",
  },

  iconBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: 18,
    padding: 8,
    minWidth: 40,
    minHeight: 40,
  },

  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    padding: 16,
    borderTop: "1px solid #e4e6eb",
  },

  mobileLink: {
    textDecoration: "none",
    fontSize: 14,
    color: "#65676b",
  },
};
