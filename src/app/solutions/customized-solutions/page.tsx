import { Footer, Header } from "@/components/landing";
import CustomizedBenefits from "@/components/solutions/customized/CustomizedBenefits";
import CustomizedCapabilities from "@/components/solutions/customized/CustomizedCapabilities";
import CustomizedCta from "@/components/solutions/customized/CustomizedCta";
import CustomizedHero from "@/components/solutions/customized/CustomizedHero";
import CustomizedIntro from "@/components/solutions/customized/CustomizedIntro";

export default function CustomizedSolutionsPage() {
  return (
    <main>
      <Header />
      <CustomizedHero />
      <CustomizedIntro />
      <CustomizedCapabilities />
      <CustomizedBenefits />
      <CustomizedCta />
      <Footer />
    </main>
  );
}
