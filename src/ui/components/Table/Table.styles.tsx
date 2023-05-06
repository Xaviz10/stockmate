import tw from "twin.macro";
import { styled as styledMui } from "@mui/material/styles";
import styled from "styled-components";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { Pagination, PaginationProps } from "@mui/material";

export const StyledTableContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative px-4 bg-white `}
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
`;

export const StyledDataGrid = styledMui(DataGrid)<DataGridProps>(
  ({ theme }) => ({
    border: "none",
    "& .MuiDataGrid-columnHeaderTitle": {
      color: "#8B909A",
    },
    "& .MuiDataGrid-footerContainer": {
      display: "none",
    },
  })
);

export const StyledPagination = styledMui(Pagination)<PaginationProps>(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    "& .MuiPagination-ul": {
      margin: "12px",
      "& .Mui-selected": {
        backgroundColor: "#0F60FF",
        color: "#FFFFFF",
      },
    },
  })
);
