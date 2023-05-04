import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import { StyledHomeContainer } from "./home.styles";

export const Home: FC = () => {
  return (
    <DefaultLayout>
      <StyledHomeContainer>
        <h1>Home</h1>
      </StyledHomeContainer>
    </DefaultLayout>
  );
};
