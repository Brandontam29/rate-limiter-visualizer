import isHookFormError from "@/utils/isHookFormError";
import { ErrorMessage } from "@hookform/error-message";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputTextProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  helpText?: string;
};

const input = cva(
  "block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6 shadow-sm",
  {
    variants: {
      isError: {
        ["true"]: [
          "text-error-text ring-1 ring-inset ring-error-border-highlight",
          "placeholder:text-error-text-minor",
          "focus:ring-2 focus:ring-inset focus:ring-error-border-focus",
        ],
        ["false"]: [
          "text-text-body ring-1 ring-inset ring-input-border",
          "placeholder:text-text-minor",
          "focus:ring-2 focus:ring-inset focus:ring-input-border-focus",
        ],
      },
    },
  }
);

const InputText = <T extends FieldValues>({
  label,
  register,
  name,
  errors = {},
  disabled,
  placeholder,
  helpText,
}: InputTextProps<T>) => {
  const isError = useMemo(() => isHookFormError(errors, name), [name, errors]);

  return (
    <div>
      <label className="block mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type="text"
        {...register(name)}
        disabled={disabled}
        placeholder={placeholder}
        className={input({ isError: isError })}
      />

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

export default InputText;
