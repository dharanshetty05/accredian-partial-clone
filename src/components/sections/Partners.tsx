import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnersData } from "@/lib/data/partners";

export function Partners() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          title={
            <>
              Our Proven <span className="text-blue-600">Partnerships</span>
            </>
          }
          subtitle={
            <>
              Successful Collaborations With the <span className="text-blue-600">Industry&apos;s Best</span>
            </>
          }
        />
        
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-10 sm:gap-16 md:gap-20">
          {partnersData.map((partner) => (
            <div key={partner.id} className="relative w-28 h-14 sm:w-32 sm:h-16 md:w-36 md:h-20">
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                fill
                sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
