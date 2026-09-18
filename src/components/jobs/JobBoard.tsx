'use client';

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Container } from '@/components/layout';
import { getJobsData } from '@/services/siteService';
import type { JobType, SortKey } from '@/types';
import { anchors } from '@/config/routes';
import Hero from './Hero';
import TrendingSearches from './TrendingSearches';
import FilterSidebar from './FilterSidebar';
import JobList from './JobList';
import Pagination from './Pagination';

const PER_PAGE = 6;

function scrollToJobs() {
  document
    .getElementById(anchors.jobs.jobs.slice(1))
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function JobBoard() {
  const { jobs, sortOptions } = getJobsData();
  // Hero search inputs (what's typed) vs. applied search terms (what's
  // actually filtered on) are kept separate, matching the original behaviour:
  // typing in the hero fields doesn't filter live — only submitting does.
  const [keywordInput, setKeywordInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [appliedKeyword, setAppliedKeyword] = useState('');
  const [appliedLocation, setAppliedLocation] = useState('');

  const [selectedTypes, setSelectedTypes] = useState<JobType[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState<SortKey>('latest');
  const [page, setPage] = useState(1);

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    const keyword = appliedKeyword.trim().toLowerCase();
    if (keyword) {
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword) ||
          job.company.toLowerCase().includes(keyword) ||
          job.category.toLowerCase().includes(keyword)
      );
    }

    const location = appliedLocation.trim().toLowerCase();
    if (location) {
      result = result.filter((job) => job.location.toLowerCase().includes(location));
    }

    if (selectedTypes.length) {
      result = result.filter((job) => selectedTypes.includes(job.type));
    }

    if (selectedLocations.length) {
      result = result.filter((job) => selectedLocations.includes(job.location));
    }

    if (category) {
      result = result.filter((job) =>
        job.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    const time = (value: string) => new Date(value).getTime();
    if (sort === 'latest') {
      result.sort((a, b) => time(b.date) - time(a.date));
    } else if (sort === 'oldest') {
      result.sort((a, b) => time(a.date) - time(b.date));
    } else if (sort === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'company') {
      result.sort((a, b) => a.company.localeCompare(b.company));
    }

    return result;
  }, [appliedKeyword, appliedLocation, selectedTypes, selectedLocations, category, sort]);

  const total = filteredJobs.length;
  const totalPages = Math.ceil(total / PER_PAGE);

  // Keep the current page in range if filtering shrinks the result set.
  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const safePage = totalPages > 0 ? Math.min(page, totalPages) : 1;
  const start = (safePage - 1) * PER_PAGE;
  const visibleJobs = filteredJobs.slice(start, start + PER_PAGE);

  function resetSearchAndFilters() {
    setKeywordInput('');
    setLocationInput('');
    setAppliedKeyword('');
    setAppliedLocation('');
    setSelectedTypes([]);
    setSelectedLocations([]);
  }

  function handleHeroSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAppliedKeyword(keywordInput);
    setAppliedLocation(locationInput);
    setCategory('');
    setSelectedTypes([]);
    setSelectedLocations([]);
    setPage(1);
    scrollToJobs();
  }

  function handleSelectCategory(selectedCategory: string) {
    resetSearchAndFilters();
    setCategory(selectedCategory);
    setPage(1);
    scrollToJobs();
  }

  function handleClearFilters() {
    resetSearchAndFilters();
    setCategory('');
    setSort('latest');
    setPage(1);
  }

  function handlePageChange(nextPage: number) {
    setPage(nextPage);
    scrollToJobs();
  }

  return (
    <>
      <Hero
        keyword={keywordInput}
        location={locationInput}
        onKeywordChange={setKeywordInput}
        onLocationChange={setLocationInput}
        onSubmit={handleHeroSubmit}
      />

      <TrendingSearches onSelectCategory={handleSelectCategory} />

      <section
        id={anchors.jobs.jobs.slice(1)}
        className="bg-background pb-[70px] pt-[55px] sm:pb-[100px] sm:pt-[72px]"
      >
        <Container>
          <div className="mb-[38px]">
            <h2 className="text-[31px] font-medium leading-[1.15] tracking-[-1px] text-heading sm:text-[38px]">
              Explore Opportunities
            </h2>
            <p className="mt-2.5 text-body-sm text-muted">
              Discover roles that match your skills, experience and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-7 ts:grid-cols-[240px_minmax(0,1fr)] dl:grid-cols-[270px_minmax(0,1fr)]">
            <FilterSidebar
              selectedTypes={selectedTypes}
              selectedLocations={selectedLocations}
              onTypesChange={(next) => {
                setSelectedTypes(next);
                setPage(1);
              }}
              onLocationsChange={(next) => {
                setSelectedLocations(next);
                setPage(1);
              }}
              onClear={handleClearFilters}
            />

            <div>
              <div className="mb-[18px] flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                <div className="text-small text-muted">
                  Showing {total} {total === 1 ? 'job' : 'jobs'}
                </div>
                <div className="flex items-center gap-2.5 text-small text-muted">
                  <label htmlFor="sortSelect">Sort by</label>
                  <select
                    id="sortSelect"
                    value={sort}
                    onChange={(event) => {
                      setSort(event.target.value as SortKey);
                      setPage(1);
                    }}
                    className="min-w-[135px] rounded-sm border border-line bg-white py-[9px] pl-3 pr-[34px] text-paragraph outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {total > 0 ? (
                <>
                  <JobList jobs={visibleJobs} />
                  <Pagination
                    page={safePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <div className="rounded-card border border-line bg-white px-5 py-[60px] text-center">
                  <h3 className="mb-[7px] text-[21px] text-heading">No jobs found</h3>
                  <p className="text-small text-muted">
                    Try changing your search or filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default JobBoard;
