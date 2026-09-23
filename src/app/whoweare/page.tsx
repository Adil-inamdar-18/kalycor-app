import { Footer, Header } from "@/components/landing";
import WhoWeAreApproach from "@/components/whoweare/WhoWeAreApproach";
import WhoWeAreCta from "@/components/whoweare/WhoWeAreCta";
import WhoWeAreHero from "@/components/whoweare/WhoWeAreHero";
import WhoWeAreIntro from "@/components/whoweare/WhoWeAreIntro";
import WhoWeAreLinks from "@/components/whoweare/WhoWeAreLinks";

export default function WhoWeArePage() {
  return (
    <main>
      <Header />
      <WhoWeAreHero />
      <WhoWeAreIntro />
      <WhoWeAreLinks />
      <WhoWeAreApproach />
      <WhoWeAreCta />
      <Footer />
    </main>
  );
}
