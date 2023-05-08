import * as yup from "yup";

export const searchOrderSchema = yup.object({
  search: yup.string().matches(/^$|^[0-9]*$/, "Whitespace is not allowed"),
});
