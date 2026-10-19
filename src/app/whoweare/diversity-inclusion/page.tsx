import { Footer, Header } from "@/components/landing";
import DiversityBelonging from "@/components/whoweare/diversity/DiversityBelonging";
import DiversityCta from "@/components/whoweare/diversity/DiversityCta";
import DiversityHero from "@/components/whoweare/diversity/DiversityHero";
import DiversityInitiatives from "@/components/whoweare/diversity/DiversityInitiatives";
import DiversityPillars from "@/components/whoweare/diversity/DiversityPillars";
import DiversityProgress from "@/components/whoweare/diversity/DiversityProgress";

export default function DiversityInclusionPage() {
  return (
    <main>
      <Header />
      <DiversityHero />
      <DiversityBelonging />
      <DiversityPillars />
      <DiversityInitiatives />
      <DiversityProgress />
      <DiversityCta />
      <Footer />
    </main>
  );
}
