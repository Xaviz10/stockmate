import React from "react";
import {
  StyledNewOrderSection,
  StyledOrderContainer,
  StyledRowList,
} from "./newOrder.styles";
import {
  Button,
  SelectControlled,
  TextFieldControlled,
} from "../../components";
import { useNewOrderViewModel } from "../../viewModels";
import { Check, DeleteForever } from "@mui/icons-material";
import { AddProductIcon } from "../../assets/Icons";
import { DefaultLayout } from "../../layouts";
import { Dialog, DialogTitle } from "@mui/material";

export function NewOrder() {
  const {
    control,
    getValues,
    errors,

    handleUpdateArticle,

    showAddNewProduct,
    handleEnableAddArticle,
    handleCancelAddArticle,

    handleSubmitNewProduct,
    controlNewProduct,
    products,

    currentOrder,
    handleAddArticle,
    handleSaveOrder,

    showCancelOrder,
    handleCancelOrder,
    handleShowCancelOrderDialog,
    handleCloseCancelOrderDialog,
  } = useNewOrderViewModel();
  return (
    <DefaultLayout>
      <StyledNewOrderSection>
        <h1 className="text-2xl text-gray-800">New order</h1>
        <StyledOrderContainer>
          <div className="p-4 w-full flex flex-col gap-y-4 ">
            <StyledRowList>
              <p>Ref.</p>
              <p>Quantity</p>
            </StyledRowList>
            {currentOrder?.articles.length ? (
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
              ))
            ) : (
              <div></div>
            )}
          </div>
          {showAddNewProduct ? (
            <div className="flex flex-col gap-y-4 p-2 border-t-2">
              <div className="flex px-2 py-1.5">
                <AddProductIcon /> <p className="text-gray-600">Add article</p>
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
                  <Button color="secondary" onClick={handleCancelAddArticle}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full gap-y-4 p-2 border-t-2">
              <Button onClick={handleEnableAddArticle}>
                <AddProductIcon /> <p className="text-gray-600">Add article</p>
              </Button>
            </div>
          )}
          {currentOrder && (
            <div className="flex w-full justify-center items-start gap-x-4 h-12">
              <Button color="primary" onClick={handleSaveOrder}>
                Save order
              </Button>
              <Button color="secondary" onClick={handleShowCancelOrderDialog}>
                Cancel
              </Button>
            </div>
          )}
        </StyledOrderContainer>
      </StyledNewOrderSection>
      {currentOrder && (
        <Dialog open={showCancelOrder} onClose={handleCloseCancelOrderDialog}>
          <DialogTitle>
            {`Are you sure you want to cancel this order?`}
          </DialogTitle>
          <div className="flex w-full gap-4 justify-center p-4">
            <Button color="primary" onClick={handleCancelOrder}>
              Yes
            </Button>
            <Button color="secondary" onClick={handleCloseCancelOrderDialog}>
              No
            </Button>
          </div>
        </Dialog>
      )}
    </DefaultLayout>
  );
}
