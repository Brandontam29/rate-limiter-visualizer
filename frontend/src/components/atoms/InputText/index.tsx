import { ErrorMessage } from "@hookform/error-message";
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
};

const InputText = <T extends FieldValues>({
  label,
  register,
  name,
  errors,
  disabled,
  placeholder,
}: InputTextProps<T>) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        {...register(name)}
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

export default InputText;
