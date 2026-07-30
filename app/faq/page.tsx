import type { Metadata } from "next";
import { MessageCircle, PhoneCall } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FaqExplorer from "@/components/faq/FaqExplorer";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Hajj and Umrah packages, visas, payments, flights and hotels at Treeland Travel & Tours.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Find quick answers about our Hajj & Umrah services."
        image="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1920&q=80"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <FaqExplorer />
        </Container>
      </section>

      <section className="bg-brand-gray py-14 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-[#1f2937] sm:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
            Our team is happy to help with anything not covered here.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageCircle size={18} />}
            >
              WhatsApp Us
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline" icon={<PhoneCall size={18} />}>
              Call Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
