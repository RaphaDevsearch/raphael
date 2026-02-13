import React from "react";

export default function Sidebar() {
  return (
    <div style={{ width: "100%", minWidth: 0 }}>
      {/* Personal Details */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: 16,
          marginBottom: 16,
          border: "1px solid #e4e6eb",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <h3 style={{ margin: 0, fontSize: "clamp(14px, 3vw, 15px)", fontWeight: 600 }}>
            Personal details
          </h3>
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            ✎
          </button>
        </div>
        <div style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#65676b", lineHeight: 1.8 }}>
          <div style={{ marginBottom: 12 }}>
            <strong>📍 Lives in</strong>
            <p style={{ margin: 0 }}>Antananarivo, Madagascar</p>
          </div>
          <div style={{ marginBottom: 12 }}>
            <strong>🏠 From</strong>
            <p style={{ margin: 0 }}>Manatasoa</p>
          </div>
          <div>
            <strong>🎂 Birthday</strong>
            <p style={{ margin: 0 }}>March 3, 2003</p>
          </div>
        </div>
      </div>

      {/* Work & Education */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: 16,
          marginBottom: 16,
          border: "1px solid #e4e6eb",
        }}
      >
        <h3 style={{ margin: "0 0 12px 0", fontSize: "clamp(14px, 3vw, 15px)", fontWeight: 600 }}>
          Work
        </h3>
        <p style={{ margin: 0, fontSize: "clamp(12px, 2vw, 13px)" }}>
          <strong>Enseignant contractuel</strong>
          <br />
          <span style={{ color: "#65676b" }}>Jul 4, 2022 - Present</span>
        </p>
      </div>

      {/* Highlights */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: 16,
          border: "1px solid #e4e6eb",
        }}
      >
        <h3 style={{ margin: "0 0 12px 0", fontSize: "clamp(14px, 3vw, 15px)", fontWeight: 600 }}>
          Highlights
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 8,
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#e4e6eb",
                borderRadius: 8,
                height: 100,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
