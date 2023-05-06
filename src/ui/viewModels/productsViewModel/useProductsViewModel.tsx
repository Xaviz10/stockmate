import { useEffect } from "react";
import { productsDataService } from "../../../data/services";
import { useCaseProducts } from "../../../domain/useCases";

export function useProductsViewModel() {
  const { getProducts } = useCaseProducts(productsDataService());

  useEffect(() => {
    getProducts({ success: () => {} });
  }, []);

  const columns = [
    {
      field: "reference",
      headerName: "REFERENCE",
      flex: 0.3,
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 0.4,
    },
    // {
    //   field: "description",
    //   headerName: "DESCRIPTION",
    //   flex: 0.3,
    // },
    {
      field: "price",
      headerName: "PRICE",
      flex: 0.3,
    },
    // {
    //   field: "taxes",
    //   headerName: "TAXES",
    //   flex: 0.1,
    // },
  ];

  const rows = [
    {
      id: 1,
      reference: "1a",
      name: "Product 1",
      description: "Description product 1",
      price: 1000,
      taxes: 0.1,
    },
    {
      id: 2,
      reference: "2a",
      name: "Product 2222234234234234234",
      description: "Description product 2",
      price: 2000,
      taxes: 0.2,
    },
    {
      id: 3,
      reference: "3a",
      name: "Product 3",
      description: "Description product 3",
      price: 3000,
      taxes: 0.3,
    },
    {
      id: 4,
      reference: "4a",
      name: "Product 4",
      description: "Description product 4",
      price: 4000,
      taxes: 0.4,
    },
  ];
  return { columns, rows };
}
