import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", centered && "text-center items-center", className)}>
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
