import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import { StyledStockContainer } from "./stock.styles";

export const Stock: FC = () => {
  return (
    <DefaultLayout>
      <StyledStockContainer>
        <h1>Home</h1>
      </StyledStockContainer>
    </DefaultLayout>
  );
};
