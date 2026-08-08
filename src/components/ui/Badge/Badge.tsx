import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "success" | "warning";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border";

  const variants = {
    primary: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20",
    secondary: "bg-[#111827] text-[#94A3B8] border-[#334155]",
    success: "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20",
    warning: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};