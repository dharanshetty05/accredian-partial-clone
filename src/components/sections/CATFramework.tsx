import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DESIGN_TOKENS } from "@/lib/constants";

export function CATFramework() {
  return (
    <section className={`${DESIGN_TOKENS.spacing.sectionPadding} bg-[#f9fbff]`}>
      <Container>
        <SectionHeading
          title={
            <>
              The <span className="text-blue-600">CAT Framework</span>
            </>
          }
          subtitle={
            <>
              Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
            </>
          }
        />
        
        <div className="relative w-full max-w-5xl mx-auto mt-12 md:mt-16 h-[250px] sm:h-[350px] md:h-[450px]">
          <Image
            src="/images/CAT.png"
            alt="The CAT Framework: Concept, Application, Tools"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1024px, 1024px"
          />
        </div>
      </Container>
    </section>
  );
}
