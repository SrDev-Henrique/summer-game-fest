"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { SignUpEmailForm } from "./sign-up-email-form";
import { SignUpPhoneForm } from "./sign-up-phone-form";

export function SignUpCard({
  icon,
  title,
  email,
}: {
  icon: React.ReactNode;
  title: string;
  email?: boolean;
}) {
  return (
    <Card className="relative z-2 bg-background">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 text-xl">
          {icon} {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-foreground text-sm">
            {email ? "Seu e-mail." : "Seu telefone."}
          </p>
          {email ? <SignUpEmailForm /> : <SignUpPhoneForm />}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-foreground/50 text-sm">
            Seja o primeiro a saber sobre nosso calendário, quando saem os lançamentos, datas oficiais e ingressos.
        </p>
      </CardFooter>
    </Card>
  );
}
