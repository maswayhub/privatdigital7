export interface Lesson {
  id: number;
  day: number;
  title: string;
  duration: string;
  description: string;
  summary: string;
  videoUrl: string;
  tasks: string[];
}

export interface Ebook {
  id: string;
  title: string;
  author: string;
  badge: string;
  description: string;
  chapters: string[];
  tips: string[];
  imageUrl: string;
}

export interface StockVideo {
  id: string;
  title: string;
  category: "Minimalist" | "Desk Setup" | "Nature & Travel" | "Cafe Vibe" | "Cooking & Food";
  videoUrl: string;
  captionTemplate: string;
  tags: string[];
}

export interface HookTemplate {
  id: string;
  category: "Controversial" | "FOMO" | "Curiosity" | "Result-First";
  hookText: string;
  captionStructure: string;
}

export type ViewType = "landing" | "checkout" | "member";
