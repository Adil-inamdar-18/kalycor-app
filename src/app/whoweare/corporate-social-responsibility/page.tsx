import { Footer, Header } from "@/components/landing";
import CsrCta from "@/components/whoweare/csr/CsrCta";
import CsrFocus from "@/components/whoweare/csr/CsrFocus";
import CsrHero from "@/components/whoweare/csr/CsrHero";
import CsrImpact from "@/components/whoweare/csr/CsrImpact";
import CsrIntro from "@/components/whoweare/csr/CsrIntro";

export default function CorporateSocialResponsibilityPage() {
  return (
    <main>
      <Header />
      <CsrHero />
      <CsrIntro />
      <CsrFocus />
      <CsrImpact />
      <CsrCta />
      <Footer />
    </main>
  );
}
