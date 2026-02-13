import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 16px" }}>
      {children}
    </div>
  );
}
