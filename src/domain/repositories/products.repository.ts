import { ProductEntity } from "../entities";
import { handleResponse } from "../shared";
export interface productsInput extends handleResponse {
  filter: {
    reference?: string;
    page?: number;
    limit?: number;
  };
}

export interface productByIdInput extends handleResponse {
  id: number;
}

export interface newProductInput extends handleResponse {
  product: Omit<ProductEntity, "id">;
}

export interface productInput extends handleResponse {
  product: ProductEntity;
}

export interface ProductsRepository {
  getAllProducts({ success, error }: handleResponse): void;
  getProducts({ filter, success, error }: productsInput): void;
  getProductById({ id, success, error }: productByIdInput): void;
  postNewProduct({ product, success, error }: newProductInput): void;
  putEditProduct({ product, success, error }: productInput): void;
  deleteProduct({ id, success, error }: productByIdInput): void;
}
