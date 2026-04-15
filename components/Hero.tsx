export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 hero-mesh overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1 text-xs text-muted mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Fresh playbooks dropping regularly
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Make your AI think like
          <br />
          <span className="text-accent">a growth marketer.</span>
        </h1>

        <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          24 battle-tested playbooks from a marketer who&apos;s grown pipeline by
          1000%+. One install command. Your AI stops guessing and starts
          executing.
        </p>

        <div className="mb-16" />
      </div>

      {/* Built by section — below hero, centered */}
      <div className="max-w-md mx-auto relative z-10">
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-sm font-semibold mb-4">Built by</h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent via-cyan-400 to-teal-500 flex-shrink-0" />
            <div>
              <p className="font-semibold">Joel Musambi</p>
              <p className="text-sm text-muted">@joelmusambi</p>
              <p className="text-sm text-muted mt-1">
                Growth Marketer &middot; 10+ years B2B SaaS &amp; EdTech
              </p>
              <p className="text-xs text-muted mt-2">24 playbooks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
