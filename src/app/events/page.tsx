import Image from "next/image";
import { EventAddToCalendarCta } from "@/components/schedule/event-add-to-calendar-cta";
import { Schedule } from "../(sections)/schedule";

export default function EventsPage() {
  return (
    <main className="relative isolate min-h-[calc(100dvh-5rem)] w-full overflow-hidden pb-14 md:min-h-[calc(100dvh-6rem)]">
      <div className="relative z-50 flex min-h-dvh w-full items-start justify-center px-4 pt-32 pb-14 sm:px-10 md:px-18">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/videoframe_751.png"
            alt="Event Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex w-full max-w-4xl flex-col gap-4 rounded-[2rem] bg-transparent p-3 backdrop-blur-md">
          <div className="relative z-2 aspect-video w-full overflow-hidden rounded-3xl bg-muted ring-1 ring-black/5">
            <Image
              src="/assets/images/hero.webp"
              alt="Event Background"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 880px"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 rounded-[2rem] bg-white/70 p-4">
            <div className="space-y-2">
              <h2 className="font-semibold text-lg sm:text-xl md:text-3xl lg:text-3xl">
                Junho 5
              </h2>
              <p className="font-semibold text-xs md:text-base">
                2:00pm PT / 5:00pm ET
              </p>
            </div>
            <p className="text-foreground/90 text-sm">
              Ao vivo do Dolby Theatre, junte-se a Geoff Keighley e milhares de
              fãs para conferir o que vem por aí no mundo dos videogames.
            </p>
            <EventAddToCalendarCta className="px-6 py-2.5" />
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 pt-14 sm:px-10 md:px-18">
        <Schedule />
      </div>
    </main>
  );
}
