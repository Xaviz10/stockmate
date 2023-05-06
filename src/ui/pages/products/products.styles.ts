import tw from "twin.macro";
import styled from "styled-components";
export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledProductsContainer = styled.section.attrs({
  className: "StyledProductsContainer",
})`
  ${tw`relative block p-4`}
`;

export const StyledTableContainer = styled.div.attrs({
  className: "StyledTableContainer",
})`
  ${tw`relative my-4`}
  max-width: calc(100vw - 248px);
  @media only screen and (max-width: 1023.98px) {
    max-width: calc(100vw - 64px);
  }
`;
