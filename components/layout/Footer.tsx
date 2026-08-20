import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig, navLinks, footerServiceLinks } from "@/lib/site-config";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-brand-gray">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/new-logo.jpeg"
              alt="Treeland Travel & Tours"
              width={782}
              height={354}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            {siteConfig.shortDescription}
          </p>
         
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-[#1f2937]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 transition-colors hover:text-brand-green"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-[#1f2937]">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 transition-colors hover:text-brand-green"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-[#1f2937]">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-gray-600">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-green" />
              <a href={siteConfig.landlineHref}>Tel: {siteConfig.landline}</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-gray-600">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-green" />
              <a href={siteConfig.phoneHref}>Cell: {siteConfig.phone}</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-gray-600">
              <MessageCircle
                size={16}
                className="mt-0.5 shrink-0 text-brand-green"
              />
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-gray-600">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-green" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-gray-600">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-green" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-colors hover:text-brand-green"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-colors hover:text-brand-green"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={siteConfig.social.youtube}
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-colors hover:text-brand-green"
            >
              <YoutubeIcon size={16} />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-200 py-5">
        <Container>
          <p className="text-center text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Treeland Travel & Tours. All rights
            reserved.{" "}
            <Link href="/privacy-policy" className="hover:text-brand-green">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="hover:text-brand-green">
              Terms
            </Link>{" "}
            ·{" "}
            <Link href="/refund-policy" className="hover:text-brand-green">
              Refund Policy
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
