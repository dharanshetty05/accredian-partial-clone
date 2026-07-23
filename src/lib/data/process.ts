import { ProcessStep } from "@/types";
import { TrendingUp, Presentation, MonitorPlay } from "lucide-react";

export const howItWorksData: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: TrendingUp,
  },
  {
    id: "step-2",
    stepNumber: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation,
  },
  {
    id: "step-3",
    stepNumber: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];
