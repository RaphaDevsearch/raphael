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
    <div className="bg-white border border-[#E4E6EB] rounded-xl mb-3 sm:mb-4 p-4 overflow-hidden shadow-md shadow-gray-300">
      {/* Post Header */}
      <div className="p-4 flex justify-between items-center gap-3">
        <div className="flex items-center gap-3 min-w-0">
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
            <p className="m-0 font-semibold text-[20px] text-[#050505] truncate">
              {author}
            </p>
            <p className="m-0 text-[14px] text-[#65676B]">{timestamp}</p>
          </div>
        </div>

        <button className="border-none bg-transparent cursor-pointer text-[16px] text-[#050505] p-1 min-h-[36px] min-w-[36px] sm:min-h-[40px] sm:min-w-[40px] flex items-center justify-center hover:bg-gray-100 rounded transition flex-shrink-0">
          ⋯
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3 text-[16px] text-[#050505]">
        <p className="m-0 break-words">{content}</p>
      </div>

      {/* Post Stats */}
      <div className="px-4 pb-3 text-[12px] text-[#8A8D91] border-b border-[#E4E6EB]">
        👍 {likes} likes • 💬 {comments} comments
      </div>

      {/* Post Actions */}
      <div className="flex text-[14px] text-[#65676B]">
        <button className="flex-1 py-2 font-medium hover:bg-gray-100 transition">
          👍 Like
        </button>
        <button className="flex-1 py-2 font-medium hover:bg-gray-100 transition">
          💬 Comment
        </button>
        <button className="flex-1 py-2 font-medium hover:bg-gray-100 transition">
          ↗️ Share
        </button>
      </div>
    </div>
  );
}
