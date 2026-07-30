import { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-2xl font-extrabold text-[#1f2937] sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {updated}</p>
        <div className="prose-legal mt-8 space-y-6">{children}</div>
      </Container>
    </section>
  );
}
