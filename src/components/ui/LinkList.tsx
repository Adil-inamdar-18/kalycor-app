import Link from "next/link";
import type { LinkItem } from "@/types";
import { cn } from "@/lib/utils";

export interface LinkListProps {
  links: readonly LinkItem[];
  className?: string;
  itemClassName?: string;
  linkClassName?: string;

  onNavigate?: () => void;
}

export function LinkList({
  links,
  className,
  itemClassName,
  linkClassName,
  onNavigate,
}: LinkListProps) {
  return (
    <ul className={cn("list-none", className)}>
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`} className={itemClassName}>
          {link.external ? (
            <a
              href={link.href}
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className={linkClassName}
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
