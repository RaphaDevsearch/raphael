// Post types
export interface Post {
  author: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
}

// Profile types
export interface Profile {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  coverImage?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href?: string;
}
