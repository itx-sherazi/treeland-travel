import {
  Award,
  Wallet,
  ShieldCheck,
  Hotel,
  Plane,
  Headset,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { icon: Award, title: "Experienced Team", desc: "Years of hands-on Hajj & Umrah travel expertise." },
  { icon: Wallet, title: "Affordable Packages", desc: "Transparent pricing with options for every budget." },
  { icon: ShieldCheck, title: "Trusted Services", desc: "Licensed, verified and trusted by thousands of pilgrims." },
  { icon: Hotel, title: "Luxury Hotels", desc: "Handpicked hotels close to the Haramain." },
  { icon: Plane, title: "Flight Assistance", desc: "Direct flights coordinated with major airlines." },
  { icon: Headset, title: "24/7 Support", desc: "Our team is available around the clock during your journey." },
];

export default function WhyChoose() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Treeland"
          title="A Travel Partner You Can Trust"
          description="From planning to Ziyarat, we take care of every detail of your spiritual journey."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <item.icon size={22} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#1f2937]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
