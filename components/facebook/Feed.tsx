"use client";
import React from "react";
import PostCreator from "./PostCreator";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      author: "Raphaël Randrianantoanina",
      timestamp: "2 hours ago",
      content: "Just launched my new portfolio! Check it out and let me know what you think 🚀",
      likes: 45,
      comments: 12,
    },
    {
      author: "Raphaël Randrianantoanina",
      timestamp: "1 day ago",
      content: "Excited to announce that I've joined the Open Classroom platform as a digital creator! 🎓",
      likes: 78,
      comments: 23,
    },
    {
      author: "Raphaël Randrianantoanina",
      timestamp: "3 days ago",
      content: "Working on some interesting projects. Stay tuned for updates! 💻",
      likes: 32,
      comments: 8,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(12px, 2vw, 16px)",
        maxWidth: 700,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <PostCreator />
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
}
