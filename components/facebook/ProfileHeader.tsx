"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function ProfileHeader() {
  return (
    <div className="bg-white p-4 border-b border-gray-100 mb-6 rounded-lg">
      <div className="flex flex-col gap-4 items-center text-center">
        {/* Profile Picture */}
        <div className="relative w-28 h-28 rounded-full border-4 border-white -mt-12 overflow-hidden shadow-md flex-shrink-0">
          <Image
            src="/raphael-profile.png"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="m-0 text-2xl md:text-3xl font-extrabold text-gray-900">
            Raphaël Randrianantoanina
          </h1>
          <p className="mt-1 text-sm text-gray-500">@Randrianantoanina</p>
          <p className="mt-1 text-sm text-gray-500">
            1.3K followers • 1.1K following
          </p>
          <div className="mt-4 flex gap-3 justify-center flex-wrap">
            <Button>Message</Button>
            <Button>+ Follow</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
