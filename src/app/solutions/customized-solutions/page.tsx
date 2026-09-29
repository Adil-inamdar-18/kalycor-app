import { Footer, Header } from "@/components/landing";
import {
  CustomizedBenefits,
  CustomizedCapabilities,
  CustomizedCta,
  CustomizedHero,
  CustomizedIntro,
} from "@/components/solutions/customized";
import {
  customizedBenefits,
  customizedCapabilities,
  customizedCta,
  customizedHero,
  customizedIntro,
} from "@/data/solutions/customizedSolutions";

export default function CustomizedSolutionsPage() {
  return (
    <main>
      <Header />
      <CustomizedHero {...customizedHero} />
      <CustomizedIntro {...customizedIntro} />
      <CustomizedCapabilities {...customizedCapabilities} />
      <CustomizedBenefits {...customizedBenefits} />
      <CustomizedCta {...customizedCta} />
      <Footer />
    </main>
  );
}