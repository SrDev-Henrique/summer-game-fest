import { CalendarPlus, Ticket } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ShowAnnounced() {
  return (
    <section
      aria-labelledby="show-announced"
      className="relative mx-auto max-w-7xl py-67 lg:pt-25 lg:pb-67"
    >
      <div className="mx-auto max-w-lg space-y-6 md:max-w-4xl">
        <h2 className="text-center font-bold text-4xl sm:text-6xl lg:text-8xl">
          Anunciado <br /> Show 2026
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <p className="text-center font-semibold text-lg md:text-2xl">
            Sexta, 5 de junho de 2026
          </p>
          <div className="size-3 rounded-full bg-livid-pink" />
          <p className="text-center font-semibold text-lg md:text-2xl">
            2pm PT / 5pm ET / 9pm GMT
          </p>
        </div>
        <p className="mx-auto max-w-lg text-center text-foreground/80 text-sm">
          Junte-se a Geoff Keighley ao vivo do Dolby Theatre em Los Angeles para
          novidades, atualizações e anúncios sobre o futuro dos videogames em
          todas as plataformas.
        </p>
        <div className="mx-auto flex w-fit flex-col items-center justify-center gap-2 lg:w-full lg:flex-row">
          <div className="cursor-pointer rounded-full border-none bg-blue-cta px-6 py-4.5 hover:bg-blue-cta/80">
            <Button
              variant="ghost"
              className="cursor-pointer text-lg text-primary-foreground hover:bg-transparent hover:text-primary-foreground"
            >
              <CalendarPlus className="mr-2 size-6" />
              Adicionar ao calendário
            </Button>
          </div>
          <div className="w-full cursor-pointer rounded-full border border-foreground/20 px-6 py-4.5 transition-all duration-300 hover:shadow-md md:w-fit">
            <Button
              variant="outline"
              className="w-full cursor-pointer rounded-full border-none px-6 py-2.5 text-lg hover:bg-transparent"
            >
              <Ticket className="mr-2 size-6 text-livid-pink" />
              Comprar ingressos
            </Button>
          </div>
        </div>
      </div>
      <div className="-right-4 absolute top-0 size-42 overflow-hidden rounded-full">
        <video
          src="/assets/videos/7849769-uhd_4096_2160-12s-24fps-1000k-1280.mp4"
          autoPlay
          muted
          loop
          className="size-full object-cover"
        />
      </div>
      <div className="-left-8 absolute top-18 size-32 rounded-full">
        <Image
          src="/assets/images/67ef33b8d782619dd93509fa_sgf_2025_red_orb_1.webp"
          alt="Sign Up Background"
          fill
          sizes="240px (max-width: 768px), 320px (min-width: 768px)"
        />
      </div>
      <div className="-right-44 lg:-right-20 absolute bottom-32 size-70 rounded-full">
        <Image
          src="/assets/images/67ef47985a680f46db6cd58d_sgf_2025_green_orb_1.webp"
          alt="Sign Up Background"
          fill
          sizes="240px (max-width: 768px), 320px (min-width: 768px)"
        />
      </div>
      <div className="-left-8 lg:-translate-x-1/2 absolute bottom-20 size-40 overflow-hidden rounded-full lg:left-1/2">
        <video
          src="/assets/videos/7914803-hd_1920_1080_30fps.mp4"
          autoPlay
          muted
          loop
          className="size-full object-cover"
        />
      </div>
      <div className="-left-8 -translate-y-1/2 absolute bottom-1/7 hidden size-50 overflow-hidden rounded-full lg:block">
        <video
          src="/assets/videos/9070657-uhd_3840_2160-12s-24fps-1000k-1280.mp4"
          autoPlay
          muted
          loop
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}
