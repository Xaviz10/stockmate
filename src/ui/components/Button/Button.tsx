import tw from "twin.macro";
import { styled as styledMUI } from "@mui/material/styles";
import { Button as ButtonMUI, ButtonProps } from "@mui/material";

interface ButtonCustomProps extends ButtonProps {
  isIcon?: boolean;
}

export const Button = styledMUI(ButtonMUI)<ButtonProps>(({}) => {
  return {};
});
