import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DESIGN_TOKENS } from "@/lib/constants";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        DESIGN_TOKENS.container.maxWidth,
        DESIGN_TOKENS.container.padding,
        className
      )}
    >
      {children}
    </Component>
  );
}
