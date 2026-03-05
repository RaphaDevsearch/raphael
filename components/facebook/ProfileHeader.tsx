"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { PROFILE_DATA } from "@/constants/data";

export default function ProfileHeader() {
  return (
    <div className="bg-white border-b border-[#E4E6EB]">
      {/* MOBILE AVATAR WRAPPER LOGIC APPLIED */}
      <div
        className="
          relative
          flex flex-col
          sm:flex-row sm:items-center sm:justify-between
          gap-4
          px-4
          pt-10 sm:py-5 md:py-6
          pb-4 sm:pb-5
        "
      >
        {/* Profile Picture */}
        <div
          className="
            absolute
            -top-10
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
            className="rounded-full border border-[#E4E6EB] object-cover shadow-sm"
          />
        </div>

        {/* Profile Information and Actions */}
        <div
          className="
            flex flex-1 flex-col justify-between
            sm:flex-row sm:items-start
            gap-4
            min-w-0
            mt-8 sm:mt-0
            text-center sm:text-left
          "
        >
          {/* Identity Block */}
          <div className="space-y-2 min-w-0 flex-1">
            {/* NAME */}
            <h1
              className="
              text-[32px]
              sm:text-[36px]
              md:text-[42px]
              font-semibold
              text-[#050505]
              tracking-tight
              break-words
            "
            >
              {PROFILE_DATA.name}
            </h1>

            {/* TITLE */}
            <p
              className="
              text-[20px]
              font-semibold
              text-[#65676B]
              break-words
            "
            >
              {PROFILE_DATA.title}
            </p>

            {/* BIO */}
            <p
              className="
              text-[16px]
              text-[#050505]
              leading-relaxed
              line-clamp-2
              sm:line-clamp-none
              sm:max-w-md
            "
            >
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-shrink-0">
            <Button
              className="px-4 py-2 text-[16px] font-semibold rounded-lg"
              variant="primary"
            >
              Connect
            </Button>

            <Button
              className="px-4 py-2 text-[16px] font-medium rounded-lg bg-[#E4E6EB] text-[#050505] hover:bg-gray-200"
              variant="secondary"
            >
              Collaborate
            </Button>

            <Button
              className="px-3 py-2 text-[16px] font-medium hidden sm:inline-flex bg-[#E4E6EB] text-[#65676B] hover:bg-gray-200"
              variant="secondary"
            >
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
