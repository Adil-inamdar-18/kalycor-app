import { Button, type ButtonSize } from "@/components/ui";
import { site } from "@/config/site";
import type { LinkItem } from "@/types";

export interface CtaPairProps {
  size?: ButtonSize;
  className?: string;
  onNavigate?: () => void;
  primary?: LinkItem;
  secondary?: LinkItem;
}

export function CtaPair({
  size = "md",
  className,
  onNavigate,
  primary = site.ctas.findJob,
  secondary = site.ctas.hireTalent,
}: CtaPairProps) {
  return (
    <div className={className}>
      <Button
        href={secondary.href}
        variant="outline"
        size={size}
        onClick={onNavigate}
      >
        {secondary.label}
      </Button>
      <Button
        href={primary.href}
        variant="solid"
        size={size}
        onClick={onNavigate}
      >
        {primary.label}
      </Button>
    </div>
  );
}

export default CtaPair;
