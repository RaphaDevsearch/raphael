"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PostCreator() {
  return (
    <div className="bg-white border border-[#E4E6EB] rounded-xl p-4 mb-3 sm:mb-4 shadow-md shadow-gray-300">
      {/* Input Section */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/raphael-profile.png"
            alt="Your profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 border border-[#E4E6EB] rounded-lg px-3 sm:px-4 py-2 text-[16px] text-[#050505] outline-none min-h-[32px] sm:min-h-[40px] focus:border-[#1877F2] transition"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 border-t border-[#E4E6EB] pt-3 flex-wrap">
        <Button
          variant="secondary"
          className="flex-1 min-w-[calc(50%_-_4px)] sm:min-w-[calc(33.333%_-_8px)] text-[16px] font-medium whitespace-nowrap text-[#050505]"
        >
          📹 Live video
        </Button>

        <Button
          variant="secondary"
          className="flex-1 min-w-[calc(50%_-_4px)] sm:min-w-[calc(33.333%_-_8px)] text-[16px] font-medium whitespace-nowrap text-[#050505]"
        >
          📷 Photo/video
        </Button>

        <Button
          variant="secondary"
          className="hidden sm:block flex-1 min-w-[calc(33.333%_-_8px)] px-3 py-2 text-[16px] font-medium text-[#050505]"
        >
          😊 Feeling
        </Button>
      </div>
    </div>
  );
}
