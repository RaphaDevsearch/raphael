import { Post, Profile } from "@/types";

export const PROFILE_DATA: Profile = {
  name: "Raphael Randrianantoanina",
  title: "Founder of Praxis · Creator of StudyHub",
  bio: "Building structured digital systems and scalable platforms that connect learning with real-world execution.",
  profileImage: "/raphael-profile.png",
  coverImage: "/profile-cover.png",
};

export const MOCK_POSTS: Post[] = [
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
    content: "Working on some interesting projects. Stay tuned for updates! 💻",
    likes: 32,
    comments: 8,
  },
];
