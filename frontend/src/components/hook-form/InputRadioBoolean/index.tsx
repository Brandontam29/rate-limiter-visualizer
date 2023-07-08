import { Controller } from 'react-hook-form';

type InputRadioBooleanProps = {
  name: string;
  form: any;
};

const InputRadioBoolean = ({ name, form }: InputRadioBooleanProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Controller
        control={form.control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <>
            <label className="flex gap-2">
              <span>True</span>
              <input
                type="radio"
                onBlur={onBlur}
                onChange={() => onChange(true)}
                checked={value === true}
                ref={ref}
              />
            </label>
            <label className="flex gap-2">
              <span>False</span>
              <input
                type="radio"
                onBlur={onBlur}
                onChange={() => onChange(false)}
                checked={value === false}
                ref={ref}
              />
            </label>
          </>
        )}
      />
    </div>
  );
};

export default InputRadioBoolean;
