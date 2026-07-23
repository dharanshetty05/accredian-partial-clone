"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

const AccordionItem = ({ title, content, isOpen, onToggle, id }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <h3>
        <button
          type="button"
          id={`accordion-button-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-gray-900 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <span>{title}</span>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </motion.div>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-button-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1 text-gray-600">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface AccordionProps {
  items: {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion = ({ items, allowMultiple = false, className = "" }: AccordionProps) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setOpenIds((prev) => {
      const newOpenIds = new Set(prev);
      if (newOpenIds.has(id)) {
        newOpenIds.delete(id);
      } else {
        if (!allowMultiple) {
          newOpenIds.clear();
        }
        newOpenIds.add(id);
      }
      return newOpenIds;
    });
  };

  return (
    <div className={`w-full divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white px-4 shadow-sm ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIds.has(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};
