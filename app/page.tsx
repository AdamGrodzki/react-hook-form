"use client";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";

import { Form } from "@/view/Form/form";
import styles from "@/app/page.module.scss";
import { useForm } from "react-hook-form";
import { Success } from "@/view/Success/success";

import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/Schema/validationSchema";

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
  const {
    register,
    handleSubmit,
    setValue,
    control,
    setError,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInput>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [isFormSubmitted, setFormSubmitted] = React.useState(false);

  return (
    <div className={styles.parent}>
      <div className={styles.cards}>
        <FrontCard
          name={watch("cardHolderName")}
          number={watch("cardNumber")}
          expMonth={watch("expDateMM")}
          expYear={watch("expDateYY")}
        />
        <BackCard cvc={watch("cvc")} />
      </div>
      <div className={styles.form}>
        {!isFormSubmitted && (
          <Form
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            setValue={setValue}
            isDirty={isDirty}
            setFormSubmitted={setFormSubmitted}
            control={control}
            watch={watch}
            setError={setError}
          />
        )}
        {isFormSubmitted && <div>{<Success />}</div>}
      </div>
    </div>
  );
}
