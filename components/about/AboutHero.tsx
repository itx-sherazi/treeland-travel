import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a4d36] py-16 sm:py-24">
      <Image
        src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1920&q=80"
        alt="Masjid Nabawi in Madinah"
        fill
        priority
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a4d36]/90 to-[#0a4d36]" />
      <Container className="relative text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-gold ring-1 ring-white/20 sm:text-sm">
          About Us
        </span>
        <h1 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          About Treeland Travel &amp; Tours
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
          Serving pilgrims from Pakistan with trusted, transparent and
          comfortable Hajj &amp; Umrah journeys.
        </p>
      </Container>
    </section>
  );
}
