import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`w-full bg-[#111827] border border-[#334155] text-[#F8FAFC] placeholder-[#94A3B8] px-5 py-4 rounded-[16px] text-base transition-all duration-200 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:opacity-50 disabled:cursor-not-allowed ${
            error ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/20" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-[#EF4444]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";