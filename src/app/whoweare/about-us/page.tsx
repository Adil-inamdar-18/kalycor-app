import { Footer, Header } from "@/components/landing";
import {
  AboutCta,
  AboutCulture,
  AboutHero,
  AboutIntro,
  AboutMission,
  AboutServices,
  AboutStatement,
  AboutStory,
  AboutValues,
} from "@/components/whoweare/about";
import {
  aboutCta,
  aboutCulture,
  aboutHero,
  aboutIntro,
  aboutMission,
  aboutServices,
  aboutStatement,
  aboutStory,
  aboutValues,
} from "@/data/aboutUs";

export default function AboutUsPage() {
  return (
    <main>
      <Header />
      <AboutHero {...aboutHero} />
      <AboutIntro {...aboutIntro} />
      <AboutStory {...aboutStory} />
      <AboutStatement {...aboutStatement} />
      <AboutServices {...aboutServices} />
      <AboutValues {...aboutValues} />
      <AboutCulture {...aboutCulture} />
      <AboutCta {...aboutCta} />
      <AboutMission {...aboutMission} />
      <Footer />
    </main>
  );
}