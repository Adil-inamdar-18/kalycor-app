import { Footer, Header } from "@/components/landing";
import {
  WorkforceBenefits,
  WorkforceCapabilities,
  WorkforceCta,
  WorkforceHero,
  WorkforceIntro,
} from "@/components/solutions/workforce";
import {
  workforceBenefits,
  workforceCapabilities,
  workforceCta,
  workforceHero,
  workforceIntro,
} from "@/data/solutions/workforceSolutions";

export default function WorkforceSolutionsPage() {
  return (
    <main>
      <Header />
      <WorkforceHero {...workforceHero} />
      <WorkforceIntro {...workforceIntro} />
      <WorkforceCapabilities {...workforceCapabilities} />
      <WorkforceBenefits {...workforceBenefits} />
      <WorkforceCta {...workforceCta} />
      <Footer />
    </main>
  );
}