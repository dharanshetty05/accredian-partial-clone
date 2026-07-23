import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseSegmentCard } from "@/components/ui/CourseSegmentCard";
import { courseSegmentsData } from "@/lib/data/courses";
import { DESIGN_TOKENS } from "@/lib/constants";

export function TailoredCourseSegmentation() {
  return (
    <section className={DESIGN_TOKENS.spacing.sectionPadding}>
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading
            title={
              <>
                Tailored <span className="text-blue-600">Course Segmentation</span>
              </>
            }
            subtitle={
              <>
                Explore <span className="text-blue-600 font-medium">Custom-fit Courses</span> Designed to Address Every Professional Focus
              </>
            }
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {courseSegmentsData.map((segment) => (
              <CourseSegmentCard key={segment.id} segment={segment} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
