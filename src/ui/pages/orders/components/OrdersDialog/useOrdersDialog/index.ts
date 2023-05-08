import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {
  useCaseOrders,
  useCaseProducts,
} from "../../../../../../domain/useCases";
import {
  ordersDataService,
  productsDataService,
} from "../../../../../../data/services";
import { toast } from "react-hot-toast";
import { productSchema } from "../../../../../validators";
import {
  OrderEntity,
  ProductEntity,
  ProductOrderEntity,
} from "../../../../../../domain/entities";
import { ProductsModel } from "../../../../../../data/models";

export function useOrdersDialog(order: OrderEntity, handleClose?: () => void) {
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

  const { editOrder } = useCaseOrders(ordersDataService());
  const { getAllProducts, newProduct } = useCaseProducts(productsDataService());

  const [enableEdit, setEnableEdit] = useState(false);
  const [products, setProducts] = useState<ProductEntity[] | []>([]);
  const [currentOrder, setCurrentOrder] = useState<OrderEntity | null>(null);
  const [showAddNewProduct, setShowAddNewProduct] = useState(false);

  // add article
  function handleEnableAddArticle() {
    setShowAddNewProduct(true);
  }

  function handleCancelAddArticle() {
    setShowAddNewProduct(false);
    resetNewProduct();
  }

  function handleSuccessAddArticle(newOrder: OrderEntity) {
    toast.success("Article added successfully");
    setShowAddNewProduct(false);
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
    if (currentOrder && newProduct) {
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
      editOrder({ order: newOrder, success: handleSuccessAddArticle });
    }
  }

  function handleSuccessUpdateArticle(newOrder: OrderEntity) {
    toast.success("Article updated successfully");
    setCurrentOrder(newOrder);
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
        editOrder({ order: newOrder, success: handleSuccessUpdateArticle });
      }
    } else {
      setError(`quantity-${articleId}`, {
        type: "custom",
        message: "",
      });
    }
  }

  //Articles
  function handleCurrentORder(orderData: OrderEntity) {
    setCurrentOrder(orderData);
  }

  //products
  function handleProducts(productsData: ProductsModel) {
    setProducts(productsData.data);
  }

  useEffect(() => {
    getAllProducts({ success: handleProducts });
  }, []);
  useEffect(() => {
    handleCurrentORder(order);
  }, [order]);

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
  };
}
