import { BellDot } from "lucide-react";
import Link from "next/link";
import { FestIcon } from "./icons/fest";
import { GameIcon } from "./icons/game";
import { SunIcon } from "./icons/sun";
import { MenuButton } from "./menu-button";
import { ShinyButton } from "./ui/shiny-button";

const icons = [
  { id: "sun", Icon: SunIcon },
  { id: "game", Icon: GameIcon },
  { id: "fest", Icon: FestIcon },
] as const;

export function Header() {
  return (
    <header className="-translate-x-1/2 container fixed top-6 left-1/2 z-100 h-17 rounded-full border bg-background backdrop-blur-sm">
      <div className="relative flex size-full items-center justify-between gap-6 p-2">
        <div className="flex h-17 w-fit items-center py-2">
          <MenuButton label="Home" isActive>
            <div className="size-1.5 rounded-full bg-primary" />
          </MenuButton>
          <MenuButton label="Eventos">
            <FestIcon size={16} color="#000000" />
          </MenuButton>
        </div>
        <Link
          href="/"
          className="-translate-x-1/2 absolute left-1/2 flex h-17 cursor-pointer items-center gap-2"
        >
          {icons.map(({ id, Icon }) => (
            <Icon key={id} size={26} color="#2f1efc" />
          ))}
        </Link>
        <div className="flex h-17 w-fit items-center py-2">
          <MenuButton label="Adc Lembrete">
            <BellDot size={18} color="#000000" />
          </MenuButton>
          <ShinyButton>Cadastrar</ShinyButton>
        </div>
      </div>
    </header>
  );
}
