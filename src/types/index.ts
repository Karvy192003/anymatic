export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  isPremium: boolean;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GeneratedReel {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  userId: string;
  likedBy?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  userId: string;
} 