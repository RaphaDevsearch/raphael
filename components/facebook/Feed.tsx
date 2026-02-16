"use client";
import React from "react";
import PostCreator from "./PostCreator";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      author: "Raphaël Randrianantoanina",
      timestamp: "2 hours ago",
      content:
        "Just launched my new portfolio! Check it out and let me know what you think 🚀",
      likes: 45,
      comments: 12,
    },
    {
      author: "Raphaël Randrianantoanina",
      timestamp: "1 day ago",
      content:
        "Excited to announce that I've joined the Open Classroom platform as a digital creator! 🎓",
      likes: 78,
      comments: 23,
    },
    {
      author: "Raphaël Randrianantoanina",
      timestamp: "3 days ago",
      content:
        "Working on some interesting projects. Stay tuned for updates! 💻",
      likes: 32,
      comments: 8,
    },
  ];

  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full max-w-[700px] mx-auto">
      <PostCreator />
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
}
