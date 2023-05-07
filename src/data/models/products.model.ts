import { ProductEntity } from "../../domain/entities";

export interface ProductsModel {
  data: Array<ProductEntity>;
}

export interface ProductModel {
  data: ProductEntity;
}
