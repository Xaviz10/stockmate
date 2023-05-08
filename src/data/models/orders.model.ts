import { OrderEntity } from "../../domain/entities";

export interface OrdersModel {
  data: Array<OrderEntity>;
}

export interface OrderModel {
  data: OrderEntity;
}
