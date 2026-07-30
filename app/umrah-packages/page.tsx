import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import PackageListing from "@/components/packages/PackageListing";
import ContactCta from "@/components/home/ContactCta";
import { umrahPackages } from "@/lib/packages-data";

export const metadata: Metadata = {
  title: "Umrah Packages",
  description:
    "Browse affordable and luxury Umrah packages from Pakistan — economy, deluxe and VIP family options with flights, hotels and visa included.",
  alternates: { canonical: "/umrah-packages" },
};

export default function UmrahPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Umrah Packages"
        title="Find Your Perfect Umrah Package"
        description="Flexible packages for every budget — available throughout the year."
        image="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=1920&q=80"
      />
      <section className="py-14 sm:py-20">
        <Container>
          <PackageListing packages={umrahPackages} />
        </Container>
      </section>
      <ContactCta />
    </>
  );
}
