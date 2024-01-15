import * as yup from "yup";

export const schema = yup.object().shape({
  cardHolderName: yup
    .string()
    .required("Name can't be blank")
    .matches(/^[a-zA-Z\s]*$/, "Name can't contain numbers")
    .max(99, "Can't be more than 99"),
  cardNumber: yup
    .number()
    .typeError("Wrong format, numbers only")
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .min(19, "Incomplete card number")
    .required("Number can't be blank"),
  expDateMM: yup
    .number()
    .typeError("Wrong format, numbers only")
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .min(1, "Month can't be less than 1")
    .max(12, "Month can't be more than 12")
    .required("Month can't be blank"),
  expDateYY: yup
    .number()
    .typeError("Wrong format, numbers only")
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .min(new Date().getFullYear() % 2000, "Invalid date")
    .max(99, "Invalid date")
    .required("Year can't be blank"),
  cvc: yup
    .string()
    .typeError("Wrong format, numbers only")
    .matches(/[0-9]{3}/, "Must contains 3 numbers")
    .required("Can't be blank"),
});

// can't use .matches with type number!
