import skillsData from "@/data/skills.json";
import { Skill } from "./types";
import fs from "fs";
import path from "path";

export function getAllSkills(): Skill[] {
  return skillsData as Skill[];
}

export function getSkillBySlug(slug: string): Skill | undefined {
  return (skillsData as Skill[]).find((s) => s.slug === slug);
}

export function getSkillContent(repoPath: string): string {
  const filePath = path.join(
    process.cwd(),
    "skills",
    repoPath,
    "SKILL.md"
  );
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

export function getCategories(): string[] {
  return [
    "SEO",
    "CRO",
    "Email",
    "Paid Media",
    "Growth",
    "Analytics",
    "ABM",
    "Lead Gen",
    "Marketing Ops",
    "AI & Agents",
    "Strategy",
    "Scraping",
  ];
}

export function getRelatedSkills(skill: Skill, allSkills: Skill[]): Skill[] {
  const sameCat = allSkills.filter(
    (s) => s.category === skill.category && s.id !== skill.id
  );
  const others = allSkills.filter(
    (s) => s.category !== skill.category && s.id !== skill.id
  );
  const combined = [...sameCat, ...others];
  return combined.slice(0, 4);
}
