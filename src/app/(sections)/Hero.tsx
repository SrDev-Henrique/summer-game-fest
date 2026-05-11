import Image from "next/image";
import { ReminderButton } from "@/components/reminder-button";
import { HeroDate } from "../../components/hero/hero-date";
import { HeroDecoration } from "../../components/hero/hero-decoration";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-screen w-full overflow-hidden pt-27"
    >
      <Image
        src="/assets/images/hero.webp"
        alt="Summer Game Fest 2026"
        fill
        preload
        sizes="100vw"
        aria-hidden="true"
        className="-z-10 object-cover object-center"
      />

      <div className="sr-only">
        <h1 id="hero-heading">Summer Game Fest 2026</h1>
        <p>
          Anúncios, revelações e novidades dos maiores estúdios de games ao vivo
          em 5 de junho de 2026.
        </p>
      </div>

      <div className="container h-full pb-6 md:pb-16 lg:pb-24">
        <div className="flex size-full items-end md:items-center">
          <div className="hidden h-[70vh] min-h-[370px] w-full items-center justify-between gap-4 sm:flex lg:min-h-[500px]">
            <HeroDate />
            <div className="-ml-4 mb-6 self-end rounded-full bg-transparent p-2.5 backdrop-blur-sm backdrop-brightness-110 md:ml-0">
              <ReminderButton />
            </div>
            <HeroDecoration />
          </div>
          <div className="flex h-[70vh] min-h-[370px] w-full flex-col items-center justify-end gap-4 sm:hidden lg:min-h-[500px]">
            <div className="flex w-full items-center justify-between gap-4">
              <HeroDate />
              <HeroDecoration />
            </div>
            <div className="-ml-4 mb-6 rounded-full bg-transparent p-2.5 backdrop-blur-sm backdrop-brightness-110 md:ml-0">
              <ReminderButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
