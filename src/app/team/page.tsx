import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";
import { STAFF } from "@/lib/staff";

export const metadata: Metadata = { title: "Our Team | Agronomie" };

export default function Team() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="Meet Our Team"
        subtitle="A multidisciplinary team of engineers, finance professionals, and agribusiness experts driving Agronomie's mission forward."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STAFF.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 w-full bg-surface overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-text">{member.name}</h3>
                <p className="text-sm text-brand font-medium">{member.role}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-navy">
                  Read Bio &rarr;
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
