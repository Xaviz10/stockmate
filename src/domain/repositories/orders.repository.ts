import { OrderEntity } from "../entities";
import { handleResponse } from "../shared";
export interface ordersInput extends handleResponse {
  filter: {
    id?: number | string;
    page?: number;
    limit?: number;
  };
}

export interface orderByIdInput extends handleResponse {
  id: number | string;
}

export interface newOrderInput extends handleResponse {
  order: Omit<OrderEntity, "id">;
}

export interface orderInput extends handleResponse {
  order: OrderEntity;
}

export interface OrdersRepository {
  getOrders({ filter, success, error }: ordersInput): void;
  getOrderById({ id, success, error }: orderByIdInput): void;
  postNewOrder({ order, success, error }: newOrderInput): void;
  putEditOrder({ order, success, error }: orderInput): void;
  deleteOrder({ id, success, error }: orderByIdInput): void;
}
