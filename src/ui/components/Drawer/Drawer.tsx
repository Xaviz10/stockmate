import { DrawerProps, List, ListItemButton } from "@mui/material";
import {
  StyledDrawer,
  StyledDrawerHeader,
  StyledListItemButton,
  StyledListItemIcon,
} from "./Drawer.styles";
import { FC } from "react";
import { HamOpenIcon, ProductIcon, ShoppingCarIcon } from "../../assets/Icons";
import { ReactComponent as StockMateLogo } from "../../assets/images/stockMateLogo.svg";

export const Drawer: FC<DrawerProps> = ({
  variant = "permanent",
  anchor = "left",
  open = true,
}) => {
  return (
    <StyledDrawer variant={variant} anchor={anchor} open={open}>
      <StyledDrawerHeader>
        <StockMateLogo />
        <HamOpenIcon />
      </StyledDrawerHeader>
      <List>
        <StyledListItemButton>
          <StyledListItemIcon>
            <ShoppingCarIcon />
          </StyledListItemIcon>
          Order Management
        </StyledListItemButton>
        <ListItemButton>
          <StyledListItemIcon>
            <ProductIcon />
          </StyledListItemIcon>
          Product List
        </ListItemButton>
      </List>
    </StyledDrawer>
  );
};
