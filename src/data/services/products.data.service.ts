import { handleResponse } from "../../domain/shared";
import { ProductsRepository, productsInput } from "../../domain/repositories";
import { httpService } from "../http/services/http";
import { Endpoints } from "./endpoints";
import { ProductsModel } from "../models";

export function productsDataService(): ProductsRepository {
  const { get, post, deleteRequest } = httpService();
  return {
    async getProducts({
      id,
      page = 1,
      limit = 10,
      success,
      error,
    }: productsInput) {
      try {
        const response: ProductsModel = await get(
          `${Endpoints.products}?_page=${page}&_limit=${limit}${
            id && `&id=${id}`
          }`
        );
        if (success) {
          success();
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
  };
}
