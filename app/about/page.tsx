import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import TeamSection from "@/components/about/TeamSection";
import WorkingProcess from "@/components/about/WorkingProcess";
import OurPromise from "@/components/about/OurPromise";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Treeland Travel & Tours — a trusted Hajj and Umrah travel agency from Pakistan with 10+ years of experience serving pilgrims.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <WhyChooseUs />
      <WhatWeOffer />
      <TeamSection />
      <WorkingProcess />
      <OurPromise />
      <ContactCta />
    </>
  );
}
