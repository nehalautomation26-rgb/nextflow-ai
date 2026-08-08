import * as React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "display" | "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as = "h2",
  className = "",
  children,
  ...props
}) => {
  const styles = {
    display:
      "text-5xl md:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]",
    h1: "text-4xl md:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-tight",
    h2: "text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-tight",
    h3: "text-2xl md:text-3xl font-bold tracking-tight text-[#F8FAFC] leading-snug",
  };

  const Component = as === "display" ? "h1" : as;

  return (
    <Component
      className={`${styles[as]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export interface SubheadingProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Subheading: React.FC<SubheadingProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <p
      className={`text-lg md:text-xl text-[#94A3B8] font-medium max-w-3xl leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <p
      className={`text-base text-[#94A3B8] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};