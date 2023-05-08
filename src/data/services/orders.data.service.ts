import {
  OrdersRepository,
  orderByIdInput,
  orderInput,
  ordersInput,
  newOrderInput,
} from "../../domain/repositories";
import { httpService } from "../http/services/http";
import { Endpoints } from "./endpoints";
import { OrderModel, OrdersModel } from "../models";

export function ordersDataService(): OrdersRepository {
  const { get, post, put, deleteRequest } = httpService();
  return {
    async getOrders({ filter, success, error }: ordersInput) {
      const { id, page = 1, limit = 10 } = filter;
      try {
        const response: OrdersModel = await get(
          `${Endpoints.orders}?_page=${page}&_limit=${limit}${
            id && `&id=${id}`
          }`
        );

        if (success) {
          success(response);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },

    async getOrderById({ id, success, error }: orderByIdInput) {
      try {
        const response: OrderModel = await get(`${Endpoints.orders}/${id}`);
        if (success) {
          success(response.data);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
    async postNewOrder({ order, success, error }: newOrderInput) {
      try {
        const response: OrderModel = await post(`${Endpoints.orders}`, order);
        if (success) {
          success(response.data);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
    async putEditOrder({ order, success, error }: orderInput) {
      try {
        const response: OrderModel = await put(
          `${Endpoints.orders}/${order.id}`,
          {
            articles: order.articles,
            price: order.price,
            priceWithTaxes: order.priceWithTaxes,
          }
        );
        if (success) {
          success(response.data);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
    async deleteOrder({ id, success, error }: orderByIdInput) {
      try {
        const response: any = await deleteRequest(`${Endpoints.orders}/${id}`);
        if (success) {
          success(response);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
  };
}
