import tw from "twin.macro";
import styled from "styled-components";

interface StyledLabelProps {
  textLabelColor?: string;
}

interface StyledTextAreaProps {
  error?: boolean;
}

export const StyledTextArea = styled.textarea.attrs({
  className: "StyledTextArea",
})<StyledTextAreaProps>`
  ${tw`
      relative
      w-full
      flex
      flex-row
      items-start
      justify-center
      py-3
      px-4
      rounded-lg
      border-[1px]
      bg-white
      border-gray-300
      outline-none
      h-28


      text-base
      font-normal
      leading-6
      text-black
      placeholder-gray-500
      
      disabled:(bg-gray-100 border-gray-200 text-gray-600 placeholder-gray-600)
      
  `}
  ::placeholder {
    ${tw``}
  }

  ${({ error }) => error && tw`border-red-600`}
`;

export const StyledLabel = styled.label.attrs({
  className: "StyledLabel",
})<StyledLabelProps>`
  ${tw`
      text-base
      font-normal
      leading-6
      text-white
    `}
  ${({ textLabelColor }) =>
    textLabelColor && `color:${textLabelColor} !important`}
`;

export const StyledHelperText = styled.p.attrs({
  className: "StyledHelperText",
})`
  ${tw`
  absolute
  text-xs
  text-red-600
      bottom-0
      `}
  word-break: break-word;
`;

export const StyledIconContainer = styled.div.attrs({
  className: "StyledIconContainer",
})`
  ${tw`
      absolute
      pr-4
      h-[3.125rem]
      min-w-[3.125rem]
      top-0
      right-0
      flex
      items-center
      justify-end
      gap-x-3
    `}

  ${({ onClick }) => !!onClick && tw`cursor-pointer`}
`;
