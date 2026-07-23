import { Course, CourseSegment } from "@/types";

export const coursesData: Course[] = [
  { id: "c1", title: "Advanced Data Science Leadership", description: "Equip your technical managers with cutting-edge AI strategy and predictive modeling skills.", imageUrl: "/courses/ds-leadership.png", category: "Artificial Intelligence & Data" },
  { id: "c2", title: "Enterprise Product Management", description: "Train your product teams to build scalable solutions that drive tangible business impact.", imageUrl: "/courses/enterprise-pm.png", category: "Product Strategy & Management" },
  { id: "c3", title: "Cloud Architecture Masterclass", description: "Upskill engineering talent in designing resilient, modern cloud infrastructure.", imageUrl: "/courses/cloud-arch.png", category: "Technology & Engineering" },
  { id: "c4", title: "AI for Business Leaders", description: "Demystify AI implementation and strategy for non-technical executives.", imageUrl: "/courses/ai-business.png", category: "Artificial Intelligence & Data" },
];

export const courseSegmentsData: CourseSegment[] = [
  {
    id: "cs1",
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    imageUrl: "/images/courses/Program.png"
  },
  {
    id: "cs2",
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    imageUrl: "/images/courses/Industry.png"
  },
  {
    id: "cs3",
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    imageUrl: "/images/courses/Topic.png"
  },
  {
    id: "cs4",
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    imageUrl: "/images/courses/Level.png"
  }
];
