import Image from "next/image";

import { cn } from "@/lib/utils";

const BALL_SRC = "/assets/images/summer-game-fest-ball.webp";

export function FooterBrandColumn({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-w-0 flex-col items-center rounded-[2rem] bg-white/70 px-2 pt-12 pb-2 md:pt-14",
        className,
      )}
    >
      <div className="-translate-y-[28%] md:-translate-y-[30%] relative flex w-full items-center justify-center">
        <div className="relative aspect-square w-[88%] max-w-[270px] md:max-w-[300px] lg:max-w-[250px] 2xl:max-w-[300px]">
          <Image
            src={BALL_SRC}
            alt="Summer Game Fest"
            fill
            className="object-contain object-center drop-shadow-[0_20px_40px_oklch(0.45_0.2_340/0.4)]"
            sizes="(max-width: 1024px) 280px, 300px"
          />
        </div>
      </div>
      <div className="-mt-10 md:-mt-12 relative z-1 flex max-w-xs flex-col gap-1 text-center">
        <p className="font-medium text-base text-foreground leading-snug md:text-lg lg:text-xs 2xl:text-base!">
          Veja o que vem por aí nos videogames, ao vivo
        </p>
        <p className="font-semibold text-base text-foreground tabular-nums md:text-lg lg:text-xs 2xl:text-base!">
          5 a 8 de junho
        </p>
      </div>
    </div>
  );
}
