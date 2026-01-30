import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "hero";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:brightness-110 focus:ring-primary shadow-[var(--shadow-button)]",
      secondary:
        "bg-secondary text-secondary-foreground hover:brightness-110 focus:ring-secondary",
      outline:
        "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      ghost: "text-foreground hover:bg-muted focus:ring-muted",
      hero: "bg-gradient-to-r from-primary-dark via-primary to-primary-light text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary shadow-[var(--shadow-button)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
