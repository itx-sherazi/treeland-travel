import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  { name: "Imran Sheikh", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Sana Malik", role: "Head of Operations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Usman Tariq", role: "Visa & Documentation Lead", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80" },
  { name: "Hina Farooq", role: "Customer Relations Manager", image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80" },
];

export default function TeamSection() {
  return (
    <section className="bg-brand-gray py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The People Behind Your Journey"
          description="A dedicated team committed to making your Hajj & Umrah experience seamless."
        />
        <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 font-heading text-sm font-bold text-[#1f2937] sm:text-base">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 sm:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
