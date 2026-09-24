import { Footer, Header } from "@/components/landing";
import {
  SolutionBenefits,
  SolutionCapabilities,
  SolutionCta,
  SolutionHero,
  SolutionIntro,
} from "@/components/solutions/template";
import { hireTrainDeploy } from "@/data/solutions/hireTrainDeploy";

export default function HireTrainDeployPage() {
  return (
    <main>
      <Header />
      <SolutionHero {...hireTrainDeploy.hero} />
      <SolutionIntro {...hireTrainDeploy.intro} />
      <SolutionCapabilities {...hireTrainDeploy.capabilities} />
      <SolutionBenefits {...hireTrainDeploy.benefits} />
      <SolutionCta {...hireTrainDeploy.cta} />
      <Footer />
    </main>
  );
}
