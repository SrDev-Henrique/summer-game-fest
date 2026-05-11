"use client";

import { BellDot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FestIcon } from "../icons/fest";
import { GameIcon } from "../icons/game";
import { SunIcon } from "../icons/sun";
import { ShinyButton } from "../ui/shiny-button";
import { HambugerMenu } from "./hamburger-menu";
import { MenuButton } from "./menu-button";

const icons = [
  { id: "sun", Icon: SunIcon },
  { id: "game", Icon: GameIcon },
  { id: "fest", Icon: FestIcon },
] as const;

export function Header() {
  const pathname = usePathname();
  const isButtonActive = (path: string) => pathname === path;
  return (
    <header className="-translate-x-1/2 container fixed top-6 left-1/2 z-150 h-17 rounded-full border bg-background backdrop-blur-sm">
      <div className="relative flex size-full items-center justify-between gap-6 p-2">
        <div className="hidden h-17 w-fit items-center py-2 lg:flex">
          <Link href="/" className="h-full">
            <MenuButton label="Home" isActive={isButtonActive("/")}>
              <div
                className={cn(
                  "size-1.5 rounded-full bg-foreground",
                  isButtonActive("/") && "bg-primary",
                )}
              />
            </MenuButton>
          </Link>
          <Link href="/events" className="h-full">
            <MenuButton label="Eventos" isActive={isButtonActive("/events")}>
              <FestIcon
                size={16}
                color={isButtonActive("/events") ? "#2f1efc" : "#000000"}
              />
            </MenuButton>
          </Link>
        </div>
        <HambugerMenu />
        <Link
          href="/"
          className="-translate-x-1/2 absolute left-1/2 flex h-17 cursor-pointer items-center gap-2"
        >
          {icons.map(({ id, Icon }) => (
            <Icon key={id} size={26} color="#2f1efc" />
          ))}
        </Link>
        <div className="flex h-17 w-fit items-center py-2">
          <MenuButton className="hidden! lg:flex!" label="Adc Lembrete">
            <BellDot size={18} color="#000000" />
          </MenuButton>
          <ShinyButton>Cadastrar</ShinyButton>
        </div>
      </div>
    </header>
  );
}
