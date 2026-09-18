import {
  Approach,
  Hero,
  Industries,
  Opportunities,
  Reviews,
  Services,
  Stats,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Approach />
      <Industries />
      <Opportunities />
      <Reviews />
    </main>
  );
}
