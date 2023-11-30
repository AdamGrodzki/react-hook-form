"use client";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";

import { Form } from "@/view/Form/form";
import styles from "@/app/page.module.scss";
import { useForm } from "react-hook-form";
import { Success } from "@/view/Success/success";

import React from "react";

export interface IFormInput {
  cardHolderName: string;
  cardNumber: number;
  expDateMM: number;
  expDateYY: number;
  cvc: number;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm<IFormInput>({
    // defaultValues: { expDateMM: 0o0, expDateYY: 0o0},
  });
  const [isFormSubmitted, setFormSubmitted] = React.useState(false);

  return (
    <div className={styles.homeBackground}>
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
            setFormSubmitted={setFormSubmitted}
          />
        )}
        {isFormSubmitted && <div style={{ color: "red" }}>Success</div>}
      </div>
    </div>
  );
}
