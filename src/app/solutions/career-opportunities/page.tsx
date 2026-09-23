import { Footer, Header } from "@/components/landing";
import CareerBenefits from "@/components/solutions/career/CareerBenefits";
import CareerCapabilities from "@/components/solutions/career/CareerCapabilities";
import CareerCta from "@/components/solutions/career/CareerCta";
import CareerHero from "@/components/solutions/career/CareerHero";
import CareerIntro from "@/components/solutions/career/CareerIntro";

export default function CareerOpportunitiesPage() {
  return (
    <main>
        <Header/>
      <CareerHero />
      <CareerIntro />
      <CareerCapabilities />
      <CareerBenefits />
      <CareerCta />
      <Footer/>
    </main>
  );
}