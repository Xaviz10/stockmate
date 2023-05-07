import * as yup from "yup";

export const searchProductSchema = yup.object({
  search: yup
    .string()
    .matches(/^$|^[a-zA-Z0-9]*$/, "Whitespace is not allowed"),
});
