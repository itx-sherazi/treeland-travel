import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Treeland Travel & Tours for Hajj & Umrah package inquiries, visa assistance, and travel bookings. Call, WhatsApp or visit our office.",
  alternates: { canonical: "/contact" },
};

const infoItems = [
  { icon: Phone, label: "Tel", value: siteConfig.landline, href: siteConfig.landlineHref },
  { icon: Phone, label: "Cell", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappHref },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Office Address", value: siteConfig.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch with Us"
        description="We're here to help plan your Hajj & Umrah journey."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <item.icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="mt-0.5 block text-sm font-medium text-[#1f2937] hover:text-brand-green">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-[#1f2937]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <Clock size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Business Hours
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#1f2937]">{siteConfig.hours.weekdays}</p>
                <p className="text-sm font-medium text-[#1f2937]">{siteConfig.hours.sunday}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <AlertCircle size={20} className="mt-0.5 shrink-0 text-amber-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Emergency Contact
                </p>
                <p className="mt-0.5 text-sm text-amber-800">
                  For pilgrims currently traveling, reach us anytime via{" "}
                  <a href={siteConfig.whatsappHref} className="font-semibold underline">WhatsApp</a>{" "}
                  or <a href={siteConfig.phoneHref} className="font-semibold underline">call</a>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm ring-1 ring-gray-100 hover:text-brand-green">
                <FacebookIcon size={18} />
              </a>
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm ring-1 ring-gray-100 hover:text-brand-green">
                <InstagramIcon size={18} />
              </a>
              <a href={siteConfig.social.tiktok} aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm ring-1 ring-gray-100 hover:text-brand-green">
                <TiktokIcon size={18} />
              </a>
              <a href={siteConfig.social.youtube} aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm ring-1 ring-gray-100 hover:text-brand-green">
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <div className="h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <iframe
              title="Treeland Travel & Tours office location"
              src={siteConfig.mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
