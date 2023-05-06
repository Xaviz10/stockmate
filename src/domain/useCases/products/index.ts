import { productsInput, ProductsRepository } from "../../repositories";

export function useCaseProducts(repository: ProductsRepository) {
  return {
    getProducts({ id, page, limit, success, error }: productsInput) {
      return repository.getProducts({ id, page, limit, success, error });
    },
  };
}
