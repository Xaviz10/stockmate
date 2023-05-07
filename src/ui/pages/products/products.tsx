import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import {
  StyledProductsContainer,
  StyledSearchInputContainer,
  StyledTableContainer,
} from "./products.styles";
import { Button, Table, TextFieldControlled } from "../../components";
import { useProductsViewModel } from "../../viewModels";
import { SearchIcon } from "../../assets/Icons";
import { ProductDialog } from "./components";
import { Dialog, DialogTitle } from "@mui/material";

export const Products: FC = () => {
  const {
    columns,
    products,
    handleSubmit,
    control,
    errors,
    handleApplyFilter,
    handleResetFilter,
    selectedProduct,

    showDialogProduct,
    handleCloseDialog,

    showDialogDeleteProduct,
    handleCancelDeleteProduct,
    handleDeleteProduct,
  } = useProductsViewModel();
  return (
    <DefaultLayout>
      <StyledProductsContainer>
        <h1 className="text-2xl text-gray-800">Products list</h1>
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
          <Table columns={columns} rows={products} />
        </StyledTableContainer>
      </StyledProductsContainer>

      {selectedProduct && (
        <ProductDialog
          open={showDialogProduct}
          product={selectedProduct}
          handleClose={handleCloseDialog}
        />
      )}

      {selectedProduct && (
        <Dialog
          open={showDialogDeleteProduct}
          onClose={handleCancelDeleteProduct}
        >
          <DialogTitle>
            {`Are you sure you want to delete product ${selectedProduct.reference}?`}
          </DialogTitle>
          <div className="flex w-full gap-4 justify-center p-4">
            <Button color="primary" onClick={handleDeleteProduct}>
              Delete
            </Button>
            <Button color="secondary" onClick={handleCancelDeleteProduct}>
              Cancel
            </Button>
          </div>
        </Dialog>
      )}
    </DefaultLayout>
  );
};
