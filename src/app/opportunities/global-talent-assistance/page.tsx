import { Footer, Header } from "@/components/landing";
import GlobalTalentAssistanceBenefits from "@/components/opportunities/global-talent-assistance/GlobalTalentAssistanceBenefits";
import GlobalTalentAssistanceCta from "@/components/opportunities/global-talent-assistance/GlobalTalentAssistanceCta";
import GlobalTalentAssistanceHero from "@/components/opportunities/global-talent-assistance/GlobalTalentAssistanceHero";
import GlobalTalentAssistanceIntro from "@/components/opportunities/global-talent-assistance/GlobalTalentAssistanceIntro";
import GlobalTalentAssistanceProcess from "@/components/opportunities/global-talent-assistance/GlobalTalentAssistanceProcess";

export default function GlobalTalentAssistancePage() {
  return (
    <main>
      <Header />
      <GlobalTalentAssistanceHero />
      <GlobalTalentAssistanceIntro />
      <GlobalTalentAssistanceProcess />
      <GlobalTalentAssistanceBenefits />
      <GlobalTalentAssistanceCta />
      <Footer />
    </main>
  );
}
