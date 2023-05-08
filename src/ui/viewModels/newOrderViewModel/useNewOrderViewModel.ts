import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useCaseOrders, useCaseProducts } from "../../../domain/useCases";
import { ordersDataService, productsDataService } from "../../../data/services";
import { toast } from "react-hot-toast";
import {
  OrderEntity,
  ProductEntity,
  ProductOrderEntity,
} from "../../../domain/entities";
import { ProductsModel } from "../../../data/models";

export function useNewOrderViewModel() {
  const {
    handleSubmit,
    control,
    setError,
    setValue,
    getValues,
    getFieldState,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const {
    handleSubmit: handleSubmitNewProduct,
    control: controlNewProduct,
    reset: resetNewProduct,
    formState: { errors: errorsNewProduct },
  } = useForm({ mode: "onChange" });

  const { newOrder } = useCaseOrders(ordersDataService());
  const { getAllProducts } = useCaseProducts(productsDataService());

  const [products, setProducts] = useState<ProductEntity[] | []>([]);
  const [currentOrder, setCurrentOrder] = useState<Omit<
    OrderEntity,
    "id"
  > | null>(null);
  const [showAddNewProduct, setShowAddNewProduct] = useState(false);
  const [showCancelOrder, setShowCancelOrder] = useState(false);

  // add article
  function handleEnableAddArticle() {
    setShowAddNewProduct(true);
  }

  function handleCancelAddArticle() {
    setShowAddNewProduct(false);
    resetNewProduct();
  }

  function handleSuccessAddArticle(newOrder: Omit<OrderEntity, "id">) {
    setShowAddNewProduct(false);
    setShowCancelOrder(false);
    clearErrors();
    resetNewProduct();
    setCurrentOrder(newOrder);
    newOrder.articles.forEach((article) =>
      setValue(`quantity-${article.id}`, article.quantity)
    );
  }

  async function handleAddArticle(data: FieldValues) {
    const newProduct = await products.find(
      (currentProduct) => currentProduct.id === data.productId
    );
    if (currentOrder) {
      if (newProduct) {
        let newOrder = { ...currentOrder };
        // Check if the article already exists in the list
        const existingArticleIndex = currentOrder.articles.findIndex(
          (article) => article.id === data.productId
        );

        if (existingArticleIndex === -1) {
          // Article does not exist, add it to the list
          newOrder.articles.push({
            ...newProduct,
            quantity: data.newProductQuantity,
          });
        } else {
          // Article exists, merge the new data with the existing data
          newOrder.articles[existingArticleIndex] = {
            ...newOrder.articles[existingArticleIndex],
            quantity:
              Number(newOrder.articles[existingArticleIndex].quantity) +
              Number(data.newProductQuantity),
          };
        }
        let newPrice = 0;
        let newPriceWithTaxes = 0;
        newOrder.articles.forEach((article) => {
          const totalPrice = article?.price * article.quantity;
          const totalPriceWithTaxes = totalPrice + totalPrice * article?.taxes;
          newPrice = newPrice + totalPrice;
          newPriceWithTaxes = newPriceWithTaxes + totalPriceWithTaxes;
        });
        newOrder = {
          ...newOrder,
          price: newPrice,
          priceWithTaxes: newPriceWithTaxes,
        };
        handleSuccessAddArticle(newOrder);
      }
    } else {
      if (newProduct) {
        let newestOrder: Omit<OrderEntity, "id">;
        newestOrder = {
          articles: [
            {
              ...newProduct,
              quantity: Number(data.newProductQuantity),
            },
          ],
          price: newProduct?.price * Number(data.newProductQuantity),
          priceWithTaxes:
            newProduct?.price * Number(data.newProductQuantity) +
            (newProduct?.price * Number(data.newProductQuantity) +
              newProduct?.taxes),
        };
        handleSuccessAddArticle(newestOrder);
      }
    }
  }
  function handleSuccessUpdateArticle(newOrder: Omit<OrderEntity, "id">) {
    toast.success("Article updated successfully");
    setCurrentOrder(newOrder);
    setShowCancelOrder(false);
    clearErrors();
    newOrder.articles.forEach((article) =>
      setValue(`quantity-${article.id}`, article.quantity)
    );
  }

  async function handleUpdateArticle(data: FieldValues) {
    const articleId = Object.keys(data)[0].replace("quantity-", "");
    if (Number(data[`quantity-${articleId}`])) {
      if (currentOrder) {
        let newOrder = { ...currentOrder };
        // Check if the article already exists in the list
        const existingArticleIndex = currentOrder.articles.findIndex(
          (article) => article.id === Number(articleId)
        );

        if (existingArticleIndex !== -1) {
          // Article does not exist, add it to the list
          newOrder.articles[existingArticleIndex] = {
            ...newOrder.articles[existingArticleIndex],
            quantity: data[`quantity-${articleId}`],
          };
        }
        let newPrice = 0;
        let newPriceWithTaxes = 0;
        newOrder.articles.forEach((article) => {
          const totalPrice = article?.price * article.quantity;
          const totalPriceWithTaxes = totalPrice + totalPrice * article?.taxes;
          newPrice = newPrice + totalPrice;
          newPriceWithTaxes = newPriceWithTaxes + totalPriceWithTaxes;
        });
        newOrder = {
          ...newOrder,
          price: newPrice,
          priceWithTaxes: newPriceWithTaxes,
        };
        handleSuccessUpdateArticle(newOrder);
      }
    } else {
      setError(`quantity-${articleId}`, {
        type: "custom",
        message: "",
      });
    }
  }

  //Order

  function handleSuccessSavedOrder() {
    setCurrentOrder(null);
    reset();
    resetNewProduct();
    toast.success("Order saved successfully");
  }

  function handleSaveOrder() {
    currentOrder &&
      newOrder({ order: currentOrder, success: handleSuccessSavedOrder });
  }

  function handleCancelOrder() {
    setCurrentOrder(null);
    reset();
    resetNewProduct();
    toast.success("Order cancelled successfully");
  }

  function handleShowCancelOrderDialog() {
    setShowCancelOrder(true);
  }

  function handleCloseCancelOrderDialog() {
    setShowCancelOrder(false);
  }

  //products
  function handleProducts(productsData: ProductsModel) {
    setProducts(productsData.data);
  }

  useEffect(() => {
    getAllProducts({ success: handleProducts });
  }, []);

  return {
    handleSubmit,
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
    handleSaveOrder,

    showCancelOrder,
    handleCancelOrder,
    handleShowCancelOrderDialog,
    handleCloseCancelOrderDialog,
  };
}
