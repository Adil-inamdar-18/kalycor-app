import { Footer, Header } from "@/components/landing";
import CsrCta from "@/components/whoweare/csr/CsrCta";
import CsrFocusAreas from "@/components/whoweare/csr/CsrFocusAreas";
import CsrHero from "@/components/whoweare/csr/CsrHero";
import CsrInvolved from "@/components/whoweare/csr/CsrInvolved";
import CsrPurpose from "@/components/whoweare/csr/CsrPurpose";
import CsrSustainability from "@/components/whoweare/csr/CsrSustainability";

/**
 * CSR is an impact-report page: headline KPIs first, then each focus area
 * with its initiatives and outcome, sustainability progress against
 * targets, and ways to get involved.
 */
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
