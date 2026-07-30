import { Landmark, Building2, Crown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const types = [
  {
    icon: Landmark,
    title: "Government Hajj",
    desc: "Subsidized rates through the official government Hajj quota. Best value, longer duration.",
  },
  {
    icon: Building2,
    title: "Private Hajj",
    desc: "Shorter duration with better hotels and more flexibility, arranged privately.",
  },
  {
    icon: Crown,
    title: "VIP Hajj",
    desc: "Premium 5-star hotels, private Mina/Arafat tents and a dedicated personal guide.",
  },
];

export default function HajjTypes() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Hajj Options" title="Choose Your Hajj Category" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3">
          {types.map((type) => (
            <div key={type.title} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <type.icon size={22} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#1f2937]">
                {type.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-gray-600">
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
