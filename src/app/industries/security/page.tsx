import type { Metadata } from 'next';
import { Footer, Header } from '@/components/landing';
import {
  IndustryHero,
  IndustryStats,
  IndustryOverview,
  IndustryProcess,
  IndustrySolutions,
  IndustryCaseStudy,
  IndustryAreas,
  IndustryTestimonials,
  IndustryWhyKalycor,
  IndustryFuture,
  IndustryFAQ,
  IndustryCTA,
} from '@/components/industries/shared';
import { getIndustryData } from '@/services/siteService';
import { site } from '@/config/site';

const data = getIndustryData('security');

export const metadata: Metadata = {
  title: `${data.metaTitle} | ${site.name}`,
  description: data.metaDescription,
  openGraph: {
    title: `${data.metaTitle} | ${site.name}`,
    description: data.metaDescription,
    type: 'website',
  },
};

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main>
        <IndustryHero hero={data.hero} />
        <IndustryStats stats={data.stats} />
        <IndustryOverview overview={data.overview} />
        <IndustryProcess process={data.process} />
        {/* <IndustrySolutions solutions={data.solutions} /> */}
        {/* <IndustryCaseStudy caseStudy={data.caseStudy} /> */}
        <IndustryAreas areas={data.areas} />
        <IndustryTestimonials testimonials={data.testimonials} />
        <IndustryWhyKalycor whyKalycor={data.whyKalycor} />
        {/* <IndustryFuture future={data.future} /> */}
        <IndustryFAQ faq={data.faq} />
        {/* <IndustryCTA cta={data.cta} /> */}
      </main>
      <Footer />
    </>
  );
}
