import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}
