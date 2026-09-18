import { Header } from "@/components/landing";
import { Hero } from "@/components/business/sections/Hero";
import { About } from "@/components/business/sections/About";
import { Solutions } from "@/components/business/sections/Solutions";
import { Offerings } from "@/components/business/sections/Offerings";
import { ServicesAccordion } from "@/components/business/sections/ServicesAccordion";
import { Support } from "@/components/business/sections/Support";
import { WhyKalycor } from "@/components/business/sections/WhyKalycor";
import { FAQ } from "@/components/business/sections/FAQ";
import { Contact } from "@/components/business/sections/Contact";
import { Footer } from "@/components/landing";

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Offerings />
        <ServicesAccordion />
        <Support />
        <WhyKalycor />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
