import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneIcon } from "lucide-react";
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

const signUpPhoneSchema = z.object({
  phone: z.string().min(1, "Informe seu telefone."),
});

type SignUpPhoneValues = z.infer<typeof signUpPhoneSchema>;

export function SignUpPhoneForm() {
  const form = useForm<SignUpPhoneValues>({
    resolver: zodResolver(signUpPhoneSchema),
    defaultValues: { phone: "" },
  });

  const signUpPhone = async (values: z.infer<typeof signUpPhoneSchema>) => {
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
      <form onSubmit={form.handleSubmit(signUpPhone)}>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="relative flex w-full items-center gap-2 rounded-full border-2 border-foreground/30 py-1 ps-10 pe-4">
                <div className="-translate-y-1/2 absolute top-1/2 left-4">
                  <PhoneIcon size={22} color="#00000090" aria-hidden="true" />
                </div>
                <FormControl className="h-full">
                  <Input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(11) 99999-9999"
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
