import type { ReactNode } from "react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Domain {
  id: string;
  title: string;
  icon: ReactNode;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  company: string;
  review: string;
  reviewer: string;
  reviewerRole?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface FrameworkStage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
