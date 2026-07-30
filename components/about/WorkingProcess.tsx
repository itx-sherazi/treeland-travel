import {
  MessageSquare,
  PackageSearch,
  FileCheck2,
  CalendarCheck,
  PlaneTakeoff,
  Headset,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { icon: MessageSquare, title: "Consultation" },
  { icon: PackageSearch, title: "Package Selection" },
  { icon: FileCheck2, title: "Visa Processing" },
  { icon: CalendarCheck, title: "Booking" },
  { icon: PlaneTakeoff, title: "Travel" },
  { icon: Headset, title: "Support" },
];

export default function WorkingProcess() {
  return (
    <section className="bg-brand-gray py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Our Process" title="Our Working Process" />
        <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-md">
                <step.icon size={22} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-[#1f2937]">
                  {i + 1}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-[#1f2937]">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
