export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-black font-bold text-xs font-mono">
                  GS
                </span>
              </div>
              <span className="font-semibold tracking-tight">
                growthskills
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Plug-and-play marketing playbooks that turn any AI tool into a
              growth specialist.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="https://github.com/jmusambi/claudeskills"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joelmusambi/"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/joelmusambi/growthskills/blob/main/LICENSE"
                  className="hover:text-foreground transition-colors"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} GrowthSkills. Built by Joel
            Musambi.
          </p>
          <p>
            Built for marketers who are tired of teaching AI the basics.
          </p>
        </div>
      </div>
    </footer>
  );
}
