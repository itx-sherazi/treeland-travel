import Link from "next/link";
import {
  Landmark,
  Moon,
  FileCheck,
  Plane,
  Hotel,
  Bus,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  { icon: Landmark, title: "Hajj Packages", desc: "Government, private and VIP Hajj packages tailored to your needs.", href: "/hajj-packages" },
  { icon: Moon, title: "Umrah Packages", desc: "Flexible Umrah packages available throughout the year.", href: "/umrah-packages" },
  { icon: FileCheck, title: "Visa Assistance", desc: "End-to-end visa processing with a high approval success rate.", href: "/contact" },
  { icon: Plane, title: "Flight Booking", desc: "Best fares on direct flights to Jeddah and Madinah.", href: "/contact" },
  { icon: Hotel, title: "Hotel Reservation", desc: "Hotels close to Haramain, from economy to 5-star luxury.", href: "/contact" },
  { icon: Bus, title: "Ground Transport", desc: "Comfortable AC transport between Makkah, Madinah and Jeddah.", href: "/contact" },
];

export default function Services() {
  return (
    <section className="bg-brand-gray py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need, in One Place"
          description="Complete travel solutions for a comfortable and worry-free pilgrimage."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <service.icon size={22} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#1f2937]">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-gray-600">
                {service.desc}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
