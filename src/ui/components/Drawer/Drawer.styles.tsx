import tw from "twin.macro";
import styled from "styled-components";
import { styled as styledMUI } from "@mui/material/styles";
import {
  Drawer,
  DrawerProps,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

export const StyledDrawer = styledMUI(Drawer)<DrawerProps>(() => {
  return {};
});

export const StyledDrawerHeader = styled.div.attrs({
  className: "StyledDrawerHeader",
})`
  ${tw`m-3`}
`;

export const StyledListItemButton = styledMUI(ListItemButton)(() => {
  return {};
});

export const StyledListItemIcon = styledMUI(ListItemIcon)<DrawerProps>(() => {
  return {
    minWidth: "32px",
  };
});
