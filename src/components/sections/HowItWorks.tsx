import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DESIGN_TOKENS } from "@/lib/constants";
import { howItWorksData } from "@/lib/data/process";

export function HowItWorks() {
  return (
    <section className={`${DESIGN_TOKENS.spacing.sectionPadding} bg-white`}>
      <Container>
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <SectionHeading
            title={
              <>
                How We <span className="text-blue-600">Deliver Results</span> That Matter?
              </>
            }
            subtitle={
              <>
                A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
              </>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {howItWorksData.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative bg-[#f4f8ff] border border-blue-200 rounded-xl p-8 pt-10 flex flex-col items-center text-center shadow-sm"
              >
                {/* Left Connector */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[4px] w-[8px] h-16 bg-blue-600 rounded-full" />
                
                {/* Right Connector */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-[4px] w-[8px] h-16 bg-blue-600 rounded-full" />

                {/* Step Number */}
                <div className="absolute top-4 left-4 w-7 h-7 rounded-full border border-blue-200 flex items-center justify-center bg-[#f4f8ff] text-xs font-bold text-blue-600">
                  {step.stepNumber}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6 shadow-md">
                  {Icon && <Icon className="w-8 h-8" strokeWidth={2} />}
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
