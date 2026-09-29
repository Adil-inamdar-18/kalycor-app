'use client';

import { useEffect, useRef } from 'react';

interface ArticleProgressProps {
  /** id of the element whose reading progress is shown. */
  targetId: string;
}

/** Thin reading-progress bar pinned under the site header. */
export default function ArticleProgress({ targetId }: ArticleProgressProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    const bar = barRef.current;
    if (!target || !bar) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = target.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight * 0.6;
      const read = -rect.top + window.innerHeight * 0.2;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, read / scrollable)) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [targetId]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-[76px] z-[150] h-1 bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-accent"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
