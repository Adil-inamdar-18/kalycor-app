import { Footer, Header } from "@/components/landing";
import WorkforceBenefits from "@/components/solutions/workforce/WorkforceBenefits";
import WorkforceCapabilities from "@/components/solutions/workforce/WorkforceCapabilities";
import WorkforceCta from "@/components/solutions/workforce/WorkforceCta";
import WorkforceHero from "@/components/solutions/workforce/WorkforceHero";
import WorkforceIntro from "@/components/solutions/workforce/WorkforceIntro";

export default function WorkforceSolutionsPage() {
  return (
    <main>
      <Header />
      <WorkforceHero />
      <WorkforceIntro />
      <WorkforceCapabilities />
      <WorkforceBenefits />
      <WorkforceCta />
      <Footer />
    </main>
  );
}
