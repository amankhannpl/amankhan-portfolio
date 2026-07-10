"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Diamond,
  Github,
  Linkedin,
  Mail,
  MousePointer2,
  Sparkles,
  Zap,
  Globe,
  BarChart3,
  Network,
  MessageSquare,
} from "lucide-react";

const bentoItems = [
  {
    id: "orthosyn",
    title: "Orthosyn Medikal",
    role: "Asia Sales Manager",
    description: "Orchestrating international B2B medical supply chains and global market operations across Asia.",
    icon: Globe,
    gradient: "from-signal/20 to-signal/5",
    borderColor: "border-signal/30",
    textColor: "text-signal",
    stats: [
      { label: "Markets", value: "12+" },
      { label: "Supply Chains", value: "Global" },
      { label: "B2B Volume", value: "High" },
    ],
    features: ["International Trade", "Medical Supply", "Logistics Architecture", "Commercial Coordination"],
    size: "large",
  },
  {
    id: "ostim",
    title: "OSTIM OSB Foreign Trade",
    role: "Foreign Trade Analyst",
    description: "Executing global trade data analytics and market research for export intelligence.",
    icon: BarChart3,
    gradient: "from-coral/20 to-coral/5",
    borderColor: "border-coral/30",
    textColor: "text-coral",
    stats: [
      { label: "Reports", value: "50+" },
      { label: "Markets", value: "15+" },
      { label: "Data Points", value: "10K+" },
    ],
    features: ["Trade Analytics", "Market Research", "Export Strategy", "B2B Intelligence"],
    size: "medium",
  },
  {
    id: "hizlee",
    title: "Hizlee Rider Connect",
    role: "Logistics Platform Architecture",
    description: "Tech-driven urban distribution model and logistics platform software architecture.",
    icon: Network,
    gradient: "from-violet/20 to-violet/5",
    borderColor: "border-violet/30",
    textColor: "text-violet",
    stats: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Model", value: "Urban" },
      { label: "Scale", value: "Scalable" },
    ],
    features: ["Platform Design", "Logistics", "Software Architecture", "Urban Mobility"],
    size: "medium",
  },
];

