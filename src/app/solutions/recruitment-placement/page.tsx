import { Footer, Header } from "@/components/landing";
import {
  RecruitmentBenefits,
  RecruitmentCapabilities,
  RecruitmentCta,
  RecruitmentHero,
  RecruitmentIntro,
} from "@/components/solutions/recruitment";
import {
  recruitmentBenefits,
  recruitmentCapabilities,
  recruitmentCta,
  recruitmentHero,
  recruitmentIntro,
} from "@/data/solutions/recruitmentPlacement";

export default function RecruitmentPlacementPage() {
  return (
    <main>
      <Header />
      <RecruitmentHero {...recruitmentHero} />
      <RecruitmentIntro {...recruitmentIntro} />
      <RecruitmentCapabilities {...recruitmentCapabilities} />
      <RecruitmentBenefits {...recruitmentBenefits} />
      <RecruitmentCta {...recruitmentCta} />
      <Footer />
    </main>
  );
}