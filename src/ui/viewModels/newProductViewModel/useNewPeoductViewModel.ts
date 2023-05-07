import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { productsDataService } from "../../../data/services";
import { useCaseProducts } from "../../../domain/useCases";
import { productSchema } from "../../validators";

export function useNewProductViewModel() {
  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isDirty },
  } = useForm({ mode: "onChange", resolver: yupResolver(productSchema) });
  const { newProduct } = useCaseProducts(productsDataService());

  function handleCancel() {
    reset();
  }

  function handleSuccessSaved() {
    toast.success("Product saved successfully");
    setTimeout(() => reset(), 600);
  }

  function handleErrorSaved() {
    toast.error("Error creating new product. Try again...");
  }

  function handleSaveProduct(data: FieldValues) {
    const productData = {
      reference: data.reference,
      name: data.name,
      description: data.description,
      price: data.price,
      taxes: data.taxes,
    };
    newProduct({
      product: productData,
      success: handleSuccessSaved,
      error: handleErrorSaved,
    });
  }

  return {
    handleSubmit,
    control,
    errors,
    isDirty,

    handleCancel,
    handleSaveProduct,
  };
}
