import { Footer, Header } from "@/components/landing";
import DiversityCommitment from "@/components/whoweare/diversity/DiversityCommitment";
import DiversityCta from "@/components/whoweare/diversity/DiversityCta";
import DiversityHero from "@/components/whoweare/diversity/DiversityHero";
import DiversityIntro from "@/components/whoweare/diversity/DiversityIntro";
import DiversityWorkplace from "@/components/whoweare/diversity/DiversityWorkplace";

export default function DiversityInclusionPage() {
  return (
    <main>
        <Header/>
      <DiversityHero />
      <DiversityIntro />
      <DiversityCommitment />
      <DiversityWorkplace />
      <DiversityCta />
      <Footer/>
    </main>
  );
}