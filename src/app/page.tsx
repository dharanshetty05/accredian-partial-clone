import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import { Partners } from "@/components/sections/Partners";
import { DomainExpertise } from "@/components/sections/DomainExpertise";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrackRecord />
      <Partners />
      <AccredianEdge />
      <DomainExpertise />
    </main>
  );
}
