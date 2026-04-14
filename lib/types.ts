export interface Skill {
  id: number;
  name: string;
  slug: string;
  description: string;
  author: string;
  authorHandle: string;
  category: string;
  access: "free" | "paid";
  installCount: number;
  repoPath: string;
  createdAt: string;
}
