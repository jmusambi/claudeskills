"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Skill } from "@/lib/types";

const CATEGORIES = [
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

type SortKey = "popular" | "newest" | "az";
type Access = "all" | "free" | "paid";

export default function SkillsDirectory({ skills }: { skills: Skill[] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("popular");
  const [access, setAccess] = useState<Access>("all");
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !e.ctrlKey && !e.metaKey) {
        const target = e.target as HTMLElement;
        if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
          e.preventDefault();
          document.getElementById("skill-search")?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = useMemo(() => {
    let result = [...skills];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.slug.includes(q)
      );
    }

    if (access !== "all") {
      result = result.filter((s) => s.access === access);
    }

    if (category) {
      result = result.filter((s) => s.category === category);
    }

    switch (sort) {
      case "popular":
        result.sort((a, b) => b.installCount - a.installCount);
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [skills, search, sort, access, category]);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">All Playbooks</h2>

        <div className="relative mb-6">
          <input
            id="skill-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find a playbook..."
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 pl-10 text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-muted bg-background border border-border rounded">
            /
          </kbd>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-xs text-muted">
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-surface border border-border rounded-lg px-3 py-1.5 text-xs text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23737373'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 8px center",
                backgroundSize: "14px",
              }}
            >
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="az">A-Z</option>
            </select>
          </div>

          <div className="flex gap-1 bg-surface border border-border rounded-lg p-1">
            {(
              [
                { key: "all", label: "All" },
                { key: "free", label: "Free" },
                { key: "paid", label: "Paid" },
              ] as { key: Access; label: string }[]
            ).map((a) => (
              <button
                key={a.key}
                onClick={() => setAccess(a.key)}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                  access === a.key
                    ? "bg-accent text-black font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? null : cat)}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                category === cat
                  ? "bg-accent text-black border-accent font-medium"
                  : "border-border text-muted hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-12 text-center text-muted text-sm">
            No playbooks match your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((skill) => (
              <Link
                key={skill.id}
                href={`/skills/${skill.slug}`}
                className="bg-surface border border-border rounded-xl p-5 hover:border-accent/40 hover:bg-surface-hover transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-sm group-hover:text-accent transition-colors leading-snug">
                    {skill.name}
                  </h3>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <span className="text-[10px] border border-border rounded-full px-2 py-0.5 text-muted">
                      {skill.category}
                    </span>
                    <span
                      className={`text-[10px] rounded-full px-2 py-0.5 font-medium ${
                        skill.access === "paid"
                          ? "bg-accent/15 text-accent"
                          : "bg-emerald-500/15 text-emerald-400"
                      }`}
                    >
                      {skill.access === "paid" ? "Paid" : "Free"}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">
                  {skill.description}
                </p>
              </Link>
            ))}
          </div>
        )}

        <p className="text-xs text-muted mt-6 text-center">
          {filtered.length} playbook{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>
    </section>
  );
}
