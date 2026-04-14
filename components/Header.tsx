import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-black font-bold text-sm font-mono">GS</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">
            growthskills
          </span>
        </Link>
        <Link
          href="/#skills"
          className="bg-accent hover:bg-accent-light text-black font-medium text-sm px-4 py-2 rounded-lg transition-colors"
        >
          Browse
        </Link>
      </div>
    </header>
  );
}
