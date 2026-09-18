import { getJobsData } from '@/services/siteService';
import type { JobType } from '@/types';

export interface FilterSidebarProps {
  selectedTypes: readonly JobType[];
  selectedLocations: readonly string[];
  onTypesChange: (next: JobType[]) => void;
  onLocationsChange: (next: string[]) => void;
  onClear: () => void;
}

function toggleValue<T>(list: readonly T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

const optionClass =
  'mb-[11px] flex cursor-pointer items-center gap-2.5 text-small text-muted last:mb-0';
const checkboxClass = 'h-4 w-4 accent-primary';

export function FilterSidebar({
  selectedTypes,
  selectedLocations,
  onTypesChange,
  onLocationsChange,
  onClear,
}: FilterSidebarProps) {
  const { jobTypeOptions, locationOptions } = getJobsData();
  return (
    <aside className="static rounded-card border border-line bg-white p-6 shadow-raised ts:sticky ts:top-[105px]">
      <div className="flex items-center justify-between border-b border-line pb-5">
        <h3 className="text-[19px] font-semibold">Filters</h3>
        <button
          type="button"
          onClick={onClear}
          className="border-0 bg-transparent text-caption font-semibold text-primary"
        >
          Clear all
        </button>
      </div>

      <div className="border-b border-line-soft py-[22px]">
        <h4 className="mb-[15px] text-small font-semibold text-heading">Job Type</h4>
        {jobTypeOptions.map((option) => (
          <label className={optionClass} key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedTypes.includes(option)}
              onChange={() => onTypesChange(toggleValue(selectedTypes, option))}
              className={checkboxClass}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="py-[22px]">
        <h4 className="mb-[15px] text-small font-semibold text-heading">Location</h4>
        {locationOptions.map((option) => (
          <label className={optionClass} key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedLocations.includes(option)}
              onChange={() => onLocationsChange(toggleValue(selectedLocations, option))}
              className={checkboxClass}
            />
            {option}
          </label>
        ))}
      </div>
    </aside>
  );
}

export default FilterSidebar;
