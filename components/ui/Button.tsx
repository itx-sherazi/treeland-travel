import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white shadow-md shadow-brand-green/20 hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5",
  secondary:
    "bg-brand-gold text-[#1f2937] shadow-md shadow-brand-gold/25 hover:bg-[#c19f2e] hover:shadow-lg hover:shadow-brand-gold/35 hover:-translate-y-0.5",
  outline:
    "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white hover:-translate-y-0.5 hover:shadow-md",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  icon,
  target,
  rel,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 sm:text-base disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
}
