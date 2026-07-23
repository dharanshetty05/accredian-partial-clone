import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Headset, ChevronRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-[#2563eb] px-8 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-xl">
          
          {/* Background circles */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-white/[0.04]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-white/[0.04]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.04]"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-blue-100/20">
              <Headset className="h-10 w-10 text-blue-600" strokeWidth={1.5} />
            </div>
            <div className="space-y-2.5">
              <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight text-white leading-tight">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-50 text-base md:text-lg font-medium">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto mt-4 lg:mt-0">
            <Button 
              variant="secondary"
              className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 border-none font-semibold shadow-sm px-8 py-6 text-lg"
              rightIcon={ChevronRight}
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
