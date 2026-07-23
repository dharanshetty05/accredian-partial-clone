import { ProcessStep } from "@/types";
import { CheckSquare, GitMerge, Layout, BarChart } from "lucide-react";

export const processData: ProcessStep[] = [
  { id: "ps1", stepNumber: 1, title: "Needs Discovery & Analysis", description: "In-depth consultation to map organizational goals against existing talent capabilities.", icon: CheckSquare },
  { id: "ps2", stepNumber: 2, title: "Curriculum Customization", description: "Tailoring the content, case studies, and projects to reflect your specific industry context.", icon: Layout },
  { id: "ps3", stepNumber: 3, title: "Deployment & Engagement", description: "Executing via flexible formats (live, hybrid, self-paced) while maintaining high cohort engagement.", icon: GitMerge },
  { id: "ps4", stepNumber: 4, title: "Impact Measurement", description: "Tracking learner progress and assessing the tangible ROI on your training investment.", icon: BarChart },
];
