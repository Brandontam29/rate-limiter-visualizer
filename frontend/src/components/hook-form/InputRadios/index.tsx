import isHookFormError from "@/utils/isHookFormError";
import { HTMLProps, useMemo } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type Option = {
  label: string;
  value: string | number;
};

type ManualProps<T extends FieldValues> = {
  name: Path<T>;
  form: UseFormReturn<T>;
  label: string;
  options: Option[];
  helpText?: string;
};

export type InputRadioProps<T extends FieldValues> = ManualProps<T> &
  Omit<HTMLProps<HTMLFieldSetElement>, keyof ManualProps<T> | "className">;

const InputRadios = <T extends FieldValues>({
  form,
  name,
  options,
  label,
  helpText,
  ...props
}: InputRadioProps<T>) => {
  const isError = useMemo(
    () => isHookFormError(form.formState.errors, name),
    [name, form.formState.errors]
  );

  return (
    <div>
      <label className="text-base font-semibold text-gray-900">{label}</label>

      <fieldset {...props}>
        <legend className="sr-only">{label}</legend>
        <div className="space-y-4">
          {options.map((option) => (
            <div
              key={name + option.value + option.label}
              className="flex items-center"
            >
              <input
                {...form.register(name)}
                type="radio"
                value={option.value}
                id={option.label}
                className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300"
              />
              <label
                htmlFor={option.label}
                className="ml-3 block text-sm font-medium text-gray-900"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      {isError && (
        <p className="text-error-text">
          {(form.formState.errors?.[name]?.message as string) || ""}
        </p>
      )}
      {!isError && helpText && <p className="text-text-minor">{helpText}</p>}
    </div>
  );
};

export default InputRadios;
