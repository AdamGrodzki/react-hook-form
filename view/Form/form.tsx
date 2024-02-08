"use client";
import React from "react";

import styles from "@/view/Form/form.module.scss";
import { Input } from "../components/InputHookForm";

import { useFormContext, SubmitHandler } from "react-hook-form";

import { IFormInput } from "@/app/page";

interface Props {
  setFormSubmitted: (value: boolean) => void;
}

export const Form = ({ setFormSubmitted }: Props) => {
  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    e?.preventDefault();
    console.log(data);
    if (e?.type === "submit") setFormSubmitted(true);
  };

  const {
    handleSubmit,
    formState: { isValid, isSubmitted, isDirty, isSubmitSuccessful},
  } = useFormContext<IFormInput>();

  console.log("isSub", isSubmitted);
  console.log("isSubmitSucc", isSubmitSuccessful);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholderText="e.g Jane Applessed"
        label="Cardholder Name"
        name="cardHolderName"
        rules={{ required: "Name is required" }}
      />
      <Input
        placeholderText="e.g. 1234 5678 9123 0000"
        label="card number"
        name="cardNumber"
        rules={{
          required: "Card number is required",
        }}
      />
      <div className={styles.wrapper}>
        <div className={styles.wrapperDate}>
          <Input
            placeholderText="MM"
            label="Exp.Date"
            name="expDateMM"
            rules={{ required: true }}
          />
          <Input
            placeholderText="YY"
            name="expDateYY"
            rules={{
              required: true,
            }}
          />
        </div>
        <div className={styles.wrapperCVC}>
          <Input
            placeholderText="e.g. 123"
            label="cvc"
            name="cvc"
            rules={{ required: true }}
          />
        </div>
      </div>
      <button
        className={styles.btnSubmit}
        type="submit"
        disabled={!isDirty || !isValid}
      >
        Confirm
      </button>
    </form>
  );
};
