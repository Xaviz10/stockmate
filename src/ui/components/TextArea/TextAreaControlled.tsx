import { FC } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { TextArea, TextAreaProps } from "./TextArea"

interface TextAreaControlledProps extends TextAreaProps {
    control?: Control<FieldValues, any>;
    id: string;
    name: string;
    defaultValue?: string;
}

export const TextAreaControlled: FC<TextAreaControlledProps> = ({
    className,
    id,
    name,
    label,
    error,
    helperText,
    iconSrc,
    placeholder,
    required,
    textLabelColor,
    control, 
    defaultValue = "",
    onClickIcon, 
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
        <TextArea
        onChange={onChange}
        value={value}
        ref={ref}
        className={className}
        id={id}
        name={name}
        label={label}
        error={error}
        helperText={helperText}
        required={required}
        iconSrc={iconSrc}
        placeholder={placeholder}
        onClickIcon={onClickIcon}
        textLabelColor={textLabelColor}
        {...rest}
        />
    )
}