import { Footer, Header } from "@/components/landing";
import {
  SolutionBenefits,
  SolutionCapabilities,
  SolutionCta,
  SolutionHero,
  SolutionIntro,
} from "@/components/solutions/template";
import { managedCapacity } from "@/data/solutions/managedCapacity";

export default function ManagedCapacityPage() {
  return (
    <main>
      <Header />
      <SolutionHero {...managedCapacity.hero} />
      <SolutionIntro {...managedCapacity.intro} />
      <SolutionCapabilities {...managedCapacity.capabilities} />
      <SolutionBenefits {...managedCapacity.benefits} />
      <SolutionCta {...managedCapacity.cta} />
      <Footer />
    </main>
  );
}
