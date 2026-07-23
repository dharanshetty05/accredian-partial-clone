import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { DESIGN_TOKENS } from "@/lib/constants";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow",
        DESIGN_TOKENS.borderRadius.card,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
