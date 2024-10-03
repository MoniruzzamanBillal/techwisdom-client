import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
type TInput = {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
};

const TechWisdomInput = ({ type, label, name, placeholder }: TInput) => {
  const { control } = useFormContext();

  const inputProps =
    type === "number"
      ? {
          onWheel: (e: React.WheelEvent<HTMLInputElement>) =>
            e.currentTarget.blur(),
        }
      : {};

  return (
    <div className="TechWisdomInputContainer mb-5 flex flex-col gap-y-1">
      {label ? <label htmlFor={name}>{label}</label> : null}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              placeholder={placeholder}
              type={type}
              id={name}
              className="border border-gray-400  "
              value={type === "file" ? undefined : field?.value}
              onChange={(e) => {
                if (type === "file") {
                  field.onChange(e.target.files?.[0] || null);
                } else {
                  field.onChange(e.target.value);
                }
              }}
              {...inputProps}
            />

            {error && (
              <p className="text-xs font-medium text-red-600">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default TechWisdomInput;
