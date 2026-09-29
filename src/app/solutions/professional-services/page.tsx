import { Footer, Header } from "@/components/landing";
import {
  ProfessionalBenefits,
  ProfessionalCapabilities,
  ProfessionalCta,
  ProfessionalHero,
  ProfessionalIntro,
} from "@/components/solutions/professional";
import {
  professionalBenefits,
  professionalCapabilities,
  professionalCta,
  professionalHero,
  professionalIntro,
} from "@/data/solutions/professionalServices";

export default function ProfessionalServicesPage() {
  return (
    <main>
      <Header />
      <ProfessionalHero {...professionalHero} />
      <ProfessionalIntro {...professionalIntro} />
      <ProfessionalCapabilities {...professionalCapabilities} />
      <ProfessionalBenefits {...professionalBenefits} />
      <ProfessionalCta {...professionalCta} />
      <Footer />
    </main>
  );
}