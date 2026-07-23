import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AccredianEdge() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          title={
            <>
              The <span className="text-blue-600">Accredian Edge</span>
            </>
          }
          subtitle={
            <>
              Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
            </>
          }
        />
        
        <div className="mt-12 sm:mt-16 w-full max-w-[1200px] mx-auto flex justify-center">
          <Image
            src="/images/AccredianEdge.png"
            alt="The Accredian Edge - Key Aspects of Our Strategic Training"
            width={1200}
            height={500}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
