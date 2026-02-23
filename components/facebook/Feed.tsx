"use client";

import React from "react";
import PostCreator from "./PostCreator";
import Post from "./Post";
import { MOCK_POSTS } from "@/constants/data";

export default function Feed() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full">
      <PostCreator />
      {MOCK_POSTS.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
}
