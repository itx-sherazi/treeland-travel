import { Landmark, Moon, FileCheck, Plane, Hotel, Bus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const offers = [
  { icon: Landmark, label: "Hajj" },
  { icon: Moon, label: "Umrah" },
  { icon: FileCheck, label: "Visa" },
  { icon: Plane, label: "Flights" },
  { icon: Hotel, label: "Hotels" },
  { icon: Bus, label: "Transport" },
];

export default function WhatWeOffer() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="What We Offer" title="Complete Travel Solutions" />
        <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-12 lg:grid-cols-6">
          {offers.map((offer) => (
            <div
              key={offer.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <offer.icon size={22} />
              </span>
              <span className="text-sm font-semibold text-[#1f2937]">
                {offer.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
