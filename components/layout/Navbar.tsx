"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e4e6eb",
        padding: "8px 0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#0a66c2" }}>
            RAPHAEL
          </div>
          {/* Desktop Navigation */}
          <div
            style={{
              display: "none",
              gap: 16,
            }}
            className="hide-mobile"
          >
            <a
              href="/"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#65676b",
                cursor: "pointer",
              }}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#65676b",
                cursor: "pointer",
              }}
            >
              About
            </a>
            <a
              href="/projects"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#65676b",
                cursor: "pointer",
              }}
            >
              Projects
            </a>
            <a
              href="/contact"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#65676b",
                cursor: "pointer",
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Search / Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "8px 12px",
              borderRadius: 20,
              border: "1px solid #e4e6eb",
              fontSize: 13,
              outline: "none",
              display: "none",
            }}
            className="hide-mobile"
          />
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 20,
              padding: 8,
              minHeight: 48,
              minWidth: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            🔔
          </button>
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 20,
              padding: 8,
              minHeight: 48,
              minWidth: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            💬
          </button>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 20,
              padding: 8,
              minHeight: 48,
              minWidth: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="hide-desktop"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "white",
            borderTop: "1px solid #e4e6eb",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
          className="hide-desktop"
        >
          <a
            href="/"
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "#65676b",
              cursor: "pointer",
              padding: "12px 0",
            }}
          >
            Home
          </a>
          <a
            href="/about"
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "#65676b",
              cursor: "pointer",
              padding: "12px 0",
            }}
          >
            About
          </a>
          <a
            href="/projects"
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "#65676b",
              cursor: "pointer",
              padding: "12px 0",
            }}
          >
            Projects
          </a>
          <a
            href="/contact"
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "#65676b",
              cursor: "pointer",
              padding: "12px 0",
            }}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
