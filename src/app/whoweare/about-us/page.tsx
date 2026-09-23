import { Footer, Header } from "@/components/landing";
import AboutCta from "@/components/whoweare/about/AboutCta";
import AboutHero from "@/components/whoweare/about/AboutHero";
import AboutIntro from "@/components/whoweare/about/AboutIntro";
import AboutServices from "@/components/whoweare/about/AboutServices";
import AboutStory from "@/components/whoweare/about/AboutStory";
import AboutValues from "@/components/whoweare/about/AboutValues";

export default function AboutUsPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutServices />
      <AboutValues />
      <AboutCta />
      <Footer />
    </main>
  );
}
