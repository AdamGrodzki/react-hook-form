"use client";
import React, { useState } from "react";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";
import { Form } from "@/view/Form/form";
import { Success } from "@/view/Success/success";

import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/Schema/validationSchema";
import styles from "@/app/page.module.scss";

export interface IFormInput {
  cardHolderName: string;
  cardNumber: string;
  expDateMM: string;
  expDateYY: string;
  cvc: string;
}

let defaultValues = {
  cardHolderName: "",
  cardNumber: "",
  expDateMM: "",
  expDateYY: "",
  cvc: "",
};

export default function Home() {
  const formMethods = useForm<IFormInput>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    setError,
    watch,
    formState: {
      errors,
      isValid,
      isDirty,
      isSubmitSuccessful,
      isSubmitted,
      isSubmitting,
    },
  } = formMethods;

  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <FormProvider {...formMethods}>
      <div className={styles.parent}>
        <div className={styles.cards}>
          <FrontCard />
          <BackCard />
        </div>
        <div className={styles.form}>
          {!isFormSubmitted && <Form setFormSubmitted={setFormSubmitted} />}
          {isFormSubmitted && <div>{<Success />}</div>}
        </div>
      </div>
    </FormProvider>
  );
}
