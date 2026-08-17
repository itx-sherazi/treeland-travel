import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContactCta from "@/components/home/ContactCta";
import { holidayDestinations } from "@/lib/holidays-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Holidays",
  description:
    "Holiday and tour packages from Treeland Travel & Tours — northern Pakistan, Dubai, Turkey, Thailand and more.",
  alternates: { canonical: "/holidays" },
};

export default function HolidaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Holidays"
        title="Explore Pakistan and Beyond"
        description="Curated holiday and tour packages for families, friends and solo travelers."
        image="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&q=80"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Destinations"
            title="Popular Holiday Packages"
            description="From northern Pakistan's valleys to international getaways, we'll help you plan the trip."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {holidayDestinations.map((dest) => (
              <div
                key={dest.slug}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 w-full sm:h-52">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-[#1f2937]">{dest.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-gray-600">{dest.tagline}</p>
                  <span className="mt-3 flex items-center gap-1.5 text-xs font-medium text-brand-green">
                    <Clock size={14} /> {dest.duration}
                  </span>
                  <Button href="/contact" className="mt-4 w-full !py-2.5 text-sm">
                    Inquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={<MessageCircle size={18} />}
            >
              Ask About Holiday Packages
            </Button>
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
