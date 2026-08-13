import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";

export const metadata: Metadata = { title: "About Us | Agronomie" };

const FOCUS_AREAS = [
  {
    title: "Our Focus",
    text: "The company's range of strategies and opportunities are tailored to preserve and grow institutional investments in sustainable infrastructure assets alongside proactive management of environmental, social and governance (ESG) considerations. Agronomie's investments directly address key sustainability challenges and provide innovative solutions that seek a positive impact while also achieving strong risk-adjusted financial returns in the agro-market segments prevalent in each community.",
  },
  {
    title: "The Solution",
    text: "Partnering with mini-grid operators and agro co-operative societies, Agronomie's platform uses existing data to identify agro entrepreneurs that require business asset financing and selects eligible ones through data-driven credit profiling. We provide agro-productive applications that grow the customer's wallet while also increasing revenue to the mini-grid.",
  },
  {
    title: "Our Mission",
    text: "Our mission is to innovatively unlock domestic finance for small and medium-sized infrastructure in unserved or under-served sectors that provide essential services to society, are recession resilient, demonstrate long-term viability with predictable cashflows and reduce the impact of climate change.",
  },
];

const GOALS = [
  "Access to Equipment",
  "Access to Finance",
  "Reduce Fossil Fuel Usage",
  "Alternative Power Offtake for Mini Grids",
  "Boost Rural Economy",
  "Provide Employment Opportunities",
];

const TEAM_PREVIEW = [
  { name: "Jojololami Ngene", role: "Director", image: "/uploads/2018/06/jojo-500x500.jpg" },
  { name: "Olufunmilola Abraham", role: "Head, Legal/Company Secretary", image: "/uploads/2024/10/download-resizehood.com_.png" },
  { name: "John Emmanuel Ogwuche", role: "Energy Expert", image: "/uploads/2018/06/Untitled-design-1.png" },
  { name: "Chioma Chidi", role: "Business Analyst", image: "/uploads/2022/11/chioma-chidi-500x500.jpg" },
];

const PARTNERS = [
  "Untitled-design-14.jpg", "Untitled-design-13.jpg", "Untitled-design-15.jpg",
  "Untitled-design-16.jpg", "Untitled-design-17.jpg", "Untitled-design-18.jpg",
  "Untitled-design-19.jpg", "Untitled-design-21-1.jpg", "Untitled-design-3.png",
  "Untitled-design-12.jpg", "Untitled-design-11.jpg", "Untitled-design-7.jpg",
  "Untitled-design-9.jpg", "Untitled-design-8.jpg", "Untitled-design-10.jpg",
];
const PARTNER_PATHS = [
  ...PARTNERS.slice(0, 9).map((f) => `/uploads/2024/10/${f}`),
  ...["Untitled-design-9.jpg", "Untitled-design-8.jpg"].map((f) => `/uploads/2018/10/${f}`),
  "/uploads/2015/02/Untitled-design-10.jpg",
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Agronomie"
        subtitle="Agronomie is a specialised agro-tech company aggregating and accelerating access to finance for agro-productive use of clean energy from solar mini-grids."
        image="/uploads/2022/10/ab-bg-2.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-16 text-center">
        <p className="text-text-secondary leading-relaxed mb-4">
          Agronomie is a specialised agro-tech company aggregating and
          accelerating access to finance for agro-productive use of clean
          energy from solar mini-grids, through an innovative mix of
          productive asset financing, training and technology based asset
          management thereby expanding rural economies in Nigeria. We are
          also a leading provider of end-to-end solutions for the
          procurement, operation and maintenance of productive use agro
          processing equipment.
        </p>
        <p className="text-text-secondary leading-relaxed mb-8">
          Our expertise spans a diverse range of agricultural industries, and
          we are committed to delivering innovative and sustainable
          solutions tailored to the unique needs of our clients through an
          innovative Hub &amp; Spoke business model with a centralized tech
          &ldquo;hub&rdquo; for remote asset control and monitoring and
          localized &ldquo;Spoke&rdquo; of teams for operations and
          maintenance of productive assets.
        </p>
        <a
          href="/uploads/2024/10/Agronomie-Profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          Download our Brochure
        </a>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6 text-center">
            Our Experience
          </h2>
          <p className="text-text-secondary leading-relaxed text-center mb-3">
            Agronomie has a team of experienced professionals who have core
            hands-on expertise in infrastructure finance, agro asset project
            management from procurement through site selection and
            implementation.
          </p>
          <p className="text-text-secondary leading-relaxed text-center">
            With over $3 billion of financing for infrastructure projects
            including energy, agro, rail, roads, ports, and airports,
            we&rsquo;ve implemented multiple innovative financing structures
            including financial advisory, project financing, and structured
            finance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {FOCUS_AREAS.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-brand mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
            Our Goals
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {GOALS.map((g) => (
              <div
                key={g}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-text">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4">
            Our Mandate
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Our mandate includes the origination and management of
            Productive Use of Energy infrastructure, deal structuring, and
            portfolio management.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm order-2 md:order-1">
          <Image
            src="/uploads/2022/10/Picture3-768x745.png"
            alt="Investment approach"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Investment Approach
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Our investment approach holds great potential to deliver the
            three pillars of the SDGs: economic, environmental, and social
            sustainability. We do this sustainably in partnership with our
            development partners, thought leaders in blended finance,
            infrastructure, technology, and development finance to drive
            innovation beyond conventional asset management.
          </p>
          <Link
            href="/approach"
            className="inline-block rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white hover:bg-brand transition-colors"
          >
            Our Approach
          </Link>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
            Meet our Management Team
          </h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {TEAM_PREVIEW.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 sm:h-48 w-full bg-surface">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-text">{m.name}</h3>
                  <p className="text-xs text-brand font-medium">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/team"
              className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-text-secondary text-center mb-10">
          Our Partners
        </h2>
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:grid-cols-5">
          {PARTNER_PATHS.map((p, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-square">
                <Image src={p} alt="Partner logo" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <GrowCta />
    </>
  );
}
