import { FrameworkStage } from "@/types";
import { Search, PenTool, PlayCircle } from "lucide-react";

export const frameworkData: FrameworkStage[] = [
  { id: "fw1", title: "Capability Assessment", description: "We systematically diagnose your organization's current skill landscape and identify critical growth areas.", icon: Search },
  { id: "fw2", title: "Architecting Pathways", description: "Collaboratively designing customized learning journeys aligned directly with your business objectives.", icon: PenTool },
  { id: "fw3", title: "Targeted Execution", description: "Deploying high-impact training through expert practitioners and monitoring performance in real-time.", icon: PlayCircle },
];
