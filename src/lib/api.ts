import { Statistic, Testimonial, FAQCategory } from "@/types";

export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // Browser should use relative URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export async function getStats(): Promise<Statistic[]> {
  const res = await fetch(`${getBaseUrl()}/api/stats`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch statistics");
  return res.json();
}

export async function getFaqs(): Promise<FAQCategory[]> {
  const res = await fetch(`${getBaseUrl()}/api/faqs`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch FAQs");
  return res.json();
}
