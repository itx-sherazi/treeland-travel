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


      <ContactCta />
    </>
  );
}
