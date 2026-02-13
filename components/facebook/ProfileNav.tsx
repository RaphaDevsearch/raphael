"use client";
import React, { useState } from "react";

export default function ProfileNav() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "About", "Photos", "Videos", "Friends", "More"];

  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e4e6eb",
        marginBottom: 24,
        overflowX: "auto",
        overflowY: "hidden",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          display: "flex",
          paddingLeft: 16,
          gap: "2px",
          minWidth: "min-content",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: "0 0 auto",
              padding: "16px 12px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontSize: "clamp(12px, 2vw, 15px)",
              fontWeight: activeTab === tab ? 600 : 500,
              color: activeTab === tab ? "#0a66c2" : "#65676b",
              borderBottom: activeTab === tab ? "3px solid #0a66c2" : "none",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
