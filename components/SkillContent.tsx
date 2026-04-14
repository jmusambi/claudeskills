"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function SkillContent({ content }: { content: string }) {
  // Strip YAML frontmatter
  const body = content.replace(/^---[\s\S]*?---\n*/, "");

  return (
    <div className="prose prose-invert prose-sm max-w-none prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-accent prose-code:text-accent prose-code:bg-surface prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-hr:border-border">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </div>
  );
}
