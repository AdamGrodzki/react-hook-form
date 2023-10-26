"use client";

import Image from "next/image";
import styles from "@/view/Form/form.module.scss";
import { ChangeEvent } from "react";

import cx from "clsx";

import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
  useFormContext,
} from "react-hook-form";

interface IFormInput {
  cardHolderName: string;
  cardNumber: number;
  expDateMM: number;
  expDateYY: number;
  CVC: number;
}

// const {
//   cardHolderName,
//   setCardHolderName,
//   cardNumber,
//   setCardNumber,
//   expDateMM,
//   setExpDateMM,
//   expDateYY,
//   setExpDateYY,
//   confirmed,
//   setConfirmed,
//   CVC,
//   setCVC,
// } = useFormContext();

interface Props {
  register: UseFormRegister<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  console.log(watch("cardHolderName"));
  console.log(watch("cardNumber"));
  console.log(watch("expDateMM"));
  console.log(watch("expDateYY"));
  console.log(watch("CVC"));

  const handleCardHolderName = (e: ChangeEvent<HTMLInputElement>) => {
    // setCardHolderName(e.target.value);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelCardholderName}>Cardholder Name</label>
        <input
          className={cx(styles.inputCardholderName, {
            [styles.invalid]: errors.cardHolderName,
          })}
          // onChange={handleCardHolderName}
          placeholder="e.g. Jane Aplleseed"
          {...register("cardHolderName", { required: true })}
        />
        <label className={styles.labelCardNumber}>Card Number</label>
        <input
          className={cx(styles.inputCardNumber, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          {...register("cardNumber", { required: true })}
        />
        <label className={styles.expDate}>Exp. Date (MM/YY) </label>
        <input
          className={cx(styles.expMM, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="MM"
          maxLength={2}
          {...register("expDateMM", { required: true })}
        />
        <input
          className={cx(styles.expYY, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="YY"
          maxLength={2}
          {...register("expDateYY", { required: true })}
        />
        <label className={styles.labelCVC}>CVC</label>
        <input
          className={cx(styles.inputCVC, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="e.g. 123"
          maxLength={3}
          {...register("CVC", { required: true })}
        />
        <button className={styles.btnSubmit} type="submit">
          Confirm
        </button>
      </form>
    </>
  );
};
