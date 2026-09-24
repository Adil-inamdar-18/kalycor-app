import { Footer, Header } from "@/components/landing";
import ReferralProgramBenefits from "@/components/opportunities/referral-program/ReferralProgramBenefits";
import ReferralProgramCta from "@/components/opportunities/referral-program/ReferralProgramCta";
import ReferralProgramHero from "@/components/opportunities/referral-program/ReferralProgramHero";
import ReferralProgramIntro from "@/components/opportunities/referral-program/ReferralProgramIntro";
import ReferralProgramProcess from "@/components/opportunities/referral-program/ReferralProgramProcess";

export default function ReferralProgramPage() {
  return (
    <main>
        <Header/>
      <ReferralProgramHero />
      <ReferralProgramIntro />
      <ReferralProgramProcess />
      <ReferralProgramBenefits />
      <ReferralProgramCta />
      <Footer/>
    </main>
  );
}