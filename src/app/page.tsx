export const dynamic = "force-dynamic";

import { Hero } from "@/components/sections/Hero";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import { Partners } from "@/components/sections/Partners";
import { DomainExpertise } from "@/components/sections/DomainExpertise";
import { TailoredCourseSegmentation } from "@/components/sections/TailoredCourseSegmentation";
import { StrategicSkillEnhancement } from "@/components/sections/StrategicSkillEnhancement";
import { CATFramework } from "@/components/sections/CATFramework";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQs } from "@/components/sections/FAQs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getStats, getFaqs } from "@/lib/api";

export default async function Home() {
  const [stats, faqs] = await Promise.all([
    getStats(),
    getFaqs(),
  ]);

  return (
    <main>
      <Hero />
      <TrackRecord stats={stats} />
      <Partners />
      <AccredianEdge />
      <DomainExpertise />
      <TailoredCourseSegmentation />
      <StrategicSkillEnhancement />
      <CATFramework />
      <HowItWorks />
      <FAQs faqsData={faqs} />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