const experiences = [
  {
    title: "Software Engineering",
    body: "Building reliable systems with product taste, strong interfaces, and clean architecture.",
    icon: Code2,
  },
  {
    title: "AI Engineering",
    body: "Designing agent workflows, retrieval layers, and human-in-the-loop tools that feel useful fast.",
    icon: BrainCircuit,
  },
  {
    title: "Creative Technology",
    body: "Merging motion, interaction, and storytelling into memorable digital moments.",
    icon: MousePointer2,
  },
  {
    title: "Founder Mindset",
    body: "Turning complex markets, logistics systems, and product ideas into sharp execution plans.",
    icon: Zap,
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "AI Agents",
  "Python",
  "Trade Analytics",
  "Supply Chains",
  "UX Systems",
  "Startups",
];

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-pearl">
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-[80] grid place-items-center bg-black transition-all duration-1000 ease-in-out ${
          ready ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="relative grid h-44 w-44 place-items-center">
          <div className="absolute inset-0 border border-pearl/20 animate-spin-slow" />
          <div className="absolute inset-6 border border-acid/40 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="font-display text-4xl tracking-normal">AK</div>
          <div className="absolute bottom-0 text-xs uppercase text-pearl/50">
            initializing signal
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed left-4 right-4 top-5 z-40 mx-auto flex max-w-5xl items-center justify-between border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-5">
        <a href="#home" className="font-display text-lg">
          AMAN.
        </a>

        <div className="hidden items-center gap-6 text-xs uppercase text-pearl/60 md:flex">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-pearl"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@amankhannpl.com"
          aria-label="Email Aman"
          className="grid h-9 w-9 place-items-center border border-white/10 transition hover:border-acid hover:text-acid"
        >
          <Mail size={16} />
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-5 pt-20">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div
            className={`mb-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase text-pearl/60 opacity-0 ${
              ready ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="border border-pearl/15 px-3 py-2">
              Software engineer
            </span>
            <span className="border border-pearl/15 px-3 py-2">
              AI builder
            </span>
            <span className="border border-pearl/15 px-3 py-2">
              Global operator
            </span>
          </div>

          <h1
            className={`max-w-6xl mx-auto font-display text-[clamp(3rem,10vw,8rem)] font-medium leading-[0.9] tracking-normal opacity-0 ${
              ready ? "animate-slide-up" : ""
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            Building intelligent systems for the real world.
          </h1>

          <p
            className={`mt-8 max-w-2xl mx-auto text-lg leading-8 text-pearl/68 md:text-xl opacity-0 ${
              ready ? "animate-slide-up" : ""
            }`}
            style={{ animationDelay: "0.7s" }}
          >
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
          <div className="mb-12 inline-flex items-center gap-3 border border-white/10 px-3 py-2 text-xs uppercase text-pearl/45">
            <Diamond size={15} />
            <span>Professional pillars</span>
          </div>

          <h2 className="mb-16 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.92]">
            Real work. Sharp systems.
          </h2>

          {/* Bento Grid */}
          <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
            {bentoItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden border ${item.borderColor} bg-gradient-to-br ${item.gradient} p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow opacity-0 animate-slide-up`}
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`,
                  gridRow: item.size === "large" ? "span 2" : "span 1",
                }}
              >
                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center border ${item.borderColor} ${item.textColor} transition group-hover:scale-110`}>
                  <item.icon size={28} />
                </div>

                {/* Content */}
                <div className="text-xs uppercase text-pearl/45 mb-2">
                  {item.role}
                </div>

                <h3 className="font-display text-2xl md:text-3xl mb-4">
                  {item.title}
                </h3>

                <p className="text-base leading-7 text-pearl/70 mb-6">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="bg-black/30 p-3 border border-white/5">
                      <div className="font-display text-xl md:text-2xl">{stat.value}</div>
                      <div className="mt-1 text-xs uppercase text-pearl/40">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-white/10 px-3 py-1.5 text-xs uppercase text-pearl/50 bg-black/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`}
                />
              </div>
            ))}

            {/* AI Chat CTA Card */}
            <Link
              href="https://ask.amankhannpl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-acid/30 bg-gradient-to-br from-acid/10 to-acid/5 p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-acid opacity-0 animate-slide-up flex flex-col justify-center items-center text-center"
              style={{ animationDelay: "0.8s" }}
            >
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-acid/5 animate-pulse-slow" />
              
              <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-acid/50 text-acid mb-4 transition group-hover:scale-110 group-hover:shadow-glow-acid">
                <MessageSquare size={32} />
              </div>

              <h3 className="relative z-10 font-display text-2xl md:text-3xl mb-3 text-acid">
                Chat with AI
              </h3>

              <p className="relative z-10 text-base leading-7 text-pearl/70 mb-6">
                Ask questions about my work, experience, or connect directly through my AI assistant.
              </p>

              <div className="relative z-10 inline-flex items-center gap-2 text-acid text-sm uppercase transition group-hover:gap-3">
                <span>ask.amankhannpl.com</span>
                <ArrowUpRight size={18} />
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-acid/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 inline-flex items-center gap-3 border border-white/10 px-3 py-2 text-xs uppercase text-pearl/45">
            <Sparkles size={15} />
            <span>The builder profile</span>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <article
                  key={experience.title}
                  className="group min-h-72 border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-acid/60 hover:bg-white/[0.05] hover:-translate-y-2 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <div className="mb-16 flex h-11 w-11 items-center justify-center border border-white/10 text-acid transition group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-2xl">{experience.title}</h3>

                  <p className="mt-5 text-sm leading-7 text-pearl/58">
                    {experience.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 inline-flex items-center gap-3 border border-white/10 px-3 py-2 text-xs uppercase text-pearl/45">
            <Cpu size={15} />
            <span>Skill constellation</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="flex aspect-square items-end border border-white/10 bg-white/[0.02] p-4 font-display text-xl transition-all duration-500 hover:border-signal/70 hover:text-signal hover:-translate-y-1 opacity-0 animate-scale-in"
                style={{ animationDelay: `${1.3 + index * 0.05}s` }}
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
          <p className="mb-8 text-xs uppercase text-pearl/45">Contact</p>

          <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.86]">
            Let&apos;s build something unforgettable.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:hello@amankhannpl.com"
              className="inline-flex items-center gap-3 border border-acid/50 px-5 py-4 text-acid transition hover:bg-acid hover:text-black"
            >
              <Mail size={18} />
              Start a conversation
            </a>

            <a
              href="https://github.com/amankhannpl"
              className="grid h-14 w-14 place-items-center border border-white/10 transition hover:border-pearl"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/amankhannpl"
              className="grid h-14 w-14 place-items-center border border-white/10 transition hover:border-pearl"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}