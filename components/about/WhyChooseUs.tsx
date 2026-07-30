import { Award, Users, Headset, Wallet, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { icon: Award, title: "Experience", desc: "10+ years of dedicated Hajj & Umrah travel expertise." },
  { icon: Users, title: "Professional Team", desc: "Trained consultants who understand every step of the journey." },
  { icon: Headset, title: "Customer Support", desc: "Round-the-clock support before, during, and after travel." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No hidden charges — what you see is what you pay." },
  { icon: ShieldCheck, title: "Reliable Service", desc: "Licensed operations you can trust with your spiritual journey." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-gray py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Why Choose Us" title="What Sets Treeland Apart" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <item.icon size={22} />
              </span>
              <h3 className="mt-3 font-heading text-sm font-bold text-[#1f2937]">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
