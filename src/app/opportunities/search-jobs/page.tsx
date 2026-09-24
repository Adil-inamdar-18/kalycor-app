import { Footer, Header } from "@/components/landing";
import SearchJobsBenefits from "@/components/opportunities/search-jobs/SearchJobsBenefits";
import SearchJobsCta from "@/components/opportunities/search-jobs/SearchJobsCta";
import SearchJobsHero from "@/components/opportunities/search-jobs/SearchJobsHero";
import SearchJobsIntro from "@/components/opportunities/search-jobs/SearchJobsIntro";
import SearchJobsProcess from "@/components/opportunities/search-jobs/SearchJobsProcess";

export default function SearchJobsPage() {
  return (
    <main>
      <Header />
      <SearchJobsHero />
      <SearchJobsIntro />
      <SearchJobsProcess />
      <SearchJobsBenefits />
      <SearchJobsCta />
      <Footer />
    </main>
  );
}
