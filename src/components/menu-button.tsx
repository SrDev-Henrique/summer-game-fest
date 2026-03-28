import { cn } from "@/lib/utils";

export function MenuButton({
  children,
  label,
  isActive = false,
}: {
  children: React.ReactNode;
  label: string;
  isActive?: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(
        "h-full flex-center cursor-pointer gap-1.5 rounded-full bg-transparent px-6 ease-out",
        /* Same box-shadow shape as hover/active so only alpha interpolates (smooth). */
        "shadow-[0_4px_20px_rgb(0_0_0/0),0_1px_3px_rgb(0_0_0/0)] transition-[background-color,box-shadow] duration-300",
        !isActive &&
          "hover:bg-white hover:shadow-[0_4px_20px_rgb(0_0_0/0.08),0_1px_3px_rgb(0_0_0/0.06)]",
        isActive && "glass-pill-btn",
      )}
    >
      {children}
      <p
        className={cn(
          "font-medium text-sm",
          isActive ? "text-primary" : "text-foreground",
        )}
      >
        {label}
      </p>
    </button>
  );
}
