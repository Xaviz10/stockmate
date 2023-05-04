import { FC } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { TextField, InputProps } from "./TextField";

interface TextFieldControlledProps extends InputProps {
  control?: Control<FieldValues, any>;
  id: string;
  name: string;
  defaultValue?: string;
}

export const TextFieldControlled: FC<TextFieldControlledProps> = ({
  className,
  id,
  name,
  label,
  error,
  helperText,
  iconSrc,
  placeholder,
  onClickIcon,
  defaultValue = "",
  control,
  textLabelColor,
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
    <TextField
      onChange={onChange}
      value={value}
      ref={ref}
      className={className}
      id={id}
      name={name}
      label={label}
      error={error}
      helperText={helperText}
      iconSrc={iconSrc}
      placeholder={placeholder}
      onClickIcon={onClickIcon}
      textLabelColor={textLabelColor}
      {...rest}
    />
  );
};
