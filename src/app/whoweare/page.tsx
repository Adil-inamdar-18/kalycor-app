import { Footer, Header } from "@/components/landing";
import WhoWeAreApproach from "@/components/whoweare/WhoWeAreApproach";
import WhoWeAreCapabilities from "@/components/whoweare/Whowearecapabilities";
import WhoWeAreCta from "@/components/whoweare/WhoWeAreCta";
import WhoWeAreCulture from "@/components/whoweare/Whoweareculture";
import WhoWeAreHero from "@/components/whoweare/WhoWeAreHero";
import WhoWeAreHighlights from "@/components/whoweare/Whowearehighlights";
import WhoWeAreIntro from "@/components/whoweare/WhoWeAreIntro";
import WhoWeAreLinks from "@/components/whoweare/WhoWeAreLinks";
import WhoWeAreStory from "@/components/whoweare/Whowearestory";
import WhoWeAreValues from "@/components/whoweare/Whowearevalues";

export default function WhoWeArePage() {
  return (
    <main>
      <Header />
      <WhoWeAreHero />
      <WhoWeAreIntro />
      <WhoWeAreStory />
      <WhoWeAreHighlights />
      <WhoWeAreCapabilities />
      <WhoWeAreValues />
      <WhoWeAreApproach />
      <WhoWeAreCulture />
      <WhoWeAreLinks />
      <WhoWeAreCta />
      <Footer />
    </main>
  );
}