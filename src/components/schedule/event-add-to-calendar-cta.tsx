"use client";

import { CalendarPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EventAddToCalendarCtaProps = {
  label?: string;
  className?: string;
};

export function EventAddToCalendarCta({
  label = "Adicionar ao calendário",
  className,
}: EventAddToCalendarCtaProps) {
  return (
    <div className={cn("w-fit rounded-full bg-blue-cta shadow-md", className)}>
      <Button
        type="button"
        variant="ghost"
        className="h-auto cursor-pointer rounded-full px-4 py-2.5 font-semibold text-primary-foreground text-xs hover:bg-transparent hover:text-primary-foreground md:px-5 md:py-3 md:text-sm"
      >
        <CalendarPlus className="mr-2 size-4 shrink-0" aria-hidden />
        {label}
      </Button>
    </div>
  );
}
