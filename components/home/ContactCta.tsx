import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function ContactCta() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-[#0a4d36] px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            Ready for Your Spiritual Journey?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            Let our team guide you through every step — from choosing a
            package to landing back home.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary">
              Book Now
            </Button>
            <Button
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-white !text-brand-green hover:!bg-gray-100"
              icon={<MessageCircle size={18} />}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
