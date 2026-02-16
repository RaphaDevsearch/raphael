import React from "react";
import Image from "next/image";

export default function ProfileCover() {
  return (
    <div className="relative h-[clamp(200px,40vw,400px)] bg-gray-200 overflow-hidden">
      <Image
        src="/raphael-cover.png"
        alt="Cover Photo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
