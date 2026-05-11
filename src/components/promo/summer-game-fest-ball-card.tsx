import Image from "next/image";

import { cn } from "@/lib/utils";

const BALL_SRC = "/assets/images/summer-game-fest-ball.webp";

export type SummerGameFestBallCardProps = {
  className?: string;
};

export function SummerGameFestBallCard({
  className,
}: SummerGameFestBallCardProps) {
  return (
    <article
      className={cn(
        "relative mx-auto w-full max-w-[300px] overflow-visible rounded-[2rem] border border-white/55 bg-white/45 px-6 pt-24 pb-10 shadow-[0_12px_40px_-12px_oklch(0.55_0.15_280/0.18)] backdrop-blur-md md:max-w-[340px] md:px-8 md:pt-28 md:pb-12",
        className,
      )}
    >
      <div className="-translate-x-1/2 -translate-y-[38%] md:-translate-y-[40%] pointer-events-none absolute top-0 left-1/2 w-[88%] max-w-[290px] md:w-[90%] md:max-w-[310px]">
        <div className="relative aspect-square w-full">
          <Image
            src={BALL_SRC}
            alt="Summer Game Fest"
            fill
            className="object-contain object-center drop-shadow-[0_16px_32px_oklch(0.45_0.2_340/0.35)]"
            sizes="(max-width: 768px) 280px, 320px"
            priority={false}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-end gap-1 text-center">
        <p className="font-medium text-base text-foreground leading-snug md:text-lg">
          See what&apos;s next in video games, live June
        </p>
        <p className="font-semibold text-base text-foreground tabular-nums md:text-lg">
          5 - 8, 2026
        </p>
      </div>
    </article>
  );
}
