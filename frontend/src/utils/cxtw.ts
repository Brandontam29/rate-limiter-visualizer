import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cxtw = (...classNames: any) => {
  const mergedClassNames = twMerge(classNames);
  return clsx(mergedClassNames);
};

export default cxtw;
