import { NextResponse } from "next/server";
import { statisticsData } from "@/lib/data/statistics";

export async function GET() {
  return NextResponse.json(statisticsData);
}
