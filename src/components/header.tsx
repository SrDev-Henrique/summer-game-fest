import { Dot } from "lucide-react";
import { FestIcon } from "./icons/fest";

export function Header() {
  return (
    <header className="-translate-x-1/2 container fixed top-6 left-1/2 h-17 rounded-full border bg-white/80 backdrop-blur-sm">
      <div className="flex size-full items-center justify-between gap-6 p-4">
        <div className="flex h-full w-fit items-center gap-4">
          <div className="h-full flex-center gap-2 px-6">
            <Dot size={24} color="#000000" />
          </div>
          <div className="h-full flex-center gap-2 px-6">
            <FestIcon size={24} color="#000000" />
          </div>
        </div>
      </div>
    </header>
  );
}
