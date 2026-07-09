"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
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
  Terminal,
  Zap,
} from "lucide-react";

const HeroScene = dynamic(() => import("../components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(83,224,255,.12),transparent_36%)]" />
  ),
});

const projects = [
  {
    title: "Orthosyn Medikal",
    slug: "orthosyn-medikal",
    eyebrow: "Asia Sales Manager",
    summary:
      "Cross-border B2B medical supply chain execution across Asia, combining international trade relations, logistics architecture, and high-trust commercial coordination.",
    stack: ["B2B Sales", "Medical Supply", "Asia Markets", "Trade Logistics"],
    accent: "from-signal/70 to-acid/60",
  },
  {
    title: "OSTIM OSB Foreign Trade",
    slug: "ostim-osb-foreign-trade",
    eyebrow: "Foreign Trade Analyst",
    summary:
      "Professional internship experience focused on international trade analytics, market research, export intelligence, and structured opportunity mapping.",
    stack: ["Market Research", "Trade Analytics", "Export Strategy", "B2B Data"],
    accent: "from-coral/70 to-pearl/50",
  },
  {
    title: "Hizlee Rider Connect",
    slug: "hizlee-rider-connect",
    eyebrow: "Logistics Platform Architecture",
    summary:
      "A tech-driven urban distribution model and software architecture project designed to connect riders, merchants, and delivery operations through a scalable logistics layer.",
    stack: ["Platform Design", "Logistics", "Full Stack", "Urban Mobility"],
    accent: "from-violet/70 to-signal/60",
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
    body: "Merging motion, interaction, 3D, and storytelling into memorable digital moments.",
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
  "Framer Motion",
  "Startups",
];

export default function Home() {
  const [ready, setReady] = useState(false);
  const [hiddenNav, setHiddenNav] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const lastY = useRef(0);

  const { scrollYProgress, scrollY } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.88]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.28]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.18,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    const timer = window.setTimeout(() => {
      setReady(true);
    }, 1150);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHiddenNav(latest > lastY.current && latest > 140);
    lastY.current = latest;
  });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", move);

    return () => {
      window.removeEventListener("pointermove", move);
    };
  }, []);

  const navItems = useMemo(
    () => ["Work", "About", "Projects", "AI", "Contact"],
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-pearl">
      <motion.div
        className="pointer-events-none fixed z-50 hidden h-5 w-5 rounded-full border border-pearl/60 mix-blend-difference md:block"
        animate={{ x: cursor.x - 10, y: cursor.y - 10 }}
        transition={{ type: "spring", stiffness: 360, damping: 32, mass: 0.4 }}
      />

      <motion.div
        className="fixed inset-0 z-[80] grid place-items-center bg-ink"
        initial={false}
        animate={
          ready
            ? { y: "-105%", filter: "blur(18px)" }
            : { y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative grid h-44 w-44 place-items-center">
          <motion.div
            className="absolute inset-0 border border-pearl/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-6 border border-acid/40"
            animate={{ rotate: -360, scale: [1, 0.86, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="font-display text-4xl tracking-normal">AK</div>
          <div className="absolute bottom-0 text-xs uppercase text-pearl/50">
            initializing signal
          </div>
        </div>
      </motion.div>

      <motion.nav
        className="fixed left-4 right-4 top-5 z-40 mx-auto flex max-w-5xl items-center justify-between border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-5"
        animate={{ y: hiddenNav ? -100 : 0, opacity: hiddenNav ? 0 : 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <a href="#home" className="font-display text-lg">
          AMAN.
        </a>

        <div className="hidden items-center gap-6 text-xs uppercase text-pearl/60 md:flex">
          {navItems.map((item) => (
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
      </motion.nav>

      <section id="home" className="relative min-h-[112svh] overflow-hidden">
        <HeroScene />

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:px-10 md:pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase text-pearl/60"
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
          </motion.div>

          <h1 className="max-w-6xl font-display text-[clamp(4.2rem,12vw,12.8rem)] font-medium leading-[0.82] tracking-normal">
            Building intelligent systems for the real world.
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_.7fr] md:items-end">
            <p className="max-w-xl text-lg leading-8 text-pearl/68 md:text-xl">
              Aman Khan connects software engineering, AI product thinking,
              international trade, and logistics execution into one unusually
              practical builder profile.
            </p>

            <a
              href="#projects"
              className="group inline-flex w-fit items-center gap-3 border border-pearl/15 px-5 py-4 text-sm uppercase text-pearl/80 transition hover:border-acid hover:text-acid"
            >
              Enter the work
              <ArrowUpRight
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
              />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="work" className="relative px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <SceneLabel icon={<Diamond size={15} />} text="Operating thesis" />

          <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr] md:items-start">
            <h2 className="font-display text-[clamp(2.6rem,7vw,7.5rem)] leading-[0.92]">
              Strategy becomes stronger when it can ship.
            </h2>

            <div className="space-y-8 pt-2 text-xl leading-9 text-pearl/68">
              <RevealText text="The best builders understand both code and consequence: how a product moves through markets, how operations break under pressure, and how intelligent systems can make execution feel lighter." />

              <div className="grid grid-cols-3 gap-px bg-white/10">
                {[
                  ["3", "real-world tracks"],
                  ["B2B", "trade execution"],
                  ["AI", "product direction"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-ink p-5">
                    <div className="font-display text-4xl">{value}</div>
                    <div className="mt-2 text-xs uppercase text-pearl/45">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <SceneLabel icon={<Sparkles size={15} />} text="The builder profile" />

          <div className="grid gap-4 md:grid-cols-4">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.title}
                  className="group min-h-72 border border-white/10 bg-white/[0.025] p-6 transition hover:border-acid/60 hover:bg-white/[0.05]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.7 }}
                  whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                >
                  <div className="mb-16 flex h-11 w-11 items-center justify-center border border-white/10 text-acid transition group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-2xl">{experience.title}</h3>

                  <p className="mt-5 text-sm leading-7 text-pearl/58">
                    {experience.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <SceneLabel icon={<Cpu size={15} />} text="Selected experience" />

          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9]">
              Real work. Sharp systems.
            </h2>

            <p className="max-w-sm text-pearl/58">
              Three proof points across international medical trade, export
              analytics, and logistics platform architecture.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.a
                href={`/projects/${project.slug}`}
                key={project.title}
                className="group relative block overflow-hidden border border-white/10 bg-white/[0.025] p-5 md:p-8"
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
              >
                <div
                  className={`absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l ${project.accent} opacity-0 blur-3xl transition duration-700 group-hover:opacity-25`}
                />

                <div className="relative grid gap-8 md:grid-cols-[.8fr_1.2fr_.35fr] md:items-center">
                  <div className="aspect-[16/10] overflow-hidden border border-white/10 bg-black">
                    <div
                      className={`h-full w-full bg-gradient-to-br ${project.accent} opacity-80 transition duration-700 group-hover:scale-110`}
                    />
                  </div>

                  <div>
                    <div className="text-xs uppercase text-pearl/45">
                      {project.eyebrow}
                    </div>

                    <h3 className="mt-3 font-display text-[clamp(2.3rem,6vw,6rem)] leading-none">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl/62">
                      {project.summary}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="border border-white/10 px-3 py-2 text-xs uppercase text-pearl/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="justify-self-start md:justify-self-end">
                    <span className="grid h-14 w-14 place-items-center border border-white/10 transition group-hover:border-acid group-hover:text-acid">
                      <ArrowUpRight />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="relative px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <SceneLabel icon={<BrainCircuit size={15} />} text="AI systems" />

            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9]">
              Intelligence with operational memory.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-pearl/62">
              Aman&apos;s AI direction is grounded in real workflows: trade
              research, logistics planning, market intelligence, and products
              that help people make better decisions faster.
            </p>
          </div>

          <div className="border border-white/10 bg-[#080808] p-4 shadow-2xl shadow-black">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4 text-xs uppercase text-pearl/45">
              <span className="inline-flex items-center gap-2">
                <Terminal size={14} />
                aman.ai
              </span>
              <span>live protocol</span>
            </div>

            <div className="space-y-4 font-mono text-sm">
              {[
                ["input", "analyze a new international market opportunity"],
                [
                  "model",
                  "detect demand signals, buyer segments, logistics constraints",
                ],
                [
                  "output",
                  "market brief, risk map, outreach plan, execution checklist",
                ],
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  className="grid gap-3 border border-white/10 bg-white/[0.02] p-4 md:grid-cols-[100px_1fr]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.18 }}
                >
                  <span className="text-acid">{label}</span>
                  <span className="text-pearl/70">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <SceneLabel icon={<Cpu size={15} />} text="Skill constellation" />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="flex aspect-square items-end border border-white/10 bg-white/[0.025] p-4 font-display text-2xl transition hover:border-signal/70 hover:text-signal"
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035, duration: 0.45 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">
          <p className="mb-8 text-xs uppercase text-pearl/45">Contact</p>

          <h2 className="max-w-5xl font-display text-[clamp(3.5rem,10vw,11rem)] leading-[0.86]">
            Let&apos;s build something unforgettable.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:hello@amankhannpl.com"
              className="inline-flex items-center gap-3 border border-acid/50 px-5 py-4 text-acid transition hover:bg-acid hover:text-ink"
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

function SceneLabel({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="mb-8 inline-flex items-center gap-3 border border-white/10 px-3 py-2 text-xs uppercase text-pearl/45">
      {icon}
      {text}
    </div>
  );
}

function RevealText({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.p>
  );
}