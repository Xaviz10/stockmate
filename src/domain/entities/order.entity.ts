import { ProductEntity } from "./product.entity";

export interface OrderEntity {
  id: string | number;
  price: number;
  priceWithTaxes: number;
  articles: ProductOrderEntity[];
}

export interface ProductOrderEntity extends ProductEntity {
  quantity: number;
}
