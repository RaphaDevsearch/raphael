"use client";

import React from "react";
import Image from "next/image";
import { PROFILE_DATA } from "@/constants/data";

export default function ProfileHeader() {
  return (
    <div className="bg-white border-b border-gray-200">

      {/* MOBILE AVATAR WRAPPER LOGIC APPLIED */}
      <div
        className="
          relative
          flex flex-col
          sm:flex-row sm:items-center sm:justify-between
          gap-3 sm:gap-4 md:gap-6
          px-3 sm:px-4 md:px-6
          pt-16 sm:py-5 md:py-6
          pb-4 sm:pb-5
        "
      >
        {/* Profile Picture */}
        <div
          className="
            absolute
            -top-12
            left-1/2 -translate-x-1/2

            sm:static
            sm:translate-x-0

            w-24 h-24
            sm:w-28 md:w-[140px]
            sm:h-28 md:h-[140px]

            flex-shrink-0
            relative
          "
        >
          <Image
            src={PROFILE_DATA.profileImage}
            alt={PROFILE_DATA.name}
            fill
            className="rounded-full border border-gray-200 object-cover shadow-sm"
          />
        </div>

        {/* Profile Information and Actions */}
        <div
          className="
            flex flex-1 flex-col justify-between
            sm:flex-row sm:items-start
            gap-3 sm:gap-4 md:gap-6
            min-w-0

            mt-14 sm:mt-0
            text-center sm:text-left
          "
        >
          {/* Identity Block */}
          <div className="space-y-1 sm:space-y-2 min-w-0 flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight break-words">
              {PROFILE_DATA.name}
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-500 font-medium break-words">
              {PROFILE_DATA.title}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 sm:line-clamp-none sm:max-w-md">
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-shrink-0">
            <button className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Connect
            </button>

            <button className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition">
              Collaborate
            </button>

            <button className="px-3 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}