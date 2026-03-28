"use client";

import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export type ShinyButtonProps = ComponentProps<"button">;

export function ShinyButton({
  children,
  className,
  type = "button",
  ...props
}: ShinyButtonProps) {
  return (
    <button
      type={type}
      className={cn("shiny-cta h-full flex-center", className)}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
