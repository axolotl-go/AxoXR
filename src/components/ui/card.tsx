import { twMerge } from "tailwind-merge";
import React from "react";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "glass-panel rounded-xl p-6 transition-all hover:border-white/20",
        className,
      )}
      {...props}
    />
  );
}
