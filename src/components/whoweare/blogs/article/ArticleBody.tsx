import { Check } from 'lucide-react';

import type { BlogBlock } from '@/data/blogs';
import { slugifyHeading } from '@/lib/blog';

interface ArticleBodyProps {
  blocks: readonly BlogBlock[];
}

/**
 * Long-form reading typography: serif body at a comfortable measure,
 * generous leading, pull quotes and check lists.
 */
export default function ArticleBody({ blocks }: ArticleBodyProps) {
  let firstParagraphSeen = false;

  return (
    <div className="space-y-7">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={index}
                id={slugifyHeading(block.text)}
                className="scroll-mt-32 pt-6 font-heading text-[clamp(24px,2.6vw,32px)] font-bold leading-tight tracking-tight text-heading"
              >
                {block.text}
              </h2>
            );

          case 'quote':
            return (
              <blockquote
                key={index}
                className="my-10 border-l-4 border-accent py-2 pl-6 md:-mx-6 md:pl-8"
              >
                <p className="font-display text-[clamp(24px,3vw,34px)] font-medium italic leading-[1.3] text-heading">
                  {block.text}
                </p>
              </blockquote>
            );

          case 'list':
            return (
              <ul key={index} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="font-editorial text-[19px] leading-[1.75] text-paragraph">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case 'p': {
            const isFirst = !firstParagraphSeen;
            firstParagraphSeen = true;

            return (
              <p
                key={index}
                className={
                  'font-editorial text-[19px] leading-[1.85] text-paragraph' +
                  (isFirst
                    ? ' first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[68px] first-letter:font-medium first-letter:leading-[0.8] first-letter:text-accent'
                    : '')
                }
              >
                {block.text}
              </p>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
