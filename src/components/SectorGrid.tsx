"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type Sector = { label: string; icon: string };

export default function SectorGrid({ sectors }: { sectors: Sector[] }) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cards = Array.from(grid.children) as HTMLElement[];

    if (prefersReducedMotion) {
      gsap.set(cards, { opacity: 1, scale: 1, filter: "blur(0px)" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(cards, { opacity: 0, scale: 0.9, filter: "blur(8px)" });

      gsap.to(cards, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          once: true,
        },
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-5"
    >
      {sectors.map((s) => (
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
  );
}
