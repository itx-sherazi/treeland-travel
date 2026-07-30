import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green-dark shadow-sm shadow-brand-green/20",
  secondary: "bg-brand-gold text-[#1f2937] hover:bg-[#c19f2e]",
  outline:
    "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors sm:text-base disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`;

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
