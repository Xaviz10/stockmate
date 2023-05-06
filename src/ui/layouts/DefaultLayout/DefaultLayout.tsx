import { FC, PropsWithChildren } from "react";
import { Header, Footer, Drawer } from "../../components";
import { StyledDefaultLayout } from "./DefaultLayout.styles";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledDefaultLayout>
      <Drawer />
      <main>{children}</main>
    </StyledDefaultLayout>
  );
};
