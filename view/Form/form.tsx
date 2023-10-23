"use client";

import Image from "next/image";
import styles from "@/view/Form/form.module.scss";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  cardHolderName: string;
  cardNumber: number;
  expDateMM: number;
  expDateYY: number;
  CVC: number;
}

export const Form = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelCardholderName}>CARDHOLDER NAME</label>
        <input
          className={styles.inputCardholderName}
          placeholder="e.g. Jane Aplleseed"
          {...register("cardHolderName")}
        />
        <label className={styles.labelCardNumber}>CARD NUMBER</label>
        <input
          className={styles.inputCardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardNumber")}
        />
        <label className={styles.expDate}>EXP.DATE(MM/YY) </label>
        <input
          className={styles.expMM}
          placeholder="MM"
          {...register("expDateMM")}
        />
        <input
          className={styles.expYY}
          placeholder="YY"
          {...register("expDateYY")}
        />
        <label className={styles.labelCVC}>CVC</label>
        <input
          className={styles.inputCVC}
          placeholder="e.g. 123"
          {...register("CVC")}
        />
        <input className={styles.btnSubmit} type="submit" value="Confirm" />
      </form>
    </>
  );
};
