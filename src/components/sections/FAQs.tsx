"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { faqsData } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQs() {
  const [activeCategory, setActiveCategory] = useState<string>(faqsData[0].category);
  
  const currentCategoryData = faqsData.find(c => c.category === activeCategory) || faqsData[0];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-center">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Left Column - Navigation */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {faqsData.map((cat) => {
              const isActive = activeCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={cn(
                    "py-4 px-6 text-center font-medium rounded-md transition-all",
                    isActive 
                      ? "bg-white text-blue-600 shadow-sm border-0 ring-1 ring-black/5" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                  )}
                  style={{
                    boxShadow: isActive ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none"
                  }}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full md:w-2/3">
            <FAQAccordion items={currentCategoryData.faqs} />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="primary" className="font-semibold text-base px-8 py-3">
            Enquire Now
          </Button>
        </div>
      </Container>
    </section>
  );
}

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const contentId = `faq-content-${index}`;

        return (
          <div key={index} className="flex flex-col">
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex justify-between items-center w-full text-left py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              <span 
                className={cn(
                  "text-lg font-medium pr-6", 
                  isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600 transition-colors"
                )}
              >
                {item.question}
              </span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className={cn("h-5 w-5 transition-colors", isOpen ? "text-blue-600" : "text-slate-500 group-hover:text-blue-600")} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-2 text-slate-700 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
