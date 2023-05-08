import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
} from "@mui/material";
import {
  StyledDialog,
  StyledDialogContent,
  StyledDialogTitle,
  StyledOrderContainer,
  StyledPriceRow,
  StyledRow,
  StyledRowList,
} from "./OrdersDialog.styles";
import { OrderEntity } from "../../../../../domain/entities";
import {
  Button,
  SelectControlled,
  TextFieldControlled,
} from "../../../../components";
import { useOrdersDialog } from "./useOrdersDialog";
import CloseIcon from "@mui/icons-material/Close";
import { Check, DeleteForever } from "@mui/icons-material";
import { AddProductIcon } from "../../../../assets/Icons";

interface ContainerOrdersProps {
  open: boolean;
  handleClose?: () => void;
  order: OrderEntity;
}

export function OrdersDialog({
  open,
  handleClose,
  order,
}: ContainerOrdersProps) {
  const {
    control,
    getValues,
    errors,
    getFieldState,

    handleUpdateArticle,

    showAddNewProduct,
    handleEnableAddArticle,
    handleCancelAddArticle,

    handleSubmitNewProduct,
    controlNewProduct,
    errorsNewProduct,
    products,

    currentOrder,
    handleAddArticle,
  } = useOrdersDialog(order, handleClose);
  return (
    <StyledDialog open={open}>
      <StyledOrderContainer>
        <StyledDialogTitle>
          Order info
          <Button onClick={handleClose}>
            <CloseIcon color="action" />
          </Button>
        </StyledDialogTitle>
        <StyledDialogContent dividers>
          <h3>Order ID: {order.id}</h3>
          <Accordion>
            <AccordionSummary>View all products</AccordionSummary>
            <AccordionDetails>
              <div className="p-4 w-full flex flex-col gap-y-4 ">
                <StyledRowList>
                  <p>Ref.</p>
                  <p>Quantity</p>
                </StyledRowList>
                {currentOrder?.articles.length &&
                  currentOrder.articles.map((currentArticle) => (
                    <StyledRowList key={`article-${currentArticle.id}`}>
                      <p>{currentArticle.reference}</p>
                      <TextFieldControlled
                        defaultValue={`${currentArticle.quantity}`}
                        type="number"
                        min={1}
                        id={`quantity-${currentArticle.id}`}
                        name={`quantity-${currentArticle.id}`}
                        control={control}
                        error={!!errors[`quantity-${currentArticle.id}`]}
                        helperText={
                          errors[`quantity-${currentArticle.id}`]?.message
                        }
                      />
                      <div className="ml-auto">
                        <Button
                          onClick={() =>
                            handleUpdateArticle({
                              [`quantity-${currentArticle.id}`]:
                                getValues()[`quantity-${currentArticle.id}`],
                            })
                          }
                        >
                          <Check color="success" />
                        </Button>

                        <Button>
                          <DeleteForever color="error" />
                        </Button>
                      </div>
                    </StyledRowList>
                  ))}
              </div>
              {showAddNewProduct ? (
                <div className="flex flex-col w-full gap-y-4 p-2 border-t-2">
                  <div className="flex px-2 py-1.5">
                    <AddProductIcon />{" "}
                    <p className="text-gray-600">Add article</p>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:h-12">
                    <SelectControlled
                      id={"productId"}
                      name={"productId"}
                      control={controlNewProduct}
                      options={products}
                    />
                    <div className="flex items-start gap-x-4 h-12">
                      <TextFieldControlled
                        type="number"
                        defaultValue={"1"}
                        min={1}
                        id={"newProductQuantity"}
                        name={"newProductQuantity"}
                        control={controlNewProduct}
                        error={!!errors.newProductQuantity}
                        helperText={errors.newProductQuantity?.message}
                      />
                      <Button
                        color="primary"
                        onClick={handleSubmitNewProduct(handleAddArticle)}
                      >
                        Add
                      </Button>
                      <Button
                        color="secondary"
                        onClick={handleCancelAddArticle}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col w-full gap-y-4 p-2 border-t-2">
                  <Button onClick={handleEnableAddArticle}>
                    <AddProductIcon />{" "}
                    <p className="text-gray-600">Add article</p>
                  </Button>
                </div>
              )}
            </AccordionDetails>
          </Accordion>

          <StyledPriceRow className="bg-gray-50">
            <p>SubTotal:</p> <p>${currentOrder?.price}</p>
          </StyledPriceRow>
          <StyledPriceRow className="bg-gray-100">
            <p>Total:</p> <p>${currentOrder?.priceWithTaxes}</p>
          </StyledPriceRow>
        </StyledDialogContent>
      </StyledOrderContainer>
    </StyledDialog>
  );
}
