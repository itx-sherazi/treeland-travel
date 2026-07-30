"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { faqs } from "@/lib/faq-data";

export default function FaqPreview() {
  const [open, setOpen] = useState<number | null>(0);
  const preview = faqs.slice(0, 5);

  return (
    <section className="bg-brand-gray py-14 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Quick answers to the most common questions about our services."
        />
        <div className="mt-10 space-y-3 sm:mt-12">
          {preview.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[#1f2937] sm:text-base">
                  {faq.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <p className="px-5 pb-4 text-sm leading-6 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/faq" variant="outline">
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
