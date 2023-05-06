import { DrawerProps, List } from "@mui/material";
import {
  StyledContainerLogo,
  StyledDrawer,
  StyledDrawerHeader,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "./Drawer.styles";
import { FC } from "react";
import {
  HamOpenIcon,
  ProductIcon,
  ShoppingCarIcon,
  StockMateIcon,
} from "../../assets/Icons";
import { ReactComponent as StockMateCopy } from "../../assets/images/stockMateCopy.svg";
import { Button } from "../Button";
import { useDrawer } from "./useDrawer";

export const Drawer: FC<DrawerProps> = ({
  variant = "permanent",
  anchor = "left",
}) => {
  const { openState, handleOpenDrawer, handleCloseDrawer, handleNavigation } =
    useDrawer();
  return (
    <StyledDrawer variant={variant} anchor={anchor} open={openState}>
      <StyledDrawerHeader>
        <StyledContainerLogo>
          <StockMateIcon onClick={handleOpenDrawer} />
          {openState && <StockMateCopy />}
        </StyledContainerLogo>
        {openState && (
          <Button isIcon onClick={handleCloseDrawer}>
            <HamOpenIcon />
          </Button>
        )}
      </StyledDrawerHeader>
      <List>
        <StyledListItemButton onClick={() => handleNavigation("/orders")}>
          <StyledListItemIcon>
            <ShoppingCarIcon />
          </StyledListItemIcon>
          <StyledListItemText
            sx={{ display: openState ? "inline-block" : "none" }}
          >
            {openState ? "Order Management" : ""}
          </StyledListItemText>
        </StyledListItemButton>
        <StyledListItemButton onClick={() => handleNavigation("/products")}>
          <StyledListItemIcon>
            <ProductIcon />
          </StyledListItemIcon>
          <StyledListItemText
            sx={{ display: openState ? "inline-block" : "none" }}
          >
            {openState ? "Products list" : ""}
          </StyledListItemText>
        </StyledListItemButton>
      </List>
    </StyledDrawer>
  );
};
