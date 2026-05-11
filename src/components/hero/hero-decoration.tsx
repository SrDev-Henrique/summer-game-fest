import Image from "next/image";

export function HeroDecoration() {
  return (
    <div
      aria-hidden="true"
      className="-ml-10 relative aspect-square size-[25vw] min-w-[140px] max-w-[350px] sm:min-w-[180px] md:ml-0"
    >
      <Image
        src="/assets/images/68f06d9e8f04c7dcb6ed0b9b_Dolby Gradient.svg"
        alt=""
        fill
        sizes="(max-width: 768px) 25vw, 350px"
        className="size-full object-contain object-center"
      />
    </div>
  );
}
