import { Footer, Header } from "@/components/landing";
import GlobalTalentCenterAreas from "@/components/opportunities/global-talent-center/GlobalTalentCenterAreas";
import GlobalTalentCenterBenefits from "@/components/opportunities/global-talent-center/GlobalTalentCenterBenefits";
import GlobalTalentCenterCta from "@/components/opportunities/global-talent-center/GlobalTalentCenterCta";
import GlobalTalentCenterHero from "@/components/opportunities/global-talent-center/GlobalTalentCenterHero";
import GlobalTalentCenterIntro from "@/components/opportunities/global-talent-center/GlobalTalentCenterIntro";

export default function GlobalTalentCenterPage() {
  return (
    <main>
        <Header/>
      <GlobalTalentCenterHero />
      <GlobalTalentCenterIntro />
      <GlobalTalentCenterAreas />
      <GlobalTalentCenterBenefits />
      <GlobalTalentCenterCta />
      <Footer/>
    </main>
  );
}