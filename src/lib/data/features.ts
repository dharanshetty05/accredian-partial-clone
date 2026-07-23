import { Feature } from "@/types";
import { Shield, BookOpen, Award, TrendingUp } from "lucide-react";

export const featuresData: Feature[] = [
  { id: "f1", title: "Tailored Corporate Learning", description: "Customized curriculums designed to solve your specific organizational challenges.", icon: BookOpen },
  { id: "f2", title: "World-Class Practitioner Faculty", description: "Programs delivered by active industry leaders with real-world enterprise experience.", icon: Award },
  { id: "f3", title: "Data-Driven Skill Mapping", description: "Identify critical gaps and measure the exact ROI of your team's capability growth.", icon: TrendingUp },
  { id: "f4", title: "Scalable Delivery Infrastructure", description: "Deploy training seamlessly across global teams with robust enterprise-grade security.", icon: Shield },
];
