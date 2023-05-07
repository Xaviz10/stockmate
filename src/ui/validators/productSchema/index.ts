import * as yup from "yup";

export const productSchema = yup.object({
  reference: yup
    .string()
    .required("Flied required")
    .matches(/^$|^[a-zA-Z0-9]*$/, "Whitespace is not allowed"),
  name: yup.string().required("Flied required"),
  description: yup.string().required("Flied required"),
  price: yup
    .string()
    .required("Flied required")
    .matches(/^\d+$/, "Taxes should be a decimal number between 0 and 1"),
  taxes: yup
    .string()
    .required("Flied required")
    .matches(
      /^(?:0*(?:\.\d+)?|1(\.0*)?)$/,
      "Taxes should be a decimal number between 0 and 1"
    ),
});
