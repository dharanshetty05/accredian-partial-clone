import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";
import { Audience } from "@/types";

export const audiencesData: Audience[] = [
  {
    id: "a1",
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck
  },
  {
    id: "a2",
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX
  },
  {
    id: "a3",
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap
  },
  {
    id: "a4",
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: Briefcase
  }
];
