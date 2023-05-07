import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useCaseProducts } from "../../../../../../domain/useCases";
import { productsDataService } from "../../../../../../data/services";
import { toast } from "react-hot-toast";
import { productSchema } from "../../../../../validators";

export function useProductDialog(productId: number, handleClose?: () => void) {
  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(productSchema) });

  const [enableEdit, setEnableEdit] = useState(false);
  const { editProduct } = useCaseProducts(productsDataService());

  function handleEnableEdit() {
    setEnableEdit(true);
  }

  function handleCancelEdit() {
    setEnableEdit(false);
    reset();
  }

  function handleSuccessEdit() {
    toast.success("Product updated successfully");
    setEnableEdit(false);
    handleClose && setTimeout(() => handleClose(), 500);
  }

  function handleErrorEdit() {
    toast.error("Error updating product");
  }

  function handleEditProduct(data: FieldValues) {
    const productData = {
      id: productId,
      reference: data.reference,
      name: data.name,
      description: data.description,
      price: data.price,
      taxes: data.taxes,
    };
    console.log(productData);
    editProduct({
      product: productData,
      success: handleSuccessEdit,
      error: handleErrorEdit,
    });
  }

  return {
    handleSubmit,
    control,
    errors,
    enableEdit,
    handleEnableEdit,
    handleCancelEdit,
    handleEditProduct,
  };
}
