import { Footer, Header } from "@/components/landing";
import {
  AboutCta,
  AboutHero,
  AboutIntro,
  AboutJourney,
  AboutLeadership,
  AboutMilestones,
  AboutMissionVision,
  AboutServices,
  AboutStory,
  AboutSubnav,
  AboutValues,
} from "@/components/whoweare/about";
import {
  aboutCta,
  aboutHero,
  aboutIntro,
  aboutJourney,
  aboutLeadership,
  aboutMilestones,
  aboutMissionVision,
  aboutServices,
  aboutStory,
  aboutValues,
} from "@/data/aboutUs";

/**
 * About Us is a company-story page: it reads top to bottom as
 * who we are → why we exist → what we believe → how we got here →
 * where we stand → who leads us → what we do.
 */
export default function AboutUsPage() {
  return (
    <main>
      <Header />
      <AboutHero {...aboutHero} />
      <AboutIntro {...aboutIntro} />
      <AboutSubnav />
      <AboutStory {...aboutStory} />
      <AboutMissionVision {...aboutMissionVision} />
      <AboutValues {...aboutValues} />
      <AboutJourney {...aboutJourney} />
      <AboutMilestones {...aboutMilestones} />
      <AboutLeadership {...aboutLeadership} />
      <AboutServices {...aboutServices} />
      <AboutCta {...aboutCta} />
      <Footer />
    </main>
  );
}
