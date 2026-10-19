import * as landing from "@/data/landing";
import * as business from "@/data/business";
import * as jobsData from "@/data/jobs";
import { industryPages, type IndustrySlug } from "@/data/industries";
import type { IndustryPage } from "@/types";

export function getLandingData() {
  return landing;
}

export function getBusinessData() {
  return business;
}

export function getJobsData() {
  return jobsData;
}

export function getIndustriesData() {
  return industryPages;
}

export function getIndustryData(slug: IndustrySlug): IndustryPage {
  return industryPages[slug];
}
