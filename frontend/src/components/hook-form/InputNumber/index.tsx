import isHookFormError from "@/utils/isHookFormError";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type InputNumberProps<T extends FieldValues> = {
  name: Path<T>;
  form: UseFormReturn<T>;
  label: string;
  step?: number;
  disabled?: boolean;
  placeholder?: string;
  helpText?: string;
  size?: "sm" | "md" | "lg";
};

const InputNumber = <T extends FieldValues>({
  label,
  form,
  name,
  step = 1,
  disabled,
  placeholder,
  helpText,
  size = "lg",
}: InputNumberProps<T>) => {
  const isError = useMemo(
    () => isHookFormError(form.formState.errors, name),
    [name, form.formState.errors]
  );

  return (
    <div>
      <label className="block mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type="number"
        step={step}
        {...form.register(name, { valueAsNumber: true })}
        disabled={disabled}
        placeholder={placeholder}
        className={input({ isError: isError, size: size })}
      />

      {isError && (
        <p className="text-error-text">
          {(form.formState.errors?.[name]?.message as string) || ""}
        </p>
      )}
      {!isError && helpText && <p className="text-text-minor">{helpText}</p>}
    </div>
  );
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
          "text-input-text ring-1 ring-inset ring-input-border",
          "placeholder:text-text-minor",
          "focus:ring-2 focus:ring-inset focus:ring-input-border-focus",
        ],
      },
      size: {
        sm: ["max-w-[72px]"],
        md: ["max-w-[128px]"],
        lg: [],
      },
    },
  }
);

export default InputNumber;
