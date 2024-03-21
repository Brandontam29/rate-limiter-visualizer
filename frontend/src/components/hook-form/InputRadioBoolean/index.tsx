import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";

type InputRadioBooleanProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  form: UseFormReturn<T>;
};

const InputRadioBoolean = <T extends FieldValues>({
  name,
  label,
  form,
}: InputRadioBooleanProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="block mb-1" htmlFor={name}>
        {label}
      </label>
      <Controller
        control={form.control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <>
            <label className="flex gap-3 items-center">
              <input
                type="radio"
                onBlur={onBlur}
                onChange={() => onChange(true)}
                checked={value === true}
                ref={ref}
              />
              <span>True</span>
            </label>
            <label className="flex gap-3 items-center">
              <input
                type="radio"
                onBlur={onBlur}
                onChange={() => onChange(false)}
                checked={value === false}
                ref={ref}
              />
              <span>False</span>
            </label>
          </>
        )}
      />
    </div>
  );
};

export default InputRadioBoolean;
