"use client";

import React from "react";
import Image from "next/image";

export default function PostCreator() {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-100 shadow-md shadow-gray-300">
      {/* Input Section */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
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
          className="flex-1 border border-gray-100 rounded-full px-4 py-2 text-sm outline-none min-h-[40px] focus:border-gray-300 transition"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 border-t border-gray-100 pt-3 flex-wrap">
        <button className="flex-1 min-w-[calc(50%_-_6px)] px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          📹 Live video
        </button>
        <button className="flex-1 min-w-[calc(50%_-_6px)] px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          📷 Photo/video
        </button>
        <button className="flex-1 min-w-[calc(50%_-_6px)] px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          😊 Feeling
        </button>
      </div>
    </div>
  );
}
