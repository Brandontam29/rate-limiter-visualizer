import { Transition } from "@headlessui/react";
import { Fragment } from "react";

type TransitionProps = {
  show?: boolean;
  children: React.ReactNode;
};

const Fade = ({ show = true, children }: TransitionProps) => {
  return (
    <Transition
      show={show}
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};

export default Fade;
