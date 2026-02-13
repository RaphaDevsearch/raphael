"use client";
import React from "react";
import Image from "next/image";

export default function PostCreator() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        border: "1px solid #e4e6eb",
      }}
    >
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <div
          style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            minWidth: 40,
          }}
        >
          <Image
            src="/raphael-profile.png"
            alt="Your profile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <input
          type="text"
          placeholder="What's on your mind?"
          style={{
            flex: 1,
            border: "1px solid #e4e6eb",
            borderRadius: 20,
            padding: "12px 16px",
            fontSize: 15,
            outline: "none",
            minHeight: 40,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 12,
          borderTop: "1px solid #e4e6eb",
          paddingTop: 12,
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            flex: "1 1 calc(50% - 6px)",
            padding: "10px 8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            borderRadius: 6,
            fontSize: "clamp(12px, 2vw, 13px)",
            fontWeight: 500,
            minHeight: 40,
          }}
        >
          📹 Live video
        </button>
        <button
          style={{
            flex: "1 1 calc(50% - 6px)",
            padding: "10px 8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            borderRadius: 6,
            fontSize: "clamp(12px, 2vw, 13px)",
            fontWeight: 500,
            minHeight: 40,
          }}
        >
          📷 Photo/video
        </button>
        <button
          style={{
            flex: "1 1 calc(50% - 6px)",
            padding: "10px 8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            borderRadius: 6,
            fontSize: "clamp(12px, 2vw, 13px)",
            fontWeight: 500,
            minHeight: 40,
          }}
        >
          😊 Feeling
        </button>
      </div>
    </div>
  );
}
