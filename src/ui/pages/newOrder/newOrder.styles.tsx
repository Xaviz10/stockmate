import tw from "twin.macro";
import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledNewOrderSection = styled.section.attrs({
  className: "StyledNewOrderSection",
})`
  ${tw`p-4`}
`;

export const StyledOrderContainer = styled.div.attrs({
  className: "StyledOrderContainer",
})`
  ${tw`relative mx-4 bg-white p-4 rounded my-2 gap-y-4`}
  boxShadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
`;
export const StyledRowList = styled.div.attrs({
  className: "StyledRowList",
})`
  ${tw`grid gap-x-2 gap-y-4 items-center overflow-x-hidden`}

  grid-template-columns: 15% 30% auto;
`;
export const StyledRow = styled.div.attrs({
  className: "StyledRow",
})`
  ${tw`grid gap-x-2 gap-y-4 items-center`}

  grid-template-columns: 180px 120px auto;
`;

export const StyledPriceRow = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`flex w-full gap-4 items-center justify-end gap-x-4 p-4`}
`;
