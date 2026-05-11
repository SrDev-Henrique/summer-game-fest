"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type EventCountdownProps = {
  /** Epoch ms at local midnight for the event day */
  targetTimeMs: number | null;
  className?: string;
  /** `inline` = minimal strip for event detail (between date and copy) */
  variant?: "panel" | "inline";
};

function formatUnit(value: number, label: string, compact: boolean) {
  if (compact) {
    return (
      <div className="flex min-w-14 flex-col items-center gap-0.5 rounded-xl border border-foreground/8 bg-muted/30 px-2.5 py-2.5 text-center md:min-w-16">
        <span
          suppressHydrationWarning
          className="font-bold text-foreground text-xl tabular-nums md:text-2xl"
        >
          {value}
        </span>
        <span className="text-[10px] text-foreground/55 uppercase tracking-wider md:text-xs">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-w-18 flex-col items-center gap-1 rounded-2xl border border-foreground/10 bg-card/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
      <span
        suppressHydrationWarning
        className="font-bold text-2xl text-foreground tabular-nums md:text-3xl"
      >
        {value}
      </span>
      <span className="text-foreground/70 text-xs uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function EventCountdown({
  targetTimeMs,
  className,
  variant = "panel",
}: EventCountdownProps) {
  const inline = variant === "inline";
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (targetTimeMs === null) {
    return (
      <p
        className={cn(
          "rounded-2xl border border-foreground/20 border-dashed bg-muted/40 px-4 py-3 text-foreground/80 text-sm",
          inline && "rounded-xl border-foreground/15 bg-muted/25 py-2.5 text-[13px]",
          className,
        )}
      >
        Data do evento a confirmar.
      </p>
    );
  }

  const diff = targetTimeMs - now;

  if (diff <= 0) {
    return (
      <p
        className={cn(
          "font-semibold text-foreground text-lg md:text-xl",
          inline && "text-base text-foreground/90 md:text-lg",
          className,
        )}
      >
        O dia do evento chegou — confira a programação oficial.
      </p>
    );
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div
      className={cn(
        inline ? "space-y-3" : "space-y-4",
        className,
      )}
    >
      {!inline ? (
        <p className="font-semibold text-foreground/90 text-sm uppercase tracking-wider md:text-base">
          Contagem regressiva até o evento
        </p>
      ) : (
        <p className="font-medium text-[11px] text-foreground/50 uppercase tracking-[0.2em] md:text-xs">
          Contagem regressiva até o evento
        </p>
      )}
      <div className={cn("flex flex-wrap gap-2 md:gap-3", inline && "gap-2")}>
        {formatUnit(days, "dias", inline)}
        {formatUnit(hours, "horas", inline)}
        {formatUnit(minutes, "min", inline)}
        {formatUnit(seconds, "seg", inline)}
      </div>
    </div>
  );
}
