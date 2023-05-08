import { useEffect, useState } from "react";
import { productsDataService } from "../../../data/services";
import { useCaseProducts } from "../../../domain/useCases";
import { ProductEntity } from "../../../domain/entities";
import { ProductsModel } from "../../../data/models";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchProductSchema } from "../../validators";
import { Button } from "../../components";
import { Visibility, DeleteForever } from "@mui/icons-material";
import { toast } from "react-hot-toast";
export function useProductsViewModel() {
  const { getProducts, deleteProduct } = useCaseProducts(productsDataService());

  const {
    handleSubmit,
    control,
    resetField,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(searchProductSchema) });

  const [filter, setFilter] = useState({ reference: "", page: 1, limit: 10 });
  const [products, setProducts] = useState<ProductEntity[] | []>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductEntity | null>(
    null
  );
  const [showDialogProduct, setShowDialogProduct] = useState(false);
  const [showDialogDeleteProduct, setShowDialogDeleteProduct] = useState(false);

  /*******handlers********/
  // Dialog Edit
  function handleDialogProductData(productData: ProductEntity) {
    setSelectedProduct(productData);
    setShowDialogProduct(true);
    setShowDialogDeleteProduct(false);
  }

  function handleCloseDialog() {
    setShowDialogProduct(false);
    setSelectedProduct(null);
    getProducts({ filter, success: handleProducts });
  }

  // Delete product

  function handleSuccessDeleteProduct() {
    toast.success("Product deleted successfully");
    getProducts({ filter, success: handleProducts });
    setSelectedProduct(null);
  }

  function handleCancelDeleteProduct() {
    getProducts({ filter, success: handleProducts });
    setSelectedProduct(null);
  }

  function handleDeleteProduct() {
    selectedProduct &&
      deleteProduct({
        id: selectedProduct.id,
        success: handleSuccessDeleteProduct,
      });
  }

  function handleShowDeleteProductDialog(productData: ProductEntity) {
    setSelectedProduct(productData);
    setShowDialogDeleteProduct(true);
  }

  //products
  function handleProducts(productsData: ProductsModel) {
    setProducts(productsData.data);
  }

  function handleApplyFilter(data: FieldValues) {
    const filterToApply = {
      reference: data.search as string,
      page: 1,
      limit: 10,
    };
    setFilter(filterToApply);
    getProducts({ filter: filterToApply, success: handleProducts });
  }

  function handleResetFilter() {
    const filterToApply = { reference: "", page: 1, limit: 10 };
    setFilter(filterToApply);
    getProducts({ filter: filterToApply, success: handleProducts });
    resetField("search");
  }

  useEffect(() => {
    getProducts({ filter, success: handleProducts });
  }, []);

  const columns = [
    {
      field: "reference",
      headerName: "REFERENCE",
      flex: 0.2,
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 0.4,
    },
    {
      field: "price",
      headerName: "PRICE",
      flex: 0.2,
    },
    {
      field: "viewMore",
      sortable: false,
      headerName: "",
      flex: 0.1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      disableColumnSelector: true,
      renderCell: (cellValues: any) => {
        return (
          <Button
            onClick={() =>
              handleDialogProductData(cellValues.row as ProductEntity)
            }
          >
            <Visibility color="primary" />
          </Button>
        );
      },
    },
    {
      field: "delete",
      sortable: false,
      headerName: "",
      flex: 0.1,
      disableColumnMenu: true,
      disableColumnFilter: true,
      disableColumnSelector: true,
      renderCell: (cellValues: any) => {
        return (
          <Button
            onClick={() =>
              handleShowDeleteProductDialog(cellValues.row as ProductEntity)
            }
          >
            <DeleteForever color="error" />
          </Button>
        );
      },
    },
  ];

  return {
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
  };
}
