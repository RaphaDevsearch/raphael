"use client";

import React from "react";
import Image from "next/image";
import { Post as PostType } from "@/types";

type PostProps = PostType;

export default function Post({
  author,
  timestamp,
  content,
  likes = 0,
  comments = 0,
}: PostProps) {
  return (
    <div className="bg-white rounded-lg mb-3 sm:mb-4 border border-gray-100 overflow-hidden shadow-md shadow-gray-300">
      {/* Post Header */}
      <div className="p-2 sm:p-3 flex justify-between items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/raphael-profile.png"
              alt={author}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="m-0 font-semibold text-sm sm:text-lg truncate">{author}</p>
            <p className="m-0 text-xs sm:text-sm text-gray-500">{timestamp}</p>
          </div>
        </div>

        <button className="border-none bg-transparent cursor-pointer text-base sm:text-lg p-1 min-h-[36px] min-w-[36px] sm:min-h-[40px] sm:min-w-[40px] flex items-center justify-center hover:bg-gray-100 rounded transition flex-shrink-0">
          ⋯
        </button>
      </div>

      {/* Post Content */}
      <div className="px-2 sm:px-3 pb-2 sm:pb-3 text-sm sm:text-lg">
        <p className="m-0 break-words">{content}</p>
      </div>

      {/* Post Stats */}
      <div className="px-2 sm:px-3 pb-2 sm:pb-3 text-xs sm:text-base text-gray-500 border-b border-gray-100">
        👍 {likes} likes • 💬 {comments} comments
      </div>

      {/* Post Actions */}
      <div className="flex text-xs sm:text-base">
        <button className="flex-1 py-1.5 sm:py-2 font-medium text-gray-600 hover:bg-gray-100 transition">
          👍 Like
        </button>
        <button className="flex-1 py-1.5 sm:py-2 font-medium text-gray-600 hover:bg-gray-100 transition">
          💬 Comment
        </button>
        <button className="flex-1 py-1.5 sm:py-2 font-medium text-gray-600 hover:bg-gray-100 transition">
          ↗️ Share
        </button>
      </div>
    </div>
  );
}
