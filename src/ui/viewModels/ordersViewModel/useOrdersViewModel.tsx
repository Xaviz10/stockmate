export function useOrdersViewModel() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
    },
    {
      field: "price",
      headerName: "SUBTOTAL",
      flex: 0.4,
    },
    // {
    //   field: "description",
    //   headerName: "DESCRIPTION",
    //   flex: 0.3,
    // },
    {
      field: "priceWithTaxes",
      headerName: "TOTAL",
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
      articles: [
        {
          id: 2,
          reference: "2a",
          name: "Product 2222234234234234234",
          description: "Description product 2",
          price: 2000,
          taxes: 0.2,
        },
        {
          id: 2,
          reference: "2a",
          name: "Product 2222234234234234234",
          description: "Description product 2",
          price: 2000,
          taxes: 0.2,
        },
      ],
      name: "Product 1",
      description: "Description product 1",
      price: 1000,
      priceWithTaxes: 1100,
    },
    {
      id: 2,
      articles: [
        {
          id: 2,
          reference: "2a",
          name: "Product 2222234234234234234",
          description: "Description product 2",
          price: 2000,
          taxes: 0.2,
        },
        {
          id: 2,
          reference: "2a",
          name: "Product 2222234234234234234",
          description: "Description product 2",
          price: 2000,
          taxes: 0.2,
        },
      ],
      name: "Product 1",
      description: "Description product 1",
      price: 1000,
      priceWithTaxes: 1100,
    },
    {
      id: 3,
      articles: [
        {
          id: 2,
          reference: "2a",
          name: "Product 2222234234234234234",
          description: "Description product 2",
          price: 2000,
          taxes: 0.2,
        },
        {
          id: 2,
          reference: "2a",
          name: "Product 2222234234234234234",
          description: "Description product 2",
          price: 2000,
          taxes: 0.2,
        },
      ],
      name: "Product 1",
      description: "Description product 1",
      price: 1000,
      priceWithTaxes: 1100,
    },
  ];
  return { columns, rows };
}
