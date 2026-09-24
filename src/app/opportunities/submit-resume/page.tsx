import { Footer, Header } from "@/components/landing";
import SubmitResumeBenefits from "@/components/opportunities/submit-resume/SubmitResumeBenefits";
import SubmitResumeCta from "@/components/opportunities/submit-resume/SubmitResumeCta";
import SubmitResumeHero from "@/components/opportunities/submit-resume/SubmitResumeHero";
import SubmitResumeIntro from "@/components/opportunities/submit-resume/SubmitResumeIntro";
import SubmitResumeProcess from "@/components/opportunities/submit-resume/SubmitResumeProcess";

export default function SubmitResumePage() {
  return (
    <main>
      <Header />
      <SubmitResumeHero />
      <SubmitResumeIntro />
      <SubmitResumeProcess />
      <SubmitResumeBenefits />
      <SubmitResumeCta />
      <Footer />
    </main>
  );
}
