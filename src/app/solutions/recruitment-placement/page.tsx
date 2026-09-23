import { Footer, Header } from "@/components/landing";
import RecruitmentBenefits from "@/components/solutions/recruitment/RecruitmentBenefits";
import RecruitmentCapabilities from "@/components/solutions/recruitment/RecruitmentCapabilities";
import RecruitmentCta from "@/components/solutions/recruitment/RecruitmentCta";
import RecruitmentHero from "@/components/solutions/recruitment/RecruitmentHero";
import RecruitmentIntro from "@/components/solutions/recruitment/RecruitmentIntro";

export default function RecruitmentPlacementPage() {
  return (
    <main>
      <Header />
      <RecruitmentHero />
      <RecruitmentIntro />
      <RecruitmentCapabilities />
      <RecruitmentBenefits />
      <RecruitmentCta />
      <Footer />
    </main>
  );
}
