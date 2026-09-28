import type { Metadata } from 'next';
import { Footer, Header } from '@/components/landing';
import {
  IndustryHero,
  IndustryOverview,
  IndustrySolutions,
  IndustryAreas,
  IndustryFuture,
  IndustryWhyKalycor,
  IndustryCTA,
} from '@/components/industries/shared';
import { getIndustryData } from '@/services/siteService';
import { site } from '@/config/site';

const data = getIndustryData('agriculture');

export const metadata: Metadata = {
  title: `${data.metaTitle} | ${site.name}`,
  description: data.metaDescription,
  openGraph: {
    title: `${data.metaTitle} | ${site.name}`,
    description: data.metaDescription,
    type: 'website',
  },
};

export default function AgriculturePage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero hero={data.hero} />
        <IndustryOverview overview={data.overview} />
        <IndustrySolutions solutions={data.solutions} />
        <IndustryAreas areas={data.areas} />
        <IndustryFuture future={data.future} />
        <IndustryWhyKalycor whyKalycor={data.whyKalycor} />
        <IndustryCTA cta={data.cta} />
      </main>
      <Footer />
    </>
  );
}
