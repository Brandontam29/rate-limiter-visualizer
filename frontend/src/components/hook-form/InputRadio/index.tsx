import isHookFormError from "@/utils/isHookFormError";
import { ErrorMessage } from "@hookform/error-message";
import { useMemo } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type Option = {
  label: string;
  value: string | number;
};

export type InputRadioProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors;
  label: string;
  options: Option[];
  disabled?: boolean;
  helpText?: string;
  registerOptions?: Parameters<UseFormRegister<T>>[1];
};

const InputRadio = <T extends FieldValues>({
  label,
  register,
  options,
  name,
  errors = {},
  disabled,
  helpText,
  registerOptions,
}: InputRadioProps<T>) => {
  const isError = useMemo(() => isHookFormError(errors, name), [name, errors]);

  return (
    <div>
      <label className="text-base font-semibold text-gray-50">{label}</label>

      <fieldset disabled={disabled}>
        <legend className="sr-only">{label}</legend>
        <div className="space-y-4">
          {options.map((option, i) => (
            <div
              key={name + option.value + option.label}
              className="flex items-center"
            >
              <input
                type="radio"
                value={option.value}
                id={option.label}
                {...register(name, registerOptions)}
                className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300"
              />
              <label
                htmlFor={option.label}
                className="ml-3 block text-sm font-medium text-gray-50"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <ErrorMessage
        errors={errors}
        name={name}
        message="This is required"
        render={({ message }) => {
          return <p className="text-error-text">{message}</p>;
        }}
      />
      {!isError && helpText && <p className="text-text-minor">{helpText}</p>}
    </div>
  );
};

export default InputRadio;
