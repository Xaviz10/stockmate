import { FC, ChangeEvent } from "react";
import { GridColDef, GridValidRowModel, GridRowsProp } from "@mui/x-data-grid";

import {
  StyledTableContainer,
  StyledDataGrid,
  StyledPagination,
} from "./Table.styles";

interface TableProps {
  className?: string;
  rows: GridRowsProp;
  columns: GridColDef<GridValidRowModel>[];
  page?: number;
  totalPages?: number;
  onPageChange?: (event: ChangeEvent<unknown>, page: number) => void;
}

export const Table: FC<TableProps> = ({
  className,
  rows,
  columns,
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <StyledTableContainer>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        disableColumnFilter
        rowHeight={48}
        paginationMode={"client"}
        columnBuffer={0}
        columnThreshold={0}
        localeText={{
          noRowsLabel: "NO DATA",
        }}
      />
      <StyledPagination
        page={page}
        count={totalPages}
        onChange={onPageChange}
        shape="rounded"
      />
    </StyledTableContainer>
  );
};
