import { Container } from '@/components/layout';
import { getLandingData } from '@/services/siteService';
import { LinkList } from '@/components/ui';

/** Thin dark bar above the header. Hidden below the nav breakpoint. */
export function UtilityBar() {
  const { utilityLinks } = getLandingData();
  return (
    <div className="hidden bg-inverse text-inverse-fg/85 nav:block">
      <Container
        as="nav"
        className="flex justify-end gap-[22px] py-2 font-heading text-micro"
      >
        <LinkList
          links={utilityLinks}
          className="flex gap-[22px]"
          linkClassName="transition-colors duration-fast hover:text-primary"
        />
      </Container>
    </div>
  );
}

export default UtilityBar;
