import { Footer, Header } from "@/components/landing";
import ProfessionalBenefits from "@/components/solutions/professional/ProfessionalBenefits";
import ProfessionalCapabilities from "@/components/solutions/professional/ProfessionalCapabilities";
import ProfessionalCta from "@/components/solutions/professional/ProfessionalCta";
import ProfessionalHero from "@/components/solutions/professional/ProfessionalHero";
import ProfessionalIntro from "@/components/solutions/professional/ProfessionalIntro";

export default function ProfessionalServicesPage() {
  return (
    <main>
      <Header />
      <ProfessionalHero />
      <ProfessionalIntro />
      <ProfessionalCapabilities />
      <ProfessionalBenefits />
      <ProfessionalCta />
      <Footer />
    </main>
  );
}
