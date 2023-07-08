import Icon from "@/components/atoms/Icon";
import Tooltip, { TooltipProps } from "@/components/atoms/Tooltip";
import Transition from "@/components/atoms/Transition";
import isHookFormError from "@/utils/isHookFormError";
import { Listbox } from "@headlessui/react";
import { ErrorMessage } from "@hookform/error-message";
import { cx } from "class-variance-authority";
import { useMemo, useRef } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type SelectProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  options: { label: string; value: string | boolean | number }[];
  register: UseFormRegister<T>;
  tooltip?: TooltipProps;
  helpText?: string;
  errors?: FieldErrors;
};

const Select = <T extends FieldValues>({
  helpText,
  errors = {},
  tooltip,
  label,
  name,
  register,
  options,
}: SelectProps<T>) => {
  const isError = useMemo(() => isHookFormError(errors, name), [name, errors]);
  const hasTooltip = !!tooltip && Object.keys(tooltip).length === 0;

  return (
    <div className="inline-block">
      {(label || hasTooltip) && (
        <div className="mb-1 block space-x-2">
          {label && <label htmlFor={name}>{label}</label>}
          {hasTooltip && <Tooltip {...tooltip} />}
        </div>
      )}
      <Listbox as="div" className="relative">
        {({ open }) => (
          <>
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              {(props) => {
                return (
                  <>
                    <span className="block truncate">
                      {/* {props.value || defaultValue.label} */}

                      {props.value}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
                      <Icon name="ChevronUpDownIcon" size="size-4.5" />
                    </span>
                  </>
                );
              }}
            </Listbox.Button>
            <Transition.Fade show={open}>
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.label}
                    className={({ active }) =>
                      cx(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={option.label}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={cx(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span
                            className={cx(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <Icon name="CheckIcon" size="size-4.5" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition.Fade>
          </>
        )}
      </Listbox>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => {
          return <p className="text-error-text">{message}</p>;
        }}
      />
      {!isError && helpText && <p className="text-text-minor">{helpText}</p>}
    </div>
  );
};

export default Select;
