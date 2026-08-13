import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} | Agronomie` : "Project | Agronomie" };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        breadcrumb="Our Work"
        title={project.title}
        subtitle={project.location}
        image={project.featuredImage}
      />

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl font-bold text-navy mb-6">
          Project Overview
        </h2>
        {project.paragraphs.map((p, i) => (
          <p key={i} className="text-text-secondary leading-relaxed mb-4">
            {p}
          </p>
        ))}

        {project.gallery.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-navy mb-4">Gallery</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {project.gallery.map((g, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden border border-border"
                >
                  <Image
                    src={g}
                    alt={`${project.title} photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <GrowCta />
    </>
  );
}
