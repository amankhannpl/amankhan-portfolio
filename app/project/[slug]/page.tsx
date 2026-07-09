import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projectMap = {
  "orthosyn-medikal": {
    title: "Orthosyn Medikal",
    subtitle:
      "Asia sales, cross-border B2B medical supply chains, and international trade execution.",
    role: "Asia Sales Manager",
    color: "from-signal/70 to-acid/70",
    overview:
      "At Orthosyn Medikal, Aman worked across complex B2B medical supply chains with a focus on Asia-facing sales coordination, international trade relations, supplier-buyer communication, and logistics execution. The work required commercial clarity, operational discipline, and trust across borders.",
    challenge:
      "Medical supply chains are high-pressure systems: timelines matter, documentation matters, product trust matters, and every country introduces different expectations around communication, compliance, and logistics. The challenge was to coordinate commercial movement without losing precision.",
    architecture:
      "The operating model connected buyer conversations, supplier coordination, shipment planning, documentation flow, and relationship management into one practical execution layer.",
    results: [
      "Cross-border B2B sales coordination",
      "Asia market relationship development",
      "Medical supply logistics planning",
      "International trade communication",
    ],
    stack: [
      "B2B Sales",
      "Medical Supply",
      "Asia Markets",
      "Logistics Architecture",
      "Trade Relations",
    ],
  },
  "ostim-osb-foreign-trade": {
    title: "OSTIM OSB Foreign Trade",
    subtitle:
      "International trade analytics and market research inside a real industrial export environment.",
    role: "Foreign Trade Analyst Intern",
    color: "from-coral/70 to-pearl/60",
    overview:
      "Inside the OSTIM OSB Foreign Trade Department, Aman worked as a Foreign Trade Analyst intern, supporting international market research, export opportunity analysis, sector intelligence, and structured trade data interpretation for industrial businesses.",
    challenge:
      "Export strategy depends on finding signal inside messy global market information. The work required turning country data, buyer patterns, sector trends, and trade indicators into research that could support smarter international outreach.",
    architecture:
      "The workflow combined market screening, competitor observation, sector mapping, country-level research, and export-readiness thinking into practical intelligence for foreign trade decisions.",
    results: [
      "International market research execution",
      "Trade analytics and data interpretation",
      "Export opportunity mapping",
      "Industrial B2B market intelligence",
    ],
    stack: [
      "Market Research",
      "Trade Analytics",
      "Export Strategy",
      "B2B Intelligence",
      "Industrial Markets",
    ],
  },
  "hizlee-rider-connect": {
    title: "Hizlee Rider Connect",
    subtitle:
      "A tech-driven urban distribution model and logistics platform architecture project.",
    role: "Product Builder",
    color: "from-violet/70 to-signal/70",
    overview:
      "Hizlee Rider Connect is Aman&apos;s logistics platform architecture project: a software-driven model for connecting riders, merchants, and urban delivery operations through a more structured distribution layer.",
    challenge:
      "Urban delivery systems become fragile when rider availability, merchant demand, route density, and order visibility are not connected. The challenge was to think through a platform that could make local distribution more coordinated and scalable.",
    architecture:
      "The concept brings together rider onboarding, merchant coordination, delivery assignment, operational dashboards, and real-time logistics visibility into one platform direction.",
    results: [
      "Urban distribution model design",
      "Rider-merchant connection logic",
      "Logistics platform architecture",
      "Scalable software product direction",
    ],
    stack: [
      "Platform Design",
      "Logistics Software",
      "Urban Mobility",
      "Full Stack Architecture",
      "Operations UX",
    ],
  },
} as const;

type ProjectSlug = keyof typeof projectMap;

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug) as ProjectSlug;
  const project = projectMap[slug] ?? projectMap["orthosyn-medikal"];

  return (
    <main className="min-h-screen bg-ink px-5 py-8 text-pearl md:px-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-3 border border-white/10 px-4 py-3 text-sm uppercase text-pearl/60 transition hover:border-acid hover:text-acid"
      >
        <ArrowLeft size={17} />
        Back
      </Link>

      <section className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-end overflow-hidden py-20">
        <div
          className={`absolute inset-x-0 top-24 h-[58svh] border border-white/10 bg-gradient-to-br ${project.color} opacity-80`}
        />

        <div className="relative z-10 bg-gradient-to-t from-ink via-ink/92 to-transparent pt-36">
          <p className="mb-5 text-xs uppercase text-pearl/45">
            {project.role}
          </p>

          <h1 className="font-display text-[clamp(4rem,13vw,13rem)] leading-[0.82]">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-pearl/65">
            {project.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 pb-16 md:grid-cols-3">
        {[
          ["Overview", project.overview],
          ["Challenge", project.challenge],
          ["System", project.architecture],
        ].map(([label, body]) => (
          <article
            key={label}
            className="border border-white/10 bg-white/[0.025] p-6"
          >
            <p className="text-xs uppercase text-acid">{label}</p>
            <p className="mt-6 text-lg leading-8 text-pearl/65">{body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 pb-28 md:grid-cols-[0.8fr_1.2fr]">
        <article className="border border-white/10 bg-white/[0.025] p-6">
          <p className="text-xs uppercase text-acid">Key proof points</p>

          <div className="mt-6 space-y-4">
            {project.results.map((result) => (
              <div
                key={result}
                className="border border-white/10 px-4 py-3 text-pearl/70"
              >
                {result}
              </div>
            ))}
          </div>
        </article>

        <article className="border border-white/10 bg-white/[0.025] p-6">
          <p className="text-xs uppercase text-acid">Capabilities involved</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="border border-white/10 px-4 py-3 text-sm uppercase text-pearl/55"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 py-16">
        <a
          href="mailto:hello@amankhannpl.com"
          className="inline-flex items-center gap-3 text-2xl text-pearl transition hover:text-acid"
        >
          Discuss a build like this
          <ArrowUpRight />
        </a>
      </section>
    </main>
  );
}