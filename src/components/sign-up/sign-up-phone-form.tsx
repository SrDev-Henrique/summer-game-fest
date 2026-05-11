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

/** Brazilian phone: (DD) NNNNN-NNNN or (DD) NNNN-NNNN — max 11 digits. */
function maskBrazilianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6)
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const signUpPhoneSchema = z.object({
  phone: z
    .string()
    .min(1, "Informe seu telefone.")
    .refine(
      (val) => {
        const n = val.replace(/\D/g, "").length;
        return n >= 10 && n <= 11;
      },
      "Informe um telefone válido com DDD.",
    ),
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
        message="Telefone cadastrado com sucesso."
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
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={(e) =>
                      field.onChange(maskBrazilianPhone(e.target.value))
                    }
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
