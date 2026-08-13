import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";

export const metadata: Metadata = { title: "Our Activities | Agronomie" };

const TIMELINE = [
  {
    heading: "Accelerated Site Assessment",
    text: "Standardized agro-assessment process allows rapid deployment of agro-equipment to rural communities.",
  },
  {
    heading: "Portfolio Aggregation",
    text: "Aggregating individual projects into portfolios to mitigate project risk and attract external sources of capital.",
  },
  {
    heading: "Technology Synergy",
    text: "Hub & Spoke business model with a centralized tech hub for remote asset control and monitoring, and a localized 'spoke' of teams for O&M.",
  },
  {
    heading: "Direct Partnership with Developers",
    text: "Working with developers on assessment and solar power to operate the equipment enables cost reductions for agro-processors and improved ARPU for developers.",
  },
];

const STEPS = [
  "Investment into AgroNomie SPV",
  "SPV enters strategic partnership with OEMs & O&M",
  "Agro assets availed by SPV under AaS lease to off-takers via long-term asset lease contracts",
  "Execute power purchase agreement with mini-grid operators",
  "Secure credit enhancement for asset portfolio through guarantees to raise debt financing to grow asset portfolio",
];

export default function OurActivities() {
  return (
    <>
      <PageHero
        title="Our Activities"
        image="/uploads/2022/10/back-3.jpg"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((t, i) => (
            <div
              key={t.heading}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-navy mb-2">{t.heading}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/uploads/2022/10/Picture7-768x397.png"
              alt="AssetCo model"
              fill
              className="object-contain bg-white p-6"
            />
          </div>
          <div>
            <p className="text-text-secondary leading-relaxed mb-6">
              AgroNomie has leveraged the vast experience of its sponsors in
              Energy and Infrastructure finance in developing the Asset
              Management Company (AssetCo) business model to ease access to
              and integration of IoT technology to enable remote access and
              control to the agro-productive use assets in rural
              communities.
            </p>
            <ul className="space-y-3">
              {STEPS.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GrowCta />
    </>
  );
}
