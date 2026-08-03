import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ContactCta from "@/components/home/ContactCta";
import { testimonials } from "@/lib/testimonials-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from Treeland Travel & Tours pilgrims — Hajj, Umrah, hotels, transportation and the holy places of Makkah and Madinah.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments Captured on the Journey"
        description="Explore photos from our pilgrims' Hajj and Umrah journeys."
        image="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1920&q=80"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>

      <section className="bg-brand-gray py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-heading text-2xl font-bold text-[#1f2937] sm:text-3xl">
            Customer Memories
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-gray-600 sm:text-base">
            Shared with love by families who traveled with us.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div className="mt-3 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">&ldquo;{t.review}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold text-[#1f2937]">
                  {t.name} <span className="font-normal text-gray-500">— {t.city}</span>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
