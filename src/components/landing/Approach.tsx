import Image from 'next/image';
import { getLandingData } from '@/services/siteService';
import type { ApproachPhoto } from '@/types';
import { cn } from '@/lib/utils';

function Photo({ photo }: { photo: ApproachPhoto }) {
  return (
    <div
      className={cn(
        'relative z-[2] order-2 w-full overflow-hidden rounded-media border border-teal-700/[0.08] bg-white shadow-photo',
        photo.position
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className="block h-full w-full object-cover"
      />
    </div>
  );
}

/** Editorial photo composition: stacked on mobile, a collage from 781px up. */
export function Approach() {
  const { approachCopy, approachPhotos } = getLandingData();
  const [p1, p2, p3, p4] = approachPhotos;

  return (
    <section
      id="our-approach"
      className="relative overflow-hidden bg-white py-[70px] text-navy-950 tp:pb-[100px] tp:pt-[110px]"
    >
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-[22px] px-6 tp:block tp:min-h-[760px] tp:px-0 tp:before:pointer-events-none tp:before:absolute tp:before:left-1/2 tp:before:top-[-110px] tp:before:h-[300px] tp:before:w-px tp:before:-translate-x-1/2 tp:before:border-l tp:before:border-dashed tp:before:border-teal-700/55 tp:before:content-[''] tp:after:pointer-events-none tp:after:absolute tp:after:bottom-[-100px] tp:after:left-1/2 tp:after:h-[240px] tp:after:w-px tp:after:-translate-x-1/2 tp:after:border-l tp:after:border-dashed tp:after:border-teal-700/55 tp:after:content-[''] dl:min-h-[700px]">
        <Photo photo={p1} />
        <Photo photo={p2} />

        <div className="relative z-[3] order-1 w-full text-center tp:absolute tp:left-1/2 tp:top-[245px] tp:w-[54vw] tp:-translate-x-1/2 dl:top-[250px] dl:w-[min(760px,58vw)]">
          <div className="mb-3.5 font-heading text-kicker font-semibold text-navy-900">
            {approachCopy.kicker}
          </div>
          <h2 className="mx-auto mb-[22px] font-editorial text-[clamp(38px,9vw,52px)] font-medium leading-[0.98] tracking-[-0.035em] text-navy-900 tp:text-[clamp(42px,4.1vw,62px)]">
            {approachCopy.heading}
          </h2>
          <p className="mx-auto max-w-[780px] text-small leading-[1.38] text-sky-700 tp:text-body-sm">
            {approachCopy.body}
          </p>
        </div>

        <Photo photo={p3} />
        <Photo photo={p4} />
      </div>
    </section>
  );
}

export default Approach;
