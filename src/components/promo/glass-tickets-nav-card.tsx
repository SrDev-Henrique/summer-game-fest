"use client";

import { ArrowUp, Ticket } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type GlassTicketsNavCardProps = {
  className?: string;
  /** Strip decorative layers when nested inside another glass surface */
  embedded?: boolean;
  /** Defaults to `/` */
  homeHref?: string;
  /** Defaults to `#` until you wire a section or route */
  eventsHref?: string;
  /** Defaults to `#` until you wire ticketing */
  getTicketsHref?: string;
};

export function GlassTicketsNavCard({
  className,
  embedded = false,
  homeHref = "/",
  eventsHref = "#",
  getTicketsHref = "#",
}: GlassTicketsNavCardProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article
      className={cn(
        embedded
          ? "relative isolate flex min-h-0 flex-col overflow-visible rounded-[2rem] border-none bg-white/70 px-6 py-8 shadow-none backdrop-blur-none"
          : "relative isolate flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/55 bg-white/35 p-6 shadow-[0_16px_48px_-16px_oklch(0.55_0.12_280/0.22)] backdrop-blur-xl md:min-h-[320px] md:p-8",
        className,
      )}
    >
      {!embedded && (
        <>
          <div
            className="-z-10 pointer-events-none absolute inset-0 bg-linear-to-br from-pink-200/55 via-violet-200/45 to-sky-200/50"
            aria-hidden
          />
          <div
            className="-z-10 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,oklch(0.93_0.08_85/0.55),transparent_52%),radial-gradient(circle_at_82%_72%,oklch(0.92_0.06_210/0.5),transparent_48%)] opacity-80 mix-blend-soft-light"
            aria-hidden
          />
        </>
      )}

      <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
        <nav aria-label="Quick links" className="flex w-full flex-col">
          <Link
            href={homeHref}
            className="w-full rounded-full px-8 py-4 text-center font-medium text-foreground text-xl tracking-tight transition-all duration-300 hover:bg-primary-foreground hover:shadow-md md:w-fit md:text-base"
          >
            Início
          </Link>
          <Link
            href={eventsHref}
            className="w-full rounded-full px-8 py-4 text-center font-medium text-foreground text-xl tracking-tight transition-all duration-300 hover:bg-primary-foreground hover:shadow-md md:w-fit md:text-base"
          >
            Eventos
          </Link>
        </nav>
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="hidden shrink-0 cursor-pointer items-center justify-center rounded-full border border-foreground/35 bg-transparent transition-colors hover:bg-white/40 md:flex md:size-28"
        >
          <ArrowUp
            className="size-12 text-foreground"
            strokeWidth={1.75}
            aria-hidden
          />
        </button>
      </div>

      <div className="min-h-8 flex-1 shrink-0 md:min-h-12" aria-hidden />

      <div className="relative flex w-full justify-center">
        <Link
          href={getTicketsHref}
          className="inline-flex w-full max-w-md cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-cta px-8 py-4 font-bold text-base text-primary-foreground shadow-[0_8px_28px_-8px_rgb(47_30_252/0.45)] transition-[filter] hover:brightness-105 md:text-lg"
        >
          <Ticket
            className="size-6 shrink-0 text-primary-foreground"
            aria-hidden
          />
          Comprar ingressos
        </Link>
      </div>
    </article>
  );
}
