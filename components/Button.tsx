import { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: ButtonVariant;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition";

const variants: Record<ButtonVariant, string> = {
  primary: base + " bg-primary text-white hover:bg-secondary",
  secondary: base + " border border-primary text-primary hover:bg-primary hover:text-white",
  ghost: base + " text-primary hover:bg-gray-100"
};

export function Button({ href, onClick, children, variant = "primary", type = "button" }: Props) {
  const className = variants[variant];

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
