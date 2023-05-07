import {
  newProductInput,
  productByIdInput,
  productInput,
  productsInput,
  ProductsRepository,
} from "../../repositories";

export function useCaseProducts(repository: ProductsRepository) {
  return {
    getProducts({ filter, success, error }: productsInput) {
      return repository.getProducts({
        filter,
        success,
        error,
      });
    },
    getProductById({ id, success, error }: productByIdInput) {
      return repository.getProductById({
        id,
        success,
        error,
      });
    },
    newProduct({ product, success, error }: newProductInput) {
      return repository.postNewProduct({
        product,
        success,
        error,
      });
    },
    editProduct({ product, success, error }: productInput) {
      return repository.putEditProduct({
        product,
        success,
        error,
      });
    },
    deleteProduct({ id, success, error }: productByIdInput) {
      return repository.deleteProduct({
        id,
        success,
        error,
      });
    },
  };
}
