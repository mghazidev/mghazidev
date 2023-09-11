import Header from "@/app/components/header/Header";
import Skills from "@/app/components/skills/Skills";
import Experience from "@/app/components/experience/Experience";
import Portfolio from "@/app/components/portfolio/Portfolio";
import Education from "@/app/components/education/Education";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Experience />
      <Portfolio />
      <Education />
      <Footer />
    </>
  );
}
