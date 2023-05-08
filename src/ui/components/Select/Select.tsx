import { FC } from "react";
import { SelectProps as SelectPropsMUI } from "@mui/material";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import {
  StyledSelect,
  StyledMenuItem,
  StyledHelperText,
} from "./Select.styles";
import { OptionsSelectEntity } from "../../../domain/entities";

export interface SelectProps extends SelectPropsMUI {
  id?: string;
  name?: string;
  label?: string;
  error?: boolean;
  helperText?:
    | string
    | FieldError
    | Partial<{ type: string | number; message: string }>
    | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
  options: Array<OptionsSelectEntity>;
  selectColor?: "primary" | "secondary";
}

export const Select: FC<SelectProps> = (props) => {
  const {
    className,
    id,
    name,
    label,
    error,
    helperText,
    placeholder,
    options,
    required,
    value,
    inputRef,
    selectColor = "primary",
    ...rest
  } = props;
  // const classes = useStyles();
  return (
    <div className={`relative flex flex-col w-full  text-left ${className}`}>
      <label htmlFor={id}>
        {label}
        {!!required && <span className="text-primary-100"> *</span>}
      </label>
      <StyledSelect
        id={id}
        name={name}
        inputRef={inputRef}
        placeholder={placeholder}
        value={value}
        {...rest}
        selectcolor={selectColor}
      >
        {options.map((currentOption, key) => {
          const isPlaceHolder = currentOption.id === "none";
          return (
            <StyledMenuItem
              key={key}
              selectcolor={selectColor}
              value={currentOption.id}
              disabled={isPlaceHolder}
              className={isPlaceHolder ? "text-gray-500" : "text-black"}
            >
              {currentOption.reference}-{currentOption.name}
            </StyledMenuItem>
          );
        })}
      </StyledSelect>

      {!!error && !!helperText && (
        <StyledHelperText>{helperText as string}</StyledHelperText>
      )}
    </div>
  );
};
