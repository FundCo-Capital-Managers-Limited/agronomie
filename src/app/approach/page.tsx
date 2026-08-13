import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GrowCta from "@/components/GrowCta";

export const metadata: Metadata = { title: "Our Approach | Agronomie" };

export default function Approach() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="Our Strategic Approach to PuE Implementation"
        image="/uploads/2022/10/coom.jpg"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 grid gap-10 md:grid-cols-2 items-start">
        <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/uploads/2022/10/grinder.jpg"
            alt="Milling equipment"
            fill
            className="object-contain bg-white p-8"
          />
        </div>
        <div>
          <p className="text-text-secondary leading-relaxed mb-4">
            The PUE assets will be acquired and operated by AgroNomie
            Funding Limited, to provide PUE as a service (PaaS) to rural
            communities. These assets would be powered by the mini-grid
            operators under a long-term power purchase contract and would
            have an IoT facility installed for remote monitoring and
            evaluation.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            We have 5 sites under development out of which 2 sites are under
            the implementation of multigrain milling machines. This will be
            expanded to over 200 mini-grid sites at scale in partnership
            with the mini-grid operators.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Priority is given to agro-processing (rice and maize milling) as
            the primary interest with the highest demand for PUE.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Agronomie Funding Limited takes the lead as an asset financing
            vehicle, executes MOU/lease agreements with agro-processors, and
            implements an operation &amp; maintenance strategy for the
            smooth operation over the life of the asset.
          </p>
          <p className="text-text-secondary leading-relaxed">
            We are implementing an offtake MoU with the mini-grid on site
            for energy provision to the agro-milling equipment. The pilot is
            expected to be developed into an operating portfolio across 200
            mini-grids in the initial phase.
          </p>
        </div>
      </section>

      <GrowCta />
    </>
  );
}
