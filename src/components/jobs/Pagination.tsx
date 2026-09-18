import { cn } from '@/lib/utils';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const pageButton =
  'grid h-[38px] min-w-[38px] place-items-center rounded-sm border border-line bg-white px-2.5 text-caption font-medium text-paragraph hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-line disabled:hover:text-paragraph';

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        className={pageButton}
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          aria-current={number === page ? 'page' : undefined}
          onClick={() => onPageChange(number)}
          className={cn(
            pageButton,
            number === page && 'border-primary bg-primary text-primary-fg hover:text-primary-fg'
          )}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        className={pageButton}
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}

export default Pagination;
