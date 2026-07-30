import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import PackageListing from "@/components/packages/PackageListing";
import HajjTypes from "@/components/packages/HajjTypes";
import HajjRequirements from "@/components/packages/HajjRequirements";
import ContactCta from "@/components/home/ContactCta";
import { hajjPackages } from "@/lib/packages-data";

export const metadata: Metadata = {
  title: "Hajj Packages",
  description:
    "Government, Private and VIP Hajj packages from Pakistan for the upcoming Hajj season — trusted, transparent and fully guided.",
  alternates: { canonical: "/hajj-packages" },
};

export default function HajjPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hajj Packages"
        title="Perform Hajj with Complete Peace of Mind"
        description="Government, Private and VIP Hajj packages for Dhul Hijjah 1447H."
        image="https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1920&q=80"
      />
      <HajjTypes />
      <section className="bg-brand-gray py-14 sm:py-20">
        <Container>
          <PackageListing packages={hajjPackages} />
        </Container>
      </section>
      <HajjRequirements />
      <ContactCta />
    </>
  );
}
