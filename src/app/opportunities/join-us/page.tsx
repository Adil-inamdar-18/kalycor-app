import { Footer, Header } from "@/components/landing";
import JoinUsBenefits from "@/components/opportunities/join-us/JoinUsBenefits";
import JoinUsCta from "@/components/opportunities/join-us/JoinUsCta";
import JoinUsHero from "@/components/opportunities/join-us/JoinUsHero";
import JoinUsIntro from "@/components/opportunities/join-us/JoinUsIntro";
import JoinUsValues from "@/components/opportunities/join-us/JoinUsValues";

export default function JoinUsPage() {
  return (
    <main>
        <Header/>
      <JoinUsHero />
      <JoinUsIntro />
      <JoinUsValues />
      <JoinUsBenefits />
      <JoinUsCta />
      <Footer/>
    </main>
  );
}