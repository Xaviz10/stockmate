import {
  ProductsRepository,
  newProductInput,
  productByIdInput,
  productInput,
  productsInput,
} from "../../domain/repositories";
import { httpService } from "../http/services/http";
import { Endpoints } from "./endpoints";
import { ProductModel, ProductsModel } from "../models";

export function productsDataService(): ProductsRepository {
  const { get, post, put, deleteRequest } = httpService();
  return {
    async getProducts({ filter, success, error }: productsInput) {
      const { reference, page = 1, limit = 10 } = filter;
      try {
        const response: ProductsModel = await get(
          `${Endpoints.products}?_page=${page}&_limit=${limit}${
            reference && `&reference=${reference}`
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

    async getProductById({ id, success, error }: productByIdInput) {
      try {
        const response: ProductModel = await get(`${Endpoints.products}/${id}`);
        if (success) {
          success(response.data);
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
    async postNewProduct({ product, success, error }: newProductInput) {
      try {
        const response: ProductModel = await post(
          `${Endpoints.products}`,
          product
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
    async putEditProduct({ product, success, error }: productInput) {
      try {
        const response: ProductModel = await put(
          `${Endpoints.products}/${product.id}`,
          {
            reference: product.reference,
            name: product.name,
            description: product.description,
            price: product.price,
            taxes: product.taxes,
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
    async deleteProduct({ id, success, error }: productByIdInput) {
      try {
        const response: any = await deleteRequest(
          `${Endpoints.products}/${id}`
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
  };
}
