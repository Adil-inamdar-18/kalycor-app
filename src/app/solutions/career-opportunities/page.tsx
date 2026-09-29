import { Footer, Header } from "@/components/landing";
import {
  CareerBenefits,
  CareerCapabilities,
  CareerCta,
  CareerHero,
  CareerIntro,
} from "@/components/solutions/career";
import {
  careerBenefits,
  careerCapabilities,
  careerCta,
  careerHero,
  careerIntro,
} from "@/data/solutions/careerOpportunities";

export default function CareerOpportunitiesPage() {
  return (
    <main>
      <Header />
      <CareerHero {...careerHero} />
      <CareerIntro {...careerIntro} />
      <CareerCapabilities {...careerCapabilities} />
      <CareerBenefits {...careerBenefits} />
      <CareerCta {...careerCta} />
      <Footer />
    </main>
  );
}