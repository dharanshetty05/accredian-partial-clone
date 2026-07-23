import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrackRecord } from "@/components/sections/TrackRecord";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrackRecord />
    </main>
  );
}
