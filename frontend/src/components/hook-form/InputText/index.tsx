import isHookFormError from "@/utils/isHookFormError";
import { cva } from "class-variance-authority";
import { HTMLProps, useMemo } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type InputTextProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  helpText?: string;
} & Omit<HTMLProps<HTMLInputElement>, "name" | "className" | "form">;

const InputText = <T extends FieldValues>({
  form,
  label,
  name,
  helpText,
  ...props
}: InputTextProps<T>) => {
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
        {...props}
        {...form.register(name)}
        id={name}
        type="text"
        className={input({ isError: isError })}
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
    },
  }
);

export default InputText;
