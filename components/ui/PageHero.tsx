import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0a4d36] py-14 sm:py-20">
      <Image src={image} alt="" fill priority className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a4d36]/90 to-[#0a4d36]" />
      <Container className="relative text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-gold ring-1 ring-white/20 sm:text-sm">
          {eyebrow}
        </span>
        <h1 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
