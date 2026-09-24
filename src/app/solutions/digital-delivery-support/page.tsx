import { Footer, Header } from "@/components/landing";
import {
  SolutionBenefits,
  SolutionCapabilities,
  SolutionCta,
  SolutionHero,
  SolutionIntro,
} from "@/components/solutions/template";
import { digitalDeliverySupport } from "@/data/solutions/digitalDeliverySupport";

export default function DigitalDeliverySupportPage() {
  return (
    <main>
      <Header />
      <SolutionHero {...digitalDeliverySupport.hero} />
      <SolutionIntro {...digitalDeliverySupport.intro} />
      <SolutionCapabilities {...digitalDeliverySupport.capabilities} />
      <SolutionBenefits {...digitalDeliverySupport.benefits} />
      <SolutionCta {...digitalDeliverySupport.cta} />
      <Footer />
    </main>
  );
}
