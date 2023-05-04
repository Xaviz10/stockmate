import * as yup from "yup";

export const alphaLetterSchema = yup
  .string()
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ,.'-]+$|^$/i, "Sólo debe contener letras");

export const emailSchema = yup.string().email("Ingresa un e-mail válido");

export const passwordSchema = yup
  .string()
  .required("Campo requerido")
  .matches(/^.{7,20}$/, "Debe contener entre 7 a 20 caracteres")
  /* .matches(
    /^(?=.*[a-zA-Z]{5,})(?=.*[0-9]{2,})/,
    "Debe incluir 5 letras y 2 caracteres numéricos"
  ) */
  .matches(
    /^((?:[\S]*?[a-zA-Z][\S]*?){5,})/,
    "Debe incluir 5 letras y 2 caracteres numéricos"
  )
  .matches(
    /^((?:[\S]*?[0-9][\S]*?){2,})/,
    "Debe incluir 5 letras y 2 caracteres numéricos"
  )
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])/,
    "La contraseña debe contener al menos una letra mayúscula y una minúscula"
  )
  .matches(/^(?=.*\W)/, "La contraseña debe contener al menos un símbolo");
