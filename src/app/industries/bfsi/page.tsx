import type { Metadata } from 'next';
import { Footer, Header } from '@/components/landing';
import {
  IndustryHero,
  IndustryStats,
  IndustryOverview,
  IndustryProcess,
  IndustryAreas,
  IndustryWhyKalycor,
  IndustryFAQ,
} from '@/components/industries/shared';
import { getIndustryData } from '@/services/siteService';
import { site } from '@/config/site';

const data = getIndustryData('bfsi');

export const metadata: Metadata = {
  title: `${data.metaTitle} | ${site.name}`,
  description: data.metaDescription,
  openGraph: {
    title: `${data.metaTitle} | ${site.name}`,
    description: data.metaDescription,
    type: 'website',
  },
};

export default function BfsiPage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero hero={data.hero} />
        <IndustryStats stats={data.stats} />
        <IndustryOverview overview={data.overview} />
        <IndustryProcess process={data.process} />
        <IndustryAreas areas={data.areas} />
        <div className="pb-4 pt-12 lg:pt-16">
          <IndustryStats stats={data.successStories} />
        </div>
        <IndustryWhyKalycor whyKalycor={data.whyKalycor} />
        <IndustryFAQ faq={data.faq} />
      </main>
      <Footer />
    </>
  );
}
