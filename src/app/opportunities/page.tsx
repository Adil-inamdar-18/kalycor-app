import { Footer, Header } from "@/components/landing";
import OpportunitiesAreas from "@/components/opportunities/OpportunitiesAreas";
import OpportunitiesBenefits from "@/components/opportunities/OpportunitiesBenefits";
import OpportunitiesCta from "@/components/opportunities/OpportunitiesCta";
import OpportunitiesHero from "@/components/opportunities/OpportunitiesHero";
import OpportunitiesIntro from "@/components/opportunities/OpportunitiesIntro";

export default function OpportunitiesPage() {
  return (
    <main>
      <Header />
      <OpportunitiesHero />
      <OpportunitiesIntro />
      <OpportunitiesAreas />
      <OpportunitiesBenefits />
      <OpportunitiesCta />
      <Footer />
    </main>
  );
}
