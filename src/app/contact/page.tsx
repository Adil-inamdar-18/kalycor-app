import { ContactHero } from "@/components/contact/ContactHero";
import { ContactOffices } from "@/components/contact/ContactOffices";
import { ContactReachUs } from "@/components/contact/ContactReachUs";
import { Footer, Header } from "@/components/landing";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactOffices />
      <ContactReachUs />
      <Footer />
    </main>
  );
}
