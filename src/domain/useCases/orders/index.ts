import {
  newOrderInput,
  OrdersRepository,
  orderByIdInput,
  orderInput,
  productsInput,
} from "../../repositories";

export function useCaseOrders(repository: OrdersRepository) {
  return {
    getOrders({ filter, success, error }: productsInput) {
      return repository.getOrders({
        filter,
        success,
        error,
      });
    },
    getOrderById({ id, success, error }: orderByIdInput) {
      return repository.getOrderById({
        id,
        success,
        error,
      });
    },
    newOrder({ order, success, error }: newOrderInput) {
      return repository.postNewOrder({
        order,
        success,
        error,
      });
    },
    editOrder({ order, success, error }: orderInput) {
      return repository.putEditOrder({
        order,
        success,
        error,
      });
    },
    deleteOrder({ id, success, error }: orderByIdInput) {
      return repository.deleteOrder({
        id,
        success,
        error,
      });
    },
  };
}
