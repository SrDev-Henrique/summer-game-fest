import Image from "next/image";

const EVENT_DATE_ISO = "2026-06-05";
const EVENT_DATE_LABEL = "5 de junho de 2026";

export function HeroDate() {
  return (
    <div className="relative aspect-square size-[25vw] min-w-[140px] sm:min-w-[180px] sm:min-w-[180px]max-w-[350px]">
      <time dateTime={EVENT_DATE_ISO} className="sr-only">
        {EVENT_DATE_LABEL}
      </time>
      <Image
        src="/assets/images/68f06dcc9c70b112b52ecb4e_JUNE 5 2026.svg"
        alt=""
        fill
        sizes="(max-width: 768px) 25vw, 350px"
        className="size-full object-contain object-center"
      />
    </div>
  );
}
