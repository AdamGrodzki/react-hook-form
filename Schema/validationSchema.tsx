import * as yup from "yup";

export const schema = yup.object().shape({
  cardHolderName: yup
    .string()
    .required("Name can't be blank")
    .matches(/^[a-zA-Z\s]*$/, "Name can't contain numbers")
    .min(2, "Enter your name as it appears on your card")
    .max(99, "Can't be more than 99 charackters/letters"),
  cardNumber: yup
    .string()
    .matches(/^[\d ]*$/, "card number must contains digits")
    .length(19, "card number must contains 19 digits")
    .typeError("Wrong format, numbers only")
    .required("Number can't be blank"),
  expDateMM: yup
    .string()
    .required("Month can't be blank")
    .typeError("Wrong format, numbers only")
    .min(1, "Month can't be less than 1")
    .max(12, "Month can't be more than 12"),
  expDateYY: yup
    .string()
    .typeError("Wrong format, numbers only")
    .required("Year can't be blank")
    // .min(new Date().getFullYear() % 2000, "Invalid date")
    .max(99, "Invalid date"),

  cvc: yup
    .string()
    .matches(/^[\d ]*$/, "cvc must contains 3 digits")
    .length(3, "cvc must contains 3 digits")
    .typeError("Wrong format, numbers only")
    .test("cvc must contains 3 digits", (number) => String(number).length === 3)
    .required("Can't be blank"),
});
