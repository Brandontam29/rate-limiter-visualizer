import Icon from "@/components/atoms/Icon";
import Transition from "@/components/atoms/Transition";
import cxtw from "@/utils/cxtw";
import isHookFormError from "@/utils/isHookFormError";
import { Listbox } from "@headlessui/react";
import { useMemo, useState } from "react";
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";

type SelectProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  options: { label: string; value: string | number | boolean }[];
  label: string;
  helpText?: string;
};
const Select = <T extends FieldValues>({
  form,
  name,
  options,
  label,
  helpText,
}: SelectProps<T>) => {
  const [optionLabel, setOptionLabel] = useState(
    options.find((o) => o.value === form.formState.defaultValues?.[name])
      ?.label || null
  );
  const isError = useMemo(
    () => isHookFormError(form.formState.errors, name),
    [name, form.formState.errors]
  );

  return (
    <div>
      <label className="block mb-1" htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Listbox
            value={field.value}
            onChange={(option) => {
              setOptionLabel(option.label);
              field.onChange(option.value);
            }}
          >
            {({ open }) => (
              <>
                <Listbox.Button
                  className={cxtw(
                    "flex min-w-[128px] items-center justify-between rounded px-2 py-1.5 ring-1 ring-inset ring-input-border",
                    "focus:ring-2 focus:ring-input-border-focus"
                  )}
                >
                  <span className="mr-2 truncate">
                    {optionLabel || "Choose an option"}
                  </span>
                  <Icon name="ChevronDownIcon" size="size-4" />
                </Listbox.Button>
                <Transition.Fade show={open}>
                  <Listbox.Options className="absolute bg-white divide-y divide-y-gray-200">
                    {options.map((option) => {
                      const selected = optionLabel === option.label;

                      return (
                        <Listbox.Option
                          key={option.label}
                          value={option}
                          className="text-gray-900 relative cursor-default select-none py-2 pl-4 pr-10 hover:bg-amber-100 hover:text-amber-900"
                        >
                          <span
                            className={cxtw(
                              "block truncate",
                              selected ? "font-medium" : "font-normal"
                            )}
                          >
                            {option.label}
                          </span>
                          {selected && (
                            <Icon
                              name="CheckIcon"
                              size="size-4.5"
                              className="absolute right-2 top-1/2 -translate-y-1/2"
                            />
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition.Fade>
              </>
            )}
          </Listbox>
        )}
      />
      {isError && (
        <p className="text-error-text">
          {(form.formState.errors?.[name]?.message as string) || ""}
        </p>
      )}
      {helpText && !isError && <p className="text-text-minor">{helpText}</p>}
    </div>
  );
};

export default Select;
