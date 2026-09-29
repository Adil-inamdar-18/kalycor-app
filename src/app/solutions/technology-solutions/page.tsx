import { Footer, Header } from "@/components/landing";
import {
  TechnologyBenefits,
  TechnologyCapabilities,
  TechnologyCta,
  TechnologyHero,
  TechnologyIntro,
} from "@/components/solutions/technology";
import {
  technologyBenefits,
  technologyCapabilities,
  technologyCta,
  technologyHero,
  technologyIntro,
} from "@/data/solutions/technologySolutions";

export default function TechnologySolutionsPage() {
  return (
    <main>
      <Header />
      <TechnologyHero {...technologyHero} />
      <TechnologyIntro {...technologyIntro} />
      <TechnologyCapabilities {...technologyCapabilities} />
      <TechnologyBenefits {...technologyBenefits} />
      <TechnologyCta {...technologyCta} />
      <Footer />
    </main>
  );
}
