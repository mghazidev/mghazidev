import { About } from "@/components/home/about";
import { Certificates } from "@/components/home/certificates";
import { Contact } from "@/components/home/contact";
import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { Principles } from "@/components/home/principles";
import { Stack } from "@/components/home/stack";
import { Work } from "@/components/home/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Principles />
      <Stack />
      <Experience />
      <Education />
      <Certificates />
      <About />
      <Contact />
    </>
  );
}
