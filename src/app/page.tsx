import { About } from "./(sections)/about";
import { Hero } from "./(sections)/Hero";
import { Schedule } from "./(sections)/schedule";
import { ShowAnnounced } from "./(sections)/show-announced";
import { SignUp } from "./(sections)/sign-up";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <SignUp />
      <ShowAnnounced />
      <Schedule />
      <About />
    </main>
  );
}
