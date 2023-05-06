import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import {
  StyledProductsContainer,
  StyledTableContainer,
} from "./products.styles";
import { Table } from "../../components";
import { useProductsViewModel } from "../../viewModels";

export const Products: FC = () => {
  const { columns, rows } = useProductsViewModel();
  return (
    <DefaultLayout>
      <StyledProductsContainer>
        <h1 className="text-2xl text-gray-800">Product List</h1>
        <StyledTableContainer>
          <Table columns={columns} rows={rows} />
        </StyledTableContainer>
      </StyledProductsContainer>
    </DefaultLayout>
  );
};
