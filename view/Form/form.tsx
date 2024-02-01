"use client";

import styles from "@/view/Form/form.module.scss";
import { schema } from "../../Schema/validationSchema";

import {
  useController,
  UseControllerProps,
  Controller,
  FieldErrors,
} from "react-hook-form";
import { Input } from "../components/InputHookForm";

import * as yup from "yup";
import cx from "clsx";

import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";

import { IFormInput } from "@/app/page";

import * as React from "react";

interface Props {
  register: UseFormRegister<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  errors: FieldErrors<IFormInput>;
  isValid: boolean;
  setValue: any;
  isDirty: boolean;
  setError: any;
  control: any;
  watch: any;
  setFormSubmitted: (value: boolean) => void;
}

export const Form = ({
  register,
  isDirty,
  isValid,
  setValue,
  control,
  watch,
  handleSubmit,
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

  console.log(watch());

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholderText="e.g Jane Applessed"
        label="Cardholder Name"
        control={control}
        name="cardHolderName"
        rules={{ required: "Name is required" }}
      />
      <Input
        placeholderText="e.g. 1234 5678 9123 0000"
        label="card number"
        name="cardNumber"
        control={control}
        rules={{
          required: "Card number is required",
          maxLength: 19,
        }}
        // onKeyDown={handleSpacesCardNumber}
        // className={cx(styles.inputCardNumber, {
        //   [styles.invalid]: errors.cardNumber,
        // })}
      />
      <div className={styles.wrapper}>
        <div className={styles.wrapperDate}>
          <Input
            placeholderText="MM"
            label="Exp. Date (MM/YY)"
            name="expDateMM"
            control={control}
            rules={{ required: true, maxLength: 2 }}
          />
          <Input
            placeholderText="YY"
            name="expDateYY"
            control={control}
            rules={{
              required: true,
              maxLength: 2,
            }}
          />
        </div>
        <div className={styles.wrapperCVC}>
          <Input
            placeholderText="e.g. 123"
            label="cvc"
            name="cvc"
            control={control}
            rules={{ required: true, maxLength: 3 }}
          />
        </div>
      </div>
      <button
        className={styles.btnSubmit}
        type="submit"
        disabled={!isValid}
        // onClick={() => setFormSubmitted(!isValid)}
        // onClick={() => console.log("click")}
      >
        Confirm
      </button>
    </form>
  );
};
