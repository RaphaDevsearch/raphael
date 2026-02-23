import React from "react";
import Image from "next/image";

export default function ProfileCover() {
  return (
    <div className="relative w-full aspect-[3/1] max-h-[600px] overflow-hidden rounded-b-[10px] bg-gray-200">
      <Image
        src="/raphael-cover.png"
        alt="Cover Photo"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
    </div>
  );
}
