"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          title={
            <>
              Testimonials from <span className="text-blue-600">Our Partners</span>
            </>
          }
          subtitle={
            <>
              What <span className="text-blue-600">Our Clients</span> Are Saying
            </>
          }
          className="mb-12"
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 flex gap-4 sm:gap-6 px-1 py-1">
                  {Array.from({ length: itemsPerPage }).map((_, itemIndex) => {
                    const idx = pageIndex * itemsPerPage + itemIndex;
                    const testimonial = testimonials[idx];
                    
                    return testimonial ? (
                      <div key={idx} className="flex-1 w-full">
                        <Card className="h-full flex flex-col p-6 sm:p-8">
                          <div className="mb-6 h-10 w-28 sm:w-32 relative">
                            <Image
                              src={testimonial.logo}
                              alt={`${testimonial.company} logo`}
                              fill
                              className="object-contain object-left"
                            />
                          </div>
                          <p className="text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                            {testimonial.quote}
                          </p>
                        </Card>
                      </div>
                    ) : (
                      <div key={`empty-${itemIndex}`} className="flex-1 w-full hidden md:block"></div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentPage === idx ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
