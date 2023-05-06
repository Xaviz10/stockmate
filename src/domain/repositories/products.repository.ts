import { handleResponse } from "../shared";
export interface productsInput extends handleResponse {
  id?: number;
  page?: number;
  limit?: number;
}

export interface ProductsRepository {
  getProducts({ id, page, limit, success, error }: productsInput): void;
}
