import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ReminderButtonProps = ComponentProps<typeof Button> & {
  children?: ReactNode;
};

export function ReminderButton({
  className,
  children = "Ativar Lembrete",
  type = "button",
  ...props
}: ReminderButtonProps) {
  return (
    <Button
      type={type}
      className={cn(
        "cursor-pointer rounded-full bg-background px-7 py-9 text-foreground text-xl hover:bg-background/90 hover:text-foreground",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="size-3 shrink-0 rounded-full bg-red"
      />
      <span>{children}</span>
    </Button>
  );
}
