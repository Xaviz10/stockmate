import tw from "twin.macro";
import styled from "styled-components";
import { styled as styledMUI } from "@mui/material/styles";
import {
  Drawer,
  DrawerProps,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
  ListItemTextProps,
} from "@mui/material";
interface ListItemButtonCustomProps extends ListItemButtonProps {
  open?: boolean;
}
interface ListItemIconCustomProps extends ListItemIconProps {
  open?: boolean;
}

interface ListItemTextCustomProps extends ListItemTextProps {
  open?: boolean;
}
export const StyledDrawer = styledMUI(Drawer)<DrawerProps>(
  ({ theme, open }) => {
    return {
      ...(open && {
        width: "211px",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
        "& .MuiDrawer-paper": {
          width: "211px",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
        },
      }),
      ...(!open && {
        width: "52px",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        "& .MuiDrawer-paper": {
          width: "52px",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: "hidden",
        },
      }),
    };
  }
);

export const StyledDrawerHeader = styled.div.attrs({
  className: "StyledDrawerHeader",
})`
  ${tw`flex items-center justify-between w-[211px] p-3 box-border`}
`;
export const StyledContainerLogo = styled.div.attrs({
  className: "StyledContainerLogo",
})`
  ${tw`flex items-center gap-1 cursor-pointer`}
`;

export const StyledListItemButton = styledMUI(
  ListItemButton
)<ListItemButtonCustomProps>(({ open }) => {
  return {
    width: "211px",
    minHeight: "48px",
    justifyContent: open ? "initial" : "center",
    px: "10px",
  };
});

export const StyledListItemIcon = styledMUI(
  ListItemIcon
)<ListItemIconCustomProps>(({ open }) => {
  return {
    minWidth: "0",
    marginRight: open ? "12px" : "auto",
  };
});

export const StyledListItemText = styledMUI(
  ListItemText
)<ListItemTextCustomProps>(({ open, theme }) => {
  return {
    width: "149px",
    paddingLeft: "8px",
    transition: theme.transitions.create("display", {
      delay: 1,
    }),
  };
});
