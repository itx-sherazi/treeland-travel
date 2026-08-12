import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CompanyIntro() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMa3bi1q6q082sMAI7oXi18fsJctXjtih371LB8D0FYp0v5M0Mgve1uUa&s=10"
            alt="Treeland Travel & Tours office"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green sm:text-sm">
            Our Story
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold text-[#1f2937] sm:text-3xl">
            A Decade of Guiding Pilgrims with Care
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Treeland Travel &amp; Tours was founded with a single purpose —
            to make Hajj and Umrah journeys smooth, affordable and
            spiritually fulfilling for families across Pakistan. Over the
            years, we have grown into a trusted name by focusing on
            transparency, quality hotels and genuine after-sales support.
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <Target size={20} />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-[#1f2937]">Mission</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  To provide safe, affordable and hassle-free Hajj &amp; Umrah
                  travel experiences for every pilgrim.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <Eye size={20} />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-[#1f2937]">Vision</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  To become Pakistan&apos;s most trusted Hajj &amp; Umrah
                  travel partner, known for reliability and care.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <HeartHandshake size={20} />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-[#1f2937]">Core Values</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Honesty, transparency, respect for the sanctity of the
                  journey, and genuine care for every pilgrim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
