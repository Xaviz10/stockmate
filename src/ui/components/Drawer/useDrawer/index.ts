import { useState } from "react";
import { useNavigation } from "../../../hooks";

export function useDrawer() {
  const { navigateTo } = useNavigation();
  const [openState, setOpenState] = useState(true);

  function handleOpenDrawer() {
    setOpenState(true);
  }

  function handleCloseDrawer() {
    setOpenState(false);
  }

  function handleNavigation(url: string) {
    navigateTo(url);
  }
  return { openState, handleOpenDrawer, handleCloseDrawer, handleNavigation };
}
