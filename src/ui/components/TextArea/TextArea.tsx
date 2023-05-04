import { TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import {
  StyledHelperText,
  StyledIconContainer,
  StyledLabel,
  StyledTextArea,
} from "./TextArea.styles";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  name?: string;
  label?: string;
  error?: boolean;
  helperText?:
    | string
    | FieldError
    | Partial<{ type: string | number; message: string }>
    | Merge<FieldError, FieldErrorsImpl<any>>;
  iconSrc?: string;
  placeholder?: string;
  textLabelColor?: string;
  onClickIcon?: () => void;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
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
      onClickIcon,
      ...rest
    } = props;

    return (
      <div
        className={`relative flex flex-col w-full gap-y-1 items-start text-left ${className}`}
      >
        {!!label && (
          <StyledLabel textLabelColor={textLabelColor} htmlFor={id}>
            {label} {!!required && <span className="text-primary-100"> *</span>}
          </StyledLabel>
        )}
        <div className="w-full relative">
          <StyledTextArea
            id={id}
            name={name}
            placeholder={placeholder}
            error={error}
            ref={ref}
            {...rest}
          />
          {!!(iconSrc || error) && (
            <StyledIconContainer onClick={onClickIcon}>
              {!!iconSrc && !error ? (
                <img
                  width="20px"
                  height="20px"
                  src={iconSrc}
                  alt="Input icon"
                  title="Input icon"
                />
              ) : (
                <></>
              )}
            </StyledIconContainer>
          )}
        </div>
        {!!error && !!helperText && (
          <StyledHelperText>{helperText as string}</StyledHelperText>
        )}
      </div>
    );
  }
);
