import React from "react";
import Image from "next/image";

export default function ProfileCover() {
  return (
    <div
      style={{
        position: "relative",
        height: "clamp(200px, 40vw, 400px)",
        backgroundColor: "#e4e6eb",
        overflow: "hidden",
      }}
    >
      <Image
        src="/raphael-cover.png"
        alt="Cover Photo"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
