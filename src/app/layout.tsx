import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://agronomie.ng";
const SITE_TITLE = "Agronomie | Agro-Tech Financing for Clean Energy in Nigeria";
const SITE_DESCRIPTION =
  "Agronomie is a specialised agro-tech company aggregating and accelerating access to finance for agro-productive use of clean energy from solar mini-grids in Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Agronomie",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "agro-productive use of energy",
    "solar mini-grid financing Nigeria",
    "agro-tech financing",
    "rural electrification Nigeria",
    "productive use of energy PUE",
    "clean energy asset financing",
    "mini-grid offtake",
    "agro equipment financing",
    "rural economy Nigeria",
    "asset management company",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Agronomie",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agronomie",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agronomie",
              url: SITE_URL,
              logo: `${SITE_URL}/images/agronomie-logo.png`,
              description: SITE_DESCRIPTION,
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
