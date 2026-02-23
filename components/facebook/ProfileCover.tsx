import React from "react";
import Image from "next/image";

export default function ProfileCover() {
  return (
    <div className="relative w-full aspect-video sm:aspect-[3/1] max-h-[300px] sm:max-h-[450px] md:max-h-[600px] overflow-hidden rounded-b-lg sm:rounded-b-[10px] bg-gray-200">
      <Image
        src="/raphael-cover.png"
        alt="Cover Photo"
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        priority
      />
    </div>
  );
}
