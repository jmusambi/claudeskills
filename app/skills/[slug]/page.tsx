import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillContent from "@/components/SkillContent";
import CopyButton from "@/components/CopyButton";
import {
  getAllSkills,
  getSkillBySlug,
  getSkillContent,
  getRelatedSkills,
} from "@/lib/skills";

export function generateStaticParams() {
  return getAllSkills().map((skill) => ({ slug: skill.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const skill = getSkillBySlug(slug);
    if (!skill) return { title: "Playbook Not Found" };
    return {
      title: `${skill.name} — GrowthSkills`,
      description: skill.description,
    };
  });
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const content = getSkillContent(skill.repoPath);
  const allSkills = getAllSkills();
  const related = getRelatedSkills(skill, allSkills);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/#skills"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all playbooks
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{skill.name}</h1>
          <p className="text-muted max-w-2xl mb-4">{skill.description}</p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs border border-border rounded-full px-3 py-1">
              {skill.category}
            </span>
            <span
              className={`text-xs rounded-full px-3 py-1 font-medium ${
                skill.access === "paid"
                  ? "bg-accent/15 text-accent"
                  : "bg-emerald-500/15 text-emerald-400"
              }`}
            >
              {skill.access === "paid" ? "Paid" : "Free"}
            </span>
          </div>

          <div className="bg-surface border border-border rounded-xl p-4 font-mono text-sm mb-10">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-muted">$</span>{" "}
                <span className="text-foreground">
                  npx growthskills add {skill.slug}
                </span>
              </div>
              <CopyButton text={`npx growthskills add ${skill.slug}`} />
            </div>
          </div>

          {content ? (
            <SkillContent content={content} />
          ) : (
            <div className="text-center py-16 text-muted">
              <p>Playbook content is loading or not yet available.</p>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-xl font-bold mb-6">Related Playbooks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/skills/${r.slug}`}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-accent/40 hover:bg-surface-hover transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">
                        {r.name}
                      </h3>
                      <span className="text-[10px] border border-border rounded-full px-2 py-0.5 text-muted flex-shrink-0">
                        {r.category}
                      </span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {r.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
