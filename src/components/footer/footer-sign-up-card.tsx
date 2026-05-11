"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Toaster } from "@/components/toaster";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  IconFacebook,
  IconInstagram,
  IconTikTok,
  IconTwitch,
  IconX,
  IconYouTube,
} from "./footer-social-icons";

const footerSignUpSchema = z.object({
  email: z.email("Invalid email.").min(1, "Enter your email."),
});

type FooterSignUpValues = z.infer<typeof footerSignUpSchema>;

const socialLinks = [
  { label: "Instagram", href: "#", Icon: IconInstagram },
  { label: "X", href: "#", Icon: IconX },
  { label: "Facebook", href: "#", Icon: IconFacebook },
  { label: "Twitch", href: "#", Icon: IconTwitch },
  { label: "YouTube", href: "#", Icon: IconYouTube },
  { label: "TikTok", href: "#", Icon: IconTikTok },
] as const;

export function FooterSignUpCard({
  className,
  embedded = false,
}: {
  className?: string;
  /** Strip decorative layers when nested inside another glass surface */
  embedded?: boolean;
}) {
  const form = useForm<FooterSignUpValues>({
    resolver: zodResolver(footerSignUpSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: FooterSignUpValues) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.custom((t) => (
      <Toaster
        message="You're signed up for updates."
        error={false}
        onClick={() => toast.dismiss(t)}
      />
    ));
  };

  return (
    <div
      className={cn(
        embedded
          ? "relative rounded-[2rem] bg-white/70 px-6 py-8"
          : "relative isolate mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/50 px-8 py-10 shadow-[0_20px_60px_-15px_oklch(0.55_0.18_280/0.25)] md:px-12 md:py-12",
        className,
      )}
    >
      {!embedded && (
        <>
          <div
            className="-z-10 pointer-events-none absolute inset-0 bg-linear-to-br from-sky-200/70 via-violet-200/60 to-pink-200/70"
            aria-hidden
          />
          <div
            className="-z-10 pointer-events-none absolute inset-0 opacity-90 backdrop-blur-xl"
            aria-hidden
          />
          <div
            className="-z-10 -top-1/4 pointer-events-none absolute left-1/4 size-[120%] rounded-full bg-linear-to-tr from-cyan-300/40 via-fuchsia-300/35 to-amber-200/30 blur-3xl"
            aria-hidden
          />
          <div
            className="-z-10 -bottom-1/4 pointer-events-none absolute right-0 size-[90%] rounded-full bg-linear-to-bl from-blue-400/25 via-purple-300/30 to-pink-400/25 blur-3xl"
            aria-hidden
          />
        </>
      )}

      <div
        className={cn(
          "relative flex h-full flex-col justify-between gap-8",
          embedded ? "text-left" : "text-center",
        )}
      >
        <div className="space-y-6 xl:mt-12">
          <h2 className="font-bold text-base text-foreground tracking-tight sm:text-lg md:text-3xl lg:text-sm xl:text-base">
            Cadastre-se para receber novidades
          </h2>

          <Form {...form}>
            <form
              className="w-full"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative flex w-full items-center gap-2 rounded-full border border-foreground/25 bg-transparent py-1.5 ps-12 pe-2 shadow-inner md:pe-2 lg:ps-10">
                      <div className="-translate-y-1/2 absolute top-1/2 left-4 md:left-4">
                        <MailIcon
                          size={22}
                          className="text-foreground/55 lg:size-4"
                          aria-hidden
                        />
                      </div>
                      <FormControl className="min-h-0 min-w-0 flex-1">
                        <Input
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="johnsmith@email.com"
                          className="h-10 min-w-0 flex-1 border-none bg-transparent px-0 shadow-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 md:h-11 md:text-base lg:text-sm"
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-pink-400 via-pink-500 to-fuchsia-600 px-5 py-3.5 font-bold text-foreground text-sm shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] ring-1 ring-black/10 transition-[filter] hover:brightness-105 disabled:pointer-events-none disabled:opacity-60 md:px-6 md:py-3 md:text-base lg:text-sm"
                      >
                        {form.formState.isSubmitting ? "…" : "Cadastrar"}
                      </button>
                    </div>
                    <FormMessage
                      className={cn(
                        "mt-2 text-sm",
                        embedded ? "text-left" : "text-center",
                      )}
                    />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <nav
          aria-label="Social media"
          className={cn(
            "grid w-full grid-cols-6 gap-6 md:mt-8",
            embedded ? "items-center justify-center" : "items-center",
          )}
        >
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center justify-center text-foreground transition-opacity hover:opacity-65"
              aria-label={label}
            >
              <Icon className="size-6 md:size-9 lg:size-6" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
