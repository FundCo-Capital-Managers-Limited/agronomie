import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";
import { STAFF, getStaffMember } from "@/lib/staff";

export function generateStaticParams() {
  return STAFF.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getStaffMember(slug);
  return { title: member ? `${member.name} | Agronomie` : "Team | Agronomie" };
}

export default async function StaffDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getStaffMember(slug);
  if (!member) notFound();

  return (
    <>
      <PageHero breadcrumb="Team" title={member.name} subtitle={member.role} />

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
            <Image src={member.image} alt={member.name} fill className="object-cover" />
          </div>
        </div>
        <div className="sm:col-span-2">
          {member.bio.map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      <GrowCta />
    </>
  );
}
