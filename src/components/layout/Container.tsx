import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;

  size?: "default" | "wide" | "narrow";
}

const sizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "max-w-container",
  wide: "max-w-[1380px]",
  narrow: "max-w-3xl",
};

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-[calc(100%-2*var(--container-gutter))] px-container-pad",
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;
