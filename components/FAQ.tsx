"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What's a playbook and how does it work?",
    a: "A playbook is a markdown file packed with real marketing frameworks, processes, and decision trees. Drop it into your AI tool's context and it stops giving you generic advice — it thinks like a practitioner who's actually done the work.",
  },
  {
    q: "Which AI tools are compatible?",
    a: "Any tool that accepts markdown context — Claude Code, Claude Projects, ChatGPT custom instructions, Cursor, Replit, Copilot, Lovable, Perplexity, and more. If it reads text, it reads these playbooks.",
  },
  {
    q: "How do I add a playbook to my project?",
    a: 'Run "npx growthskills add [playbook-name]" in your terminal. It downloads the markdown file into a /skills folder in your project. If you\'re not using a terminal, just copy the markdown content directly into your AI tool\'s context or instructions.',
  },
  {
    q: "What topics do the playbooks cover?",
    a: "SEO, CRO, email marketing, paid media (Google, Meta, LinkedIn), growth hacking, analytics, ABM, lead generation, marketing ops, AI and automation, pricing strategy, web scraping, and revenue intelligence.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface-hover transition-colors"
              >
                <span className="font-medium text-sm">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-muted flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
