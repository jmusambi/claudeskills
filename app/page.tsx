import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsDirectory from "@/components/SkillsDirectory";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getAllSkills } from "@/lib/skills";

export default function Home() {
  const skills = getAllSkills();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SkillsDirectory skills={skills} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
