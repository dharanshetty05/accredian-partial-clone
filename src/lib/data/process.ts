import { ProcessStep } from "@/types";
import { CheckSquare, GitMerge, Layout } from "lucide-react";

export const processData: ProcessStep[] = [
  { id: "ps1", stepNumber: 1, title: "Skill Gap Analysis", description: "We evaluate your team's current capabilities.", icon: CheckSquare },
  { id: "ps2", stepNumber: 2, title: "Customized Training Plan", description: "Tailored content to meet your specific goals.", icon: Layout },
  { id: "ps3", stepNumber: 3, title: "Flexible Delivery", description: "Online, offline, or hybrid learning options.", icon: GitMerge },
];
