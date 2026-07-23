import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { audiencesData } from "@/lib/data/audiences";
import { DESIGN_TOKENS } from "@/lib/constants";

export function StrategicSkillEnhancement() {
  return (
    <section className={DESIGN_TOKENS.spacing.sectionPadding}>
      <Container>
        <div className="relative w-full bg-[#1a73e8] rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
            
            {/* Left Content */}
            <div className="lg:col-span-5 p-8 lg:p-12 lg:pb-0 flex flex-col justify-between relative z-10 min-h-[350px] lg:min-h-0">
              <div className="relative z-20 mb-12 lg:mb-0">
                <p className="text-white/90 text-sm md:text-base font-medium mb-3">
                  Who Should Join?
                </p>
                <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-tight">
                  Strategic Skill Enhancement
                </h2>
              </div>
              
              <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[350px] mt-auto lg:absolute lg:bottom-0 lg:left-0 lg:w-full">
                <Image 
                  src="/images/StrategicSkill.png" 
                  alt="Strategic Skill Enhancement Professionals"
                  fill
                  className="object-contain object-bottom lg:object-left-bottom lg:ml-12"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            
            {/* Right Content */}
            <div className="lg:col-span-7 p-8 lg:p-12 z-10 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {audiencesData.map((audience) => {
                  const Icon = audience.icon;
                  return (
                    <div key={audience.id} className="flex flex-col text-white">
                      <Icon className="w-10 h-10 mb-4 text-white" strokeWidth={1.5} />
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {audience.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
