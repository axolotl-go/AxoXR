import { twMerge } from "tailwind-merge";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    secondary:
      "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
    outline:
      "text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800",
    destructive:
      "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    success:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  };

  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
