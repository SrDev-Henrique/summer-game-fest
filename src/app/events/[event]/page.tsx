import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EventAddToCalendarCta } from "@/components/schedule/event-add-to-calendar-cta";
import { EventCountdown } from "@/components/schedule/event-countdown";
import {
  listScheduleEventImages,
  resolveScheduleEventBySlug,
} from "@/lib/schedule-event-images";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return listScheduleEventImages().map(({ stem }) => ({ event: stem }));
}

type EventPageProps = {
  params: Promise<{ event: string }>;
};

export async function generateMetadata({ params }: EventPageProps) {
  const { event: slug } = await params;
  const resolved = resolveScheduleEventBySlug(slug);
  if (!resolved) {
    return { title: "Evento" };
  }
  return {
    title: `${resolved.meta.imageAlt} · Agenda`,
    description: resolved.meta.description,
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { event: slug } = await params;
  const resolved = resolveScheduleEventBySlug(slug);

  if (!resolved) {
    notFound();
  }

  const { src, meta, startDate } = resolved;
  const targetTimeMs = startDate?.getTime() ?? null;

  return (
    <main className="relative isolate min-h-[calc(100dvh-5rem)] w-full overflow-hidden pb-14 md:min-h-[calc(100dvh-6rem)]">
      <div className="relative z-50 flex h-[80vh] min-h-[500px] w-full items-end justify-center px-4 sm:px-10 md:px-18">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/videoframe_751.png"
            alt="Event Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="w-full max-w-4xl translate-y-[30%] rounded-[2rem] bg-transparent p-3 backdrop-blur-md">
          <div className="relative z-2 aspect-video w-full overflow-hidden rounded-3xl bg-muted ring-1 ring-black/5">
            <Image
              src={src}
              alt={meta.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 880px"
              priority
            />
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 sm:px-10 md:px-18">
        <article
          className={cn(
            "mx-auto w-full max-w-4xl rounded-[2rem] pt-24 sm:pt-28 md:pt-40 lg:pt-46",
          )}
        >
          <div className="flex flex-col gap-6 md:gap-7">
            <h1 className="font-bold font-manrope text-4xl text-foreground tracking-tight md:text-5xl lg:text-6xl">
              {meta.imageAlt}
            </h1>

            <EventAddToCalendarCta />

            <div className="space-y-1">
              <p className="text-base text-foreground/90 leading-snug md:text-lg">
                <span className="font-semibold text-foreground">
                  {meta.date}
                </span>
              </p>
              <p className="text-foreground/70 text-sm md:text-base">
                {meta.time}
              </p>
            </div>

            <div className="border-foreground/8 border-t pt-2 md:pt-1">
              <EventCountdown
                targetTimeMs={targetTimeMs}
                variant="inline"
                className="pt-4 md:pt-5"
              />
            </div>

            <p className="max-w-2xl text-base text-foreground/80 leading-relaxed md:text-lg">
              {meta.description}
            </p>

            <div className="pt-2">
              <Link
                href="/#schedule"
                className={cn(
                  "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-cta px-6 py-3.5 font-semibold text-primary-foreground text-sm shadow-md transition-shadow hover:shadow-lg md:w-auto md:justify-start md:px-8 md:py-4 md:text-base",
                )}
              >
                <ArrowLeft className="size-4 shrink-0 md:size-5" aria-hidden />
                Voltar a todos os eventos
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
