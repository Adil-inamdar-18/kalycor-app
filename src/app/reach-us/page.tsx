import { Footer, Header } from '@/components/landing';
import { ReachUsHero } from '@/components/reach-us/ReachUsHero';
import { ReferCandidateSection } from '@/components/reach-us/ReferCandidateSection';
import { reachUsPage } from '@/data/reach-us';

export default function ReachUsPage() {
  return (
    <main>
        <Header/>
      <ReachUsHero hero={reachUsPage.hero} />
      <ReferCandidateSection />
      <Footer/>
    </main>
  );
}