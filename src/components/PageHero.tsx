import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/65 via-navy/55 to-navy-dark/70" />
        </>
      )}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28">
        {breadcrumb && (
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
