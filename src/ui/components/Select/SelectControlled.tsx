import { FC } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { Select, SelectProps } from "./Select";

interface SelectControlledProps extends SelectProps {
  control?: Control<FieldValues, any>;
  id: string;
  name: string;
  defaultValue?: string | number;
}

export const SelectControlled: FC<SelectControlledProps> = ({
  className,
  id,
  name,
  label,
  error,
  helperText,
  placeholder,
  defaultValue = "",
  control,
  options,
  ...rest
}) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
    defaultValue: defaultValue,
  });

  return (
    <Select
      onChange={onChange}
      value={value}
      inputRef={ref}
      className={className}
      id={id}
      name={name}
      label={label}
      error={error}
      options={options}
      helperText={helperText}
      placeholder={placeholder}
      {...rest}
    />
  );
};
