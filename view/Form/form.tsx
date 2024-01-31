"use client";

import styles from "@/view/Form/form.module.scss";
import { schema } from "../../Schema/validationSchema";

import { useController, UseControllerProps, Controller } from "react-hook-form";
import { Input } from "../components/InputHookForm";

import * as yup from "yup";
import cx from "clsx";

import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";

import { IFormInput } from "@/app/page";
import { useEffect } from "react";
import * as React from "react";
import clsx from "clsx";

interface Props {
  register: UseFormRegister<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  //errors: FieldErrors<IFormInput>;
  isValid: boolean;
  setValue: any;
  isDirty: boolean;
  setFormSubmitted: (value: boolean) => void;
}

// useEffect(() => {
//   console.log("useEffect");
// });

export const Form = ({
  register,
  handleSubmit,
  // errors,
  isDirty,
  isValid,
  setValue,
  setFormSubmitted,
}: Props) => {
  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    e?.preventDefault();
    console.log(data);
    if (e?.type === "submit") setFormSubmitted(true);
  };

  const handleSpacesCardNumber = (e: {
    key: string;
    currentTarget: { value: any };
  }): any => {
    const backspacePressed = e.key !== "Backspace";
    const currentValue = e.currentTarget.value;
    if (backspacePressed) {
      const lengthNoSpaces = currentValue.replace(/ /g, "").length;
      if (
        lengthNoSpaces !== 0 &&
        lengthNoSpaces % 4 === 0 &&
        currentValue.length < 17
      ) {
        setValue("cardNumber", currentValue + " ");
      }
    } else {
      if (currentValue[currentValue.length - 2] === " ") {
        setValue("cardNumber", currentValue.substr(0, currentValue.length - 1));
      }
    }
  };
  const { control } = useForm<IFormInput>({
    defaultValues: {
      cardHolderName: "",
      cardNumber: "",
      expDateMM: "",
      expDateYY: "",
      cvc: "",
    },
    mode: "onChange",
  });
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* <label className={styles.labelCardholderName}>Cardholder Name</label> */}
        <Controller
          control={control}
          name="cardHolderName"
          render={({ field: { onBlur } }) => (
              <Input
                placeholderText="e.g Jane Applessed"
                label="Cardholder Name"
                control={control}
                name="cardHolderName"
                rules={{ required: "Name is required" }}
                // autoFocus={true}
                // placeholder="e.g Jane Applessed"
                // className={cx(styles.inputCardholderName, {
                //   [styles.invalid]: errors.cardHolderName,
                // })}
                // {...register("cardHolderName")}
              />
            )
          }
        />
        {/* {errors.cardHolderName && (
          <p className={styles.error}>{errors.cardHolderName.message}</p>
        )} */}
        {/* <label className={styles.labelCardNumber}>Card Number</label> */}
        <Input
          placeholderText="e.g. 1234 5678 9123 0000"
          label="Card Number"
          name="cardNumber"
          control={control}
          rules={{
            required: "Card number is required",
          }}
          // maxLength={19}
          // placeholder=" e.g. 1234 5678 9123 0000"
          // onKeyDown={handleSpacesCardNumber}
          // className={cx(styles.inputCardNumber, {
          //   [styles.invalid]: errors.cardNumber,
          // })}
          // {...register("cardNumber")}
        />
        {/* {errors.cardNumber && (
          <p className={styles.error}>{errors.cardNumber.message}</p>
        )} */}
        <div className={styles.wrapper}>
          <div className={styles.wrapperDate}>
            {/* <label className={styles.expDate}>Exp. Date (MM/YY) </label> */}
            <Input
              placeholderText="MM"
              label="Exp. Date (MM/YY)"
              name="expDateMM"
              control={control}
              rules={{ required: true, maxLength: 2 }}
              // maxLength={2}
              // placeholder=" MM"
              // className={cx(styles.expMM, {
              //   [styles.invalid]: errors.expDateMM,
              // })}
              // {...register("expDateMM")}
            />
            <Input
              placeholderText="YY"
              name="expDateYY"
              control={control}
              rules={{ required: true, maxLength: 2 }}
              // maxLength={2}
              // placeholder=" YY"
              // className={cx(styles.expYY, {
              //   [styles.invalid]: errors.expDateYY,
              // })}
              // {...register("expDateYY")}
            />
            {/* {(errors.expDateMM && (
              <p className={styles.error}>{errors.expDateMM.message}</p>
            )) ||
              (errors.expDateYY && (
                <p className={styles.error}>{errors.expDateYY.message}</p>
              ))} */}
          </div>
          <div className={styles.wrapperCVC}>
            {/* <label className={styles.labelCVC}>CVC</label> */}
            <Input
              placeholderText="e.g. 123"
              label="CVC"
              name="cvc"
              control={control}
              rules={{ required: true }}
              // maxLength={3}
              // placeholder=" e.g. 123"
              // className={cx(styles.inputCVC, {
              //   [styles.invalid]: errors.cvc && (
              //     <div className="error">{errors.cvc.message}</div>
              //   ),
              // })}
              // {...register("cvc")}
            />
            {/* {errors.cvc && <p className={styles.error}>{errors.cvc.message}</p>} */}
          </div>
        </div>
        <button
          className={styles.btnSubmit}
          type="submit"
          // disabled={!isValid}
          // onClick={() => setFormSubmitted(!isValid)}
        >
          Confirm
        </button>
      </form>
    </>
  );
};
