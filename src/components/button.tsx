import { twMerge } from "tailwind-merge";
import React from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "default" | "lg" | "icon";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({
  children,
  className,
  variant = "default",
  size = "default",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles: Record<ButtonVariant, string> = {
    default:
      "bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
    secondary:
      "bg-secondary/10 hover:bg-secondary/20 text-slate-900 dark:text-white backdrop-blur-sm",
    outline:
      "border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white",
    ghost:
      "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    default: "h-11 px-4 py-2",
    sm: "h-9 px-3 rounded-lg",
    lg: "h-14 px-8 rounded-2xl text-lg",
    icon: "h-11 w-11",
  };

  const styles = twMerge(
    baseStyle,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </>
  );

  if (props.href) {
    return (
      <a className={styles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={styles}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
