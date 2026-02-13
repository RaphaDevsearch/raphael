"use client";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...rest }: Props) {
  return (
    <button
      {...rest}
      style={{
        padding: "clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)",
        borderRadius: 6,
        border: "1px solid #0a66c2",
        backgroundColor: "#0a66c2",
        color: "white",
        cursor: "pointer",
        fontSize: "clamp(13px, 2vw, 14px)",
        fontWeight: 600,
        transition: "background-color 0.2s ease",
        minHeight: 40,
        minWidth: 40,
        ...rest.style,
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = "#0958a8";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = "#0a66c2";
      }}
    >
      {children}
    </button>
  );
}
