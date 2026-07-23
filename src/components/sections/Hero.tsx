import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export function Hero() {
  return (
    <section className="pt-8 pb-16">
      <Container>
        <div className="bg-[#eef5ff] rounded-3xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6 text-slate-900">
                Next-Gen <span className="text-blue-600">Expertise</span>
                <br />
                For Your <span className="text-blue-600">Enterprise</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-md">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-8 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <Button size="lg" className="px-8 py-4">
                  Enquire Now
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-0 flex items-end justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] lg:max-w-none h-full min-h-[400px] lg:absolute lg:inset-0 lg:bottom-0">
                <Image
                  src="/images/hero.png"
                  alt="Professionals with laptop"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}