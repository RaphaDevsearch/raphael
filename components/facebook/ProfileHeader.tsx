"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { PROFILE_DATA } from "@/constants/data";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 bg-white border-b border-gray-200">
      {/* Profile Picture */}
      <div className="w-24 h-24 sm:w-28 md:w-[140px] sm:h-28 md:h-[140px] flex-shrink-0 relative">
        <Image
          src={PROFILE_DATA.profileImage}
          alt={PROFILE_DATA.name}
          fill
          className="rounded-full border border-gray-200 object-cover shadow-sm"
        />
      </div>

      {/* Profile Information and Actions */}
      <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-start gap-3 sm:gap-4 md:gap-6 min-w-0">
        {/* Identity Block */}
        <div className="space-y-1 sm:space-y-2 min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight break-words">
            {PROFILE_DATA.name}
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-500 font-medium break-words">{PROFILE_DATA.title}</p>

          <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 sm:line-clamp-none sm:max-w-md">{PROFILE_DATA.bio}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
          <Button className="bg-black text-white hover:bg-gray-900 transition text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2 whitespace-nowrap flex-1 sm:flex-none">
            View Projects
          </Button>

          <Button className="bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 transition text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2 whitespace-nowrap flex-1 sm:flex-none">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
