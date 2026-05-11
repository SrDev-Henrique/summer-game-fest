import Image from "next/image";

import { FooterGlassPanel } from "./footer-glass-panel";

const FOOTER_BG = "/assets/images/videoframe_751.png";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden rounded-t-[2rem] border-border/60 border-t">
      <Image
        src={FOOTER_BG}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-black/20 via-black/10 to-black/30"
        aria-hidden
      />
      <FooterGlassPanel />
    </footer>
  );
}
