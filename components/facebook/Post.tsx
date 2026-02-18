"use client";
import React from "react";
import Image from "next/image";

type PostProps = {
  author: string;
  timestamp: string;
  content: string;
  image?: string;
  likes?: number;
  comments?: number;
};

export default function Post({
  author,
  timestamp,
  content,
  likes = 0,
  comments = 0,
}: PostProps) {
  return (
    <div className="bg-white rounded-lg mb-4 border border-gray-100 overflow-hidden shadow-md shadow-gray-300">
      {/* Post Header */}
      <div className="p-3 flex justify-between items-center gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/raphael-profile.png"
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="m-0 font-semibold text-sm truncate">{author}</p>
            <p className="m-0 text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>

        <button className="border-none bg-transparent cursor-pointer text-lg p-1 min-h-[40px] min-w-[40px] flex items-center justify-center">
          ⋯
        </button>
      </div>

      {/* Post Content */}
      <div className="px-3 pb-3 text-sm">
        <p className="m-0 break-words">{content}</p>
      </div>

      {/* Post Stats */}
      <div className="px-3 pb-3 text-sm text-gray-500 border-b border-gray-100">
        👍 {likes} likes • 💬 {comments} comments
      </div>

      {/* Post Actions */}
      <div className="flex">
        <button className="flex-1 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
          👍 Like
        </button>
        <button className="flex-1 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
          💬 Comment
        </button>
        <button className="flex-1 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
          ↗️ Share
        </button>
      </div>
    </div>
  );
}
