import { FieldValues, useForm } from "react-hook-form";
import { searchOrderSchema } from "../../validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components";
import { DeleteForever, Visibility } from "@mui/icons-material";
import { OrderEntity } from "../../../domain/entities";
import { useEffect, useState } from "react";
import { OrdersModel } from "../../../data/models";
import { useCaseOrders } from "../../../domain/useCases";
import { ordersDataService } from "../../../data/services";
import { toast } from "react-hot-toast";

export function useOrdersViewModel() {
  const { getOrders, deleteOrder } = useCaseOrders(ordersDataService());

  const {
    handleSubmit,
    control,
    resetField,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(searchOrderSchema) });

  const [filter, setFilter] = useState({ id: "", page: 1, limit: 10 });
  const [orders, setOrders] = useState<OrderEntity[] | []>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderEntity | null>(null);
  const [showDialogOrder, setShowDialogOrder] = useState(false);
  const [showDialogDeleteOrder, setShowDialogDeleteOrder] = useState(false);

  /*******handlers********/
  // Dialog Edit
  function handleDialogOrderData(productData: OrderEntity) {
    setSelectedOrder(productData);
    setShowDialogOrder(true);
    setShowDialogDeleteOrder(false);
  }

  function handleCloseDialog() {
    setShowDialogOrder(false);
    setSelectedOrder(null);
    getOrders({ filter, success: handleOrders });
  }

  // Delete product

  function handleSuccessDeleteOrder() {
    toast.success("Order deleted successfully");
    getOrders({ filter, success: handleOrders });
    setSelectedOrder(null);
  }

  function handleCancelDeleteOrder() {
    getOrders({ filter, success: handleOrders });
    setSelectedOrder(null);
  }

  function handleDeleteOrder() {
    selectedOrder &&
      deleteOrder({
        id: selectedOrder.id,
        success: handleSuccessDeleteOrder,
      });
  }

  function handleShowDeleteOrderDialog(productData: OrderEntity) {
    setSelectedOrder(productData);
    setShowDialogDeleteOrder(true);
  }

  //orders
  function handleOrders(ordersData: OrdersModel) {
    setOrders(ordersData.data);
  }

  function handleApplyFilter(data: FieldValues) {
    const filterToApply = {
      id: data.search,
      page: 1,
      limit: 10,
    };
    setFilter(filterToApply);
    getOrders({ filter: filterToApply, success: handleOrders });
  }

  function handleResetFilter() {
    const filterToApply = { id: "", page: 1, limit: 10 };
    setFilter(filterToApply);
    getOrders({ filter: filterToApply, success: handleOrders });
    resetField("search");
  }

  useEffect(() => {
    getOrders({ filter, success: handleOrders });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
    },
    {
      field: "price",
      headerName: "SUBTOTAL",
      flex: 0.2,
    },

    {
      field: "priceWithTaxes",
      headerName: "TOTAL",
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
            onClick={() => handleDialogOrderData(cellValues.row as OrderEntity)}
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
              handleShowDeleteOrderDialog(cellValues.row as OrderEntity)
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
  };
}
