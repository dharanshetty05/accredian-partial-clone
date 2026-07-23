import { NextResponse } from "next/server";
import { faqsData } from "@/lib/data/faqs";

export async function GET() {
  return NextResponse.json(faqsData);
}
