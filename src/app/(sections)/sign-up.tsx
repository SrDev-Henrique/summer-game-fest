import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { SignUpCard } from "@/components/sign-up/sign-up-card";

export function SignUp() {
  return (
    <section
      aria-labelledby="sign-up"
      className="relative grid grid-cols-1 gap-4 overflow-y-visible px-4 py-10 sm:px-8 lg:grid-cols-2"
    >
      <SignUpCard
        icon={<MailIcon size={24} color="#000000" />}
        title="Cadastre para novidades."
        email
      />
      <SignUpCard
        icon={<PhoneIcon size={24} color="#000000" />}
        title="Cadastre para alertas."
      />
      <div className="-top-4 lg:-top-8 -right-6 absolute aspect-square w-[23vw] max-w-[190px] lg:z-3">
        <Image
          src="/assets/images/67ef33b8d782619dd93509fa_sgf_2025_red_orb_1.webp"
          alt="Sign Up Background"
          fill
          sizes="240px (max-width: 768px), 320px (min-width: 768px)"
        />
      </div>
    </section>
  );
}
