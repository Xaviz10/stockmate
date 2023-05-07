import tw from "twin.macro";
import styled from "styled-components";
export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledProductContainer = styled.section.attrs({
  className: "StyledProductContainer",
})`
  ${tw`relative block p-4`}
`;

export const StyledProductContent = styled.div.attrs({
  className: "StyledProductContent",
})`
  ${tw`relative flex flex-col bg-white p-4 rounded my-2 gap-y-4`}
  boxShadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
`;

export const StyledRow = styled.div.attrs({
  className: "StyledRow",
})`
  ${tw`flex flex-col w-full gap-x-2 `}
`;

export const StyledButtonsRow = styled.div.attrs({
  className: "StyledButtonsRow",
})`
  ${tw`flex w-full gap-4 items-center justify-end gap-x-4 h-14 mb-8`}
`;
