import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Toaster } from "../toaster";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ShinyButton } from "../ui/shiny-button";

const signUpEmailSchema = z.object({
  email: z.email("E-mail inválido.").min(1, "Informe seu e-mail."),
});

type SignUpEmailValues = z.infer<typeof signUpEmailSchema>;

export function SignUpEmailForm() {
  const form = useForm<SignUpEmailValues>({
    resolver: zodResolver(signUpEmailSchema),
    defaultValues: { email: "" },
  });

  const signUpEmail = async (values: z.infer<typeof signUpEmailSchema>) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.custom((t) => (
      <Toaster
        message="E-mail cadastrado com sucesso."
        error={false}
        onClick={() => toast.dismiss(t)}
      />
    ));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(signUpEmail)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="relative flex w-full items-center gap-2 rounded-full border-2 border-foreground/30 py-1 ps-10 pe-4">
                <div className="-translate-y-1/2 absolute top-1/2 left-4">
                  <MailIcon size={22} color="#00000090" aria-hidden="true" />
                </div>
                <FormControl className="h-full">
                  <Input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <ShinyButton type="submit">
                  {form.formState.isSubmitting ? "Cadastrando..." : "Cadastrar"}
                </ShinyButton>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
