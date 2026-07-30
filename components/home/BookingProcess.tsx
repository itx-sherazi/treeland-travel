import { PackageSearch, PhoneCall, FileCheck2, PlaneTakeoff } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { icon: PackageSearch, title: "Choose Package", desc: "Browse Hajj or Umrah packages that fit your needs." },
  { icon: PhoneCall, title: "Contact Our Team", desc: "Speak with our travel consultants via call or WhatsApp." },
  { icon: FileCheck2, title: "Submit Documents", desc: "Provide your documents for visa and booking processing." },
  { icon: PlaneTakeoff, title: "Travel with Confidence", desc: "Enjoy a smooth, guided journey from start to finish." },
];

export default function BookingProcess() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Simple Booking Process"
          description="Four easy steps to begin your spiritual journey with Treeland."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-white shadow-md">
                <step.icon size={26} />
              </div>
              <span className="mt-3 text-xs font-semibold text-brand-gold">
                STEP {i + 1}
              </span>
              <h3 className="mt-1 font-heading text-base font-bold text-[#1f2937]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-gray-600">
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="mt-4 hidden h-px w-full bg-gradient-to-r from-brand-green/40 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
