import Hero from "../sections/Hero";
import WhyMe from "../sections/WhyMe";
import Skills from "../sections/Skills";
import ProjectSwiper from "../sections/ProjectSwiper";
import CTA from "../sections/CTA";
import Services from "../sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyMe />
      <Services />
      <Skills />
      <ProjectSwiper />
      <CTA />
    </>
  );
}
