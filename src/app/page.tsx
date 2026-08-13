import Image from "next/image";
import Link from "next/link";
import GrowCta from "@/components/GrowCta";

const GOALS = [
  { icon: "/uploads/2022/11/tractor-3.png", text: "Enable ease of access to sustainable agro processing equipment in rural communities." },
  { icon: "/uploads/2022/11/banknotes-2.png", text: "Enable access to finance through innovative financing solutions for agro equipment in rural communities." },
  { icon: "/uploads/2022/11/drop-of-liquid.png", text: "Reduce the use of diesel/petrol and cut emissions thus contributing to an improved climate." },
  { icon: "/uploads/2022/11/energy-1.png", text: "Provide the available mini-grids with alternative and commercial anchor offtake of power." },
  { icon: "/uploads/2022/11/multiple-users-silhouette-2.png", text: "Provide employment opportunities for the rural community, thus reducing unemployment." },
  { icon: "/uploads/2022/11/shuttle-2.png", text: "Boosting the rural economy in Nigeria contributing to national growth and development." },
];

const SECTORS = [
  { label: "Cold Chain", icon: "/uploads/2022/10/Icon-Cold-Chain-01.png" },
  { label: "Agro Processing", icon: "/uploads/2022/10/windmill.png" },
  { label: "Drying", icon: "/uploads/2022/10/dry.png" },
  { label: "Logistics", icon: "/uploads/2022/10/logistics.png" },
  { label: "Agro Inputs", icon: "/uploads/2022/10/tractor.png" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
        <Image
          src="/uploads/2022/10/tam-mai-fSdjQO8rwwQ-unsplash.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/60 to-navy-dark/75" />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-4">
            Financing Agro-Tech
          </p>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Aggregating and Accelerating access to finance for agro-productive
            use of clean energy.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
            Providing clean energy for agriculture through an innovative mix
            of asset financing, training and tech enabled asset management.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/about"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:bg-brand-dark hover:-translate-y-0.5 transition-all"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/uploads/2022/10/Solar-Mini-Grid.png"
            alt="Solar mini-grid"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Welcome to Agronomie
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Agronomie is a specialised agro-tech company aggregating and
            accelerating access to finance for agro-productive use of clean
            energy from solar mini-grids, through an innovative mix of
            productive asset financing, training, and tech-enabled asset
            management thereby expanding rural economies in Nigeria.
          </p>
          <ul className="space-y-3 mb-8">
            {["Asset Financing", "Requisite Trainings", "IoT Based Asset Management"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-text">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-block rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white hover:bg-brand transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Our Main Goals
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary mb-12">
            Agronomie is a wholly owned asset management company established
            to act as a catalyst for sustainable growth of the rural economy
            through optimization of rural mini grids with productive
            equipment financing.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
            {GOALS.map((g) => (
              <div
                key={g.text}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Image src={g.icon} alt="" width={26} height={26} />
                </div>
                <span className="text-xs text-text-secondary leading-snug">
                  {g.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl shadow-sm sm:grid-cols-3">
          <div className="bg-[#69d2e7] p-8 text-white">
            <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
              <Image src="/uploads/2022/10/1_h2WLm6i-ha7wz4CyRBdnjw.jpeg" alt="" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-3">The Problem</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Newly electrified communities in Nigeria do not have access to
              income generating or livelihood improving electrical appliances
              that would make them economically viable to energy providers.
              This means communities rarely exploit productive energy, and
              consequently, energy access initiatives are seldom bankable.
            </p>
          </div>
          <div className="bg-[#009cde] p-8 text-white">
            <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
              <Image src="/uploads/2022/10/solve-2636254_1920.jpg" alt="" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-3">The Agronomie Solution</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Partnering with mini-grid operators and agro co-operative
              societies, Agronomie&rsquo;s platform uses existing data to
              identify agro entrepreneurs that require business asset
              financing and selects eligible ones through data-driven credit
              profiling.
            </p>
          </div>
          <div className="bg-[#567798] p-8 text-white">
            <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
              <Image src="/uploads/2022/10/mission.jpg" alt="" fill className="object-cover" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-3">Mission &amp; Vision</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Our mission is to innovatively unlock domestic finance for
              small and medium-sized infrastructure in unserved or
              under-served sectors, that are recession resilient and reduce
              the impact of climate change.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4">
            Our Target Sectors
          </h2>
          <p className="mx-auto max-w-2xl text-white/80 mb-12">
            Our investments will directly address key sustainability
            challenges and provide innovative solutions that seek a positive
            impact while also achieving strong risk-adjusted financial
            returns in the following agro market segments:
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-5">
            {SECTORS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-6 hover:bg-brand transition-colors duration-300"
              >
                <Image src={s.icon} alt={s.label} width={40} height={40} />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GrowCta />
    </>
  );
}
