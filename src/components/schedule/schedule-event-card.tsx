import { CalendarPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ScheduleEventCardProps = {
  className?: string;
  /** Destination for the main card interaction (event detail page). */
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  date: string;
  time: string;
  description: string;
  addToCalendarLabel?: string;
  priority?: boolean;
};

export function ScheduleEventCard({
  className,
  href,
  imageSrc = "/assets/images/summer-game-fest-ball.webp",
  imageAlt = "Summer Game Fest — promotional artwork",
  date,
  time,
  description,
  addToCalendarLabel = "Add to calendar",
  priority = false,
}: ScheduleEventCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full min-h-[390px] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-sm hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-5/4 max-h-[180px] w-full shrink-0 transition-all duration-300 group-hover:scale-105">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 448px"
          priority={priority}
        />
      </div>
      <div className="pointer-events-none relative flex min-h-0 flex-1 flex-col justify-between gap-4 bg-card p-4 text-left brightness-99 transition-all duration-300 group-hover:bg-[#eef3ff]">
        <div className="min-h-0 space-y-4">
          <header className="space-y-1">
            <h3 className="font-bold text-2xl text-foreground 2xl:text-3xl">
              {date}
            </h3>
            <p className="text-foreground text-xs 2xl:text-sm">{time}</p>
          </header>
          <p className="text-foreground text-xs leading-relaxed">
            {description}
          </p>
        </div>
        <div className="pointer-events-auto relative z-20 w-fit rounded-full bg-blue-cta">
          <Button
            type="button"
            variant="ghost"
            className="h-auto cursor-pointer rounded-full px-4 py-3 font-bold text-primary-foreground text-xs hover:bg-transparent hover:text-primary-foreground"
          >
            <CalendarPlus className="mr-2 size-4 shrink-0" aria-hidden />
            {addToCalendarLabel}
          </Button>
        </div>
      </div>
      <Link
        href={href}
        className="absolute inset-0 z-10 rounded-3xl outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
        aria-label={`Ver evento: ${imageAlt}`}
      >
        <span className="sr-only">Ver detalhes do evento</span>
      </Link>
    </article>
  );
}
