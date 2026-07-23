import { Statistic, FAQCategory } from "@/types";
import { statisticsData } from "@/lib/data/statistics";
import { faqsData } from "@/lib/data/faqs";

export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // Browser should use relative URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export async function getStats(): Promise<Statistic[]> {
  // Directly return the data source to avoid self-fetching on Vercel
  return statisticsData;
}

export async function getFaqs(): Promise<FAQCategory[]> {
  // Directly return the data source to avoid self-fetching on Vercel
  return faqsData;
}
