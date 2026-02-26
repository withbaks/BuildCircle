"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className,
      icon,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]";

    const variants = {
      primary:
        "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-elevated",
      secondary:
        "bg-earth-100 text-earth-800 hover:bg-earth-200",
      ghost: "bg-transparent text-earth-700 hover:bg-earth-100/80",
      outline:
        "border-2 border-brand-500 text-brand-600 bg-transparent hover:bg-brand-50",
    };

    const sizes = {
      sm: "min-h-[44px] px-4 py-2 text-sm",
      md: "min-h-touch px-6 py-3 text-base",
      lg: "min-h-touch-lg px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
