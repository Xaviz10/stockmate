import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import { StyledOrdersContainer, StyledTableContainer } from "./orders.styles";
import { Table } from "../../components";
import { useOrdersViewModel } from "../../viewModels";

export const Orders: FC = () => {
  const { columns, rows } = useOrdersViewModel();
  return (
    <DefaultLayout>
      <StyledOrdersContainer>
        <h1 className="text-2xl text-gray-800">Orders</h1>
        <StyledTableContainer>
          <Table columns={columns} rows={rows} />
        </StyledTableContainer>
      </StyledOrdersContainer>
    </DefaultLayout>
  );
};
