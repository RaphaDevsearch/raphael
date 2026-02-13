"use client";
import React from "react";
import Image from "next/image";

type PostProps = {
  author: string;
  timestamp: string;
  content: string;
  image?: string;
  likes?: number;
  comments?: number;
};

export default function Post({
  author,
  timestamp,
  content,
  likes = 0,
  comments = 0,
}: PostProps) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 16,
        border: "1px solid #e4e6eb",
        overflow: "hidden",
      }}
    >
      {/* Post Header */}
      <div
        style={{
          padding: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 12, minWidth: 0 }}>
          <div
            style={{
              position: "relative",
              width: 40,
              height: 40,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/raphael-profile.png"
              alt={author}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: "clamp(12px, 2vw, 13px)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {author}
            </p>
            <p style={{ margin: 0, color: "#65676b", fontSize: "clamp(11px, 1.5vw, 12px)" }}>
              {timestamp}
            </p>
          </div>
        </div>
        <button
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: 18,
            padding: 4,
            minHeight: 40,
            minWidth: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ⋯
        </button>
      </div>

      {/* Post Content */}
      <div style={{ padding: "0 12px 12px 12px", fontSize: "clamp(13px, 2vw, 13px)" }}>
        <p style={{ margin: 0, wordBreak: "break-word" }}>{content}</p>
      </div>

      {/* Post Stats */}
      <div
        style={{
          padding: "0 12px 12px 12px",
          fontSize: "clamp(11px, 1.5vw, 12px)",
          color: "#65676b",
          borderBottom: "1px solid #e4e6eb",
        }}
      >
        👍 {likes} likes • 💬 {comments} comments
      </div>

      {/* Post Actions */}
      <div style={{ display: "flex", gap: "2px" }}>
        <button
          style={{
            flex: 1,
            padding: "10px 8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: "clamp(12px, 2vw, 13px)",
            fontWeight: 500,
            color: "#65676b",
            minHeight: 40,
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#f0f2f5";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
          }}
        >
          👍 Like
        </button>
        <button
          style={{
            flex: 1,
            padding: "10px 8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: "clamp(12px, 2vw, 13px)",
            fontWeight: 500,
            color: "#65676b",
            minHeight: 40,
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#f0f2f5";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
          }}
        >
          💬 Comment
        </button>
        <button
          style={{
            flex: 1,
            padding: "10px 8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: "clamp(12px, 2vw, 13px)",
            fontWeight: 500,
            color: "#65676b",
            minHeight: 40,
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#f0f2f5";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
          }}
        >
          ↗️ Share
        </button>
      </div>
    </div>
  );
}
