"use client";

import Link from "next/link";

import { GlassTicketsNavCard } from "@/components/promo/glass-tickets-nav-card";
import { cn } from "@/lib/utils";

import { FooterBrandColumn } from "./footer-brand-column";
import { FooterSignUpCard } from "./footer-sign-up-card";

function FooterLegalBar() {
  return (
    <div className="rounded-[2rem] bg-white/70 px-6 py-8">
      <div className="flex flex-col items-center gap-5 text-foreground text-xs md:flex-row md:justify-between md:gap-6 md:text-sm">
        <p className="text-center md:text-left">© 2026 Summer Game Fest</p>

        <Link className="transition-opacity hover:opacity-70" href="#">
          Termos
        </Link>
        <Link className="transition-opacity hover:opacity-70" href="#">
          Privacidade
        </Link>

        <p className="text-center md:text-right">Website por SrDev-Henrique</p>
      </div>
    </div>
  );
}

export function FooterGlassPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-6",
        className,
      )}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-[2rem] p-4 shadow-[0_24px_80px_-24px_oklch(0.35_0.08_280/0.35)] backdrop-blur-sm backdrop-brightness-120 lg:hidden">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10 xl:gap-14">
          <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-10 xl:gap-14">
            <FooterSignUpCard embedded className="min-w-0" />
            <FooterBrandColumn />
          </div>
          <GlassTicketsNavCard
            embedded
            className="min-h-[260px] min-w-0 lg:min-h-[300px]"
          />
        </div>
        <FooterLegalBar />
      </div>
      <div className="mx-auto hidden flex-col gap-4 rounded-[2rem] p-4 shadow-[0_24px_80px_-24px_oklch(0.35_0.08_280/0.35)] backdrop-blur-sm backdrop-brightness-120 lg:flex lg:max-w-none">
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <div className="grid w-full grid-cols-3 gap-4">
            <FooterSignUpCard embedded className="min-w-0" />
            <FooterBrandColumn />
            <GlassTicketsNavCard
              embedded
              className="min-h-[260px] min-w-0 lg:min-h-[300px]"
            />
          </div>
        </div>
        <FooterLegalBar />
      </div>
    </div>
  );
}
