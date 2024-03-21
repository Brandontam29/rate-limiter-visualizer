import cxtw from "@/utils/cxtw";
import * as icons from "@heroicons/react/24/outline";
import { memo } from "react";

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
  /**
   * Size of the icon
   * @default 'size-6'
   */
  size?: Size;
};

export type Size =
  | "size-3"
  | "size-4"
  | "size-4.5"
  | "size-6"
  | "size-9"
  | "size-12";

const Icon = ({ name, size = "size-6", className }: IconProps) => {
  const Component = icons[name];

  return <Component className={cxtw("inline-block", size, className)} />;
};

export default memo(Icon);
