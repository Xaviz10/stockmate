import tw from "twin.macro";
import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export interface StyledSectionProps {
  withoutPadding?: boolean;
}

export const StyledDialog = styledMui(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    maxWidth: "max-content",
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

export const StyledProductContainer = styled.div.attrs({
  className: "StyledProductContainer",
})`
  ${tw`relative w-[60vw]`}
`;

export const StyledRow = styled.div.attrs({
  className: "StyledRow",
})`
  ${tw`grid w-full gap-x-2  gap-y-4`}

  grid-template-columns: 120px auto;
`;

export const StyledButtonsRow = styled.div.attrs({
  className: "StyledButtonsRow",
})`
  ${tw`flex w-full gap-4 items-center justify-end gap-x-4 h-14 mb-8`}
`;
