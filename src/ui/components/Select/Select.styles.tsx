import tw from "twin.macro";
import styled from "styled-components";

import { styled as styledMUI } from "@mui/material/styles";
import {
  Select,
  SelectProps as SelectPropsMUI,
  MenuItem,
  MenuItemProps as MenuItemPropsMUI,
} from "@mui/material";

export interface SelectProps extends SelectPropsMUI {
  selectcolor?: "primary" | "secondary";
}

export interface MenuItemProps extends MenuItemPropsMUI {
  selectcolor?: "primary" | "secondary";
}

interface StyledLabelSelectProps {
  textLabelColor?: string;
}

export const StyledSelect = styledMUI(Select)<SelectProps>((props) => ({
  height: "50px",
  borderRadius: "8px",
}));

export const StyledMenuItem = styledMUI(MenuItem)<MenuItemProps>(
  (props) => ({})
);

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
