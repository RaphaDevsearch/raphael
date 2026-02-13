import React from "react";

type Props = { title: string; description?: string };

export default function Card({ title, description }: Props) {
  return (
    <article
      style={{
        padding: 16,
        border: "1px solid #e4e6eb",
        borderRadius: 8,
        backgroundColor: "white",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0", fontSize: 15, fontWeight: 600 }}>
        {title}
      </h3>
      {description && (
        <p style={{ margin: 0, fontSize: 13, color: "#65676b" }}>
          {description}
        </p>
      )}
    </article>
  );
}
