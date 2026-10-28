import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { Stack } from "@/components/home/stack";
import { Work } from "@/components/home/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Stack />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
