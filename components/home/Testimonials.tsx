"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/testimonials-data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Pilgrims Say"
          description="Real experiences from families who traveled with Treeland."
        />

        <div className="relative mx-auto mt-10 max-w-2xl sm:mt-12">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm sm:p-10">
            <Quote className="mx-auto text-brand-gold" size={28} />
            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              &ldquo;{t.review}&rdquo;
            </p>
            <div className="mt-5 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#1f2937]">{t.name}</p>
                <p className="text-xs text-gray-500">{t.city}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md ring-1 ring-gray-200 sm:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md ring-1 ring-gray-200 sm:flex"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-5 flex justify-center gap-2 sm:hidden">
            <button type="button" aria-label="Previous testimonial" onClick={prev} className="rounded-full bg-white p-2 shadow-sm ring-1 ring-gray-200">
              <ChevronLeft size={16} />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={next} className="rounded-full bg-white p-2 shadow-sm ring-1 ring-gray-200">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-brand-green" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
