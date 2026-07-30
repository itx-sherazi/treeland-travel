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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a4d36]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1920&q=80"
          alt="Kaaba in Masjid al-Haram, Makkah"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a4d36]/90 via-[#0a4d36]/85 to-[#0a4d36]" />
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
