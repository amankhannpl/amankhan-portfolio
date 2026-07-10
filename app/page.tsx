import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#f5f1e8]">
      {/* Navigation */}
      <nav className="fixed left-4 right-4 top-5 z-40 mx-auto flex max-w-5xl items-center justify-between border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-5">
        <a href="#home" className="font-display text-lg">
          AMAN.
        </a>

        <div className="hidden items-center gap-6 text-xs uppercase text-[#f5f1e8]/60 md:flex">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-[#f5f1e8]"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@amankhannpl.com"
          aria-label="Email Aman"
          className="grid h-9 w-9 place-items-center border border-white/10 transition hover:border-[#d5ff5f] hover:text-[#d5ff5f]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-5 pt-20">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase text-[#f5f1e8]/60">
            <span className="border border-[#f5f1e8]/15 px-3 py-2">
              Software engineer
            </span>
            <span className="border border-[#f5f1e8]/15 px-3 py-2">
              AI builder
            </span>
            <span className="border border-[#f5f1e8]/15 px-3 py-2">
              Global operator
            </span>
          </div>

          <h1 className="max-w-6xl mx-auto font-display text-[clamp(3rem,10vw,8rem)] font-medium leading-[0.9] tracking-normal">
            Building intelligent systems for the real world.
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-[#f5f1e8]/68 md:text-xl">
            Aman Khan connects software engineering, AI product thinking,
            international trade, and logistics execution into one unusually
            practical builder profile.
          </p>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(83,224,255,.08),transparent_50%)] pointer-events-none" />
      </section>

      {/* Bento Grid Section */}
      <section id="work" className="relative px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 inline-flex items-center gap-3 border border-white/10 px-3 py-2 text-xs uppercase text-[#f5f1e8]/45">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l4 6-10 13L2 9z"/>
            </svg>
            <span>Professional pillars</span>
          </div>

          <h2 className="mb-16 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.92]">
            Real work. Sharp systems.
          </h2>

          {/* Bento Grid */}
          <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
            {/* Orthosyn Medikal - Large Card */}
            <div className="group relative overflow-hidden border border-[#53e0ff]/30 bg-gradient-to-br from-[#53e0ff]/20 to-[#53e0ff]/5 p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(83,224,255,0.18)] md:row-span-2">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-[#53e0ff]/30 text-[#53e0ff] transition group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>

              {/* Content */}
              <div className="text-xs uppercase text-[#f5f1e8]/45 mb-2">
                Asia Sales Manager
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-4">
                Orthosyn Medikal
              </h3>

              <p className="text-base leading-7 text-[#f5f1e8]/70 mb-6">
                Orchestrating international B2B medical supply chains and global market operations across Asia.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">12+</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Markets
                  </div>
                </div>
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">Global</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Supply Chains
                  </div>
                </div>
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">High</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    B2B Volume
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {["International Trade", "Medical Supply", "Logistics Architecture", "Commercial Coordination"].map((feature) => (
                  <span
                    key={feature}
                    className="border border-white/10 px-3 py-1.5 text-xs uppercase text-[#f5f1e8]/50 bg-black/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#53e0ff]/20 to-[#53e0ff]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </div>

            {/* OSTIM OSB Foreign Trade - Medium Card */}
            <div className="group relative overflow-hidden border border-[#ff6b57]/30 bg-gradient-to-br from-[#ff6b57]/20 to-[#ff6b57]/5 p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,107,87,0.18)]">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-[#ff6b57]/30 text-[#ff6b57] transition group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>

              {/* Content */}
              <div className="text-xs uppercase text-[#f5f1e8]/45 mb-2">
                Foreign Trade Analyst
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-4">
                OSTIM OSB Foreign Trade
              </h3>

              <p className="text-base leading-7 text-[#f5f1e8]/70 mb-6">
                Executing global trade data analytics and market research for export intelligence.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">50+</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Reports
                  </div>
                </div>
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">15+</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Markets
                  </div>
                </div>
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">10K+</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Data Points
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {["Trade Analytics", "Market Research", "Export Strategy", "B2B Intelligence"].map((feature) => (
                  <span
                    key={feature}
                    className="border border-white/10 px-3 py-1.5 text-xs uppercase text-[#f5f1e8]/50 bg-black/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b57]/20 to-[#ff6b57]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </div>

            {/* Hizlee Rider Connect - Medium Card */}
            <div className="group relative overflow-hidden border border-[#a78bfa]/30 bg-gradient-to-br from-[#a78bfa]/20 to-[#a78bfa]/5 p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(167,139,250,0.18)]">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-[#a78bfa]/30 text-[#a78bfa] transition group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="3"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="12" x2="7" y2="17"/>
                  <line x1="12" y1="12" x2="17" y2="17"/>
                  <circle cx="7" cy="17" r="3"/>
                  <circle cx="17" cy="17" r="3"/>
                </svg>
              </div>

              {/* Content */}
              <div className="text-xs uppercase text-[#f5f1e8]/45 mb-2">
                Logistics Platform Architecture
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-4">
                Hizlee Rider Connect
              </h3>

              <p className="text-base leading-7 text-[#f5f1e8]/70 mb-6">
                Tech-driven urban distribution model and logistics platform software architecture.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">Full Stack</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Architecture
                  </div>
                </div>
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">Urban</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Model
                  </div>
                </div>
                <div className="bg-black/30 p-3 border border-white/5">
                  <div className="font-display text-xl md:text-2xl">Scalable</div>
                  <div className="mt-1 text-xs uppercase text-[#f5f1e8]/40">
                    Scale
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {["Platform Design", "Logistics", "Software Architecture", "Urban Mobility"].map((feature) => (
                  <span
                    key={feature}
                    className="border border-white/10 px-3 py-1.5 text-xs uppercase text-[#f5f1e8]/50 bg-black/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/20 to-[#a78bfa]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </div>

            {/* AI Chat CTA Card */}
            <Link
              href="https://ask.amankhannpl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-[#d5ff5f]/30 bg-gradient-to-br from-[#d5ff5f]/10 to-[#d5ff5f]/5 p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(213,255,95,0.18)] flex flex-col justify-center items-center text-center"
            >
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-[#d5ff5f]/5 animate-pulse" style={{ animationDuration: "3s" }} />
              
              <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-[#d5ff5f]/50 text-[#d5ff5f] mb-4 transition group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(213,255,95,0.18)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>

              <h3 className="relative z-10 font-display text-2xl md:text-3xl mb-3 text-[#d5ff5f]">
                Chat with AI
              </h3>

              <p className="relative z-10 text-base leading-7 text-[#f5f1e8]/70 mb-6">
                Ask questions about my work, experience, or connect directly through my AI assistant.
              </p>

              <div className="relative z-10 inline-flex items-center gap-2 text-[#d5ff5f] text-sm uppercase transition group-hover:gap-3">
                <span>ask.amankhannpl.com</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d5ff5f]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 inline-flex items-center gap-3 border border-white/10 px-3 py-2 text-xs uppercase text-[#f5f1e8]/45">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>The builder profile</span>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Software Engineering",
                body: "Building reliable systems with product taste, strong interfaces, and clean architecture.",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              },
              {
                title: "AI Engineering",
                body: "Designing agent workflows, retrieval layers, and human-in-the-loop tools that feel useful fast.",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"/><path d="M12 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"/><path d="M4.93 4.93a2 2 0 0 1 2.83 0l1.41 1.41a2 2 0 0 1 0 2.83l-1.41 1.41a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l1.41-1.41z"/><path d="M14.83 14.83a2 2 0 0 1 2.83 0l1.41 1.41a2 2 0 0 1 0 2.83l-1.41 1.41a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l1.41-1.41z"/></svg>
              },
              {
                title: "Creative Technology",
                body: "Merging motion, interaction, and storytelling into memorable digital moments.",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              },
              {
                title: "Founder Mindset",
                body: "Turning complex markets, logistics systems, and product ideas into sharp execution plans.",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              },
            ].map((experience) => (
              <article
                key={experience.title}
                className="group min-h-72 border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#d5ff5f]/60 hover:bg-white/[0.05] hover:-translate-y-2"
              >
                <div className="mb-16 flex h-11 w-11 items-center justify-center border border-white/10 text-[#d5ff5f] transition group-hover:scale-110">
                  {experience.icon}
                </div>

                <h3 className="font-display text-2xl">{experience.title}</h3>

                <p className="mt-5 text-sm leading-7 text-[#f5f1e8]/58">
                  {experience.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 inline-flex items-center gap-3 border border-white/10 px-3 py-2 text-xs uppercase text-[#f5f1e8]/45">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
              <rect x="9" y="9" width="6" height="6"/>
              <line x1="9" y1="1" x2="9" y2="4"/>
              <line x1="15" y1="1" x2="15" y2="4"/>
              <line x1="9" y1="20" x2="9" y2="23"/>
              <line x1="15" y1="20" x2="15" y2="23"/>
              <line x1="20" y1="9" x2="23" y2="9"/>
              <line x1="20" y1="14" x2="23" y2="14"/>
              <line x1="1" y1="9" x2="4" y2="9"/>
              <line x1="1" y1="14" x2="4" y2="14"/>
            </svg>
            <span>Skill constellation</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {["React", "Next.js", "TypeScript", "AI Agents", "Python", "Trade Analytics", "Supply Chains", "UX Systems", "Startups"].map((skill) => (
              <div
                key={skill}
                className="flex aspect-square items-end border border-white/10 bg-white/[0.02] p-4 font-display text-xl transition-all duration-500 hover:border-[#53e0ff]/70 hover:text-[#53e0ff] hover:-translate-y-1"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">
          <p className="mb-8 text-xs uppercase text-[#f5f1e8]/45">Contact</p>

          <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.86]">
            Let&apos;s build something unforgettable.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:hello@amankhannpl.com"
              className="inline-flex items-center gap-3 border border-[#d5ff5f]/50 px-5 py-4 text-[#d5ff5f] transition hover:bg-[#d5ff5f] hover:text-black"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Start a conversation
            </a>

            <a
              href="https://github.com/amankhannpl"
              className="grid h-14 w-14 place-items-center border border-white/10 transition hover:border-[#f5f1e8]"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/amankhannpl"
              className="grid h-14 w-14 place-items-center border border-white/10 transition hover:border-[#f5f1e8]"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}