import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`py-24 bg-[#030712] relative overflow-hidden ${className}`}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";