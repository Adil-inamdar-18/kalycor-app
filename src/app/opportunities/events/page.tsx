import { Footer, Header } from "@/components/landing";
import EventsAreas from "@/components/opportunities/events/EventsAreas";
import EventsBenefits from "@/components/opportunities/events/EventsBenefits";
import EventsCta from "@/components/opportunities/events/EventsCta";
import EventsHero from "@/components/opportunities/events/EventsHero";
import EventsIntro from "@/components/opportunities/events/EventsIntro";

export default function EventsPage() {
  return (
    <main>
      <Header />
      <EventsHero />
      <EventsIntro />
      <EventsAreas />
      <EventsBenefits />
      <EventsCta />
      <Footer />
    </main>
  );
}
