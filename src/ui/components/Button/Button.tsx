import tw from "twin.macro";
import { styled as styledMUI } from "@mui/material/styles";
import { Button as ButtonMUI, ButtonProps } from "@mui/material";

interface ButtonCustomProps extends ButtonProps {
  color?: "primary" | "secondary";
}

export const Button = styledMUI(ButtonMUI)<ButtonCustomProps>(({ color }) => {
  let colorButton = "transparent";

  switch (color) {
    case "primary":
      colorButton = "#0F60FF";
      break;
    case "secondary":
      colorButton = "#0FB7FF";
      break;
    default:
      colorButton = "transparent";
      break;
  }

  return {
    width: "max-content",
    height: "48px",
    backgroundColor: colorButton,
    color: "white",
    textTransform: "none",

    "&:hover": {
      backgroundColor: colorButton,
      opacity: 0.8,
    },
  };
});
