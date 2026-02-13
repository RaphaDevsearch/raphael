"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function ProfileHeader() {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "16px",
        borderBottom: "1px solid #e4e6eb",
        marginBottom: 24,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Profile Picture */}
        <div
          style={{
            position: "relative",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "4px solid white",
            marginTop: -60,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            flexShrink: 0,
          }}
        >
          <Image
            src="/raphael-profile.png"
            alt="Profile Picture"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        {/* Profile Info */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              margin: "0 0 8px 0",
              fontSize: "clamp(20px, 5vw, 32px)",
              fontWeight: 800,
              color: "#050505",
            }}
          >
            Raphaël Randrianantoanina
          </h1>
          <p style={{ margin: "4px 0", color: "#65676b", fontSize: "clamp(13px, 4vw, 15px)" }}>
            @Randrianantoanina
          </p>
          <p style={{ margin: "4px 0", color: "#65676b", fontSize: "clamp(13px, 3vw, 13px)" }}>
            1.3K followers • 1.1K following
          </p>
          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button>Message</Button>
            <Button>+ Follow</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
