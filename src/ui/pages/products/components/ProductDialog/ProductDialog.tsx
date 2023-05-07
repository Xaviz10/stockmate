import React from "react";
import { DialogTitle } from "@mui/material";
import {
  StyledButtonsRow,
  StyledDialog,
  StyledDialogContent,
  StyledDialogTitle,
  StyledProductContainer,
  StyledRow,
} from "./ProductDialog.styles";
import { ProductEntity } from "../../../../../domain/entities";
import {
  Button,
  TextAreaControlled,
  TextFieldControlled,
} from "../../../../components";
import { useProductDialog } from "./useProductDialog";
import CloseIcon from "@mui/icons-material/Close";

interface ContainerProductProps {
  open: boolean;
  handleClose?: () => void;
  product: ProductEntity;
}

export function ProductDialog({
  open,
  handleClose,
  product,
}: ContainerProductProps) {
  const {
    handleSubmit,
    control,
    errors,
    enableEdit,
    handleEnableEdit,
    handleCancelEdit,
    handleEditProduct,
  } = useProductDialog(product.id, handleClose);
  return (
    <StyledDialog open={open}>
      <StyledProductContainer>
        <StyledDialogTitle>
          Product info
          <Button onClick={handleClose}>
            <CloseIcon color="action" />
          </Button>
        </StyledDialogTitle>
        <StyledDialogContent dividers>
          <StyledRow>
            <p>Reference:</p>
            <TextFieldControlled
              disabled={!enableEdit}
              defaultValue={product.reference}
              id={"reference"}
              name={"reference"}
              control={control}
              error={!!errors.reference}
              helperText={errors.reference?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Name:</p>
            <TextFieldControlled
              disabled={!enableEdit}
              defaultValue={product.name}
              id={"name"}
              name={"name"}
              control={control}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Description:</p>
            <TextAreaControlled
              disabled={!enableEdit}
              defaultValue={product.description}
              maxLength={160}
              id={"description"}
              name={"description"}
              control={control}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Price ($):</p>
            <TextFieldControlled
              disabled={!enableEdit}
              defaultValue={`${product.price}`}
              id={"price"}
              name={"price"}
              type="number"
              control={control}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Taxes (%):</p>
            <TextFieldControlled
              disabled={!enableEdit}
              defaultValue={`${product.taxes}`}
              id={"taxes"}
              name={"taxes"}
              type="number"
              control={control}
              error={!!errors.taxes}
              helperText={errors.taxes?.message}
            />
          </StyledRow>
          <StyledButtonsRow>
            {enableEdit && (
              <Button onClick={handleSubmit(handleEditProduct)} color="primary">
                Save
              </Button>
            )}
            <Button
              color={`${enableEdit ? "secondary" : "primary"}`}
              onClick={
                enableEdit ? () => handleCancelEdit() : () => handleEnableEdit()
              }
            >
              {enableEdit ? "Cancel" : "Edit"}
            </Button>
          </StyledButtonsRow>
        </StyledDialogContent>
      </StyledProductContainer>
    </StyledDialog>
  );
}
