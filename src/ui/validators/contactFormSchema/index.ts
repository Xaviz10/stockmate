import * as yup from "yup"
import { emailSchema } from "../commonSchemas";

export const contactFormSchema = yup.object({
    contactMatter: yup.string().required("Campo requerido"),
    email: emailSchema.required("Campo requerido"),
    contactProductMatter: yup.string().required("Campo requerido"),
    description: yup.string().required("Campo requerido")
})