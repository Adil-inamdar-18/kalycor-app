import { Footer, Header } from "@/components/landing";
import {
  SolutionBenefits,
  SolutionCapabilities,
  SolutionCta,
  SolutionHero,
  SolutionIntro,
} from "@/components/solutions/template";
import { talentAcquisition } from "@/data/solutions/talentAcquisition";

export default function TalentAcquisitionPage() {
  return (
    <main>
      <Header />
      <SolutionHero {...talentAcquisition.hero} />
      <SolutionIntro {...talentAcquisition.intro} />
      <SolutionCapabilities {...talentAcquisition.capabilities} />
      <SolutionBenefits {...talentAcquisition.benefits} />
      <SolutionCta {...talentAcquisition.cta} />
      <Footer />
    </main>
  );
}
