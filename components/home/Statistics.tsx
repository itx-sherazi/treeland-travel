import { Users, Award, MapPinned, Headset } from "lucide-react";
import Container from "@/components/ui/Container";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Pilgrims" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: MapPinned, value: "15+", label: "Cities Served" },
  { icon: Headset, value: "24/7", label: "Support Hours" },
];

export default function Statistics() {
  return (
    <section className="bg-[#0a4d36] py-12 sm:py-16">
      <Container className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center text-white">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-gold">
              <stat.icon size={22} />
            </span>
            <span className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
              {stat.value}
            </span>
            <span className="mt-1 text-xs text-white/70 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
