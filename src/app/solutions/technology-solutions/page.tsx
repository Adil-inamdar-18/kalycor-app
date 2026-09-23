import { Footer, Header } from "@/components/landing";
import TechnologyBenefits from "@/components/solutions/technology/TechnologyBenefits";
import TechnologyCapabilities from "@/components/solutions/technology/TechnologyCapabilities";
import TechnologyCta from "@/components/solutions/technology/TechnologyCta";
import TechnologyHero from "@/components/solutions/technology/TechnologyHero";
import TechnologyIntro from "@/components/solutions/technology/TechnologyIntro";

export default function TechnologySolutionsPage() {
  return (
    <main>
      <Header />
      <TechnologyHero />
      <TechnologyIntro />
      <TechnologyCapabilities />
      <TechnologyBenefits />
      <TechnologyCta />
      <Footer />
    </main>
  );
}
