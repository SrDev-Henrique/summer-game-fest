import Image from "next/image";

export function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-screen w-full pt-27"
    >
      <div className="container h-full pb-6 md:pb-16 lg:pb-24">
        <div className="flex size-full flex-col gap-6 md:gap-16 lg:gap-24">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="relative aspect-square size-[25vw] min-w-[180px] max-w-[350px]">
              <Image
                src="/assets/images/68f06dcc9c70b112b52ecb4e_JUNE 5 2026.svg"
                alt="5 de Junho de 2026"
                fill
                className="size-full object-contain object-center"
                sizes="(max-width: 768px) 100vw, 1500px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
