import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f0f2f5",
        borderTop: "1px solid #e4e6eb",
        padding: "clamp(16px, 3vw, 24px)",
        marginTop: 48,
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          textAlign: "center",
          fontSize: "clamp(11px, 2vw, 12px)",
          color: "#65676b",
        }}
      >
        <p style={{ margin: "0 0 8px 0" }}>
          © {new Date().getFullYear()} Raphaël Randrianantoanina - Praxis
          Portfolio
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/about" style={{ color: "#0a66c2", textDecoration: "none" }}>
            About
          </a>
          <a href="/projects" style={{ color: "#0a66c2", textDecoration: "none" }}>
            Projects
          </a>
          <a href="/contact" style={{ color: "#0a66c2", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
