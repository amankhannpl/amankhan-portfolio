import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-purple-500/30">
      {/* Background radial soft ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl w-full space-y-12 z-10">
        {/* Hero Header Section */}
        <header className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Software Engineering & Global Trade Execution
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            Aman Khan.
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Optimizing robust software systems while managing international B2B medical supply chains, logistics architecture, and cross-border operations.
          </p>
        </header>

        {/* AI INTERACTIVE CTA COMPONENT */}
        <section className="p-8 rounded-2xl border border-zinc-800/80 bg-gradient-to-r from-zinc-900/40 to-purple-950/10 backdrop-blur-md space-y-4 shadow-2xl relative group">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-all duration-500" />
          <div className="relative z-10 space-y-3">
            <h3 className="text-xl font-bold tracking-tight text-white">Inquire anything about my background to my custom AI</h3>
            <p className="text-zinc-400 text-sm max-w-xl">
              Get instant answers regarding my software engineering solutions, cross-border corporate positions, or advanced competition algorithms.
            </p>
            <div className="pt-2">
              <Link href="/ask" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                Ask about me to my AI
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* BENTO EXPERIENCE MATRIX */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 space-y-2">
            <div className="text-purple-400 font-medium text-xs uppercase tracking-wider">Software Engineering</div>
            <h4 className="text-lg font-bold text-white">Ostim Technical University</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Developing advanced multi-paradigm systems leveraging Python, C++, and Next.js architectures built for maximum performance.</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 space-y-2">
            <div className="text-indigo-400 font-medium text-xs uppercase tracking-wider">Global Commerce</div>
            <h4 className="text-lg font-bold text-white">Orthosyn Medikal</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Serving as Asia Sales Manager executing complex cross-border medical distribution networks, supply logistics, and international B2B relations.</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 space-y-2">
            <div className="text-pink-400 font-medium text-xs uppercase tracking-wider">Advanced Core Projects</div>
            <h4 className="text-lg font-bold text-white">Hizlee Rider Connect</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Engineering urban distribution models and intelligence assets optimized for high-performance architectural systems.</p>
          </div>
        </section>
      </div>
    </main>
  );
}