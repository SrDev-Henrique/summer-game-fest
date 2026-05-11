import { CalendarPlus } from "lucide-react";

import { ScheduleEventCard } from "@/components/schedule/schedule-event-card";
import {
  listScheduleEventImages,
  metaForScheduleEvent,
} from "@/lib/schedule-event-images";

export function Schedule() {
  const eventImages = listScheduleEventImages();

  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="relative mx-auto min-h-screen max-w-7xl px-4"
    >
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-2xl text-primary md:text-3xl">
              SGF
            </p>
            <div className="size-1.5 rounded-full bg-primary" />
            <p className="font-semibold text-2xl text-primary md:text-3xl">
              2026
            </p>
          </div>
          <h2
            id="schedule-heading"
            className="font-bold text-5xl md:text-6xl lg:text-7xl"
          >
            Agenda
          </h2>
        </div>
        <div className="flex w-fit cursor-pointer items-center gap-4 rounded-full bg-blue-cta px-4 py-3.5 text-primary-foreground">
          <CalendarPlus size={22} color="#ffffff" />
          Adicionar todos os eventos
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-2 gap-y-4 md:mt-14 md:grid-cols-3 lg:grid-cols-4">
        {eventImages.map(({ src, stem }, index) => {
          const meta = metaForScheduleEvent(stem);
          return (
            <ScheduleEventCard
              key={src}
              href={`/events/${stem}`}
              imageSrc={src}
              imageAlt={meta.imageAlt}
              date={meta.date}
              time={meta.time}
              description={meta.description}
              addToCalendarLabel="Adicionar ao calendário"
              priority={index === 0}
            />
          );
        })}
      </div>
    </section>
  );
}
