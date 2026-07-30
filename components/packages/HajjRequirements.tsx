import { FileCheck2, CalendarClock, AlertTriangle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const requirements = [
  "Valid passport with 6+ months validity",
  "Recent passport-size photographs",
  "CNIC copy",
  "Medical fitness certificate",
  "Vaccination certificate (Meningitis, as required by Saudi authorities)",
  "Hajj application / quota confirmation (for Government scheme)",
];

export default function HajjRequirements() {
  return (
    <section className="bg-brand-gray py-14 sm:py-20">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Requirements"
            title="Documents You'll Need"
          />
          <ul className="mt-6 space-y-3">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3 text-sm text-gray-600">
                <FileCheck2 size={18} className="mt-0.5 shrink-0 text-brand-green" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-brand-gold/30 bg-white p-6 shadow-sm sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
            <CalendarClock size={22} />
          </span>
          <h3 className="mt-4 font-heading text-lg font-bold text-[#1f2937]">
            Important Dates
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Hajj 1447H is expected around late May 2026 (dates subject to
            moon sighting). Government quota registration typically opens
            several months in advance — early registration is strongly
            recommended as seats are limited.
          </p>
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">
            <AlertTriangle size={16} className="mt-0.5 shrink-0" />
            Contact our team now to reserve your Hajj slot before the quota
            closes.
          </div>
        </div>
      </Container>
    </section>
  );
}
