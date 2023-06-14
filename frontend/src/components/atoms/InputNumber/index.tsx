import { ErrorMessage } from "@hookform/error-message";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputNumberProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors;
  label: string;
  step?: number;
  disabled?: boolean;
  placeholder?: string;
};

const InputNumber = <T extends FieldValues>({
  label,
  register,
  name,
  errors,
  step = 1,
  disabled,
  placeholder,
}: InputNumberProps<T>) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="number"
        step={step}
        {...register(name, { valueAsNumber: true })}
        disabled={disabled}
        placeholder={placeholder}
      />

      <div className="h-4 flex items-center">
        <ErrorMessage
          errors={errors}
          name={name}
          message="This is required"
          render={({ message }) => <p className="text-red-600">{message}</p>}
        />
      </div>
    </div>
  );
};

export default InputNumber;
