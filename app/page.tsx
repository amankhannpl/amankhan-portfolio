import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-10%] h-[34rem] w-[34rem] rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute right-[-10%] top-[15%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[180px]" />
        <div className="absolute bottom-[-15%] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 lg:px-10">
        {/* Navigation */}
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Portfolio
            </p>
            <h2 className="mt-1 text-xl font-semibold">Aman Khan</h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm text-white/60">
              Open to Software & Global Commerce Opportunities
            </span>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-16 pb-14">
          <div className="max-w-5xl">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50 backdrop-blur">
              Software Engineer • International Business • Logistics Strategy
            </span>

            <h1 className="mt-8 text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-8xl">
              Building{" "}
              <span className="bg-gradient-to-r from-white via-purple-300 to-emerald-300 bg-clip-text text-transparent">
                intelligent software
              </span>
              <br />
              while executing
              <br />
              global business.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
              Software Engineering student at Ostim Technical University with a
              unique combination of modern software development, AI-driven
              systems, international trade, medical distribution, and logistics
              execution. My work bridges engineering with real-world commercial
              operations across global markets.
            </p>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="grid gap-6 lg:grid-cols-12">
          {/* Software */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-purple-400/40 hover:bg-white/10 lg:col-span-7">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl transition group-hover:scale-125" />

            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-purple-300">
                Section A
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                Software Engineering
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/65">
                Designing scalable software solutions using Python, C++, and
                Next.js while studying Software Engineering at Ostim Technical
                University. Passionate about AI systems, backend architecture,
                automation, and modern web experiences that combine performance
                with elegant design.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Python", "C++", "Next.js", "TypeScript", "AI", "Automation"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/70"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </article>

          {/* AI CTA */}
          <aside className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/10 lg:col-span-5">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10 opacity-70" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                  </span>

                  <span className="text-sm uppercase tracking-[0.25em] text-white/60">
                    AI Assistant Live
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  Meet Aman AI
                </h3>

                <p className="mt-4 leading-8 text-white/65">
                  Explore an interactive AI experience capable of answering
                  questions about my background, technical expertise, projects,
                  business experience, and international work.
                </p>
              </div>

              <Link
                href="https://ai.amankhan.codes"
                className="mt-10 inline-flex items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-6 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(16,185,129,0.25)] transition duration-300 hover:scale-[1.03] hover:bg-emerald-500/30 hover:shadow-[0_0_60px_rgba(16,185,129,0.45)]"
              >
                Launch AI Experience
              </Link>
            </div>
          </aside>

          {/* Commerce */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-indigo-400/40 hover:bg-white/10 lg:col-span-5">
            <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-indigo-300">
                Section B
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                Global Commerce & Logistics
              </h2>

              <p className="mt-5 leading-8 text-white/65">
                Driving international medical distribution as Asia Sales Manager
                at Orthosyn Medikal. Experienced in B2B negotiations,
                cross-border supply chains, OEM partnerships, regulatory
                documentation, distributor development, and international
                relationship management across multiple markets.
              </p>
            </div>
          </article>

          {/* Projects */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-purple-400/40 hover:bg-white/10 lg:col-span-7">
            <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-purple-500/15 blur-3xl" />

            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                Section C
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                Projects & Impact
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-xl font-semibold">
                    Hizlee Rider Connect
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    A logistics technology platform connecting businesses with
                    freelance delivery partners through scalable digital
                    infrastructure, intelligent allocation, and operational
                    automation.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-xl font-semibold">
                    Foreign Trade Analyst
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    Internship at the OSTIM OSB Foreign Trade Department,
                    supporting export development, international market
                    research, trade intelligence, and strategic analysis for
                    industrial companies.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm text-white/40">
            Engineering elegant software. Enabling global business.
          </p>
        </footer>
      </div>
    </main>
  );
}