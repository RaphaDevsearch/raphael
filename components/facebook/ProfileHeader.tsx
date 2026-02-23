"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { PROFILE_DATA } from "@/constants/data";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-6 py-6 bg-white border-b border-gray-200">
      {/* Profile Picture */}
      <div className="w-[140px] h-[140px] flex-shrink-0 relative">
        <Image
          src={PROFILE_DATA.profileImage}
          alt={PROFILE_DATA.name}
          fill
          className="rounded-full border border-gray-200 object-cover shadow-sm"
        />
      </div>

      {/* Profile Information and Actions */}
      <div className="flex flex-1 flex-col justify-between lg:flex-row lg:items-start gap-6">
        {/* Identity Block */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
            {PROFILE_DATA.name}
          </h1>

          <p className="text-xl text-gray-500 font-medium">{PROFILE_DATA.title}</p>

          <p className="text-lg text-gray-600 max-w-md">{PROFILE_DATA.bio}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="bg-black text-white hover:bg-gray-900 transition">
            View Projects
          </Button>

          <Button className="bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 transition">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
