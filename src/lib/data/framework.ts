import { FrameworkStage } from "@/types";
import { Search, PenTool, PlayCircle } from "lucide-react";

export const frameworkData: FrameworkStage[] = [
  { id: "fw1", title: "Assess", description: "Identify capability gaps within the organization.", icon: Search },
  { id: "fw2", title: "Design", description: "Create customized learning pathways.", icon: PenTool },
  { id: "fw3", title: "Execute", description: "Deliver impactful training programs.", icon: PlayCircle },
];
