"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle, Users, FileCheck, Hotel, Plane } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const infoItems = [
  { icon: Users, label: "1000+ Happy Pilgrims" },
  { icon: FileCheck, label: "Visa Assistance" },
  { icon: Hotel, label: "Hotel Booking" },
  { icon: Plane, label: "Flight Booking" },
];

const heroSlides = [
  { src: "/hero-makkah.png", alt: "Kaaba in Masjid al-Haram, Makkah" },
  { src: "/hero-sydney.png", alt: "Sydney Harbour skyline" },
  { src: "/hero-tropical.png", alt: "Tropical island holiday destination" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0a4d36]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d36]/70 via-transparent to-transparent" />
      </div>

      <Container className="relative grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-gold ring-1 ring-white/20 sm:text-sm">
            Trusted Travel Partner
          </span>
          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Perform Your Hajj &amp; Umrah with Peace of Mind
          </h1>
          <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base sm:leading-7 md:text-lg">
            Professional Hajj and Umrah travel services from Pakistan —
            packages, visas, flights and hotels, handled end-to-end.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/contact">Book Now</Button>
            <Button
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<MessageCircle size={18} />}
            >
              WhatsApp Us
            </Button>
          </div>

          <div className="mt-7 flex justify-center gap-2 lg:justify-start">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeSlide ? "w-6 bg-brand-gold" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-start gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <item.icon size={20} />
              </span>
              <span className="text-sm font-semibold text-[#1f2937] sm:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
