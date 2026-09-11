import Image from "next/image";

export type MarqueeLogo = {
  name: string;
  src: string;
  /** Give the logo a white backing chip (useful on dark sections or for logos with tight padding). */
  chip?: boolean;
};

export default function LogoMarquee({ logos }: { logos: MarqueeLogo[] }) {
  const track = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-10 sm:gap-16">
        {track.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className={
              logo.chip
                ? "flex h-16 w-40 sm:h-20 sm:w-48 shrink-0 items-center justify-center rounded-xl border border-border bg-white px-5 py-3 shadow-sm"
                : "flex h-16 w-40 sm:h-20 sm:w-48 shrink-0 items-center justify-center px-2"
            }
            aria-label={logo.name}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={160}
              height={64}
              className="h-full w-auto max-w-full object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
