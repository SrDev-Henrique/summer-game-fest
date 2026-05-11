import Image from "next/image";

import { Controller } from "@/components/icons/controller";

export function About() {
  return (
    <section aria-labelledby="about" className="relative my-20 w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row-reverse">
        <div className="relative aspect-5/4 max-h-[660px] w-full overflow-hidden">
          <Image
            src="/assets/images/about.png"
            alt="Sobre o Summer Game Fest 2026"
            fill
            className="object-cover object-center lg:hidden"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-17 px-4 sm:flex-row md:px-12 lg:max-w-sm lg:flex-col lg:px-4 2xl:max-w-lg!">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-2xl text-livid-pink md:text-3xl">
                SGF
              </p>
              <div className="size-1.5 rounded-full bg-livid-pink" />
              <p className="font-semibold text-2xl text-livid-pink md:text-3xl">
                2026
              </p>
            </div>
            <h2 className="font-bold text-6xl md:text-7xl 2xl:text-8xl!">
              Sobre
            </h2>
            <p className="mt-10 text-foreground/80 text-sm lg:text-xs 2xl:text-base!">
              O Summer Game Fest une toda a indústria de videogames e seus fãs
              para uma visão espetacular do que vem a seguir no mundo dos jogos.
              Realizado durante o fim de semana de 5 a 8 de junho, o SGF conta
              com anúncios de novos jogos, primeiras revelações e muito mais —
              incluindo um evento ao vivo no Dolby Theatre e o SGF Play Days, um
              evento prático para a mídia e influenciadores no centro de Los
              Angeles.
            </p>
          </div>
          <div className="aspect-square w-full min-w-[180px] sm:min-w-[30vw] lg:max-w-[25vw]">
            <Controller />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 hidden aspect-auto max-h-[800px] w-[60vw] max-w-[841px] overflow-hidden rounded-tl-4xl rounded-bl-4xl lg:flex">
        <Image
          src="/assets/images/about.png"
          alt="Sobre o Summer Game Fest 2026"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
