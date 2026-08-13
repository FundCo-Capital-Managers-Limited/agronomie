import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact Us | Agronomie" };

export default function Contact() {
  return (
    <>
      <PageHero
        title="Where to find us"
        image="/uploads/2022/10/contact.jpg"
      />

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-brand mb-2">
            Head office address:
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Plot 1610, Adeola Hopewell Street,
            <br />
            Victoria Island, Lagos.
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Phone:</h2>
          <p className="text-text-secondary mb-6">
            <a href="tel:+23401-4545361" className="hover:text-brand">
              +234 01-4545361
            </a>
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Email:</h2>
          <p className="text-text-secondary">
            <a href="mailto:info@agronomie.ng" className="hover:text-brand">
              info@agronomie.ng
            </a>
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
