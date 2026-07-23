import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import type { CourseSegment } from "@/types";

interface CourseSegmentCardProps {
  segment: CourseSegment;
}

export function CourseSegmentCard({ segment }: CourseSegmentCardProps) {
  return (
    <Card className="flex flex-col h-full border-none shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
      <div className="relative w-full h-[180px]">
        <Image
          src={segment.imageUrl}
          alt={segment.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <CardContent className="flex flex-col flex-grow p-6 text-center">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          {segment.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {segment.description}
        </p>
      </CardContent>
    </Card>
  );
}
