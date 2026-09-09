import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The facilities and institutions behind Agronomie's clean-energy asset financing — DREEF, the Clean Energy Fund, and InfraCredit.",
};

type Partner = {
  name: string;
  logo: string | null;
  chip?: boolean;
  role: string;
  text: string;
};

const PARTNERS: Partner[] = [
  {
    name: "DREEF",
    logo: "/images/partners/dreef-color.svg",
    role: "Project Preparation Facility",
    text: "The Distributed Renewable Energy Enhancement Facility Incorporated (DREEF) is a project-preparation facility established by InfraCredit with the World Bank Group, backed also by the Clean Energy Fund (CEF), KfW, and Convergence, with Deloitte serving as Technical Assistance Facility Manager. DREEF helps de-risk and prepare distributed renewable energy projects like Agronomie's for bankable financing.",
  },
  {
    name: "Clean Energy Local Currency Fund (CEF)",
    logo: "/images/partners/clean-energy-fund.png",
    chip: true,
    role: "Local Currency Financing Partner",
    text: "The Clean Energy Local Currency Fund is FundCo Capital Managers' regulated climate-infrastructure fund, Climate Bonds Certified and rated BBB by GCR/Agusto. CEF provides local-currency, concessional-tenor capital that helps blend down the cost of financing for productive-use clean energy assets.",
  },
  {
    name: "InfraCredit",
    logo: "/images/partners/infracredit.svg",
    role: "Credit Enhancement & Facility Sponsor",
    text: "InfraCredit is a specialised infrastructure credit guarantee institution that provides local-currency guarantees to catalyse investment in infrastructure. InfraCredit established the DREEF facility with the World Bank Group and supports the broader financing ecosystem that Agronomie draws on to fund productive-use agro equipment.",
  },
];

export default function Partners() {
  return (
    <>
      <PageHero
        breadcrumb="Our Ecosystem"
        title="The Facilities Behind Our Financing"
        subtitle="Agronomie doesn't fund productive-use agro equipment alone — a coalition of climate-finance facilities and credit institutions makes our asset financing bankable and affordable."
      />

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-16 text-center">
        <p className="text-text-secondary leading-relaxed">
          Aggregating and accelerating access to finance for agro-productive
          use of clean energy takes more than a good idea &mdash; it takes
          patient, concessional, and well-structured capital. The partners
          below provide the project-preparation support, credit enhancement,
          and local-currency financing that stand behind Agronomie&rsquo;s
          asset financing, training, and tech-enabled asset management
          model.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20 space-y-6">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                {p.logo && (
                  <div
                    className={
                      p.chip
                        ? "flex h-14 w-28 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-2"
                        : "flex h-14 w-28 shrink-0 items-center justify-center"
                    }
                  >
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={110}
                      height={44}
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </div>
                )}
                <h2 className="text-lg font-bold text-navy">{p.name}</h2>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                {p.role}
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {p.text}
            </p>
          </div>
        ))}
      </section>

      <GrowCta />
    </>
  );
}
