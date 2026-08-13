import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/agronomie-logo.png"
            alt="Agronomie"
            width={130}
            height={78}
            className="bg-white rounded-lg px-3 py-2 h-14 w-auto"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Agronomie is a specialised agro-tech company aggregating and
            accelerating access to finance for agro-productive use of clean
            energy from solar mini-grids.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/approach" className="hover:text-white transition-colors">
                Our Approach
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/our-activities" className="hover:text-white transition-colors">
                Our Activities
              </Link>
            </li>
            <li>
              <Link href="/our-work" className="hover:text-white transition-colors">
                Our Work
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Contact Details
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>6th Floor Landmark Towers,</li>
            <li>5B Water Corporation Way Oniru,</li>
            <li>Victoria Island, Lagos</li>
            <li className="pt-1">
              <a href="tel:+23401-4545361" className="hover:text-white transition-colors">
                +234 01-4545361
              </a>
            </li>
            <li>
              <a href="mailto:info@agronomie.ng" className="hover:text-white transition-colors">
                info@agronomie.ng
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-white/70">
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()}, All Rights Reserved, Agronomie
      </div>
    </footer>
  );
}
