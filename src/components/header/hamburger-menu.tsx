"use client";

import { BellDot, MenuIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FestIcon } from "../icons/fest";
import { hamburgerMenuVariants } from "./hamburger-menu-variants";
import { MenuButton } from "./menu-button";

export function HambugerMenu() {
  const pathname = usePathname();
  const isButtonActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-250 flex h-17 w-fit items-center py-2 lg:hidden">
      <MenuButton onClick={() => setIsOpen(!isOpen)} isActive={isOpen}>
        {isOpen ? (
          <XIcon size={24} color={isOpen ? "#2f1efc" : "#000000"} />
        ) : (
          <MenuIcon size={24} color={isOpen ? "#2f1efc" : "#000000"} />
        )}
      </MenuButton>
      <motion.div
        variants={hamburgerMenuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        style={{ transformOrigin: "top left" }}
        className="absolute top-19 left-0 z-150 flex aspect-square w-[35vw] min-w-[200px] max-w-[240px] flex-col gap-2 rounded-lg border bg-background p-2"
      >
        <div className="h-14">
          <Link href="/">
            <MenuButton
              className="justify-start! w-full"
              label="Home"
              isActive={isButtonActive("/")}
            >
              <div
                className={cn(
                  "size-1.5 rounded-full bg-foreground",
                  isButtonActive("/") && "bg-primary",
                )}
              />
            </MenuButton>
          </Link>
        </div>
        <div className="h-14">
          <Link href="/events">
            <MenuButton
              className="justify-start! w-full"
              label="Eventos"
              isActive={isButtonActive("/events")}
            >
              <FestIcon
                size={16}
                color={isButtonActive("/events") ? "#2f1efc" : "#000000"}
              />
            </MenuButton>
          </Link>
        </div>
        <div className="flex-1 rounded-full bg-blue-cta">
          <MenuButton
            className="w-full hover:bg-transparent! [&>p]:text-white"
            label="Adc Lembrete"
          >
            <BellDot size={16} color="#ffffff" />
          </MenuButton>
        </div>
      </motion.div>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="-top-6 -z-1 -left-4.5 pointer-events-none absolute right-0 h-screen w-screen bg-foreground/20"
      ></motion.div>
    </div>
  );
}
