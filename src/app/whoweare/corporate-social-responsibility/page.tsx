import { Footer, Header } from "@/components/landing";
import CsrCta from "@/components/whoweare/csr/CsrCta";
import CsrFocusAreas from "@/components/whoweare/csr/CsrFocusAreas";
import CsrHero from "@/components/whoweare/csr/CsrHero";
import CsrInvolved from "@/components/whoweare/csr/CsrInvolved";
import CsrPurpose from "@/components/whoweare/csr/CsrPurpose";
import CsrSustainability from "@/components/whoweare/csr/CsrSustainability";

export default function CorporateSocialResponsibilityPage() {
  return (
    <main>
      <Header />
      <CsrHero />
      <CsrPurpose />
      <CsrFocusAreas />
      <CsrSustainability />
      <CsrInvolved />
      <CsrCta />
      <Footer />
    </main>
  );
}
