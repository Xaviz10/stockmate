import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import {
  StyledOrdersContainer,
  StyledSearchInputContainer,
  StyledTableContainer,
} from "./orders.styles";
import { Button, Table, TextFieldControlled } from "../../components";
import { useOrdersViewModel } from "../../viewModels";
import { SearchIcon } from "../../assets/Icons";
import { Dialog, DialogTitle } from "@mui/material";
import { OrdersDialog } from "./components";

export const Orders: FC = () => {
  const {
    columns,
    orders,

    handleApplyFilter,
    handleResetFilter,

    selectedOrder,
    showDialogOrder,
    handleCloseDialog,

    showDialogDeleteOrder,
    handleCancelDeleteOrder,
    handleDeleteOrder,

    handleSubmit,
    control,
    errors,
  } = useOrdersViewModel();
  return (
    <DefaultLayout>
      <StyledOrdersContainer>
        <h1 className="text-2xl text-gray-800">Orders</h1>
        <StyledSearchInputContainer>
          <TextFieldControlled
            className="w-48"
            id="search"
            name="search"
            control={control}
            error={!!errors.search}
            helperText={errors.search?.message}
            placeholder="Search by reference"
          />
          <Button color="primary" onClick={handleSubmit(handleApplyFilter)}>
            <SearchIcon />
          </Button>
          <Button color="secondary" onClick={handleResetFilter}>
            Reset filter
          </Button>
        </StyledSearchInputContainer>
        <StyledTableContainer>
          <Table columns={columns} rows={orders} />
        </StyledTableContainer>
      </StyledOrdersContainer>

      {selectedOrder && (
        <OrdersDialog
          open={showDialogOrder}
          order={selectedOrder}
          handleClose={handleCloseDialog}
        />
      )}

      {selectedOrder && (
        <Dialog open={showDialogDeleteOrder} onClose={handleCancelDeleteOrder}>
          <DialogTitle>
            {`Are you sure you want to delete this order ${selectedOrder.id}?`}
          </DialogTitle>
          <div className="flex w-full gap-4 justify-center p-4">
            <Button color="primary" onClick={handleDeleteOrder}>
              Delete
            </Button>
            <Button color="secondary" onClick={handleCancelDeleteOrder}>
              Cancel
            </Button>
          </div>
        </Dialog>
      )}
    </DefaultLayout>
  );
};
