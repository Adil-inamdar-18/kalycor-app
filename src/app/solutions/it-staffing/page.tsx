import { Footer, Header } from "@/components/landing";
import {
  SolutionBenefits,
  SolutionCapabilities,
  SolutionCta,
  SolutionHero,
  SolutionIntro,
} from "@/components/solutions/template";
import { itStaffing } from "@/data/solutions/itStaffing";

export default function ItStaffingPage() {
  return (
    <main>
      <Header />
      <SolutionHero {...itStaffing.hero} />
      <SolutionIntro {...itStaffing.intro} />
      <SolutionCapabilities {...itStaffing.capabilities} />
      <SolutionBenefits {...itStaffing.benefits} />
      <SolutionCta {...itStaffing.cta} />
      <Footer />
    </main>
  );
}
