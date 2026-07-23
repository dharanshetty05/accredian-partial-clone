import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DESIGN_TOKENS } from "@/lib/constants";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "blue" | "gray" | "green";
}

export function Badge({ children, className, variant = "blue" }: BadgeProps) {
  const variantClasses = {
    blue: "bg-blue-50 text-blue-700",
    gray: "bg-slate-100 text-slate-700",
    green: "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-sm font-medium",
        DESIGN_TOKENS.borderRadius.badge,
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
