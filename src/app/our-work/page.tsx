import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = { title: "Our Work | Agronomie" };

export default function OurWork() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Our extensive portfolio showcases our track record of delivering quality services across Nigeria's rural communities."
        image="/uploads/2022/10/gackgrnd.jpg"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              href={`/project/${p.slug}`}
              className="group rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 w-full bg-surface overflow-hidden">
                <Image
                  src={p.featuredImage}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand mb-2">
                  {p.location}
                </p>
                <h3 className="text-lg font-semibold text-navy">
                  {p.title}
                </h3>
                <span className="mt-3 inline-block text-sm font-semibold text-brand">
                  View Project &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <GrowCta />
    </>
  );
}
