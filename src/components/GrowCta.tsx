import Link from "next/link";
import Image from "next/image";

export default function GrowCta() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <Image
        src="/uploads/2022/10/gackgrnd.jpg"
        alt=""
        fill
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-surface/80" />
      <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-brand mb-8">
          Grow Your Agro Business
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-dark px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-brand hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          Talk to Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
