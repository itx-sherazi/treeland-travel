import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  { name: "Salman Agha", role: "Director Accounts", image: "/salman-agha.jpeg" },
  { name: "Amna Qadeer", role: "Manager Sales", image: "/amn-qadeer.jpeg" },
  { name: "Kanwal Aftab", role: "Int'l Sales", image: "/kannal-aftab.jpeg" },
  { name: "Areeba Mansoor", role: "Manager Jeddah", image: "/areeba-mansoor.jpeg" },
  { name: "Faaz Nadeem", role: "Office Boy", image: "/faaz.png" },
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
        <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-3 lg:grid-cols-5">
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
