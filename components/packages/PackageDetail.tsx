"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Hotel,
  Plane,
  Bus,
  FileText,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";
import type { Package } from "@/lib/packages-data";
import { faqs } from "@/lib/faq-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PackageCard from "@/components/packages/PackageCard";
import PackageInquiryForm from "@/components/packages/PackageInquiryForm";
import { siteConfig } from "@/lib/site-config";

const termsAndConditions = [
  "Prices are subject to change based on Saudi Riyal exchange rates and airline fares.",
  "A partial advance payment is required to confirm booking.",
  "Visa processing timelines depend on Saudi authority approval and may vary.",
  "Cancellations and refunds are governed by our Refund & Cancellation Policy.",
  "Package inclusions are subject to availability at the time of booking.",
];

export default function PackageDetail({
  pkg,
  related,
}: {
  pkg: Package;
  related: Package[];
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const packageFaqCategory = pkg.type === "umrah" ? "Umrah" : "Hajj";
  const specificFaqs = faqs.filter((f) => f.category === packageFaqCategory).slice(0, 5);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.name,
    description: `${pkg.name} — ${pkg.duration}, ${pkg.hotelRating}-star hotels, ${pkg.transport}.`,
    image: pkg.image,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "PKR",
      price: pkg.priceValue,
      availability: "https://schema.org/InStock",
      url: `https://www.treelandtravel.com/${pkg.type === "umrah" ? "umrah-packages" : "hajj-packages"}/${pkg.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
        <Image src={pkg.image} alt={pkg.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-8">
          <nav className="mb-2 text-xs text-white/80">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <Link href={pkg.type === "umrah" ? "/umrah-packages" : "/hajj-packages"} className="hover:underline">
              {pkg.type === "umrah" ? "Umrah Packages" : "Hajj Packages"}
            </Link>
            {" / "}
            <span>{pkg.name}</span>
          </nav>
          <h1 className="font-heading text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            {pkg.name}
          </h1>
        </Container>
      </section>

      <Container className="grid grid-cols-1 gap-10 py-10 sm:py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Overview */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-xl font-bold text-[#1f2937]">Overview</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="Duration" value={pkg.duration} />
              <Stat label="Hotel Rating" value={`${pkg.hotelRating}-Star`} />
              <Stat label="Transport" value={pkg.transport} />
              <Stat label="Availability" value={pkg.month} />
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="font-heading text-3xl font-extrabold text-brand-green">
                {pkg.price}
              </p>
            </div>
          </div>

          {/* Included / Not Included */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-[#1f2937]">Included</h3>
              <ul className="mt-3 space-y-2">
                {pkg.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-[#1f2937]">Not Included</h3>
              <ul className="mt-3 space-y-2">
                {pkg.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hotel Details */}
          <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-[#1f2937]">
              <Hotel size={18} className="text-brand-green" /> Hotel Details
            </h3>
            <div className="mt-3 space-y-3">
              {pkg.hotels.map((hotel) => (
                <div key={hotel.city} className="flex items-center justify-between rounded-lg bg-brand-gray px-4 py-3 text-sm">
                  <span className="font-semibold text-[#1f2937]">{hotel.city}: {hotel.name}</span>
                  <span className="text-gray-500">{hotel.distance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flight & Transport */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-heading text-base font-bold text-[#1f2937]">
                <Plane size={18} className="text-brand-green" /> Flight Information
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{pkg.flights}</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-heading text-base font-bold text-[#1f2937]">
                <Bus size={18} className="text-brand-green" /> Ground Transport
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{pkg.transport}</p>
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-heading text-base font-bold text-[#1f2937]">
              <FileText size={18} className="text-brand-green" /> Requirements
            </h3>
            <ul className="mt-3 space-y-2">
              {pkg.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-base font-bold text-[#1f2937]">Terms &amp; Conditions</h3>
            <ul className="mt-3 space-y-2">
              {termsAndConditions.map((term) => (
                <li key={term} className="text-sm leading-6 text-gray-600">• {term}</li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          {specificFaqs.length > 0 && (
            <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-[#1f2937]">
                Frequently Asked Questions
              </h3>
              <div className="mt-3 space-y-2">
                {specificFaqs.map((faq, i) => (
                  <div key={faq.question} className="overflow-hidden rounded-xl border border-gray-100">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-[#1f2937]"
                    >
                      {faq.question}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="px-4 pb-3 text-sm leading-6 text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24">
            <PackageInquiryForm packageName={pkg.name} />
            <Button
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<MessageCircle size={18} />}
              className="mt-4 w-full"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <section className="bg-brand-gray py-14 sm:py-20">
          <Container>
            <h2 className="font-heading text-xl font-bold text-[#1f2937] sm:text-2xl">
              Related Packages
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-[#1f2937]">{value}</p>
    </div>
  );
}
