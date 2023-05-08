import tw from "twin.macro";
import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { TextFieldControlled } from "../../../../components";

export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledDialog = styledMui(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    maxWidth: "max-content",
    [theme.breakpoints.down(1024)]: {
      margin: 0,
      overflowX: "hidden",
    },
  },
}));

export const StyledDialogTitle = styledMui(DialogTitle)(({ theme }) => ({
  width: "100%",
  padding: "8px",
  paddingLeft: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const StyledDialogContent = styledMui(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const StyledOrderContainer = styled.div.attrs({
  className: "StyledOrderContainer",
})`
  ${tw`relative w-screen lg:w-[60vw]`}
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

export const StyledTextFieldControlled = styled(TextFieldControlled).attrs({
  className: "StyledTextFieldControlled",
})`
  ${tw`flex w-full gap-4 items-center justify-end gap-x-4 p-4`}
`;
