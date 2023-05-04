import { FC, PropsWithChildren } from "react";
import { Header, Footer } from "../../components";
import { StyledDefaultLayout } from "./DefaultLayout.styles";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledDefaultLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledDefaultLayout>
  );
};
